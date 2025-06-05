import React, { useEffect, useState, useCallback } from 'react';
import { MapContainer, ImageOverlay, Marker, useMap } from 'react-leaflet';
import { Icon, LatLngBounds } from 'leaflet';
import { markers } from './data';
import { MarkerData } from './types';
import { ContentModal } from './components/Modal/ContentModals';
import 'leaflet/dist/leaflet.css';
import back from './assets/back.svg';
import map from './assets/map.svg';
import khorn1 from './assets/khorn1.png';

// Custom map image dimensions
const MAP_WIDTH = 800;
const MAP_HEIGHT = 450;

const bounds: LatLngBounds = new LatLngBounds([0, 0], [MAP_HEIGHT, MAP_WIDTH]);

// Create an SVG string for the map pin icon
const mapPinSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
`;

const customIcon = new Icon({
  iconUrl: khorn1,
  iconSize: [180, 95],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

const disabledIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(mapPinSvg.replace('currentColor', '#9CA3AF')),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

function MarkerWithZoom({ 
  position, 
  marker,
  onMarkerClick,
  isEnabled,
  mapRef
}: { 
  position: [number, number];
  marker: MarkerData;
  onMarkerClick: (marker: MarkerData, clickPos: { x: number; y: number }) => void;
  isEnabled: boolean;
  mapRef: React.MutableRefObject<L.Map | null>;
}) {
  const handleMarkerClick = (e: L.LeafletMouseEvent) => {
    if (!isEnabled || !mapRef.current) return;
    
    const clickPoint = mapRef.current.latLngToContainerPoint(e.latlng);
    
    mapRef.current.flyTo(position, 4, {
      duration: 1.5
    });
    
    setTimeout(() => {
      onMarkerClick(marker, { x: clickPoint.x, y: clickPoint.y });
    }, 750);
  };

  return (
    <Marker
      position={position}
      icon={isEnabled ? customIcon : disabledIcon}
      eventHandlers={{
        click: handleMarkerClick
      }}
    />
  );
}

function MapBoundsComponent({ mapRef }: { mapRef: React.MutableRefObject<L.Map | null> }) {
  const map = useMap();
  
  useEffect(() => {
    mapRef.current = map;
    map.setMaxBounds(bounds);
    map.fitBounds(bounds);
  }, [map, mapRef]);
  
  return null;
}

export default function CustomMap() {
  const [isClient, setIsClient] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visitedMarkers, setVisitedMarkers] = useState<Set<string>>(new Set(['island1']));
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
  const mapRef = React.useRef<L.Map | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMarkerEnabled = useCallback((marker: MarkerData) => {
    if (marker.requiredVisits.length === 0) return true;
    return marker.requiredVisits.every(id => visitedMarkers.has(id));
  }, [visitedMarkers]);

  const handleMarkerSelect = useCallback((marker: MarkerData, clickPos: { x: number; y: number }) => {
    setVisitedMarkers(prev => new Set([...prev, marker.id]));
    setClickPosition(clickPos);
    setSelectedMarker(marker);
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
    if (mapRef.current) {
      mapRef.current.flyTo([MAP_HEIGHT/2, MAP_WIDTH/2], 2, {
        duration: 1.5
      });
    }
    setTimeout(() => {
      setSelectedMarker(null);
      setClickPosition(null);
    }, 700);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full h-full max-w-full rounded-lg overflow-hidden shadow-2xl">
          <MapContainer
            center={[MAP_HEIGHT/2, MAP_WIDTH/2]}
            zoom={1}
            style={{ height: '100%', width: '100%' }}
            crs={L.CRS.Simple}
            minZoom={1}
            maxZoom={1}
            zoomControl={false}
          >
            <MapBoundsComponent mapRef={mapRef} />
            <ImageOverlay
              bounds={bounds}
              url={map}
            />
            {markers.map((marker) => (
              <MarkerWithZoom
                key={marker.id}
                position={marker.position}
                marker={marker}
                onMarkerClick={handleMarkerSelect}
                isEnabled={isMarkerEnabled(marker)}
                mapRef={mapRef}
              />
            ))}
          </MapContainer>
        </div>
      </div>
      {selectedMarker && (
        <ContentModal
          marker={selectedMarker}
          onClose={handleCloseModal}
          isVisible={isModalVisible}
          clickPosition={clickPosition}
        />
      )}
    </div>
  );
}
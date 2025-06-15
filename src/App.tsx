import React, { useEffect, useState, useCallback } from 'react';
import { MapContainer, ImageOverlay, Marker, useMap } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import { markers } from './data';
import { MarkerData } from './types';
import { ContentModal } from './components/Modal/ContentModals';
import { WelcomeModal } from './components/Modal/WelcomeModal';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { visitMarker, setWelcomeSeen } from './store/gameSlice';
import 'leaflet/dist/leaflet.css';
import back from './assets/back.svg';
import map from './assets/map.svg';
import { GalleryButton } from './UI/GalleryButton';
import { CreatureGallery } from './components/Gallery/CreatureGallery';

// Custom map image dimensions
const MAP_WIDTH = 800;
const MAP_HEIGHT = 450;

const bounds: LatLngBounds = new LatLngBounds([0, 0], [MAP_HEIGHT, MAP_WIDTH]);

export function getMarkerIcon(marker: MarkerData, isEnabled: boolean, isNewlyEnabled: boolean): L.Icon {
  return new L.Icon({
    iconUrl: marker.icon,
    iconSize: marker.iconSize,
    iconAnchor: [90, 85],
    popupAnchor: [0, -85],
    className: `${isEnabled ? '' : 'filtered'} ${isNewlyEnabled ? 'highlighted' : ''}`,
  });
}

export function MarkerWithZoom({
  position,
  marker,
  onMarkerClick,
  isEnabled,
  isNewlyEnabled,
  mapRef,
  zIndexOffset
}: {
  position: [number, number];
  marker: MarkerData;
  onMarkerClick: (marker: MarkerData) => void;
  isEnabled: boolean;
  isNewlyEnabled: boolean;
  mapRef: React.MutableRefObject<L.Map | null>;
  zIndexOffset: number;
}) {
  const handleMarkerClick = (e: L.LeafletMouseEvent) => {
    onMarkerClick(marker);
  };

  return (
    <Marker
      position={position}
      icon={getMarkerIcon(marker, isEnabled, isNewlyEnabled)}
      zIndexOffset={zIndexOffset}
      eventHandlers={{
        click: handleMarkerClick,
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
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const mapRef = React.useRef<L.Map | null>(null);

  const dispatch = useAppDispatch();
  const { visitedMarkers, hasSeenWelcome } = useAppSelector((state) => state.game);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMarkerEnabled = useCallback((marker: MarkerData) => {

    if (marker.requiredVisits.length === 0) return true;
    return marker.requiredVisits.every(id => visitedMarkers.includes(id));
  }, [visitedMarkers]);

  const isNewlyEnabled = useCallback((marker: MarkerData) => {
  if (marker.requiredVisits.length === 0) return false;

  const uniqueVisited = Array.from(new Set(visitedMarkers));
  const uniqueRequired = Array.from(new Set(marker.requiredVisits));

  if (uniqueVisited.length !== uniqueRequired.length) return false;

  return uniqueRequired.every(id => uniqueVisited.includes(id));
}, [visitedMarkers]);

const isGalleryUnlocked = useCallback(() => {
    return visitedMarkers.includes('arcwood');
  }, [visitedMarkers]);

  const handleMarkerSelect = useCallback((marker: MarkerData) => {
    dispatch(visitMarker(marker.id));
    setSelectedMarker(marker);
    setIsModalVisible(true);
  }, [dispatch]);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
    setTimeout(() => {
      setSelectedMarker(null);
    }, 700);
  }, []);

  const handleWelcomeClose = useCallback(() => {
    dispatch(setWelcomeSeen());
  }, [dispatch]);

  const handleOpenGallery = useCallback(() => {
    setIsGalleryVisible(true);
  }, []);

  const handleCloseGallery = useCallback(() => {
    setIsGalleryVisible(false);
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
            {markers.map((marker, index) => (
              <MarkerWithZoom
                key={marker.id}
                position={marker.position}
                marker={marker}
                onMarkerClick={handleMarkerSelect}
                isEnabled={isMarkerEnabled(marker)}
                isNewlyEnabled={isNewlyEnabled(marker)}
                mapRef={mapRef}
                zIndexOffset={index * 100}
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
        />
      )}
      <WelcomeModal
        isVisible={!hasSeenWelcome}
        onClose={handleWelcomeClose}
      />
      <GalleryButton 
        onClick={handleOpenGallery}
        isVisible={isGalleryUnlocked()}
      />
      <CreatureGallery
        isVisible={isGalleryVisible}
        onClose={handleCloseGallery}
      />
    </div>
  );
}
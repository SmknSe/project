import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MarkerData, ContentData } from '../../types';

interface ContentModalProps {
  marker: MarkerData;
  onClose: () => void;
  isVisible: boolean;
  clickPosition?: { x: number; y: number };
}

const PhotoGalleryModal = ({ marker, isVisible, onClose, clickPosition }: ContentModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const content = marker.content as Extract<ContentData, { type: 'photo' }>;
  
  const modalStyle = clickPosition ? {
    transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`
  } : {};

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center
        transition-all duration-700 ease-in-out bg-black
        ${isVisible ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'}`}
      style={{ zIndex: 9999 }}
    >
      <div 
        style={modalStyle}
        className={`w-full max-w-6xl p-4 transition-all duration-700 ease-in-out transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className="relative bg-white rounded-lg overflow-hidden">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-1
                      hover:bg-opacity-70 transition-all"
          >
            <X size={24} />
          </button>

          <div className="relative aspect-video">
            <img
              src={content.images[currentImageIndex].src}
              alt={content.images[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            
            {content.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={() => setCurrentImageIndex(i => i === 0 ? content.images.length - 1 : i - 1)}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full 
                            hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => setCurrentImageIndex(i => i === content.images.length - 1 ? 0 : i + 1)}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full 
                            hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{marker.title}</h2>
            <p className="text-gray-600 mb-4">{marker.description}</p>
            <p className="text-sm text-gray-500">{content.images[currentImageIndex].alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoModal = ({ marker, isVisible, onClose, clickPosition }: ContentModalProps) => {
  const content = marker.content as Extract<ContentData, { type: 'video' }>;
  
  const modalStyle = clickPosition ? {
    transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`
  } : {};

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center
        transition-all duration-700 ease-in-out bg-black
        ${isVisible ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'}`}
      style={{ zIndex: 9999 }}
    >
      <div 
        style={modalStyle}
        className={`w-full max-w-6xl p-4 transition-all duration-700 ease-in-out transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className="relative bg-white rounded-lg overflow-hidden">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-1
                      hover:bg-opacity-70 transition-all"
          >
            <X size={24} />
          </button>

          <div className="aspect-video">
            <video
              controls
              poster={content.thumbnail}
              className="w-full h-full object-cover"
            >
              <source src={content.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{marker.title}</h2>
            <p className="text-gray-600">{marker.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThreeDModal = ({ marker, isVisible, onClose, clickPosition }: ContentModalProps) => {
  const content = marker.content as Extract<ContentData, { type: '3d' }>;
  
  const modalStyle = clickPosition ? {
    transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`
  } : {};

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center
        transition-all duration-700 ease-in-out bg-black
        ${isVisible ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'}`}
      style={{ zIndex: 9999 }}
    >
      <div 
        style={modalStyle}
        className={`w-full max-w-6xl p-4 transition-all duration-700 ease-in-out transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className="relative bg-white rounded-lg overflow-hidden">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-1
                      hover:bg-opacity-70 transition-all"
          >
            <X size={24} />
          </button>

          <div className="aspect-square">
            <model-viewer
              src={content.modelUrl}
              poster={content.previewImage}
              alt={marker.title}
              auto-rotate
              camera-controls
              style={{ width: '100%', height: '100%' }}
            ></model-viewer>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{marker.title}</h2>
            <p className="text-gray-600">{marker.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ContentModal(props: ContentModalProps) {
  switch (props.marker.content.type) {
    case 'photo':
      return <PhotoGalleryModal {...props} />;
    case 'video':
      return <VideoModal {...props} />;
    case '3d':
      return <ThreeDModal {...props} />;
  }
}
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MarkerData, ContentData } from '../../types';
import { useState } from 'react';

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
      className={`fixed inset-0 flex items-center justify-center p-4
        transition-all duration-700 ease-in-out bg-black
        ${isVisible ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'}`}
      style={{ zIndex: 9999 }}
    >
      <div
        style={modalStyle}
        className={`w-full h-full max-w-6xl max-h-full flex flex-col transition-all duration-700 ease-in-out transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden p-4 gap-4">
          {/* Шапка */}
          <div className="flex items-center justify-between text-white px-4 py-3">
            <h2 className="text-lg font-bold">{marker.title}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Картинка */}
          <div className="flex-1 flex items-center justify-center relative">
            <img
              src={content.images[currentImageIndex].src}
              alt={content.images[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Стрелки листания */}
            {content.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={() =>
                    setCurrentImageIndex(i =>
                      i === 0 ? content.images.length - 1 : i - 1
                    )
                  }
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex(i =>
                      i === content.images.length - 1 ? 0 : i + 1
                    )
                  }
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>

          {/* Подпись */}
          <div
            className="text-white px-4 py-3"
            style={{ fontFamily: 'Festive, cursive' }}
          >
            <p>{content.images[currentImageIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoModal = ({ marker, isVisible, onClose, clickPosition }: ContentModalProps) => {
  const content = marker.content as Extract<ContentData, { type: 'video' }>;

  const modalStyle = clickPosition
    ? { transformOrigin: `${clickPosition.x}px ${clickPosition.y}px` }
    : {};

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4
        transition-all duration-700 ease-in-out bg-black
        ${isVisible ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'}`}
      style={{ zIndex: 9999 }}
    >
      <div
        style={modalStyle}
        className={`w-full h-full max-w-6xl max-h-full flex flex-col transition-all duration-700 ease-in-out transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden p-4 gap-4">
          {/* Header */}
          <div className="flex items-center justify-between text-white px-4 py-3">
            <h2 className="text-lg font-bold">{marker.title}</h2>
            <button onClick={onClose} className="text-white hover:text-gray-300 transition">
              <X size={20} />
            </button>
          </div>

          {/* Video Player */}
          <div className="flex-1 flex items-center justify-center relative">
            <video
              key={content.videoUrl}
              controls
              autoPlay
              className="max-w-full max-h-[80vh] object-contain bg-black"
              preload="metadata"
            >
              <source src={content.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description */}
          <div
            className="text-white px-4 py-3"
            style={{ fontFamily: 'Festive, cursive' }}
          >
            <p>{content.description}</p>
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
      return <VideoModal {...props} />;
  }
}
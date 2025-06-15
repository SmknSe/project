import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MarkerData, ContentData } from '../../types';
import { useState, useRef, useEffect } from 'react';
import React from 'react';

interface ContentModalProps {
  marker: MarkerData;
  onClose: () => void;
  isVisible: boolean;
  clickPosition?: { x: number; y: number };
}

const PhotoGalleryModal = ({ marker, isVisible, onClose, clickPosition, children }: React.PropsWithChildren<ContentModalProps>) => {
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
        className={`w-full h-full max-w-6xl max-h-screen flex flex-col transition-all duration-700 ease-in-out transform
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
          <div className="flex-1 flex items-center justify-center relative overflow-hidden min-h-0">
            <img
              src={content.images[currentImageIndex].src}
              alt={content.images[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
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
          {children}
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

const TextModal = ({ marker, isVisible, onClose, clickPosition, children }: React.PropsWithChildren<ContentModalProps>) => {
  const content = marker.content as Extract<ContentData, { type: 'text' }>;
  const modalStyle = clickPosition
    ? { transformOrigin: `${clickPosition.x}px ${clickPosition.y}px` }
    : {};

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        }),
      { threshold: 0.1 }
    );
    containerRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [content]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-700 ease-in-out bg-black
        ${isVisible ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'}`}
      style={{ zIndex: 9999 }}
    >
      <div
        style={modalStyle}
        className={`w-full h-full max-w-4xl max-h-screen flex flex-col transition-all duration-700 ease-in-out transform
        ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className={`relative flex flex-col flex-1 min-h-0 overflow-hidden p-4 gap-4 ${children ? 'mb-20' : ''}`}>
          {/* Шапка */}
          <div className="flex items-center justify-between text-white px-4 py-3">
            <h2 className="text-lg font-bold">{marker.title}</h2>
            <button onClick={onClose} className="text-white hover:text-gray-300 transition">
              <X size={20} />
            </button>
          </div>

          {/* Контент */}
          <div
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 space-y-8 text-white scrollbar-thin scrollbar-thumb-white scrollbar-track-black"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'white black',
            }}
          >
            {content.paragraphs.map((para, index) => (
              para.length > 0 && <div
                key={index}
                className={`fade-in opacity-0 translate-y-10 transition-all duration-700 ease-in-out
                  ${index % 2 === 0 ? 'text-left pr-20' : 'text-right pl-20'}`}
              >
                <p className="text-lg leading-relaxed">{para.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};


const DialogModal = ({ marker, isVisible, onClose, clickPosition, children }: React.PropsWithChildren<ContentModalProps>) => {
  const content = marker.content as Extract<ContentData, { type: 'dialog' }>;
  const modalStyle = clickPosition
    ? { transformOrigin: `${clickPosition.x}px ${clickPosition.y}px` }
    : {};

  const [dialogHistory, setDialogHistory] = useState<
    { id: string; text: string; isUser: boolean }[]
  >([
    {
      id: content.start,
      text: content.nodes.find(n => n.id === content.start)?.text || '',
      isUser: false,
    },
  ]);

  const currentId = dialogHistory[dialogHistory.length - 1]?.id;
  const currentNode = content.nodes.find(n => n.id === currentId);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        }),
      { threshold: 0.1 }
    );
    containerRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [dialogHistory]);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [dialogHistory]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-700 ease-in-out bg-black
        ${isVisible ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'}`}
      style={{ zIndex: 9999 }}
    >
      <div
        style={modalStyle}
        className={`w-full h-full max-w-4xl max-h-screen flex flex-col transition-all duration-700 ease-in-out transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className={`relative flex flex-col flex-1 min-h-0 overflow-hidden p-4 gap-4 ${children ? 'mb-10' : ''}`}>
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

          {/* История диалога */}
          <div
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 text-white scrollbar-thin scrollbar-thumb-white scrollbar-track-black"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'white black',
            }}
          >
            {dialogHistory.map((item, index) => (
              <div
                key={index}
                className={`fade-in opacity-0 translate-y-10 transition-all duration-700 ease-in-out flex
                  ${item.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`inline-block px-4 py-3 rounded-2xl max-w-[70%] break-words 
                    ${item.isUser ? 'bg-white text-black' : 'bg-black text-white border border-white'}`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Варианты ответов */}
          {currentNode && (
            <div className="flex flex-col gap-3 p-4">
              {currentNode.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDialogHistory(prev => [
                      ...prev,
                      { id: '', text: option.text, isUser: true },
                      ...(option.nextId
                        ? [
                          {
                            id: option.nextId,
                            text:
                              content.nodes.find(n => n.id === option.nextId)?.text || '',
                            isUser: false,
                          },
                        ]
                        : []),
                    ]);
                    if (!option.nextId) {
                      setTimeout(onClose, 500);
                    }
                  }}
                  className="px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition text-left"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

const MixedModal = ({ marker, isVisible, onClose, clickPosition }: ContentModalProps) => {
  const content = marker.content as Extract<ContentData, { type: 'mixed' }>;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = content.contents[currentIndex];
  const currentType = currentContent.type;

  const switchTo = (index: number) => setCurrentIndex(index);

  const handleClose = () => {
  setTimeout(() => setCurrentIndex(0), 700);
    onClose();
  };

  return (
    <>
      {currentType === 'photo' && (
        <PhotoGalleryModal
          marker={{ ...marker, content: currentContent }}
          isVisible={isVisible}
          onClose={handleClose}
          clickPosition={clickPosition}
        >
          {/* Кнопка прямо внутри модалки */}
          {content.contents.length > currentIndex+1 && (
            <button
              onClick={() => switchTo(currentIndex+1)}
              className="absolute bottom-4 right-9 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 z-50"
            >
              Продолжить путешествие
            </button>
          )}
        </PhotoGalleryModal>
      )}

      {currentType === 'dialog' && (
        <DialogModal
          marker={{ ...marker, content: currentContent }}
          isVisible={isVisible}
          onClose={handleClose}
          clickPosition={clickPosition}
        >
          {/* Кнопка прямо внутри модалки */}
          {content.contents.length > currentIndex+1 && (
            <button
              onClick={() => switchTo(currentIndex+1)}
              className="absolute bottom-4 right-9 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 z-50"
            >
              Продолжить путешествие
            </button>
          )}
        </DialogModal>
      )}

      {currentType === 'text' && (
        <TextModal
          marker={{ ...marker, content: currentContent }}
          isVisible={isVisible}
          onClose={handleClose}
          clickPosition={clickPosition}
        >
          {/* Кнопка прямо внутри модалки */}
          {content.contents.length > currentIndex+1 && (
            <button
              onClick={() => switchTo(currentIndex+1)}
              className="absolute bottom-4 right-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 z-50"
            >
              Продолжить путешествие
            </button>
          )}
        </TextModal>
      )}
    </>
  );
};

export function ContentModal(props: ContentModalProps) {
  switch (props.marker.content.type) {
    case 'photo':
      return <PhotoGalleryModal {...props} />;
    case 'video':
      return <VideoModal {...props} />;
    case 'text':
      return <TextModal {...props} />;
    case 'dialog':
      return <DialogModal {...props} />;
    case 'mixed':
      return <MixedModal {...props} />;
  }
}
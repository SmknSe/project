import { X, ChevronLeft, ChevronRight, PawPrint } from 'lucide-react';
import { useState, useEffect } from 'react';
import agt from '../../assets/creatures/Agt.jpg';
import anemor from '../../assets/creatures/Anemor.jpg';
import auralis from '../../assets/creatures/Auralis.jpg';
import bunip from '../../assets/creatures/Bunip.jpg';
import faxen from '../../assets/creatures/Faxen.jpg';
import prany from '../../assets/creatures/Prany.jpg';
import sahim from '../../assets/creatures/Sahim.jpg';
import sirenik from '../../assets/creatures/Sea sirenik.jpg';
import silvan from '../../assets/creatures/Silvan.jpg';
import tymanoglot from '../../assets/creatures/Tymanoglot.jpg';
import zlatokrul from '../../assets/creatures/Zlatokrul.jpg';

interface CreatureGalleryProps {
  isVisible: boolean;
  onClose: () => void;
}

interface CreatureImage {
  src: string;
  name: string;
}

const creatureImages: CreatureImage[] = [
  {
    src: agt,
    name: 'Агт',
  },
  {
    src: anemor,
    name: 'Анемор',
  },
  {
    src: auralis,
    name: 'Ауралис',
  },
  {
    src: bunip,
    name: 'Буньип',
  },
  {
    src: faxen,
    name: 'Фахен',
  },
  {
    src: prany,
    name: 'Пряный Веретенник',
  },
  {
    src: sahim,
    name: 'Сахим',
  },
  {
    src: sirenik,
    name: 'Морской Сиреник',
  },
  {
    src: silvan,
    name: 'Сильван',
  },
  {
    src: tymanoglot,
    name: 'Туманоглот',
  },
  {
    src: zlatokrul,
    name: 'Златокрыл',
  },
];

export function CreatureGallery({ isVisible, onClose }: CreatureGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(true);
  const [animatedImages, setAnimatedImages] = useState<boolean[]>([]);

  useEffect(() => {
    if (isVisible && isGridView) {
      setAnimatedImages(new Array(creatureImages.length).fill(false));
      
      creatureImages.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedImages(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 200 + index * 100);
      });
    }
  }, [isVisible, isGridView]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % creatureImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + creatureImages.length) % creatureImages.length);
  };

  const openImageView = (index: number) => {
    setCurrentIndex(index);
    setIsGridView(false);
  };

  const backToGrid = () => {
    setIsGridView(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-lg">
      <div className="absolute inset-0 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center gap-3">
            <PawPrint className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Festive, cursive' }}>
              Галерея существ
            </h2>
          </div>
          <button
            onClick={!isGridView ? backToGrid : onClose}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {isGridView ? (
            /* Grid View */
            <div className="h-full overflow-y-auto p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {creatureImages.map((creature, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                      animatedImages[index] ? 'animate-fadeInScale' : 'opacity-0 scale-90'
                    }`}
                    onClick={() => openImageView(index)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={creature.src}
                          alt={creature.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Festive, cursive' }}>
                          {creature.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Single Image View */
            <div className="h-full flex flex-col">
              <div className="flex-1 relative flex items-center justify-center">
                <button
                  onClick={prevImage}
                  className="absolute left-6 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-300"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <div className="max-w-5xl max-h-full mx-8">
                  <img
                    src={creatureImages[currentIndex].src}
                    alt={creatureImages[currentIndex].name}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>

                <button
                  onClick={nextImage}
                  className="absolute right-6 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-300"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              {/* Image Info */}
              <div className="p-8 backdrop-blur-sm border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Festive, cursive' }}>
                    {creatureImages[currentIndex].name}
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={backToGrid}
                      className="px-6 py-3 border-2 border-white-500 text-white rounded-lg"
                      style={{ fontFamily: 'Festive, cursive' }}
                    >
                      Вернуться в галерею
                    </button>
                    <span className="text-gray-400" style={{ fontFamily: 'Festive, cursive' }}>
                      {currentIndex + 1} из {creatureImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
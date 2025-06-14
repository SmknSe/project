import { PawPrint } from 'lucide-react';

interface GalleryButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export function GalleryButton({ onClick, isVisible }: GalleryButtonProps) {
  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed top-10 right-10 z-[9998] p-4 bg-black 
                text-white rounded-full shadow-2xl hover:shadow-purple-500/25 
                hover:scale-110 transition-all duration-300 border border-white/20
                hover:animate-pulse"
      title="Open Creature Gallery"
    >
      <PawPrint className="w-8 h-8" />
    </button>
  );
}
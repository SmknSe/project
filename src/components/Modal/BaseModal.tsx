import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BaseModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  clickPosition?: { x: number; y: number };
  children: React.ReactNode;
}

export function BaseModal({ isVisible, onClose, title, clickPosition, children }: BaseModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const modalStyle = clickPosition ? {
    transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`
  } : {};

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ease-in-out ${
        isVisible ? 'bg-black/90' : 'bg-black/0 pointer-events-none'
      }`}
    >
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose} 
      />
      <div 
        style={modalStyle}
        className={`relative w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto transition-all duration-700 ease-in-out transform ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-8">
          <h3 className="text-4xl font-bold mb-4">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
import { X } from 'lucide-react';

interface WelcomeModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isVisible, onClose }: WelcomeModalProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="max-w-full p-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Festive, cursive' }}>
            Добро пожаловать в Архипелаг,<br/> где острова — не на карте, а в уме.
          </h1>
          <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Festive, cursive' }}>
            Это не просто сайт.<br/>
            Это продолжение книги, которую вы держите в руках. Её вторая половина.<br/>
            Здесь оживают тени прошлого, шорохи чувств, здесь можно взглянуть на историю героини изнутри — в воспоминаниях, голосах и выборе.<br/>
            Эта история не рассказывает — она раскрывает.<br/>
            И каждый остров откроется только тем, кто готов его принять.
          </p>
          <button
            onClick={onClose}
            className="px-8 py-4 bg-white text-gray-900 text-xl font-semibold rounded-lg 
                      hover:bg-gray-100 transition-colors duration-300"
            style={{ fontFamily: 'Festive, cursive' }}
          >
            Начать путешествие
          </button>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white
                  hover:bg-black/70 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
    </div>
  );
}
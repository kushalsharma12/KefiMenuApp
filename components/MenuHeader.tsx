import React from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';

interface MenuHeaderProps {
    onGoBack: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ onGoBack }) => {
  return (
    <header className="flex items-center justify-between pt-8 pb-4 sm:pt-12 sm:pb-8 px-4 sm:px-8">
      {/* Left Side: Back Button */}
      <div className="flex-1 flex justify-start">
        <button 
          onClick={onGoBack} 
          className="flex items-center gap-2 p-2 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
          aria-label="Go back to landing page"
        >
          <ChevronLeftIcon />
          <span className="hidden sm:inline">Back</span>
        </button>
      </div>

      {/* Center: Title */}
      <div className="flex-shrink-0 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-amber-300 tracking-tight">Kefi</h1>
        <p className="text-gray-300 mt-2 text-base sm:text-lg">Digital Menu</p>
      </div>
      
      {/* Right Side: Spacer to balance layout */}
      <div className="flex-1"></div>
    </header>
  );
};

export default MenuHeader;
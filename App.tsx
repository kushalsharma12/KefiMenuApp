import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import AboutPage from './components/AboutPage';
import type { MenuCategory } from './types';
import { MENU_DATA } from './constants';

type View = 'landing' | 'menu' | 'about';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');

  const renderContent = () => {
    switch (currentView) {
      case 'menu':
        return <Menu menuData={MENU_DATA} onGoBack={() => setCurrentView('landing')} />;
      case 'about':
        return <AboutPage onGoBack={() => setCurrentView('landing')} />;
      case 'landing':
      default:
        return (
          <LandingPage
            onViewMenu={() => setCurrentView('menu')}
            onViewAbout={() => setCurrentView('about')}
          />
        );
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 antialiased">
      {renderContent()}
    </div>
  );
};

export default App;

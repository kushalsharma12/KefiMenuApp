import React, { useState, useRef, useEffect } from 'react';
import type { MenuCategory, Dish } from '../types';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

interface MenuProps {
  menuData: MenuCategory[];
  onGoBack: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuData, onGoBack }) => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0]?.category || '');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -75% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, observerOptions);

    const currentRefs = sectionRefs.current;
    const elements = Object.values(currentRefs);

    elements.forEach((ref) => {
      if (ref instanceof HTMLElement) observer.observe(ref);
    });

    return () => {
      elements.forEach((ref) => {
        if (ref instanceof HTMLElement) observer.unobserve(ref);
      });
    };
  }, [menuData]);

  const handleScrollToCategory = (category: string) => {
    sectionRefs.current[category]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <MenuHeader onGoBack={onGoBack} />

      <nav className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/20">
        <div className="flex space-x-2 px-4 overflow-x-auto no-scrollbar" >
          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          {menuData.map(({ category }) => (
            <button
              key={category}
              onClick={() => handleScrollToCategory(category)}
              className={`py-3 px-4 font-semibold text-sm transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeCategory === category
                  ? 'text-amber-300 border-amber-300'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
      
      <main className="p-4 sm:p-8">
        <div className="space-y-12">
          {menuData.map((category) => (
            <section 
              key={category.category}
              id={category.category}
              ref={(el) => {sectionRefs.current[category.category] = el;}}
              aria-labelledby={`${category.category}-heading`}
              className="scroll-mt-20"
            >
              <h2 id={`${category.category}-heading`} className="font-serif text-3xl md:text-4xl text-amber-100 border-b-2 border-amber-300/20 pb-4 mb-8">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {category.items.map((dish) => (
                  <MenuItem 
                    key={dish.name} 
                    dish={dish} 
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
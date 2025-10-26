import React from 'react';
import { FEATURED_DISHES } from '../constants';
import type { FeaturedDish } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface LandingPageProps {
  onViewMenu: () => void;
  onViewAbout: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onViewMenu, onViewAbout }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-4 relative">
        <picture className="absolute inset-0 w-full h-full">
          <source 
            media="(max-width: 767px)" 
            srcSet="https://ik.imagekit.io/menuapp/Menu%20App/ambiance1.webp?tr=w-800"
          />
          <source 
            media="(min-width: 768px)" 
            srcSet="https://ik.imagekit.io/menuapp/Menu%20App/ambiance1.webp?tr=w-1200"
          />
          <img 
            src="https://ik.imagekit.io/menuapp/Menu%20App/ambiance1.webp?tr=w-1200" 
            alt="The warm and inviting interior of the Kefi restaurant, with soft lighting and elegant decor." 
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl text-amber-300 tracking-tight">Kefi</h1>
          <p className="text-gray-200 mt-4 text-xl sm:text-2xl max-w-2xl">
            An unforgettable dining experience where flavor meets passion.
          </p>
          <div className="mt-8 flex justify-center gap-4 sm:gap-6">
            <button
              onClick={onViewMenu}
              className="inline-block px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
            </button>
            <button
              onClick={onViewAbout}
              className="inline-block px-8 py-4 bg-transparent border-2 border-amber-300 text-amber-300 font-bold rounded-lg hover:bg-amber-300/10 transition-all duration-300"
            >
              About Us
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce z-10">
          <ChevronDownIcon />
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="featured" className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl sm:text-5xl text-amber-100">Featured Dishes</h2>
            <p className="mt-4 text-lg text-gray-400">A taste of our finest creations.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_DISHES.map((dish) => (
              <div key={dish.name} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={`${dish.imageUrl}?tr=w-800`}
                  srcSet={`${dish.imageUrl}?tr=w-400 400w, ${dish.imageUrl}?tr=w-800 800w, ${dish.imageUrl}?tr=w-1200 1200w`}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  alt={dish.name} 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{dish.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-amber-100">Ready to Explore?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Browse our full menu or learn more about our story and what makes Kefi special.
          </p>
          <div className="mt-8 flex justify-center gap-4 sm:gap-6">
            <button
              onClick={onViewMenu}
              className="inline-block px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
            </button>
            <button
              onClick={onViewAbout}
              className="inline-block px-8 py-4 bg-transparent border-2 border-amber-300 text-amber-300 font-bold rounded-lg hover:bg-amber-300/10 transition-all duration-300"
            >
              About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
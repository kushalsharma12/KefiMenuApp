import React from 'react';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';
import PhoneIcon from './icons/PhoneIcon';
import MenuHeader from './MenuHeader';
import { ABOUT_CONTENT } from '../constants';


interface AboutPageProps {
  onGoBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onGoBack }) => {
  const imageUrl = ABOUT_CONTENT.imageUrl;
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
       <MenuHeader onGoBack={onGoBack} />

      <main className="space-y-12 mt-8">
        <section className="text-center">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {ABOUT_CONTENT.story}
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src={`${imageUrl}?tr=w-800`}
              srcSet={`${imageUrl}?tr=w-400 400w, ${imageUrl}?tr=w-800 800w, ${imageUrl}?tr=w-1200 1200w`}
              sizes="(max-width: 767px) 100vw, 50vw"
              alt="Interior of Kefi restaurant" 
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <LocationIcon />
              <div>
                <h3 className="font-semibold text-white text-xl">Location</h3>
                <p>{ABOUT_CONTENT.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ClockIcon />
              <div>
                <h3 className="font-semibold text-white text-xl">Hours</h3>
                {ABOUT_CONTENT.hours.map(line => <p key={line}>{line}</p>)}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon />
              <div>
                <h3 className="font-semibold text-white text-xl">Contact</h3>
                <p>{ABOUT_CONTENT.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-8">
          <a
            href={ABOUT_CONTENT.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-amber-400 text-gray-900 font-bold rounded-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
          >
            Order Online
          </a>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { useTranslation } from 'react-i18next';
import forestSilhouette from '../assets/forest-skyline-silhouette.svg';
import StarryNight from './StarryNight';
import Fireflies from './Fireflies';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative w-full">
      <StarryNight />
      <Fireflies />
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {t('hero.greeting')} <span className="text-blue-400">Blondy Martínez</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-200">
          {t('hero.role')}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img 
          src={forestSilhouette} 
          alt="Forest silhouette" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero; 
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('hero.greeting')} <span className="text-blue-500">Blondy Martínez</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
          {t('hero.role')}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
};

export default Hero; 
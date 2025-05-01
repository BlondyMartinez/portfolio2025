import React from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <a href="#home" className={darkMode ? 'text-white' : 'text-gray-900'}>
              Portfolio
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#about" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              {t('navbar.about')}
            </a>
            <a href="#experience" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              {t('navbar.experience')}
            </a>
            <a href="#projects" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              {t('navbar.projects')}
            </a>
            <a href="#skills" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              {t('navbar.skills')}
            </a>
            <a href="#contact" className={darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              {t('navbar.contact')}
            </a>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                ES
              </button>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
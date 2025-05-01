import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a2434]/80 backdrop-blur-sm shadow-md' : ''
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={`text-gray-300 hover:text-white transition-colors ${
                activeSection === 'about' ? 'text-white font-semibold' : ''
              }`}
            >
              {t('navbar.about')}
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
              className={`text-gray-300 hover:text-white transition-colors ${
                activeSection === 'experience' ? 'text-white font-semibold' : ''
              }`}
            >
              {t('navbar.experience')}
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className={`text-gray-300 hover:text-white transition-colors ${
                activeSection === 'projects' ? 'text-white font-semibold' : ''
              }`}
            >
              {t('navbar.projects')}
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
              className={`text-gray-300 hover:text-white transition-colors ${
                activeSection === 'skills' ? 'text-white font-semibold' : ''
              }`}
            >
              {t('navbar.skills')}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={`text-gray-300 hover:text-white transition-colors ${
                activeSection === 'contact' ? 'text-white font-semibold' : ''
              }`}
            >
              {t('navbar.contact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
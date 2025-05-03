import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import TechBadge from './TechBadge';
import ufolabLogo from '../assets/ufo_agencia_logo.jpeg';
import lolalolitalandLogo from '../assets/lolalolitaland.svg';
import laveladaLogo from '../assets/lavelada.svg';
import StarryNight from './StarryNight';
import UfoIcon from './UfoIcon';
import MagicText from './MagicText';
import BubbleBackground from './BubbleBackground';

const LOGO_MAP = {
  'ufolab': ufolabLogo,
  'lolalolitaland': lolalolitalandLogo,
  'lavelada': laveladaLogo
}

const Experience = () => {
  const { t } = useTranslation();
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});
  const [ufolabHovered, setUfolabHovered] = useState(false);
  const [lolalolitalandHovered, setLolalolitalandHovered] = useState(false);

  const sortByImportance = (contributions: string[]) => {
    return [...contributions].sort((a, b) => {
      const importanceTerms = ['implemented', 'developed', 'created', 'designed', 'enhanced', 'optimized', 'refactored'];
      const aImportance = importanceTerms.some(term => a.toLowerCase().includes(term)) ? 1 : 0;
      const bImportance = importanceTerms.some(term => b.toLowerCase().includes(term)) ? 1 : 0;
      
      if (aImportance !== bImportance) {
        return bImportance - aImportance;
      }
      
      return b.length - a.length;
    });
  };

  return (
    <section id="experience" className="py-20 bg-[#1a2e2a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('experience.title')}</h2>

        <div className="space-y-16">
          {(t('experience.positions', { returnObjects: true }) as Array<any>).map((position, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">{position.title}</h3>
              <div
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden"
                onMouseEnter={position.id === 'ufolab' ? () => setUfolabHovered(true) : undefined}
                onMouseLeave={position.id === 'ufolab' ? () => setUfolabHovered(false) : undefined}
              >
                {position.id === 'ufolab' && (
                  <>
                    <div
                      className={`absolute left-80 top-10 -translate-x-1/2 -translate-y-0 ufo-float`}
                      style={{
                        opacity: ufolabHovered ? 1 : 0,
                        transition: 'opacity 0.5s',
                        width: 80,
                        height: 80,
                        pointerEvents: 'none',
                      }}
                    >
                      <UfoIcon />
                    </div>
                    <div
                      className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 z-0 ${ufolabHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <StarryNight gradient="linear-gradient(75deg,rgba(26, 0, 77, 0.25) 0%, rgba(73, 48, 174, 0.25) 25%, rgba(208, 29, 253, 0.25) 50%, rgba(253, 47, 147, 0.25) 75%, rgba(29, 0, 156, 0.25) 100%)" />
                    </div>
                  </>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  {/* Left: Main Info */}
                  <div className="md:col-span-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:gap-4 md:justify-between">
                        {/* Company & Logo */}
                        <a href={position.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/logo-link">
                          <img src={LOGO_MAP[position.id as keyof typeof LOGO_MAP]} alt="UFOLAB Logo" className="w-12 h-12 rounded-full shadow-lg bg-white p-1 object-contain transition-transform group-hover/logo-link:scale-105" />
                          <h4 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">{position.company}</h4>
                        </a>
                        {/* Period & Location (inline on desktop, stacked on mobile) */}
                        {(position.period || position.location) && (
                          <div className="flex gap-4 mt-1 text-xs md:mt-0 md:ml-2">
                            {position.period && (
                              <span className="text-gray-400">{position.period}</span>
                            )}
                            {position.location && (
                              <span className="flex items-center gap-1 text-blue-300">
                                <svg className="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-7.163-8-10.5A8 8 0 0112 2a8 8 0 018 8.5C20 13.837 16.418 21 12 21z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                {position.location}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-300 mt-2 mb-6">{position.description.trim().endsWith('.') ? position.description : position.description + '.'}</p>
                      <span className="text-sm font-medium text-gray-400">{t('common.technologies')}:</span>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {position.technologies.map((tech: string) => (
                          <TechBadge key={`${position.title}-${tech}`} name={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Right: Responsibilities */}
                  {position.responsibilities && (
                    <div className="md:col-span-1 mt-8 md:mt-0 flex flex-col">
                      <h5 className="font-semibold text-white mb-3">{t('common.responsibilities')}:</h5>
                      <ul className="list-none text-gray-300 space-y-2">
                        {position.responsibilities.map((item: string, respIndex: number) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {item.trim().endsWith('.') ? item : item + '.'}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Open Source Contributions */}
          <div className="group">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">{t('experience.openSource.title')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(t('experience.openSource.items', { returnObjects: true }) as Array<any>).map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => {
                    if (item.id === 'lolalolitaland' || item.id === 'lavelada') {
                      setExpandedProjects((prev) => ({ ...prev, [item.project]: true }));
                      if (item.id === 'lolalolitaland') setLolalolitalandHovered(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.id === 'lolalolitaland' || item.id === 'lavelada') {
                      setExpandedProjects((prev) => ({ ...prev, [item.project]: false }));
                      if (item.id === 'lolalolitaland') setLolalolitalandHovered(false);
                    }
                  }}
                >
                  {item.id === 'lolalolitaland' && (
                    <>
                      {/* Deep sea gradient background */}
                      <div
                        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 z-0 ${lolalolitalandHovered ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br z-0 from-[#0a192f] via-[#0a2342] to-[#0c223a] opacity-95" />
                      </div>
                      {/* Bubbles */}
                      <div className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 z-0 ${lolalolitalandHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <BubbleBackground />
                      </div>
                    </>
                  )}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        {item.id && LOGO_MAP[item.id as keyof typeof LOGO_MAP] && (
                          <img src={LOGO_MAP[item.id as keyof typeof LOGO_MAP]} alt={`${item.project} Logo`} className="w-15 h-15 p-1 object-contain" />
                        )}
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-white">
                            {item.id === 'lolalolitaland' ? (
                              <>
                                <span className={`w-full transition-opacity duration-300 ${expandedProjects[item.project] ? 'opacity-0 hidden' : 'opacity-100'}`}>
                                  {item.project}
                                </span>
                                <span className={`transition-opacity duration-300 ${expandedProjects[item.project] ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                  <MagicText>{item.project}</MagicText>
                                </span>
                              </>
                            ) : (
                              <span className="w-full">{item.project}</span>
                            )}
                          </h4>
                          <p className="text-gray-300">{item.organization}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    <div className="flex flex-col space-y-6">
                      <div className="flex items-center gap-4">
                        {item.website && (
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-400/10 text-blue-400 rounded-lg hover:bg-blue-400/20 transition-colors"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            {t('common.website')}
                          </a>
                        )}
                        {item.repository && (
                          <a
                            href={item.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"/>
                            </svg>
                            {t('common.source')}
                          </a>
                        )}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-400">Technologies:</span>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.technologies.map((tech: string, techIndex: number) => (
                            <TechBadge key={techIndex} name={tech} />
                          ))}
                        </div>
                      </div>
                    </div>
                    {item.contributions && (
                      <div className="mt-6">
                        <h5 className="font-semibold text-white mb-3">
                          {t('common.contributions')}: <span className="text-sm text-gray-400">({item.totalContributions} total)</span>
                        </h5>
                        <ul className="list-none text-gray-300 space-y-2">
                          {item.project === 'Official Website of Lola Lolita Land' ? (
                            <div className="relative">
                              <ul
                                className={`transition-all duration-500 ease-in-out overflow-hidden space-y-2 pb-4 ${expandedProjects[item.project] ? 'max-h-[700px] opacity-100' : 'max-h-[120px] opacity-90'}`}
                              >
                                {sortByImportance(item.contributions)
                                  .slice(0, expandedProjects[item.project] ? item.contributions.length : 10)
                                  .map((contribution: string, contIndex: number) => (
                                    <li key={contIndex} className="flex items-start">
                                      <span className="text-blue-400 mr-2">•</span>
                                      {contribution}
                                    </li>
                                  ))}
                              </ul>
                              {!expandedProjects[item.project] && item.contributions.length > 3 && (
                                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-3 bg-gradient-to-t from-blue-400 to-transparent" />
                              )}
                            </div>
                          ) : (
                            sortByImportance(item.contributions).map((contribution: string, contIndex: number) => (
                              <li key={contIndex} className="flex items-start">
                                <span className="text-blue-400 mr-2">•</span>
                                {contribution}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
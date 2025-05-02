import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import veladaDesktop from '../assets/mockups/lavelada_desktop.webp';
import veladaMobile from '../assets/mockups/lavelada_mobile.webp';
import lolitaDesktop from '../assets/mockups/lolalolitaland_desktop.webp';
import lolitaMobile from '../assets/mockups/lolalolitaland_mobile.webp';
import TechBadge from './TechBadge';

const MOCKUPS = {
  'lavelada': {
    desktop: veladaDesktop,
    mobile: veladaMobile
  },
  'lolalolitaland': {
    desktop: lolitaDesktop,
    mobile: lolitaMobile
  }
}


const Experience = () => {
  const { t } = useTranslation();
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleProject = (projectName: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

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
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0a2434] to-[#1c4c3c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('experience.title')}</h2>

        <div className="space-y-16">
          {(t('experience.positions', { returnObjects: true }) as Array<any>).map((position, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">{position.title}</h3>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{position.company}</h4>
                    <p className="text-gray-300">{position.period}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                    {position.location}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                <div>
                  <span className="text-sm font-medium text-gray-400">Technologies:</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {position.technologies.map((tech: string) => (
                      <TechBadge key={`${position.title}-${tech}`} name={tech} />
                    ))}
                  </div>
                </div>
                {position.responsibilities && (
                  <div className="mt-6">
                    <h5 className="font-semibold text-white mb-3">Responsibilities:</h5>
                    <ul className="list-none text-gray-300 space-y-2">
                      {position.responsibilities.map((item: string, respIndex: number) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Open Source Contributions */}
          <div className="group">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">{t('experience.openSource.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(t('experience.openSource.items', { returnObjects: true }) as Array<any>).map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.project}</h4>
                      <p className="text-gray-300">{item.organization}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  {item.id && MOCKUPS[item.id as keyof typeof MOCKUPS] && (
                    <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-8">
                      <div className="relative">
                        <img 
                          src={MOCKUPS[item.id as keyof typeof MOCKUPS].desktop} 
                          alt={`${item.project} Desktop View`}
                          className="rounded-lg filter drop-shadow-xl h-[450px] w-auto"
                        />
                      </div>
                      <div className="relative">
                        <img 
                          src={MOCKUPS[item.id as keyof typeof MOCKUPS].mobile} 
                          alt={`${item.project} Mobile View`}
                          className="rounded-lg filter drop-shadow-xl h-[400px] w-auto"
                        />
                      </div>
                    </div>
                  )}
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
                          Visit Website
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
                          View Source
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
                        Contributions: <span className="text-sm text-gray-400">({item.totalContributions} total)</span>
                      </h5>
                      <ul className="list-none text-gray-300 space-y-2">
                        {item.project === 'Official Website of Lola Lolita Land' ? (
                          <>
                            {sortByImportance(item.contributions).slice(0, 3).map((contribution: string, contIndex: number) => (
                              <li key={contIndex} className="flex items-start">
                                <span className="text-blue-400 mr-2">•</span>
                                {contribution}
                              </li>
                            ))}
                            {item.contributions.length > 3 && (
                              <>
                                <button 
                                  onClick={() => toggleProject(item.project)}
                                  className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-2"
                                >
                                  {expandedProjects[item.project] ? 'Show Less' : `Show ${item.contributions.length - 3} More`}
                                </button>
                                <div 
                                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    expandedProjects[item.project] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                  }`}
                                >
                                  <ul className="list-none text-gray-300 space-y-2 mt-2">
                                    {sortByImportance(item.contributions).slice(3).map((contribution: string, contIndex: number) => (
                                      <li key={contIndex + 3} className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        {contribution}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            )}
                          </>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
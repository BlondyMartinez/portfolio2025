import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0a2434] to-[#1c4c3c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('experience.title')}</h2>

        <div className="space-y-16 max-w-4xl mx-auto">
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
                    {position.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm hover:bg-blue-400/20 transition-colors"
                      >
                        {tech}
                      </span>
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
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">{t('experience.openSource.title')}</h3>
            <div className="space-y-8">
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
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm hover:bg-blue-400/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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
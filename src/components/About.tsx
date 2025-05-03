import { useTranslation } from 'react-i18next';
import TechBadge from './TechBadge';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  technologies: string[];
}

interface AwardItem {
  title: string;
  event: string;
}

interface HackathonItem {
  position: string;
  event: string;
  technologies: string[];
}

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#1a2e2a] to-[#0a2434]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">{t('about.education.title')}</h3>
            <div className="space-y-6">
              {(t('about.education.items', { returnObjects: true }) as EducationItem[]).map((item, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">{item.degree}</h4>
                  <p className="text-gray-300 mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.year}</p>
                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.technologies.map((tech) => (
                        <TechBadge key={`${item.institution}-${tech}`} name={tech} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">{t('about.awards.title')}</h3>
              <div className="space-y-6">
                {(t('about.awards.items', { returnObjects: true }) as AwardItem[]).map((item, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">{t('about.hackathons.title')}</h3>
              <div className="grid grid-cols-1 gap-6">
                {(t('about.hackathons.items', { returnObjects: true }) as HackathonItem[]).map((item, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2">{item.position} - {item.event}</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.technologies.map((tech) => (
                        <TechBadge key={`${item.event}-${tech}`} name={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
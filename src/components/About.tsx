import { useTranslation } from 'react-i18next';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
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

interface LanguageItem {
  language: string;
  level: string;
}

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t('about.education.title')}</h3>
            <div className="space-y-4">
              {(t('about.education.items', { returnObjects: true }) as EducationItem[]).map((item, index) => (
                <div key={index} className="bg-[var(--card-bg)] p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-[var(--text-primary)]">{item.degree}</h4>
                  <p className="text-[var(--text-secondary)]">{item.institution}</p>
                  <p className="text-[var(--text-secondary)]">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t('about.awards.title')}</h3>
            <div className="space-y-4">
              {(t('about.awards.items', { returnObjects: true }) as AwardItem[]).map((item, index) => (
                <div key={index} className="bg-[var(--card-bg)] p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-[var(--text-primary)]">{item.title}</h4>
                  <p className="text-[var(--text-secondary)]">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t('about.hackathons.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(t('about.hackathons.items', { returnObjects: true }) as HackathonItem[]).map((item, index) => (
              <div key={index} className="bg-[var(--card-bg)] p-4 rounded-lg shadow">
                <h4 className="font-semibold text-[var(--text-primary)]">{item.position} - {item.event}</h4>
                <p className="text-[var(--text-secondary)]">{item.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t('about.languages.title')}</h3>
          <div className="flex space-x-4">
            {(t('about.languages.items', { returnObjects: true }) as LanguageItem[]).map((item, index) => (
              <div key={index} className="bg-[var(--card-bg)] p-4 rounded-lg shadow">
                <p className="text-[var(--text-primary)]">{item.language}</p>
                <p className="text-[var(--text-secondary)]">{item.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
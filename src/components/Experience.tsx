import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">{t('experience.title')}</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{t('experience.positions.frontend.title')}</h3>
            <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-[var(--text-primary)]">{t('experience.positions.frontend.company')}</h4>
                  <p className="text-[var(--text-secondary)]">{t('experience.positions.frontend.period')}</p>
                </div>
                <span className="text-sm font-medium text-[var(--text-secondary)]">{t('experience.positions.frontend.location')}</span>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">{t('experience.positions.frontend.description')}</p>
              <div>
                <span className="text-sm font-medium text-[var(--text-secondary)]">Technologies:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {(t('experience.positions.frontend.technologies', { returnObjects: true }) as string[]).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h5 className="font-semibold text-[var(--text-primary)] mb-2">{t('experience.positions.frontend.responsibilities.title')}</h5>
                <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                  {(t('experience.positions.frontend.responsibilities', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Open Source Contributions */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{t('experience.positions.openSource.title')}</h3>
            <div className="space-y-6">
              {(t('experience.positions.openSource.items', { returnObjects: true }) as Array<any>).map((item, index) => (
                <div key={index} className="bg-[var(--card-bg)] p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-[var(--text-primary)]">{item.project}</h4>
                      <p className="text-[var(--text-secondary)]">{item.organization}</p>
                    </div>
                    <span className="text-sm font-medium text-[var(--text-secondary)]">{item.year}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech: string, techIndex: number) => (
                      <span key={techIndex} className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-full text-sm">
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
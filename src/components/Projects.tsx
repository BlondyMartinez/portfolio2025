import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">{t('projects.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(t('projects.items', { returnObjects: true }))?.map(([key, project]: [string, any]) => (
            <div key={key} className="bg-[var(--card-bg)] p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Features</h4>
                <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                  {project.features?.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--text-primary)] hover:text-[var(--text-secondary)]"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#1c4c3c] to-[#0a2434]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('skills.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(t('skills', { returnObjects: true })).map(([key, category]: [string, any]) => {
            if (key === 'title') return null;
            return (
              <div 
                key={key} 
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-400/10 text-blue-400 rounded-full text-sm hover:bg-blue-400/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
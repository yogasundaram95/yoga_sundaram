import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Analytics & BI",
    skills: ["Power BI", "Tableau", "QuickSight", "DAX", "KPI Dashboards"],
  },
  {
    title: "Programming & Data",
    skills: ["SQL", "Python", "R", "Pandas", "Scikit-learn"],
  },
  {
    title: "Data Platforms & ML",
    skills: ["AWS Redshift", "SAP HANA", "ETL Pipelines", "XGBoost", "LSTM"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-card">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 group-hover:text-gradient transition-all">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-usa-white hover:bg-usa-white hover:text-background transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

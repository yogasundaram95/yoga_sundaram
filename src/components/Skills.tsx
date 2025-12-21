const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "Tools & More",
    skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-gradient-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
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
                    className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
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

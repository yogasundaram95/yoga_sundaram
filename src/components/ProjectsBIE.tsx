import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
}

const ProjectsBIE = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects: Project[] = [
    {
      title: "AI Model Adoption – Panel Time-Series Forecasting",
      description:
        "Integrated 5+ heterogeneous sources (npm, HuggingFace, GitHub, AIID) into automated ingestion pipelines with documented data quality controls, supporting technology adoption forecasting across 75 AI models.",
      tech: ["Python", "R", "pandas", "statsmodels", "ETL", "Data Engineering"],
      year: "2026",
    },
    {
      title: "Digital Divide: Broadband & Social Vulnerability",
      description:
        "Built multi-source SQL and R pipelines joining FCC, CDC, and Microsoft datasets across 3,000+ U.S. counties; visualized broadband disparity insights in interactive Tableau dashboards with parameters and drill-downs.",
      tech: ["R", "Python", "SQL", "Tableau", "ArcGIS", "Data Visualization"],
      year: "2025",
    },
  ];

  return (
    <section id="projects" aria-label="Projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-4xl">
            <div className="mb-12">
              <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
                Portfolio
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Featured
                <br />
                <span className="text-gradient">Projects</span>
              </h2>
            </div>

            <div className="space-y-8">
              {projects.map((project, idx) => (
                <div
                  key={project.title}
                  className="pb-8 border-b border-border last:border-b-0"
                  style={{
                    animation: isVisible ? `fadeUp 0.6s ease-out ${0.1 * idx}s both` : 'none',
                  }}
                >
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-semibold"
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

export default ProjectsBIE;

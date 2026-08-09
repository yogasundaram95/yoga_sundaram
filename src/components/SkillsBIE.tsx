import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Skill {
  category: string;
  items: string[];
}

const SkillsBIE = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills: Skill[] = [
    {
      category: "SQL & Warehousing",
      items: [
        "Advanced SQL",
        "Amazon Redshift",
        "MySQL",
        "SQL Server",
        "Snowflake",
        "Oracle",
        "Dimensional Modeling",
        "Star Schema",
        "ETL/ELT Pipelines",
        "dbt",
      ],
    },
    {
      category: "BI & Visualization",
      items: [
        "Amazon QuickSight",
        "Tableau",
        "Power BI",
        "DAX",
        "Power Query",
        "Advanced Excel",
        "Executive Scorecards",
        "WBR/QBR Reporting",
        "Self-Service Dashboards",
      ],
    },
    {
      category: "Programming & Statistics",
      items: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "R",
        "tidyverse",
        "statsmodels",
        "VBA",
        "Statistical Analysis",
        "Time-Series",
        "Regression",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "Redshift",
        "S3",
        "EC2",
        "Lambda",
        "Azure Fabric",
        "Git",
      ],
    },
    {
      category: "AI & Data Quality",
      items: [
        "LLM-Assisted Analytics",
        "Anomaly Detection",
        "Metric Validation",
        "Data Reconciliation",
        "Data Governance",
        "Automated Validation Checks",
        "Power Automate",
      ],
    },
  ];

  return (
    <section id="skills" aria-label="Skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="mb-12">
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Technical
              <br />
              <span className="text-gradient">Skills</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
                style={{
                  animation: isVisible ? `fadeUp 0.6s ease-out ${0.05 * idx}s both` : 'none',
                }}
              >
                <h3 className="font-display text-xl font-bold text-primary mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <p key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">▸</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBIE;

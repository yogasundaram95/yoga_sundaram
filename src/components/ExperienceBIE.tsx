import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceBIE = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences: ExperienceItem[] = [
    {
      role: "Research Assistant – AI Model Adoption",
      company: "Cleveland State University",
      location: "Cleveland, OH",
      period: "Jan 2026 – Present",
      description: [
        "Engineered a panel time-series dataset (75 AI models, 821 daily observations, 67 features) by mining and integrating heterogeneous sources (npm, HuggingFace, GitHub APIs) with Python and R ETL pipelines.",
        "Designed end-to-end ingestion pipelines with versioned schema scripts automating data collection, transformation, and validation for technology adoption forecasting models.",
        "Investigated and documented cross-source metric discrepancies (package contamination, snapshot bias, contributor-count anomalies) and established data integrity protocols that prevented downstream modeling errors.",
      ],
    },
    {
      role: "Data Analyst & BI (Sales Operations Co-op)",
      company: "Bendix Commercial Vehicle Systems",
      location: "Avon, OH",
      period: "Jan 2025 – Dec 2025",
      description: [
        "Designed automated ETL pipelines extracting from multiple upstream source systems (SharePoint, CRM, SAP HANA), applying SQL transformation and validation logic across 100K+ records with zero-error migration, 2 weeks ahead of schedule.",
        "Built star-schema data models and staging layers in Power BI; defined governance standards (documented KPI definitions, DAX measures, automated validation checks) sustaining 99%+ metric accuracy for leadership reporting.",
        "Built automated SQL reporting pipelines for monthly business reviews serving program managers and sales leadership, reducing recurring report preparation from 6 hours to 25 minutes and improving on-time delivery.",
        "Automated survey and data refresh workflows via Power Automate, saving 2.36 hours/day; resolved data quality issues through EDA and normalization, increasing reporting reliability by 35% and shortening analysis cycles by 50%.",
      ],
    },
    {
      role: "Machine Learning Data Analyst",
      company: "Amazon Development Centre",
      location: "Chennai, India",
      period: "Nov 2019 – Mar 2023",
      description: [
        "Wrote and optimized complex Amazon Redshift SQL transformations and data quality tests across large, multidimensional operational datasets, improving pipeline reliability and contributing to a 40% gain in downstream ML model accuracy.",
        "Designed real-time KPI dashboards in Amazon QuickSight tracking 10+ operational metrics across high-volume streams, cutting reporting lag 40% and enabling self-service metric exploration for non-technical audiences.",
        "Validated and reconciled metrics before leadership reviews; applied statistical analysis and SQL EDA to isolate performance drivers, driving 20% higher customer satisfaction and 15% higher retention.",
        "Led onboarding and best practices for 20+ analysts, standardizing SQL coding patterns, dashboard usage, and data quality SOPs; maintained 99.8% accuracy across 100,000+ records in weekly reporting frameworks.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Gharib Shipping Services LLC",
      location: "Chennai, India",
      period: "Jul 2017 – Oct 2019",
      description: [
        "Conducted exploratory data analysis on 70,000+ historical records using SQL to identify bottlenecks in warehouse and shipping operations, improving efficiency by 15% and reducing monthly costs by $2K.",
        "Independently built and maintained recurring operational reports and data validation frameworks supporting leadership decisions; established data consistency standards across multiple operational systems.",
      ],
    },
  ];

  return (
    <section id="experience" aria-label="Work Experience" className="py-24 lg:py-32 relative overflow-hidden">
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
                Career Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Professional
                <br />
                <span className="text-gradient">Experience</span>
              </h2>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="pb-12 border-b border-border last:border-b-0"
                  style={{
                    animation: isVisible ? `fadeUp 0.6s ease-out ${0.1 * idx}s both` : 'none',
                  }}
                >
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <p className="text-sm text-muted-foreground font-semibold whitespace-nowrap">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground leading-relaxed flex gap-3"
                      >
                        <span className="text-primary font-bold flex-shrink-0 mt-1">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceBIE;

import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const experiences = [
  {
    company: "Bendix Commercial Vehicle Systems",
    role: "Sales Operations Data Analyst & Business Intelligence Co-op",
    location: "Avon, OH",
    period: "Jan 2025 – Present",
    achievements: [
      "Built executive-level Power BI dashboards with standardized KPI definitions ensuring 99%+ data accuracy for leadership reporting",
      "Reduced recurring report preparation time from 6 hours to 25 minutes by automating SQL and Power Query transformations",
      "Orchestrated end-to-end ETL pipelines for large-scale marketing asset migration (100K+ records), eliminating migration errors",
      "Analyzed campaign and engagement data to monitor KPIs, improving campaign visibility and accelerating stakeholder decision-making",
    ],
  },
  {
    company: "Amazon Development Centre",
    role: "Machine Learning Data Analyst",
    location: "Chennai, TN",
    period: "Oct 2020 – Mar 2023",
    achievements: [
      "Applied statistical analysis and data profiling to improve training data quality, contributing to 40% improvement in model accuracy",
      "Built real-time KPI dashboards in QuickSight to monitor throughput, quality, and performance metrics for managers",
      "Extracted and transformed large-scale behavioral datasets using SQL (Amazon Redshift) and Python to support ML performance analysis",
      "Trained and mentored 20+ associates, improving annotation throughput by 10%",
    ],
  },
  {
    company: "Gharib Shipping Services LLC",
    role: "Data Analyst",
    location: "Chennai, TN",
    period: "Jul 2017 – Oct 2019",
    achievements: [
      "Designed comprehensive data collection processes, analyzing 70,000+ rows of shipping data using SQL to identify performance trends",
      "Resulted in 15% efficiency improvement and $2K monthly cost reduction",
      "Established data protocols ensuring data quality and consistency across operational systems",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
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
          <span className="text-usa-red font-display text-sm tracking-widest uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 border-l-2 border-primary/30 hover:border-primary/60 transition-colors group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all" />

                {/* Content card */}
                <div className="pb-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-muted-foreground leading-relaxed flex gap-3"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

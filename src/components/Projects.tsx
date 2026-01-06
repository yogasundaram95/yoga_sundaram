import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Digital Divide Analysis: US Broadband Access Disparities",
    description: "Led comprehensive geospatial study analyzing broadband inequalities across 3,141 U.S. counties by integrating 6 heterogeneous data sources (FCC deployment, CDC vulnerability metrics, Ookla speed tests, USDA classifications). Deployed advanced ML models (Random Forest, XGBoost) and spatial analysis techniques to uncover critical disparity: remote rural areas 6x more likely to lack basic broadband and average 52 Mbps vs. 110 Mbps in metros. Delivered interactive R Markdown dashboards with choropleth maps and statistical visualizations to support evidence-based policy recommendations.",
    tags: ["R", "Spatial Analysis", "Random Forest", "XGBoost", "ggplot2", "R Markdown"],
    image: "DD",
    liveUrl: "https://yogasundaram95.github.io/digital-divide-analysis/",
    githubUrl: "https://github.com/yogasundaram95/digital-divide-analysis",
  },
  {
    title: "Time-Series Stock Prediction Using Ensemble ML Model",
    description: "Led independent research integrating 5+ heterogeneous data sources (financial markets, macroeconomic indicators, sentiment analysis). Designed experimental framework with ensemble ML methods achieving 94% directional accuracy (R² = 0.88) through systematic feature engineering and SHAP analysis.",
    tags: ["Python", "XGBoost", "LSTM", "ARIMA", "Scikit-learn"],
    image: "ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Statistical Modeling for Credit Risk Classification",
    description: "Designed and executed comparative study of classification algorithms (Decision Tree, Neural Networks) for credit risk assessment. Achieved 80-100% accuracy on held-out test set with AUC = 0.814 through rigorous model validation using 10-fold cross-validation and ROC analysis.",
    tags: ["Weka", "R", "SQL", "Neural Networks"],
    image: "CR",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Executive-Level Power BI Dashboards & ETL Automation",
    description: "Built executive-level Power BI dashboards with standardized KPI definitions ensuring 99%+ data accuracy. Reduced recurring report preparation time from 6 hours to 25 minutes by automating SQL and Power Query transformations. Orchestrated end-to-end ETL pipelines for 100K+ records.",
    tags: ["Power BI", "DAX", "SQL", "SAP HANA", "ETL"],
    image: "BI",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
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
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card transition-all duration-500 group-hover:shadow-glow group-hover:border-primary/30 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-primary/5" />
                    <div className="relative h-full flex items-center justify-center">
                      <span className="font-display text-7xl md:text-8xl font-bold text-gradient opacity-30 group-hover:opacity-50 transition-opacity">
                        {project.image}
                      </span>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/20" />
                </div>
              </div>

              {/* Project info */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-usa-white hover:bg-usa-white hover:text-background transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button variant="glow" size="default" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="glow" size="default" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

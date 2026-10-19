export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "VARnet Replication: Variable Star Classification from NASA NEOWISE Light Curves",
    description: "Reimplemented VARnet (Paz, 2024, The Astronomical Journal) from the paper alone: a PyTorch CNN with wavelet and learned Fourier-transform layers that sorts infrared light curves into 4 variability classes. Trained at the paper's scale (1.06M synthetic curves) on an Apple-silicon GPU, reaching macro F1 0.987 on a held-out synthetic test set; the paper's 0.91 is on real sources, which is the next test.",
    tags: ["Python", "PyTorch", "CNN", "Wavelets", "Fourier Transform", "Time Series", "scikit-learn"],
    image: "thumbnails/varnet-card.png",
    githubUrl: "https://github.com/yogasundaram95/varnet-replication",
  },
  {
    title: "AI Model Adoption – Panel Time-Series Forecasting",
    description: "Integrated 5+ heterogeneous sources (npm, HuggingFace, GitHub, AIID) into automated ingestion pipelines with documented data quality controls. Engineered a panel dataset (75 AI models, 821 daily observations, 67 features) using Python and R ETL pipelines for technology adoption forecasting and trend analysis.",
    tags: ["Python", "R", "pandas", "statsmodels", "Redshift", "ETL", "Dimensional Modeling"],
    image: "thumbnails/ai-model-adoption.svg",
  },
  {
    title: "Digital Divide: Broadband & Social Vulnerability",
    description: "Built multi-source SQL and R pipelines joining FCC, CDC, and Microsoft datasets. Visualized broadband disparity insights in interactive Tableau dashboards, identifying connectivity gaps and social vulnerability correlations through geospatial analysis and statistical modeling.",
    tags: ["R", "Python", "SQL", "Tableau", "ArcGIS", "Data Integration", "Geospatial Analysis"],
    image: "thumbnails/broadband-vulnerability.svg",
    githubUrl: "https://github.com/yogasundaram95/digital-divide-analysis",
  },
  {
    title: "SQL Performance Optimization & Query Tuning Portfolio",
    description: "Comprehensive collection of advanced SQL optimization techniques including execution plan analysis, index strategies, query refactoring, and performance benchmarking. Demonstrates real-world optimization of complex dimensional queries on large datasets with measurable improvements in query performance (40%+ speed gains).",
    tags: ["SQL", "Amazon Redshift", "Query Optimization", "Execution Plans", "Index Strategies", "Performance Tuning"],
    image: "thumbnails/sql-portfolio.svg",
    githubUrl: "https://github.com/yogasundaram95/sql-portfolio",
  },
];

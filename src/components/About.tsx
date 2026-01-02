import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "99%+", label: "Data Accuracy" },
    { value: "3.94", label: "GPA" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
              </div>
              <div className="relative h-full flex items-center justify-center p-8">
                <span className="font-display text-8xl md:text-9xl font-bold text-gradient opacity-30">
                  A
                </span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-usa-red rounded-2xl shadow-glow-red" />
          </div>

          {/* Right side - Content */}
          <div>
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming data into
              <br />
              <span className="text-gradient">actionable insights</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Data Scientist with 5+ years of experience transforming complex customer, CRM, and behavioral
                data into clear, actionable insights. Specialize in developing and deploying predictive models
                and advanced analytics (e.g., churn, propensity, and marketing mix/forecasting) to drive campaign
                performance and optimize KPIs, using SQL, Python, and R.
              </p>
              <p>
                Skilled in building executive-level dashboards and automated data workflows in Power BI and
                Tableau to communicate model-driven recommendations to business stakeholders. Hold a Master's
                in Information Systems (3.94 GPA) from Cleveland State University and multiple certifications
                in data analytics and cloud platforms.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
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

export default About;

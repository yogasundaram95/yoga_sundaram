import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" aria-label="About Me" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Left side - Metric cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40%", label: "Query performance improvement", color: "text-primary" },
                { value: "99.8%", label: "Data accuracy & consistency", color: "text-primary" },
                { value: "45%", label: "Faster anomaly detection", color: "text-usa-red" },
                { value: "6+", label: "Years of BI & data experience", color: "text-usa-red" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow flex flex-col justify-between"
                >
                  <span className={`font-display text-4xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                  <span className="text-sm text-muted-foreground mt-2 leading-snug">
                    {metric.label}
                  </span>
                </div>
              ))}
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
              Transforming data
              <br />
              <span className="text-gradient">into actionable insights</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Business Intelligence Engineer with 6+ years of expertise designing scalable data pipelines, building dimensional data models, and creating real-time analytics dashboards. Specialized in SQL optimization, Amazon Redshift, dbt, and cloud data warehousing across SaaS and enterprise environments.
              </p>
              <p>
                Delivered solutions that improved query performance by 40%, achieved 99.8% data accuracy standards, enabled 45% faster anomaly detection, and reduced manual reporting effort through automation. MS in Information Systems from Cleveland State University.
              </p>
            </div>

            {/* Certification badge */}
            <div className="mt-10 pt-10 border-t border-border">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                <span className="text-primary font-semibold">Microsoft Certified</span>
                <span className="text-muted-foreground">DP-700 Fabric Data Engineer Associate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

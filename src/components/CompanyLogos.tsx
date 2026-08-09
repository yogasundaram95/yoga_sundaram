import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Company {
  name: string;
  logo: string;
  alt: string;
}

const CompanyLogos = () => {
  const { ref, isVisible } = useScrollAnimation();

  const companies: Company[] = [
    {
      name: "Cleveland State University",
      logo: `${import.meta.env.BASE_URL}csu-logo.png`,
      alt: "Cleveland State University",
    },
    {
      name: "Bendix Commercial Vehicle Systems",
      logo: `${import.meta.env.BASE_URL}bendix-logo.png`,
      alt: "Bendix Commercial Vehicle Systems",
    },
    {
      name: "Amazon",
      logo: `${import.meta.env.BASE_URL}amazon-logo.png`,
      alt: "Amazon",
    },
    {
      name: "Gharib Shipping Services",
      logo: `${import.meta.env.BASE_URL}gharib-logo.png`,
      alt: "Gharib Shipping Services",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              Worked At
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Companies &amp; <span className="text-gradient">Organizations</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {companies.map((company, idx) => (
              <div
                key={company.name}
                className="flex items-center justify-center p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                style={{
                  animation: isVisible ? `fadeUp 0.6s ease-out ${0.05 * idx}s both` : 'none',
                }}
              >
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-h-20 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;

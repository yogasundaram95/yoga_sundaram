import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "Oct 2024",
    status: "Completed",
  },
  {
    name: "CISA (Certified Information Systems Auditor)",
    issuer: "ISACA",
    date: "Expected Jan 2026",
    status: "In Progress",
  },
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    date: "Dec 2025",
    status: "Expected",
  },
  {
    name: "Oracle Cloud Data Management Certified Foundations Associate",
    issuer: "Oracle",
    date: "Nov 2023",
    status: "Completed",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-card">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Credentials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
        </div>

        {/* Certifications grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-all">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                    <div className="flex items-center gap-2">
                      {cert.status === "Completed" && (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-xs text-primary font-semibold">Completed</span>
                        </>
                      )}
                      {cert.status === "In Progress" && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">
                          In Progress
                        </span>
                      )}
                      {cert.status === "Expected" && (
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-semibold">
                          Expected
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

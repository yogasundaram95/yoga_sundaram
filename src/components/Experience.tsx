import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { experiences } from "../data/experience";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" aria-label="Work Experience" className="py-24 lg:py-32 relative overflow-hidden">
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
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {exp.logo ? (
                          <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center overflow-hidden">
                            <img
                              src={`${import.meta.env.BASE_URL}${exp.logo}`}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                              width={44}
                              height={44}
                            />
                          </div>
                        ) : (
                          <Briefcase className="w-5 h-5 text-usa-white" />
                        )}
                        <span className="font-display text-xl md:text-2xl font-bold text-usa-white">{exp.company}</span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-all">
                        {exp.role}
                      </h3>
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

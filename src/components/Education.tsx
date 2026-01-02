import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Information Systems",
    school: "Cleveland State University",
    location: "Cleveland, OH",
    period: "Aug 2023 – Dec 2025",
    gpa: "3.94/4.00",
    categories: {
      "Business Intelligence": [
        "Business Intelligence Systems",
        "Data Visualization: Theory & Practice",
        "Modern Database Design/Implementation",
        "Enterprise Databases",
        "Enterprise Resource Planning",
      ],
      "Data Science & Analytics": [
        "Machine Learning",
        "Systems Thinking & Modeling",
        "Emerging Technologies in IS",
        "Managing Network/Security Risk",
      ],
      "Systems Analysis": [
        "Systems Analysis Methods",
        "Advanced Systems Analysis & Design",
      ],
    },
  },
  {
    degree: "Bachelor of Technology in Aeronautical Engineering",
    school: "BSA Crescent Institute of Science and Technology",
    location: "Chennai, India",
    period: "Jun 2013 – Jun 2017",
    highlights: [
      "Foundation in analytical and computational problem-solving",
      "Strong mathematical and statistical background",
      "Systems thinking and process optimization",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Academic Background
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        {/* Education cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-1">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    {edu.gpa && (
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">GPA</div>
                        <div className="font-display text-2xl font-bold text-gradient">{edu.gpa}</div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>

                  {edu.categories && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground font-semibold mb-3">
                        Relevant Coursework:
                      </p>
                      {Object.entries(edu.categories).map(([category, courses], catIndex) => (
                        <div key={catIndex}>
                          <h4 className="text-sm font-semibold text-foreground mb-2">{category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {courses.map((course, cIndex) => (
                              <span
                                key={cIndex}
                                className="px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-usa-white hover:bg-usa-white hover:text-background transition-all"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {edu.highlights && (
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-3">
                        Key Focus Areas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-usa-white hover:bg-usa-white hover:text-background transition-all"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

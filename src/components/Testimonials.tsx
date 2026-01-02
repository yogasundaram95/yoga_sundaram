import { Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Michael Grandstaff",
    role: "Technical Project Lead - eCommerce",
    company: "Bendix Commercial Vehicle Systems",
    content: "Yoga consistently brought professionalism, curiosity, and a can-do attitude to every interaction. He played a pivotal role in our digital asset management initiative involving 500,000 eCommerce product images, managing extraction, transfer, and reload workflows end-to-end. Beyond the work, Yoga is a culture builder and an easy collaborator.",
    image: "MG",
  },
  {
    name: "Vivek Aravind",
    role: "Manager, Technology Operations",
    company: "Walmart (Ex-Amazon)",
    content: "Yoga is very dedicated towards his work and has wide knowledge over the domain he handles along with analytic skills which helps in driving business process improvement. He is a go-to person whenever in need.",
    image: "VA",
  },
  {
    name: "Ponraj",
    role: "Data Analyst",
    company: "Amazon Development Centre",
    content: "I had the pleasure of working with Yoga for two years. During that time, he proved to be a highly skilled and experienced analytics professional with a deep understanding of the industry. He is also a highly motivated and results-oriented individual with a strong work ethic.",
    image: "P",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-card">
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
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What People <span className="text-gradient">Say</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Avatar */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <span className="font-display text-xl font-bold text-primary">
                    {testimonial.image}
                  </span>
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <h4 className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-primary font-semibold mt-1">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" aria-label="Testimonials" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-card">
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
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all">
                  <img
                    src={`${import.meta.env.BASE_URL}${testimonial.photo}`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
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
                <p className="text-xs text-muted-foreground mt-1 italic">
                  {testimonial.relationship}
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

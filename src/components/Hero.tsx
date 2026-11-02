import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section aria-label="Introduction" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-24 md:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      {/* A single restrained accent keeps the data-led content in focus. */}
      <div aria-hidden="true" className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl md:h-96 md:w-96" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr),340px] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div>
            {/* Greeting */}
            <p
              className="text-muted-foreground text-lg md:text-xl mb-4 animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              aria-label="Yoga Sundaram Rama Swamy"
            >
              <span className="text-gradient">Yoga Sundaram</span>
              <br />
              <span className="text-gradient">Rama Swamy</span>
            </h1>

            {/* Title */}
            <p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Data Scientist · Business Intelligence
            </p>

            {/* Description */}
            <p
              className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              6+ years across machine learning data, statistical modeling, and business intelligence at Amazon, Bendix (Knorr-Bremse), and Handshake AI. M.S. Information Systems (3.94 GPA). I build reproducible Python, R, and SQL pipelines, models that are measured honestly, and reporting that leadership actually uses.
            </p>

            {/* Selected outcomes */}
            <div
              role="group"
              aria-label="Selected outcomes"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 animate-fade-up opacity-0"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              {[
                { value: "6 hrs → 25 min", label: "report preparation" },
                { value: "99.8%", label: "quality across 100K+ annotations" },
                { value: "0.987", label: "Macro F1 · synthetic test" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 rounded-xl border border-border bg-card/70 px-4 py-3 shadow-card"
                >
                  <div className="font-display text-lg font-bold leading-tight text-primary sm:text-xl">{stat.value}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div
            className="relative mx-auto mt-2 w-40 animate-fade-up opacity-0 sm:w-48 lg:mt-0 lg:w-auto"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Decorative background */}
                <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-primary/15 blur-2xl" />

              {/* Photo container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Yoga Sundaram Rama Swamy - Business Intelligence Engineer"
                  className="w-full h-full object-cover object-top"
                  width={380}
                  height={380}
                  style={{ objectPosition: 'center 50%' }}
                />
              </div>

              {/* Decorative elements */}
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-16 w-16 rounded-2xl border-2 border-usa-red/80 lg:-bottom-6 lg:-right-6 lg:h-24 lg:w-24 lg:rounded-3xl" />
              <div aria-hidden="true" className="absolute -top-4 -left-4 h-12 w-12 rounded-xl border border-usa-white/40 lg:-top-6 lg:-left-6 lg:h-16 lg:w-16 lg:rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 md:bottom-8"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 rounded-md p-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <ArrowDown aria-hidden="true" className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

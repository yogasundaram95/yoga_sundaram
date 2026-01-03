import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      {/* Blue glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Red glow */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse-glow" style={{ background: 'hsl(0 90% 60% / 0.08)', animationDelay: "0.8s" }} />

      {/* Blue glow bottom */}
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr,380px] gap-12 items-center max-w-6xl mx-auto">
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
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
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
              Data Scientist | Data Analyst
            </p>

            {/* Description */}
            <p
              className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10 animate-fade-up opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              Data Scientist and Data Analyst with 5+ years of experience analyzing customer, CRM, and behavioral data to drive campaign performance and KPI outcomes. Strong background in SQL, Python, Power BI, and Tableau, delivering clear, data-backed insights that support business and senior leadership decisions.
            </p>

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
            className="relative hidden lg:block animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />

              {/* Photo container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Yoga Sundaram Rama Swamy - Data Scientist"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-usa-red rounded-3xl shadow-glow-red" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-usa-white/40 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

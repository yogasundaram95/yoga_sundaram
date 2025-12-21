import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
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
            <span className="text-foreground">Your</span>
            <br />
            <span className="text-gradient">Name Here</span>
          </h1>
          
          {/* Title */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Creative Developer & Designer
          </p>
          
          {/* Description */}
          <p 
            className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            I craft beautiful digital experiences that blend creativity with technical excellence. 
            Passionate about building products that make a difference.
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

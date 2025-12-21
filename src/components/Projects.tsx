import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Project Alpha",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless checkout experience.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "A",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Beta",
    description: "Mobile-first social platform connecting creative professionals. Built with performance and accessibility in mind.",
    tags: ["Next.js", "PostgreSQL", "AWS", "WebSocket"],
    image: "B",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "AI-powered analytics dashboard that transforms complex data into actionable insights with beautiful visualizations.",
    tags: ["Python", "TensorFlow", "D3.js", "FastAPI"],
    image: "G",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card transition-all duration-500 group-hover:shadow-glow group-hover:border-primary/30">
                    <div className="absolute inset-0 bg-primary/5" />
                    <div className="relative h-full flex items-center justify-center">
                      <span className="font-display text-7xl md:text-8xl font-bold text-gradient opacity-30 group-hover:opacity-50 transition-opacity">
                        {project.image}
                      </span>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/20" />
                </div>
              </div>

              {/* Project info */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button variant="glow" size="default" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="default" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

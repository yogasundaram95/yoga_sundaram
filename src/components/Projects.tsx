import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { projects } from "../data/projects";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" aria-label="Featured Projects" className="py-24 lg:py-32 relative overflow-hidden">
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
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Project image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card transition-all duration-500 group-hover:shadow-glow group-hover:border-primary/30 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={600}
                      height={338}
                    />
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
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-usa-white hover:bg-usa-white hover:text-background transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button variant="glow" size="default" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button variant="glow" size="default" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </Button>
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

export default Projects;

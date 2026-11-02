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

        {/* Visual-first project grid keeps the work easy to scan and compare. */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="aspect-video overflow-hidden bg-gradient-card">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={600}
                  height={338}
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-4 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <ul aria-label={`${project.title} technologies`} className="mb-7 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground sm:text-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-auto flex flex-wrap gap-3">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

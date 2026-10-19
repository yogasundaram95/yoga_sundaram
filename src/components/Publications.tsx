import { BookOpen, ExternalLink } from "lucide-react";
import { publications } from "../data/publications";

const Publications = () => (
  <section id="publications" aria-label="Publications" className="py-24 lg:py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <div className="text-center mb-16">
        <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">Research</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          <span className="text-gradient">Publications</span>
        </h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub) => (
          <div key={pub.doi} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{pub.title}</h3>
                <p className="text-sm text-muted-foreground">{pub.authors} ({pub.year})</p>
                <p className="text-sm text-muted-foreground italic mb-2">{pub.venue}</p>
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                  <ExternalLink className="w-3 h-3" /> doi.org/{pub.doi}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;

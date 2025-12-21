import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to discussing 
            new opportunities and creative ideas.
          </p>

          {/* Email CTA */}
          <Button variant="hero" size="xl" asChild className="mb-12">
            <a href="mailto:hello@example.com">
              <Mail className="w-5 h-5" />
              hello@example.com
            </a>
          </Button>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-gradient-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-gradient">YS</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Yoga Sundaram Rama Swamy. All rights reserved.
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <p className="text-muted-foreground text-sm">
              Data Scientist | Turning insights into impact
            </p>
          </div>
          <p className="text-muted-foreground text-xs">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

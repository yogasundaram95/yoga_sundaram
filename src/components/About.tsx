const About = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
              </div>
              <div className="relative h-full flex items-center justify-center p-8">
                <span className="font-display text-8xl md:text-9xl font-bold text-gradient opacity-30">
                  A
                </span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
          </div>

          {/* Right side - Content */}
          <div>
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Turning ideas into
              <br />
              <span className="text-gradient">digital reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer and designer with a keen eye for detail and a love for 
                creating seamless user experiences. My journey in tech started over 5 years ago, 
                and I've been hooked ever since.
              </p>
              <p>
                I specialize in building modern web applications using cutting-edge technologies. 
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing knowledge with the community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

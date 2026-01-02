import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components to reduce initial bundle size
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Skills = lazy(() => import("@/components/Skills"));
const Education = lazy(() => import("@/components/Education"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

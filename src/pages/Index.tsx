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

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
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

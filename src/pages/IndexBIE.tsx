import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroBIE from "@/components/HeroBIE";

// Reuse GTM components but with BIE context
const About = lazy(() => import("@/components/AboutBIE"));
const Experience = lazy(() => import("@/components/ExperienceBIE"));
const Projects = lazy(() => import("@/components/ProjectsBIE"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Skills = lazy(() => import("@/components/SkillsBIE"));
const Education = lazy(() => import("@/components/Education"));
const Certifications = lazy(() => import("@/components/Certifications"));
const CompanyLogos = lazy(() => import("@/components/CompanyLogos"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const IndexBIE = () => {
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
        <HeroBIE />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Skills />
          <Education />
          <Certifications />
          <CompanyLogos />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default IndexBIE;

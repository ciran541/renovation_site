import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Project as ProjectType } from "../components/projects/ProjectDetail";
import ProjectsPageHeader from "../components/projects/ProjectsPageHeader";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCTA from "../components/projects/ProjectsCTA";
import { projects, categories } from "../data/ProjectsData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState<ProjectType[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const location = useLocation();

  // Scroll to top on page load or navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // Trigger on path change

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Existing effect for filtering projects
  useEffect(() => {
    filterProjects(activeFilter);
  }, [activeFilter]);

  // Existing effect for Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, [filteredProjects]);

  const filterProjects = (category: string) => {
    const filtered =
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category);

    setFilteredProjects(filtered);
    setVisibleProjects(filtered);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <ProjectsPageHeader />
      <ProjectFilter
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProjectsGrid visibleProjects={visibleProjects} />
      <ProjectsCTA />
      <Footer />

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Projects;
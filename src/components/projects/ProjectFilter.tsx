
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ProjectFilterProps = {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
};

const ProjectFilter = ({ categories, activeFilter, setActiveFilter }: ProjectFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-10 bg-white border-b border-border">
      <div className="container-custom">
        {/* Desktop Filters */}
        <div className="hidden md:flex justify-center space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-md transition-all ${
                activeFilter === category
                  ? "bg-primary text-white font-medium"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Mobile Filters */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 border border-border rounded-md bg-white"
          >
            <span>{activeFilter} Projects</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
          </button>
          
          {isOpen && (
            <div className="absolute z-20 mt-1 w-full rounded-md border border-border bg-white shadow-md animate-fade-in">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 transition-colors ${
                    activeFilter === category
                      ? "bg-accent/50 text-primary font-medium"
                      : "hover:bg-accent/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilter;

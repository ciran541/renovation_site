
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProjectsCTA = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto reveal">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help transform your space into something extraordinary.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:bg-primary/90 button-hover"
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;

import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Maximize } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For animations
import { LazyLoadImage } from "react-lazy-load-image-component"; // For lazy loading images
import "react-lazy-load-image-component/src/effects/blur.css"; // Lazy load effect
import Lightbox from "yet-another-react-lightbox"; // For gallery lightbox
import "yet-another-react-lightbox/styles.css";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
  area: string;
  longDescription?: string;
  beforeAfter?: {
    beforeImages?: string[];
    afterImages?: string[];
  };
  video?: string;
  galleryImages?: string[];
};

type ProjectDetailProps = {
  projects: Project[];
};

type BeforeAfterComparisonProps = {
  beforeImage: string;
  afterImage: string;
  title: string;
  index: number;
};

const BeforeAfterComparison = ({ beforeImage, afterImage, title, index }: BeforeAfterComparisonProps) => {
  const [beforeImageError, setBeforeImageError] = useState(false);
  const [afterImageError, setAfterImageError] = useState(false);

  // Fallback image in case the provided image fails to load
  const fallbackImage = "https://via.placeholder.com/600x400?text=Image+Not+Found";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group rounded-2xl overflow-hidden shadow-xl mb-8 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Before Image Container */}
        <div className="relative w-full h-[300px] overflow-hidden">
          <img
            src={beforeImageError ? fallbackImage : beforeImage}
            alt={`${title} - Before ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
            onError={() => setBeforeImageError(true)} // Set error state if image fails to load
          />
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-400 text-white px-3 py-1 rounded-full text-sm font-medium">
            Before
          </div>
        </div>
        {/* After Image Container */}
        <div className="relative w-full h-[300px] overflow-hidden">
          <img
            src={afterImageError ? fallbackImage : afterImage}
            alt={`${title} - After ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setAfterImageError(true)} // Set error state if image fails to load
          />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1 rounded-full text-sm font-medium">
            After
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project && projects.length > 0) {
      navigate("/projects");
    }
  }, [project, projects, navigate]);

  if (!project) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-4xl font-bold text-foreground">Project Not Found</h2>
        <Link to="/projects" className="text-primary inline-flex items-center mt-4 hover:underline">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-foreground/70 mb-6">{project.longDescription || project.description}</p>
              <Link
                to="/projects"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to All Projects
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl transform -rotate-3"
                />
              </motion.div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-30 rounded-2xl transform rotate-3" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom pb-16">
        {/* Before and After Comparison */}
        {project.beforeAfter && project.beforeAfter.beforeImages?.length && project.beforeAfter.afterImages?.length && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold text-foreground mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Before & After Transformation
            </h2>
            {Array.from({ length: Math.min(project.beforeAfter.beforeImages.length, project.beforeAfter.afterImages.length) }).map(
              (_, index) => (
                <BeforeAfterComparison
                  key={index}
                  beforeImage={project.beforeAfter.beforeImages[index]}
                  afterImage={project.beforeAfter.afterImages[index]}
                  title={project.title}
                  index={index}
                />
              )
            )}
          </motion.section>
        )}

        {/* Embedded Video */}
        {project.video && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 relative max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold text-foreground mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Project Video
            </h2>
            <div className="relative w-full h-0 pb-[56.25%] rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src={project.video}
                title={`${project.title} Video`}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl" />
          </motion.section>
        )}

        {/* Gallery Section */}
        {project.galleryImages?.length && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-extrabold text-foreground mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <LazyLoadImage
                    src={img}
                    alt={`${project.title} - Gallery ${index + 1}`}
                    effect="blur"
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={project.galleryImages.map((img) => ({ src: img }))}
              index={lightboxIndex}
            />
          </motion.section>
        )}

        {/* Project Details */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-foreground mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Project Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center space-x-4"
            >
              <MapPin className="h-6 w-6 text-purple-500" />
              <div>
                <h3 className="text-sm font-semibold text-foreground/70">Location</h3>
                <p className="text-lg font-medium text-foreground">{project.location}</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center space-x-4"
            >
              <Calendar className="h-6 w-6 text-purple-500" />
              <div>
                <h3 className="text-sm font-semibold text-foreground/70">Year</h3>
                <p className="text-lg font-medium text-foreground">{project.year}</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center space-x-4"
            >
              <Maximize className="h-6 w-6 text-purple-500" />
              <div>
                <h3 className="text-sm font-semibold text-foreground/70">Area</h3>
                <p className="text-lg font-medium text-foreground">{project.area}</p>
              </div>
            </motion.div>
          </div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl" />
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetail;
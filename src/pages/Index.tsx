import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Home, Paintbrush, Sofa, Wrench, Star, Award, Users, BarChart, Building, Shield, Clock } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WhyChooseUs from "../components/ui/WhyChooseUs"
const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const autoplayPlugin = useRef(Autoplay({
    delay: 2000,
    stopOnInteraction: false
  }));

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
    revealElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Residential Design",
      description: "Transform your living spaces with our custom residential design solutions tailored to your lifestyle and preferences."
    },
    {
      icon: <Paintbrush className="w-10 h-10" />,
      title: "Interior Styling",
      description: "Elevate your space with our expert interior styling services that bring harmony, balance, and personality to every room."
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Renovation Works",
      description: "From minor updates to complete overhauls, our skilled team delivers high-quality renovation services on time and within budget."
    },
    {
      icon: <Sofa className="w-10 h-10" />,
      title: "Furniture Solutions",
      description: "Find the perfect furniture pieces that combine style, comfort, and functionality to complement your newly renovated space."
    }
  ];

  const testimonials = [
    {
      quote: "RenoHaven transformed our HDB flat beyond recognition. Their attention to detail and commitment to quality exceeded our expectations.",
      author: "Sarah Tan",
      role: "Homeowner in Punggol"
    },
    {
      quote: "Working with RenoHaven was a seamless experience from concept to completion. They listened to our needs and delivered a space that truly feels like home.",
      author: "Michael Lim",
      role: "Condo Owner in Tanjong Pagar"
    },
    {
      quote: "The team's creativity and problem-solving skills helped us maximize our limited space while maintaining a luxurious feel. Highly recommended!",
      author: "Priya Sharma",
      role: "Apartment Owner in Tampines"
    }
  ];

  const stats = [
    {
      value: "12+",
      label: "Years Experience",
      icon: <BarChart className="w-8 h-8 mb-2" />
    },
    {
      value: "250+",
      label: "Projects Completed",
      icon: <Home className="w-8 h-8 mb-2" />
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-8 h-8 mb-2" />
    },
    {
      value: "15+",
      label: "Design Awards",
      icon: <Award className="w-8 h-8 mb-2" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Design Excellence",
      description: "Our award-winning designers create spaces that are both aesthetically pleasing and highly functional."
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Quality Craftsmanship",
      description: "We use premium materials and work with skilled craftsmen to ensure durability and longevity."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Transparent Process",
      description: "We maintain clear communication throughout the renovation journey with no hidden costs."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure your renovation project is completed on schedule."
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "After-Service Support",
      description: "Our relationship doesn't end at project completion. We provide ongoing support for any concerns."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Licensed & Insured",
      description: "We are fully licensed and insured, providing you with peace of mind throughout your renovation."
    }
  ];

  const clientLogos = [
    { name: "Client 1", logo: "/logos/logo1.svg", alt: "Client 1 Logo" },
    { name: "Client 2", logo: "/logos/logo2.svg", alt: "Client 2 Logo" },
    { name: "Client 3", logo: "/logos/logo3.svg", alt: "Client 3 Logo" },
    { name: "Client 4", logo: "/logos/logo4.svg", alt: "Client 4 Logo" },
    { name: "Client 5", logo: "/logos/logo5.svg", alt: "Client 5 Logo" },
    { name: "Client 6", logo: "/logos/logo6.svg", alt: "Client 6 Logo" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        {/* Background with Video and Image Fallback */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop"
            alt="Modern architectural interior"
            className="w-full h-full object-cover object-center"
            id="hero-background-image"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center hidden"
            id="hero-background-video"
            onLoadedData={() => {
              const video = document.getElementById("hero-background-video") as HTMLVideoElement;
              const image = document.getElementById("hero-background-image") as HTMLImageElement;
              if (video) {
                video.classList.remove("hidden");
                image.classList.add("hidden");
                console.log("Video loaded successfully, hiding image.");
              }
            }}
            onError={(e) => {
              const video = e.target as HTMLVideoElement;
              const image = document.getElementById("hero-background-image") as HTMLImageElement;
              video.classList.add("hidden");
              image.classList.remove("hidden");
              console.log("Video failed to load, showing image.");
            }}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-modern-building-with-reflective-windows-1107-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container-custom relative z-10 text-white py-12 md:py-20"
        >
          <div className="flex flex-col items-center justify-center text-center px-4">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-xl md:text-2xl font-bold tracking-wide text-white/80 uppercase">
                RenoHaven
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
              <span className="block text-white">Elevate Your</span>
              <span className="block text-primary">Living Experience</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 mb-6 md:mb-8">
              Expert Renovation & Design Solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md md:max-w-lg mx-auto text-white/80 mb-8 md:mb-10 font-light">
              Transform your home with precision craftsmanship, innovative design, and personalized service tailored to your vision.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/projects"
                className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center items-start p-2 animate-bounce-slow">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/50 backdrop-blur-md p-8 rounded-xl text-center border border-white/10 hover:bg-white/70 transition-all duration-500 reveal"
              >
                <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-semibold mb-1 text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 reveal"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="mt-3 mb-6 text-foreground">Comprehensive Renovation Services</h2>
            <p className="text-muted-foreground">
              We offer end-to-end solutions to transform your space, from conceptualization and design to execution and styling.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-white/10 group hover:bg-white/90 transition-all duration-500 reveal"
              >
                <div className="p-3 rounded-lg bg-primary/10 inline-block mb-5 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 reveal"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider">
              Our Portfolio
            </span>
            <h2 className="mt-3 mb-6 text-foreground">Featured Renovation Projects</h2>
            <p className="text-muted-foreground">
              Explore some of our recent transformations that showcase our commitment to quality, creativity, and client satisfaction.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal"
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
                alt: "Modern living room renovation",
                title: "Marina Bay View Condo",
                desc: "A luxurious renovation combining modern aesthetic with functional design.",
              },
              {
                src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1992&q=80",
                alt: "Kitchen renovation",
                title: "Tampines HDB Transformation",
                desc: "A complete overhaul that maximizes space and brings in natural light.",
              },
              {
                src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
                alt: "Bedroom renovation",
                title: "Bukit Timah Bungalow",
                desc: "An elegant renovation that respects heritage while introducing modern comfort.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-xl overflow-hidden relative h-[400px] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors z-10"></div>
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.desc}</p>
                  <Link to="/projects" className="inline-flex items-center text-white group-hover:underline">
                    View Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mt-12 reveal"
          >
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 font-medium button-hover">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Client Logo Carousel Section */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8 reveal"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider">
              Trusted By
            </span>
            <h2 className="mt-3 mb-6 text-foreground">Our Esteemed Clients & Partners</h2>
            <p className="text-muted-foreground">
              We're proud to work with these respected organizations who trust us with their renovation needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="reveal"
          >
            <Carousel
              opts={{ align: "start", loop: true, dragFree: true, containScroll: "trimSnaps" }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
              showArrows={false}
              containerClassName="mx-auto px-0"
            >
              <CarouselContent className="-ml-0">
                {clientLogos.map((client, index) => (
                  <CarouselItem key={index} className="pl-0 basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="h-16 flex items-center justify-center px-2"
                    >
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 reveal"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider">
              Client Testimonials
            </span>
            <h2 className="mt-3 mb-6 text-foreground">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Read about the experiences of homeowners who have trusted us with their renovation projects.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/50 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/70 transition-all reveal"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 text-primary">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.2667 4.73333 12.8667 5.53333 11.5333C6.33333 10.2 7.46667 9.06667 8.93333 8.13333L11.0667 10.4C10.0667 11.0667 9.26667 11.7333 8.66667 12.4C8.06667 13.0667 7.76667 13.7333 7.76667 14.4C7.76667 14.6667 7.86667 14.9333 8.06667 15.2C8.26667 15.4667 8.53333 15.6667 8.86667 15.8C9.46667 16.0667 9.93333 16.4667 10.2667 17C10.6 17.5333 10.7667 18.1333 10.7667 18.8C10.7667 19.5333 10.5 20.1333 9.96667 20.6C9.43333 21.0667 8.73333 21.3333 7.86667 21.3333H9.33333ZM19.3333 21.3333C17.8667 21.3333 16.6667 20.8 15.7333 19.7333C14.8 18.6667 14.3333 17.3333 14.3333 15.7333C14.3333 14.2667 14.7333 12.8667 15.5333 11.5333C16.3333 10.2 17.46667 9.06667 18.9333 8.13333L21.0667 10.4C20.0667 11.0667 19.26667 11.7333 18.6667 12.4C18.06667 13.0667 17.76667 13.7333 17.76667 14.4C17.76667 14.6667 17.86667 14.9333 18.06667 15.2C18.26667 15.4667 18.53333 15.6667 18.8667 15.8C19.4667 16.0667 19.93333 16.4667 20.2667 17C20.6 17.5333 20.7667 18.1333 20.7667 18.8C20.7667 19.5333 20.5 20.1333 19.9667 20.6C19.43333 21.0667 18.73333 21.3333 17.8667 21.3333H19.3333Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="mb-6 italic text-foreground">{testimonial.quote}</p>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
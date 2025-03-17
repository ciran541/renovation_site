
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  children?: ReactNode;
}

const HeroSection = ({ title, description, backgroundImage, children }: HeroSectionProps) => {
  return (
    <section 
      className="pt-32 pb-16 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>
      
      <div className="container-custom relative z-10">
        <h1 className="text-center mb-4 font-normal animate-fade-in text-white">{title}</h1>
        <p className="text-center text-white/90 max-w-2xl mx-auto animate-fade-up">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;

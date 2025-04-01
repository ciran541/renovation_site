import { 
    Award, 
    Hammer, 
    Clock, 
    Shield, 
    MessageSquare, 
    Layers
  } from 'lucide-react';
  import { motion } from 'framer-motion';
  import { useState } from 'react';
  import { cn } from '@/lib/utils';
  
  interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
    color: string;
    hoverColor: string;
  }
  
  const FeatureCard = ({ icon, title, description, delay, color, hoverColor }: FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        viewport={{ once: true }}
        className={cn(
          "p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2",
          "border border-gray-100 hover:shadow-xl",
          `${isHovered ? hoverColor : 'bg-white'}`
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4">
          <div className={cn(
            "p-3 rounded-lg transition-colors duration-300",
            color
          )}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 transition-colors duration-300">{title}</h3>
            <p className={cn(
              "text-gray-600 text-sm transition-colors duration-300",
              isHovered && "text-gray-700"
            )}>{description}</p>
          </div>
        </div>
      </motion.div>
    );
  };
  
  const WhyChooseUs = () => {
    const features = [
      {
        icon: <Award className="w-5 h-5" />,
        title: "Design Excellence",
        description: "Our award-winning designers create spaces that are both aesthetically pleasing and highly functional.",
        color: "bg-purple-100 text-purple-600",
        hoverColor: "bg-purple-50"
      },
      {
        icon: <Hammer className="w-5 h-5" />,
        title: "Quality Craftsmanship",
        description: "We use premium materials and work with skilled craftsmen to ensure durability and longevity.",
        color: "bg-blue-100 text-blue-600",
        hoverColor: "bg-blue-50"
      },
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Transparent Process",
        description: "We maintain clear communication throughout the renovation journey with no hidden costs.",
        color: "bg-green-100 text-green-600",
        hoverColor: "bg-green-50"
      },
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Timely Delivery",
        description: "We respect deadlines and ensure your renovation project is completed on schedule.",
        color: "bg-amber-100 text-amber-600",
        hoverColor: "bg-amber-50"
      },
      {
        icon: <Layers className="w-5 h-5" />,
        title: "After-Service Support",
        description: "Our relationship doesn't end at project completion. We provide ongoing support for any concerns.",
        color: "bg-rose-100 text-rose-600",
        hoverColor: "bg-rose-50"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Licensed & Insured",
        description: "We are fully licensed and insured, providing you with peace of mind throughout your renovation.",
        color: "bg-teal-100 text-teal-600",
        hoverColor: "bg-teal-50"
      }
    ];
  
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="inline-block py-1 px-4 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The RenoHaven Difference</h2>
            <p className="text-gray-600">
              Our commitment to excellence sets us apart in Singapore's competitive renovation industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
                color={feature.color}
                hoverColor={feature.hoverColor}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 animate-fade-in">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Information</h2>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Have questions about our services? Contact us through the provided information or visit our showroom to explore our offerings.
      </p>

      <div className="space-y-6">
        {/* Office Address */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Office Address</h3>
            <p className="text-gray-600">123 Orchard Road, #05-01 Design Building, Singapore 123456</p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Phone Number</h3>
            <a href="tel:+6591234567" className="text-gray-600 hover:text-primary transition-colors">
              +65 9123 4567
            </a>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Email Address</h3>
            <a href="mailto:info@renohaven.sg" className="text-gray-600 hover:text-primary transition-colors">
              info@renohaven.sg
            </a>
          </div>
        </div>

        
      </div>

      {/* Showroom Section */}
      <div className="mt-10 bg-primary/5 p-6 rounded-xl border border-primary/10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Showroom</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Explore our stunning display of design concepts, materials, and finishes at our showroom.
        </p>
        <a
          href="https://goo.gl/maps/YourMapLink"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          Get Directions <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;

const MapSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="rounded-xl overflow-hidden shadow-subtle h-[400px] animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8153149887344!2d103.83080091475393!3d1.3019430990501096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a1a951f8f3%3A0x55bad57b7ec34fcd!2sOrchard%20Rd%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1657774284702!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RenoHaven Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

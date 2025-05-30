import React, { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1583604898860-306cd52731d1?auto=format&fit=crop&w=150&q=80",
      content:
        "Klyro transformed our entire digital presence. Their attention to detail and innovative approach resulted in a 400% increase in online conversions. Simply outstanding!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      company: "InnovateCorp",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content:
        "Working with Klyro was a game-changer. They delivered a complex AI automation system ahead of schedule and under budget. Their technical expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, LuxeBrand",
      company: "LuxeBrand",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content:
        "The mobile app they created for us is absolutely gorgeous and performs flawlessly. Our customer engagement increased by 300% within the first month of launch.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Founder, DigitalVentures",
      company: "DigitalVentures",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content:
        "Klyro doesn't just build websites, they craft digital experiences. Their blockchain solution revolutionized our business model and opened new revenue streams.",
      rating: 5,
    },
    {
      name: "Jessica Park",
      role: "VP Operations, ScaleUp Co.",
      company: "ScaleUp Co.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      content:
        "From concept to deployment, the team was professional, communicative, and delivered beyond our expectations. Our ROI has increased by 250% since the project launch.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-cream mb-4 sm:mb-6 leading-tight">
            Client
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              {" "}
              Success Stories
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/80 max-w-3xl mx-auto font-inter leading-relaxed px-2">
            Don't just take our word for it. Here's what our clients say about
            working with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 border border-gold/20 mb-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl sm:text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm sm:text-base md:text-lg font-inter text-cream/90 leading-relaxed mb-8 max-w-4xl mx-auto px-2">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                />
                <div className="text-center md:text-left">
                  <div className="font-playfair font-semibold text-cream text-sm sm:text-base md:text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gold font-inter text-xs sm:text-sm md:text-base">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-cream/60 font-inter text-xs sm:text-sm md:text-base">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="flex justify-center space-x-4 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-gold scale-125"
                    : "bg-gold/30 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>

          {/* Client Avatars */}
          <div className="flex justify-center space-x-4 ">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`flex-shrink-0 transition-all duration-300 ${
                  activeTestimonial === index
                    ? "scale-110 ring-2 ring-gold"
                    : "opacity-60 hover:opacity-100"
                }`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                Client Satisfaction
              </div>
            </div>
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                Happy Clients
              </div>
            </div>
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                5.0
              </div>
              <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                Average Rating
              </div>
            </div>
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                Project Success
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(198,169,105,0.1)_49%,rgba(198,169,105,0.1)_51%,transparent_52%)] bg-[length:30px_30px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-cream mb-6">
            Let's Create Something
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/80 max-w-3xl mx-auto font-inter leading-relaxed">
            Ready to transform your digital presence? Get in touch and let's
            discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}>
            <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-cream mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-cream/80 font-inter text-xs sm:text-sm md:text-base mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-navy/50 border border-gold/30 rounded-lg px-4 py-3 text-cream placeholder-cream/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-cream/80 font-inter text-xs sm:text-sm md:text-base mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-navy/50 border border-gold/30 rounded-lg px-4 py-3 text-cream placeholder-cream/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-cream/80 font-inter text-xs sm:text-sm md:text-base mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-navy/50 border border-gold/30 rounded-lg px-4 py-3 text-cream placeholder-cream/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-cream/80 font-inter text-xs sm:text-sm md:text-base mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-navy/50 border border-gold/30 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300">
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-cream/80 font-inter text-xs sm:text-sm md:text-base mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full bg-navy/50 border border-gold/30 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300">
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="blockchain">Blockchain Solutions</option>
                    <option value="consulting">Tech Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-cream/80 font-inter text-xs sm:text-sm md:text-base mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-navy/50 border border-gold/30 rounded-lg px-4 py-3 text-cream placeholder-cream/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-charcoal px-8 py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}>
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-charcoal w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-cream font-playfair font-semibold text-sm sm:text-base md:text-lg">
                        Email Us
                      </h4>
                      <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                        hello@Revolvex.agency
                      </p>
                      <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                        projects@Revolvex.agency
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-charcoal w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-cream font-playfair font-semibold text-sm sm:text-base md:text-lg">
                        Call Us
                      </h4>
                      <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-cream/60 font-inter text-xs sm:text-sm md:text-base">
                        Mon-Fri, 9 AM - 6 PM EST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-charcoal w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-cream font-playfair font-semibold text-sm sm:text-base md:text-lg">
                        Visit Us
                      </h4>
                      <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                        123 Innovation Street
                      </p>
                      <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                        Tech District, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-dark rounded-2xl p-6 border border-gold/20">
                <h4 className="text-cream font-playfair font-semibold text-sm sm:text-base md:text-lg mb-4">
                  Quick Response Guarantee
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    <span className="text-cream/90 font-inter text-xs sm:text-sm md:text-base">
                      Email responses within 2 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    <span className="text-cream/90 font-inter text-xs sm:text-sm md:text-base">
                      Initial consultation within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    <span className="text-cream/90 font-inter text-xs sm:text-sm md:text-base">
                      Detailed proposal within 48 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
                <h4 className="text-cream font-playfair font-semibold text-sm sm:text-base md:text-lg mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-navy/50 p-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 text-cream">
                    <span className="font-inter text-xs sm:text-sm md:text-base">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="#"
                    className="bg-navy/50 p-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 text-cream">
                    <span className="font-inter text-xs sm:text-sm md:text-base">
                      Twitter
                    </span>
                  </a>
                  <a
                    href="#"
                    className="bg-navy/50 p-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 text-cream">
                    <span className="font-inter text-xs sm:text-sm md:text-base">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  // Load EmailJS script on component mount
  useEffect(() => {
    const loadEmailJS = () => {
      if (!window.emailjs) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        script.async = true;
        script.onload = () => {
          window.emailjs.init(publicKey); // Replace with your actual EmailJS public key
        };
        document.head.appendChild(script);
      }
    };

    loadEmailJS();
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

  // EmailJS implementation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Wait for EmailJS to be loaded if it's not ready yet
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded yet. Please try again.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        project_type: formData.project || "Not provided",
        budget: formData.budget || "Not provided",
        message: formData.message,
      };

      const response = await window.emailjs.send(
        serviceId, // Replace with your actual EmailJS service ID
        templateId, // Replace with your actual EmailJS template ID
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
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

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-emerald/10 border border-emerald/20 rounded-lg">
                  <p className="text-emerald text-sm">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">
                    ❌ Failed to send message. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}

              <div className="space-y-6">
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
                      <option value="$50 - $100">$50 - $100</option>
                      <option value="$100 - $250">$100 - $250</option>
                      <option value="$250 - $500">$250 - $500</option>
                      <option value="$500 - $1000">$500 - $1000</option>
                      <option value="$1000+">$1000+</option>
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
                    <option value="web-development">Website Design</option>
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
                  disabled={isLoading}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-gold text-charcoal px-8 py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-charcoal"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
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
                        service@klyro.digital
                      </p>
                      <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                        klyrodigital@gmail.com
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
                        +918957089392
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
                        Bengaluru, Karnataka
                      </p>
                      <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                        560102, INDIA
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
                    href="https://linkedin.com/company/klyro-digital"
                    className=" p-3 rounded-full bg-gold transition-all duration-300 text-cream">
                    <span className="font-inter text-xs sm:text-sm md:text-base ">
                      <Linkedin className="text-charcoal w-6 h-6" />
                    </span>
                  </a>
                  <a
                    href="https://x.com/klyrodigital"
                    className=" p-3 rounded-full bg-gold  transition-all duration-300 text-cream">
                    <span className="font-inter text-xs sm:text-sm md:text-base">
                      <Twitter className="text-charcoal w-6 h-6" />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/klyro.digital?igsh=aDB4azh4dTZsYnB4"
                    className=" p-3 rounded-full bg-gold ho transition-all duration-300 text-cream">
                    <span className="font-inter text-xs sm:text-sm md:text-base">
                      <Instagram className="text-charcoal w-6 h-6" />
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

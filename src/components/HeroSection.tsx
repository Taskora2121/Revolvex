import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1699100329878-7f28bb780787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-navy/80 to-charcoal/90"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,169,105,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(198,169,105,0.05)_49%,rgba(198,169,105,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-float z-20"></div>
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple rounded-full animate-float z-20"
        style={{ animationDelay: "2s" }}></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald rounded-full animate-float z-20"
        style={{ animationDelay: "4s" }}></div>

      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20 sm:py-16 md:py-20 lg:py-0">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-cream mb-3 sm:mb-4 md:mb-6 leading-tight">
            Crafting
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              Future-Proof
            </span>
            Digital Experiences
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/90 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto font-inter leading-relaxed px-2">
            We transform ambitious visions into extraordinary digital realities.
            Premium web development, AI automation, and strategic solutions that
            elevate your brand.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto bg-gradient-gold text-charcoal px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
              Start Your Project
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto border-2 border-gold text-gold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-gold hover:text-charcoal transition-all duration-300 transform hover:scale-105">
              Explore Services
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="mt-6 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center px-2">
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                Projects Delivered
              </div>
            </div>
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                Countries Served
              </div>
            </div>
            <div className="group">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ArrowDown
          className="text-gold w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer hover:text-cream transition-colors duration-300"
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </section>
  );
};

export default HeroSection;

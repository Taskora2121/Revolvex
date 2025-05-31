import React from "react";
import { ArrowUp, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Services: [
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "AI & Automation",
      "Digital Marketing",
      "Blockchain",
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Press Kit",
      "Contact",
      "Blog",
    ],
    Resources: [
      "Case Studies",
      "White Papers",
      "Documentation",
      "API Reference",
      "Support Center",
      "Community",
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR Compliance",
      "Security",
      "Licensing",
    ],
  };

  return (
    <footer className="bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(198,169,105,0.1)_49%,rgba(198,169,105,0.1)_51%,transparent_52%)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
                Klyro
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/70 font-inter leading-relaxed mb-6 max-w-md">
                Crafting future-proof digital experiences that transform
                businesses and elevate brands to new heights of success.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className=" p-3 rounded-full bg-gold  transition-all duration-300 text-cream group">
                  <span className="font-inter text-xs sm:text-sm md:text-base group-hover:font-semibold">
                    <Linkedin className="text-charcoal w-6 h-6" />
                  </span>
                </a>
                <a
                  href="#"
                  className=" p-3 rounded-full bg-gold  transition-all duration-300 text-cream group">
                  <span className="font-inter text-xs sm:text-sm md:text-base group-hover:font-semibold">
                    <Twitter className="text-charcoal w-6 h-6" />
                  </span>
                </a>
                <a
                  href="#"
                  className=" p-3 rounded-full bg-gold  transition-all duration-300 text-cream group">
                  <span className="font-inter text-xs sm:text-sm md:text-base group-hover:font-semibold">
                    <Instagram className="text-charcoal w-6 h-6" />
                  </span>
                </a>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-gold font-playfair font-semibold text-sm sm:text-base md:text-lg mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-cream/70 hover:text-gold transition-colors duration-300 font-inter text-xs sm:text-sm md:text-base block py-1">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-cream/50 font-inter text-xs sm:text-sm md:text-base">
              <span>© 2024 Klyro Agency. All rights reserved.</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-gold transition-colors duration-300 text-xs sm:text-sm md:text-base">
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-gold transition-colors duration-300 text-xs sm:text-sm md:text-base">
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:text-gold transition-colors duration-300 text-xs sm:text-sm md:text-base">
                  Cookies
                </a>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-gradient-gold text-charcoal p-3 rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 transform hover:scale-110 group">
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-gold rounded-full animate-float"></div>
      <div
        className="absolute top-20 right-20 w-1 h-1 bg-purple rounded-full animate-float"
        style={{ animationDelay: "2s" }}></div>
      <div
        className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-emerald rounded-full animate-float"
        style={{ animationDelay: "4s" }}></div>
    </footer>
  );
};

export default Footer;

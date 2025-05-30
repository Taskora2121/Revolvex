import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import KlyroLogo from "../../public/images/klyroLogo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  // Animation variants
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: -50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const logoVariants = {
    closed: {
      scale: 1,
      rotate: 0,
    },
    open: {
      scale: 1.1,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal/90 backdrop-blur-md border-b border-gold/20"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex flex-row justify-center items-center gap-4"
              variants={logoVariants}
              animate={isSidebarOpen ? "open" : "closed"}>
              <div className="bg-white rounded-full">
                <img src={KlyroLogo} alt="klyro logo" className="w-12" />
              </div>

              <span className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-white">
                Klyro
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-cream hover:text-gold transition-colors duration-300 px-3 py-2 text-sm sm:text-base md:text-lg font-medium font-inter relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full"></span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-gold text-charcoal px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-medium hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}>
                Get Started
              </motion.button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-cream hover:text-gold transition-colors duration-300 p-2"
                variants={hamburgerVariants}
                animate={isSidebarOpen ? "open" : "closed"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                {isSidebarOpen ? "" : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay and Content */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-navy backdrop-blur-sm border-r border-gold/30 z-50 md:hidden"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gold/20">
                <motion.h2
                  className="text-white flex justify-center items-center gap-2 text-2xl font-playfair font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}>
                  <div className="bg-white rounded-full">
                    <img src={KlyroLogo} alt="klyro logo" className="w-12" />
                  </div>
                  <span>Klyro</span>
                </motion.h2>
                <motion.button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gold hover:text-cream transition-colors duration-300 p-2"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}>
                  <X size={24} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <motion.div
                className="flex flex-col p-6 space-y-4"
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="bg-transparent border border-gold text-gold hover:bg-gold/10 transition-all duration-300 px-4 py-3 rounded-lg font-medium font-inter text-sm sm:text-base group relative"
                    variants={menuItemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 15px rgba(212, 175, 55, 0.2)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}>
                    <span className="relative z-10 flex items-center">
                      <motion.span
                        className="w-2 h-2 bg-gold rounded-full mr-3"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                      {item.name}
                    </span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}

                {/* CTA Button in Sidebar */}
                <motion.button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gradient-gold text-charcoal px-6 py-3 rounded-full text-sm sm:text-base font-medium mt-6 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                  variants={menuItemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    Get Started
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}>
                <div className="h-px bg-gradient-gold opacity-50 mb-4" />
                <p className="text-gold text-xs sm:text-sm text-center font-inter">
                  Crafting Digital Excellence
                </p>
              </motion.div>

              {/* Animated Particle Effects */}
              <motion.div
                className="absolute top-10 left-4 w-1 h-1 bg-gold rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-4 w-1.5 h-1.5 bg-gold rounded-full"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

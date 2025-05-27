import React, { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

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

  const services = [
    {
      title: "Web Development",
      category: "Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      features: [
        "React/Next.js Development",
        "Full-Stack Solutions",
        "E-commerce Platforms",
        "Performance Optimization",
      ],
      results: ["99.9% Uptime", "50% Faster Loading", "Mobile-First Design"],
    },
    {
      title: "UI/UX Design",
      category: "Design",
      description:
        "Stunning, user-centric designs that convert visitors into customers through intuitive interfaces and compelling experiences.",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=800&q=80",
      features: [
        "User Research & Analysis",
        "Interactive Wireframing",
        "High-Fidelity Prototyping",
        "Design System Creation",
      ],
      results: [
        "40% Higher Conversions",
        "User-Centered Design",
        "Brand Consistency",
      ],
    },
    {
      title: "Mobile App Development",
      category: "Mobile",
      description:
        "Native and progressive web apps that deliver seamless experiences across all devices and platforms.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      features: [
        "iOS & Android Native",
        "Progressive Web Apps",
        "Cross-Platform Solutions",
        "App Store Optimization",
      ],
      results: [
        "4.8/5 App Rating",
        "Cross-Platform Ready",
        "Native Performance",
      ],
    },
    {
      title: "AI & Automation",
      category: "AI Technology",
      description:
        "Intelligent automation solutions and AI agents that streamline operations and enhance business efficiency.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      features: [
        "AI Chatbot Development",
        "Process Automation",
        "Machine Learning Models",
        "API Integration",
      ],
      results: [
        "70% Cost Reduction",
        "24/7 Automation",
        "Smart Decision Making",
      ],
    },
    {
      title: "Digital Marketing",
      category: "Marketing",
      description:
        "Strategic digital marketing campaigns that amplify your brand reach and drive measurable growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      features: [
        "Social Media Strategy",
        "Content Marketing",
        "SEO Optimization",
        "PPC Campaign Management",
      ],
      results: ["300% ROI Increase", "Brand Visibility", "Lead Generation"],
    },
    {
      title: "Blockchain Solutions",
      category: "Blockchain",
      description:
        "Secure, decentralized applications and smart contracts that leverage blockchain technology for business innovation.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      features: [
        "Smart Contract Development",
        "DeFi Platform Creation",
        "NFT Marketplace",
        "Crypto Payment Integration",
      ],
      results: [
        "Secure Transactions",
        "Decentralized Solutions",
        "Smart Contracts",
      ],
    },
    {
      title: "Email Marketing",
      category: "Marketing Automation",
      description:
        "Targeted email campaigns and automation sequences that nurture leads and drive conversions.",
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
      features: [
        "Campaign Design & Strategy",
        "Marketing Automation",
        "List Management",
        "Advanced Analytics",
      ],
      results: ["45% Open Rate", "Automated Sequences", "Targeted Campaigns"],
    },
    {
      title: "Tech Consulting",
      category: "Consulting",
      description:
        "Strategic technology consulting to help businesses navigate digital transformation and technical challenges.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      features: [
        "Technology Audits",
        "Architecture Planning",
        "Team Training & Support",
        "Strategic Roadmaps",
      ],
      results: [
        "Strategic Planning",
        "Expert Guidance",
        "Future-Ready Solutions",
      ],
    },
  ];

  // Function to get circular index
  const getCircularIndex = (index, length) => {
    return ((index % length) + length) % length;
  };

  // Function to get visible services (5 services centered around active)
  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = -2; i <= 2; i++) {
      const index = getCircularIndex(activeService + i, services.length);
      visibleServices.push({
        ...services[index],
        originalIndex: index,
        position: i,
      });
    }
    return visibleServices;
  };

  // Function to get mobile visible services (3 services: left, center, right)
  const getMobileVisibleServices = () => {
    const mobileServices = [];
    for (let i = -1; i <= 1; i++) {
      const index = getCircularIndex(activeService + i, services.length);
      mobileServices.push({
        ...services[index],
        originalIndex: index,
        position: i,
      });
    }
    return mobileServices;
  };

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  // Handle service click in carousel
  const handleServiceClick = (originalIndex) => {
    setActiveService(originalIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextService();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeService]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        prevService();
      } else if (e.key === "ArrowRight") {
        nextService();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const visibleServices = getVisibleServices();
  const mobileVisibleServices = getMobileVisibleServices();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-cream mb-6">
            Our
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              {" "}
              Expertise
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/80 max-w-3xl mx-auto font-inter leading-relaxed">
            Comprehensive digital solutions tailored to transform your business
            and accelerate growth
          </p>
        </div>

        {/* Main Service Display */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8 bg-gradient-dark rounded-3xl p-8 md:p-12 border border-gold/20">
            {/* Service Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-0 sm:h-56 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-gold text-charcoal px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold">
                    {services[activeService].category}
                  </span>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="mt-[-50px] sm:mt-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-cream">
                {services[activeService].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-cream/80 my-3 font-inter leading-relaxed">
                {services[activeService].description}
              </p>

              {/* Features */}
              <div>
                <h4 className="text-gold font-semibold my-3 font-inter text-sm sm:text-base md:text-lg">
                  Key Features:
                </h4>
                <div className="space-y-2">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-cream/90 font-inter text-xs sm:text-sm md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-gold font-semibold my-3 font-inter text-sm sm:text-base md:text-lg">
                  Key Benefits:
                </h4>
                <div className="space-y-2">
                  {services[activeService].results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald rounded-full"></div>
                      <span className="text-cream/90 font-inter text-xs sm:text-sm md:text-base">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          {/* Carousel Container */}
          <div className="relative mb-8">
            {/* Navigation Buttons */}
            <button
              onClick={prevService}
              className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-gold text-charcoal p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gold/30"
              aria-label="Previous service">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextService}
              className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-gold text-charcoal p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gold/30"
              aria-label="Next service">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Mobile Carousel Track (Three Cards with Center Focus) */}
            <div className="block sm:hidden overflow-hidden">
              <div className="flex items-center justify-center py-6 px-8">
                <div className="flex items-center justify-center gap-0 relative w-full">
                  {mobileVisibleServices.map((service, index) => {
                    const isCenter = service.position === 0;
                    const isLeft = service.position === -1;
                    const isRight = service.position === 1;

                    return (
                      <button
                        key={`${service.originalIndex}-${service.position}`}
                        onClick={() =>
                          handleServiceClick(service.originalIndex)
                        }
                        className={`relative overflow-hidden rounded-lg transition-all duration-700 transform ${
                          isCenter
                            ? "ring-2 ring-gold scale-100 opacity-100 shadow-2xl z-20"
                            : isLeft
                            ? "opacity-50 scale-75 shadow-lg z-10 "
                            : isRight
                            ? "opacity-50 scale-75 shadow-lg z-10 "
                            : "opacity-0 scale-50"
                        }`}
                        style={{
                          width: isCenter ? "150px" : "150px",
                          height: isCenter ? "120px" : "90px",
                        }}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-charcoal/40"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={`text-cream font-semibold text-center px-2 font-inter ${
                              isCenter ? "text-xs" : "text-xs"
                            }`}>
                            {isCenter
                              ? service.title.split(" ").slice(0, 3).join(" ")
                              : service.title.split(" ").slice(0, 2).join(" ")}
                          </span>
                        </div>

                        {/* Active indicator */}
                        {isCenter && (
                          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop/Tablet Carousel Track (Multiple Cards) */}
            <div className="hidden sm:block overflow-hidden mx-16">
              <div className="flex items-center justify-center gap-4 py-6">
                {visibleServices.map((service, index) => {
                  const isCenter = service.position === 0;
                  const isAdjacent = Math.abs(service.position) === 1;
                  const isEdge = Math.abs(service.position) === 2;

                  return (
                    <button
                      key={`${service.originalIndex}-${service.position}`}
                      onClick={() => handleServiceClick(service.originalIndex)}
                      className={`relative overflow-hidden rounded-lg transition-all duration-500 transform ${
                        isCenter
                          ? "ring-2 ring-gold scale-110 opacity-100 shadow-2xl z-10"
                          : isAdjacent
                          ? "opacity-80 hover:opacity-100 scale-95 shadow-lg"
                          : isEdge
                          ? "opacity-60 hover:opacity-80 scale-90 shadow-md"
                          : "opacity-40 scale-85"
                      }`}
                      style={{
                        width: isCenter
                          ? "200px"
                          : isAdjacent
                          ? "180px"
                          : "160px",
                        height: isCenter
                          ? "120px"
                          : isAdjacent
                          ? "108px"
                          : "96px",
                      }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-charcoal/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={`text-cream font-semibold text-center px-2 font-inter ${
                            isCenter ? "text-sm" : "text-xs"
                          }`}>
                          {service.title.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </div>

                      {/* Active indicator */}
                      {isCenter && (
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 border border-gold/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-cream mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-cream/70 font-inter mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital
              goals and drive unprecedented growth.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-gold text-charcoal px-8 py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 font-inter">
              Start Your Project Today
            </button>
          </div>
        </div>

        {/* Keyboard Navigation Instructions */}
        {/* <div className="mt-6 text-center text-cream/40 text-xs sm:text-sm md:text-base font-inter">
          Use arrow keys or click navigation buttons to browse services
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;

import React, { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

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

  const projects = [
    {
      title: "E-Commerce Platform Revolution",
      category: "Web Development",
      description:
        "A complete overhaul of an enterprise e-commerce platform, resulting in 300% increase in conversions and 50% faster load times.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      results: [
        "300% Conversion Increase",
        "50% Faster Loading",
        "$2M Revenue Boost",
      ],
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Automation",
      description:
        "Intelligent business intelligence platform with predictive analytics and automated reporting for fortune 500 company.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      results: ["85% Time Savings", "99.2% Accuracy", "Real-time Insights"],
    },
    {
      title: "Luxury Brand Mobile Experience",
      category: "Mobile Development",
      description:
        "Premium mobile application for luxury fashion brand with AR try-on features and seamless shopping experience.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "ARKit", "Firebase", "Stripe"],
      results: ["4.9/5 App Rating", "60% User Retention", "200% Sales Growth"],
    },
    {
      title: "Blockchain Trading Platform",
      category: "Blockchain",
      description:
        "Secure, scalable cryptocurrency trading platform with advanced charting and automated trading capabilities.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      technologies: ["Solidity", "Web3.js", "Next.js", "Redis"],
      results: ["$10M+ Volume", "99.9% Uptime", "Zero Security Breaches"],
    },
    {
      title: "Digital Marketing Automation",
      category: "Marketing Technology",
      description:
        "Complete marketing automation suite that increased lead generation by 400% and reduced customer acquisition cost.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["HubSpot API", "React", "Node.js", "Zapier"],
      results: ["400% Lead Increase", "60% Cost Reduction", "95% Automation"],
    },
  ];

  // Function to get circular index
  const getCircularIndex = (index, length) => {
    return ((index % length) + length) % length;
  };

  // Function to get visible projects (5 projects centered around active)
  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = -2; i <= 2; i++) {
      const index = getCircularIndex(activeProject + i, projects.length);
      visibleProjects.push({
        ...projects[index],
        originalIndex: index,
        position: i,
      });
    }
    return visibleProjects;
  };

  // Function to get mobile visible projects (3 projects: left, center, right)
  const getMobileVisibleProjects = () => {
    const mobileProjects = [];
    for (let i = -1; i <= 1; i++) {
      const index = getCircularIndex(activeProject + i, projects.length);
      mobileProjects.push({
        ...projects[index],
        originalIndex: index,
        position: i,
      });
    }
    return mobileProjects;
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Handle project click in carousel
  const handleProjectClick = (originalIndex) => {
    setActiveProject(originalIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        prevProject();
      } else if (e.key === "ArrowRight") {
        nextProject();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const visibleProjects = getVisibleProjects();
  const mobileVisibleProjects = getMobileVisibleProjects();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_48%,rgba(198,169,105,0.1)_49%,rgba(198,169,105,0.1)_51%,transparent_52%)] bg-[length:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-cream mb-6">
            Featured
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/80 max-w-3xl mx-auto font-inter leading-relaxed">
            Showcasing our portfolio of successful digital transformations and
            innovative solutions
          </p>
        </div>

        {/* Main Project Display */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8 bg-gradient-dark rounded-3xl p-8 md:p-12 border border-gold/20">
            {/* Project Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-0 sm:h-56 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-gold text-charcoal px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold">
                    {projects[activeProject].category}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-[-50px] sm:mt-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-cream">
                {projects[activeProject].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-cream/80 my-3 font-inter leading-relaxed">
                {projects[activeProject].description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-gold font-semibold my-3 font-inter text-sm sm:text-base md:text-lg">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-charcoal/50 border border-gold/30 text-cream px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-inter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-gold font-semibold my-3 font-inter text-sm sm:text-base md:text-lg">
                  Key Results:
                </h4>
                <div className="space-y-2">
                  {projects[activeProject].results.map((result, index) => (
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
              onClick={prevProject}
              className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-gold text-charcoal p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gold/30"
              aria-label="Previous project">
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
              onClick={nextProject}
              className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-gold text-charcoal p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gold/30"
              aria-label="Next project">
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
                  {mobileVisibleProjects.map((project, index) => {
                    const isCenter = project.position === 0;
                    const isLeft = project.position === -1;
                    const isRight = project.position === 1;

                    return (
                      <button
                        key={`${project.originalIndex}-${project.position}`}
                        onClick={() =>
                          handleProjectClick(project.originalIndex)
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
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-charcoal/40"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={`text-cream font-semibold text-center px-2 font-inter ${
                              isCenter ? "text-xs" : "text-xs"
                            }`}>
                            {isCenter
                              ? project.title.split(" ").slice(0, 3).join(" ")
                              : project.title.split(" ").slice(0, 2).join(" ")}
                          </span>
                        </div>

                        {/* Active indicator */}
                        {isCenter && (
                          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                          </div>
                        )}

                        {/* Category Badge */}
                        {/* {isCenter && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-gradient-gold text-charcoal px-2 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold">
                              {project.category}
                            </span>
                          </div>
                        )} */}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop/Tablet Carousel Track (Multiple Cards) */}
            <div className="hidden sm:block overflow-hidden mx-16">
              <div className="flex items-center justify-center gap-4 py-6">
                {visibleProjects.map((project, index) => {
                  const isCenter = project.position === 0;
                  const isAdjacent = Math.abs(project.position) === 1;
                  const isEdge = Math.abs(project.position) === 2;

                  return (
                    <button
                      key={`${project.originalIndex}-${project.position}`}
                      onClick={() => handleProjectClick(project.originalIndex)}
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
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-charcoal/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={`text-cream font-semibold text-center px-2 font-inter ${
                            isCenter ? "text-sm" : "text-xs"
                          }`}>
                          {project.title.split(" ").slice(0, 2).join(" ")}
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

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}>
          <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 border border-gold/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-cream mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-cream/70 font-inter mb-8 max-w-2xl mx-auto">
              Join the ranks of businesses that have transformed their digital
              presence with our expertise.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-gold text-charcoal px-8 py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 font-inter">
              Discuss Your Project
            </button>
          </div>
        </div>

        {/* Keyboard Navigation Instructions */}
        {/* <div className="mt-6 text-center text-cream/40 text-xs sm:text-sm md:text-base font-inter">
          Use arrow keys or click navigation buttons to browse projects
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;

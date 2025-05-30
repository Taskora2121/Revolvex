import React, { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [revenueCount, setRevenueCount] = useState(0);
  const [uptimeCount, setUptimeCount] = useState(0);
  const [deliveryCount, setDeliveryCount] = useState(0);
  const [guaranteeCount, setGuaranteeCount] = useState(0);
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to animate counting
  const animateCount = (start, end, duration, setter, isDecimal = false) => {
    const startTime = performance.now();
    const range = end - start;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easeOutQuart for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      let currentValue;

      if (isDecimal) {
        currentValue = parseFloat((start + range * easeOutQuart).toFixed(1));
      } else {
        currentValue = Math.floor(start + range * easeOutQuart);
      }

      setter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setter(end); // Ensure we end at exact target
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Start counting animation when component becomes visible
  useEffect(() => {
    if (isVisible && !hasStartedCounting) {
      const timer = setTimeout(() => {
        setHasStartedCounting(true);

        // Start all counters simultaneously
        animateCount(0, 2, 3000, setRevenueCount, true); // 2M+ (decimal for smooth animation)
        animateCount(0, 99.8, 3000, setUptimeCount, true); // 99.8% (decimal)
        animateCount(0, 72, 3000, setDeliveryCount); // 72h
        animateCount(0, 100, 3000, setGuaranteeCount); // 100%
      }, 500); // Match the delay of the stats section

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasStartedCounting]);

  const features = [
    {
      title: "Trust & Reliability",
      description:
        "5+ years of proven excellence with transparent communication and on-time delivery.",
      icon: "🛡️",
    },
    {
      title: "Premium Quality",
      description:
        "Every pixel, every line of code crafted with obsessive attention to detail.",
      icon: "💎",
    },
    {
      title: "Expert Team",
      description:
        "World-class developers, designers, and strategists working for your success.",
      icon: "🚀",
    },
    {
      title: "Results-Driven",
      description:
        "We don't just build websites, we create growth engines for your business.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(198,169,105,0.1)_49%,rgba(198,169,105,0.1)_51%,transparent_52%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-cream mb-3 sm:mb-4 md:mb-6 leading-tight">
              Why Choose
              <span className="block md:h-20 bg-gradient-gold bg-clip-text text-transparent">
                Klyro?
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/80 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto font-inter leading-relaxed px-2">
              We're not just another agency. We're your strategic partners in
              digital transformation, combining cutting-edge technology with
              timeless design principles to create experiences that captivate
              and convert.
            </p>
            <div className="space-y-3 sm:space-y-4 px-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-cream/90 font-inter text-sm sm:text-base md:text-lg">
                  15+ Industries Mastered
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-cream/90 font-inter text-sm sm:text-base md:text-lg">
                  24/7 Premium Support
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-cream/90 font-inter text-sm sm:text-base md:text-lg">
                  Lifetime Maintenance
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-charcoal/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:animate-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-playfair font-semibold text-cream mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-cream/70 font-inter text-xs sm:text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}>
          <div className="bg-gradient-dark rounded-3xl p-6 sm:p-8 md:p-12 border border-gold/20">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-cream mb-3 sm:mb-4">
                Our Track Record Speaks
              </h3>
              <p className="text-cream/70 font-inter text-sm sm:text-base md:text-lg">
                Numbers that showcase our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold bg-gradient-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  ${revenueCount}M+
                </div>
                <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                  Revenue Generated
                </div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold bg-gradient-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {uptimeCount}%
                </div>
                <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                  Uptime Guarantee
                </div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold bg-gradient-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {deliveryCount}h
                </div>
                <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                  Average Delivery
                </div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold bg-gradient-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {guaranteeCount}%
                </div>
                <div className="text-cream/70 font-inter text-xs sm:text-sm md:text-base">
                  Money Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

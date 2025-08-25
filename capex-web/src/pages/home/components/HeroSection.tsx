"use client";

import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";

// assets
import MainLandingMobile from "@/assets/MainLandig.png";
import MainLanding1 from "@/assets/MainLandig1.png";
import MainLanding2 from "@/assets/MainLandig2.png";
import MainLanding3 from "@/assets/MainLandig3.png";
import MainLanding4 from "@/assets/MainLandig4.png";

import Feature1 from "@/assets/Frame 1000003043.png";
import Feature2 from "@/assets/Frame 1000003044.png";
import Feature3 from "@/assets/Frame 1000003042.png";
import { useIsMobile } from "@/hooks/useIsMobile";

type Feature = { src: string; alt: string; title: string; subtitle: string };

const SimpleScaleLayout: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const featureColRef = useRef<HTMLDivElement>(null);
  const [featureColHeight, setFeatureColHeight] = useState<number | null>(null);

  useEffect(() => {
    [MainLanding1, MainLanding2, MainLanding3, MainLanding4].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const features: Feature[] = [
    {
      src: Feature3,
      alt: "Sustainable Design",
      title: "Personalized Collaboration",
      subtitle: "Tailored solutions",
    },

    {
      src: Feature1,
      alt: "Modern Architecture",
      title: "Vision-Driven Designs",
      subtitle: "Contemporary solutions",
    },
    {
      src: Feature2,
      alt: "Urban Planning",
      title: "3D Visualization",
      subtitle: "Immersive experiences",
    },
  ];

  // Embla carousel only used on mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  // Sync main image with mobile carousel
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setActiveIndex(selected);
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  // Keep main image height equal to feature column height (desktop only)
  useEffect(() => {
    if (!isMobile && featureColRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setFeatureColHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(featureColRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [isMobile]);

  // Choose main image based on hover or mobile index
  const getMainImage = () => {
    if (isMobile) return MainLandingMobile;
    if (activeIndex === 0) return MainLanding2;
    if (activeIndex === 1) return MainLanding3;
    if (activeIndex === 2) return MainLanding4;
    return MainLanding1; // default
  };

  const getCardClass = (i: number) =>
    [
      "cursor-pointer relative overflow-hidden rounded-[30px] shadow-lg flex-shrink-0",
      "transition-all duration-500 ease-out",
      activeIndex === i && !isMobile
        ? "w-[329px] h-[236px] -translate-x-14"
        : "w-[286px] h-[225px] translate-x-0",
    ].join(" ");

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 min-h-screen bg-transparent">
      {/* Main image */}
      <div
        style={{
          height:
            !isMobile && featureColHeight ? `${featureColHeight}px` : "auto",
        }}
        className="relative w-full lg:flex-grow max-h-[727px] max-w-[1207px] rounded-[30px] flex overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.img
            src={getMainImage()}
            alt="Main Landing"
            className="w-full h-full object-fill max-h-[500px] md:max-h-[727px] rounded-[30px]  select-none pointer-events-none"
            style={{ filter: "brightness(0.55)" }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </AnimatePresence>

        {/* Text overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[30px] z-10 flex items-end">
          <div className="p-6 lg:p-8 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-2xl lg:text-4xl font-bold mb-2 ${
                !isMobile ? "sm:ml-30" : ""
              } leading-tight`}
            >
              Crafting Modern Architecture
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-lg lg:text-2xl font-light mb-10 ${
                !isMobile ? "sm:ml-30" : ""
              } leading-tight`}
            >
              For A Better Future.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-sm lg:text-lg opacity-90 mb-6 ${
                !isMobile ? "sm:ml-30" : ""
              } max-w-md leading-relaxed`}
            >
              Custom crafted floor plans and immersive 3D visualizations
              tailored for modern life and future-forward design
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`pointer-events-auto bg-white text-black px-4 ${
                !isMobile ? "sm:ml-30" : ""
              } py-2 lg:px-6 lg:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300`}
            >
              Book a Consultation
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        ref={featureColRef}
        className="relative z-40 w-full lg:w-[320px] flex flex-col mt-6 lg:mt-0"
      >
        {isMobile ? (
          // Mobile Embla Slider
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 min-w-[391px] min-h-[124px] gap-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-lg">
                    <motion.img
                      src={f.src}
                      alt={f.alt}
                      className="w-full h-full   max-h-[200px] object-cover  select-none pointer-events-none"
                      draggable={false}
                      whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <h3 className="text-base font-semibold mb-1 leading-tight">
                        {f.title}
                      </h3>
                      <p className="text-xs opacity-80 leading-relaxed">
                        {f.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop Column
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className={getCardClass(i)}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.img
                  src={f.src}
                  alt={f.alt}
                  className="w-full h-full object-cover select-none rounded-[30px]"
                  draggable={false}
                  style={{ filter: "brightness(0.55)" }}
                  whileHover={{ scale: 1.15, filter: "brightness(0.8)" }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h3 className="text-lg font-semibold mb-1 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {f.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleScaleLayout;

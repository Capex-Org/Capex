"use client";

import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// assets
import MainHome from "@/assets/Main Home.png";
import Feature1 from "@/assets/Frame 1000003043.png";
import Feature2 from "@/assets/Frame 1000003044.png";
import Feature3 from "@/assets/Frame 1000003042.png";
import { useIsMobile } from "@/hooks/useIsMobile";

type MaskRect = { top: number; right: number; bottom: number; left: number };
type Feature = { src: string; alt: string; title: string; subtitle: string };
type CornerRadii =
  | number
  | { tl?: number; tr?: number; br?: number; bl?: number };

function roundedRectPath(
  x: number,
  y: number,
  w: number,
  h: number,
  r: CornerRadii = 0
) {
  let tl: number, tr: number, br: number, bl: number;
  if (typeof r === "number") {
    tl = tr = br = bl = r;
  } else {
    tl = r.tl ?? 0;
    tr = r.tr ?? 0;
    br = r.br ?? 0;
    bl = r.bl ?? 0;
  }

  const maxR = Math.min(w, h) / 2;
  tl = Math.min(tl, maxR);
  tr = Math.min(tr, maxR);
  br = Math.min(br, maxR);
  bl = Math.min(bl, maxR);

  return [
    `M ${x + tl} ${y}`,
    `H ${x + w - tr}`,
    tr ? `A ${tr} ${tr} 0 0 1 ${x + w} ${y + tr}` : `L ${x + w} ${y}`,
    `V ${y + h - br}`,
    br ? `A ${br} ${br} 0 0 1 ${x + w - br} ${y + h}` : `L ${x + w} ${y + h}`,
    `H ${x + bl}`,
    bl ? `A ${bl} ${bl} 0 0 1 ${x} ${y + h - bl}` : `L ${x} ${y + h}`,
    `V ${y + tl}`,
    tl ? `A ${tl} ${tl} 0 0 1 ${x + tl} ${y}` : `L ${x} ${y}`,
    `Z`,
  ].join(" ");
}

const SimpleScaleLayout: React.FC = () => {
  const isMobile = useIsMobile();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [maskRect, setMaskRect] = useState<MaskRect>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [mainSize, setMainSize] = useState({ width: 1007, height: 562 });

  const mainBoxRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const features: Feature[] = [
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
    {
      src: Feature3,
      alt: "Sustainable Design",
      title: "Personalized Collaboration",
      subtitle: "Tailored solutions",
    },
  ];

  // Embla carousel only used on mobile
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const updateMask = () => {
    if (!mainBoxRef.current) {
      rafRef.current = requestAnimationFrame(updateMask);
      return;
    }

    const mainRect = mainBoxRef.current.getBoundingClientRect();
    const w = Math.max(1, Math.round(mainRect.width));
    const h = Math.max(1, Math.round(mainRect.height));
    if (w !== mainSize.width || h !== mainSize.height) {
      setMainSize({ width: w, height: h });
    }

    let targetLeft = w;
    let targetRight = 0;
    let targetTop = 0;
    let targetBottom = 0;

    // only animate mask on desktop
    if (
      !isMobile &&
      activeIndex !== null &&
      thumbnailRefs.current[activeIndex]
    ) {
      const thumbRect =
        thumbnailRefs.current[activeIndex]!.getBoundingClientRect();
      const GAP = 20;
      let holeW = thumbRect.width + GAP * 2;
      let holeH = thumbRect.height + GAP * 2;

      let leftLocal = thumbRect.left - mainRect.left - GAP;
      let topLocal = thumbRect.top - mainRect.top - GAP;

      if (leftLocal < 0) {
        holeW += leftLocal;
        leftLocal = 0;
      }
      if (topLocal < 0) {
        holeH += topLocal;
        topLocal = 0;
      }
      if (leftLocal + holeW > w) {
        holeW = w - leftLocal;
      }
      if (topLocal + holeH > h) {
        holeH = h - topLocal;
      }

      targetLeft = leftLocal;
      targetRight = Math.max(0, w - (leftLocal + holeW));
      targetTop = topLocal;
      targetBottom = Math.max(0, h - (topLocal + holeH));
    }

    setMaskRect((cur) => ({
      top: lerp(cur.top, targetTop, 0.22),
      right: lerp(cur.right, targetRight, 0.22),
      bottom: lerp(cur.bottom, targetBottom, 0.22),
      left: lerp(cur.left, targetLeft, 0.22),
    }));

    rafRef.current = requestAnimationFrame(updateMask);
  };

  useEffect(() => {
    updateMask();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex, isMobile]);

  const holeX = maskRect.left;
  const holeY = maskRect.top;
  const holeW = Math.max(0, mainSize.width - maskRect.left - maskRect.right);
  const holeH = Math.max(0, mainSize.height - maskRect.top - maskRect.bottom);

  const getCardClass = (i: number) =>
    [
      "cursor-pointer relative overflow-hidden rounded-[30px] shadow-lg flex-shrink-0",
      "transition-all duration-500 ease-out",
      activeIndex === i && !isMobile
        ? "w-[380px] h-[240px] -translate-x-11"
        : "w-[340px] h-[240px] translate-x-0",
    ].join(" ");

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8 min-h-screen bg-transparent">
      {/* Main image */}
      <div
        ref={mainBoxRef}
        className="relative flex-shrink-0 min-h-[240px] md:min-h-[720px] w-full lg:w-4/5 h-auto lg:h-full rounded-[30px] flex"
      >
        <svg
          width={mainSize.width}
          height={mainSize.height}
          viewBox={`0 0 ${mainSize.width} ${mainSize.height}`}
          className="block rounded-[30px] drop-shadow-xl w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="outerClip">
              <rect
                x="0"
                y="0"
                width={mainSize.width}
                height={mainSize.height}
                rx="30"
                ry="30"
              />
            </clipPath>
            <mask id="cutoutMask">
              <rect
                x="0"
                y="0"
                width={mainSize.width + 80}
                height={mainSize.height}
                fill="white"
              />
              {!isMobile && holeW > 0 && holeH > 0 && (
                <path
                  d={roundedRectPath(
                    holeX,
                    holeY,
                    holeW,
                    holeH,
                    activeIndex === 0
                      ? { tl: 0, tr: 40, br: 0, bl: 40 }
                      : activeIndex === 1
                      ? { tl: 40, tr: 0, br: 0, bl: 40 }
                      : { tl: 40, tr: 0, br: 0, bl: 0 }
                  )}
                  fill="black"
                />
              )}
            </mask>
          </defs>
          <image
            href={MainHome}
            x="0"
            y="0"
            width={mainSize.width}
            height={mainSize.height}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#outerClip)"
            mask="url(#cutoutMask)"
          />
        </svg>

        {/* Text overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[30px] z-10 flex items-end">
          <div className="p-6 lg:p-8 text-white">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 leading-tight">
              Crafting Modern Architecture
            </h1>
            <h2 className="text-lg lg:text-2xl font-light mb-4 leading-tight">
              For A Better Future.
            </h2>
            <p className="text-sm lg:text-lg opacity-90 mb-6 max-w-md leading-relaxed">
              Custom crafted floor plans and immersive 3D visualizations
              tailored for modern life and future-forward design
            </p>
            <button className="pointer-events-auto bg-white text-black px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="relative z-40 w-full lg:w-1/5">
        {isMobile ? (
          // Mobile Embla Slider
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex-shrink-0 w-[260px] h-[220px]">
                  <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-lg">
                    <img
                      src={f.src}
                      alt={f.alt}
                      className="w-full h-full object-cover select-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-[30px]" />
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <h3 className="text-base font-semibold mb-1 leading-tight">
                        {f.title}
                      </h3>
                      <p className="text-xs opacity-80 leading-relaxed">
                        {f.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop Column
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                ref={(el) => {
                  thumbnailRefs.current[i] = el;
                }}
                className={getCardClass(i)}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 select-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-[30px]" />
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h3 className="text-lg font-semibold mb-1 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {f.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleScaleLayout;

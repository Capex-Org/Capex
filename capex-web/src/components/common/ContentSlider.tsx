import useEmblaCarousel from "embla-carousel-react";
import type { ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";

interface ContentSliderProps {
  items: ReactNode[];
  delay?: number; 
}

export default function ContentSlider({
  items,
  delay = 3000,
}: ContentSliderProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" }, // carousel options
    [Autoplay({ delay, stopOnMouseEnter: true, stopOnInteraction: false })] // plugins array
  );

  return (
    <div
      className="overflow-hidden w-full max-w-[1559px] mx-auto"
      ref={emblaRef}
    >
      <div className="flex justify-between">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[450px] flex-shrink-0 p-4 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

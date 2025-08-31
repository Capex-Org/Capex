import useEmblaCarousel from "embla-carousel-react";
import type { ReactNode } from "react";

interface ContentSliderProps {
  items: ReactNode[];
}

export default function ContentSlider({ items }: ContentSliderProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: true, // 🔑 infinite drag loop
    align: "start",
  });

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

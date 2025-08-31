import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ContentSliderProps {
  items: ReactNode[];
  speed?: number; // speed of auto sliding
}

export default function ContentSlider({
  items,
  speed = 15,
}: ContentSliderProps) {
  return (
    <div className="overflow-hidden w-full cursor-grab">
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: speed,
          ease: "circIn",
        }}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }} // adjust based on content
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
      >
        {/* First loop */}
        {items.map((item, index) => (
          <div key={index} className="min-w-[450px] flex-shrink-0 text-center">
            {item}
          </div>
        ))}

        {/* Duplicate loop for seamless sliding */}
        {items.map((item, index) => (
          <div
            key={`dup-${index}`}
            className="min-w-[450px] flex-shrink-0 text-center"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

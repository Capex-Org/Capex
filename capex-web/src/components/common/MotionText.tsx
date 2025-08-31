import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const MotionText = ({
  children,
  delay = 0,
  className = "",
}: MotionTextProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      viewport={{ once: true }}
      className={`text-base text-neutral-600 ${className}`}
    >
      {children}
    </motion.p>
  );
};

export default MotionText;

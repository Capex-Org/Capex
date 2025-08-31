import { motion } from "framer-motion";
import KitchenImg from "@/assets/images/kitchen.webp";
import BedroomImg from "@/assets/images/bedroom.webp";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-6 lg:justify-end">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="w-full"
      >
        <img
          src={KitchenImg}
          alt="Modern Kitchen"
          className="rounded-2xl shadow-lg w-full h-[180px] sm:h-[220px] lg:h-auto object-cover"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="w-full lg:mt-20"
      >
        <img
          src={BedroomImg}
          alt="Bedroom Interior"
          className="rounded-2xl shadow-lg w-full h-[180px] sm:h-[220px] lg:h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ImageSection;

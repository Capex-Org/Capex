import { motion } from "framer-motion";
import BedroomImg from "@/assets/images/aboutus.webp";

const SolutionsSection = () => {
  return (
    <section className="grid max-w-[1559px] mx-auto justify-items-center grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-4 lg:px-8">
      {/* Left Side Image */}
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
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full"
      >
        <img
          src={BedroomImg}
          alt="Modern Building"
          className="rounded-2xl w-full h-[450px] lg:h-[550px] object-fit"
        />
      </motion.div>

      {/* Right Side Content */}
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
        className="text-center lg:text-left max-w-[534px] mx-auto lg:mx-0"
      >
        <h2
          className="font-[Playfair_Display] font-normal text-[34.47px] leading-[42.45px] tracking-[0.015em] lg:text-[68px] lg:leading-[90px] text-gray-900"
          style={{
            fontVariantNumeric: "lining-nums proportional-nums",
            verticalAlign: "middle",
          }}
        >
          We provide the <span className="italic">best</span>{" "}
          <span className="text-amber-600 italic">solutions</span> for your
          dream home plan<span className="text-amber-600">.</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default SolutionsSection;

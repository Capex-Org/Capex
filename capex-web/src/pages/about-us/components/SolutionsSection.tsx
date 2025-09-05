import { motion } from "framer-motion";
import BedroomImg from "@/assets/images/aboutus.webp";

const SolutionsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
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
          className="rounded-2xl bg-none w-full h-[320px] sm:h-[500px] lg:h-[650px] object-cover"
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
        className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
          We provide the <span className="italic">best</span>{" "}
          <span className="text-amber-600 italic">solutions</span> for your
          dream home plan<span className="text-amber-600">.</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          From modern designs to sustainable living, our team ensures that your
          home is crafted with precision and care. We combine creativity and
          technical expertise to bring your vision to life.
        </p>
      </motion.div>
    </section>
  );
};

export default SolutionsSection;

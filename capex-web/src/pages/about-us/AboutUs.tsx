import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import KitchenImg from "@/assets/images/kitchen.webp";
import BedroomImg from "@/assets/images/bedroom.webp";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 w-full mx-auto px-4 sm:px-5 md:px-10 lg:px-12">
      <div className="w-full max-w-[1559px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text content */}
        <div>
          <SectionHeader
            eyebrow="ABOUT US"
            title="We help to bring your dream plan to reality"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="text-base text-neutral-600 mb-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
            morbi.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="text-base text-neutral-600"
          >
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
            mauris posuere auctor justo. Habitant proin aliquet volutpat leo
            ultricies.
          </motion.p>
        </div>

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
      </div>
    </section>
  );
}

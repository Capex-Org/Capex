import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import KitchenImg from "@/assets/images/kitchen.webp";
import BedroomImg from "@/assets/images/bedroom.webp";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-4 w-full mx-auto">
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

        {/* Images */}
        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.04,
              ease: [0.25, 0.1, 0.25, 1],
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            viewport={{ once: true }}
            className="flex-1 max-w-full"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={KitchenImg}
              alt="Modern Kitchen"
              className="rounded-2xl shadow-lg w-full max-w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.04,
              ease: [0.25, 0.1, 0.25, 1],
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            viewport={{ once: true }}
            className="flex-1 max-w-full sm:mt-20"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={BedroomImg}
              alt="Bedroom Interior"
              className="rounded-2xl shadow-lg w-full max-w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

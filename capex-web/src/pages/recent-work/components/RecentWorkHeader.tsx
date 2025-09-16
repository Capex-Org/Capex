import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";

const RecentWorkHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true }}
    >
      <SectionHeader
        eyebrow="RECENT WORKS"
        title="Some of our crafts made with love"
      />
    </motion.div>
  );
};

export default RecentWorkHeader;

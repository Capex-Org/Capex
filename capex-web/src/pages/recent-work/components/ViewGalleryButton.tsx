import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ViewGalleryButtonProps {
  buttonText: string;
  delay?: number;
  className?: string;
}

const ViewGalleryButton = ({
  buttonText,
  delay = 0,
  className = "",
}: ViewGalleryButtonProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      viewport={{ once: true }}
    >
      <Button
        className="bg-primary-600 hover:bg-primary-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
        size="lg"
      >
        {buttonText}
        <ArrowUpRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
};

export default ViewGalleryButton;

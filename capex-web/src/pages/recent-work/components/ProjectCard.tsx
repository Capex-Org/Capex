import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  size: "large" | "small";
  delay?: number;
}

const ProjectCard = ({ project, size, delay = 0 }: ProjectCardProps) => {
  const isLarge = size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="overflow-hidden"
        whileHover={{ scale: isLarge ? 1.02 : 1.01 }}
        whileTap={{ scale: isLarge ? 0.98 : 0.99 }}
      >
        {/* Desktop Image */}
        <div className="hidden lg:block">
          <img
            src={project.image}
            alt={project.title}
            className={`object-cover rounded-[30px] hover:scale-105 transition-transform duration-300 ${
              isLarge ? "w-full h-[632px]" : "w-full h-[427px]"
            }`}
          />
        </div>

        {/* Mobile/Tablet Image - Full Width */}
        <div className="lg:hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full min-h-[259px] max-h-[300px] object-cover rounded-[12px] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Typography */}
        <div className="hidden lg:block mt-6 space-y-4">
          <h3
            className="font-normal text-[38px] leading-[50px] tracking-[0px] text-gray-900"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {project.title}
          </h3>
          <p
            className="font-normal text-[20px] leading-[34.63px] tracking-[0%] text-gray-600"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {project.description}
          </p>
        </div>

        {/* Mobile Typography */}
        <div className="lg:hidden mt-4 space-y-2">
          <h3
            className="font-medium text-[16px] leading-[20px] tracking-[1%] text-gray-900"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {project.title}
          </h3>
          <p
            className="font-normal text-[12px] leading-[16px] tracking-[1%] text-gray-600"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

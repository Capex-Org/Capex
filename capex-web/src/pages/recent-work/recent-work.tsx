import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
// Import images properly
import RecentWork1 from "@/assets/images/recentWork1.webp";
import RecentWork2 from "@/assets/images/recentWork2.webp";
import RecentWork3 from "@/assets/images/recentWork3.webp";

const RecentWork = () => {
  const projects = [
    {
      id: 1,
      title: "Villa Furnishing & Interior",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      image: RecentWork1,
      hasButton: true,
      buttonText: "View Gallery",
    },
    {
      id: 2,
      title: "Luxury Hotel Renovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      image: RecentWork2,
      hasButton: false,
    },
    {
      id: 3,
      title: "Residence Swimming Pool",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      image: RecentWork3,
      hasButton: false,
    },
  ];

  return (
    <section className="bg-white py-16 w-full mx-auto px-4 sm:px-5 md:px-10 lg:px-12">
      <div className="w-full max-w-[1559px] mx-auto">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Title + Large Project */}
          <div className="space-y-8">
            {/* Header Text */}
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
            {/* Mobile: View Gallery Button First */}
            <motion.div
              className="mb-8 lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <Button
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                size="lg"
              >
                {projects[0].buttonText}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Large Project Card - Under Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Large Image - Desktop */}
                <div className="hidden lg:block">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-[632px] object-cover rounded-[30px] hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Mobile Image */}
                <div className="lg:hidden">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-[392px] h-[259px] object-cover rounded-[12px] hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Desktop Typography */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <h3
                    className="font-normal text-[38px] leading-[50px] tracking-[0px] text-gray-900"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {projects[0].title}
                  </h3>
                  <p
                    className="font-normal text-[20px] leading-[34.63px] tracking-[0%] text-gray-600"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {projects[0].description}
                  </p>
                </div>

                {/* Mobile Typography */}
                <div className="lg:hidden mt-4 space-y-2">
                  <h3
                    className="font-medium text-[16px] leading-[20px] tracking-[1%] text-gray-900"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {projects[0].title}
                  </h3>
                  <p
                    className="font-normal text-[12px] leading-[16px] tracking-[1%] text-gray-600"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {projects[0].description}
                  </p>
                </div>
              </motion.div>

              {/* Desktop: View Gallery Button - Outside the card */}
              <motion.div
                className="hidden lg:block mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.3,
                }}
                viewport={{ once: true }}
              >
                <Button
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                  size="lg"
                >
                  {projects[0].buttonText}
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Two Smaller Projects */}
          <div className="space-y-6">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2 + index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Small Image - Desktop */}
                  <div className="hidden lg:block">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[427px] object-cover rounded-[30px] hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Mobile Image */}
                  <div className="lg:hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[392px] h-[259px] object-cover rounded-[12px] hover:scale-105 transition-transform duration-300"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

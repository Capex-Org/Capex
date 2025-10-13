import TestimonialSection from "./TestimonialSection";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      id: "1",
      name: "Jenny Wilson",
      position: "CEO & Founder of CAPEX",
      image: "/src/assets/images/recentWork1.webp",
    },
    {
      id: "2",
      name: "Brooklyn Simmons",
      position: "Project Manager",
      image: "/src/assets/images/recentWork2.webp",
    },
    {
      id: "3",
      name: "Darlene Robertson",
      position: "Product Designer",
      image: "/src/assets/images/recentWork3.webp",
    },
    {
      id: "4",
      name: "Jane Cooper",
      position: "UI Designer",
      image: "/src/assets/images/kitchen.webp",
    },
    {
      id: "5",
      name: "Eleanor Pena",
      position: "UX Designer",
      image: "/src/assets/images/aboutus.webp",
    },
    {
      id: "6",
      name: "Theresa Webb",
      position: "UX Designer (Intern)",
      image: "/src/assets/images/bedroom.webp",
    },
    {
      id: "7",
      name: "Albert Flores",
      position: "Front-end Developer",
      image: "/src/assets/images/recentWork1.webp",
    },
    {
      id: "8",
      name: "Wade Warren",
      position: "Front-end Developer",
      image: "/src/assets/images/recentWork2.webp",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div>
        {/* Team Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.05,
            }}
            viewport={{ once: true }}
          >
            Engage with Our{" "}
            <span className="text-amber-600">Creative Team</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.1 + index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <div
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden group-hover:shadow-md transition-shadow duration-300"
                style={{ width: "312px", height: "396px" }}
              >
                {/* Image Section */}
                <div className="relative" style={{ padding: "24px" }}>
                  <div
                    className="overflow-hidden rounded-xl"
                    style={{ width: "264px", height: "264px" }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-6 pb-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

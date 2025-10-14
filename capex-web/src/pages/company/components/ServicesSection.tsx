import { Building2, Cog, Star } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Project Introduction",
      description:
        "We design functional, creative spaces that combine innovation and collaboration to bring your vision to life.",
    },
    {
      icon: Cog,
      title: "Design & Developments",
      description:
        "We turn concepts into reality through creative design, precise development, and seamless collaboration.",
    },
    {
      icon: Star,
      title: "Delivery & Client Feedback",
      description:
        "We ensure timely delivery while gathering feedback to refine outcomes and exceed client expectations.",
    },
  ];

  return (
    <section className="section-content">
      <div>
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
            Our agency knows work dominates{" "}
            <span className="text-primary-600">our lives</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.1 + index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: 0.15 + index * 0.05,
                }}
                viewport={{ once: true }}
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>

              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: 0.2 + index * 0.05,
                }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.05,
                }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

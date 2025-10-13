import { Building2, Cog, Star } from "lucide-react";

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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our agency knows work dominates{" "}
            <span className="text-amber-600">our lives</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

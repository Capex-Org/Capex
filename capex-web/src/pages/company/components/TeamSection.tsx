import TestimonialSection from "./TestimonialSection";

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
      name: "Eleanor Pena",
      position: "UX Designer",
      image: "/src/assets/images/kitchen.webp",
    },
    {
      id: "5",
      name: "Theresa Webb",
      position: "UI Designer (Intern)",
      image: "/src/assets/images/aboutus.webp",
    },
    {
      id: "6",
      name: "Albert Flores",
      position: "Front-end Developer",
      image: "/src/assets/images/bedroom.webp",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div>
        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Engage with Our{" "}
            <span className="text-amber-600">Creative Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>

              <p className="text-gray-600 text-sm">{member.position}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;

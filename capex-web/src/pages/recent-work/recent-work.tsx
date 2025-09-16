import RecentWork1 from "@/assets/images/recentWork1.webp";
import RecentWork2 from "@/assets/images/recentWork2.webp";
import RecentWork3 from "@/assets/images/recentWork3.webp";
import RecentWorkHeader from "./components/RecentWorkHeader";
import ViewGalleryButton from "./components/ViewGalleryButton";
import ProjectCard from "./components/ProjectCard";

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
    <section className="section-white">
      <div className="section-content">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Title + Large Project */}
          <div className="space-y-8">
            {/* Header Text */}
            <RecentWorkHeader />

            {/* Mobile: View Gallery Button First */}
            <ViewGalleryButton
              className="mb-8 lg:hidden"
              buttonText="View Gallery"
              delay={0.1}
            />

            {/* Large Project Card */}
            <ProjectCard project={projects[0]} size="large" delay={0.1} />

            {/* Desktop: View Gallery Button */}
            <ViewGalleryButton
              className="hidden lg:block mt-6"
              buttonText="View Gallery"
              delay={0.3}
            />
          </div>

          {/* Right Column - Two Smaller Projects */}
          <div className="space-y-6">
            {projects.slice(1).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                size="small"
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

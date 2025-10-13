import SectionWrapper from "@/pages/home/components/SectionWrapper";

const GalleryHeroSection = () => {
  return (
    <SectionWrapper>
      <div className="text-center py-16 lg:py-24">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Our Gallery
        </h1>
        <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Explore our portfolio of stunning interior designs, 3D visualizations,
          and personalized collaborations that bring your vision to life.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default GalleryHeroSection;

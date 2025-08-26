import SideEffect1 from "@/assets/Side Effect 01.svg";
import SideEffect2 from "@/assets/Side Effect 02.svg";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="relative bg-section-gradient w-full overflow-hidden">
      {/* Left corner decorative image */}
      <img
        src={SideEffect1}
        alt="effect 1"
        className="absolute top-0 left-0 opacity-100"
        style={{
          width: "835.83px",
          height: "835.83px",
          transform: "translate(-25%,-4%)",
        }}
      />

      {/* Right bottom decorative image */}
      <img
        src={SideEffect2}
        alt="effect 2"
        className="absolute bottom-0 right-0 opacity-100"
        style={{
          width: "835.83px",
          height: "835.83px",
          transform: "translate(25%,35%)",
        }}
      />

      {/* Content */}
      <div className="relative  py-16 px-4 sm:px-5 md:px-10 lg:px-12">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

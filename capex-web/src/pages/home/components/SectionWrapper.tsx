import SideEffect1 from "@/assets/Side Effect 01.svg";
import SideEffect2 from "@/assets/Side Effect 02.svg";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  rotateLeft?: number; // rotation angle for left image
  rotateRight?: number; // rotation angle for right image
  leftX?: string; // X offset for left image
  leftY?: string; // Y offset for left image
  rightX?: string; // X offset for right image
  rightY?: string; // Y offset for right image
  leftWidth?: string; // Width for left image
  leftHeight?: string; // Height for left image
  rightWidth?: string; // Width for right image
  rightHeight?: string; // Height for right image
}

const SectionWrapper = ({
  children,
  rotateLeft = 0,
  rotateRight = 0,
  leftX = "-25%",
  leftY = "-4%",
  rightX = "25%",
  rightY = "35%",
  leftWidth = "835.83px",
  leftHeight = "835.83px",
  rightWidth = "835.83px",
  rightHeight = "835.83px",
}: SectionWrapperProps) => {
  return (
    <section className="relative bg-section-gradient w-full overflow-hidden">
      {/* Left corner decorative image */}
      <img
        src={SideEffect1}
        alt="effect 1"
        className="absolute top-0 left-0 opacity-100"
        style={{
          width: leftWidth,
          height: leftHeight,
          transform: `translate(${leftX},${leftY}) rotate(${rotateLeft}deg)`,
        }}
      />

      {/* Right bottom decorative image */}
      <img
        src={SideEffect2}
        alt="effect 2"
        className="absolute bottom-0 right-0 opacity-100"
        style={{
          width: rightWidth,
          height: rightHeight,
          transform: `translate(${rightX},${rightY}) rotate(${rotateRight}deg)`,
        }}
      />

      {/* Content */}
      <div className="relative py-16 px-4 sm:px-5 md:px-10 lg:px-12">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

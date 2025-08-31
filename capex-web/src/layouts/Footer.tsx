import { Button } from "@/components/ui/button";
import SectionWrapper from "@/pages/home/components/SectionWrapper";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <SectionWrapper
      rotateLeft={25}
      rotateRight={60}
      leftX="-30%"
      leftY="-30%"
      rightX="40%"
      rightY="30%"
      leftWidth="600px"
      leftHeight="600px"
      rightWidth="600px"
      rightHeight="600px"
    >
      <footer className="relative text-center text-sm text-muted-foreground px-4">
        {/* Nav + Desktop Button */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8 mb-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-base font-medium text-white">
            <a href="#about" className="hover:text-primary-600 transition">
              About
            </a>
            <a href="#features" className="hover:text-primary-600 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-primary-600 transition">
              Pricing
            </a>
            <a href="#gallery" className="hover:text-primary-600 transition">
              Gallery
            </a>
            <a href="#team" className="hover:text-primary-600 transition">
              Team
            </a>
          </nav>

          {/* Contact Button (Desktop Only, spaced after nav) */}
          <Button className="hidden md:flex px-6 py-2 rounded-full bg-white text-black font-medium shadow hover:bg-neutral-200 transition items-center gap-2">
            <Phone /> Contact Us
          </Button>
        </div>

        {/* Divider */}
        <hr className="border-t border-border w-full max-w-3xl md:max-w-6xl mx-auto mb-4" />

        {/* Copyright + Mobile Contact */}
        <div className="flex  flex-row w-full justify-center items-center gap-4 md:justify-center md:max-w-6xl mx-auto">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} CAPEX. All rights reserved.
          </p>

          {/* Contact Button (Mobile Only) */}
          <Button className="md:hidden px-6 py-2 rounded-full bg-white text-black font-medium shadow hover:bg-neutral-200 transition flex items-center gap-2">
            <Phone /> Contact Us
          </Button>
        </div>
      </footer>
    </SectionWrapper>
  );
}

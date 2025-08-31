import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  navItems: { label: string; path: string }[];
  side?: "left" | "right"; // default "left"
}

export default function Sidebar({
  open,
  onClose,
  navItems,
  side = "right",
}: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 h-full w-64 bg-gradient-to-b from-neutral-900 to-neutral-800 shadow-lg z-50 transform transition-transform duration-300",
          side === "left" ? "left-0" : "right-0",
          side === "left"
            ? open
              ? "translate-x-0"
              : "-translate-x-full"
            : open
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <Link
            to="/"
            className="font-heading text-2xl font-bold text-white"
            onClick={onClose}
          >
            CAPEX
          </Link>
          <button className="text-white" onClick={onClose}>
            <X size={26} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary font-bold" : "text-white"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Button */}
        <div className="absolute bottom-6 left-0 w-full px-6">
          <Button size="pill" variant="secondary" className="w-full">
            <Phone />
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}

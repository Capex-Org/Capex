import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import Sidebar from "./Sidebar";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Pricing", path: "/pricing" },
  { label: "Floor Plans", path: "/floor-plans" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ", path: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full px-4 sm:px-5 md:px-10 lg:px-12 z-50">
      <div className="max-w-[1559px] mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-heading text-3xl font-bold text-white">
            CAPEX
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "relative text-[18px] font-medium transition-colors hover:text-primary",
                    isActive
                      ? "text-white font-bold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary"
                      : "text-white"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop button */}
          <div className="hidden md:block">
            <Button size="pill" variant="secondary">
              <Phone /> Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
        side="right"
      />
    </header>
  );
}

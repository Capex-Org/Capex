import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import Sidebar from "./Sidebar";
import BlackLogo from "@/assets/images/logo/Black.webp";
import WhiteLogo from "@/assets/images/logo/White.webp";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Pricing", path: "/pricing" },
  { label: "Floor Plans", path: "/floor-plans" },
  { label: "Gallery", path: "/gallery" },
  { label: "Company", path: "/company" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the home route
  const isHomeRoute = location.pathname === "/";

  // Text color classes based on route
  const textColorClass = isHomeRoute ? "text-white" : "text-black";
  const buttonVariant = isHomeRoute ? "secondary" : "default";
  const buttonClass = isHomeRoute
    ? "bg-white text-black hover:bg-neutral-200"
    : "bg-primary-600 text-white hover:bg-primary-400";

  return (
    <header className="absolute top-0 w-full px-4 sm:px-5 md:px-10 lg:px-12 z-50 ">
      <div className="max-w-[1559px] mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isHomeRoute ? WhiteLogo : BlackLogo}
              alt="CAPEX Logo"
              className="h-20 pt-3 w-auto"
            />
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
                      ? cn(
                          "font-bold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary",
                          textColorClass
                        )
                      : textColorClass
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop button */}
          <div className="hidden md:block">
            <Button
              size="pill"
              variant={buttonVariant}
              className={cn(
                "px-6 py-2 rounded-full font-medium shadow transition items-center gap-2",
                buttonClass
              )}
            >
              <Phone /> Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn("md:hidden", textColorClass)}
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

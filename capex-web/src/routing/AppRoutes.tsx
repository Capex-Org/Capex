import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import Pricing from "@/pages/pricing/Pricing";
import FloorPlans from "@/pages/floor-plans/FloorPlans";
import Gallery from "@/pages/gallery/Gallery";
import Company from "@/pages/company/Company";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="floor-plans" element={<FloorPlans />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="company" element={<Company />} />
        {/* <Route path="faq" element={<FAQ />} /> */}
      </Route>
    </Routes>
  );
}

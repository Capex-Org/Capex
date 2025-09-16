import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import Pricing from "@/pages/pricing/Pricing";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        {/* <Route path="floor-plans" element={<FloorPlans />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="faq" element={<FAQ />} /> */}
      </Route>
    </Routes>
  );
}

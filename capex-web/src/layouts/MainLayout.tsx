import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      {/* shared padding wrapper */}
      <main className="flex-1 w-full ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

import { Outlet } from "react-router";
import Footer from "../footer/footer";

export default function Navbar() {
  return (
    <>
      {/* Fixed Navbar at top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-2xl p-3 shadow-md">
        Navbar
      </nav>

      {/* Main content area with padding to prevent navbar overlap */}
      <main className="pt-16 pb-10 min-h-screen">
        <Outlet />
      </main>

      {/* Fixed Footer at bottom right */}
      <Footer />
    </>
  );
}

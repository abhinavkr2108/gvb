import { Outlet } from "react-router";
import Footer from "../footer/footer";
import Header from "./header";

export default function Navbar() {
  return (
    <>
      {/* Fixed Navbar at top */}
      <Header />

      {/* Main content area with padding to prevent navbar overlap */}
      <main className="pt-16 pb-10 min-h-screen">
        <Outlet />
      </main>

      {/* Fixed Footer at bottom right */}
      <Footer />
    </>
  );
}

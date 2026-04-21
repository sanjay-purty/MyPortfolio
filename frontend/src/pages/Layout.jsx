import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/Navigation";
import { ScrollTopButton } from "../components/ScrollTopButton";

export function Layout() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="container-page py-10">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

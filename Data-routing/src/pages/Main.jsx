import { FaArrowRight, FaPlay, FaStar, FaBars, FaCode } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;

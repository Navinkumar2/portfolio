import { useEffect } from "react";
import { Link } from "react-scroll";


export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            <span className="text-blue-500"></span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" smooth={true} duration={500} spy={true} offset={-70} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} spy={true} offset={-70} className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link>
            <Link to="projects" smooth={true} duration={500} spy={true} offset={-70} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} spy={true} offset={-70} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

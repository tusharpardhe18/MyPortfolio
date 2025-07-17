import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ onLinkClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link cursor-none" onClick={onLinkClick}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link cursor-none" onClick={onLinkClick}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#projects"
          className="nav-link cursor-none"
          onClick={onLinkClick}
        >
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#contact"
          className="nav-link cursor-none"
          onClick={onLinkClick}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg transition-all duration-300">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-none"
          >
            Tushar
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "./assets/close.svg" : "./assets/menu.svg"}
              alt="menu button"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="brand">
          <div className="brand-text">
            <h2>
              DINESH PANDI
            </h2>
            <p>WEB DEVELOPER</p>
          </div>
        </a>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Resume */}
        <a href="/resume.pdf" className="resume-btn">
          <span>RESUME</span>
          <ArrowUpRight size={18} />
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </motion.header>
  );
}

export default Navbar;
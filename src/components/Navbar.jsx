import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import "../component_styling/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    
    // Only smooth scroll for anchor links that aren't routing to a different page
    if (window.location.pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      if (targetId === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.querySelector(targetId);
      if (element) {
        const topOffset = element.offsetTop - 80;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT", href: "/#about" },
    { label: "BRIEF US", href: "/#contact", className: "nav-cta" },
  ];

  return (
    <nav className={`navbar-floating ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-glass-container">
        {/* Logo */}
        <a href="/" className="nav-logo-simple" onClick={(e) => handleLinkClick(e, "#top")}>
          AAKASH<span className="dot">.</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className={link.className || ""} 
              onClick={(e) => handleLinkClick(e, link.href.replace("/", ""))}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Corner: Theme + Menu */}
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle Theme">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button className="mobile-toggle-btn" onClick={toggleMenu}>
            {isOpen ? <IoClose /> : <HiOutlineSquares2X2 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a 
            key={link.label}
            href={link.href} 
            onClick={(e) => handleLinkClick(e, link.href.replace("/", ""))}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

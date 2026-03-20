import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "../component_styling/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const links = [
    { href: "#about", label: "👩‍💼 About" },
    { href: "#projects", label: "💼 Projects" },
    { href: "#contact", label: "📬 Contact" },
  ];

  const handleScroll = () => {
    const scrollPos = window.scrollY + 100; // Small offset for early highlighting

    links.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveLink(href);
        }
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      setActiveLink("#contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.offsetTop - 70; // Adjust for navbar height
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
      setActiveLink(href);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#about" className="nav-logo" onClick={(e) => handleLinkClick(e, "#about")}>
          Aakash
        </a>

        {/* Mobile Menu Icon */}
        <button className="mobile-menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Links */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleLinkClick(e, href)}
              className={`nav-link ${activeLink === href ? "active" : ""}`}
            >
              {label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

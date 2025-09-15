import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "../component_styling/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const location = useLocation();

  const links = [
    { path: "/", label: "🏡 Home" },
    { path: "/project", label: "💼 Project" },
    { path: "/contact", label: "📬 Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="brand-name">Aakash</h1>
      </div>

      <div className="nav-links">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`nav-link ${location.pathname === path ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="mode-switch">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          <div className="theme-icon-circle">
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

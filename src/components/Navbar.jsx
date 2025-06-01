import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import "../component_styling/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  // console.log(theme);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Aakash</h1>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme == "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
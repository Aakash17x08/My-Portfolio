import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./ThemeContext";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      // Only prevent if the target or its parent is an image, 
      // or just prevent everywhere if the user wants full protection.
      // The user asked to "Disable right-click", so we'll do it globally for ease.
      e.preventDefault();
    };

    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />

        {/* Since it is a single page application, we render Home as the main entry point */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Support old paths by redirecting or just rendering Home */}
          <Route path="/project" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>

        {/* footer */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

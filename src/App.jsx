import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./ThemeContext";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
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

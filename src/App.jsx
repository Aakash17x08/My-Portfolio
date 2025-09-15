import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import { ThemeProvider } from "./ThemeContext";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import All from "./components/project/All";
import Frontend from "./components/project/Frontend";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />

        {/* routes */}
        <Routes>
          <Route path="/" element={<About />} />

          <Route path="/project" element={<Projects />}>
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

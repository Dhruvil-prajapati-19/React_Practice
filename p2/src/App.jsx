import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Sumdemo from "./pages/Sumdemo";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mt-4">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sumdemo" element={<Sumdemo />} />
      </Routes>
        </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
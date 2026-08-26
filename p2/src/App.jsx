import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Sumdemo from "./pages/Sumdemo";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <h1>Welcome to my React App</h1>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sumdemo" element={<Sumdemo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ServicesPage from "./pages/services/Services";
import Areas from "./pages/areas/Areas";
import AreaDetails from "./pages/areas/AreaDetails";
import ArticlesPage from "./pages/articles/Articles";
import ArticleDetails from "./pages/articles/ArticleDetails";
import Contact from "./pages/contact/Contact";
import FloatingIcons from "./components/floating-icons/FloatingIcons";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/:areaName" element={<AreaDetails />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingIcons />
      </div>
    </Router>
  );
}

export default App;

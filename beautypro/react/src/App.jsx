
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PremiumProducts from "./pages/PremiumProducts";
import Premium from "./pages/Premium";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-container"> {/* ✅ Add this wrapper */}
        <Navbar />

        <div className="main-content"> {/* ✅ Main content grows */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/premium-products" element={<PremiumProducts />} />
            <Route path="/premium" element={<Premium />} />
          </Routes>
        </div>

        <Footer /> {/* ✅ Sticky footer */}
      </div>
    </Router>
  );
}

export default App;

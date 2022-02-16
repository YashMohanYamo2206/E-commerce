import React, { Fragment } from "react";
import Landing from "./pages/landing.js";
import './styles/main.css'
import Header from "../src/components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth.js";
import Footer from "./components/footer/footer.js";
import Product from "./components/productinfo/Product.js";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
          <Footer />
      </Router>
    </Fragment>
  );
}

export default App;

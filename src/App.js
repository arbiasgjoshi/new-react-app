import React from "react";
import "./App.css";
import About from "./pages/about";
import PostsPage from "./pages/posts";
import Home from "./pages/home";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contact";

const App = () => {
  return (
    <>
      <div className="container">    
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
};

export default App;

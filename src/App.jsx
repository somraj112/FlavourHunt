import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Recipes from './components/Recipes.jsx';
import Blog from './components/Blog.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
function App() {
  return (
    <>
      <BrowserRouter basename="/FlavourHunt">
        <Navbar />
        <main className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

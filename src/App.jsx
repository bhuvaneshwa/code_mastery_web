import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';  // Import the Navbar component

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Services from './components/Services';
import Web from './components/Services/Web';
import Mobile from './components/Services/Mobile';
import Seo from './components/Services/Seo';
import Graphicdesign from './components/Services/Graphicdesign';
import Footer from './components/Footer';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services/>} />

        <Route path="/Services/web" element={<Web/>} />
        <Route path="/Services/mobile" element={<Mobile/>} />
        <Route path="/Services/seo" element={<Seo/>} />
        <Route path="/Services/graphicdesign" element={<Graphicdesign/>} />

        <Route path="/blog" element={<Blog />} />
     
      </Routes>
      <Footer/>
    </Router>
  );
}

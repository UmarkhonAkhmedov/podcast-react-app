import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from './components/Main/Footer';
import Navbar from './components/Main/Navbar';
import Sponsors from './components/Main/Sponsors';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Host from './pages/Host';
import Podcasts from './pages/Podcasts';


function App() {
  const location = useLocation()
  if(location.pathname === "/contact"){
    return (
      <div>
        <div className='margin'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }else {
    return (
      <div>
        <div className='margin'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Sponsors />
        <Footer />
      </div>
    );
  }
  
  
}

export default App;

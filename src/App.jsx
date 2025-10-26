import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import InteractiveLabs from './components/InteractiveLabs.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1020] via-[#0b1020] to-[#0a0f1d] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <InteractiveLabs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <hr />
        <HeroSection />
        <hr />
        <ServicesSection />
        <hr />
        <ContactSection />
        <hr />
        <Footer />
    </div>
  );
}

export default App;
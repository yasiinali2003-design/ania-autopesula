import React from 'react';
import Navbar from '../components/ania/Navbar';
import HeroSection from '../components/ania/HeroSection';
import ServicesSection from '../components/ania/ServicesSection';
import PricePreview from '../components/ania/PricePreview';
import AboutSection from '../components/ania/AboutSection';
import ContactSection from '../components/ania/ContactSection';
import Footer from '../components/ania/Footer';

export default function Home() {
  return (
    <div className="bg-ania-surface h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <Navbar />
      <div className="snap-start">
        <HeroSection />
      </div>
      <div className="snap-start">
        <ServicesSection />
      </div>
      <div className="snap-start">
        <PricePreview />
      </div>
      <div className="snap-start">
        <AboutSection />
      </div>
      <div className="snap-start">
        <ContactSection />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}
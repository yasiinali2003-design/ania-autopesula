import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (id === 'palvelut-page') { navigate('/Palvelut'); return; }
    if (id === 'hinnasto-page') { navigate('/Hinnasto'); return; }
    if (window.location.pathname !== '/Home') {
      navigate('/Home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Etusivu', id: 'hero' },
    { label: 'Palvelut', id: 'palvelut-page' },
    { label: 'Hinnasto', id: 'hinnasto-page' },
    { label: 'Meistä', id: 'about' },
    { label: 'Yhteystiedot', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ania-navy/98 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button onClick={() => scrollTo('hero')} className="font-serif text-xl text-white">
              Ania <span className="text-ania-blue">Autopalvelu</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-sans text-sm text-white/70 hover:text-ania-blue transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Phone CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+358504798334"
                className="hidden sm:flex items-center gap-2 bg-ania-blue hover:bg-ania-blue/90 text-white font-sans font-semibold px-5 py-2.5 text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                050 479 8334
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white/70 hover:text-white transition-colors p-1"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-ania-navy border-t border-white/10">
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left py-3 font-sans text-white/70 hover:text-ania-blue transition-colors border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}
              <a href="tel:+358504798334" className="block pt-4 text-ania-blue font-sans font-semibold">
                050 479 8334
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky mobile phone button */}
      <a
        href="tel:+358504798334"
        className="fixed bottom-6 right-6 z-50 sm:hidden flex items-center gap-2 bg-ania-blue text-white font-sans font-semibold px-5 py-3.5 shadow-xl text-sm"
      >
        <Phone className="w-4 h-4" />
        Soita
      </a>
    </>
  );
}

import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-ania-navy">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=85"
          alt="BMW 5-series"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ania-navy via-ania-navy/90 to-ania-navy/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Autopesu ja<br />
            <span className="text-ania-blue">autonhoito</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl font-sans font-light leading-relaxed mb-10 max-w-lg">
            Ammattitaitoinen käsinpesu, sisäpuhdistus ja kiillotus. Yli 20 vuoden kokemuksella.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/Hinnasto"
              className="inline-flex items-center gap-2 bg-ania-blue hover:bg-ania-blue/90 text-white font-sans font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
            >
              Katso hinnasto
            </Link>
            <a
              href="tel:+358504798334"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-ania-blue hover:text-ania-blue text-white font-sans px-8 py-4 text-sm tracking-wide transition-colors"
            >
              <Phone className="w-4 h-4" />
              050 479 8334
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-wrap gap-8 text-sm font-sans">
            <div>
              <span className="text-white/50 block mb-1">Arkisin</span>
              <span className="text-white font-medium">08:00 – 17:00</span>
            </div>
            <div>
              <span className="text-white/50 block mb-1">Viikonloppuisin</span>
              <span className="text-white font-medium">10:00 – 17:00</span>
            </div>
            <div>
              <span className="text-white/50 block mb-1">Ei ajanvarausta</span>
              <span className="text-white font-medium">Tule suoraan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ania-blue via-ania-blue/50 to-transparent" />
    </section>
  );
}

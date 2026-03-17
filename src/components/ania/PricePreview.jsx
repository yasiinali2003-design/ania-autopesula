import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const prices = [
  { name: 'Peruskäsinpesu (kesä)', price: '20' },
  { name: 'Ulkopesu + imurointi', price: '35' },
  { name: 'Auton täyshoito', price: '60' },
  { name: 'Kevyt vahaus', price: '45' },
  { name: 'Käsivahaus', price: 'alk. 100' },
  { name: 'Renkaiden vaihto', price: '25' },
];

export default function PricePreview() {
  return (
    <section className="bg-ania-navy py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* Left - Price list */}
          <div>
            <span className="text-ania-blue text-sm font-sans font-semibold tracking-widest uppercase mb-4 block">
              Hinnasto
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-12">
              Suosituimmat palvelut
            </h2>

            {/* Price table */}
            <div className="border-t border-white/10">
              {prices.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 border-b border-white/10 group"
                >
                  <span className="text-white/80 font-sans text-base group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <span className="font-mono text-xl text-ania-blue ml-4">
                    {item.price}€
                  </span>
                </div>
              ))}
            </div>

            <p className="text-white/40 font-sans text-xs mt-6">
              * Hinnat henkilöautoille. Maastoauto +7€, pakettiauto +12€.
            </p>
          </div>

          {/* Right - CTA box */}
          <div className="bg-white/5 border border-white/10 p-10">
            <h3 className="font-serif text-2xl text-white mb-4">
              Yritysasiakas?
            </h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-8">
              Tarjoamme erikoishintoja autoliikkeille, taksiyrittäjille ja yritysfloteille. 
              Joustava laskutus ja noutapalvelu.
            </p>
            <a
              href="tel:+358504798334"
              className="block w-full text-center bg-ania-blue hover:bg-ania-blue/90 text-white font-sans font-semibold px-6 py-4 text-sm transition-colors mb-4"
            >
              050 479 8334
            </a>
            <Link
              to="/Hinnasto"
              className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-ania-blue text-white hover:text-ania-blue font-sans text-sm py-4 transition-colors"
            >
              Koko hinnasto <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

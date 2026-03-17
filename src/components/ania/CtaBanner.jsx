import React from 'react';
import { Phone } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-ania-blue py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-2">
              Tule käymään ilman ajanvarausta
            </h2>
            <p className="text-white/80 font-sans">
              Ma-pe 08-17, la-su 10-17. Takomotie 1-3, Helsinki
            </p>
          </div>
          <a
            href="tel:+358504798334"
            className="flex-shrink-0 flex items-center gap-3 bg-ania-navy hover:bg-ania-navy/90 text-white font-sans font-semibold px-8 py-4 text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            050 479 8334
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const priceCategories = [
  {
    title: 'Autopesut kesä',
    items: [
      { name: 'Peruskäsinpesu', henkilo: '20', maasto: '25', paketti: '30' },
      { name: 'Peruskäsinpesu + ovienvälit pesu ja kuivaus', henkilo: '25', maasto: '30', paketti: '35' },
      { name: 'Ulkopesu + imurointi', henkilo: '35', maasto: '40', paketti: '45' },
      { name: 'Auton täyshoito', henkilo: '60', maasto: '60', paketti: '60' },
    ],
  },
  {
    title: 'Autopesut talvi',
    items: [
      { name: 'Peruskäsinpesu', henkilo: '35', maasto: '45', paketti: '50' },
      { name: 'Peruskäsinpesu + ovienvälit pesu ja kuivaus', henkilo: '40', maasto: '50', paketti: '55' },
    ],
  },
  {
    title: 'Sisäpuhdistus',
    items: [
      { name: 'Imurointi + sisäpuhdistus', henkilo: 'alk. 30', maasto: 'alk. 30', paketti: 'alk. 30' },
      { name: 'Nahkasisustan hoitokäsittely', henkilo: '60', maasto: '60', paketti: '60' },
      { name: 'Penkkien pesu', henkilo: 'alk. 60', maasto: 'alk. 60', paketti: 'alk. 60' },
    ],
  },
  {
    title: 'Kiillotus ja vahaus',
    items: [
      { name: 'Kevyt vahaus', henkilo: '45', maasto: '55', paketti: '60' },
      { name: 'Käsivahaus', henkilo: 'alk. 100', maasto: 'alk. 100', paketti: 'alk. 100' },
      { name: 'Kovavahaus', henkilo: 'alk. 150', maasto: 'alk. 150', paketti: 'alk. 150' },
      { name: 'Koneellinen kiillotus', henkilo: 'alk. 150', maasto: 'alk. 150', paketti: 'alk. 150' },
      { name: 'Keraaminen pinnoitus', henkilo: '500', maasto: '750', paketti: '750' },
    ],
  },
  {
    title: 'Renkaat',
    items: [
      { name: 'Renkaiden vaihto', henkilo: '25', maasto: '35', paketti: '40' },
      { name: 'Renkaiden vaihto + pesu', henkilo: '35', maasto: '45', paketti: '50' },
      { name: 'Renkaiden asennus vanteille, tasapainotus ja allelaitto', henkilo: 'alk. 60', maasto: 'alk. 60', paketti: 'alk. 60' },
    ],
  },
];

export default function Hinnasto() {
  return (
    <div className="bg-ania-surface min-h-screen">
      {/* Top bar */}
      <div className="bg-white border-b border-ania-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/Home" className="flex items-center gap-2 text-ania-text/60 hover:text-ania-blue transition-colors font-sans text-sm">
            <ArrowLeft className="w-4 h-4" />
            Takaisin
          </Link>
          <Link to="/Home" className="font-serif text-xl text-ania-navy">
            Ania <span className="text-ania-blue">Autopalvelu</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-ania-navy py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-ania-blue text-sm font-sans font-semibold tracking-widest uppercase mb-4 block">
            Hinnasto
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white">
            Palveluhinnasto
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Notice */}
        <div className="bg-ania-blue/10 border-l-4 border-ania-blue px-6 py-4 mb-12">
          <p className="text-ania-text font-sans text-sm">
            <strong>Huomio:</strong> Autopesun hinta riippuu auton liasta. Hinnat ovat ohjeellisia.
          </p>
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-[1fr_120px_120px_120px] gap-4 pb-4 border-b-2 border-ania-navy mb-8">
          <div className="font-sans text-sm font-semibold text-ania-navy">Palvelu</div>
          <div className="font-sans text-sm font-semibold text-ania-navy text-center">Henkilöauto</div>
          <div className="font-sans text-sm font-semibold text-ania-navy text-center">Maastoauto</div>
          <div className="font-sans text-sm font-semibold text-ania-navy text-center">Pakettiauto</div>
        </div>

        {/* Price categories */}
        {priceCategories.map((category, ci) => (
          <div key={ci} className="mb-12">
            <h2 className="font-serif text-2xl text-ania-navy mb-6">{category.title}</h2>
            <div className="space-y-0">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className={`grid md:grid-cols-[1fr_120px_120px_120px] gap-4 py-4 border-b border-ania-navy/10 ${i % 2 === 0 ? 'bg-white' : 'bg-transparent'} px-4 -mx-4`}
                >
                  <div className="font-sans text-ania-text">{item.name}</div>
                  <div className="flex md:block justify-between">
                    <span className="md:hidden text-ania-text/50 font-sans text-sm">Henkilöauto</span>
                    <span className="font-mono text-ania-blue text-center block">{item.henkilo}€</span>
                  </div>
                  <div className="flex md:block justify-between">
                    <span className="md:hidden text-ania-text/50 font-sans text-sm">Maastoauto</span>
                    <span className="font-mono text-ania-text/70 text-center block">{item.maasto}€</span>
                  </div>
                  <div className="flex md:block justify-between">
                    <span className="md:hidden text-ania-text/50 font-sans text-sm">Pakettiauto</span>
                    <span className="font-mono text-ania-text/70 text-center block">{item.paketti}€</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-ania-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl text-ania-navy mb-2">Yritysasiakkaille erikoishinnat</h3>
            <p className="text-ania-text/60 font-sans text-sm">
              Tarjoamme joustavan laskutuksen ja noutapalvelun.
            </p>
          </div>
          <a
            href="tel:+358504798334"
            className="flex items-center gap-3 bg-ania-blue hover:bg-ania-blue/90 text-white font-sans font-semibold px-8 py-4 text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            050 479 8334
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ania-navy py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-serif text-xl text-white">
            Ania <span className="text-ania-blue">Autopalvelu</span>
          </span>
          <p className="text-white/50 font-sans text-sm">© {new Date().getFullYear()} Bahasht Oy. Takomotie 1-3, Helsinki</p>
        </div>
      </footer>
    </div>
  );
}

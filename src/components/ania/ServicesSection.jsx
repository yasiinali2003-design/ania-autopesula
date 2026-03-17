import React from 'react';
import { Droplets, Sparkles, Car, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Droplets,
    title: 'Käsinpesu',
    desc: 'Huolellinen ulkopuolen pesu ammattipesuaineilla. Ei naarmuja.',
    price: '20',
  },
  {
    icon: Car,
    title: 'Sisäpuhdistus',
    desc: 'Imurointi, pintojen pyyhintä ja ikkunoiden pesu sisältä.',
    price: 'alk. 30',
  },
  {
    icon: Sparkles,
    title: 'Kiillotus',
    desc: 'Naarmunpoisto ja maalipinnan elvytys konekiillotuksella.',
    price: 'alk. 150',
  },
  {
    icon: Shield,
    title: 'Vahaus',
    desc: 'UV-suojavahaus ja keraaminen pinnoitus kestävään kiiltoon.',
    price: '45',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-ania-blue text-sm font-sans font-semibold tracking-widest uppercase mb-4 block">
              Palvelut
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-ania-navy">
              Mitä teemme
            </h2>
          </div>
          <Link
            to="/Palvelut"
            className="flex items-center gap-2 text-ania-navy font-sans text-sm font-semibold hover:text-ania-blue transition-colors"
          >
            Kaikki palvelut <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ania-navy/10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 group hover:bg-ania-navy transition-colors duration-300"
              >
                <Icon className="w-8 h-8 text-ania-blue mb-6" />
                <h3 className="font-serif text-xl text-ania-navy group-hover:text-white mb-3 transition-colors">
                  {s.title}
                </h3>
                <p className="text-ania-text/60 group-hover:text-white/70 font-sans text-sm leading-relaxed mb-6 transition-colors">
                  {s.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-2xl text-ania-blue">{s.price}</span>
                  <span className="text-ania-text/40 group-hover:text-white/50 font-sans text-sm transition-colors">€</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-12 text-center">
          <Link
            to="/Hinnasto"
            className="inline-flex items-center gap-3 border border-ania-navy text-ania-navy hover:bg-ania-navy hover:text-white font-sans font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
          >
            Katso koko hinnasto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

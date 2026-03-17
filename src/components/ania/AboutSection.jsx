import React from 'react';
import { Clock, Shield, Users, Truck } from 'lucide-react';

const reasons = [
  { 
    icon: Users, 
    title: 'Kokenut tiimi', 
    desc: 'Yli 20 vuoden kokemus autopesusta ja yksityiskohtaisesta hoidosta.' 
  },
  { 
    icon: Clock, 
    title: 'Ei ajanvarausta', 
    desc: 'Tule suoraan milloin tahansa. Palvelu ilman odotusta.' 
  },
  { 
    icon: Shield, 
    title: 'Ammattilaisaineet', 
    desc: 'Käytämme vain korkealuokkaisia ammattilaisten tuotteita.' 
  },
  { 
    icon: Truck, 
    title: 'Noutapalvelu', 
    desc: 'Noudamme autosi ja palautamme sen valmiina.' 
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=85"
                alt="Car interior detailing"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-ania-blue -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-ania-blue text-sm font-sans font-semibold tracking-widest uppercase mb-4 block">
              Meistä
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-ania-navy leading-tight mb-6">
              Helsinkiläinen autopesula
            </h2>
            <p className="text-ania-text/70 font-sans text-lg leading-relaxed mb-8">
              Ania Autopalvelu on helsinkiläinen autopesula ja autonhoitopalvelu Takomotie 1-3:ssa. 
              Tarjoamme laadukasta käsinpesua, sisäpuhdistusta ja kiillotusta ammattitaidolla ja 
              yli 20 vuoden kokemuksella.
            </p>

            {/* Trust points */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-ania-navy/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-ania-blue" />
                    </div>
                    <div>
                      <h3 className="text-ania-navy font-sans font-semibold text-sm mb-1">{r.title}</h3>
                      <p className="text-ania-text/60 font-sans text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

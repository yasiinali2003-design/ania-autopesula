import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Mikko V.', car: 'BMW 3-sarja', text: 'Paras käsinpesu Helsingissä. Auto loistaa kuin uusi ja henkilökunta on ystävällistä. Tulen ehdottomasti uudelleen!' },
  { name: 'Sanna K.', car: 'Mercedes GLE', text: 'Auto tuli todella puhtaaksi ja palvelu oli nopeaa. Sisäpesu ylitti odotukseni täysin. Suosittelen kaikille!' },
  { name: 'Janne M.', car: 'Audi A6', text: 'Olen käynyt täällä jo vuosia — aina sama korkea laatu. Noutapalvelu on todella kätevä kiireisille.' },
  { name: 'Laura L.', car: 'VW Touareg', text: 'Käsivahaus antoi autolle upean kiillon. Hinnat ovat rehellisiä ja työn jälki on ensiluokkainen.' },
  { name: 'Petri H.', car: 'Toyota Yaris', text: 'Otin täyshoidon ja sain rahoilleni vastinetta. Ei tarvitse hakea kauempaa — nämä ovat Helsingin parhaat.' },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[3px] w-8 bg-ania-blue rounded-full" />
            <span className="text-ania-blue text-[11px] tracking-[0.3em] font-bold uppercase">Asiakaspalaute</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-ania-navy tracking-tight">
            Asiakkaiden kokemuksia
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ania-surface border border-ania-blue/10 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md hover:border-ania-blue/30 transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-ania-gold text-ania-gold" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-ania-blue/20 -mb-2" />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-ania-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-ania-navy font-bold text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.car}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
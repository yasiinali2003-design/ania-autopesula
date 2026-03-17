import React from 'react';
import { motion } from 'framer-motion';
import { Users, Truck, Clock, Wrench, Building, ThumbsUp } from 'lucide-react';

const reasons = [
  { icon: Users, title: 'Kokenut tiimi', desc: 'Monen vuoden kokemus autopesusta ja auton yksityiskohtaishoidosta.' },
  { icon: Clock, title: 'Ei ajanvarausta', desc: 'Tule suoraan milloin tahansa — odottaessa voit nauttia kahvista.' },
  { icon: ThumbsUp, title: 'Laatutakuu', desc: 'Takaamme asiakastyytyväisyyden jokaisessa työssä, aina.' },
  { icon: Wrench, title: 'Ammattilaisaineet', desc: 'Käytämme vain korkealuokkaisia ammattilaisten pesuaineita ja tuotteita.' },
  { icon: Building, title: 'Yrityspalvelut', desc: 'Erikoistilaukset autoliikkeille, takseille ja yritysfloteille.' },
  { icon: Truck, title: 'Noutapalvelu', desc: 'Noudamme autosi, hoidamme sen ja palautamme — kotiin tai toimistolle.' },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="bg-[#F5F7FA] py-20 sm:py-28">
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
            <div className="h-[3px] w-8 bg-[#1E8FE0] rounded-full" />
            <span className="text-[#1E8FE0] text-[11px] tracking-[0.3em] font-bold uppercase">Miksi me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1628] tracking-tight">
            Miksi valita<br className="hidden sm:block" /> Ania Autopalvelu
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-white border border-gray-100 hover:border-[#1E8FE0]/20 hover:shadow-md rounded-xl p-6 flex gap-4 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-[#1E8FE0]/10 group-hover:bg-[#1E8FE0]/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                  <Icon className="w-5 h-5 text-[#1E8FE0]" />
                </div>
                <div>
                  <h3 className="text-[#0B1628] font-bold text-[15px] mb-1.5">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '20+', label: 'Vuotta kokemusta' },
  { value: '7', label: 'Päivää auki' },
];

export default function StatsBar() {
  return (
    <section className="bg-[#1E8FE0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20 divide-y lg:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-8 py-7 text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-white/75 text-xs tracking-[0.15em] uppercase mt-1.5 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
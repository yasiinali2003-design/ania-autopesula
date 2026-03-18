import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const pairs = [
  {
    label: 'Sisätilojen puhdistus',
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
  },
  {
    label: 'Kiillotus & vahaus',
    before: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
  },
  {
    label: 'Ulkopuolen pesu',
    before: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
];

function Slider({ before, after, label }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback((e) => { if (dragging.current) updatePos(e.clientX); }, [updatePos]);
  const onTouchMove = useCallback((e) => { updatePos(e.touches[0].clientX); }, [updatePos]);
  const stopDrag = useCallback(() => { dragging.current = false; }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-64 sm:h-80 rounded-xl overflow-hidden select-none cursor-col-resize shadow-lg"
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={onTouchMove}
      onTouchEnd={stopDrag}
    >
      {/* Before */}
      <img src={before} alt="Ennen" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* After (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={after} alt="Jälkeen" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${pos}%` }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing border-2 border-ania-blue"
          onMouseDown={(e) => { dragging.current = true; e.preventDefault(); }}
          onTouchStart={(e) => { dragging.current = true; }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-ania-blue fill-none stroke-current stroke-2">
            <path d="M8 12H4m0 0l3-3m-3 3l3 3M16 12h4m0 0l-3-3m3 3l-3 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md font-semibold">
        Ennen
      </div>
      <div className="absolute top-3 right-3 bg-ania-gold text-ania-navy text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md font-semibold">
        Jälkeen
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ania-navy py-20 sm:py-28">
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
            <span className="text-ania-gold text-[11px] tracking-[0.3em] font-bold uppercase">Tulokset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ennen &amp; jälkeen
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md">Vedä liukusäädintä nähdäksesi eron. Ammattitaitoinen työ puhuu puolestaan.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-7 flex-wrap">
          {pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide border transition-all duration-200 ${
                active === i
                  ? 'bg-ania-blue text-white border-ania-blue'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Slider {...pairs[active]} />
        </motion.div>
      </div>
    </section>
  );
}
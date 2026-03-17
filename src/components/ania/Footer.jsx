import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ania-navy pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <span className="font-serif text-2xl text-white block mb-4">
              Ania <span className="text-ania-blue">Autopalvelu</span>
            </span>
            <p className="text-white/50 font-sans text-sm leading-relaxed max-w-xs">
              Helsinkiläinen autopesula ja autonhoitopalvelu. Ammattitaitoinen käsinpesu yli 20 vuoden kokemuksella.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-4">Yhteystiedot</h4>
            <div className="space-y-3">
              <a href="tel:+358504798334" className="flex items-center gap-3 text-white/60 font-sans text-sm hover:text-ania-blue transition-colors">
                <Phone className="w-4 h-4 text-ania-blue" />
                050 479 8334
              </a>
              <a href="mailto:info@aniaautopalvelu.com" className="flex items-center gap-3 text-white/60 font-sans text-sm hover:text-ania-blue transition-colors">
                <Mail className="w-4 h-4 text-ania-blue" />
                info@aniaautopalvelu.com
              </a>
              <div className="flex items-center gap-3 text-white/60 font-sans text-sm">
                <MapPin className="w-4 h-4 text-ania-blue" />
                Takomotie 1-3, 00380 Helsinki
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-4">Aukioloajat</h4>
            <div className="space-y-2 font-sans text-sm">
              <div className="flex justify-between text-white/60">
                <span>Ma – Pe</span>
                <span className="text-white">08:00 – 17:00</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>La – Su</span>
                <span className="text-white">10:00 – 17:00</span>
              </div>
            </div>
            <p className="text-ania-blue font-sans text-sm mt-4">
              Ei ajanvarausta, tule suoraan!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/40 font-sans text-xs">
            © {new Date().getFullYear()} Bahasht Oy. Ania Autopalvelu.
          </p>
          <p className="text-white/40 font-sans text-xs">
            Takomotie 1-3, 00380 Helsinki
          </p>
        </div>
      </div>
    </footer>
  );
}

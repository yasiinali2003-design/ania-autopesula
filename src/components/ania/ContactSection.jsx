import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  // Check if currently open (simplified logic)
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday ? (hour >= 8 && hour < 17) : (hour >= 10 && hour < 17);

  return (
    <section id="contact" className="bg-ania-surface py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <span className="text-ania-blue text-sm font-sans font-semibold tracking-widest uppercase mb-4 block">
            Yhteystiedot
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-ania-navy">
            Tervetuloa käymään
          </h2>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-ania-blue/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-ania-blue" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-ania-navy mb-1">Sijainti</h3>
                <a
                  href="https://maps.google.com/?q=Takomotie+1-3+00380+Helsinki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ania-text/70 font-sans hover:text-ania-blue transition-colors"
                >
                  Takomotie 1-3<br />00380 Helsinki
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-ania-blue/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-ania-blue" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-ania-navy mb-1">Puhelin</h3>
                <a href="tel:+358504798334" className="block text-ania-text/70 font-sans hover:text-ania-blue transition-colors">
                  050 479 8334
                </a>
                <a href="tel:+358401505757" className="block text-ania-text/50 font-sans text-sm hover:text-ania-blue transition-colors">
                  040 150 5757
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-ania-blue/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-ania-blue" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-ania-navy mb-1">Sähköposti</h3>
                <a href="mailto:info@aniaautopalvelu.com" className="text-ania-text/70 font-sans hover:text-ania-blue transition-colors">
                  info@aniaautopalvelu.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-ania-blue/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-ania-blue" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-ania-navy mb-2">Aukioloajat</h3>
                <div className="space-y-1 font-sans text-sm">
                  <div className="flex justify-between gap-8">
                    <span className="text-ania-text/50">Ma – Pe</span>
                    <span className="text-ania-text font-medium">08:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-ania-text/50">La – Su</span>
                    <span className="text-ania-text font-medium">10:00 – 17:00</span>
                  </div>
                </div>
                <div className={`inline-flex items-center gap-2 mt-3 px-3 py-1 text-xs font-sans font-medium ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                  {isOpen ? 'Auki nyt' : 'Suljettu'}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto bg-ania-navy/5">
            <iframe
              title="Ania Autopalvelu sijainti"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.5!2d24.8897!3d60.2185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5eb3e5c7e67%3A0x4c8c8c8c8c8c8c8c!2sTakomotie%201-3%2C%2000380%20Helsinki!5e0!3m2!1sfi!2sfi!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

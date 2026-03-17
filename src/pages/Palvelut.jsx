import React, { useState } from 'react';
import { Phone, ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'kasinpesu',
    number: '01',
    title: 'Käsinpesu',
    subtitle: 'Ulkopuolen huolellinen pesu',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    description: 'Ammattitaitoinen käsinpesu on paras tapa pitää autosi maalipinta kunnossa. Toisin kuin automaattiset pesukoneet, käsinpesu ei naarmuta maalipintaa ja tulokset ovat huomattavasti laadukkaammat.',
    details: [
      'Ulkopuolen huolellinen käsinpesu ammattipesuaineilla',
      'Vanteen ja renkaiden pesu',
      'Ikkunoiden ulkopuolen pesu',
      'Kuivaus mikrokuituliinalla',
    ],
    price: 'alk. 20€',
  },
  {
    id: 'sisapesu',
    number: '02',
    title: 'Sisätilojen puhdistus',
    subtitle: 'Perusteellinen sisäpesu',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=85',
    description: 'Auton sisätilat keräävät pölyä, likaa ja bakteereja. Ammattimainen sisäpesu palauttaa sisätilat siistiksi ja raikkaaksi.',
    details: [
      'Kojelaudan ja pintojen puhdistus',
      'Istuinten ja mattojen imurointi',
      'Ikkunoiden pesu sisäpuolelta',
      'Raikastus ja desinfiointihoito',
    ],
    price: 'alk. 30€',
  },
  {
    id: 'kiillotus',
    number: '03',
    title: 'Kiillotus ja vahaus',
    subtitle: 'Maalipinnan ehostus',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=85',
    description: 'Kiillotus poistaa naarmut ja pyörremaiset merkit. Vahaus suojaa maalipintaa UV-säteilyltä ja lialta.',
    details: [
      'Pintavirheiden poisto konekiillotuksella',
      'UV-suojavahaus',
      'Tervaläiskien poisto',
      'Syvä kiilto ja pehmeä pinta',
    ],
    price: 'alk. 45€',
  },
  {
    id: 'tayshoito',
    number: '04',
    title: 'Täyshoito',
    subtitle: 'Kattava paketti',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85',
    description: 'Täyshoito yhdistää ulko- ja sisäpesun, kiillotuksen ja suojauksen. Auto palautetaan täydellisessä kunnossa.',
    details: [
      'Ulkopuolen käsinpesu ja kuivaus',
      'Sisätilojen täydellinen puhdistus',
      'Kiillotus ja vahaus',
      'Ikkunoiden pesu sisä- ja ulkopuolelta',
    ],
    price: '60€',
  },
  {
    id: 'yrityspalvelut',
    number: '05',
    title: 'Yrityspalvelut',
    subtitle: 'Räätälöity ratkaisu',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=85',
    description: 'Tarjoamme erikoishintoja ja sopimuksia autoliikkeille, taksiyrittäjille ja yrityksille.',
    details: [
      'Sopimushinta autoliikkeille',
      'Erikoistarjoukset taksiyrittäjille',
      'Noutapalvelu',
      'Laskutusmahdollisuus',
    ],
    price: 'Kysy tarjous',
  },
  {
    id: 'noutapalvelu',
    number: '06',
    title: 'Noutapalvelu',
    subtitle: 'Me tulemme luoksesi',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=85',
    description: 'Noudamme autosi kotioveltasi tai toimistoltasi, hoidamme palvelut ja palautamme sen takaisin.',
    details: [
      'Nouto kotiosoitteesta tai toimistolta',
      'Palautus sovittuna ajankohtana',
      'Kaikki palvelut noutapalvelun yhteydessä',
      'Helsinki ja lähikunnat',
    ],
    price: 'Kysy lisää',
  },
];

export default function Palvelut() {
  const [active, setActive] = useState(services[0].id);
  const activeService = services.find(s => s.id === active);

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
            Palvelut
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white">
            Palvelumme
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">

          {/* Sidebar nav */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-ania-text/50 font-sans text-xs uppercase tracking-widest mb-4">Valitse palvelu</p>
            <nav className="space-y-1">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                    active === s.id
                      ? 'bg-ania-navy text-white'
                      : 'bg-white hover:bg-ania-navy/5 text-ania-text'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${active === s.id ? 'text-ania-blue' : 'text-ania-text/40'}`}>{s.number}</span>
                    <span className="font-sans text-sm">{s.title}</span>
                  </div>
                  {active === s.id && <ArrowRight className="w-4 h-4 text-ania-blue" />}
                </button>
              ))}
            </nav>

            {/* Phone CTA */}
            <div className="mt-8 bg-ania-blue/10 border border-ania-blue/20 p-6">
              <p className="text-ania-text font-sans text-sm mb-4">
                Haluatko kysyä lisää tai varata ajan?
              </p>
              <a
                href="tel:+358504798334"
                className="flex items-center gap-2 text-ania-blue font-sans font-semibold text-sm hover:text-ania-navy transition-colors"
              >
                <Phone className="w-4 h-4" />
                050 479 8334
              </a>
            </div>
          </div>

          {/* Service detail */}
          <div>
            {/* Image */}
            <div className="aspect-[16/7] overflow-hidden mb-10">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <span className="font-mono text-5xl text-ania-blue/20">{activeService.number}</span>
              <div>
                <p className="text-ania-blue font-sans text-sm uppercase tracking-widest mb-1">{activeService.subtitle}</p>
                <h2 className="font-serif text-4xl text-ania-navy">{activeService.title}</h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-ania-text/70 font-sans text-lg leading-relaxed mb-10 max-w-2xl">
              {activeService.description}
            </p>

            {/* Details */}
            <div className="mb-10">
              <p className="text-ania-text/50 font-sans text-xs uppercase tracking-widest mb-4">Sisältää</p>
              <ul className="space-y-3">
                {activeService.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-ania-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-ania-blue" />
                    </div>
                    <span className="text-ania-text font-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="bg-ania-navy/5 p-6 mb-10">
              <div className="flex items-center justify-between">
                <span className="text-ania-text/60 font-sans text-sm">Hinta alkaen</span>
                <span className="font-mono text-2xl text-ania-blue">{activeService.price}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+358504798334"
                className="inline-flex items-center gap-3 bg-ania-blue hover:bg-ania-blue/90 text-white font-sans font-semibold px-8 py-4 text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                Soita ja kysy lisää
              </a>
              <Link
                to="/Hinnasto"
                className="inline-flex items-center gap-3 border border-ania-navy text-ania-navy hover:bg-ania-navy hover:text-white font-sans px-8 py-4 text-sm transition-colors"
              >
                Katso hinnasto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ania-navy py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-serif text-xl text-white">
            Ania <span className="text-ania-blue">Autopalvelu</span>
          </span>
          <p className="text-white/50 font-sans text-sm">© {new Date().getFullYear()} Bahasht Oy · Takomotie 1-3, Helsinki</p>
        </div>
      </footer>
    </div>
  );
}

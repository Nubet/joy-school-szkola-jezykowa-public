import Link from 'next/link';

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=JOY%20English%20School%2C%20Stanis%C5%82awa%20Staszica%2026B%2C%2075-449%20Koszalin";
const instagramUrl = "https://www.instagram.com/joy_english_school/";
const facebookUrl = "https://www.facebook.com/p/JOY-English-School-61583877050585/";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-extrabold text-3xl tracking-tight text-joy-red">JOY</span>
              <span className="font-heading font-bold text-sm leading-none text-white mt-1">
                ENGLISH<br />SCHOOL
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Szkoła językowa w Koszalinie, w której stawiamy na radość z nauki, brak stresu i widoczne efekty.
            </p>
            <div className="flex flex-col gap-3">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-gray-300 font-semibold hover:text-white transition-colors">
                Instagram
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-gray-300 font-semibold hover:text-white transition-colors">
                Facebook
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-gray-300 font-semibold hover:text-white transition-colors">
                Zostaw opinię w Google
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Na skróty</h4>
            <ul className="space-y-3">
              <li><Link href="#dlaczego-my" className="text-gray-400 hover:text-white transition-colors">Zalety nauki w JOY</Link></li>
              <li><Link href="#oferta" className="text-gray-400 hover:text-white transition-colors">Zajęcia dla dzieci</Link></li>
              <li><Link href="#oferta" className="text-gray-400 hover:text-white transition-colors">Zajęcia indywidualne</Link></li>
              <li><Link href="#polkolonie" className="text-joy-red font-semibold hover:text-white transition-colors">Półkolonie Wakacyjne 2026</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Zapisy i kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-joy-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">ul. Staszica 26B<br />Koszalin</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-joy-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:724450287" className="text-gray-400 hover:text-white transition-colors text-lg font-bold">724 450 287</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-joy-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:JOYenglish.koszalin@gmail.com" className="text-gray-400 hover:text-white transition-colors">JOYenglish.koszalin@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 JOY English School. Wszystkie prawa zastrzeżone.</p>
          <a href="https://norbertfila.com" target="_blank" rel="noreferrer" className="mt-2 md:mt-0 hover:text-white transition-colors">
            Projekt i realizacja: Norbert Fila
          </a>
        </div>
      </div>
    </footer>
  );
}

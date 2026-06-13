import Link from 'next/link';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

export function PricingSection() {
  return (
    <section className="py-24 bg-[#FFF5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-joy-red mb-4 uppercase tracking-wide">
            Cennik
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Zainwestuj w płynność językową swojego dziecka – jasne zasady, stałe postępy i radość z nauki.
          </p>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-2 gap-8 mb-16">
          <RevealItem className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-soft">
            <h3 className="font-heading text-2xl font-black text-text-main uppercase mb-8 text-center tracking-wider">
              Zajęcia Grupowe
            </h3>
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-gray-100 pb-8">
                <div>
                  <div className="font-bold text-text-main text-lg">DREAMERS</div>
                  <div className="text-sm text-text-muted mt-1">Dzieci 6-7 lat • 2 x 45 min*</div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-joy-red text-3xl">
                    220 <span className="text-base font-bold">zł</span>
                  </div>
                  <div className="text-xs text-text-muted font-medium mt-1">/ msc</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-text-main text-lg">EXPLORERS</div>
                  <div className="text-sm text-text-muted mt-1">Klasy 1-3 • 2 x 60 min*</div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-joy-red text-3xl">
                    280 <span className="text-base font-bold">zł</span>
                  </div>
                  <div className="text-xs text-text-muted font-medium mt-1">/ msc</div>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-soft relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-text-main font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
              Personalizacja
            </div>
            <h3 className="font-heading text-2xl font-black text-text-main uppercase mb-8 text-center tracking-wider">
                Zajęcia indywidualne
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                <div className="text-text-muted font-medium">1 x 60 min*</div>
                <div className="font-bold text-text-main text-xl">
                  300 zł <span className="text-sm text-text-muted font-normal">/ msc</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                <div className="text-text-muted font-medium">2 x 60 min*</div>
                <div className="font-bold text-text-main text-xl">
                  560 zł <span className="text-sm text-text-muted font-normal">/ msc</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                <div className="text-text-muted font-medium">1 x 90 min*</div>
                <div className="font-bold text-text-main text-xl">
                  510 zł <span className="text-sm text-text-muted font-normal">/ msc</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-text-muted font-medium">2 x 90 min*</div>
                <div className="font-bold text-text-main text-xl">
                  960 zł <span className="text-sm text-text-muted font-normal">/ msc</span>
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>

        <p className="-mt-10 mb-12 text-sm text-text-muted text-center">
          *Liczba zajęć w tygodniu
        </p>

        <Reveal className="text-center" y={16}>
          <Link 
            href="https://forms.gle/t6nvadVB8mWUbMUX7"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-joy-red text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-joy-dark shadow-lg shadow-joy-red/30 transition-all transform hover:-translate-y-1"
          >
            Wypełnij formularz zapisów
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

export function OfferSection() {
  return (
    <section id="oferta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-center text-text-main mb-12">
          Wybierz kurs dla swojego dziecka
          </h2>
        </Reveal>
        
        <RevealGroup className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RevealItem className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-soft transition-shadow bg-white relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-2 bg-joy-red"></div>
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
              <Image 
                src="/dzieci/700096891_17878853214595541_8913602239795041217_n.jpg"
                alt="Dzieci uczące się w grupie"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-heading text-2xl font-bold text-text-main mb-2">Kursy językowe dla dzieci</h3>
            <p className="text-joy-red font-medium mb-6">Nauka w rówieśniczym gronie</p>
            <ul className="space-y-4 mb-8 grow">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-muted">Małe grupy (przyjazna atmosfera)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-muted">Dużo interakcji, gier i rozmów</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-muted">Budowanie pewności siebie u rówieśników</span>
              </li>
            </ul>
            <Link href="#kontakt" className="block text-center w-full bg-gray-50 text-text-main font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors mt-auto">
              Zapytaj o wolne miejsca
            </Link>
          </RevealItem>

          <RevealItem className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-soft transition-shadow bg-white relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
              <Image 
                src="/dzieci/682401712_122131380981129235_955665693403139273_n.jpg"
                alt="Indywidualne zajęcia językowe"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-heading text-2xl font-bold text-text-main mb-2">Zajęcia indywidualne</h3>
            <p className="text-yellow-600 font-medium mb-6">100% uwagi na Twoim dziecku</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-muted">Elastyczne godziny zajęć</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-muted">Indywidualne podejście do potrzeb i tempa</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-muted">Skupienie na konkretnym celu (np. egzamin 8-klasisty)</span>
              </li>
            </ul>
            <Link href="#kontakt" className="block text-center w-full bg-gray-50 text-text-main font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors mt-auto">
              Zapytaj o wolne miejsca
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

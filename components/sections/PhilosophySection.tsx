import Link from 'next/link';

import { Reveal } from '@/components/motion/Reveal';

export function PhilosophySection() {
  return (
    <section className="py-24 bg-[#FCFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-joy-light rounded-full z-0"></div>
            <div className="bg-white rounded-[2.5rem] p-10 sm:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10">
              <svg className="w-12 h-12 text-[#F5D5D5] mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl sm:text-2xl text-text-main font-medium italic leading-relaxed mb-8">
                Kiedy zakładałam szkołę, szukałam nazwy, która odda moją intencję. Prowadzenie zajęć i dzielenie się wiedzą to dla mnie duża radość i pasja. Chcę, aby ten sam entuzjazm udzielał się moim Uczniom.
              </p>
              <p className="text-sm text-text-muted font-medium">
                ~ Założycielka JOY English School
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:pl-8" delay={0.12}>
            <div className="text-joy-red font-bold text-sm tracking-wider uppercase mb-3">
              Nasza Filozofia
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-text-main mb-6 leading-tight">
              Dlaczego nazwa <br />&quot;JOY&quot;?
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Angielski nie powinien być &quot;kolejnym przedmiotem do zaliczenia&quot;. W naszej szkole chcemy pokazać dzieciom, że nauka może autentycznie sprawiać frajdę i satysfakcję.
              </p>
              <p>
                <strong className="text-text-main font-bold">JOY</strong> to dla nas synonim pozytywnej atmosfery, braku stresu przed mówieniem i miejsca, w którym naturalnie buduje się motywację do poznawania świata.
              </p>
            </div>
            <div className="mt-10">
              <Link href="#kontakt" className="inline-flex items-center text-joy-red font-bold hover:text-joy-dark transition-colors group">
                Dołącz do nas
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

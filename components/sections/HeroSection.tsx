import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden joy-paper-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="font-heading text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold text-text-main leading-[0.98] mb-6 tracking-tight">
              Angielski, po którym dziecko samo chce mówić
            </h1>
            <p className="text-lg sm:text-xl text-text-muted mb-8 leading-relaxed max-w-xl">
                Szukasz w Koszalinie szkoły, w której nauka to radość, a nie przykry obowiązek? W JOY English School stawiamy na przyjazną atmosferę, brak stresu i realne efekty!
            </p>
            <Link href="#kontakt" className="inline-flex items-center justify-center bg-joy-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-joy-dark shadow-lg shadow-joy-red/30 transition-all transform hover:-translate-y-1">
              Umów bezpłatną rozmowę
            </Link>
          </div>
          
          <div className="relative lg:ml-10">
            <div className="absolute -left-5 top-8 z-20 hidden sm:block rounded-3xl bg-white px-5 py-4 shadow-soft border border-red-100 rotate-[-3deg]">
              <div className="text-sm text-text-muted">Adres szkoły</div>
              <div className="font-heading font-extrabold text-joy-red">Staszica 26B</div>
              <div className="text-sm text-text-muted">Koszalin</div>
            </div>
            <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-10 border-white bg-gray-100 rotate-[1.5deg]">
              <Image
                src="/dzieci/593236339_122106623787129235_7445674395648247624_n.jpg"
                alt="Szczęśliwe dzieci uczące się angielskiego"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

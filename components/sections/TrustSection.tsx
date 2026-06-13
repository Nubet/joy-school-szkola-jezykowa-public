import Image from 'next/image';

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

export function TrustSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-joy-red font-bold text-sm tracking-wider uppercase mb-3">
            Przestrzeń
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main mb-6 leading-tight">
            Przytulne wnętrza, w których <br className="hidden sm:block" />
            nauka przychodzi naturalnie
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Stworzyliśmy kolorowe i radosne miejsce, które nie przypomina tradycyjnej szkoły. W naszych przyjaznych salach dzieci czują się bezpiecznie jak w domu, co pozwala im się zrelaksować i otworzyć na swobodne mówienie po angielsku.
          </p>
        </Reveal>
        
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
          <RevealItem className="relative aspect-square md:aspect-4/5 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-soft">
            <Image 
              src="/budynek/589705963_122105908575129235_7210391535199528660_n.jpg"
              alt="Przyjazne, kolorowe wnętrze szkoły JOY"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </RevealItem>
          <RevealItem className="relative aspect-square md:aspect-4/5 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-soft md:mt-12">
            <Image 
              src="/budynek/589714037_122105908587129235_5240270990156896041_n.jpg"
              alt="Sala z miejscem do siedzenia i zabawy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </RevealItem>
          <RevealItem className="relative aspect-square md:aspect-4/5 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-soft">
            <Image 
              src="/budynek/590293540_122105908617129235_8849603025179338882_n.jpg"
              alt="Miejsce nauki bez szkolnych ławek"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </RevealItem>
          <RevealItem className="relative aspect-square md:aspect-4/5 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-soft md:mt-12">
            <Image 
              src="/budynek/590356991_122105908629129235_6686944511001121775_n.jpg"
              alt="Kolorowe dekoracje w szkole"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

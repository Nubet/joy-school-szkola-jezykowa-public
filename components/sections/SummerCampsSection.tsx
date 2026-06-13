import Image from 'next/image';

import summerCamps from '@/data/summer-camps.json';

export function SummerCampsSection() {
  const showPricing = summerCamps.pricing.enabled && summerCamps.pricing.main;

  return (
    <section id="polkolonie" className="py-20 bg-joy-red text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 joy-red-paper-bg" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {summerCamps.badge ? (
                <div className="inline-block bg-yellow-400 text-yellow-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
                  {summerCamps.badge}
                </div>
              ) : null}
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                {summerCamps.title}
              </h2>
              <p className="text-lg text-white/90 mb-8">
                {summerCamps.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {summerCamps.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="text-yellow-400 text-xl">✓</span>
                    {benefit}
                  </div>
                ))}
              </div>

              {showPricing ? (
                <div className="bg-joy-dark/50 p-6 rounded-2xl mb-8 border border-white/10">
                  <div className="text-2xl font-bold mb-1">{summerCamps.pricing.main}</div>
                  {summerCamps.pricing.secondary ? (
                    <div className="text-sm text-white/80 mb-3">{summerCamps.pricing.secondary}</div>
                  ) : null}
                  {summerCamps.pricing.note ? (
                    <div className="text-yellow-400 font-bold">{summerCamps.pricing.note}</div>
                  ) : null}
                </div>
              ) : null}

              <a href={summerCamps.cta.href} className="inline-flex items-center justify-center bg-white text-joy-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 shadow-lg transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                {summerCamps.cta.label}
              </a>
            </div>

            <div className="space-y-6">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white/20">
                <Image 
                  src={summerCamps.image.src}
                  alt={summerCamps.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold border-b border-white/20 pb-4">{summerCamps.turnsHeading}</h3>
              <div className="space-y-4">
                {summerCamps.turns.map((turn) => (
                  <div key={`${turn.name}-${turn.date}`} className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center gap-4">
                    <span className="font-semibold text-lg">{turn.name}</span>
                    <span className="text-white/80 text-right">{turn.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

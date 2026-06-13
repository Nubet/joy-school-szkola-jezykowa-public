const schoolName = "JOY English School";
const businessType = "Szkoła językowa";
const address = "Stanisława Staszica 26B, 75-449 Koszalin";
const query = `${schoolName}, ${businessType}, ${address}`;
const encodedQuery = encodeURIComponent(query);
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

export function LocationMapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();

  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedQuery}&zoom=16&maptype=roadmap`
    : null;

  return (
    <section id="lokalizacja" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft border border-gray-100 h-[500px] sm:h-[600px] bg-gray-50">

          {src ? (
            <iframe
              title="Mapa dojazdu do JOY English School w Koszalinie"
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-joy-light/30">
               <svg className="w-12 h-12 text-joy-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               <h3 className="font-heading text-xl font-bold text-text-main mb-2">Mapa niedostępna</h3>
               <p className="text-text-muted text-sm max-w-sm">
                 Brak klucza API dla Google Maps. Podaj NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
               </p>
             </div>
          )}

          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[22rem] bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
             <h2 className="font-heading text-2xl font-black text-text-main mb-2">
                Odwiedź nas
             </h2>
             <p className="text-text-muted font-medium mb-8">
                ul. {address.split(',')[0]}<br />
                {address.split(',')[1].trim()}
             </p>
             <a 
               href={directionsUrl}
               target="_blank"
               rel="noreferrer"
               className="flex items-center justify-center gap-2 w-full bg-joy-red text-white px-6 py-4 rounded-full font-bold hover:bg-joy-dark shadow-md transition-all transform hover:-translate-y-0.5"
             >
                Wyznacz trasę
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M8 7h9v9" />
                </svg>
             </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

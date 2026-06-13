export function BenefitsSection() {
  return (
    <section id="dlaczego-my" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-text-main mb-4">Co zyskuje Twoje dziecko?</h2>
          <p className="text-text-muted text-lg">
            Tworzymy środowisko, w którym dzieci uczą się języka w sposób naturalny – tak, jak uczyły się swojego pierwszego języka.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-soft hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-joy-light rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-joy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-text-main mb-3">Mówienie bez blokady</h3>
            <p className="text-text-muted">
              Przełamujemy barierę językową. Skupiamy się na komunikacji, ruchu i kreatywnych projektach, dzięki czemu dziecko używa angielskiego swobodnie i z uśmiechem.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-soft hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-joy-light rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-joy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-text-main mb-3">Kameralne grupy i uwaga</h3>
            <p className="text-text-muted">
              Zajęcia odbywają się w małych grupach (max. 10 osób). Lektor ma czas, aby podejść do każdego dziecka indywidualnie i zadbać o jego postępy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-soft hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-joy-light rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-joy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-text-main mb-3">Szybkie rezultaty</h3>
            <p className="text-text-muted">
              Świetne wyniki egzaminów i udana rekrutacja to efekt uboczny naszej metody. Jesteśmy dumni z ogromnego rozwoju naszych kursantów!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-3xl tracking-tight text-joy-red">JOY</span>
            <span className="font-heading font-bold text-sm leading-none text-text-main mt-1">
              ENGLISH<br />SCHOOL
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#dlaczego-my" className="font-medium text-text-muted hover:text-joy-red transition-colors">
              Dlaczego my?
            </Link>
            <Link href="#oferta" className="font-medium text-text-muted hover:text-joy-red transition-colors">
              Oferta
            </Link>
            <Link href="#lokalizacja" className="font-medium text-text-muted hover:text-joy-red transition-colors">
              Lokalizacja
            </Link>
            <Link href="#polkolonie" className="font-medium text-joy-red hover:text-joy-dark transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Półkolonie
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link href="#kontakt" className="bg-joy-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-joy-dark shadow-lg shadow-joy-red/30 transition-all transform hover:-translate-y-0.5">
              Zapisz dziecko
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <a href="tel:724450287" className="bg-joy-red text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-joy-dark transition-colors">
              Zadzwoń
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

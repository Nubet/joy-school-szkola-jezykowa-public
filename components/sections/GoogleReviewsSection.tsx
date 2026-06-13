import Image from "next/image";

import { fetchFiveStarReviews } from "@/lib/services/google-reviews";

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-400" aria-label="Ocena 5 na 5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.12l-4.94 2.6L6 11.21l-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export async function GoogleReviewsSection() {
  const reviews = (await fetchFiveStarReviews()).slice(0, 3);

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-joy-light text-joy-red font-semibold text-sm mb-5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.7 5.232a1 1 0 00.95.69h5.5c.969 0 1.371 1.24.588 1.81l-4.45 3.232a1 1 0 00-.364 1.118l1.7 5.232c.3.921-.755 1.688-1.539 1.118l-4.45-3.232a1 1 0 00-1.176 0l-4.45 3.232c-.784.57-1.838-.197-1.539-1.118l1.7-5.232a1 1 0 00-.364-1.118L2.307 10.66c-.783-.57-.38-1.81.588-1.81h5.5a1 1 0 00.95-.69l1.704-5.233z" />
            </svg>
            Opinie Google
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-main mb-4">
            Zobacz, za co rodzice wybierają JOY
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Spokojna atmosfera, cierpliwi lektorzy i zajęcia, na które dzieci wracają z uśmiechem.
          </p>
        </div>

        {reviews.length ? (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-gray-50 rounded-[2rem] p-7 shadow-sm border border-gray-100 flex flex-col min-h-full hover:shadow-soft transition-shadow"
              >
                <Stars />
                <blockquote className="text-text-main leading-relaxed mt-5 mb-8 grow">
                  &quot;{review.text}&quot;
                </blockquote>
                <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
                  <div className="relative w-12 h-12 rounded-full bg-gray-200 text-text-muted flex items-center justify-center font-heading font-extrabold overflow-hidden shrink-0">
                    {review.authorPhotoUrl ? (
                      <Image
                        src={review.authorPhotoUrl}
                        alt={`Zdjęcie profilowe: ${review.authorName}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      getInitials(review.authorName) || "G"
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-text-main">{review.authorName}</div>
                    <div className="text-sm text-text-muted">
                      {review.relativePublishTimeDescription || "Opinia z Google"}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-[2rem] p-8 text-center border border-gray-100">
            <div className="w-16 h-16 rounded-3xl bg-joy-light text-joy-red flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-text-main mb-3">
              Opinie Google są chwilowo niedostępne
            </h3>
            <p className="text-text-muted">
              Sekcja pojawi się automatycznie po poprawnej konfiguracji GOOGLE_PLACES_API_KEY i GOOGLE_PLACE_ID.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

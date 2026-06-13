import type { Review } from "@/types/reviews";

type GoogleReview = {
  name?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
  rating?: number;
  text?: {
    text?: string;
  };
  originalText?: {
    text?: string;
  };
  relativePublishTimeDescription?: string;
};

type GooglePlaceDetailsResponse = {
  reviews?: GoogleReview[];
};

const PLACE_ID = process.env.GOOGLE_PLACE_ID?.trim();
const FIVE_STAR_RATING = 5;

export async function fetchFiveStarReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();

  if (!apiKey || !PLACE_ID) {
    return [];
  }

  const url = new URL(`https://places.googleapis.com/v1/places/${PLACE_ID}`);
  url.searchParams.set("fields", "reviews");
  url.searchParams.set("languageCode", "pl");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
      headers: {
        "X-Goog-Api-Key": apiKey,
      },
    });

    if (res.status === 400 || res.status === 404 || !res.ok) {
      return [];
    }

    const data = (await res.json()) as GooglePlaceDetailsResponse;

    return (data.reviews ?? [])
      .filter((review) => review.rating === FIVE_STAR_RATING)
      .map((review, index) => ({
        id: review.name ?? `google-review-${index}`,
        authorName: review.authorAttribution?.displayName ?? "Anonim",
        authorPhotoUrl: review.authorAttribution?.photoUri ?? "",
        rating: review.rating ?? FIVE_STAR_RATING,
        text: review.text?.text ?? review.originalText?.text ?? "",
        relativePublishTimeDescription: review.relativePublishTimeDescription ?? "",
      }))
      .filter((review) => review.text.trim().length > 0);
  } catch {
    return [];
  }
}

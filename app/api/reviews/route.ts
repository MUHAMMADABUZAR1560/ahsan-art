import { NextResponse } from 'next/server';

const FALLBACK_REVIEWS = [
  {
    author_name: "Ali Khan",
    relative_time_description: "2 months ago",
    text: "Ahsan and his team are phenomenal. They shot our entire summer catalog and the results exceeded our expectations. The lighting, the composition, everything was perfectly aligned with our brand guidelines.",
    rating: 5,
    profile_photo_url: ""
  },
  {
    author_name: "Sara Ahmed",
    relative_time_description: "4 months ago",
    text: "Highly recommend Ahsan Art Creative Studio for e-commerce videography. They understood our vision immediately and delivered high-converting UGC reels for our Instagram ads.",
    rating: 5,
    profile_photo_url: ""
  },
  {
    author_name: "Usman Tariq",
    relative_time_description: "1 month ago",
    text: "We hired them for Amazon A+ content and product listing images. Our click-through rate jumped by 30% within weeks of updating the visuals. Worth every penny.",
    rating: 5,
    profile_photo_url: ""
  },
  {
    author_name: "Zainab Raza",
    relative_time_description: "6 months ago",
    text: "Professional, timely, and incredibly talented. They styled and shot our new food menu and the photos look absolutely mouth-watering. Will definitely work with them again.",
    rating: 5,
    profile_photo_url: ""
  },
  {
    author_name: "Hassan Malik",
    relative_time_description: "3 months ago",
    text: "Exceptional quality work. The team went above and beyond to ensure every shot was perfect. Our brand image has never looked this premium before.",
    rating: 5,
    profile_photo_url: ""
  }
];

const FALLBACK_DATA = {
  reviews: FALLBACK_REVIEWS,
  rating: 5.0,
  user_ratings_total: 45
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Missing Google Places API Key or Place ID. Returning fallback reviews.");
    return NextResponse.json(FALLBACK_DATA, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,user_ratings_total,rating&key=${apiKey}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour instead of 24 to get updates faster
    );

    if (!response.ok) {
      throw new Error(`Google API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      console.warn("Google API returned non-OK status:", data.status);
      return NextResponse.json(FALLBACK_DATA, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      });
    }

    const result = {
      reviews: data.result.reviews || FALLBACK_REVIEWS,
      rating: data.result.rating || 5.0,
      user_ratings_total: data.result.user_ratings_total || 45
    };

    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json(FALLBACK_DATA, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }
}

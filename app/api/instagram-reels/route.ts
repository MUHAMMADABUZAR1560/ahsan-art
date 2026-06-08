import { NextResponse } from 'next/server';

const FALLBACK_REELS = [
  {
    id: '1',
    media_type: 'VIDEO',
    media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4',
    thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575368/a2_tc7xlt.jpg',
    caption: 'Skincare Texture',
    permalink: '#',
  },
  {
    id: '2',
    media_type: 'VIDEO',
    media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4',
    thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg',
    caption: 'Product Unboxing',
    permalink: '#',
  },
  {
    id: '3',
    media_type: 'VIDEO',
    media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4',
    thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg',
    caption: 'UGC Testimonial',
    permalink: '#',
  },
  {
    id: '4',
    media_type: 'VIDEO',
    media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4',
    thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg',
    caption: 'Amazon Video Ad',
    permalink: '#',
  },
];

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json({ reels: FALLBACK_REELS, source: 'fallback' }, {
      headers: { 'Cache-Control': 'public, s-maxage=3600' },
    });
  }

  try {
    // Fetch media from Instagram Basic Display API
    const fields = 'id,media_type,media_url,thumbnail_url,caption,permalink,timestamp';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}&limit=12`;

    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1hr
    if (!res.ok) throw new Error(`Instagram API error: ${res.status}`);

    const data = await res.json();

    if (data.error) {
      console.error('Instagram API error:', data.error);
      return NextResponse.json({ reels: FALLBACK_REELS, source: 'fallback' }, {
        headers: { 'Cache-Control': 'public, s-maxage=3600' },
      });
    }

    // Filter only VIDEO and REEL type media
    const reels = (data.data || []).filter(
      (item: { media_type: string }) => item.media_type === 'VIDEO' || item.media_type === 'REEL'
    );

    // If no videos found, use fallback
    if (reels.length === 0) {
      return NextResponse.json({ reels: FALLBACK_REELS, source: 'fallback' }, {
        headers: { 'Cache-Control': 'public, s-maxage=3600' },
      });
    }

    return NextResponse.json({ reels, source: 'instagram' }, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('Failed to fetch Instagram reels:', err);
    return NextResponse.json({ reels: FALLBACK_REELS, source: 'fallback' }, {
      headers: { 'Cache-Control': 'public, s-maxage=3600' },
    });
  }
}

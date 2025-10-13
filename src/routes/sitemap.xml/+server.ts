import { json } from '@sveltejs/kit';

const baseUrl = 'https://pkwoodenfurnitures.netlify.app';

export const GET = async () => {
  // ✅ List all routes here
  const pages = [
    '',
    'about',
    'catalog',
    'contact',
    'terms'
  ];

  const urls = pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};

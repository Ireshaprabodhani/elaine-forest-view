# Elaine Forest View — website

Website for **Elaine Forest View**, Monaragala: rooms, weddings & events, and dining at **Elo's House**.
Built by Onyx Digital with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Pages
Home · Rooms · Weddings & Events · Dining · Gallery · About & Location · Contact — all responsive (mobile + desktop).

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Editing content
Everything (phone, prices, packages, menu, reviews, nearby places, gallery) is in **`src/data/site.ts`**.
Anything shown as `____` or `[Owner to add]` still needs real information.

### Adding photos
1. Put the image in `public/images/` (e.g. `room-double.jpg`, ideally under 300 KB, 1600 px wide).
2. Set `image: "/images/room-double.jpg"` on that room / gallery item in `src/data/site.ts`.
   Other placeholders use the `<Photo caption="..." />` component — add `src="/images/..."` to show the real photo.

## Still needed from the owner
- Logo file and real photos (hero, rooms, hall, food, team, Elo)
- Room prices, wedding package prices & inclusions, hall capacity
- Menu prices (full menu has 118 items)
- Street address, check-in / check-out times, nearby distances
- 3 real Google reviews to feature
- Our story text and "Meet Elo" text
- Final domain → update `url` in `src/data/site.ts`

## Deploy (free)
Cloudflare Pages or Netlify: build command `npm run build`, output folder `out`.
Then connect the domain, add it to Google Search Console and submit `/sitemap.xml`.

## SEO included
Per-page titles & descriptions, canonical URLs, Hotel / Restaurant / EventVenue structured data (JSON-LD), sitemap.xml and robots.txt.

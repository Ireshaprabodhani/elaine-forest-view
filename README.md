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

## Admin panel (edit content without code)
Go to **`/admin`** on the live site (e.g. `https://www.elaineforestview.lk/admin/`).

It edits every page: hero text and photos, rooms and prices, wedding packages, the full menu, gallery photos, reviews, about text, contact details, hours and nearby places.
When you click **Publish → Publish now**, the change is saved to this GitHub repo and the host rebuilds the site automatically (about 1–2 minutes).

How it works: [Decap CMS](https://decapcms.org) (free, open source). Content is stored in `content/*.json`, uploaded photos in `public/images/`. No database or server.

### One-time setup (on Netlify)
1. Deploy the repo on **Netlify**: build command `npm run build`, publish directory `out`.
2. On GitHub, create an OAuth app: **Settings → Developer settings → OAuth Apps → New OAuth App**
   - Homepage URL: the site URL
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Copy the **Client ID** and generate a **Client secret**.
3. In Netlify: **Site configuration → Access & security → OAuth → Install provider → GitHub**, paste the Client ID and secret.
4. Each person who should edit (e.g. the hotel owner) needs a free GitHub account. Add them in this repo under **Settings → Collaborators → Add people** (Write access).
5. They open `/admin`, click **Login with GitHub** and start editing.

> Hosting somewhere else (e.g. Cloudflare Pages)? Login then needs a small OAuth proxy instead of step 3 — see the Decap CMS docs ("External OAuth Clients").

### Editing on your own computer
```bash
npm run dev      # terminal 1 — site at http://localhost:3000
npm run cms      # terminal 2 — lets /admin save straight to your local files
```
Open `http://localhost:3000/admin/` (both commands must be running — without `npm run cms` the login screen asks for GitHub and won't work locally). Changes are written to `content/*.json`; commit and push them when done.

### Changing the admin forms
The form layout lives in `scripts/build-cms-config.py`. Edit it, then run `npm run cms:config` to regenerate `public/admin/config.yml`.

### Adding photos
Upload them in the admin panel (every photo field has an upload button). Use landscape JPGs about 1600 px wide and under 500 KB. Until a photo is uploaded, the site shows a grey box with the "Photo note".

## Still needed from the owner
- Logo file and real photos (hero, rooms, hall, food, team, Elo)
- Room prices, wedding package prices & inclusions, hall capacity
- Menu prices (full menu has 118 items)
- Street address, check-in / check-out times, nearby distances
- 3 real Google reviews to feature
- Our story text and "Meet Elo" text
- Final domain → update **Website address** in the admin (Hotel details), and `site_url` in `scripts/build-cms-config.py`

## Deploy (free)
Cloudflare Pages or Netlify: build command `npm run build`, output folder `out`.
Then connect the domain, add it to Google Search Console and submit `/sitemap.xml`.

## SEO included
Per-page titles & descriptions, canonical URLs, Hotel / Restaurant / EventVenue structured data (JSON-LD), sitemap.xml and robots.txt.

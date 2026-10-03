# Grace Unisex Salon (Omaxe Market, Ludhiana): Website

This is a fast, single-page static website for **Grace Unisex Salon**, SCO 11, Omaxe Market Place, Pakhowal Rd, Ludhiana.
It uses plain HTML, CSS and JS. There is no framework and no build step, so it loads quickly and is cheap to host on Vercel.

## What's included

| Feature | Where |
|---|---|
| Professional responsive design | `styles.css` (desktop, tablet and phone layouts) |
| Home / hero section | `index.html` → `.hero` |
| About the salon | `#about` |
| Services | `#services` |
| Our approach (how each visit works) | `#process` |
| Expertise & experience | `#expertise` |
| Client testimonials (real Google reviews) | `#reviews` |
| Contact section with address, phone and hours | `#contact` |
| WhatsApp button (floating, plus in the hero and contact sections) | `.fab-wa`, `wa.me/918558000139` |
| Call button (floating, header and contact) | `tel:+918558000139` |
| Google Maps embed and "Get Directions" | `#contact` → `.map-wrap` |
| Enquiry form (opens WhatsApp with the enquiry filled in, with spam honeypot) | `#enquiry-form`, `script.js` |
| Basic SEO: title, description, Open Graph, canonical, `BeautySalon` schema with the 4.9★ rating | `<head>` of `index.html` |
| `robots.txt` and `sitemap.xml` | project root |
| Mobile optimisation: 48px tap targets, 16px inputs (no iOS zoom), hamburger menu | `styles.css` |
| Fast loading: no images to download, lazy-loaded map, deferred JS, caching headers | `vercel.json` |
| HTTPS/SSL and security headers (HSTS etc.) | Vercel (automatic) + `vercel.json` |
| Social links (Instagram, WhatsApp, Google Maps) | footer |

## ⚠️ Check these before going live

1. **Instagram link.** The Google listing only shows "instagram.com". Replace `https://www.instagram.com/` with the salon's real profile URL. It appears in the footer and in the `sameAs` field of the JSON-LD in `index.html`.
2. **Domain.** The site uses `https://gracesalon.vercel.app` as a placeholder. After deploying, find and replace it with the real URL in `index.html`, `robots.txt` and `sitemap.xml`.
3. **Hours.** The listing only says "Closes 8 pm". Confirm the opening time and any weekly off day, then update the hero and contact sections.
4. **Services.** The service list is a typical unisex-salon menu. Nail art and makeup are confirmed by reviews; remove anything the salon doesn't offer. Prices are left out on purpose ("call for prices").
5. **Photos (optional but recommended).** Add a few real salon photos, compressed to WebP at under 200 KB each with `loading="lazy"`.

## Deploy to Vercel (free, with automatic HTTPS)

1. Push this repo to GitHub (already done if you're reading this there).
2. Go to <https://vercel.com/new> and import the repository.
3. Leave Framework Preset as **Other** and leave the build command empty.
4. Click **Deploy**. Vercel issues the SSL certificate automatically, and the site is served over HTTPS.
5. Optional custom domain (e.g. `gracesalonludhiana.in`): Vercel → Project → **Settings → Domains** → add the domain → copy the DNS records it shows into your domain registrar. SSL for the custom domain is also automatic.

To preview locally, open `index.html` in a browser, or run `npx serve .` inside this folder.

## Basic Google Search setup guide

### 1. Google Search Console (get the website indexed)
1. Go to <https://search.google.com/search-console> and sign in with the salon's Google account.
2. Click **Add property** → **URL prefix** → enter your live URL (e.g. `https://gracesalon.vercel.app/`).
3. Verify ownership with the **HTML tag** method. Copy the `<meta name="google-site-verification" ...>` tag, paste it into the `<head>` of `index.html`, redeploy, then click **Verify**.
4. In **Sitemaps**, submit `sitemap.xml`.
5. In **URL Inspection**, paste the home page URL and click **Request indexing**. Google usually lists the site within a few days to two weeks.

### 2. Google Business Profile (the Maps listing, which matters most for a salon)
1. Go to <https://business.google.com> and claim or manage the existing "Grace Unisex Salon - Omaxe Market" listing.
2. Add the new website URL to the **Website** field.
3. Set the full opening hours, choose the categories (**Beauty Salon**, **Hair Salon**, **Nail Salon**, **Makeup Artist**) and add the services list.
4. Upload fresh photos every month (interior, work samples, team). Listings with photos get far more direction requests and calls.
5. Reply to every review, thanking clients by name.
6. Ask happy clients to leave a review. Share the "Ask for reviews" link from the Business Profile on WhatsApp after each visit.

### 3. Keep the details consistent
Use exactly the same **name, address and phone number** on the website, Google, Instagram, Justdial and any other directory. Google uses this consistency as a local ranking signal.

### 4. Check speed and SEO
- Run <https://pagespeed.web.dev> on the live URL. This site should score 90+ on mobile.
- Test the structured data at <https://search.google.com/test/rich-results>.

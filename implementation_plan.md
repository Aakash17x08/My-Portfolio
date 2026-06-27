# SEO Optimization and Google Search Indexing Plan

This plan outlines the changes required to ensure that your portfolio website (`https://aakash17x08.netlify.app/`) is discoverable on Google when searching for **"aakash maurya"** or **"aakash17x08"**.

## User Review Required

> [!IMPORTANT]
> Google does not index subdomains or new websites automatically immediately. To speed this up and guarantee listing, you **must register your website on Google Search Console** after we implement these code changes. Detailed instructions are provided below.

## Proposed Changes

We will perform the following changes to make the website crawler-friendly and clearly link your name to the site:

---

### Meta and Structured Data Addition

#### [MODIFY] [index.html](file:///c:/Users/Lenovo/OneDrive/Music/Portfolio/index.html)
- Add standard search engine meta tags (description, keywords, author).
- Add Open Graph (OG) tags to optimize display when links are shared on social platforms.
- Add structured data (**JSON-LD Schema Markup** for a `Person` and a `WebSite`) so Google understands the relationship between "Aakash Maurya", "aakash17x08", and this website.
- Add a placeholder for Google Search Console verification meta tag:
  ```html
  <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
  ```

---

### Site Crawler Configurations

#### [NEW] [robots.txt](file:///c:/Users/Lenovo/OneDrive/Music/Portfolio/public/robots.txt)
- Inform search engines that they are allowed to crawl the site.
- Reference the sitemap file.

#### [NEW] [sitemap.xml](file:///c:/Users/Lenovo/OneDrive/Music/Portfolio/public/sitemap.xml)
- Define the two indexable entry URLs of the site (`/` and `/projects`).

---

## Verification Plan

### Automated/Local Verification
- Build the project using `npm run build` to make sure code compiles correctly with the HTML changes.
- Verify structured schema JSON-LD formatting and sitemap syntax.

### Manual Verification (Action items for you)
To make your site appear in search results, follow these steps after the changes are pushed and deployed:

1. **Verify Ownership on Google Search Console (GSC):**
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Sign in with your Google account.
   - Click **Add Property** and select **URL prefix**.
   - Enter your website URL: `https://aakash17x08.netlify.app/`
   - Select the **HTML Tag** verification method.
   - Copy the verification code from the `<meta name="google-site-verification" content="..." />` tag provided by Google.
   - Tell me the code or replace `YOUR_GOOGLE_VERIFICATION_CODE_HERE` in `index.html` with that code, redeploy the site, and click **Verify** in Search Console.

2. **Submit your Sitemap:**
   - In Search Console, select your property, go to the **Sitemaps** section in the left menu.
   - Under "Add a new sitemap", type `sitemap.xml` and click **Submit**.

3. **Request Manual Indexing (Fast track):**
   - In Search Console, paste your URL `https://aakash17x08.netlify.app/` in the top search bar (URL Inspection).
   - Click **Request Indexing** to tell Google's crawlers to visit your page immediately.

# RK Packaging — Premium B2B Packaging Website

A production-grade, high-conversion responsive B2B website for **RK Packaging**, an Indian packaging manufacturer specializing in corrugated shipping boxes, custom-printed folding cartons, and rigid hardboard packaging.

Built with **React 18**, **Vite**, **TypeScript**, **Tailwind CSS**, **React Router**, **Lucide React**, **React Hook Form**, and **Zod**.

---

## 📦 Features & Capabilities

1. **Brand Identity & Industrial Aesthetic**:
   - Palette: Bold Red (`#D62828`), Dark Red (`#A61E22`), Charcoal (`#202124`), Light Background (`#F7F7F7`), Muted Gray (`#6B7280`).
   - Clean, trustworthy manufacturing presentation without artificial statistics or fake claims.

2. **Core Packaging Offerings**:
   - **Corrugated Boxes**: 3-ply, 5-ply, and 7-ply multi-wall shipping cartons (RSC and custom die-cuts).
   - **Custom-Printed Cartons**: Folding paperboard cartons (250–450 GSM) with CMYK offset printing, matte/gloss lamination, and spot UV.
   - **Hardboard Boxes**: Rigid Kappa board setup boxes (1.2mm–3.0mm) for luxury unboxing, electronics, and cosmetics.
   - **Industry Applications**: Electronics & accessories, beauty & cosmetics, e-commerce mailers, and master cargo shippers.

3. **High-Conversion Quotation Engine**:
   - Full quotation form powered by **React Hook Form** + **Zod**.
   - Validates Indian phone numbers (`+91` / 10 digits starting with 6–9).
   - URL prefill support: Clicking any product CTA automatically selects that product category on the quote page.
   - **Two conversion delivery options**:
     1. **WhatsApp click-to-chat** with formatted structured specification message.
     2. **Copy to clipboard** with user-friendly confirmation toast.
   - Clear disclaimers: informs users that WhatsApp will open and preserves all entered data.

4. **SEO & Performance**:
   - Semantic HTML5, accessible ARIA labels, visible focus states, and zero console errors.
   - `robots.txt`, `sitemap.xml`, and branded `favicon.svg`.
   - Dynamic document title, meta descriptions, and Open Graph tags.

5. **Netlify Deployment Ready**:
   - `public/_redirects` and `netlify.toml` for Single Page Application (SPA) routing.
   - Strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Language** | TypeScript (Strict mode enabled) |
| **Styling** | Tailwind CSS + PostCSS |
| **Routing** | React Router v6 |
| **Icons** | Lucide React |
| **Form Management** | React Hook Form |
| **Schema Validation** | Zod |
| **Hosting Target** | Netlify / Any Static Web Host |

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/18ayushyadav/rk-packaging.git
cd rk-packaging
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized static bundle will be built in the `dist/` directory.

---

## 🌐 Netlify Deployment Instructions

1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Netlify will auto-detect the build settings via `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Optional environment variables (under Site Settings > Environment Variables):
   - `VITE_WHATSAPP_NUMBER`: e.g. `918447849753`
   - `VITE_PHONE_DISPLAY`: e.g. `+91 84478 49753`
   - `VITE_CONTACT_EMAIL`: e.g. `info@rkpackaging.in`
   - `VITE_SITE_URL`: e.g. `https://rkpackaging.in`
4. Deploy site. Direct route navigation (e.g., `/quote`, `/products`) works out-of-the-box thanks to `_redirects`.

---

## 📋 Pre-Launch Business Verification Checklist

Before publishing to a custom production domain, verify the following details in `src/config/site.ts`:

- [x] **Primary Phone Number**: Verified as `+91 84478 49753` (WhatsApp active).
- [x] **Facility Address**: Verified as `C-107i Industrial Area Phase 1, Naraina, Delhi - 110028`.
- [ ] **Official Email**: Configure `info@rkpackaging.in` or preferred domain email once registered.
- [ ] **Domain DNS**: Point your domain `A` or `CNAME` records to Netlify.

---

## 📁 Project Structure

```
├── public/                  # Static assets (favicon, robots, sitemap, _redirects)
├── src/
│   ├── assets/              # Static media
│   ├── components/
│   │   ├── forms/           # QuoteForm (RHF + Zod + WhatsApp + Copy)
│   │   ├── home/            # Hero, Categories, Benefits, Industries, Gallery, Steps, CTA
│   │   ├── layout/          # Navbar, Footer, AnnouncementBar, Layout wrapper
│   │   └── ui/              # Button, ProductCard, SectionHeading, WhatsAppButton, SEO
│   ├── config/              # Central site config & products database
│   ├── lib/                 # WhatsApp URL generator, clipboard & Zod schemas
│   ├── pages/               # Home, Products, About, Contact, RequestQuote, NotFound
│   ├── types/               # TypeScript models
│   ├── App.tsx              # Router configuration
│   ├── main.tsx             # Application root
│   └── index.css            # Tailwind & accessible focus styles
├── legacy/                  # Archived previous backend files (preserved)
├── netlify.toml             # Netlify build & security headers
├── tailwind.config.js       # Brand color tokens & typography
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite configuration with path aliases
```

---

## 📄 License
Commercial proprietary license for RK Packaging.

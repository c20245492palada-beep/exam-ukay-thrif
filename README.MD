# Ukay-Ukay Thrift

A responsive one-page website concept for Ukay-Ukay Thrift, a local secondhand clothing shop. It helps visitors learn about the shop, browse sample clothing collections, and send an inquiry.

## Features

- Semantic header, navigation, hero, about, collections, contact form, and footer
- Mobile-first Tailwind CSS layout with responsive breakpoints
- Light/dark theme toggle
- Reusable Tailwind component classes
- GSAP page-load intro with deliberate easing and overlapping steps
- Scroll-in and scroll-out section reveals and a scroll progress bar
- GSAP click animation on the dark-mode toggle
- Reduced-motion support
- Accessible form labels and required fields

## Technology

- HTML5
- Tailwind CSS Browser CDN v4
- JavaScript
- GSAP 3.13.0 and ScrollTrigger

## Design system

**Visual style:** Warm minimalism, using generous spacing, simple layouts, and warm clothing-inspired colors.

**60-30-10 palette:**

- 60% dominant — Cream `#F8F3EB`
- 30% secondary — Brown `#4B3528`, with beige `#E7D7C4` for supporting surfaces
- 10% accent — Caramel `#8A4F2A`; light-mode text uses this darker tone for readable contrast. Dark mode uses light caramel `#E7B58D`.

Palette tokens are defined in the Tailwind `@theme` block in `index.html` and reused throughout the page.

### Text contrast

WCAG 2.1 contrast ratios for the main text combinations:

| Text and background | Contrast ratio |
| --- | ---: |
| Brown `#4B3528` on cream `#F8F3EB` | 10.34:1 |
| Caramel `#8A4F2A` on cream `#F8F3EB` | 5.88:1 |
| Caramel `#8A4F2A` on beige `#E7D7C4` | 4.61:1 |
| Cream `#F8F3EB` on brown `#4B3528` | 10.34:1 |
| Light caramel `#E7B58D` on brown `#4B3528` | 6.19:1 |

These text combinations meet the 4.5:1 minimum for normal text. Check any colors changed later with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Run locally

1. Open the project folder in Visual Studio Code.
2. Keep `index.html` and `script.js` together in the project folder.
3. Open `index.html` in a browser or use Live Server.
4. An internet connection is needed for the Tailwind CSS and GSAP CDNs and the Unsplash photos.

## Image sources

The sample clothing photos are loaded from Unsplash:

- [Shop clothing racks](https://images.unsplash.com/photo-1445205170230-053b83016050)
- [Casual shirt](https://images.unsplash.com/photo-1521572163474-6864f9cf17ab)
- [Denim jeans](https://images.unsplash.com/photo-1542272604-787c3835535d)
- [Jacket](https://images.unsplash.com/photo-1551028719-00167b16eac5)

Replace these sample photos, categories, and prices with your own shop details before publishing.

## Contact form

The contact form is a front-end demo only. It validates the required fields and displays a confirmation message, but does not send messages to a server or email account.
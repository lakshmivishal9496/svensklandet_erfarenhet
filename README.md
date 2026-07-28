# Svensklandet Erfarenhet 🇸🇪

A multi-page static website exploring Sweden's culture, weather, sports, news, and traditions.

## About

This is a **static website** built with plain HTML, CSS, and JavaScript (no frameworks, no build tools). Each page is a standalone HTML file linked together through a shared navigation menu:

- `index.html` / homepage — Sweden overview (monarchy, taxation, economy, weather & nature)
- `weather.html` — Seasons in Sweden (spring, summer, rain, autumn, winter)
- `merry.html` — Swedish holidays & celebrations (Easter, Valborg, Halloween, Midsummer, Christmas)
- `sport.html` — Sweden's sporting achievements
- `culture.html` — Culture and heritage
- `news.html` — News podcasts and press releases

## Tech Stack

- HTML5
- CSS3 (custom styles per page + Google Fonts)
- Vanilla JavaScript
- jQuery + jQuery UI (draggable elements)
- [particles.js](https://vincentgarreau.com/particles.js/) — animated particle backgrounds
- [rainyday.js](http://andrejtnovak.github.io/RainyDay.js/) — rain effect canvas animation
- [Swiper](https://swiperjs.com/) — image/content carousels
- Font Awesome & Ionicons — icon sets

## Project Structure

```
svensklandet_erfarenhet/
├── index.html
├── weather.html
├── merry.html
├── sport.html
├── culture.html
├── news.html
├── style_main.css
├── styleweather.css
├── stylemerry.css
├── sport.css
├── stylenews.css
├── particles.js
├── rainyday.js
├── app.js
├── script.js
├── sports.js
├── images/
│   └── (logos, cards, icons, photos)
└── video/
    └── (mp4 background/hero videos)
```

## How to Run This Project

This is a static site — there's **no npm install, no build command, no server-side code**. You just need to serve the files so the file paths resolve correctly.
index.html is root file. Right click index.html and run Open with Live Server 
### Option 1: VS Code + Live Server (recommended for local development)

1. Install [VS Code](https://code.visualstudio.com/)
2. Open this project folder in VS Code (`File → Open Folder`)
3. Install the **Live Server** extension (search for it in the Extensions panel, `Ctrl+Shift+X`)
4. Right-click `index.html` in the file explorer → **Open with Live Server**
5. Your default browser opens the site at `http://127.0.0.1:5500/`

Live Server auto-refreshes the browser whenever you save changes to a file.


## Enventiva Artist Explorer
[![Live on Render](https://img.shields.io/badge/Live_on_Render-16a34a?logo=render&logoColor=white)](https://music.barak-dev.com)

A small React app that searches artists via TheAudioDB, shows their bios, and lists top tracks with a polished UI. Built with React Router and TanStack Query for data fetching/caching and styled with Tailwind.

### Features
- Search for artists and view paginated-style cards of results.
- Drill into an artist page for hero imagery, genre/country/formed-year pills, multilingual biography (where available), and top 10 tracks.
- Language toggle for bios (EN/DE/FR/ES/PT/IT/JP/CN/RU/HE when provided by the API).
- React Query caching with devtools, client-side routing, and a `/theme` route that showcases the design system components.

### Tech Stack
- React 18 with TypeScript and React Router v6
- TanStack Query for fetching/caching against TheAudioDB (`https://www.theaudiodb.com/api/v1/json/123` demo key)
- Tailwind CSS with shadcn-style UI primitives and lucide icons

### Running Locally (from GitHub)
1) Prerequisites: Node 18+ and npm.
2) Clone:
	```sh
	git clone https://github.com/barakgoren/enventiva-assignment.git
	cd enventiva-assignment
	```
3) Install deps:
	```sh
	npm install
	```
4) Start dev server:
	```sh
	npm start
	```
	- Opens on `http://localhost:3000` with hot reload.

### App Tour
- Landing `/`: type an artist name and submit to fetch matches; loading and empty states are handled.
- Artist page `/artist/:id`: click a result to view biography, select a language, and browse the top tracks list with skeleton fallbacks and error-safe defaults.
- Theme demo `/theme`: quick look at the base UI components.

### Scripts
```sh
# run the dev server with live reload
npm start

# run the CRA test runner in watch mode
npm test

# production build to build/
npm run build

# expose CRA config (one-way)
npm run eject
```

### Notes
- TheAudioDB demo key is hardcoded; no extra env setup is required for local runs.
- If API rate limits occur, wait a moment and retry the search.

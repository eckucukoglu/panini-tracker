# Panini Sticker Album Tracker (panini-tracker)

**Version:** `0.0.6`

A modular, cloud-powered web application built with Firebase Realtime Database and Authentication to track Panini sticker album collections, missing stickers, and duplicate swaps across FIFA World Cup and UEFA European Championship (EURO) tournaments.

## Live Application

- Production URL: [https://panini-tracker.web.app](https://panini-tracker.web.app)

## Features

- 🏆 **Championship Hub**: Seamless navigation between **FIFA World Cup** and **UEFA European Championship** (EURO) tournaments.
- 📜 **Complete World Cup Coverage (1970–2026)**: All 15 official Panini World Cup album editions fully implemented with 100% authentic checklists, real player names, official badges, stadiums, mascots, and trophies:
  - **Phase 1 (1970–1986 Classic Era)**:
    - **Mexico 70** (271 contiguous stickers: 1–271, featuring Pelé, Beckenbauer, Moore, Riva, Eusebio, Cubillas)
    - **München 74** (400 contiguous stickers: 1–400, featuring Cruyff, Beckenbauer, Müller, Neeskens, Zoff, Lato)
    - **Argentina 78** (400 contiguous stickers: 1–400, featuring Kempes, Platini, Zico, Rossi, Rummenigge)
    - **España 82** (427 contiguous stickers: 1–427, featuring Maradona's WC debut, Zico, Socrates, Rossi, Rummenigge)
    - **Mexico 86** (427 contiguous stickers: 1–427, featuring Maradona, Platini, Lineker, Butragueño, Francescoli)
  - **Phase 2 (1990–2006 Golden Era)**:
    - **Italia 90** (448 contiguous stickers: 1–448, featuring Matthäus, Baresi, Gazza, Valderrama, Hagi, Schillaci)
    - **USA 94** (444 contiguous stickers: 1–444, featuring Romário, Baggio, Stoichkov, Hagi, Klinsmann, Maldini)
    - **France 98** (561 contiguous stickers: 1–561, featuring Zidane, Ronaldo R9, Henry, Bergkamp, Suker, Owen)
    - **Korea/Japan 2002** (576 contiguous stickers: 1–576, featuring Ronaldo, Rivaldo, Ronaldinho, Hakan Şükür, Kahn)
    - **Germany 2006** (596 contiguous stickers: 1–596, featuring Zidane, Ronaldinho, Messi debut, CR7 debut, Cannavaro)
  - **Phase 3 (2010–2022 Modern Era)**:
    - **South Africa 2010** (640 contiguous stickers: 1–640, featuring Iniesta, Xavi, Forlán, Müller, Robben, Sneijder)
    - **Brasil 2014** (640 contiguous stickers: 1–640, featuring Messi, Neymar, Kroos, James Rodríguez, Neuer)
    - **Russia 2018** (682 contiguous stickers: 1–682 + 10 Panini Legends, featuring Mbappé, Modrić, Kane, Griezmann)
    - **Qatar 2022** (670 stickers: code-based FWC1-29, 00, + 32 teams x 20 stickers, featuring Messi champion, Mbappé)
  - **Current Era**:
    - **FIFA World Cup 2026** (980 stickers: Canada, Mexico, USA • 48 Teams • Special FWC section)
- 📖 **Physical Album & Full Album Ownership Tracking**:
  - Track whether you own the physical album copy (empty/in-progress) for each tournament edition.
  - Track complete/full physical album ownership ("Dolu Albüm") across your collection.
  - Interactive ownership badges and quick toggles on tournament cards and the active tracker vault.
  - Collector's Vault Overview with physical album counts and completion metrics.
- 🔢 **Dual Numbering Systems**: Native support for both classic sequential numbering (`1..N`) and modern code-based numbering (`TUR3`, `FWC10`, `00`).
- 🔍 **Diacritic-Insensitive Search & In-Album Filtering**: Fast real-time tab filtering (*All*, *Missing Only*, *Owned Only*, *Duplicates Only*) and live keyword search matching player/item names (e.g. searching "voller" finds "Rudi Völler", "pele" finds "Pelé"), team codes, or numbers.
- 🧩 **Modular Architecture**: Clean, extensible tournament definitions in `data/tournaments/` with dedicated rules, team lists, flags, and database mapping.
- 🧭 **Stateful Navigation & Deep Linking**: Hash-based URL routing (`#/fifa-world-cup/1970`, `#/fifa-world-cup/1990/team/ITA`, `#/fifa-world-cup/2022`, etc.) with browser back/forward and refresh support.
- 📊 **Progress & Analytics**: Real-time album completion percentage, total physical sticker count, and expense tracking.
- ⚡ **Smart Bulk Query & Range Parser**: Intelligent list parsing from informal text with support for hyphens with spaces (`1 - 5`, `TUR 1 - 3`), repeated prefixes (`TUR1-TUR5`, `FWC 1 - FWC 4`), en-dashes (`1–5`), and duplicate addition preservation (`42, 42`).
- 🔄 **Swap & Duplicate Management**: One-click copying of missing lists and duplicate stickers sorted in album order for trading.
- 🔒 **Seals & Backups**: Freeze and restore collection milestones to rollback unsealed transactions.
- 🔐 **Admin Access**: Secure administration via Firebase Authentication.

## Project Structure

```
├── config.js                      # Firebase credentials & config (git-ignored)
├── config.example.js              # Template for Firebase credentials
├── data/
│   ├── tournaments-config.js      # Central category & tournament registry
│   └── tournaments/
│       ├── wc1970.js              # Mexico 70 official checklist (271 stickers)
│       ├── wc1974.js              # München 74 official checklist (400 stickers)
│       ├── wc1978.js              # Argentina 78 official checklist (400 stickers)
│       ├── wc1982.js              # España 82 official checklist (427 stickers)
│       ├── wc1986.js              # Mexico 86 official checklist (427 stickers)
│       ├── wc1990.js              # Italia 90 official checklist (448 stickers)
│       ├── wc1994.js              # USA 94 official checklist (444 stickers)
│       ├── wc1998.js              # France 98 official checklist (561 stickers)
│       ├── wc2002.js              # Korea/Japan 2002 official checklist (576 stickers)
│       ├── wc2006.js              # Germany 2006 official checklist (596 stickers)
│       ├── wc2010.js              # South Africa 2010 official checklist (640 stickers)
│       ├── wc2014.js              # Brasil 2014 official checklist (640 stickers)
│       ├── wc2018.js              # Russia 2018 official checklist (682 stickers)
│       ├── wc2022.js              # Qatar 2022 official checklist (670 stickers)
│       └── wc2026.js              # FIFA World Cup 2026 tournament specification
├── index.html                     # Single-page application entry point
├── database.rules.json            # Firebase Realtime Database security rules
├── firebase.json                  # Firebase hosting and database settings
├── package.json                   # Project metadata and versioning
```

## Setup & Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/eckucukoglu/panini-wc-tracker.git
   cd panini-tracker
   ```

2. Configure Firebase:
   Copy `config.example.js` to `config.js` and enter your Firebase project credentials:
   ```bash
   cp config.example.js config.js
   ```

3. Start local development server:
   ```bash
   npm start
   # or: python3 -m http.server 8000
   ```
   Open `http://localhost:8000` in your web browser.

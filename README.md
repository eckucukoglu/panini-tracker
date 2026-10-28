# Panini Sticker Album Tracker (panini-tracker)

**Version:** `0.0.4`

A modular, cloud-powered web application built with Firebase Realtime Database and Authentication to track Panini sticker album collections, missing stickers, and duplicate swaps across FIFA World Cup and UEFA European Championship (EURO) tournaments.

## Live Application

- Production URL: [https://panini-tracker.web.app](https://panini-tracker.web.app)

## Features

- 🏆 **Championship Hub**: Seamless navigation between **FIFA World Cup** and **UEFA European Championship** (EURO) tournaments.
- 📅 **Tournament Selection**: Explore individual tournament editions (starting with FIFA World Cup 2026, expandable to historic albums).
- 🧩 **Modular Architecture**: Clean, extensible tournament definitions in `data/tournaments/` with dedicated rules, team lists, flags, and database mapping.
- 🧭 **Stateful Navigation & Deep Linking**: Hash-based URL routing (`#/`, `#/fifa-world-cup`, `#/fifa-world-cup/2026`, etc.) with full browser back/forward and refresh support.
- 📊 **Progress & Analytics**: Real-time album completion percentage, total physical sticker count, and expense tracking.
- ⚡ **Smart Bulk Query**: Intelligent list parsing from informal text (e.g., `TUR2-5`, `MEX: 1, 7`, `ALG 4 5`).
- 🔄 **Swap & Duplicate Management**: One-click copying of missing lists and duplicate stickers for trading.
- 🔒 **Seals & Backups**: Freeze and restore collection milestones to rollback unsealed transactions.
- 🔐 **Admin Access**: Secure administration via Firebase Authentication.

## Project Structure

```
├── config.js                      # Firebase credentials & config (git-ignored)
├── config.example.js              # Template for Firebase credentials
├── data/
│   ├── tournaments-config.js      # Central category & tournament registry
│   └── tournaments/
│       └── wc2026.js              # FIFA World Cup 2026 tournament specification
├── index.html                     # Single-page application entry point
├── database.rules.json            # Firebase Realtime Database security rules
├── firebase.json                  # Firebase hosting and database settings
├── package.json                   # Project metadata and versioning
└── README.md
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

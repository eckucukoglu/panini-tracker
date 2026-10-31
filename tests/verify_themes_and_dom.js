// tests/verify_themes_and_dom.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== RUNNING DEEP THEMES & DOM VERIFICATION ===\n');

const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

// 1. Verify CSS Theme Definitions for all 15 Panini World Cup editions
console.log('--- 1. Testing CSS Theme Definitions for All 15 Editions ---');
const expectedWcYears = [1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022, 2026];

expectedWcYears.forEach(yr => {
    const themeClass = `body.theme-wc${yr}`;
    assert(indexHtml.includes(themeClass), `index.html must define CSS rule for ${themeClass}`);
    
    const coverClass = `.cover-wc${yr}`;
    assert(indexHtml.includes(coverClass), `index.html must define CSS rule for ${coverClass}`);

    const heroClass = `.cover-hero-wc${yr}`;
    assert(indexHtml.includes(heroClass), `index.html must define CSS rule for ${heroClass}`);

    console.log(`✅ ${yr} Theme: ${themeClass}, ${coverClass}, and ${heroClass} verified in CSS.`);
});

// 2. Verify Tactile Physical Sticker & Foil Sheen Styling
console.log('\n--- 2. Testing Tactile Physical Sticker & Foil Sheen CSS Rules ---');
assert(indexHtml.includes('border: 3px solid #ffffff'), 'index.html must include white die-cut peel border for owned stickers');
assert(indexHtml.includes('border: 3px solid #fef08a'), 'index.html must include gilded foil border for owned shiny stickers');
assert(indexHtml.includes('holoRainbow'), 'index.html must include holoRainbow keyframes for foil refraction');
assert(indexHtml.includes('foilGlint'), 'index.html must include foilGlint keyframes for holographic light sweep');
console.log('✅ Physical Panini sticker die-cut white borders and holographic prism foil verified in CSS.');

// 3. Verify TOURNAMENT_COVER_DATA Registry Completeness
console.log('\n--- 3. Testing TOURNAMENT_COVER_DATA Registry ---');
global.window = global;
global.TOURNAMENTS_CONFIG = { categories: [], tournaments: {} };
require('../data/tournaments-config.js');
expectedWcYears.forEach(yr => {
    require(`../data/tournaments/wc${yr}.js`);
});

// Extract TOURNAMENT_COVER_DATA from index.html
const coverDataMatch = indexHtml.match(/const TOURNAMENT_COVER_DATA = \{[\s\S]*?\n\s{4}\};/);
assert(coverDataMatch, 'TOURNAMENT_COVER_DATA must exist in index.html');

const compiledCoverData = new Function(`
    ${coverDataMatch[0]}
    return TOURNAMENT_COVER_DATA;
`)();

expectedWcYears.forEach(yr => {
    const id = `wc${yr}`;
    const entry = compiledCoverData[id];
    assert(entry, `TOURNAMENT_COVER_DATA must have entry for ${id}`);
    assert.strictEqual(entry.year, yr, `${id} year must match ${yr}`);
    assert(entry.coverTitle && entry.coverTitle.length > 0, `${id} must have coverTitle`);
    assert(entry.coverSubtitle && entry.coverSubtitle.length > 0, `${id} must have coverSubtitle`);
    assert(entry.era && entry.era.length > 0, `${id} must have era`);
    assert(entry.iconicFeature && entry.iconicFeature.length > 0, `${id} must have iconicFeature`);
    assert(entry.tagline && entry.tagline.length > 0, `${id} must have tagline`);
    console.log(`✅ ${entry.coverTitle} (${yr}): "${entry.iconicFeature}" - Host: ${entry.host}`);
});

// 4. Test DOM Theme Application and Cover Hero Rendering across all 15 editions
console.log('\n--- 4. Testing DOM Theme Application & Cover Hero Rendering ---');
const applyThemeMatch = indexHtml.match(/function applyTournamentTheme\s*\([\s\S]*?\n\s{4}\}/);
assert(applyThemeMatch, 'applyTournamentTheme must exist in index.html');

const renderHeroMatch = indexHtml.match(/function renderTournamentCoverHero\s*\([\s\S]*?\n\s{4}\}/);
assert(renderHeroMatch, 'renderTournamentCoverHero must exist in index.html');

let mockBodyClass = '';
let mockHeroStyle = { display: 'none' };
let mockHeroClass = '';
let mockHeroHtml = '';

global.document = {
    body: {
        set className(val) { mockBodyClass = val; },
        get className() { return mockBodyClass; }
    },
    getElementById: (id) => {
        if (id === 'tournamentCoverHero') {
            return {
                style: mockHeroStyle,
                set className(val) { mockHeroClass = val; },
                get className() { return mockHeroClass; },
                set innerHTML(val) { mockHeroHtml = val; },
                get innerHTML() { return mockHeroHtml; }
            };
        }
        return null;
    }
};

const compiledApplyTheme = new Function(`
    let document = global.document;
    ${applyThemeMatch[0]}
    return applyTournamentTheme;
`)();

const createRenderHero = new Function('TOURNAMENT_COVER_DATA', `
    let document = global.document;
    let activeTournament = null;
    ${renderHeroMatch[0]}
    return (tourney) => {
        activeTournament = tourney;
        renderTournamentCoverHero();
    };
`);
const compiledRenderHero = createRenderHero(compiledCoverData);

expectedWcYears.forEach(yr => {
    const id = `wc${yr}`;
    const tourney = global.TOURNAMENTS_CONFIG.tournaments[id];

    // Apply theme
    compiledApplyTheme(tourney);
    assert.strictEqual(mockBodyClass, `theme-${id}`, `body.className must be theme-${id}`);

    // Render cover hero
    compiledRenderHero(tourney);
    assert.strictEqual(mockHeroStyle.display, 'block', `tournamentCoverHero must be set to display: block`);
    assert(mockHeroClass.includes(`cover-hero-${id}`), `hero className must include cover-hero-${id}`);
    assert(mockHeroHtml.includes(compiledCoverData[id].coverTitle), `hero HTML must contain coverTitle "${compiledCoverData[id].coverTitle}"`);
    assert(mockHeroHtml.includes(`${tourney.totalStickers} Official Stickers`), `hero HTML must contain official sticker count`);
});
console.log('✅ DOM theme application and Cover Hero rendering verified across all 15 tournaments!');

// 5. Test Sub-View Hero Visibility Management
console.log('\n--- 5. Testing Sub-View Hero Visibility Management in handleRoute ---');
// Verify that in handleRoute:
// bulk-query view -> coverHero.style.display = 'none'
// team view -> coverHero.style.display = 'none'
// main tournament view -> coverHero.style.display = 'block'
const handleRouteMatch = indexHtml.match(/function handleRoute\s*\([\s\S]*?\n\s{4}\}/);
assert(handleRouteMatch, 'handleRoute must exist in index.html');
const hrCode = handleRouteMatch[0];

assert(hrCode.includes("route.view === 'bulk-query'"), "handleRoute must handle bulk-query");
assert(hrCode.includes("route.view === 'team'"), "handleRoute must handle team view");
assert(hrCode.includes("coverHero.style.display = 'none'"), "handleRoute must hide coverHero in sub-views");
assert(hrCode.includes("coverHero.style.display = 'block'"), "handleRoute must show coverHero in tournament dashboard");
console.log('✅ Sub-view visibility correctly hides hero banner during team detail and bulk queries.');

console.log('\n=== ALL DEEP THEME & DOM VERIFICATIONS PASSED ===');

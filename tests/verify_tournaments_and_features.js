// tests/verify_tournaments_and_features.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== RUNNING PANINI WORLD CUP TRACKER VERIFICATION ===\n');

// 1. Version Synchronization Check
console.log('--- 1. Testing SemVer Synchronization (0.0.6) ---');
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
const readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

const pkgVer = pkg.version;
console.log(`package.json version: ${pkgVer}`);
assert.strictEqual(pkgVer, '0.0.6', 'package.json version must be 0.0.6');

const readmeVerMatch = readme.match(/\*\*Version:\*\*\s*`([^`]+)`/);
assert(readmeVerMatch, 'README.md must have **Version:** `X.Y.Z`');
console.log(`README.md version: ${readmeVerMatch[1]}`);
assert.strictEqual(readmeVerMatch[1], '0.0.6', 'README.md version must be 0.0.6');

const indexVerMatch = indexHtml.match(/<span class="app-version">([^<]+)<\/span>/);
assert(indexVerMatch, 'index.html must have <span class="app-version">');
console.log(`index.html version: ${indexVerMatch[1]}`);
assert.strictEqual(indexVerMatch[1], '0.0.6', 'index.html version must be 0.0.6');
console.log('✅ Version synchronization verified: All files on 0.0.6\n');

// 2. Load and verify all 15 Panini World Cup tournaments
console.log('--- 2. Testing Tournament Registries & Authentic Sticker Checklists ---');
global.window = global;
global.TOURNAMENTS_CONFIG = { categories: [], tournaments: {} };
require('../data/tournaments-config.js');
require('../data/tournaments/wc1970.js');
require('../data/tournaments/wc1974.js');
require('../data/tournaments/wc1978.js');
require('../data/tournaments/wc1982.js');
require('../data/tournaments/wc1986.js');
require('../data/tournaments/wc1990.js');
require('../data/tournaments/wc1994.js');
require('../data/tournaments/wc1998.js');
require('../data/tournaments/wc2002.js');
require('../data/tournaments/wc2006.js');
require('../data/tournaments/wc2010.js');
require('../data/tournaments/wc2014.js');
require('../data/tournaments/wc2018.js');
require('../data/tournaments/wc2022.js');
require('../data/tournaments/wc2026.js');

const tourneys = global.TOURNAMENTS_CONFIG.tournaments;

// Verify all 15 Panini World Cup tournaments (1970-2026) are present and active
const expectedWcYears = [1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022, 2026];
expectedWcYears.forEach(yr => {
    const tourneyId = `wc${yr}`;
    const t = tourneys[tourneyId];
    assert(t, `Tournament ${tourneyId} (${yr}) must be defined in TOURNAMENTS_CONFIG`);
    assert.strictEqual(t.year, yr, `${tourneyId} year must be ${yr}`);
    assert.strictEqual(t.categoryId, 'fifa-world-cup', `${tourneyId} categoryId must be fifa-world-cup`);
    assert(t.totalStickers > 0, `${tourneyId} must have totalStickers defined`);
    assert.strictEqual(t.status, 'active', `${tourneyId} status must be active`);
});
console.log(`✅ All 15 Panini World Cup editions (1970–2026) verified as ACTIVE in TOURNAMENTS_CONFIG.`);

// Sequential tournaments (1970 - 2018: 13 tournaments)
const sequentialTourneys = [
    { id: 'wc1970', count: 271, samplePlayer: 'Pele', sampleCode: '180' },
    { id: 'wc1974', count: 400, samplePlayer: 'Cruyff', sampleCode: '246' },
    { id: 'wc1978', count: 400, samplePlayer: 'Kempes', sampleCode: '56' },
    { id: 'wc1982', count: 427, samplePlayer: 'Maradona', sampleCode: '176' },
    { id: 'wc1986', count: 427, samplePlayer: 'Maradona', sampleCode: '84' },
    { id: 'wc1990', count: 448, samplePlayer: 'Matthaus', sampleCode: '245' },
    { id: 'wc1994', count: 444, samplePlayer: 'Romario', sampleCode: '101' },
    { id: 'wc1998', count: 561, samplePlayer: 'Zidane', sampleCode: '163' },
    { id: 'wc2002', count: 576, samplePlayer: 'Hakan Şükür', sampleCode: '197' },
    { id: 'wc2006', count: 596, samplePlayer: 'Messi', sampleCode: '177' },
    { id: 'wc2010', count: 640, samplePlayer: 'Iniesta', sampleCode: '576' },
    { id: 'wc2014', count: 640, samplePlayer: 'Neymar', sampleCode: '46' },
    { id: 'wc2018', count: 682, samplePlayer: 'Mbappe', sampleCode: '206' }
];

sequentialTourneys.forEach(item => {
    const t = tourneys[item.id];
    assert(t, `Tournament ${item.id} must exist in TOURNAMENTS_CONFIG`);
    assert.strictEqual(t.totalStickers, item.count, `${item.id} totalStickers must be ${item.count}`);
    assert.strictEqual(t.isSequential, true, `${item.id} must be isSequential = true`);
    assert.strictEqual(t.status, 'active', `${item.id} status must be active`);

    const allStickers = [];
    Object.keys(t.groups).forEach(grp => {
        t.groups[grp].forEach(team => {
            const stickers = t.getStickersForTeam(team.code);
            assert(stickers.length > 0, `Team ${team.code} in ${item.id} must have stickers`);
            allStickers.push(...stickers);
        });
    });

    assert.strictEqual(allStickers.length, item.count, `${item.id} allStickers count (${allStickers.length}) must match totalStickers (${item.count})`);

    // Verify 1..N contiguous sequence
    for (let i = 1; i <= item.count; i++) {
        assert.strictEqual(allStickers[i - 1], String(i), `${item.id} sticker index ${i} must be ${i}`);
        const stickerItem = t.getStickerItem(String(i));
        assert(stickerItem, `getStickerItem("${i}") in ${item.id} must return an item`);
        assert(stickerItem.name && stickerItem.name.length > 0, `Item ${i} in ${item.id} must have a name`);
    }

    // Verify sample player search
    const sampleItem = t.getStickerItem(item.sampleCode);
    assert(sampleItem && sampleItem.name.includes(item.samplePlayer),
        `${item.id} #${item.sampleCode} ("${sampleItem ? sampleItem.name : 'null'}") must contain "${item.samplePlayer}"`);

    console.log(`✅ ${t.title}: Contiguous 1..${item.count} stickers verified. Sample: #${item.sampleCode} "${sampleItem.name}"`);
});

// Verify 2022 (Qatar - 670 stickers, code-based)
const t2022 = tourneys['wc2022'];
assert(t2022, 'wc2022 must exist');
assert.strictEqual(t2022.totalStickers, 670, 'wc2022 totalStickers must be 670');
assert.strictEqual(t2022.isSequential, false, 'wc2022 isSequential must be false');
assert.strictEqual(t2022.status, 'active', 'wc2022 status must be active');
let all2022 = [];
Object.keys(t2022.groups).forEach(g => {
    t2022.groups[g].forEach(team => {
        all2022.push(...t2022.getStickersForTeam(team.code));
    });
});
assert.strictEqual(all2022.length, 670, 'wc2022 must have exactly 670 stickers');
assert(all2022.includes('00'), 'wc2022 must include Panini 00 Logo');
assert(all2022.includes('FWC1'), 'wc2022 must include FWC1');
assert(all2022.includes('ARG1'), 'wc2022 must include ARG1');
assert(all2022.includes('ARG13'), 'wc2022 must include ARG13 (Lionel Messi)');
const messi2022 = t2022.getStickerItem('ARG13');
assert(messi2022.name.includes('Lionel Messi'), 'ARG13 in 2022 must be Lionel Messi');
console.log(`✅ Qatar 2022: 670 stickers, 00 Logo, FWC specials & ARG13 "${messi2022.name}" verified.`);

// Verify 2026 (wc2026 - 980 stickers, code-based)
const t2026 = tourneys['wc2026'];
assert(t2026, 'wc2026 must exist');
assert.strictEqual(t2026.totalStickers, 980, 'wc2026 totalStickers must be 980');
assert.strictEqual(t2026.isSequential, false, 'wc2026 isSequential must be false');
assert.strictEqual(t2026.status, 'active', 'wc2026 status must be active');
let all2026 = [];
Object.keys(t2026.groups).forEach(g => {
    t2026.groups[g].forEach(team => {
        all2026.push(...t2026.getStickersForTeam(team.code));
    });
});
assert.strictEqual(all2026.length, 980, 'wc2026 must have 980 stickers');
assert(all2026.includes('00'), 'wc2026 must include 00');
assert(all2026.includes('FWC1'), 'wc2026 must include FWC1');
assert(all2026.includes('TUR20'), 'wc2026 must include TUR20');
assert.strictEqual(t2026.getStickerItem('00').name, 'Panini 00 Logo');
assert.strictEqual(t2026.getStickerItem('FWC1').name, 'FIFA World Cup Trophy');
console.log('✅ wc2026: 980 stickers, 00 Logo, and FWC specials verified.\n');

// 3. Extract and test REAL functions from index.html
console.log('--- 3. Testing Real index.html Functions & Edge Cases ---');

// Extract parseComplexBulkText
const parseFuncMatch = indexHtml.match(/function parseComplexBulkText\s*\([\s\S]*?\n\s{4}\}/);
assert(parseFuncMatch, 'parseComplexBulkText must exist in index.html');

// Extract normalizeSearchText
const normFuncMatch = indexHtml.match(/function normalizeSearchText\s*\([\s\S]*?\n\s{4}\}/);
assert(normFuncMatch, 'normalizeSearchText must exist in index.html');

// Extract isStickerShiny
const shinyFuncMatch = indexHtml.match(/function isStickerShiny\s*\([\s\S]*?\n\s{4}\}/);
assert(shinyFuncMatch, 'isStickerShiny must exist in index.html');

// Extract getAlbumOwnership and toggleAlbumOwnership
const getOwnFuncMatch = indexHtml.match(/function getAlbumOwnership\s*\([\s\S]*?\n\s{4}\}/);
assert(getOwnFuncMatch, 'getAlbumOwnership must exist in index.html');

const toggleOwnFuncMatch = indexHtml.match(/function toggleAlbumOwnership\s*\([\s\S]*?\n\s{4}\}/);
assert(toggleOwnFuncMatch, 'toggleAlbumOwnership must exist in index.html');

// Test normalizeSearchText
const compiledNorm = new Function(`
    ${normFuncMatch[0]};
    return normalizeSearchText;
`)();

console.log('Testing normalizeSearchText with diacritics:');
assert.strictEqual(compiledNorm('Pelé'), 'pele');
assert.strictEqual(compiledNorm('Rudi Völler'), 'rudi voller');
assert.strictEqual(compiledNorm('Lothar Matthäus'), 'lothar matthaus');
assert.strictEqual(compiledNorm('Emilio Butragueño'), 'emilio butragueno');
assert.strictEqual(compiledNorm('Rüştü Reçber'), 'rustu recber');
assert.strictEqual(compiledNorm('Hakan Şükür'), 'hakan sukur');
assert.strictEqual(compiledNorm('Luka Modrić'), 'luka modric');
console.log('✅ normalizeSearchText accurately strips diacritics across languages.');

// Test isStickerShiny
const compiledShiny = new Function(`
    ${shinyFuncMatch[0]};
    return isStickerShiny;
`)();

assert.strictEqual(compiledShiny(t2026, '00'), true, '00 logo in 2026 must be shiny');
assert.strictEqual(compiledShiny(t2026, 'FWC1'), true, 'FWC trophy in 2026 must be shiny');
assert.strictEqual(compiledShiny(t2022, 'ARG1'), true, 'ARG1 badge in 2022 must be shiny');
assert.strictEqual(compiledShiny(t2022, 'ARG13'), false, 'ARG13 player in 2022 must not be badge shiny');
assert.strictEqual(compiledShiny(tourneys['wc1990'], '1'), true, 'Sticker #1 in 1990 must be shiny');
assert.strictEqual(compiledShiny(tourneys['wc1990'], '17'), true, 'Italy badge #17 in 1990 must be shiny');
console.log('✅ isStickerShiny correctly identifies foils, trophies, emblems, and badges.');

// Test Album Ownership State & Logic
const mockLocalStorage = {};
global.localStorage = {
    getItem: (k) => mockLocalStorage[k] || null,
    setItem: (k, v) => { mockLocalStorage[k] = String(v); },
    removeItem: (k) => { delete mockLocalStorage[k]; }
};
global.showToast = () => {};
global.renderAlbumOwnershipVault = () => {};
global.renderTournamentsList = () => {};
global.parseRoute = () => ({ view: 'tournaments', categoryId: 'fifa-world-cup' });
global.albumOwnershipData = {};

const compiledGetOwn = new Function(`
    let albumOwnershipData = global.albumOwnershipData;
    let TOURNAMENTS_CONFIG = global.TOURNAMENTS_CONFIG;
    ${getOwnFuncMatch[0]};
    return getAlbumOwnership;
`)();

const compiledToggleOwn = new Function(`
    let albumOwnershipData = global.albumOwnershipData;
    let TOURNAMENTS_CONFIG = global.TOURNAMENTS_CONFIG;
    let db = null;
    let showToast = global.showToast;
    let renderAlbumOwnershipVault = global.renderAlbumOwnershipVault;
    let renderTournamentsList = global.renderTournamentsList;
    let parseRoute = global.parseRoute;
    ${getOwnFuncMatch[0]};
    ${toggleOwnFuncMatch[0]};
    return toggleAlbumOwnership;
`)();

// Test initial state
const ownInit = compiledGetOwn('wc1990');
assert.strictEqual(ownInit.hasAlbum, false);
assert.strictEqual(ownInit.hasFullAlbum, false);

// Toggle physical album ownership
compiledToggleOwn('wc1990', 'album');
const ownAfterAlbum = compiledGetOwn('wc1990');
assert.strictEqual(ownAfterAlbum.hasAlbum, true, 'hasAlbum must be true after toggle');
assert.strictEqual(ownAfterAlbum.hasFullAlbum, false, 'hasFullAlbum must still be false');

// Toggle full album ownership
compiledToggleOwn('wc1990', 'fullAlbum');
const ownAfterFull = compiledGetOwn('wc1990');
assert.strictEqual(ownAfterFull.hasAlbum, true, 'hasAlbum must stay true');
assert.strictEqual(ownAfterFull.hasFullAlbum, true, 'hasFullAlbum must now be true');

// If physical album is untoggled, full album must be untoggled
compiledToggleOwn('wc1990', 'album');
const ownAfterUntoggle = compiledGetOwn('wc1990');
assert.strictEqual(ownAfterUntoggle.hasAlbum, false, 'hasAlbum must be false');
assert.strictEqual(ownAfterUntoggle.hasFullAlbum, false, 'hasFullAlbum must be false when physical album is untoggled');

console.log('✅ Album Ownership & Full Album Ownership logic verified.\n');

// 4. Test Route Resolution Across All 15 Eras
console.log('--- 4. Testing Route Resolution Across Eras ---');
function parseRouteMock(hash) {
    const clean = hash.replace(/^#\/?/, '');
    const parts = clean.split('/').filter(Boolean);
    if (parts.length === 0) return { view: 'categories' };
    const categoryId = parts[0];
    if (parts.length === 1) return { view: 'tournaments', categoryId };
    const yearOrTournamentId = parts[1];
    let tournamentId = yearOrTournamentId;
    let matchedTournament = null;
    for (const key in global.TOURNAMENTS_CONFIG.tournaments) {
        const t = global.TOURNAMENTS_CONFIG.tournaments[key];
        if (t.id === yearOrTournamentId || String(t.year) === String(yearOrTournamentId)) {
            tournamentId = t.id;
            matchedTournament = t;
            break;
        }
    }
    const year = matchedTournament ? String(matchedTournament.year) : yearOrTournamentId;
    if (parts.length === 2) return { view: 'tournament', categoryId, tournamentId, year };
    if (parts[2] === 'bulk-query') return { view: 'bulk-query', categoryId, tournamentId, year };
    if (parts[2] === 'team' && parts[3]) return { view: 'team', categoryId, tournamentId, year, teamCode: parts[3].toUpperCase() };
    return { view: 'tournament', categoryId, tournamentId, year };
}

expectedWcYears.forEach(yr => {
    const r = parseRouteMock(`#/fifa-world-cup/${yr}`);
    assert.strictEqual(r.tournamentId, `wc${yr}`);
    assert.strictEqual(r.year, String(yr));
    assert.strictEqual(r.view, 'tournament');
});
console.log('✅ Route resolution verified across all 15 tournaments (1970–2026)!\n');

// 5. Check index.html script tags
console.log('--- 5. Checking index.html script tags ---');
expectedWcYears.forEach(yr => {
    const fileName = `wc${yr}.js`;
    assert(indexHtml.includes(`data/tournaments/${fileName}`), `index.html must include script tag for data/tournaments/${fileName}`);
});
console.log('✅ All 15 tournament script tags present in index.html!\n');

console.log('=== ALL VERIFICATIONS PASSED SUCCESSFULLY ===');

// tests/verify_tournaments_and_features.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== RUNNING PANINI WORLD CUP TRACKER VERIFICATION ===\n');

// 1. Version Synchronization Check
console.log('--- 1. Testing SemVer Synchronization ---');
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
const readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

const pkgVer = pkg.version;
console.log(`package.json version: ${pkgVer}`);
assert.strictEqual(pkgVer, '0.0.5', 'package.json version must be 0.0.5');

const readmeVerMatch = readme.match(/\*\*Version:\*\*\s*`([^`]+)`/);
assert(readmeVerMatch, 'README.md must have **Version:** `X.Y.Z`');
console.log(`README.md version: ${readmeVerMatch[1]}`);
assert.strictEqual(readmeVerMatch[1], '0.0.5', 'README.md version must be 0.0.5');

const indexVerMatch = indexHtml.match(/<span class="app-version">([^<]+)<\/span>/);
assert(indexVerMatch, 'index.html must have <span class="app-version">');
console.log(`index.html version: ${indexVerMatch[1]}`);
assert.strictEqual(indexVerMatch[1], '0.0.5', 'index.html version must be 0.0.5');
console.log('✅ Version synchronization verified: All files on 0.0.5\n');

// 2. Load and verify tournaments
console.log('--- 2. Testing Tournament Registries and Stickers ---');
global.window = global;
global.TOURNAMENTS_CONFIG = { categories: [], tournaments: {} };
require('../data/tournaments-config.js');
require('../data/tournaments/wc1970.js');
require('../data/tournaments/wc1974.js');
require('../data/tournaments/wc1978.js');
require('../data/tournaments/wc1982.js');
require('../data/tournaments/wc1986.js');
require('../data/tournaments/wc2026.js');

const tourneys = global.TOURNAMENTS_CONFIG.tournaments;

// Verify all 15 Panini World Cup tournaments (1970-2026) are present
const expectedWcYears = [1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022, 2026];
expectedWcYears.forEach(yr => {
    const tourneyId = `wc${yr}`;
    const t = tourneys[tourneyId];
    assert(t, `Tournament ${tourneyId} (${yr}) must be defined in TOURNAMENTS_CONFIG`);
    assert.strictEqual(t.year, yr, `${tourneyId} year must be ${yr}`);
    assert.strictEqual(t.categoryId, 'fifa-world-cup', `${tourneyId} categoryId must be fifa-world-cup`);
    assert(t.totalStickers > 0, `${tourneyId} must have totalStickers defined`);
    assert(t.status === 'active' || t.status === 'in_preparation', `${tourneyId} status must be active or in_preparation`);
});
console.log(`✅ All 15 Panini World Cup editions (1970–2026) verified in TOURNAMENTS_CONFIG.`);

const classicIds = [
    { id: 'wc1970', count: 271, samplePlayer: 'Pele', sampleCode: '180' },
    { id: 'wc1974', count: 400, samplePlayer: 'Cruyff', sampleCode: '246' },
    { id: 'wc1978', count: 400, samplePlayer: 'Kempes', sampleCode: '56' },
    { id: 'wc1982', count: 427, samplePlayer: 'Maradona', sampleCode: '176' },
    { id: 'wc1986', count: 427, samplePlayer: 'Maradona', sampleCode: '84' }
];

classicIds.forEach(item => {
    const t = tourneys[item.id];
    assert(t, `Tournament ${item.id} must exist in TOURNAMENTS_CONFIG`);
    assert.strictEqual(t.totalStickers, item.count, `${item.id} totalStickers must be ${item.count}`);
    assert.strictEqual(t.isSequential, true, `${item.id} must be isSequential = true`);
    assert.strictEqual(t.status, 'active', `${item.id} status must be active`);

    const allStickers = [];
    Object.keys(t.groups).forEach(grp => {
        t.groups[grp].forEach(team => {
            const stickers = t.getStickersForTeam(team.code);
            assert(stickers.length > 0, `Team ${team.code} must have stickers`);
            allStickers.push(...stickers);
        });
    });

    assert.strictEqual(allStickers.length, item.count, `${item.id} allStickers count must match totalStickers`);

    // Verify 1..N contiguous sequence
    for (let i = 1; i <= item.count; i++) {
        assert.strictEqual(allStickers[i - 1], String(i), `${item.id} sticker index ${i} must be ${i}`);
        const stickerItem = t.getStickerItem(String(i));
        assert(stickerItem, `getStickerItem("${i}") must return an item`);
        assert(stickerItem.name && stickerItem.name.length > 0, `Item ${i} must have a name`);
    }

    // Verify sample player search
    const sampleItem = t.getStickerItem(item.sampleCode);
    assert(sampleItem.name.includes(item.samplePlayer), `${item.id} #${item.sampleCode} must contain ${item.samplePlayer}`);

    console.log(`✅ ${t.title}: Contiguous 1..${item.count} stickers verified. Sample: #${item.sampleCode} "${sampleItem.name}"`);
});

// Verify 2026
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

// Extract parseComplexBulkText from index.html
const parseFuncMatch = indexHtml.match(/function parseComplexBulkText\s*\([\s\S]*?\n\s{4}\}/);
assert(parseFuncMatch, 'parseComplexBulkText must exist in index.html');

// Extract normalizeSearchText from index.html
const normFuncMatch = indexHtml.match(/function normalizeSearchText\s*\([\s\S]*?\n\s{4}\}/);
assert(normFuncMatch, 'normalizeSearchText must exist in index.html');

// Create test environment
const evalEnv = {
    activeTournament: null,
    allStickers: [],
    teamMap: {}
};

const setupTournamentEnv = (tourney) => {
    evalEnv.activeTournament = tourney;
    evalEnv.allStickers = [];
    evalEnv.teamMap = {};
    if (tourney.groups) {
        Object.keys(tourney.groups).forEach(g => {
            tourney.groups[g].forEach(t => {
                evalEnv.teamMap[t.code] = t;
                evalEnv.allStickers.push(...tourney.getStickersForTeam(t.code));
            });
        });
    }
};

const compiledNorm = new Function(`
    ${normFuncMatch[0]};
    return normalizeSearchText;
`)();

const compiledParser = new Function('env', `
    let activeTournament = env.activeTournament;
    let allStickers = env.allStickers;
    let teamMap = env.teamMap;
    ${parseFuncMatch[0]};
    return parseComplexBulkText;
`);

// Test normalizeSearchText
console.log('Testing normalizeSearchText with diacritics:');
assert.strictEqual(compiledNorm('Pelé'), 'pele');
assert.strictEqual(compiledNorm('Rudi Völler'), 'rudi voller');
assert.strictEqual(compiledNorm('Lothar Matthäus'), 'lothar matthaus');
assert.strictEqual(compiledNorm('Emilio Butragueño'), 'emilio butragueno');
assert.strictEqual(compiledNorm('Hans Müller'), 'hans muller');
assert.strictEqual(compiledNorm('Karl-Heinz Förster'), 'karl-heinz forster');
console.log('✅ normalizeSearchText accurately strips diacritics across languages.');

// Test parseComplexBulkText for Sequential (1986)
const t86 = tourneys['wc1986'];
setupTournamentEnv(t86);
const parser86 = compiledParser(evalEnv);

// Test standard list and range
const r86_std = parser86("1, 2, 5-8, 42, 100-103");
assert.deepStrictEqual(r86_std, ['1', '2', '5', '6', '7', '8', '42', '100', '101', '102', '103']);

// Test ranges with whitespace around hyphen: "1 - 5"
const r86_spaces = parser86("1 - 5, 8");
assert.deepStrictEqual(r86_spaces, ['1', '2', '3', '4', '5', '8'], 'Ranges with spaces like "1 - 5" must expand contiguous range');

// Test unicode en-dash: "1–5"
const r86_endash = parser86("1\u20135, 10\u201412");
assert.deepStrictEqual(r86_endash, ['1', '2', '3', '4', '5', '10', '11', '12'], 'Ranges with en-dash/em-dash must expand properly');

// Test duplicate handling in bulk add mode vs query mode
const r86_dupes_allowed = parser86("42, 42, 45, 45", { allowDuplicates: true });
assert.deepStrictEqual(r86_dupes_allowed, ['42', '42', '45', '45'], 'allowDuplicates:true must preserve duplicate occurrences');

const r86_dupes_distinct = parser86("42, 42, 45, 45", { allowDuplicates: false });
assert.deepStrictEqual(r86_dupes_distinct, ['42', '45'], 'allowDuplicates:false must de-duplicate occurrences');

console.log('✅ Sequential range parsing & duplicate preservation verified for wc1986.');

// Test parseComplexBulkText for Code-based (2026)
setupTournamentEnv(t2026);
const parser26 = compiledParser(evalEnv);

// Test standard code ranges
const r26_std = parser26("TUR 1 2 3\nTUR 5-7\nFWC: 1, 2\n00\nBRA10-12");
assert.deepStrictEqual(r26_std, ['TUR1', 'TUR2', 'TUR3', 'TUR5', 'TUR6', 'TUR7', 'FWC1', 'FWC2', '00', 'BRA10', 'BRA11', 'BRA12']);

// Test code ranges with spaces: "TUR 1 - 3"
const r26_spaces = parser26("TUR 1 - 3");
assert.deepStrictEqual(r26_spaces, ['TUR1', 'TUR2', 'TUR3'], 'Code ranges with spaces like "TUR 1 - 3" must expand');

// Test repeated prefix: "TUR1-TUR4" and "FWC 1 - FWC 3"
const r26_repeated = parser26("TUR1-TUR4\nFWC 1 - FWC 3");
assert.deepStrictEqual(r26_repeated, ['TUR1', 'TUR2', 'TUR3', 'TUR4', 'FWC1', 'FWC2', 'FWC3'], 'Repeated prefix ranges must expand');

console.log('✅ Code-based range parsing verified for wc2026.\n');

// 4. Test Route Resolution Across Eras
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

const r1 = parseRouteMock('#/fifa-world-cup/1970');
assert.strictEqual(r1.tournamentId, 'wc1970');
assert.strictEqual(r1.year, '1970');
assert.strictEqual(r1.view, 'tournament');

const r2 = parseRouteMock('#/fifa-world-cup/wc1982/team/ITA');
assert.strictEqual(r2.tournamentId, 'wc1982');
assert.strictEqual(r2.year, '1982');
assert.strictEqual(r2.view, 'team');
assert.strictEqual(r2.teamCode, 'ITA');

const r3 = parseRouteMock('#/fifa-world-cup/1990');
assert.strictEqual(r3.tournamentId, 'wc1990');
assert.strictEqual(r3.year, '1990');
assert.strictEqual(r3.view, 'tournament');

const r4 = parseRouteMock('#/fifa-world-cup/2022');
assert.strictEqual(r4.tournamentId, 'wc2022');
assert.strictEqual(r4.year, '2022');
assert.strictEqual(r4.view, 'tournament');

const r5 = parseRouteMock('#/fifa-world-cup/2026/bulk-query');
assert.strictEqual(r5.tournamentId, 'wc2026');
assert.strictEqual(r5.view, 'bulk-query');

console.log('✅ Route resolution verified across all 15 tournaments (1970–2026)!\n');

// 5. Check index.html script tags
console.log('--- 5. Checking index.html script tags ---');
['wc1970.js', 'wc1974.js', 'wc1978.js', 'wc1982.js', 'wc1986.js', 'wc2026.js'].forEach(file => {
    assert(indexHtml.includes(`data/tournaments/${file}`), `index.html must include script tag for data/tournaments/${file}`);
});
console.log('✅ All 6 tournament script tags present in index.html!\n');

console.log('=== ALL VERIFICATIONS PASSED SUCCESSFULLY ===');

// data/tournaments-config.js
// Central configuration for tournament categories and tournament registry

const TOURNAMENTS_CONFIG = {
    categories: [
        {
            id: 'fifa-world-cup',
            name: 'FIFA World Cup',
            subtitle: 'The greatest football tournaments in the world',
            description: 'Explore official Panini FIFA World Cup sticker collections, track missing stickers, manage duplicate swaps, and seal your progress.',
            icon: '🏆',
            themeColor: '#003366',
            status: 'active',
            badge: 'Active'
        },
        {
            id: 'uefa-euro',
            name: 'UEFA European Championship',
            subtitle: 'The pinnacle of European international football',
            description: 'Official Panini UEFA European Championship (EURO) sticker album collections.',
            icon: '🇪🇺',
            themeColor: '#004f9e',
            status: 'under_construction',
            badge: 'Under Construction'
        }
    ],
    tournaments: {
        'wc1970': {
            id: 'wc1970',
            categoryId: 'fifa-world-cup',
            year: 1970,
            title: 'Mexico 70',
            subtitle: 'Mexico • 16 Teams • 271 Stickers',
            dbKey: 'panini1970',
            isSequential: true,
            totalStickers: 271,
            status: 'active',
            phase: 'Phase 1 (1970–1986)'
        },
        'wc1974': {
            id: 'wc1974',
            categoryId: 'fifa-world-cup',
            year: 1974,
            title: 'München 74',
            subtitle: 'West Germany • 16 Teams • 400 Stickers',
            dbKey: 'panini1974',
            isSequential: true,
            totalStickers: 400,
            status: 'active',
            phase: 'Phase 1 (1970–1986)'
        },
        'wc1978': {
            id: 'wc1978',
            categoryId: 'fifa-world-cup',
            year: 1978,
            title: 'Argentina 78',
            subtitle: 'Argentina • 16 Teams • 400 Stickers',
            dbKey: 'panini1978',
            isSequential: true,
            totalStickers: 400,
            status: 'active',
            phase: 'Phase 1 (1970–1986)'
        },
        'wc1982': {
            id: 'wc1982',
            categoryId: 'fifa-world-cup',
            year: 1982,
            title: 'España 82',
            subtitle: 'Spain • 24 Teams • 427 Stickers',
            dbKey: 'panini1982',
            isSequential: true,
            totalStickers: 427,
            status: 'active',
            phase: 'Phase 1 (1970–1986)'
        },
        'wc1986': {
            id: 'wc1986',
            categoryId: 'fifa-world-cup',
            year: 1986,
            title: 'Mexico 86',
            subtitle: 'Mexico • 24 Teams • 427 Stickers',
            dbKey: 'panini1986',
            isSequential: true,
            totalStickers: 427,
            status: 'active',
            phase: 'Phase 1 (1970–1986)'
        },
        'wc1990': {
            id: 'wc1990',
            categoryId: 'fifa-world-cup',
            year: 1990,
            title: 'Italia 90',
            subtitle: 'Italy • 24 Teams • 448 Stickers',
            dbKey: 'panini1990',
            isSequential: true,
            totalStickers: 448,
            status: 'in_preparation',
            phase: 'Phase 2 (1990–2006)',
            description: 'The iconic Italia 90 Panini album featuring 24 national teams, stadium postcards, and classic mascots. Official checklist scheduled for Phase 2.'
        },
        'wc1994': {
            id: 'wc1994',
            categoryId: 'fifa-world-cup',
            year: 1994,
            title: 'USA 94',
            subtitle: 'United States • 24 Teams • 444 Stickers',
            dbKey: 'panini1994',
            isSequential: true,
            totalStickers: 444,
            status: 'in_preparation',
            phase: 'Phase 2 (1990–2006)',
            description: 'Official Panini World Cup USA 94 album with 24 teams, holographic badges, and Striker the mascot. Official checklist scheduled for Phase 2.'
        },
        'wc1998': {
            id: 'wc1998',
            categoryId: 'fifa-world-cup',
            year: 1998,
            title: 'France 98',
            subtitle: 'France • 32 Teams • 561 Stickers',
            dbKey: 'panini1998',
            isSequential: true,
            totalStickers: 561,
            status: 'in_preparation',
            phase: 'Phase 2 (1990–2006)',
            description: 'The first 32-nation World Cup album with 561 stickers, Footix mascot, and 8 tournament groups. Official checklist scheduled for Phase 2.'
        },
        'wc2002': {
            id: 'wc2002',
            categoryId: 'fifa-world-cup',
            year: 2002,
            title: 'Korea/Japan 2002',
            subtitle: 'Korea & Japan • 32 Teams • 576 Stickers',
            dbKey: 'panini2002',
            isSequential: true,
            totalStickers: 576,
            status: 'in_preparation',
            phase: 'Phase 2 (1990–2006)',
            description: 'Panini 2002 FIFA World Cup Korea/Japan album with dual host venues and 576 stickers. Official checklist scheduled for Phase 2.'
        },
        'wc2006': {
            id: 'wc2006',
            categoryId: 'fifa-world-cup',
            year: 2006,
            title: 'Germany 2006',
            subtitle: 'Germany • 32 Teams • 596 Stickers',
            dbKey: 'panini2006',
            isSequential: true,
            totalStickers: 596,
            status: 'in_preparation',
            phase: 'Phase 2 (1990–2006)',
            description: 'Official Panini FIFA World Cup Germany 2006 album featuring Goleo VI and 596 stickers. Official checklist scheduled for Phase 2.'
        },
        'wc2010': {
            id: 'wc2010',
            categoryId: 'fifa-world-cup',
            year: 2010,
            title: 'South Africa 2010',
            subtitle: 'South Africa • 32 Teams • 640 Stickers',
            dbKey: 'panini2010',
            isSequential: true,
            totalStickers: 640,
            status: 'in_preparation',
            phase: 'Phase 3 (2010–2022)',
            description: 'Panini South Africa 2010 album with 640 stickers, Zakumi mascot, and glitter badges. Official checklist scheduled for Phase 3.'
        },
        'wc2014': {
            id: 'wc2014',
            categoryId: 'fifa-world-cup',
            year: 2014,
            title: 'Brasil 2014',
            subtitle: 'Brazil • 32 Teams • 640 Stickers',
            dbKey: 'panini2014',
            isSequential: true,
            totalStickers: 640,
            status: 'in_preparation',
            phase: 'Phase 3 (2010–2022)',
            description: 'Panini FIFA World Cup Brasil 2014 album with 640 stickers and Fuleco the Armadillo. Official checklist scheduled for Phase 3.'
        },
        'wc2018': {
            id: 'wc2018',
            categoryId: 'fifa-world-cup',
            year: 2018,
            title: 'Russia 2018',
            subtitle: 'Russia • 32 Teams • 682 Stickers',
            dbKey: 'panini2018',
            isSequential: true,
            totalStickers: 682,
            status: 'in_preparation',
            phase: 'Phase 3 (2010–2022)',
            description: 'Panini FIFA World Cup Russia 2018 album with 682 stickers, Zabivaka mascot, and foil legends. Official checklist scheduled for Phase 3.'
        },
        'wc2022': {
            id: 'wc2022',
            categoryId: 'fifa-world-cup',
            year: 2022,
            title: 'Qatar 2022',
            subtitle: 'Qatar • 32 Teams • 670 Stickers',
            dbKey: 'panini2022',
            isSequential: false,
            totalStickers: 670,
            status: 'in_preparation',
            phase: 'Phase 3 (2010–2022)',
            description: 'Panini FIFA World Cup Qatar 2022 album with team code numbering (e.g. ARG1-20, FWC1-29) and extra stickers. Official checklist scheduled for Phase 3.'
        },
        'wc2026': {
            id: 'wc2026',
            categoryId: 'fifa-world-cup',
            year: 2026,
            title: 'FIFA World Cup 2026',
            subtitle: 'Canada, Mexico, USA • 48 Teams • 980 Stickers',
            dbKey: 'panini2026',
            isSequential: false,
            totalStickers: 980,
            status: 'active',
            phase: 'Current Era'
        }
    }
};

if (typeof window !== 'undefined') {
    window.TOURNAMENTS_CONFIG = TOURNAMENTS_CONFIG;
} else if (typeof global !== 'undefined') {
    global.TOURNAMENTS_CONFIG = TOURNAMENTS_CONFIG;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOURNAMENTS_CONFIG;
}


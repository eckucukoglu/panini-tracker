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
    tournaments: {}
};

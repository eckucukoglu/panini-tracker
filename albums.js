// albums.js
const ALBUMS_DATA = {
    'wc2026': {
        id: 'wc2026', type: 'wc', year: 2026,
        title: '🏆 World Cup 2026', 
        coverImg: 'https://i.ibb.co/example_2026_mascot.png', // Buraya mascot/kapak linki gelecek
        isSequential: false, // Sayısal değil, harfli kodlama (TUR1 vb.)
        groups: {
            "Grup A": [{ code: "MEX", name: "Meksika", limit: 20 }, { code: "CAN", name: "Kanada", limit: 20 }]
            // ... Diğer 2026 grupları
        }
    },
    'wc1990': {
        id: 'wc1990', type: 'wc', year: 1990,
        title: '⚽ Italia \'90', 
        coverImg: 'https://i.ibb.co/example_ciao_mascot.png', 
        isSequential: true, // 1'den 448'e kadar sıralı sistem
        totalStickers: 448,
        groups: {
            "Özel Bölüm": [{ name: "Maskot ve Stadyumlar", start: 1, end: 18 }],
            "A Grubu": [
                { name: "İtalya", start: 19, end: 36, flags: ["it"] },
                { name: "Avusturya", start: 37, end: 54, flags: ["at"] }
            ]
            // ... İtalya 90 grupları
        }
    },
    'wc1970': {
        id: 'wc1970', type: 'wc', year: 1970,
        title: '🌵 Mexico 70', 
        coverImg: 'https://i.ibb.co/example_juanito_mascot.png',
        isSequential: true,
        totalStickers: 271,
        groups: {
            "Grup 1": [{ name: "Meksika", start: 1, end: 11 }, { name: "SSCB", start: 12, end: 22 }]
            // ... Mexico 70 grupları
        }
    },
    'euro2024': {
        id: 'euro2024', type: 'euro', year: 2024,
        title: '🇩🇪 Euro 2024 (Topps/Panini)',
        coverImg: 'https://i.ibb.co/example_albert_mascot.png',
        isSequential: false, // EUR1, GER1 vb.
        groups: {
            "Grup A": [{ code: "GER", name: "Almanya", limit: 21 }, { code: "SCO", name: "İskoçya", limit: 21 }]
            // ... Euro 24
        }
    }
};
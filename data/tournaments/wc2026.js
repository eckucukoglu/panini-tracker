// data/tournaments/wc2026.js
// Template & data specification for FIFA World Cup 2026

TOURNAMENTS_CONFIG.tournaments['wc2026'] = {
    id: 'wc2026',
    categoryId: 'fifa-world-cup',
    year: 2026,
    title: 'FIFA World Cup 2026',
    subtitle: 'Canada, Mexico, USA',
    dbKey: 'panini2026', // Firebase realtime database prefix (panini2026_collection, etc.)
    stickerLimitPerTeam: 20,
    specialTeamCode: 'FWC',
    getStickersForTeam: function(teamCode) {
        if (teamCode === 'FWC') {
            return ['00', ...Array.from({ length: 19 }, (_, k) => `FWC${k + 1}`)];
        }
        return Array.from({ length: this.stickerLimitPerTeam }, (_, k) => `${teamCode}${k + 1}`);
    },
    groups: {
        "Special Section": [
            { code: "FWC", name: "Special / Stadiums" }
        ],
        "Group A": [
            { code: "MEX", flags: ["mx"], name: "Mexico (H)" },
            { code: "RSA", flags: ["za"], name: "South Africa" },
            { code: "KOR", flags: ["kr"], name: "South Korea" },
            { code: "CZE", flags: ["cz"], name: "Czechia" }
        ],
        "Group B": [
            { code: "CAN", flags: ["ca"], name: "Canada (H)" },
            { code: "BIH", flags: ["ba"], name: "Bosnia & Herzegovina" },
            { code: "QAT", flags: ["qa"], name: "Qatar" },
            { code: "SUI", flags: ["ch"], name: "Switzerland" }
        ],
        "Group C": [
            { code: "BRA", flags: ["br"], name: "Brazil" },
            { code: "MAR", flags: ["ma"], name: "Morocco" },
            { code: "HAI", flags: ["ht"], name: "Haiti" },
            { code: "SCO", flags: ["gb-sct"], name: "Scotland" }
        ],
        "Group D": [
            { code: "USA", flags: ["us"], name: "USA (H)" },
            { code: "PAR", flags: ["py"], name: "Paraguay" },
            { code: "AUS", flags: ["au"], name: "Australia" },
            { code: "TUR", flags: ["tr"], name: "Turkey" }
        ],
        "Group E": [
            { code: "GER", flags: ["de"], name: "Germany" },
            { code: "CUW", flags: ["cw"], name: "Curaçao" },
            { code: "CIV", flags: ["ci"], name: "Ivory Coast" },
            { code: "ECU", flags: ["ec"], name: "Ecuador" }
        ],
        "Group F": [
            { code: "NED", flags: ["nl"], name: "Netherlands" },
            { code: "JPN", flags: ["jp"], name: "Japan" },
            { code: "SWE", flags: ["se"], name: "Sweden" },
            { code: "TUN", flags: ["tn"], name: "Tunisia" }
        ],
        "Group G": [
            { code: "BEL", flags: ["be"], name: "Belgium" },
            { code: "EGY", flags: ["eg"], name: "Egypt" },
            { code: "IRN", flags: ["ir"], name: "Iran" },
            { code: "NZL", flags: ["nz"], name: "New Zealand" }
        ],
        "Group H": [
            { code: "ESP", flags: ["es"], name: "Spain" },
            { code: "CPV", flags: ["cv"], name: "Cape Verde" },
            { code: "KSA", flags: ["sa"], name: "Saudi Arabia" },
            { code: "URU", flags: ["uy"], name: "Uruguay" }
        ],
        "Group I": [
            { code: "FRA", flags: ["fr"], name: "France" },
            { code: "SEN", flags: ["sn"], name: "Senegal" },
            { code: "IRQ", flags: ["iq"], name: "Iraq" },
            { code: "NOR", flags: ["no"], name: "Norway" }
        ],
        "Group J": [
            { code: "ARG", flags: ["ar"], name: "Argentina" },
            { code: "ALG", flags: ["dz"], name: "Algeria" },
            { code: "AUT", flags: ["at"], name: "Austria" },
            { code: "JOR", flags: ["jo"], name: "Jordan" }
        ],
        "Group K": [
            { code: "POR", flags: ["pt"], name: "Portugal" },
            { code: "COD", flags: ["cd"], name: "Congo" },
            { code: "UZB", flags: ["uz"], name: "Uzbekistan" },
            { code: "COL", flags: ["co"], name: "Colombia" }
        ],
        "Group L": [
            { code: "ENG", flags: ["gb-eng"], name: "England" },
            { code: "CRO", flags: ["hr"], name: "Croatia" },
            { code: "GHA", flags: ["gh"], name: "Ghana" },
            { code: "PAN", flags: ["pa"], name: "Panama" }
        ]
    }
};

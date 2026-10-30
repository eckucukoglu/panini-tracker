// data/tournaments/wc1978.js
// Official Panini Argentina 78 World Cup Collection (1-400)

TOURNAMENTS_CONFIG.tournaments['wc1978'] = {
    id: 'wc1978',
    categoryId: 'fifa-world-cup',
    year: 1978,
    title: 'Argentina 78',
    subtitle: 'Argentina • 16 Teams • 400 Stickers',
    dbKey: 'panini1978',
    isSequential: true,
    totalStickers: 400,
    status: 'active',
    phase: 'Phase 1 (1970–1986)',
    getStickersForTeam: function(teamCode) {
        if (!this._teamStickersMap) {
            this._teamStickersMap = {};
            Object.values(this.groups).forEach(group => {
                group.forEach(team => {
                    this._teamStickersMap[team.code] = team.stickers.map(s => s.code);
                });
            });
        }
        return this._teamStickersMap[teamCode] || [];
    },
    getStickerItem: function(stickerCode) {
        if (!this._stickersMap) {
            this._stickersMap = {};
            Object.values(this.groups).forEach(group => {
                group.forEach(team => {
                    team.stickers.forEach(s => {
                        this._stickersMap[s.code] = {
                            code: s.code,
                            name: s.name,
                            teamCode: team.code,
                            teamName: team.name
                        };
                    });
                });
            });
        }
        return this._stickersMap[stickerCode] || null;
    },
    groups: {
        "Special Section": [
                {
                        "code": "SPECIAL",
                        "name": "History, Trophies & Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "Jules Rimet Cup"
                                },
                                {
                                        "code": "2",
                                        "name": "Poster (World Cup 1930)"
                                },
                                {
                                        "code": "3",
                                        "name": "Stabile (World Cup 1930)"
                                },
                                {
                                        "code": "4",
                                        "name": "Uruguay (World Cup 1930)"
                                },
                                {
                                        "code": "5",
                                        "name": "Poster (World Cup 1934)"
                                },
                                {
                                        "code": "6",
                                        "name": "Meazza (World Cup 1934)"
                                },
                                {
                                        "code": "7",
                                        "name": "Italy (World Cup 1934)"
                                },
                                {
                                        "code": "8",
                                        "name": "Poster (World Cup 1938)"
                                },
                                {
                                        "code": "9",
                                        "name": "Piola (World Cup 1938)"
                                },
                                {
                                        "code": "10",
                                        "name": "Italy (World Cup 1938)"
                                },
                                {
                                        "code": "11",
                                        "name": "Poster (World Cup 1950)"
                                },
                                {
                                        "code": "12",
                                        "name": "Schiaffino (World Cup 1950)"
                                },
                                {
                                        "code": "13",
                                        "name": "Uruguay (World Cup 1950)"
                                },
                                {
                                        "code": "14",
                                        "name": "Poster (World Cup 1954)"
                                },
                                {
                                        "code": "15",
                                        "name": "Puskas (World Cup 1954)"
                                },
                                {
                                        "code": "16",
                                        "name": "West Germany (World Cup 1954)"
                                },
                                {
                                        "code": "17",
                                        "name": "Poster (World Cup 1958)"
                                },
                                {
                                        "code": "18",
                                        "name": "Fontaine (World Cup 1958)"
                                },
                                {
                                        "code": "19",
                                        "name": "Brazil (World Cup 1958)"
                                },
                                {
                                        "code": "20",
                                        "name": "Poster (World Cup 1962)"
                                },
                                {
                                        "code": "21",
                                        "name": "Gilmar (World Cup 1962)"
                                },
                                {
                                        "code": "22",
                                        "name": "Brazil (World Cup 1962)"
                                },
                                {
                                        "code": "23",
                                        "name": "Poster (World Cup 1966)"
                                },
                                {
                                        "code": "24",
                                        "name": "Charlton B (World Cup 1966)"
                                },
                                {
                                        "code": "25",
                                        "name": "England (World Cup 1966)"
                                },
                                {
                                        "code": "26",
                                        "name": "Poster (World Cup 1970)"
                                },
                                {
                                        "code": "27",
                                        "name": "Pele (World Cup 1970)"
                                },
                                {
                                        "code": "28",
                                        "name": "Brazil (World Cup 1970)"
                                },
                                {
                                        "code": "29",
                                        "name": "World Cup (World Cup 1970)"
                                },
                                {
                                        "code": "30",
                                        "name": "Poster (World Cup 1974)"
                                },
                                {
                                        "code": "31",
                                        "name": "Beckenbauer (World Cup 1974)"
                                },
                                {
                                        "code": "32",
                                        "name": "West Germany (World Cup 1974)"
                                },
                                {
                                        "code": "33",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "34",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "35",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "36",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "37",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "38",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "39",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "40",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "41",
                                        "name": "Stadiums/Cities"
                                },
                                {
                                        "code": "42",
                                        "name": "Stadiums/Cities"
                                }
                        ]
                }
        ],
        "Group 1": [
                {
                        "code": "ARG",
                        "name": "Argentina (H)",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "43",
                                        "name": "Badge (Argentina)"
                                },
                                {
                                        "code": "44",
                                        "name": "Team (Argentina)"
                                },
                                {
                                        "code": "45",
                                        "name": "Fillol (Argentina)"
                                },
                                {
                                        "code": "46",
                                        "name": "Olguin (Argentina)"
                                },
                                {
                                        "code": "47",
                                        "name": "Killer (Argentina)"
                                },
                                {
                                        "code": "48",
                                        "name": "Passerella (Argentina)"
                                },
                                {
                                        "code": "49",
                                        "name": "Tarentini (Argentina)"
                                },
                                {
                                        "code": "50",
                                        "name": "Alves (Argentina)"
                                },
                                {
                                        "code": "51",
                                        "name": "Gallego (Argentina)"
                                },
                                {
                                        "code": "52",
                                        "name": "Ardiles (Argentina)"
                                },
                                {
                                        "code": "53",
                                        "name": "Villa (Argentina)"
                                },
                                {
                                        "code": "54",
                                        "name": "Larrosa (Argentina)"
                                },
                                {
                                        "code": "55",
                                        "name": "Houseman (Argentina)"
                                },
                                {
                                        "code": "56",
                                        "name": "Kempes (Argentina)"
                                },
                                {
                                        "code": "57",
                                        "name": "Luque (Argentina)"
                                },
                                {
                                        "code": "58",
                                        "name": "Bertoni (Argentina)"
                                },
                                {
                                        "code": "59",
                                        "name": "Ortiz (Argentina)"
                                },
                                {
                                        "code": "60",
                                        "name": "Baley (Argentina)"
                                }
                        ]
                },
                {
                        "code": "HUN",
                        "name": "Hungary",
                        "flags": [
                                "hu"
                        ],
                        "stickers": [
                                {
                                        "code": "61",
                                        "name": "Badge (Hungary)"
                                },
                                {
                                        "code": "62",
                                        "name": "Team (Hungary)"
                                },
                                {
                                        "code": "63",
                                        "name": "Gujdar (Hungary)"
                                },
                                {
                                        "code": "64",
                                        "name": "Martos (Hungary)"
                                },
                                {
                                        "code": "65",
                                        "name": "Torok (Hungary)"
                                },
                                {
                                        "code": "66",
                                        "name": "Kereki (Hungary)"
                                },
                                {
                                        "code": "67",
                                        "name": "Balint (Hungary)"
                                },
                                {
                                        "code": "68",
                                        "name": "Kocsis (Hungary)"
                                },
                                {
                                        "code": "69",
                                        "name": "Toth (Hungary)"
                                },
                                {
                                        "code": "70",
                                        "name": "Rab (Hungary)"
                                },
                                {
                                        "code": "71",
                                        "name": "Zombori (Hungary)"
                                },
                                {
                                        "code": "72",
                                        "name": "Nyilasi (Hungary)"
                                },
                                {
                                        "code": "73",
                                        "name": "Pinter (Hungary)"
                                },
                                {
                                        "code": "74",
                                        "name": "Fazekas (Hungary)"
                                },
                                {
                                        "code": "75",
                                        "name": "Pusztai (Hungary)"
                                },
                                {
                                        "code": "76",
                                        "name": "Torocsik (Hungary)"
                                },
                                {
                                        "code": "77",
                                        "name": "Varadi (Hungary)"
                                },
                                {
                                        "code": "78",
                                        "name": "Meszaros (Hungary)"
                                }
                        ]
                },
                {
                        "code": "FRA",
                        "name": "France",
                        "flags": [
                                "fr"
                        ],
                        "stickers": [
                                {
                                        "code": "79",
                                        "name": "Badge (France)"
                                },
                                {
                                        "code": "80",
                                        "name": "Team (France)"
                                },
                                {
                                        "code": "81",
                                        "name": "Rey (France)"
                                },
                                {
                                        "code": "82",
                                        "name": "Janvion (France)"
                                },
                                {
                                        "code": "83",
                                        "name": "Rio (France)"
                                },
                                {
                                        "code": "84",
                                        "name": "Tresor (France)"
                                },
                                {
                                        "code": "85",
                                        "name": "Lopez (France)"
                                },
                                {
                                        "code": "86",
                                        "name": "Bossis (France)"
                                },
                                {
                                        "code": "87",
                                        "name": "Bathenay (France)"
                                },
                                {
                                        "code": "88",
                                        "name": "Guillou (France)"
                                },
                                {
                                        "code": "89",
                                        "name": "Michel (France)"
                                },
                                {
                                        "code": "90",
                                        "name": "Platini (France)"
                                },
                                {
                                        "code": "91",
                                        "name": "Rocheteau (France)"
                                },
                                {
                                        "code": "92",
                                        "name": "Dalger (France)"
                                },
                                {
                                        "code": "93",
                                        "name": "Lacombe (France)"
                                },
                                {
                                        "code": "94",
                                        "name": "Six (France)"
                                },
                                {
                                        "code": "95",
                                        "name": "Rouyer (France)"
                                },
                                {
                                        "code": "96",
                                        "name": "Baratelli (France)"
                                }
                        ]
                },
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "97",
                                        "name": "Badge (Italy)"
                                },
                                {
                                        "code": "98",
                                        "name": "Team (Italy)"
                                },
                                {
                                        "code": "99",
                                        "name": "Zoff (Italy)"
                                },
                                {
                                        "code": "100",
                                        "name": "Gentile (Italy)"
                                },
                                {
                                        "code": "101",
                                        "name": "Bellugi (Italy)"
                                },
                                {
                                        "code": "102",
                                        "name": "Facchetti (Italy)"
                                },
                                {
                                        "code": "103",
                                        "name": "Scirea (Italy)"
                                },
                                {
                                        "code": "104",
                                        "name": "Maldera (Italy)"
                                },
                                {
                                        "code": "105",
                                        "name": "Tardelli (Italy)"
                                },
                                {
                                        "code": "106",
                                        "name": "Benetti (Italy)"
                                },
                                {
                                        "code": "107",
                                        "name": "Zaccarelli (Italy)"
                                },
                                {
                                        "code": "108",
                                        "name": "Antognoni (Italy)"
                                },
                                {
                                        "code": "109",
                                        "name": "Causio (Italy)"
                                },
                                {
                                        "code": "110",
                                        "name": "Sala (Italy)"
                                },
                                {
                                        "code": "111",
                                        "name": "Graziani (Italy)"
                                },
                                {
                                        "code": "112",
                                        "name": "Rossi (Italy)"
                                },
                                {
                                        "code": "113",
                                        "name": "Bettega (Italy)"
                                },
                                {
                                        "code": "114",
                                        "name": "Conti (Italy)"
                                }
                        ]
                }
        ],
        "Group 2": [
                {
                        "code": "POL",
                        "name": "Poland",
                        "flags": [
                                "pl"
                        ],
                        "stickers": [
                                {
                                        "code": "115",
                                        "name": "Badge (Poland)"
                                },
                                {
                                        "code": "116",
                                        "name": "Team (Poland)"
                                },
                                {
                                        "code": "117",
                                        "name": "Tomaszewski (Poland)"
                                },
                                {
                                        "code": "118",
                                        "name": "Szymanowski (Poland)"
                                },
                                {
                                        "code": "119",
                                        "name": "Maculewicz (Poland)"
                                },
                                {
                                        "code": "120",
                                        "name": "Zmuda (Poland)"
                                },
                                {
                                        "code": "121",
                                        "name": "Gorgon (Poland)"
                                },
                                {
                                        "code": "122",
                                        "name": "Rudy (Poland)"
                                },
                                {
                                        "code": "123",
                                        "name": "Kasperczak (Poland)"
                                },
                                {
                                        "code": "124",
                                        "name": "Masztaler (Poland)"
                                },
                                {
                                        "code": "125",
                                        "name": "Deyna (Poland)"
                                },
                                {
                                        "code": "126",
                                        "name": "Boniek (Poland)"
                                },
                                {
                                        "code": "127",
                                        "name": "Nawalka (Poland)"
                                },
                                {
                                        "code": "128",
                                        "name": "Lato (Poland)"
                                },
                                {
                                        "code": "129",
                                        "name": "Szarmach (Poland)"
                                },
                                {
                                        "code": "130",
                                        "name": "Lubanski (Poland)"
                                },
                                {
                                        "code": "131",
                                        "name": "Terlecki (Poland)"
                                },
                                {
                                        "code": "132",
                                        "name": "Kukla (Poland)"
                                }
                        ]
                },
                {
                        "code": "FRG",
                        "name": "West Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "133",
                                        "name": "Badge (West Germany)"
                                },
                                {
                                        "code": "134",
                                        "name": "Team (West Germany)"
                                },
                                {
                                        "code": "135",
                                        "name": "Maier (West Germany)"
                                },
                                {
                                        "code": "136",
                                        "name": "Vogts (West Germany)"
                                },
                                {
                                        "code": "137",
                                        "name": "Russmann (West Germany)"
                                },
                                {
                                        "code": "138",
                                        "name": "Schwarzenbeck (West Germany)"
                                },
                                {
                                        "code": "139",
                                        "name": "Kaltz (West Germany)"
                                },
                                {
                                        "code": "140",
                                        "name": "Dietz (West Germany)"
                                },
                                {
                                        "code": "141",
                                        "name": "Zimmermann (West Germany)"
                                },
                                {
                                        "code": "142",
                                        "name": "Bonhof (West Germany)"
                                },
                                {
                                        "code": "143",
                                        "name": "Beer (West Germany)"
                                },
                                {
                                        "code": "144",
                                        "name": "Flohe (West Germany)"
                                },
                                {
                                        "code": "145",
                                        "name": "Burgsmuller (West Germany)"
                                },
                                {
                                        "code": "146",
                                        "name": "Holzenbein (West Germany)"
                                },
                                {
                                        "code": "147",
                                        "name": "Abramczik (West Germany)"
                                },
                                {
                                        "code": "148",
                                        "name": "Fischer (West Germany)"
                                },
                                {
                                        "code": "149",
                                        "name": "Rummenige (West Germany)"
                                },
                                {
                                        "code": "150",
                                        "name": "Franker (West Germany)"
                                }
                        ]
                },
                {
                        "code": "TUN",
                        "name": "Tunisia",
                        "flags": [
                                "tn"
                        ],
                        "stickers": [
                                {
                                        "code": "151",
                                        "name": "Badge (Tunisia)"
                                },
                                {
                                        "code": "152",
                                        "name": "Team (Tunisia)"
                                },
                                {
                                        "code": "153",
                                        "name": "Attouga (Tunisia)"
                                },
                                {
                                        "code": "154",
                                        "name": "Dhouieb (Tunisia)"
                                },
                                {
                                        "code": "155",
                                        "name": "Gasmi (Tunisia)"
                                },
                                {
                                        "code": "156",
                                        "name": "Kamel (Tunisia)"
                                },
                                {
                                        "code": "157",
                                        "name": "Jebali (Tunisia)"
                                },
                                {
                                        "code": "158",
                                        "name": "Kaabi (Tunisia)"
                                },
                                {
                                        "code": "159",
                                        "name": "Ghommidh (Tunisia)"
                                },
                                {
                                        "code": "160",
                                        "name": "Labidi (Tunisia)"
                                },
                                {
                                        "code": "161",
                                        "name": "Agrebi (Tunisia)"
                                },
                                {
                                        "code": "162",
                                        "name": "Tarak (Tunisia)"
                                },
                                {
                                        "code": "163",
                                        "name": "Temime (Tunisia)"
                                },
                                {
                                        "code": "164",
                                        "name": "Akid (Tunisia)"
                                },
                                {
                                        "code": "165",
                                        "name": "Limam (Tunisia)"
                                },
                                {
                                        "code": "166",
                                        "name": "Ben Aziza, R. (Tunisia)"
                                },
                                {
                                        "code": "167",
                                        "name": "Manai (Tunisia)"
                                },
                                {
                                        "code": "168",
                                        "name": "Ben Aziza, L. (Tunisia)"
                                }
                        ]
                },
                {
                        "code": "MEX",
                        "name": "Mexico",
                        "flags": [
                                "mx"
                        ],
                        "stickers": [
                                {
                                        "code": "169",
                                        "name": "Badge (Mexico)"
                                },
                                {
                                        "code": "170",
                                        "name": "Team (Mexico)"
                                },
                                {
                                        "code": "171",
                                        "name": "Castrejon (Mexico)"
                                },
                                {
                                        "code": "172",
                                        "name": "Najera (Mexico)"
                                },
                                {
                                        "code": "173",
                                        "name": "Gomez (Mexico)"
                                },
                                {
                                        "code": "174",
                                        "name": "Ramos (Mexico)"
                                },
                                {
                                        "code": "175",
                                        "name": "Guzrman (Mexico)"
                                },
                                {
                                        "code": "176",
                                        "name": "Ayala (Mexico)"
                                },
                                {
                                        "code": "177",
                                        "name": "De La Torre (Mexico)"
                                },
                                {
                                        "code": "178",
                                        "name": "Cardenas (Mexico)"
                                },
                                {
                                        "code": "179",
                                        "name": "Chavez (Mexico)"
                                },
                                {
                                        "code": "180",
                                        "name": "Real (Mexico)"
                                },
                                {
                                        "code": "181",
                                        "name": "Jimenez (Mexico)"
                                },
                                {
                                        "code": "182",
                                        "name": "Rangel (Mexico)"
                                },
                                {
                                        "code": "183",
                                        "name": "Cuellar (Mexico)"
                                },
                                {
                                        "code": "184",
                                        "name": "Sanchez (Mexico)"
                                },
                                {
                                        "code": "185",
                                        "name": "Ortega (Mexico)"
                                },
                                {
                                        "code": "186",
                                        "name": "Reyes (Mexico)"
                                }
                        ]
                }
        ],
        "Group 3": [
                {
                        "code": "AUT",
                        "name": "Austria",
                        "flags": [
                                "at"
                        ],
                        "stickers": [
                                {
                                        "code": "187",
                                        "name": "Badge (Austria)"
                                },
                                {
                                        "code": "188",
                                        "name": "Team (Austria)"
                                },
                                {
                                        "code": "189",
                                        "name": "Koncilia (Austria)"
                                },
                                {
                                        "code": "190",
                                        "name": "Sara (Austria)"
                                },
                                {
                                        "code": "191",
                                        "name": "Pezzey (Austria)"
                                },
                                {
                                        "code": "192",
                                        "name": "Persidis (Austria)"
                                },
                                {
                                        "code": "193",
                                        "name": "Krieger (Austria)"
                                },
                                {
                                        "code": "194",
                                        "name": "Breitenberger (Austria)"
                                },
                                {
                                        "code": "195",
                                        "name": "Strasser (Austria)"
                                },
                                {
                                        "code": "196",
                                        "name": "Hickersberger (Austria)"
                                },
                                {
                                        "code": "197",
                                        "name": "Hattenberger (Austria)"
                                },
                                {
                                        "code": "198",
                                        "name": "Jara (Austria)"
                                },
                                {
                                        "code": "199",
                                        "name": "Prohaska (Austria)"
                                },
                                {
                                        "code": "200",
                                        "name": "Stering (Austria)"
                                },
                                {
                                        "code": "201",
                                        "name": "Krankl (Austria)"
                                },
                                {
                                        "code": "202",
                                        "name": "Kreuz (Austria)"
                                },
                                {
                                        "code": "203",
                                        "name": "Schachner (Austria)"
                                },
                                {
                                        "code": "204",
                                        "name": "Baumgartner (Austria)"
                                }
                        ]
                },
                {
                        "code": "ESP",
                        "name": "Spain",
                        "flags": [
                                "es"
                        ],
                        "stickers": [
                                {
                                        "code": "205",
                                        "name": "Badge (Spain)"
                                },
                                {
                                        "code": "206",
                                        "name": "Team (Spain)"
                                },
                                {
                                        "code": "207",
                                        "name": "Gonzalez (Spain)"
                                },
                                {
                                        "code": "208",
                                        "name": "Perez (Spain)"
                                },
                                {
                                        "code": "209",
                                        "name": "Migueli (Spain)"
                                },
                                {
                                        "code": "210",
                                        "name": "Pirri (Spain)"
                                },
                                {
                                        "code": "211",
                                        "name": "Olmo (Spain)"
                                },
                                {
                                        "code": "212",
                                        "name": "Camacho (Spain)"
                                },
                                {
                                        "code": "213",
                                        "name": "San Jose (Spain)"
                                },
                                {
                                        "code": "214",
                                        "name": "Leal (Spain)"
                                },
                                {
                                        "code": "215",
                                        "name": "Villar (Spain)"
                                },
                                {
                                        "code": "216",
                                        "name": "Asensi (Spain)"
                                },
                                {
                                        "code": "217",
                                        "name": "Cardenosa (Spain)"
                                },
                                {
                                        "code": "218",
                                        "name": "Churruca (Spain)"
                                },
                                {
                                        "code": "219",
                                        "name": "Juanito (Spain)"
                                },
                                {
                                        "code": "220",
                                        "name": "Dani (Spain)"
                                },
                                {
                                        "code": "221",
                                        "name": "Mareinez (Spain)"
                                },
                                {
                                        "code": "222",
                                        "name": "Arconada (Spain)"
                                }
                        ]
                },
                {
                        "code": "SWE",
                        "name": "Sweden",
                        "flags": [
                                "se"
                        ],
                        "stickers": [
                                {
                                        "code": "223",
                                        "name": "Badge (Sweden)"
                                },
                                {
                                        "code": "224",
                                        "name": "Team (Sweden)"
                                },
                                {
                                        "code": "225",
                                        "name": "Hellstrom (Sweden)"
                                },
                                {
                                        "code": "226",
                                        "name": "Borg (Sweden)"
                                },
                                {
                                        "code": "227",
                                        "name": "Andersson, B. (Sweden)"
                                },
                                {
                                        "code": "228",
                                        "name": "Karlsson (Sweden)"
                                },
                                {
                                        "code": "229",
                                        "name": "Nordqvist (Sweden)"
                                },
                                {
                                        "code": "230",
                                        "name": "Andersson, R. (Sweden)"
                                },
                                {
                                        "code": "231",
                                        "name": "Borjesson (Sweden)"
                                },
                                {
                                        "code": "232",
                                        "name": "Linderoth (Sweden)"
                                },
                                {
                                        "code": "233",
                                        "name": "Tapper (Sweden)"
                                },
                                {
                                        "code": "234",
                                        "name": "Larsson (Sweden)"
                                },
                                {
                                        "code": "235",
                                        "name": "Torstensson (Sweden)"
                                },
                                {
                                        "code": "236",
                                        "name": "Edstrom (Sweden)"
                                },
                                {
                                        "code": "237",
                                        "name": "Wendt (Sweden)"
                                },
                                {
                                        "code": "238",
                                        "name": "Sjoberg (Sweden)"
                                },
                                {
                                        "code": "239",
                                        "name": "Nordin (Sweden)"
                                },
                                {
                                        "code": "240",
                                        "name": "Hagberg (Sweden)"
                                }
                        ]
                },
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "241",
                                        "name": "Badge (Brazil)"
                                },
                                {
                                        "code": "242",
                                        "name": "Team (Brazil)"
                                },
                                {
                                        "code": "243",
                                        "name": "Leao (Brazil)"
                                },
                                {
                                        "code": "244",
                                        "name": "Ze Maria (Brazil)"
                                },
                                {
                                        "code": "245",
                                        "name": "Nelinho (Brazil)"
                                },
                                {
                                        "code": "246",
                                        "name": "Luis Pereira (Brazil)"
                                },
                                {
                                        "code": "247",
                                        "name": "Amaral (Brazil)"
                                },
                                {
                                        "code": "248",
                                        "name": "Edinho (Brazil)"
                                },
                                {
                                        "code": "249",
                                        "name": "Neto (Brazil)"
                                },
                                {
                                        "code": "250",
                                        "name": "Cerezo (Brazil)"
                                },
                                {
                                        "code": "251",
                                        "name": "Rivelino (Brazil)"
                                },
                                {
                                        "code": "252",
                                        "name": "Dirceu (Brazil)"
                                },
                                {
                                        "code": "253",
                                        "name": "Gil (Brazil)"
                                },
                                {
                                        "code": "254",
                                        "name": "Zico (Brazil)"
                                },
                                {
                                        "code": "255",
                                        "name": "Roberto (Brazil)"
                                },
                                {
                                        "code": "256",
                                        "name": "Reinaldo (Brazil)"
                                },
                                {
                                        "code": "257",
                                        "name": "Paulo Cesar (Brazil)"
                                },
                                {
                                        "code": "258",
                                        "name": "Raul (Brazil)"
                                }
                        ]
                }
        ],
        "Group 4": [
                {
                        "code": "NED",
                        "name": "Netherlands",
                        "flags": [
                                "nl"
                        ],
                        "stickers": [
                                {
                                        "code": "259",
                                        "name": "Badge (Holland)"
                                },
                                {
                                        "code": "260",
                                        "name": "Team (Holland)"
                                },
                                {
                                        "code": "261",
                                        "name": "Schrijvers (Holland)"
                                },
                                {
                                        "code": "262",
                                        "name": "Suurbier (Holland)"
                                },
                                {
                                        "code": "263",
                                        "name": "Rijsbergen (Holland)"
                                },
                                {
                                        "code": "264",
                                        "name": "Dusbaba (Holland)"
                                },
                                {
                                        "code": "265",
                                        "name": "Krol (Holland)"
                                },
                                {
                                        "code": "266",
                                        "name": "Hovenkamp (Holland)"
                                },
                                {
                                        "code": "267",
                                        "name": "Jansen (Holland)"
                                },
                                {
                                        "code": "268",
                                        "name": "Neeskens (Holland)"
                                },
                                {
                                        "code": "269",
                                        "name": "van Hanegem (Holland)"
                                },
                                {
                                        "code": "270",
                                        "name": "van de Kerkhof, W. (Holland)"
                                },
                                {
                                        "code": "271",
                                        "name": "Peeers (Holland)"
                                },
                                {
                                        "code": "272",
                                        "name": "Rep (Holland)"
                                },
                                {
                                        "code": "273",
                                        "name": "Kist (Holland)"
                                },
                                {
                                        "code": "274",
                                        "name": "Rensenbrink (Holland)"
                                },
                                {
                                        "code": "275",
                                        "name": "van de Kerkhof, R. (Holland)"
                                },
                                {
                                        "code": "276",
                                        "name": "Jongbloed (Holland)"
                                }
                        ]
                },
                {
                        "code": "IRN",
                        "name": "Iran",
                        "flags": [
                                "ir"
                        ],
                        "stickers": [
                                {
                                        "code": "277",
                                        "name": "Badge (Iran)"
                                },
                                {
                                        "code": "278",
                                        "name": "Team (Iran)"
                                },
                                {
                                        "code": "279",
                                        "name": "Rashidi (Iran)"
                                },
                                {
                                        "code": "280",
                                        "name": "Nazari (Iran)"
                                },
                                {
                                        "code": "281",
                                        "name": "Abdollahi (Iran)"
                                },
                                {
                                        "code": "282",
                                        "name": "Kazerani (Iran)"
                                },
                                {
                                        "code": "283",
                                        "name": "Eskandarian (Iran)"
                                },
                                {
                                        "code": "284",
                                        "name": "Nayebagha (Iran)"
                                },
                                {
                                        "code": "285",
                                        "name": "Ghassempour (Iran)"
                                },
                                {
                                        "code": "286",
                                        "name": "Panvin (Iran)"
                                },
                                {
                                        "code": "287",
                                        "name": "Sadeghi (Iran)"
                                },
                                {
                                        "code": "288",
                                        "name": "Danaefar (Iran)"
                                },
                                {
                                        "code": "289",
                                        "name": "Rowshan (Iran)"
                                },
                                {
                                        "code": "290",
                                        "name": "Khorshidi (Iran)"
                                },
                                {
                                        "code": "291",
                                        "name": "Djahani (Iran)"
                                },
                                {
                                        "code": "292",
                                        "name": "Adelkani (Iran)"
                                },
                                {
                                        "code": "293",
                                        "name": "Mazloumi (Iran)"
                                },
                                {
                                        "code": "294",
                                        "name": "Mavedat (Iran)"
                                }
                        ]
                },
                {
                        "code": "PER",
                        "name": "Peru",
                        "flags": [
                                "pe"
                        ],
                        "stickers": [
                                {
                                        "code": "295",
                                        "name": "Badge (Peru)"
                                },
                                {
                                        "code": "296",
                                        "name": "Team (Peru)"
                                },
                                {
                                        "code": "297",
                                        "name": "Quirega (Peru)"
                                },
                                {
                                        "code": "298",
                                        "name": "Navarro (Peru)"
                                },
                                {
                                        "code": "299",
                                        "name": "Chumpitaz (Peru)"
                                },
                                {
                                        "code": "300",
                                        "name": "Melendez (Peru)"
                                },
                                {
                                        "code": "301",
                                        "name": "Diaz (Peru)"
                                },
                                {
                                        "code": "302",
                                        "name": "Soria (Peru)"
                                },
                                {
                                        "code": "303",
                                        "name": "Queseda (Peru)"
                                },
                                {
                                        "code": "304",
                                        "name": "Velasquez (Peru)"
                                },
                                {
                                        "code": "305",
                                        "name": "Cubillas (Peru)"
                                },
                                {
                                        "code": "306",
                                        "name": "Aparicio (Peru)"
                                },
                                {
                                        "code": "307",
                                        "name": "Rojas (Peru)"
                                },
                                {
                                        "code": "308",
                                        "name": "Munante (Peru)"
                                },
                                {
                                        "code": "309",
                                        "name": "Sotil (Peru)"
                                },
                                {
                                        "code": "310",
                                        "name": "Oblitas (Peru)"
                                },
                                {
                                        "code": "311",
                                        "name": "Luces (Peru)"
                                },
                                {
                                        "code": "312",
                                        "name": "Ballesteros (Peru)"
                                }
                        ]
                },
                {
                        "code": "SCO",
                        "name": "Scotland",
                        "flags": [
                                "gb-sct"
                        ],
                        "stickers": [
                                {
                                        "code": "313",
                                        "name": "Badge (Scotland)"
                                },
                                {
                                        "code": "314",
                                        "name": "Team (Scotland)"
                                },
                                {
                                        "code": "315",
                                        "name": "Alan Rough (Scotland)"
                                },
                                {
                                        "code": "316",
                                        "name": "Mal Donachie (Scotland)"
                                },
                                {
                                        "code": "317",
                                        "name": "Gordon McQueen (Scotland)"
                                },
                                {
                                        "code": "318",
                                        "name": "Martin Buchan (Scotland)"
                                },
                                {
                                        "code": "319",
                                        "name": "Tom Forsyth (Scotland)"
                                },
                                {
                                        "code": "320",
                                        "name": "Danny McGrain (Scotland)"
                                },
                                {
                                        "code": "321",
                                        "name": "Bruce Rioch (Scotland)"
                                },
                                {
                                        "code": "322",
                                        "name": "Don Masson (Scotland)"
                                },
                                {
                                        "code": "323",
                                        "name": "Archie Gemmill (Scotland)"
                                },
                                {
                                        "code": "324",
                                        "name": "Asa Hartford (Scotland)"
                                },
                                {
                                        "code": "325",
                                        "name": "Lou Macari (Scotland)"
                                },
                                {
                                        "code": "326",
                                        "name": "Kenny Dalglish (Scotland)"
                                },
                                {
                                        "code": "327",
                                        "name": "Andy Gray (Scotland)"
                                },
                                {
                                        "code": "328",
                                        "name": "Joe Jordan (Scotland)"
                                },
                                {
                                        "code": "329",
                                        "name": "Willie Johnston (Scotland)"
                                },
                                {
                                        "code": "330",
                                        "name": "David Stewart (Scotland)"
                                }
                        ]
                }
        ],
        "Featured Nations": [
                {
                        "code": "BEL",
                        "name": "Belgium",
                        "flags": [
                                "be"
                        ],
                        "stickers": [
                                {
                                        "code": "331",
                                        "name": "Badge (Belgium)"
                                },
                                {
                                        "code": "332",
                                        "name": "Piot (Belgium)"
                                },
                                {
                                        "code": "333",
                                        "name": "Coeck (Belgium)"
                                },
                                {
                                        "code": "334",
                                        "name": "Cools (Belgium)"
                                },
                                {
                                        "code": "335",
                                        "name": "Van Der Elst (Belgium)"
                                }
                        ]
                },
                {
                        "code": "BUL",
                        "name": "Bulgaria",
                        "flags": [
                                "bg"
                        ],
                        "stickers": [
                                {
                                        "code": "336",
                                        "name": "Badge (Bulgaria)"
                                },
                                {
                                        "code": "337",
                                        "name": "Ivkov (Bulgaria)"
                                },
                                {
                                        "code": "338",
                                        "name": "Vassiliev (Bulgaria)"
                                },
                                {
                                        "code": "339",
                                        "name": "Bonev (Bulgaria)"
                                },
                                {
                                        "code": "340",
                                        "name": "Panov (Bulgaria)"
                                }
                        ]
                },
                {
                        "code": "TCH",
                        "name": "Czechoslovakia",
                        "flags": [
                                "cz"
                        ],
                        "stickers": [
                                {
                                        "code": "341",
                                        "name": "Badge (Czechoslovakia)"
                                },
                                {
                                        "code": "342",
                                        "name": "Ondrus (Czechoslovakia)"
                                },
                                {
                                        "code": "343",
                                        "name": "Gogh (Czechoslovakia)"
                                },
                                {
                                        "code": "344",
                                        "name": "Dobias (Czechoslovakia)"
                                },
                                {
                                        "code": "345",
                                        "name": "Nehoda (Czechoslovakia)"
                                }
                        ]
                },
                {
                        "code": "DEN",
                        "name": "Denmark",
                        "flags": [
                                "dk"
                        ],
                        "stickers": [
                                {
                                        "code": "346",
                                        "name": "Badge (Denmark)"
                                },
                                {
                                        "code": "347",
                                        "name": "Roentved (Denmark)"
                                },
                                {
                                        "code": "348",
                                        "name": "Simonsen (Denmark)"
                                },
                                {
                                        "code": "349",
                                        "name": "Jensen (Denmark)"
                                },
                                {
                                        "code": "350",
                                        "name": "Kristensen (Denmark)"
                                }
                        ]
                },
                {
                        "code": "GDR",
                        "name": "East Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "351",
                                        "name": "Badge (East Germany)"
                                },
                                {
                                        "code": "352",
                                        "name": "Croy (East Germany)"
                                },
                                {
                                        "code": "353",
                                        "name": "Hafner (East Germany)"
                                },
                                {
                                        "code": "354",
                                        "name": "Streich (East Germany)"
                                },
                                {
                                        "code": "355",
                                        "name": "Hoffmann (East Germany)"
                                }
                        ]
                },
                {
                        "code": "ENG",
                        "name": "England",
                        "flags": [
                                "gb-eng"
                        ],
                        "stickers": [
                                {
                                        "code": "356",
                                        "name": "Badge (England)"
                                },
                                {
                                        "code": "357",
                                        "name": "Ray Clemence (England)"
                                },
                                {
                                        "code": "358",
                                        "name": "Emlyn Hughes (England)"
                                },
                                {
                                        "code": "359",
                                        "name": "Trevor Brooking (England)"
                                },
                                {
                                        "code": "360",
                                        "name": "Kevin Keegan (England)"
                                }
                        ]
                },
                {
                        "code": "SUI",
                        "name": "Switzerland",
                        "flags": [
                                "ch"
                        ],
                        "stickers": [
                                {
                                        "code": "361",
                                        "name": "Badge (Switzerland)"
                                },
                                {
                                        "code": "362",
                                        "name": "Chapuisat (Switzerland)"
                                },
                                {
                                        "code": "363",
                                        "name": "Barberis (Switzerland)"
                                },
                                {
                                        "code": "364",
                                        "name": "Botteron (Switzerland)"
                                },
                                {
                                        "code": "365",
                                        "name": "Elsener (Switzerland)"
                                }
                        ]
                },
                {
                        "code": "YUG",
                        "name": "Yugoslavia",
                        "flags": [
                                "rs"
                        ],
                        "stickers": [
                                {
                                        "code": "366",
                                        "name": "Badge (Yugoslavia)"
                                },
                                {
                                        "code": "367",
                                        "name": "Muzinic (Yugoslavia)"
                                },
                                {
                                        "code": "368",
                                        "name": "Surjak (Yugoslavia)"
                                },
                                {
                                        "code": "369",
                                        "name": "Popivoda (Yugoslavia)"
                                },
                                {
                                        "code": "370",
                                        "name": "Filipovic (Yugoslavia)"
                                }
                        ]
                },
                {
                        "code": "NOR",
                        "name": "Norway",
                        "flags": [
                                "no"
                        ],
                        "stickers": [
                                {
                                        "code": "371",
                                        "name": "Badge (Norway)"
                                },
                                {
                                        "code": "372",
                                        "name": "Grondalen (Norway)"
                                },
                                {
                                        "code": "373",
                                        "name": "Birkelund (Norway)"
                                },
                                {
                                        "code": "374",
                                        "name": "Lund (Norway)"
                                },
                                {
                                        "code": "375",
                                        "name": "Iversen (Norway)"
                                }
                        ]
                },
                {
                        "code": "POR",
                        "name": "Portugal",
                        "flags": [
                                "pt"
                        ],
                        "stickers": [
                                {
                                        "code": "376",
                                        "name": "Badge (Portugal)"
                                },
                                {
                                        "code": "377",
                                        "name": "Alves (Portugal)"
                                },
                                {
                                        "code": "378",
                                        "name": "Octavio (Portugal)"
                                },
                                {
                                        "code": "379",
                                        "name": "Toni (Portugal)"
                                },
                                {
                                        "code": "380",
                                        "name": "Fernandes (Portugal)"
                                }
                        ]
                },
                {
                        "code": "ROU",
                        "name": "Romania",
                        "flags": [
                                "ro"
                        ],
                        "stickers": [
                                {
                                        "code": "381",
                                        "name": "Badge (Rumania)"
                                },
                                {
                                        "code": "382",
                                        "name": "Satmareanu (Rumania)"
                                },
                                {
                                        "code": "383",
                                        "name": "Iordanescu (Rumania)"
                                },
                                {
                                        "code": "384",
                                        "name": "Boloni (Rumania)"
                                },
                                {
                                        "code": "385",
                                        "name": "Georgescu (Rumania)"
                                }
                        ]
                },
                {
                        "code": "URS",
                        "name": "Soviet Union",
                        "flags": [
                                "su"
                        ],
                        "stickers": [
                                {
                                        "code": "386",
                                        "name": "Badge (U.S.S.R.)"
                                },
                                {
                                        "code": "387",
                                        "name": "Konkov (U.S.S.R.)"
                                },
                                {
                                        "code": "388",
                                        "name": "Burjak (U.S.S.R.)"
                                },
                                {
                                        "code": "389",
                                        "name": "Kipiani (U.S.S.R.)"
                                },
                                {
                                        "code": "390",
                                        "name": "Blochin (U.S.S.R.)"
                                }
                        ]
                },
                {
                        "code": "URU",
                        "name": "Uruguay",
                        "flags": [
                                "uy"
                        ],
                        "stickers": [
                                {
                                        "code": "391",
                                        "name": "Badge (Uruguay)"
                                },
                                {
                                        "code": "392",
                                        "name": "Moller (Uruguay)"
                                },
                                {
                                        "code": "393",
                                        "name": "Pereyra (Uruguay)"
                                },
                                {
                                        "code": "394",
                                        "name": "Santelli (Uruguay)"
                                },
                                {
                                        "code": "395",
                                        "name": "Morena (Uruguay)"
                                }
                        ]
                },
                {
                        "code": "WAL",
                        "name": "Wales",
                        "flags": [
                                "gb-wls"
                        ],
                        "stickers": [
                                {
                                        "code": "396",
                                        "name": "Badge (Wales)"
                                },
                                {
                                        "code": "397",
                                        "name": "Joey Jones (Wales)"
                                },
                                {
                                        "code": "398",
                                        "name": "Terry Yorath (Wales)"
                                },
                                {
                                        "code": "399",
                                        "name": "Leighton James (Wales)"
                                },
                                {
                                        "code": "400",
                                        "name": "John Toshack (Wales)"
                                }
                        ]
                }
        ]
}
};

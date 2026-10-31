// data/tournaments/wc2010.js
// Official Panini South Africa 2010 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc2010'] = {
    id: 'wc2010',
    categoryId: 'fifa-world-cup',
    year: 2010,
    title: 'South Africa 2010',
    subtitle: 'South Africa • 32 Teams • 640 Stickers',
    dbKey: 'panini2010',
    isSequential: true,
    totalStickers: 640,
    status: 'active',
    phase: 'Phase 3 (2010–2022)',
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
                        "name": "Trophy, Mascot, 10 Stadiums & Posters",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "2",
                                        "name": "Official 2010 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Zakumi (Official Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Jabulani (Official Match Ball)"
                                },
                                {
                                        "code": "5",
                                        "name": "Soccer City Stadium (Johannesburg)"
                                },
                                {
                                        "code": "6",
                                        "name": "Moses Mabhida Stadium (Durban)"
                                },
                                {
                                        "code": "7",
                                        "name": "Cape Town Stadium"
                                },
                                {
                                        "code": "8",
                                        "name": "Ellis Park Stadium (Johannesburg)"
                                },
                                {
                                        "code": "9",
                                        "name": "Loftus Versfeld Stadium (Pretoria)"
                                },
                                {
                                        "code": "10",
                                        "name": "Nelson Mandela Bay Stadium (Port Elizabeth)"
                                },
                                {
                                        "code": "11",
                                        "name": "Peter Mokaba Stadium (Polokwane)"
                                },
                                {
                                        "code": "12",
                                        "name": "Mbombela Stadium (Nelspruit)"
                                },
                                {
                                        "code": "13",
                                        "name": "Free State Stadium (Bloemfontein)"
                                },
                                {
                                        "code": "14",
                                        "name": "Royal Bafokeng Stadium (Rustenburg)"
                                },
                                {
                                        "code": "15",
                                        "name": "Host City Poster: Johannesburg"
                                },
                                {
                                        "code": "16",
                                        "name": "Host City Poster: Cape Town"
                                },
                                {
                                        "code": "17",
                                        "name": "Host City Poster: Durban"
                                },
                                {
                                        "code": "18",
                                        "name": "Host City Poster: Pretoria"
                                },
                                {
                                        "code": "19",
                                        "name": "Host City Poster: Port Elizabeth"
                                },
                                {
                                        "code": "20",
                                        "name": "Host City Poster: Polokwane"
                                },
                                {
                                        "code": "21",
                                        "name": "Host City Poster: Nelspruit"
                                },
                                {
                                        "code": "22",
                                        "name": "Host City Poster: Bloemfontein"
                                },
                                {
                                        "code": "23",
                                        "name": "Host City Poster: Rustenburg"
                                },
                                {
                                        "code": "24",
                                        "name": "FIFA Fair Play Emblem"
                                },
                                {
                                        "code": "25",
                                        "name": "Roll of Honour: Uruguay 1930 & 1950"
                                },
                                {
                                        "code": "26",
                                        "name": "Roll of Honour: Italy 1934, 1938, 1982, 2006"
                                },
                                {
                                        "code": "27",
                                        "name": "Roll of Honour: Germany 1954, 1974, 1990"
                                },
                                {
                                        "code": "28",
                                        "name": "Roll of Honour: Brazil 1958, 1962, 1970, 1994, 2002"
                                },
                                {
                                        "code": "29",
                                        "name": "Roll of Honour: England 1966"
                                },
                                {
                                        "code": "30",
                                        "name": "Roll of Honour: Argentina 1978 & 1986"
                                },
                                {
                                        "code": "31",
                                        "name": "Roll of Honour: France 1998"
                                },
                                {
                                        "code": "32",
                                        "name": "Panini 2010 Summary & Checklist"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "RSA",
                        "name": "South Africa",
                        "flags": [
                                "za"
                        ],
                        "stickers": [
                                {
                                        "code": "33",
                                        "name": "South Africa Badge"
                                },
                                {
                                        "code": "34",
                                        "name": "South Africa Team Photo"
                                },
                                {
                                        "code": "35",
                                        "name": "Itumeleng Khune (South Africa)"
                                },
                                {
                                        "code": "36",
                                        "name": "Siboniso Gaxa (South Africa)"
                                },
                                {
                                        "code": "37",
                                        "name": "Aaron Mokoena (South Africa)"
                                },
                                {
                                        "code": "38",
                                        "name": "Bongani Khumalo (South Africa)"
                                },
                                {
                                        "code": "39",
                                        "name": "Tsepo Masilela (South Africa)"
                                },
                                {
                                        "code": "40",
                                        "name": "Kagisho Dikgacoi (South Africa)"
                                },
                                {
                                        "code": "41",
                                        "name": "Steven Pienaar (South Africa)"
                                },
                                {
                                        "code": "42",
                                        "name": "Siphiwe Tshabalala (South Africa)"
                                },
                                {
                                        "code": "43",
                                        "name": "Reneilwe Letsholonyane (South Africa)"
                                },
                                {
                                        "code": "44",
                                        "name": "Teko Modise (South Africa)"
                                },
                                {
                                        "code": "45",
                                        "name": "Katlego Mphela (South Africa)"
                                },
                                {
                                        "code": "46",
                                        "name": "Bernard Parker (South Africa)"
                                },
                                {
                                        "code": "47",
                                        "name": "Surprise Moriri (South Africa)"
                                },
                                {
                                        "code": "48",
                                        "name": "MacBeth Sibaya (South Africa)"
                                },
                                {
                                        "code": "49",
                                        "name": "Anele Ngcongca (South Africa)"
                                },
                                {
                                        "code": "50",
                                        "name": "Lucas Thwala (South Africa)"
                                },
                                {
                                        "code": "51",
                                        "name": "Moeneeb Josephs (South Africa)"
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
                                        "code": "52",
                                        "name": "Mexico Badge"
                                },
                                {
                                        "code": "53",
                                        "name": "Mexico Team Photo"
                                },
                                {
                                        "code": "54",
                                        "name": "Guillermo Ochoa (Mexico)"
                                },
                                {
                                        "code": "55",
                                        "name": "Carlos Salcido (Mexico)"
                                },
                                {
                                        "code": "56",
                                        "name": "Rafael Marquez (Mexico)"
                                },
                                {
                                        "code": "57",
                                        "name": "Francisco Rodriguez (Mexico)"
                                },
                                {
                                        "code": "58",
                                        "name": "Hector Moreno (Mexico)"
                                },
                                {
                                        "code": "59",
                                        "name": "Paul Aguilar (Mexico)"
                                },
                                {
                                        "code": "60",
                                        "name": "Gerardo Torrado (Mexico)"
                                },
                                {
                                        "code": "61",
                                        "name": "Efrain Juarez (Mexico)"
                                },
                                {
                                        "code": "62",
                                        "name": "Andres Guardado (Mexico)"
                                },
                                {
                                        "code": "63",
                                        "name": "Giovani dos Santos (Mexico)"
                                },
                                {
                                        "code": "64",
                                        "name": "Carlos Vela (Mexico)"
                                },
                                {
                                        "code": "65",
                                        "name": "Guillermo Franco (Mexico)"
                                },
                                {
                                        "code": "66",
                                        "name": "Javier Hernandez (Mexico)"
                                },
                                {
                                        "code": "67",
                                        "name": "Cuauhtemoc Blanco (Mexico)"
                                },
                                {
                                        "code": "68",
                                        "name": "Pablo Barrera (Mexico)"
                                },
                                {
                                        "code": "69",
                                        "name": "Israel Castro (Mexico)"
                                },
                                {
                                        "code": "70",
                                        "name": "Oscar Perez (Mexico)"
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
                                        "code": "71",
                                        "name": "Uruguay Badge"
                                },
                                {
                                        "code": "72",
                                        "name": "Uruguay Team Photo"
                                },
                                {
                                        "code": "73",
                                        "name": "Fernando Muslera (Uruguay)"
                                },
                                {
                                        "code": "74",
                                        "name": "Maxi Pereira (Uruguay)"
                                },
                                {
                                        "code": "75",
                                        "name": "Diego Lugano (Uruguay)"
                                },
                                {
                                        "code": "76",
                                        "name": "Diego Godin (Uruguay)"
                                },
                                {
                                        "code": "77",
                                        "name": "Martin Caceres (Uruguay)"
                                },
                                {
                                        "code": "78",
                                        "name": "Jorge Fucile (Uruguay)"
                                },
                                {
                                        "code": "79",
                                        "name": "Egidio Arevalo Rios (Uruguay)"
                                },
                                {
                                        "code": "80",
                                        "name": "Diego Perez (Uruguay)"
                                },
                                {
                                        "code": "81",
                                        "name": "Walter Gargano (Uruguay)"
                                },
                                {
                                        "code": "82",
                                        "name": "Alvaro Pereira (Uruguay)"
                                },
                                {
                                        "code": "83",
                                        "name": "Diego Forlan (Uruguay)"
                                },
                                {
                                        "code": "84",
                                        "name": "Luis Suarez (Uruguay)"
                                },
                                {
                                        "code": "85",
                                        "name": "Edinson Cavani (Uruguay)"
                                },
                                {
                                        "code": "86",
                                        "name": "Sebastian Abreu (Uruguay)"
                                },
                                {
                                        "code": "87",
                                        "name": "Nicolas Lodeiro (Uruguay)"
                                },
                                {
                                        "code": "88",
                                        "name": "Sebastian Fernandez (Uruguay)"
                                },
                                {
                                        "code": "89",
                                        "name": "Juan Castillo (Uruguay)"
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
                                        "code": "90",
                                        "name": "France Badge"
                                },
                                {
                                        "code": "91",
                                        "name": "France Team Photo"
                                },
                                {
                                        "code": "92",
                                        "name": "Hugo Lloris (France)"
                                },
                                {
                                        "code": "93",
                                        "name": "Bacary Sagna (France)"
                                },
                                {
                                        "code": "94",
                                        "name": "William Gallas (France)"
                                },
                                {
                                        "code": "95",
                                        "name": "Eric Abidal (France)"
                                },
                                {
                                        "code": "96",
                                        "name": "Patrice Evra (France)"
                                },
                                {
                                        "code": "97",
                                        "name": "Jeremy Toulalan (France)"
                                },
                                {
                                        "code": "98",
                                        "name": "Yoann Gourcuff (France)"
                                },
                                {
                                        "code": "99",
                                        "name": "Abou Diaby (France)"
                                },
                                {
                                        "code": "100",
                                        "name": "Florent Malouda (France)"
                                },
                                {
                                        "code": "101",
                                        "name": "Franck Ribery (France)"
                                },
                                {
                                        "code": "102",
                                        "name": "Nicolas Anelka (France)"
                                },
                                {
                                        "code": "103",
                                        "name": "Thierry Henry (France)"
                                },
                                {
                                        "code": "104",
                                        "name": "Sidney Govou (France)"
                                },
                                {
                                        "code": "105",
                                        "name": "Djibril Cisse (France)"
                                },
                                {
                                        "code": "106",
                                        "name": "Andre-Pierre Gignac (France)"
                                },
                                {
                                        "code": "107",
                                        "name": "Marc Planus (France)"
                                },
                                {
                                        "code": "108",
                                        "name": "Steve Mandanda (France)"
                                }
                        ]
                }
        ],
        "Group B": [
                {
                        "code": "ARG",
                        "name": "Argentina",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "109",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "110",
                                        "name": "Argentina Team Photo"
                                },
                                {
                                        "code": "111",
                                        "name": "Sergio Romero (Argentina)"
                                },
                                {
                                        "code": "112",
                                        "name": "Jonas Gutierrez (Argentina)"
                                },
                                {
                                        "code": "113",
                                        "name": "Martin Demichelis (Argentina)"
                                },
                                {
                                        "code": "114",
                                        "name": "Walter Samuel (Argentina)"
                                },
                                {
                                        "code": "115",
                                        "name": "Gabriel Heinze (Argentina)"
                                },
                                {
                                        "code": "116",
                                        "name": "Nicolas Burdisso (Argentina)"
                                },
                                {
                                        "code": "117",
                                        "name": "Javier Mascherano (Argentina)"
                                },
                                {
                                        "code": "118",
                                        "name": "Juan Sebastian Veron (Argentina)"
                                },
                                {
                                        "code": "119",
                                        "name": "Angel Di Maria (Argentina)"
                                },
                                {
                                        "code": "120",
                                        "name": "Lionel Messi (Argentina)"
                                },
                                {
                                        "code": "121",
                                        "name": "Gonzalo Higuain (Argentina)"
                                },
                                {
                                        "code": "122",
                                        "name": "Carlos Tevez (Argentina)"
                                },
                                {
                                        "code": "123",
                                        "name": "Sergio Aguero (Argentina)"
                                },
                                {
                                        "code": "124",
                                        "name": "Diego Milito (Argentina)"
                                },
                                {
                                        "code": "125",
                                        "name": "Maxi Rodriguez (Argentina)"
                                },
                                {
                                        "code": "126",
                                        "name": "Javier Pastore (Argentina)"
                                },
                                {
                                        "code": "127",
                                        "name": "Mariano Andujar (Argentina)"
                                }
                        ]
                },
                {
                        "code": "NGA",
                        "name": "Nigeria",
                        "flags": [
                                "ng"
                        ],
                        "stickers": [
                                {
                                        "code": "128",
                                        "name": "Nigeria Badge"
                                },
                                {
                                        "code": "129",
                                        "name": "Nigeria Team Photo"
                                },
                                {
                                        "code": "130",
                                        "name": "Vincent Enyeama (Nigeria)"
                                },
                                {
                                        "code": "131",
                                        "name": "Chidi Odiah (Nigeria)"
                                },
                                {
                                        "code": "132",
                                        "name": "Joseph Yobo (Nigeria)"
                                },
                                {
                                        "code": "133",
                                        "name": "Danny Shittu (Nigeria)"
                                },
                                {
                                        "code": "134",
                                        "name": "Taye Taiwo (Nigeria)"
                                },
                                {
                                        "code": "135",
                                        "name": "Elderson Echiejile (Nigeria)"
                                },
                                {
                                        "code": "136",
                                        "name": "Dickson Etuhu (Nigeria)"
                                },
                                {
                                        "code": "137",
                                        "name": "Lukman Haruna (Nigeria)"
                                },
                                {
                                        "code": "138",
                                        "name": "Sani Kaita (Nigeria)"
                                },
                                {
                                        "code": "139",
                                        "name": "John Obi Mikel (Nigeria)"
                                },
                                {
                                        "code": "140",
                                        "name": "Peter Odemwingie (Nigeria)"
                                },
                                {
                                        "code": "141",
                                        "name": "Yakubu Aiyegbeni (Nigeria)"
                                },
                                {
                                        "code": "142",
                                        "name": "Obafemi Martins (Nigeria)"
                                },
                                {
                                        "code": "143",
                                        "name": "Victor Obinna (Nigeria)"
                                },
                                {
                                        "code": "144",
                                        "name": "Chinedu Obasi (Nigeria)"
                                },
                                {
                                        "code": "145",
                                        "name": "Nwankwo Kanu (Nigeria)"
                                },
                                {
                                        "code": "146",
                                        "name": "Austin Ejide (Nigeria)"
                                }
                        ]
                },
                {
                        "code": "KOR",
                        "name": "South Korea",
                        "flags": [
                                "kr"
                        ],
                        "stickers": [
                                {
                                        "code": "147",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "148",
                                        "name": "South Korea Team Photo"
                                },
                                {
                                        "code": "149",
                                        "name": "Jung Sung-ryong (South Korea)"
                                },
                                {
                                        "code": "150",
                                        "name": "Cha Du-ri (South Korea)"
                                },
                                {
                                        "code": "151",
                                        "name": "Cho Yong-hyung (South Korea)"
                                },
                                {
                                        "code": "152",
                                        "name": "Lee Jung-soo (South Korea)"
                                },
                                {
                                        "code": "153",
                                        "name": "Lee Young-pyo (South Korea)"
                                },
                                {
                                        "code": "154",
                                        "name": "Kim Jung-woo (South Korea)"
                                },
                                {
                                        "code": "155",
                                        "name": "Ki Sung-yueng (South Korea)"
                                },
                                {
                                        "code": "156",
                                        "name": "Lee Chung-yong (South Korea)"
                                },
                                {
                                        "code": "157",
                                        "name": "Park Ji-sung (South Korea)"
                                },
                                {
                                        "code": "158",
                                        "name": "Park Chu-young (South Korea)"
                                },
                                {
                                        "code": "159",
                                        "name": "Yeom Ki-hun (South Korea)"
                                },
                                {
                                        "code": "160",
                                        "name": "Lee Dong-gook (South Korea)"
                                },
                                {
                                        "code": "161",
                                        "name": "Kim Bo-kyung (South Korea)"
                                },
                                {
                                        "code": "162",
                                        "name": "Ahn Jung-hwan (South Korea)"
                                },
                                {
                                        "code": "163",
                                        "name": "Oh Beom-seok (South Korea)"
                                },
                                {
                                        "code": "164",
                                        "name": "Kim Dong-jin (South Korea)"
                                },
                                {
                                        "code": "165",
                                        "name": "Lee Woon-jae (South Korea)"
                                }
                        ]
                },
                {
                        "code": "GRE",
                        "name": "Greece",
                        "flags": [
                                "gr"
                        ],
                        "stickers": [
                                {
                                        "code": "166",
                                        "name": "Greece Badge"
                                },
                                {
                                        "code": "167",
                                        "name": "Greece Team Photo"
                                },
                                {
                                        "code": "168",
                                        "name": "Alexandros Tzorvas (Greece)"
                                },
                                {
                                        "code": "169",
                                        "name": "Loukas Vyntra (Greece)"
                                },
                                {
                                        "code": "170",
                                        "name": "Sotirios Kyrgiakos (Greece)"
                                },
                                {
                                        "code": "171",
                                        "name": "Vangelis Moras (Greece)"
                                },
                                {
                                        "code": "172",
                                        "name": "Vasilis Torosidis (Greece)"
                                },
                                {
                                        "code": "173",
                                        "name": "Avraam Papadopoulos (Greece)"
                                },
                                {
                                        "code": "174",
                                        "name": "Alexandros Tziolis (Greece)"
                                },
                                {
                                        "code": "175",
                                        "name": "Kostas Katsouranis (Greece)"
                                },
                                {
                                        "code": "176",
                                        "name": "Giorgos Karagounis (Greece)"
                                },
                                {
                                        "code": "177",
                                        "name": "Dimitris Salpingidis (Greece)"
                                },
                                {
                                        "code": "178",
                                        "name": "Theofanis Gekas (Greece)"
                                },
                                {
                                        "code": "179",
                                        "name": "Georgios Samaras (Greece)"
                                },
                                {
                                        "code": "180",
                                        "name": "Angelos Charisteas (Greece)"
                                },
                                {
                                        "code": "181",
                                        "name": "Pantelis Kapetanos (Greece)"
                                },
                                {
                                        "code": "182",
                                        "name": "Sotiris Ninis (Greece)"
                                },
                                {
                                        "code": "183",
                                        "name": "Christos Patsatzoglou (Greece)"
                                },
                                {
                                        "code": "184",
                                        "name": "Michalis Sifakis (Greece)"
                                }
                        ]
                }
        ],
        "Group C": [
                {
                        "code": "ENG",
                        "name": "England",
                        "flags": [
                                "gb-eng"
                        ],
                        "stickers": [
                                {
                                        "code": "185",
                                        "name": "England Badge"
                                },
                                {
                                        "code": "186",
                                        "name": "England Team Photo"
                                },
                                {
                                        "code": "187",
                                        "name": "Robert Green (England)"
                                },
                                {
                                        "code": "188",
                                        "name": "Glen Johnson (England)"
                                },
                                {
                                        "code": "189",
                                        "name": "John Terry (England)"
                                },
                                {
                                        "code": "190",
                                        "name": "Rio Ferdinand (England)"
                                },
                                {
                                        "code": "191",
                                        "name": "Ashley Cole (England)"
                                },
                                {
                                        "code": "192",
                                        "name": "Jamie Carragher (England)"
                                },
                                {
                                        "code": "193",
                                        "name": "Steven Gerrard (England)"
                                },
                                {
                                        "code": "194",
                                        "name": "Frank Lampard (England)"
                                },
                                {
                                        "code": "195",
                                        "name": "Gareth Barry (England)"
                                },
                                {
                                        "code": "196",
                                        "name": "Aaron Lennon (England)"
                                },
                                {
                                        "code": "197",
                                        "name": "Wayne Rooney (England)"
                                },
                                {
                                        "code": "198",
                                        "name": "Emile Heskey (England)"
                                },
                                {
                                        "code": "199",
                                        "name": "Peter Crouch (England)"
                                },
                                {
                                        "code": "200",
                                        "name": "Jermain Defoe (England)"
                                },
                                {
                                        "code": "201",
                                        "name": "Joe Cole (England)"
                                },
                                {
                                        "code": "202",
                                        "name": "James Milner (England)"
                                },
                                {
                                        "code": "203",
                                        "name": "David James (England)"
                                }
                        ]
                },
                {
                        "code": "USA",
                        "name": "United States",
                        "flags": [
                                "us"
                        ],
                        "stickers": [
                                {
                                        "code": "204",
                                        "name": "United States Badge"
                                },
                                {
                                        "code": "205",
                                        "name": "United States Team Photo"
                                },
                                {
                                        "code": "206",
                                        "name": "Tim Howard (United States)"
                                },
                                {
                                        "code": "207",
                                        "name": "Steve Cherundolo (United States)"
                                },
                                {
                                        "code": "208",
                                        "name": "Jay DeMerit (United States)"
                                },
                                {
                                        "code": "209",
                                        "name": "Oguchi Onyewu (United States)"
                                },
                                {
                                        "code": "210",
                                        "name": "Carlos Bocanegra (United States)"
                                },
                                {
                                        "code": "211",
                                        "name": "Jonathan Spector (United States)"
                                },
                                {
                                        "code": "212",
                                        "name": "Michael Bradley (United States)"
                                },
                                {
                                        "code": "213",
                                        "name": "Ricardo Clark (United States)"
                                },
                                {
                                        "code": "214",
                                        "name": "Clint Dempsey (United States)"
                                },
                                {
                                        "code": "215",
                                        "name": "Landon Donovan (United States)"
                                },
                                {
                                        "code": "216",
                                        "name": "Jozy Altidore (United States)"
                                },
                                {
                                        "code": "217",
                                        "name": "Robbie Findley (United States)"
                                },
                                {
                                        "code": "218",
                                        "name": "Edson Buddle (United States)"
                                },
                                {
                                        "code": "219",
                                        "name": "Herculez Gomez (United States)"
                                },
                                {
                                        "code": "220",
                                        "name": "Maurice Edu (United States)"
                                },
                                {
                                        "code": "221",
                                        "name": "Benny Feilhaber (United States)"
                                },
                                {
                                        "code": "222",
                                        "name": "Brad Guzan (United States)"
                                }
                        ]
                },
                {
                        "code": "ALG",
                        "name": "Algeria",
                        "flags": [
                                "dz"
                        ],
                        "stickers": [
                                {
                                        "code": "223",
                                        "name": "Algeria Badge"
                                },
                                {
                                        "code": "224",
                                        "name": "Algeria Team Photo"
                                },
                                {
                                        "code": "225",
                                        "name": "Faouzi Chaouchi (Algeria)"
                                },
                                {
                                        "code": "226",
                                        "name": "Madjid Bougherra (Algeria)"
                                },
                                {
                                        "code": "227",
                                        "name": "Antar Yahia (Algeria)"
                                },
                                {
                                        "code": "228",
                                        "name": "Rafik Halliche (Algeria)"
                                },
                                {
                                        "code": "229",
                                        "name": "Nadir Belhadj (Algeria)"
                                },
                                {
                                        "code": "230",
                                        "name": "Mehdi Lacen (Algeria)"
                                },
                                {
                                        "code": "231",
                                        "name": "Hassan Yebda (Algeria)"
                                },
                                {
                                        "code": "232",
                                        "name": "Karim Ziani (Algeria)"
                                },
                                {
                                        "code": "233",
                                        "name": "Foued Kadir (Algeria)"
                                },
                                {
                                        "code": "234",
                                        "name": "Karim Matmour (Algeria)"
                                },
                                {
                                        "code": "235",
                                        "name": "Rafik Djebbour (Algeria)"
                                },
                                {
                                        "code": "236",
                                        "name": "Abdelkader Ghezzal (Algeria)"
                                },
                                {
                                        "code": "237",
                                        "name": "Djamel Abdoun (Algeria)"
                                },
                                {
                                        "code": "238",
                                        "name": "Adlene Guedioura (Algeria)"
                                },
                                {
                                        "code": "239",
                                        "name": "Ryad Boudebouz (Algeria)"
                                },
                                {
                                        "code": "240",
                                        "name": "Habib Bellaid (Algeria)"
                                },
                                {
                                        "code": "241",
                                        "name": "Rais M'Bolhi (Algeria)"
                                }
                        ]
                },
                {
                        "code": "SVN",
                        "name": "Slovenia",
                        "flags": [
                                "si"
                        ],
                        "stickers": [
                                {
                                        "code": "242",
                                        "name": "Slovenia Badge"
                                },
                                {
                                        "code": "243",
                                        "name": "Slovenia Team Photo"
                                },
                                {
                                        "code": "244",
                                        "name": "Samir Handanovic (Slovenia)"
                                },
                                {
                                        "code": "245",
                                        "name": "Miso Brecko (Slovenia)"
                                },
                                {
                                        "code": "246",
                                        "name": "Marko Suler (Slovenia)"
                                },
                                {
                                        "code": "247",
                                        "name": "Bostjan Cesar (Slovenia)"
                                },
                                {
                                        "code": "248",
                                        "name": "Bojan Jokic (Slovenia)"
                                },
                                {
                                        "code": "249",
                                        "name": "Aleksandar Radosavljevic (Slovenia)"
                                },
                                {
                                        "code": "250",
                                        "name": "Robert Koren (Slovenia)"
                                },
                                {
                                        "code": "251",
                                        "name": "Valter Birsa (Slovenia)"
                                },
                                {
                                        "code": "252",
                                        "name": "Andraz Kirm (Slovenia)"
                                },
                                {
                                        "code": "253",
                                        "name": "Zlatko Dedic (Slovenia)"
                                },
                                {
                                        "code": "254",
                                        "name": "Milivoje Novakovic (Slovenia)"
                                },
                                {
                                        "code": "255",
                                        "name": "Tim Matavz (Slovenia)"
                                },
                                {
                                        "code": "256",
                                        "name": "Zlatan Ljubijankic (Slovenia)"
                                },
                                {
                                        "code": "257",
                                        "name": "Nejc Pecnik (Slovenia)"
                                },
                                {
                                        "code": "258",
                                        "name": "Rene Krhin (Slovenia)"
                                },
                                {
                                        "code": "259",
                                        "name": "Matej Mavric (Slovenia)"
                                },
                                {
                                        "code": "260",
                                        "name": "Jasmin Handanovic (Slovenia)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "GER",
                        "name": "Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "261",
                                        "name": "Germany Badge"
                                },
                                {
                                        "code": "262",
                                        "name": "Germany Team Photo"
                                },
                                {
                                        "code": "263",
                                        "name": "Manuel Neuer (Germany)"
                                },
                                {
                                        "code": "264",
                                        "name": "Philipp Lahm (Germany)"
                                },
                                {
                                        "code": "265",
                                        "name": "Per Mertesacker (Germany)"
                                },
                                {
                                        "code": "266",
                                        "name": "Arne Friedrich (Germany)"
                                },
                                {
                                        "code": "267",
                                        "name": "Jerome Boateng (Germany)"
                                },
                                {
                                        "code": "268",
                                        "name": "Holger Badstuber (Germany)"
                                },
                                {
                                        "code": "269",
                                        "name": "Sami Khedira (Germany)"
                                },
                                {
                                        "code": "270",
                                        "name": "Bastian Schweinsteiger (Germany)"
                                },
                                {
                                        "code": "271",
                                        "name": "Thomas Müller (Germany)"
                                },
                                {
                                        "code": "272",
                                        "name": "Mesut Özil (Germany)"
                                },
                                {
                                        "code": "273",
                                        "name": "Lukas Podolski (Germany)"
                                },
                                {
                                        "code": "274",
                                        "name": "Miroslav Klose (Germany)"
                                },
                                {
                                        "code": "275",
                                        "name": "Mario Gomez (Germany)"
                                },
                                {
                                        "code": "276",
                                        "name": "Cacau (Germany)"
                                },
                                {
                                        "code": "277",
                                        "name": "Toni Kroos (Germany)"
                                },
                                {
                                        "code": "278",
                                        "name": "Marko Marin (Germany)"
                                },
                                {
                                        "code": "279",
                                        "name": "Hans-Jörg Butt (Germany)"
                                }
                        ]
                },
                {
                        "code": "AUS",
                        "name": "Australia",
                        "flags": [
                                "au"
                        ],
                        "stickers": [
                                {
                                        "code": "280",
                                        "name": "Australia Badge"
                                },
                                {
                                        "code": "281",
                                        "name": "Australia Team Photo"
                                },
                                {
                                        "code": "282",
                                        "name": "Mark Schwarzer (Australia)"
                                },
                                {
                                        "code": "283",
                                        "name": "Luke Wilkshire (Australia)"
                                },
                                {
                                        "code": "284",
                                        "name": "Craig Moore (Australia)"
                                },
                                {
                                        "code": "285",
                                        "name": "Lucas Neill (Australia)"
                                },
                                {
                                        "code": "286",
                                        "name": "Scott Chipperfield (Australia)"
                                },
                                {
                                        "code": "287",
                                        "name": "David Carney (Australia)"
                                },
                                {
                                        "code": "288",
                                        "name": "Vince Grella (Australia)"
                                },
                                {
                                        "code": "289",
                                        "name": "Jason Culina (Australia)"
                                },
                                {
                                        "code": "290",
                                        "name": "Brett Emerton (Australia)"
                                },
                                {
                                        "code": "291",
                                        "name": "Tim Cahill (Australia)"
                                },
                                {
                                        "code": "292",
                                        "name": "Harry Kewell (Australia)"
                                },
                                {
                                        "code": "293",
                                        "name": "Josh Kennedy (Australia)"
                                },
                                {
                                        "code": "294",
                                        "name": "Mark Bresciano (Australia)"
                                },
                                {
                                        "code": "295",
                                        "name": "Brett Holman (Australia)"
                                },
                                {
                                        "code": "296",
                                        "name": "Richard Garcia (Australia)"
                                },
                                {
                                        "code": "297",
                                        "name": "Carl Valeri (Australia)"
                                },
                                {
                                        "code": "298",
                                        "name": "Adam Federici (Australia)"
                                }
                        ]
                },
                {
                        "code": "SRB",
                        "name": "Serbia",
                        "flags": [
                                "rs"
                        ],
                        "stickers": [
                                {
                                        "code": "299",
                                        "name": "Serbia Badge"
                                },
                                {
                                        "code": "300",
                                        "name": "Serbia Team Photo"
                                },
                                {
                                        "code": "301",
                                        "name": "Vladimir Stojkovic (Serbia)"
                                },
                                {
                                        "code": "302",
                                        "name": "Branislav Ivanovic (Serbia)"
                                },
                                {
                                        "code": "303",
                                        "name": "Nemanja Vidic (Serbia)"
                                },
                                {
                                        "code": "304",
                                        "name": "Neven Subotic (Serbia)"
                                },
                                {
                                        "code": "305",
                                        "name": "Aleksandar Kolarov (Serbia)"
                                },
                                {
                                        "code": "306",
                                        "name": "Gojko Kacar (Serbia)"
                                },
                                {
                                        "code": "307",
                                        "name": "Dejan Stankovic (Serbia)"
                                },
                                {
                                        "code": "308",
                                        "name": "Nenad Milijas (Serbia)"
                                },
                                {
                                        "code": "309",
                                        "name": "Milos Krasic (Serbia)"
                                },
                                {
                                        "code": "310",
                                        "name": "Milan Jovanovic (Serbia)"
                                },
                                {
                                        "code": "311",
                                        "name": "Nikola Zigic (Serbia)"
                                },
                                {
                                        "code": "312",
                                        "name": "Marko Pantelic (Serbia)"
                                },
                                {
                                        "code": "313",
                                        "name": "Danko Lazovic (Serbia)"
                                },
                                {
                                        "code": "314",
                                        "name": "Zoran Tosic (Serbia)"
                                },
                                {
                                        "code": "315",
                                        "name": "Zdravko Kuzmanovic (Serbia)"
                                },
                                {
                                        "code": "316",
                                        "name": "Antonio Rukavina (Serbia)"
                                },
                                {
                                        "code": "317",
                                        "name": "Bojan Isailovic (Serbia)"
                                }
                        ]
                },
                {
                        "code": "GHA",
                        "name": "Ghana",
                        "flags": [
                                "gh"
                        ],
                        "stickers": [
                                {
                                        "code": "318",
                                        "name": "Ghana Badge"
                                },
                                {
                                        "code": "319",
                                        "name": "Ghana Team Photo"
                                },
                                {
                                        "code": "320",
                                        "name": "Richard Kingson (Ghana)"
                                },
                                {
                                        "code": "321",
                                        "name": "John Paintsil (Ghana)"
                                },
                                {
                                        "code": "322",
                                        "name": "John Mensah (Ghana)"
                                },
                                {
                                        "code": "323",
                                        "name": "Isaac Vorsah (Ghana)"
                                },
                                {
                                        "code": "324",
                                        "name": "Hans Sarpei (Ghana)"
                                },
                                {
                                        "code": "325",
                                        "name": "Lee Addy (Ghana)"
                                },
                                {
                                        "code": "326",
                                        "name": "Anthony Annan (Ghana)"
                                },
                                {
                                        "code": "327",
                                        "name": "Kevin-Prince Boateng (Ghana)"
                                },
                                {
                                        "code": "328",
                                        "name": "Kwadwo Asamoah (Ghana)"
                                },
                                {
                                        "code": "329",
                                        "name": "Sulley Muntari (Ghana)"
                                },
                                {
                                        "code": "330",
                                        "name": "Asamoah Gyan (Ghana)"
                                },
                                {
                                        "code": "331",
                                        "name": "Prince Tagoe (Ghana)"
                                },
                                {
                                        "code": "332",
                                        "name": "Dominic Adiyiah (Ghana)"
                                },
                                {
                                        "code": "333",
                                        "name": "Matthew Amoah (Ghana)"
                                },
                                {
                                        "code": "334",
                                        "name": "Stephen Appiah (Ghana)"
                                },
                                {
                                        "code": "335",
                                        "name": "Andre Ayew (Ghana)"
                                },
                                {
                                        "code": "336",
                                        "name": "Daniel Agyei (Ghana)"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "NED",
                        "name": "Netherlands",
                        "flags": [
                                "nl"
                        ],
                        "stickers": [
                                {
                                        "code": "337",
                                        "name": "Netherlands Badge"
                                },
                                {
                                        "code": "338",
                                        "name": "Netherlands Team Photo"
                                },
                                {
                                        "code": "339",
                                        "name": "Maarten Stekelenburg (Netherlands)"
                                },
                                {
                                        "code": "340",
                                        "name": "Gregory van der Wiel (Netherlands)"
                                },
                                {
                                        "code": "341",
                                        "name": "John Heitinga (Netherlands)"
                                },
                                {
                                        "code": "342",
                                        "name": "Joris Mathijsen (Netherlands)"
                                },
                                {
                                        "code": "343",
                                        "name": "Giovanni van Bronckhorst (Netherlands)"
                                },
                                {
                                        "code": "344",
                                        "name": "Khalid Boulahrouz (Netherlands)"
                                },
                                {
                                        "code": "345",
                                        "name": "Mark van Bommel (Netherlands)"
                                },
                                {
                                        "code": "346",
                                        "name": "Nigel de Jong (Netherlands)"
                                },
                                {
                                        "code": "347",
                                        "name": "Wesley Sneijder (Netherlands)"
                                },
                                {
                                        "code": "348",
                                        "name": "Arjen Robben (Netherlands)"
                                },
                                {
                                        "code": "349",
                                        "name": "Dirk Kuyt (Netherlands)"
                                },
                                {
                                        "code": "350",
                                        "name": "Robin van Persie (Netherlands)"
                                },
                                {
                                        "code": "351",
                                        "name": "Rafael van der Vaart (Netherlands)"
                                },
                                {
                                        "code": "352",
                                        "name": "Klaas-Jan Huntelaar (Netherlands)"
                                },
                                {
                                        "code": "353",
                                        "name": "Eljero Elia (Netherlands)"
                                },
                                {
                                        "code": "354",
                                        "name": "Ibrahim Afellay (Netherlands)"
                                },
                                {
                                        "code": "355",
                                        "name": "Michel Vorm (Netherlands)"
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
                                        "code": "356",
                                        "name": "Denmark Badge"
                                },
                                {
                                        "code": "357",
                                        "name": "Denmark Team Photo"
                                },
                                {
                                        "code": "358",
                                        "name": "Thomas Sorensen (Denmark)"
                                },
                                {
                                        "code": "359",
                                        "name": "Lars Jacobsen (Denmark)"
                                },
                                {
                                        "code": "360",
                                        "name": "Daniel Agger (Denmark)"
                                },
                                {
                                        "code": "361",
                                        "name": "Simon Kjaer (Denmark)"
                                },
                                {
                                        "code": "362",
                                        "name": "Simon Poulsen (Denmark)"
                                },
                                {
                                        "code": "363",
                                        "name": "Per Kroldrup (Denmark)"
                                },
                                {
                                        "code": "364",
                                        "name": "Christian Poulsen (Denmark)"
                                },
                                {
                                        "code": "365",
                                        "name": "Daniel Jensen (Denmark)"
                                },
                                {
                                        "code": "366",
                                        "name": "Martin Jorgensen (Denmark)"
                                },
                                {
                                        "code": "367",
                                        "name": "Dennis Rommedahl (Denmark)"
                                },
                                {
                                        "code": "368",
                                        "name": "Jon Dahl Tomasson (Denmark)"
                                },
                                {
                                        "code": "369",
                                        "name": "Nicklas Bendtner (Denmark)"
                                },
                                {
                                        "code": "370",
                                        "name": "Jesper Gronkjaer (Denmark)"
                                },
                                {
                                        "code": "371",
                                        "name": "Christian Eriksen (Denmark)"
                                },
                                {
                                        "code": "372",
                                        "name": "Jakob Poulsen (Denmark)"
                                },
                                {
                                        "code": "373",
                                        "name": "Thomas Kahlenberg (Denmark)"
                                },
                                {
                                        "code": "374",
                                        "name": "Jesper Christiansen (Denmark)"
                                }
                        ]
                },
                {
                        "code": "JPN",
                        "name": "Japan",
                        "flags": [
                                "jp"
                        ],
                        "stickers": [
                                {
                                        "code": "375",
                                        "name": "Japan Badge"
                                },
                                {
                                        "code": "376",
                                        "name": "Japan Team Photo"
                                },
                                {
                                        "code": "377",
                                        "name": "Eiji Kawashima (Japan)"
                                },
                                {
                                        "code": "378",
                                        "name": "Yuichi Komano (Japan)"
                                },
                                {
                                        "code": "379",
                                        "name": "Yuji Nakazawa (Japan)"
                                },
                                {
                                        "code": "380",
                                        "name": "Marcus Tulio Tanaka (Japan)"
                                },
                                {
                                        "code": "381",
                                        "name": "Yuto Nagatomo (Japan)"
                                },
                                {
                                        "code": "382",
                                        "name": "Yuki Abe (Japan)"
                                },
                                {
                                        "code": "383",
                                        "name": "Yasuhito Endo (Japan)"
                                },
                                {
                                        "code": "384",
                                        "name": "Makoto Hasebe (Japan)"
                                },
                                {
                                        "code": "385",
                                        "name": "Daisuke Matsui (Japan)"
                                },
                                {
                                        "code": "386",
                                        "name": "Keisuke Honda (Japan)"
                                },
                                {
                                        "code": "387",
                                        "name": "Yoshito Okubo (Japan)"
                                },
                                {
                                        "code": "388",
                                        "name": "Shinji Okazaki (Japan)"
                                },
                                {
                                        "code": "389",
                                        "name": "Kengo Nakamura (Japan)"
                                },
                                {
                                        "code": "390",
                                        "name": "Shunsuke Nakamura (Japan)"
                                },
                                {
                                        "code": "391",
                                        "name": "Kisho Yano (Japan)"
                                },
                                {
                                        "code": "392",
                                        "name": "Atsuto Uchida (Japan)"
                                },
                                {
                                        "code": "393",
                                        "name": "Seigo Narazaki (Japan)"
                                }
                        ]
                },
                {
                        "code": "CMR",
                        "name": "Cameroon",
                        "flags": [
                                "cm"
                        ],
                        "stickers": [
                                {
                                        "code": "394",
                                        "name": "Cameroon Badge"
                                },
                                {
                                        "code": "395",
                                        "name": "Cameroon Team Photo"
                                },
                                {
                                        "code": "396",
                                        "name": "Souleymanou Hamidou (Cameroon)"
                                },
                                {
                                        "code": "397",
                                        "name": "Stephane Mbia (Cameroon)"
                                },
                                {
                                        "code": "398",
                                        "name": "Nicolas N'Koulou (Cameroon)"
                                },
                                {
                                        "code": "399",
                                        "name": "Sebastien Bassong (Cameroon)"
                                },
                                {
                                        "code": "400",
                                        "name": "Benoit Assou-Ekotto (Cameroon)"
                                },
                                {
                                        "code": "401",
                                        "name": "Rigobert Song (Cameroon)"
                                },
                                {
                                        "code": "402",
                                        "name": "Alexandre Song (Cameroon)"
                                },
                                {
                                        "code": "403",
                                        "name": "Eyong Enoh (Cameroon)"
                                },
                                {
                                        "code": "404",
                                        "name": "Jean Makoun (Cameroon)"
                                },
                                {
                                        "code": "405",
                                        "name": "Achille Emana (Cameroon)"
                                },
                                {
                                        "code": "406",
                                        "name": "Samuel Eto'o (Cameroon)"
                                },
                                {
                                        "code": "407",
                                        "name": "Pierre Webo (Cameroon)"
                                },
                                {
                                        "code": "408",
                                        "name": "Eric Maxim Choupo-Moting (Cameroon)"
                                },
                                {
                                        "code": "409",
                                        "name": "Mohammadou Idrissou (Cameroon)"
                                },
                                {
                                        "code": "410",
                                        "name": "Geremi Njitap (Cameroon)"
                                },
                                {
                                        "code": "411",
                                        "name": "Joel Matip (Cameroon)"
                                },
                                {
                                        "code": "412",
                                        "name": "Carlos Kameni (Cameroon)"
                                }
                        ]
                }
        ],
        "Group F": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "413",
                                        "name": "Italy Badge"
                                },
                                {
                                        "code": "414",
                                        "name": "Italy Team Photo"
                                },
                                {
                                        "code": "415",
                                        "name": "Gianluigi Buffon (Italy)"
                                },
                                {
                                        "code": "416",
                                        "name": "Gianluca Zambrotta (Italy)"
                                },
                                {
                                        "code": "417",
                                        "name": "Fabio Cannavaro (Italy)"
                                },
                                {
                                        "code": "418",
                                        "name": "Giorgio Chiellini (Italy)"
                                },
                                {
                                        "code": "419",
                                        "name": "Domenico Criscito (Italy)"
                                },
                                {
                                        "code": "420",
                                        "name": "Christian Maggio (Italy)"
                                },
                                {
                                        "code": "421",
                                        "name": "Daniele De Rossi (Italy)"
                                },
                                {
                                        "code": "422",
                                        "name": "Riccardo Montolivo (Italy)"
                                },
                                {
                                        "code": "423",
                                        "name": "Claudio Marchisio (Italy)"
                                },
                                {
                                        "code": "424",
                                        "name": "Andrea Pirlo (Italy)"
                                },
                                {
                                        "code": "425",
                                        "name": "Simone Pepe (Italy)"
                                },
                                {
                                        "code": "426",
                                        "name": "Alberto Gilardino (Italy)"
                                },
                                {
                                        "code": "427",
                                        "name": "Vincenzo Iaquinta (Italy)"
                                },
                                {
                                        "code": "428",
                                        "name": "Antonio Di Natale (Italy)"
                                },
                                {
                                        "code": "429",
                                        "name": "Fabio Quagliarella (Italy)"
                                },
                                {
                                        "code": "430",
                                        "name": "Giampaolo Pazzini (Italy)"
                                },
                                {
                                        "code": "431",
                                        "name": "Federico Marchetti (Italy)"
                                }
                        ]
                },
                {
                        "code": "PAR",
                        "name": "Paraguay",
                        "flags": [
                                "py"
                        ],
                        "stickers": [
                                {
                                        "code": "432",
                                        "name": "Paraguay Badge"
                                },
                                {
                                        "code": "433",
                                        "name": "Paraguay Team Photo"
                                },
                                {
                                        "code": "434",
                                        "name": "Justo Villar (Paraguay)"
                                },
                                {
                                        "code": "435",
                                        "name": "Carlos Bonet (Paraguay)"
                                },
                                {
                                        "code": "436",
                                        "name": "Paulo da Silva (Paraguay)"
                                },
                                {
                                        "code": "437",
                                        "name": "Antolin Alcaraz (Paraguay)"
                                },
                                {
                                        "code": "438",
                                        "name": "Claudio Morel (Paraguay)"
                                },
                                {
                                        "code": "439",
                                        "name": "Denis Caniza (Paraguay)"
                                },
                                {
                                        "code": "440",
                                        "name": "Enrique Vera (Paraguay)"
                                },
                                {
                                        "code": "441",
                                        "name": "Victor Caceres (Paraguay)"
                                },
                                {
                                        "code": "442",
                                        "name": "Cristian Riveros (Paraguay)"
                                },
                                {
                                        "code": "443",
                                        "name": "Jonathan Santana (Paraguay)"
                                },
                                {
                                        "code": "444",
                                        "name": "Nelson Valdez (Paraguay)"
                                },
                                {
                                        "code": "445",
                                        "name": "Roque Santa Cruz (Paraguay)"
                                },
                                {
                                        "code": "446",
                                        "name": "Lucas Barrios (Paraguay)"
                                },
                                {
                                        "code": "447",
                                        "name": "Oscar Cardozo (Paraguay)"
                                },
                                {
                                        "code": "448",
                                        "name": "Edgar Barreto (Paraguay)"
                                },
                                {
                                        "code": "449",
                                        "name": "Aureliano Torres (Paraguay)"
                                },
                                {
                                        "code": "450",
                                        "name": "Diego Barreto (Paraguay)"
                                }
                        ]
                },
                {
                        "code": "NZL",
                        "name": "New Zealand",
                        "flags": [
                                "nz"
                        ],
                        "stickers": [
                                {
                                        "code": "451",
                                        "name": "New Zealand Badge"
                                },
                                {
                                        "code": "452",
                                        "name": "New Zealand Team Photo"
                                },
                                {
                                        "code": "453",
                                        "name": "Mark Paston (New Zealand)"
                                },
                                {
                                        "code": "454",
                                        "name": "Winston Reid (New Zealand)"
                                },
                                {
                                        "code": "455",
                                        "name": "Ryan Nelsen (New Zealand)"
                                },
                                {
                                        "code": "456",
                                        "name": "Tommy Smith (New Zealand)"
                                },
                                {
                                        "code": "457",
                                        "name": "Tony Lochhead (New Zealand)"
                                },
                                {
                                        "code": "458",
                                        "name": "Ivan Vicelich (New Zealand)"
                                },
                                {
                                        "code": "459",
                                        "name": "Simon Elliott (New Zealand)"
                                },
                                {
                                        "code": "460",
                                        "name": "Leo Bertos (New Zealand)"
                                },
                                {
                                        "code": "461",
                                        "name": "Chris Killen (New Zealand)"
                                },
                                {
                                        "code": "462",
                                        "name": "Shane Smeltz (New Zealand)"
                                },
                                {
                                        "code": "463",
                                        "name": "Rory Fallon (New Zealand)"
                                },
                                {
                                        "code": "464",
                                        "name": "Chris Wood (New Zealand)"
                                },
                                {
                                        "code": "465",
                                        "name": "Jeremy Christie (New Zealand)"
                                },
                                {
                                        "code": "466",
                                        "name": "David Mulligan (New Zealand)"
                                },
                                {
                                        "code": "467",
                                        "name": "Andy Barron (New Zealand)"
                                },
                                {
                                        "code": "468",
                                        "name": "Ben Sigmund (New Zealand)"
                                },
                                {
                                        "code": "469",
                                        "name": "Glen Moss (New Zealand)"
                                }
                        ]
                },
                {
                        "code": "SVK",
                        "name": "Slovakia",
                        "flags": [
                                "sk"
                        ],
                        "stickers": [
                                {
                                        "code": "470",
                                        "name": "Slovakia Badge"
                                },
                                {
                                        "code": "471",
                                        "name": "Slovakia Team Photo"
                                },
                                {
                                        "code": "472",
                                        "name": "Jan Mucha (Slovakia)"
                                },
                                {
                                        "code": "473",
                                        "name": "Peter Pekarik (Slovakia)"
                                },
                                {
                                        "code": "474",
                                        "name": "Martin Skrtel (Slovakia)"
                                },
                                {
                                        "code": "475",
                                        "name": "Jan Durica (Slovakia)"
                                },
                                {
                                        "code": "476",
                                        "name": "Radoslav Zabavnik (Slovakia)"
                                },
                                {
                                        "code": "477",
                                        "name": "Zdeno Strba (Slovakia)"
                                },
                                {
                                        "code": "478",
                                        "name": "Juraj Kucka (Slovakia)"
                                },
                                {
                                        "code": "479",
                                        "name": "Marek Hamsik (Slovakia)"
                                },
                                {
                                        "code": "480",
                                        "name": "Vladimir Weiss (Slovakia)"
                                },
                                {
                                        "code": "481",
                                        "name": "Miroslav Stoch (Slovakia)"
                                },
                                {
                                        "code": "482",
                                        "name": "Robert Vittek (Slovakia)"
                                },
                                {
                                        "code": "483",
                                        "name": "Erik Jendrisek (Slovakia)"
                                },
                                {
                                        "code": "484",
                                        "name": "Stanislav Sestak (Slovakia)"
                                },
                                {
                                        "code": "485",
                                        "name": "Filip Holosko (Slovakia)"
                                },
                                {
                                        "code": "486",
                                        "name": "Marek Cech (Slovakia)"
                                },
                                {
                                        "code": "487",
                                        "name": "Kamil Kopunek (Slovakia)"
                                },
                                {
                                        "code": "488",
                                        "name": "Dusan Kuciak (Slovakia)"
                                }
                        ]
                }
        ],
        "Group G": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "489",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "490",
                                        "name": "Brazil Team Photo"
                                },
                                {
                                        "code": "491",
                                        "name": "Julio Cesar (Brazil)"
                                },
                                {
                                        "code": "492",
                                        "name": "Maicon (Brazil)"
                                },
                                {
                                        "code": "493",
                                        "name": "Lucio (Brazil)"
                                },
                                {
                                        "code": "494",
                                        "name": "Juan (Brazil)"
                                },
                                {
                                        "code": "495",
                                        "name": "Michel Bastos (Brazil)"
                                },
                                {
                                        "code": "496",
                                        "name": "Daniel Alves (Brazil)"
                                },
                                {
                                        "code": "497",
                                        "name": "Gilberto Silva (Brazil)"
                                },
                                {
                                        "code": "498",
                                        "name": "Felipe Melo (Brazil)"
                                },
                                {
                                        "code": "499",
                                        "name": "Elano (Brazil)"
                                },
                                {
                                        "code": "500",
                                        "name": "Kaka (Brazil)"
                                },
                                {
                                        "code": "501",
                                        "name": "Robinho (Brazil)"
                                },
                                {
                                        "code": "502",
                                        "name": "Luis Fabiano (Brazil)"
                                },
                                {
                                        "code": "503",
                                        "name": "Nilmar (Brazil)"
                                },
                                {
                                        "code": "504",
                                        "name": "Grafite (Brazil)"
                                },
                                {
                                        "code": "505",
                                        "name": "Ramires (Brazil)"
                                },
                                {
                                        "code": "506",
                                        "name": "Josue (Brazil)"
                                },
                                {
                                        "code": "507",
                                        "name": "Gomes (Brazil)"
                                }
                        ]
                },
                {
                        "code": "PRK",
                        "name": "North Korea",
                        "flags": [
                                "kp"
                        ],
                        "stickers": [
                                {
                                        "code": "508",
                                        "name": "North Korea Badge"
                                },
                                {
                                        "code": "509",
                                        "name": "North Korea Team Photo"
                                },
                                {
                                        "code": "510",
                                        "name": "Ri Myong-guk (North Korea)"
                                },
                                {
                                        "code": "511",
                                        "name": "Cha Jong-hyok (North Korea)"
                                },
                                {
                                        "code": "512",
                                        "name": "Pak Chol-jin (North Korea)"
                                },
                                {
                                        "code": "513",
                                        "name": "Ri Jun-il (North Korea)"
                                },
                                {
                                        "code": "514",
                                        "name": "Ri Kwang-chon (North Korea)"
                                },
                                {
                                        "code": "515",
                                        "name": "Ji Yun-nam (North Korea)"
                                },
                                {
                                        "code": "516",
                                        "name": "Mun In-guk (North Korea)"
                                },
                                {
                                        "code": "517",
                                        "name": "An Yong-hak (North Korea)"
                                },
                                {
                                        "code": "518",
                                        "name": "Pak Nam-chol (North Korea)"
                                },
                                {
                                        "code": "519",
                                        "name": "Hong Yong-jo (North Korea)"
                                },
                                {
                                        "code": "520",
                                        "name": "Jong Tae-se (North Korea)"
                                },
                                {
                                        "code": "521",
                                        "name": "Kim Kum-il (North Korea)"
                                },
                                {
                                        "code": "522",
                                        "name": "Choe Kum-chol (North Korea)"
                                },
                                {
                                        "code": "523",
                                        "name": "Nam Song-chol (North Korea)"
                                },
                                {
                                        "code": "524",
                                        "name": "Kim Yong-jun (North Korea)"
                                },
                                {
                                        "code": "525",
                                        "name": "An Chol-hyok (North Korea)"
                                },
                                {
                                        "code": "526",
                                        "name": "Kim Myong-gil (North Korea)"
                                }
                        ]
                },
                {
                        "code": "CIV",
                        "name": "Ivory Coast",
                        "flags": [
                                "ci"
                        ],
                        "stickers": [
                                {
                                        "code": "527",
                                        "name": "Ivory Coast Badge"
                                },
                                {
                                        "code": "528",
                                        "name": "Ivory Coast Team Photo"
                                },
                                {
                                        "code": "529",
                                        "name": "Boubacar Barry (Ivory Coast)"
                                },
                                {
                                        "code": "530",
                                        "name": "Guy Demel (Ivory Coast)"
                                },
                                {
                                        "code": "531",
                                        "name": "Kolo Toure (Ivory Coast)"
                                },
                                {
                                        "code": "532",
                                        "name": "Didier Zokora (Ivory Coast)"
                                },
                                {
                                        "code": "533",
                                        "name": "Siaka Tiene (Ivory Coast)"
                                },
                                {
                                        "code": "534",
                                        "name": "Emmanuel Eboue (Ivory Coast)"
                                },
                                {
                                        "code": "535",
                                        "name": "Yaya Toure (Ivory Coast)"
                                },
                                {
                                        "code": "536",
                                        "name": "Cheick Tiote (Ivory Coast)"
                                },
                                {
                                        "code": "537",
                                        "name": "Romaric (Ivory Coast)"
                                },
                                {
                                        "code": "538",
                                        "name": "Gervinho (Ivory Coast)"
                                },
                                {
                                        "code": "539",
                                        "name": "Didier Drogba (Ivory Coast)"
                                },
                                {
                                        "code": "540",
                                        "name": "Salomon Kalou (Ivory Coast)"
                                },
                                {
                                        "code": "541",
                                        "name": "Aruna Dindane (Ivory Coast)"
                                },
                                {
                                        "code": "542",
                                        "name": "Bakari Kone (Ivory Coast)"
                                },
                                {
                                        "code": "543",
                                        "name": "Seydou Doumbia (Ivory Coast)"
                                },
                                {
                                        "code": "544",
                                        "name": "Kader Keita (Ivory Coast)"
                                },
                                {
                                        "code": "545",
                                        "name": "Daniel Yeboah (Ivory Coast)"
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
                                        "code": "546",
                                        "name": "Portugal Badge"
                                },
                                {
                                        "code": "547",
                                        "name": "Portugal Team Photo"
                                },
                                {
                                        "code": "548",
                                        "name": "Eduardo Carvalho (Portugal)"
                                },
                                {
                                        "code": "549",
                                        "name": "Paulo Ferreira (Portugal)"
                                },
                                {
                                        "code": "550",
                                        "name": "Ricardo Carvalho (Portugal)"
                                },
                                {
                                        "code": "551",
                                        "name": "Bruno Alves (Portugal)"
                                },
                                {
                                        "code": "552",
                                        "name": "Fabio Coentrao (Portugal)"
                                },
                                {
                                        "code": "553",
                                        "name": "Pepe (Portugal)"
                                },
                                {
                                        "code": "554",
                                        "name": "Pedro Mendes (Portugal)"
                                },
                                {
                                        "code": "555",
                                        "name": "Raul Meireles (Portugal)"
                                },
                                {
                                        "code": "556",
                                        "name": "Tiago Mendes (Portugal)"
                                },
                                {
                                        "code": "557",
                                        "name": "Deco (Portugal)"
                                },
                                {
                                        "code": "558",
                                        "name": "Cristiano Ronaldo (Portugal)"
                                },
                                {
                                        "code": "559",
                                        "name": "Simao Sabrosa (Portugal)"
                                },
                                {
                                        "code": "560",
                                        "name": "Hugo Almeida (Portugal)"
                                },
                                {
                                        "code": "561",
                                        "name": "Liedson (Portugal)"
                                },
                                {
                                        "code": "562",
                                        "name": "Danny (Portugal)"
                                },
                                {
                                        "code": "563",
                                        "name": "Miguel Veloso (Portugal)"
                                },
                                {
                                        "code": "564",
                                        "name": "Beto (Portugal)"
                                }
                        ]
                }
        ],
        "Group H": [
                {
                        "code": "ESP",
                        "name": "Spain",
                        "flags": [
                                "es"
                        ],
                        "stickers": [
                                {
                                        "code": "565",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "566",
                                        "name": "Spain Team Photo"
                                },
                                {
                                        "code": "567",
                                        "name": "Iker Casillas (Spain)"
                                },
                                {
                                        "code": "568",
                                        "name": "Sergio Ramos (Spain)"
                                },
                                {
                                        "code": "569",
                                        "name": "Gerard Pique (Spain)"
                                },
                                {
                                        "code": "570",
                                        "name": "Carles Puyol (Spain)"
                                },
                                {
                                        "code": "571",
                                        "name": "Joan Capdevila (Spain)"
                                },
                                {
                                        "code": "572",
                                        "name": "Alvaro Arbeloa (Spain)"
                                },
                                {
                                        "code": "573",
                                        "name": "Sergio Busquets (Spain)"
                                },
                                {
                                        "code": "574",
                                        "name": "Xabi Alonso (Spain)"
                                },
                                {
                                        "code": "575",
                                        "name": "Xavi Hernandez (Spain)"
                                },
                                {
                                        "code": "576",
                                        "name": "Andres Iniesta (Spain)"
                                },
                                {
                                        "code": "577",
                                        "name": "David Silva (Spain)"
                                },
                                {
                                        "code": "578",
                                        "name": "David Villa (Spain)"
                                },
                                {
                                        "code": "579",
                                        "name": "Fernando Torres (Spain)"
                                },
                                {
                                        "code": "580",
                                        "name": "Pedro Rodriguez (Spain)"
                                },
                                {
                                        "code": "581",
                                        "name": "Cesc Fabregas (Spain)"
                                },
                                {
                                        "code": "582",
                                        "name": "Jesus Navas (Spain)"
                                },
                                {
                                        "code": "583",
                                        "name": "Pepe Reina (Spain)"
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
                                        "code": "584",
                                        "name": "Switzerland Badge"
                                },
                                {
                                        "code": "585",
                                        "name": "Switzerland Team Photo"
                                },
                                {
                                        "code": "586",
                                        "name": "Diego Benaglio (Switzerland)"
                                },
                                {
                                        "code": "587",
                                        "name": "Stephan Lichtsteiner (Switzerland)"
                                },
                                {
                                        "code": "588",
                                        "name": "Steve von Bergen (Switzerland)"
                                },
                                {
                                        "code": "589",
                                        "name": "Stephane Grichting (Switzerland)"
                                },
                                {
                                        "code": "590",
                                        "name": "Reto Ziegler (Switzerland)"
                                },
                                {
                                        "code": "591",
                                        "name": "Philippe Senderos (Switzerland)"
                                },
                                {
                                        "code": "592",
                                        "name": "Valon Behrami (Switzerland)"
                                },
                                {
                                        "code": "593",
                                        "name": "Gokhan Inler (Switzerland)"
                                },
                                {
                                        "code": "594",
                                        "name": "Benjamin Huggel (Switzerland)"
                                },
                                {
                                        "code": "595",
                                        "name": "Tranquillo Barnetta (Switzerland)"
                                },
                                {
                                        "code": "596",
                                        "name": "Gelson Fernandes (Switzerland)"
                                },
                                {
                                        "code": "597",
                                        "name": "Alexander Frei (Switzerland)"
                                },
                                {
                                        "code": "598",
                                        "name": "Blaise Nkufo (Switzerland)"
                                },
                                {
                                        "code": "599",
                                        "name": "Eren Derdiyok (Switzerland)"
                                },
                                {
                                        "code": "600",
                                        "name": "Hakan Yakin (Switzerland)"
                                },
                                {
                                        "code": "601",
                                        "name": "Xherdan Shaqiri (Switzerland)"
                                },
                                {
                                        "code": "602",
                                        "name": "Marco Wolfli (Switzerland)"
                                }
                        ]
                },
                {
                        "code": "HON",
                        "name": "Honduras",
                        "flags": [
                                "hn"
                        ],
                        "stickers": [
                                {
                                        "code": "603",
                                        "name": "Honduras Badge"
                                },
                                {
                                        "code": "604",
                                        "name": "Honduras Team Photo"
                                },
                                {
                                        "code": "605",
                                        "name": "Noel Valladares (Honduras)"
                                },
                                {
                                        "code": "606",
                                        "name": "Sergio Mendoza (Honduras)"
                                },
                                {
                                        "code": "607",
                                        "name": "Osman Chavez (Honduras)"
                                },
                                {
                                        "code": "608",
                                        "name": "Maynor Figueroa (Honduras)"
                                },
                                {
                                        "code": "609",
                                        "name": "Emilio Izaguirre (Honduras)"
                                },
                                {
                                        "code": "610",
                                        "name": "Mauricio Sabillon (Honduras)"
                                },
                                {
                                        "code": "611",
                                        "name": "Wilson Palacios (Honduras)"
                                },
                                {
                                        "code": "612",
                                        "name": "Amado Guevara (Honduras)"
                                },
                                {
                                        "code": "613",
                                        "name": "Hendry Thomas (Honduras)"
                                },
                                {
                                        "code": "614",
                                        "name": "Ramon Nunez (Honduras)"
                                },
                                {
                                        "code": "615",
                                        "name": "Danilo Turcios (Honduras)"
                                },
                                {
                                        "code": "616",
                                        "name": "David Suazo (Honduras)"
                                },
                                {
                                        "code": "617",
                                        "name": "Carlos Pavon (Honduras)"
                                },
                                {
                                        "code": "618",
                                        "name": "Walter Martinez (Honduras)"
                                },
                                {
                                        "code": "619",
                                        "name": "Edgard Alvarez (Honduras)"
                                },
                                {
                                        "code": "620",
                                        "name": "Jerry Palacios (Honduras)"
                                },
                                {
                                        "code": "621",
                                        "name": "Donis Escober (Honduras)"
                                }
                        ]
                },
                {
                        "code": "CHI",
                        "name": "Chile",
                        "flags": [
                                "cl"
                        ],
                        "stickers": [
                                {
                                        "code": "622",
                                        "name": "Chile Badge"
                                },
                                {
                                        "code": "623",
                                        "name": "Chile Team Photo"
                                },
                                {
                                        "code": "624",
                                        "name": "Claudio Bravo (Chile)"
                                },
                                {
                                        "code": "625",
                                        "name": "Mauricio Isla (Chile)"
                                },
                                {
                                        "code": "626",
                                        "name": "Gary Medel (Chile)"
                                },
                                {
                                        "code": "627",
                                        "name": "Waldo Ponce (Chile)"
                                },
                                {
                                        "code": "628",
                                        "name": "Gonzalo Jara (Chile)"
                                },
                                {
                                        "code": "629",
                                        "name": "Arturo Vidal (Chile)"
                                },
                                {
                                        "code": "630",
                                        "name": "Carlos Carmona (Chile)"
                                },
                                {
                                        "code": "631",
                                        "name": "Marco Estrada (Chile)"
                                },
                                {
                                        "code": "632",
                                        "name": "Jorge Valdivia (Chile)"
                                },
                                {
                                        "code": "633",
                                        "name": "Matias Fernandez (Chile)"
                                },
                                {
                                        "code": "634",
                                        "name": "Alexis Sanchez (Chile)"
                                },
                                {
                                        "code": "635",
                                        "name": "Humberto Suazo (Chile)"
                                },
                                {
                                        "code": "636",
                                        "name": "Jean Beausejour (Chile)"
                                },
                                {
                                        "code": "637",
                                        "name": "Mark Gonzalez (Chile)"
                                },
                                {
                                        "code": "638",
                                        "name": "Esteban Paredes (Chile)"
                                },
                                {
                                        "code": "639",
                                        "name": "Fabian Orellana (Chile)"
                                },
                                {
                                        "code": "640",
                                        "name": "Miguel Pinto (Chile)"
                                }
                        ]
                }
        ]
}
};

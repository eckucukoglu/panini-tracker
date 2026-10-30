// data/tournaments/wc1970.js
// Official Panini Mexico 70 World Cup Collection (1-271)

TOURNAMENTS_CONFIG.tournaments['wc1970'] = {
    id: 'wc1970',
    categoryId: 'fifa-world-cup',
    year: 1970,
    title: 'Mexico 70',
    subtitle: 'Mexico • 16 Teams • 271 Stickers',
    dbKey: 'panini1970',
    isSequential: true,
    totalStickers: 271,
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
                        "name": "Posters, Trophy & Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "Coupe Rimet"
                                },
                                {
                                        "code": "2",
                                        "name": "FIFA"
                                },
                                {
                                        "code": "3",
                                        "name": "Mexican Map"
                                },
                                {
                                        "code": "4",
                                        "name": "Juanito (Mascot)"
                                },
                                {
                                        "code": "5",
                                        "name": "Mexican Poster"
                                },
                                {
                                        "code": "6",
                                        "name": "Poster 1930 Uruguay"
                                },
                                {
                                        "code": "7",
                                        "name": "Winners 1930 Uruguay"
                                },
                                {
                                        "code": "8",
                                        "name": "Cea 1930 Uruguay"
                                },
                                {
                                        "code": "9",
                                        "name": "Andrade 1930 Uruguay"
                                },
                                {
                                        "code": "10",
                                        "name": "Stabile 1930 Uruguay"
                                },
                                {
                                        "code": "11",
                                        "name": "Poster 1934 Italy"
                                },
                                {
                                        "code": "12",
                                        "name": "Winners 1934 Italy"
                                },
                                {
                                        "code": "13",
                                        "name": "Combi / Planicka 1934 Italy"
                                },
                                {
                                        "code": "14",
                                        "name": "Schiavio 1934 Italy"
                                },
                                {
                                        "code": "15",
                                        "name": "Orsi 1934 Italy"
                                },
                                {
                                        "code": "16",
                                        "name": "Poster 1938 France"
                                },
                                {
                                        "code": "17",
                                        "name": "Winners 1938 France"
                                },
                                {
                                        "code": "18",
                                        "name": "Leonidas 1938 France"
                                },
                                {
                                        "code": "19",
                                        "name": "Meazza / Sarosi 1938 France"
                                },
                                {
                                        "code": "20",
                                        "name": "Piola 1938 France"
                                },
                                {
                                        "code": "21",
                                        "name": "Poster 1950 Brazil"
                                },
                                {
                                        "code": "22",
                                        "name": "Winners 1950 Brazil"
                                },
                                {
                                        "code": "23",
                                        "name": "Schiaffino 1950 Brazil"
                                },
                                {
                                        "code": "24",
                                        "name": "Ademir 1950 Brazil"
                                },
                                {
                                        "code": "25",
                                        "name": "Ghiggia 1950 Brazil"
                                },
                                {
                                        "code": "26",
                                        "name": "Poster 1954 Switzerland"
                                },
                                {
                                        "code": "27",
                                        "name": "Winners 1954 Switzerland"
                                },
                                {
                                        "code": "28",
                                        "name": "Rahn 1954 Switzerland"
                                },
                                {
                                        "code": "29",
                                        "name": "Puskas 1954 Switzerland"
                                },
                                {
                                        "code": "30",
                                        "name": "Kocsis 1954 Switzerland"
                                },
                                {
                                        "code": "31",
                                        "name": "Poster 1958 Sweden"
                                },
                                {
                                        "code": "32",
                                        "name": "Winners 1958 Sweden"
                                },
                                {
                                        "code": "33",
                                        "name": "Fontaine 1958 Sweden"
                                },
                                {
                                        "code": "34",
                                        "name": "Djalma Santos 1958 Sweden"
                                },
                                {
                                        "code": "35",
                                        "name": "Didi 1958 Sweden"
                                },
                                {
                                        "code": "36",
                                        "name": "Poster 1962 Chile"
                                },
                                {
                                        "code": "37",
                                        "name": "Winners 1962 Chile"
                                },
                                {
                                        "code": "38",
                                        "name": "Albert 1962 Chile"
                                },
                                {
                                        "code": "39",
                                        "name": "Garrincha 1962 Chile"
                                },
                                {
                                        "code": "40",
                                        "name": "Amarildo 1962 Chile"
                                },
                                {
                                        "code": "41",
                                        "name": "Poster 1966 England"
                                },
                                {
                                        "code": "42",
                                        "name": "Winners 1966 England"
                                },
                                {
                                        "code": "43",
                                        "name": "Albrecht 1966 England"
                                },
                                {
                                        "code": "44",
                                        "name": "Eusebio 1966 England"
                                },
                                {
                                        "code": "45",
                                        "name": "Hunt 1966 England"
                                },
                                {
                                        "code": "46",
                                        "name": "Estadio Azteca"
                                }
                        ]
                }
        ],
        "Group 1": [
                {
                        "code": "MEX",
                        "name": "Mexico (H)",
                        "flags": [
                                "mx"
                        ],
                        "stickers": [
                                {
                                        "code": "47",
                                        "name": "Flag"
                                },
                                {
                                        "code": "48",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "49",
                                        "name": "Team"
                                },
                                {
                                        "code": "50",
                                        "name": "Ignacio Calderon"
                                },
                                {
                                        "code": "51",
                                        "name": "Juan Manuel Alejandrez"
                                },
                                {
                                        "code": "52",
                                        "name": "Gustavo Pena"
                                },
                                {
                                        "code": "53",
                                        "name": "Gabriel Nunez"
                                },
                                {
                                        "code": "54",
                                        "name": "Mario Perez"
                                },
                                {
                                        "code": "55",
                                        "name": "Sabas Ponce"
                                },
                                {
                                        "code": "56",
                                        "name": "Alberto Onofre"
                                },
                                {
                                        "code": "57",
                                        "name": "Isidoro Diaz"
                                },
                                {
                                        "code": "58",
                                        "name": "Juan Alvarado"
                                },
                                {
                                        "code": "59",
                                        "name": "Vicente Pereda"
                                },
                                {
                                        "code": "60",
                                        "name": "Aaron Padilla"
                                },
                                {
                                        "code": "61",
                                        "name": "Javier Fragoso"
                                },
                                {
                                        "code": "62",
                                        "name": "Enrique Borja"
                                },
                                {
                                        "code": "63",
                                        "name": "Francisco Castrejon"
                                }
                        ]
                },
                {
                        "code": "BEL",
                        "name": "Belgium",
                        "flags": [
                                "be"
                        ],
                        "stickers": [
                                {
                                        "code": "64",
                                        "name": "Flag"
                                },
                                {
                                        "code": "65",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "66",
                                        "name": "Jean Trappeniers"
                                },
                                {
                                        "code": "67",
                                        "name": "Team"
                                },
                                {
                                        "code": "68",
                                        "name": "Georges Heylens"
                                },
                                {
                                        "code": "69",
                                        "name": "Nicolas Dewalque"
                                },
                                {
                                        "code": "70",
                                        "name": "Leon Jeck"
                                },
                                {
                                        "code": "71",
                                        "name": "Jean Thissen"
                                },
                                {
                                        "code": "72",
                                        "name": "Wilfried van Moer"
                                },
                                {
                                        "code": "73",
                                        "name": "Odilon Polleunis"
                                },
                                {
                                        "code": "74",
                                        "name": "Leon Semmeling"
                                },
                                {
                                        "code": "75",
                                        "name": "Johan Devrindt"
                                },
                                {
                                        "code": "76",
                                        "name": "Paul van Himst"
                                },
                                {
                                        "code": "77",
                                        "name": "Wilfried Puis"
                                }
                        ]
                },
                {
                        "code": "SLV",
                        "name": "El Salvador",
                        "flags": [
                                "sv"
                        ],
                        "stickers": [
                                {
                                        "code": "78",
                                        "name": "Flag"
                                },
                                {
                                        "code": "79",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "80",
                                        "name": "Juan Gualberto Fernandez"
                                },
                                {
                                        "code": "81",
                                        "name": "Team"
                                },
                                {
                                        "code": "82",
                                        "name": "Roberto Rivas"
                                },
                                {
                                        "code": "83",
                                        "name": "Salvador Mariona"
                                },
                                {
                                        "code": "84",
                                        "name": "Mauricio Manzano"
                                },
                                {
                                        "code": "85",
                                        "name": "Jorge Alfredo Vazquez"
                                },
                                {
                                        "code": "86",
                                        "name": "Jose Antonio Quintanilla"
                                },
                                {
                                        "code": "87",
                                        "name": "Mauricio Rodriguez"
                                },
                                {
                                        "code": "88",
                                        "name": "Juan Ramon Martinez"
                                },
                                {
                                        "code": "89",
                                        "name": "Salvador Flamenco"
                                },
                                {
                                        "code": "90",
                                        "name": "Mario Monge"
                                },
                                {
                                        "code": "91",
                                        "name": "Elmer Acevedo"
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
                                        "code": "92",
                                        "name": "Flag"
                                },
                                {
                                        "code": "93",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "94",
                                        "name": "Team"
                                },
                                {
                                        "code": "95",
                                        "name": "Yevhen Rudakov"
                                },
                                {
                                        "code": "96",
                                        "name": "Revaz Dzodzuashvili"
                                },
                                {
                                        "code": "97",
                                        "name": "Albert Chesternev"
                                },
                                {
                                        "code": "98",
                                        "name": "Murtaz Khurtsilava"
                                },
                                {
                                        "code": "99",
                                        "name": "Evgeny Lovchev"
                                },
                                {
                                        "code": "100",
                                        "name": "Volodymyr Kaplychnyi"
                                },
                                {
                                        "code": "101",
                                        "name": "Viktor Serebzianikov"
                                },
                                {
                                        "code": "102",
                                        "name": "Volodymyr Muntyan"
                                },
                                {
                                        "code": "103",
                                        "name": "Kakhi Asatiani"
                                },
                                {
                                        "code": "104",
                                        "name": "Anatoliy Byshovets"
                                },
                                {
                                        "code": "105",
                                        "name": "Anatoliy Puzach"
                                },
                                {
                                        "code": "106",
                                        "name": "Givi Nodia"
                                },
                                {
                                        "code": "107",
                                        "name": "Vitaliy Khmelnytskyi"
                                },
                                {
                                        "code": "108",
                                        "name": "Anzor Kavazashvili"
                                }
                        ]
                }
        ],
        "Group 2": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "109",
                                        "name": "Flag"
                                },
                                {
                                        "code": "110",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "111",
                                        "name": "Team"
                                },
                                {
                                        "code": "112",
                                        "name": "Dino Zoff"
                                },
                                {
                                        "code": "113",
                                        "name": "Tarcisio Burgnich"
                                },
                                {
                                        "code": "114",
                                        "name": "Giacinto Facchetti"
                                },
                                {
                                        "code": "115",
                                        "name": "Mario Bertini"
                                },
                                {
                                        "code": "116",
                                        "name": "Giorgio Puia"
                                },
                                {
                                        "code": "117",
                                        "name": "Sandro Salvadore"
                                },
                                {
                                        "code": "118",
                                        "name": "Angelo Domenghini"
                                },
                                {
                                        "code": "119",
                                        "name": "Gianni Rivera"
                                },
                                {
                                        "code": "120",
                                        "name": "Sandro Mazzola"
                                },
                                {
                                        "code": "121",
                                        "name": "Giancarlo De Sisti"
                                },
                                {
                                        "code": "122",
                                        "name": "Luigi Riva"
                                },
                                {
                                        "code": "123",
                                        "name": "Pietro Anastasi"
                                },
                                {
                                        "code": "124",
                                        "name": "Antonio Juliano"
                                },
                                {
                                        "code": "125",
                                        "name": "Enrico Albertosi"
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
                                        "code": "126",
                                        "name": "Flag"
                                },
                                {
                                        "code": "127",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "128",
                                        "name": "Ladislao Mazurkiewicz"
                                },
                                {
                                        "code": "129",
                                        "name": "Team"
                                },
                                {
                                        "code": "130",
                                        "name": "Luis Ubina"
                                },
                                {
                                        "code": "131",
                                        "name": "Atilio Ancheta"
                                },
                                {
                                        "code": "132",
                                        "name": "Roberto Matosas"
                                },
                                {
                                        "code": "133",
                                        "name": "Omar Caetano"
                                },
                                {
                                        "code": "134",
                                        "name": "Julio Montero Castillo"
                                },
                                {
                                        "code": "135",
                                        "name": "Luis Cubilla"
                                },
                                {
                                        "code": "136",
                                        "name": "Pedro Virgilio Rocha"
                                },
                                {
                                        "code": "137",
                                        "name": "Sergio Silva"
                                },
                                {
                                        "code": "138",
                                        "name": "Julio Cesar Cortes"
                                },
                                {
                                        "code": "139",
                                        "name": "Ruben Bareno"
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
                                        "code": "140",
                                        "name": "Flag"
                                },
                                {
                                        "code": "141",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "142",
                                        "name": "Ronnie Hellstroem"
                                },
                                {
                                        "code": "143",
                                        "name": "Team"
                                },
                                {
                                        "code": "144",
                                        "name": "Hans Selander"
                                },
                                {
                                        "code": "145",
                                        "name": "Kurt Axelsson"
                                },
                                {
                                        "code": "146",
                                        "name": "Björn Nordqvist"
                                },
                                {
                                        "code": "147",
                                        "name": "Roland Grip"
                                },
                                {
                                        "code": "148",
                                        "name": "Tommy Svensson"
                                },
                                {
                                        "code": "149",
                                        "name": "Bo Larsson"
                                },
                                {
                                        "code": "150",
                                        "name": "Leif Eriksson"
                                },
                                {
                                        "code": "151",
                                        "name": "Ove Grahn"
                                },
                                {
                                        "code": "152",
                                        "name": "Ove Kindvall"
                                },
                                {
                                        "code": "153",
                                        "name": "Hans Johansson"
                                }
                        ]
                },
                {
                        "code": "ISR",
                        "name": "Israel",
                        "flags": [
                                "il"
                        ],
                        "stickers": [
                                {
                                        "code": "154",
                                        "name": "Flag"
                                },
                                {
                                        "code": "155",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "156",
                                        "name": "Itzhak Vissoker"
                                },
                                {
                                        "code": "157",
                                        "name": "Team"
                                },
                                {
                                        "code": "158",
                                        "name": "Shraga Bar"
                                },
                                {
                                        "code": "159",
                                        "name": "Menachem Bello"
                                },
                                {
                                        "code": "160",
                                        "name": "Mordechai Lubetzki"
                                },
                                {
                                        "code": "161",
                                        "name": "Zvi Rosen"
                                },
                                {
                                        "code": "162",
                                        "name": "Samuel Rosenthal"
                                },
                                {
                                        "code": "163",
                                        "name": "Rachamim Talbi"
                                },
                                {
                                        "code": "164",
                                        "name": "Itzhak Shum"
                                },
                                {
                                        "code": "165",
                                        "name": "Giora Spiegel"
                                },
                                {
                                        "code": "166",
                                        "name": "Yeshoshua Feigenbaum"
                                },
                                {
                                        "code": "167",
                                        "name": "Mordechai Spiegler"
                                }
                        ]
                }
        ],
        "Group 3": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "168",
                                        "name": "Flag"
                                },
                                {
                                        "code": "169",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "170",
                                        "name": "Team"
                                },
                                {
                                        "code": "171",
                                        "name": "Ado"
                                },
                                {
                                        "code": "172",
                                        "name": "Carlos Alberto"
                                },
                                {
                                        "code": "173",
                                        "name": "Brito"
                                },
                                {
                                        "code": "174",
                                        "name": "Joel"
                                },
                                {
                                        "code": "175",
                                        "name": "Everaldo"
                                },
                                {
                                        "code": "176",
                                        "name": "Piazza"
                                },
                                {
                                        "code": "177",
                                        "name": "Jairzinho"
                                },
                                {
                                        "code": "178",
                                        "name": "Gerson"
                                },
                                {
                                        "code": "179",
                                        "name": "Tostao"
                                },
                                {
                                        "code": "180",
                                        "name": "Pele"
                                },
                                {
                                        "code": "181",
                                        "name": "Edu"
                                },
                                {
                                        "code": "182",
                                        "name": "Rivelino"
                                },
                                {
                                        "code": "183",
                                        "name": "Dirceu Lopes"
                                },
                                {
                                        "code": "184",
                                        "name": "Leao"
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
                                        "code": "185",
                                        "name": "Flag"
                                },
                                {
                                        "code": "186",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "187",
                                        "name": "Team"
                                },
                                {
                                        "code": "188",
                                        "name": "Gordon Banks"
                                },
                                {
                                        "code": "189",
                                        "name": "Tommy Wright"
                                },
                                {
                                        "code": "190",
                                        "name": "Keith Newton"
                                },
                                {
                                        "code": "191",
                                        "name": "Alan Mullery"
                                },
                                {
                                        "code": "192",
                                        "name": "Brian Labone"
                                },
                                {
                                        "code": "193",
                                        "name": "Jack Charlton"
                                },
                                {
                                        "code": "194",
                                        "name": "Bobby Moore"
                                },
                                {
                                        "code": "195",
                                        "name": "Francis Lee"
                                },
                                {
                                        "code": "196",
                                        "name": "Colin Bell"
                                },
                                {
                                        "code": "197",
                                        "name": "Bobby Charlton"
                                },
                                {
                                        "code": "198",
                                        "name": "Alan Ball"
                                },
                                {
                                        "code": "199",
                                        "name": "Geoff Hurst"
                                },
                                {
                                        "code": "200",
                                        "name": "Martin Peters"
                                },
                                {
                                        "code": "201",
                                        "name": "Peter Bonetti"
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
                                        "code": "202",
                                        "name": "Flag"
                                },
                                {
                                        "code": "203",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "204",
                                        "name": "Ivo Viktor"
                                },
                                {
                                        "code": "205",
                                        "name": "Team"
                                },
                                {
                                        "code": "206",
                                        "name": "Jan Pivarnik"
                                },
                                {
                                        "code": "207",
                                        "name": "Vladimir Hagara"
                                },
                                {
                                        "code": "208",
                                        "name": "Alexander Horvath"
                                },
                                {
                                        "code": "209",
                                        "name": "Vaclav Migas"
                                },
                                {
                                        "code": "210",
                                        "name": "Andrej Kvasnak"
                                },
                                {
                                        "code": "211",
                                        "name": "Ladislav Kuna"
                                },
                                {
                                        "code": "212",
                                        "name": "Bohumil Vesely"
                                },
                                {
                                        "code": "213",
                                        "name": "Karol Jokl"
                                },
                                {
                                        "code": "214",
                                        "name": "Jozef Adamec"
                                },
                                {
                                        "code": "215",
                                        "name": "Jan Capkovic"
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
                                        "code": "216",
                                        "name": "Flag"
                                },
                                {
                                        "code": "217",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "218",
                                        "name": "Necula Raducanu"
                                },
                                {
                                        "code": "219",
                                        "name": "Team"
                                },
                                {
                                        "code": "220",
                                        "name": "Ludovic Satmareanu"
                                },
                                {
                                        "code": "221",
                                        "name": "Bujor Halmageanu"
                                },
                                {
                                        "code": "222",
                                        "name": "Dan Coe"
                                },
                                {
                                        "code": "223",
                                        "name": "Augustin Deleanu"
                                },
                                {
                                        "code": "224",
                                        "name": "Cornel Dinu"
                                },
                                {
                                        "code": "225",
                                        "name": "Flavius Domide"
                                },
                                {
                                        "code": "226",
                                        "name": "Emerich Dembrovschi"
                                },
                                {
                                        "code": "227",
                                        "name": "Nicolae Dobrin"
                                },
                                {
                                        "code": "228",
                                        "name": "Florea Dumitrache"
                                },
                                {
                                        "code": "229",
                                        "name": "Mircea Lucescu"
                                }
                        ]
                }
        ],
        "Group 4": [
                {
                        "code": "BUL",
                        "name": "Bulgaria",
                        "flags": [
                                "bg"
                        ],
                        "stickers": [
                                {
                                        "code": "230",
                                        "name": "Flag"
                                },
                                {
                                        "code": "231",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "232",
                                        "name": "Simeon Simeonov"
                                },
                                {
                                        "code": "233",
                                        "name": "Team"
                                },
                                {
                                        "code": "234",
                                        "name": "Aleksandar Shalamanov"
                                },
                                {
                                        "code": "235",
                                        "name": "Ivan Dimitrov"
                                },
                                {
                                        "code": "236",
                                        "name": "Boris Gaganelov"
                                },
                                {
                                        "code": "237",
                                        "name": "Dobromir Zhechev"
                                },
                                {
                                        "code": "238",
                                        "name": "Dimitar Penev"
                                },
                                {
                                        "code": "239",
                                        "name": "Dinko Dermendzhiev"
                                },
                                {
                                        "code": "240",
                                        "name": "Hristo Bonev"
                                },
                                {
                                        "code": "241",
                                        "name": "Georgi Asparuhov"
                                },
                                {
                                        "code": "242",
                                        "name": "Dimitar Yakimov"
                                },
                                {
                                        "code": "243",
                                        "name": "Peter Zhecov"
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
                                        "code": "244",
                                        "name": "Flag"
                                },
                                {
                                        "code": "245",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "246",
                                        "name": "Luis Rubinos"
                                },
                                {
                                        "code": "247",
                                        "name": "Team"
                                },
                                {
                                        "code": "248",
                                        "name": "Angel Eloy Campos"
                                },
                                {
                                        "code": "249",
                                        "name": "Orlando de la Torre"
                                },
                                {
                                        "code": "250",
                                        "name": "Hector Chumpitaz"
                                },
                                {
                                        "code": "251",
                                        "name": "Luis Rafael Risco"
                                },
                                {
                                        "code": "252",
                                        "name": "Ramon Mifflin"
                                },
                                {
                                        "code": "253",
                                        "name": "Roberto Challe"
                                },
                                {
                                        "code": "254",
                                        "name": "Julio Baylon"
                                },
                                {
                                        "code": "255",
                                        "name": "Pedro Pablo Leon"
                                },
                                {
                                        "code": "256",
                                        "name": "Teofilo Cubillas"
                                },
                                {
                                        "code": "257",
                                        "name": "Alberto Gallardo"
                                }
                        ]
                },
                {
                        "code": "MAR",
                        "name": "Morocco",
                        "flags": [
                                "ma"
                        ],
                        "stickers": [
                                {
                                        "code": "258",
                                        "name": "Flag"
                                },
                                {
                                        "code": "259",
                                        "name": "Emblem"
                                },
                                {
                                        "code": "260",
                                        "name": "Kassou Allal"
                                },
                                {
                                        "code": "261",
                                        "name": "Team"
                                },
                                {
                                        "code": "262",
                                        "name": "Mohamed Abdallah"
                                },
                                {
                                        "code": "263",
                                        "name": "Boujemaa Benkhrif"
                                },
                                {
                                        "code": "264",
                                        "name": "Alaoui Moulay Idriss"
                                },
                                {
                                        "code": "265",
                                        "name": "Kacem Slimani"
                                },
                                {
                                        "code": "266",
                                        "name": "Mohamed Maaroufi"
                                },
                                {
                                        "code": "267",
                                        "name": "Said Ghandi"
                                },
                                {
                                        "code": "268",
                                        "name": "Mohamed Filali"
                                },
                                {
                                        "code": "269",
                                        "name": "Ahmed Faras"
                                },
                                {
                                        "code": "270",
                                        "name": "Driss Bamouss"
                                },
                                {
                                        "code": "271",
                                        "name": "Mahjoub Ghazouani"
                                }
                        ]
                }
        ]
}
};

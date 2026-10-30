// data/tournaments/wc1974.js
// Official Panini München 74 World Cup Collection (1-400)

TOURNAMENTS_CONFIG.tournaments['wc1974'] = {
    id: 'wc1974',
    categoryId: 'fifa-world-cup',
    year: 1974,
    title: 'München 74',
    subtitle: 'West Germany • 16 Teams • 400 Stickers',
    dbKey: 'panini1974',
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
                        "name": "History, Mascots & Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA Logo"
                                },
                                {
                                        "code": "2",
                                        "name": "Munchen 74 Poster"
                                },
                                {
                                        "code": "3",
                                        "name": "WM 74 Logo"
                                },
                                {
                                        "code": "4",
                                        "name": "World Cup"
                                },
                                {
                                        "code": "5",
                                        "name": "Tip & Tap"
                                },
                                {
                                        "code": "6",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "7",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "8",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "9",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "10",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "11",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "12",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "13",
                                        "name": "Jules Rimet Trophy"
                                },
                                {
                                        "code": "14",
                                        "name": "Jules Rimet (FIFA)"
                                },
                                {
                                        "code": "15",
                                        "name": "1930 Poster"
                                },
                                {
                                        "code": "16",
                                        "name": "Team Photo (Uruguay)"
                                },
                                {
                                        "code": "17",
                                        "name": "Nasazzi (Uruguay) and Ferreira (Argentina)"
                                },
                                {
                                        "code": "18",
                                        "name": "Uruguay v Argentina"
                                },
                                {
                                        "code": "19",
                                        "name": "1934 Poster"
                                },
                                {
                                        "code": "20",
                                        "name": "Team Photo (Italy)"
                                },
                                {
                                        "code": "21",
                                        "name": "Italy v Czechoslovakia"
                                },
                                {
                                        "code": "22",
                                        "name": "Italian players celebrate"
                                },
                                {
                                        "code": "23",
                                        "name": "1938 Poster"
                                },
                                {
                                        "code": "24",
                                        "name": "Team Photo (Italy)"
                                },
                                {
                                        "code": "25",
                                        "name": "Meazza (Italy) and Sarosi (Hungary)"
                                },
                                {
                                        "code": "26",
                                        "name": "Italy v Hungary"
                                },
                                {
                                        "code": "27",
                                        "name": "1950 Poster"
                                },
                                {
                                        "code": "28",
                                        "name": "Team Photo (Uruguay)"
                                },
                                {
                                        "code": "29",
                                        "name": "Uruguay v Brazil"
                                },
                                {
                                        "code": "30",
                                        "name": "Varela (Uruguay)"
                                },
                                {
                                        "code": "31",
                                        "name": "1954 Poster"
                                },
                                {
                                        "code": "32",
                                        "name": "Team Photo (West Germany)"
                                },
                                {
                                        "code": "33",
                                        "name": "Hidegkuti, Lorant, Grosics, Puskas (Hungary)"
                                },
                                {
                                        "code": "34",
                                        "name": "Walter (Germany)"
                                },
                                {
                                        "code": "35",
                                        "name": "1958 Poster"
                                },
                                {
                                        "code": "36",
                                        "name": "Team Photo (Brazil)"
                                },
                                {
                                        "code": "37",
                                        "name": "Fontaine (France)"
                                },
                                {
                                        "code": "38",
                                        "name": "Fontaine statue"
                                },
                                {
                                        "code": "39",
                                        "name": "1962 Poster"
                                },
                                {
                                        "code": "40",
                                        "name": "Team Photo (Brazil)"
                                },
                                {
                                        "code": "41",
                                        "name": "Amarildo (Brazil)"
                                },
                                {
                                        "code": "42",
                                        "name": "Mauro (Brazil)"
                                },
                                {
                                        "code": "43",
                                        "name": "1966 Poster"
                                },
                                {
                                        "code": "44",
                                        "name": "Moore (England)"
                                },
                                {
                                        "code": "45",
                                        "name": "Bobby Charlton (England)"
                                },
                                {
                                        "code": "46",
                                        "name": "Seeler (West Germany)"
                                },
                                {
                                        "code": "47",
                                        "name": "1970 Poster"
                                },
                                {
                                        "code": "48",
                                        "name": "Team Photo (Brazil)"
                                },
                                {
                                        "code": "49",
                                        "name": "Jairzinho (Brazil)"
                                },
                                {
                                        "code": "50",
                                        "name": "Pele (Brazil)"
                                },
                                {
                                        "code": "51",
                                        "name": "Stanley Rous (FIFA)"
                                },
                                {
                                        "code": "52",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "53",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "54",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "55",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "56",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "57",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "58",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "59",
                                        "name": "FIFA World Cup"
                                },
                                {
                                        "code": "60",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "61",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "62",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "63",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "64",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "65",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "66",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "67",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "68",
                                        "name": "Tip and Tap (Mascots)"
                                },
                                {
                                        "code": "69",
                                        "name": "Stadium Map"
                                },
                                {
                                        "code": "70",
                                        "name": "Munchen (Stadium)"
                                },
                                {
                                        "code": "71",
                                        "name": "Berlin (Stadium)"
                                },
                                {
                                        "code": "72",
                                        "name": "Frankfurt (Stadium)"
                                },
                                {
                                        "code": "73",
                                        "name": "Hamburg (Stadium)"
                                },
                                {
                                        "code": "74",
                                        "name": "Dussledorf (Stadium)"
                                },
                                {
                                        "code": "75",
                                        "name": "Stuttgart (Stadium)"
                                },
                                {
                                        "code": "76",
                                        "name": "Gelsenkirchen (Stadium)"
                                },
                                {
                                        "code": "77",
                                        "name": "Dortmund (Stadium)"
                                },
                                {
                                        "code": "78",
                                        "name": "Hannover (Stadium)"
                                }
                        ]
                }
        ],
        "Group 1": [
                {
                        "code": "FRG",
                        "name": "West Germany (H)",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "79",
                                        "name": "Badge (West Germany)"
                                },
                                {
                                        "code": "80",
                                        "name": "Team (West Germany)"
                                },
                                {
                                        "code": "81",
                                        "name": "Cartoon (West Germany)"
                                },
                                {
                                        "code": "82",
                                        "name": "Hermann Gosmann (West Germany)"
                                },
                                {
                                        "code": "83",
                                        "name": "Helmut Schon (West Germany)"
                                },
                                {
                                        "code": "84",
                                        "name": "Sepp Maier (West Germany)"
                                },
                                {
                                        "code": "85",
                                        "name": "Wolfgang Kleff (West Germany)"
                                },
                                {
                                        "code": "86",
                                        "name": "Horst-Dieter Hottges (West Germany)"
                                },
                                {
                                        "code": "87",
                                        "name": "Hans-Hubert Vogts (West Germany)"
                                },
                                {
                                        "code": "88",
                                        "name": "Paul Breitner (West Germany)"
                                },
                                {
                                        "code": "89",
                                        "name": "Franz Beckenbauer (West Germany)"
                                },
                                {
                                        "code": "90",
                                        "name": "Wolfgang Weber (West Germany)"
                                },
                                {
                                        "code": "91",
                                        "name": "Bernhard Cullmann (West Germany)"
                                },
                                {
                                        "code": "92",
                                        "name": "Georg Schwarzenbeck (West Germany)"
                                },
                                {
                                        "code": "93",
                                        "name": "Helmut Kremers (West Germany)"
                                },
                                {
                                        "code": "94",
                                        "name": "Herbert Wimmer (West Germany)"
                                },
                                {
                                        "code": "95",
                                        "name": "Heinz Flohe (West Germany)"
                                },
                                {
                                        "code": "96",
                                        "name": "Wolfgang Overath (West Germany)"
                                },
                                {
                                        "code": "97",
                                        "name": "Gunter Netzer (West Germany)"
                                },
                                {
                                        "code": "98",
                                        "name": "Willi Hoeness (West Germany)"
                                },
                                {
                                        "code": "99",
                                        "name": "Jurgen Grabowski (West Germany)"
                                },
                                {
                                        "code": "100",
                                        "name": "Jupp Heynckes (West Germany)"
                                },
                                {
                                        "code": "101",
                                        "name": "Gerd Muller (West Germany)"
                                },
                                {
                                        "code": "102",
                                        "name": "Erwin Kremers (West Germany)"
                                },
                                {
                                        "code": "103",
                                        "name": "Sigfried Held (West Germany)"
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
                                        "code": "104",
                                        "name": "Badge (Australia)"
                                },
                                {
                                        "code": "105",
                                        "name": "Team (Australia)"
                                },
                                {
                                        "code": "106",
                                        "name": "Cartoon (Australia)"
                                },
                                {
                                        "code": "107",
                                        "name": "Jimmy Fraser (Australia)"
                                },
                                {
                                        "code": "108",
                                        "name": "Peter Wilson (Australia)"
                                },
                                {
                                        "code": "109",
                                        "name": "Manfred Schaeffer (Australia)"
                                },
                                {
                                        "code": "110",
                                        "name": "Ray Richards (Australia)"
                                },
                                {
                                        "code": "111",
                                        "name": "Jimmy McKay (Australia)"
                                },
                                {
                                        "code": "112",
                                        "name": "Ray Baartz (Australia)"
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
                                        "code": "113",
                                        "name": "Badge (East Germany)"
                                },
                                {
                                        "code": "114",
                                        "name": "Team (East Germany)"
                                },
                                {
                                        "code": "115",
                                        "name": "Cartoon (East Germany)"
                                },
                                {
                                        "code": "116",
                                        "name": "Jurgen Croy (East Germany)"
                                },
                                {
                                        "code": "117",
                                        "name": "Wolfgang Blochwitz (East Germany)"
                                },
                                {
                                        "code": "118",
                                        "name": "Bernd Bransch (East Germany)"
                                },
                                {
                                        "code": "119",
                                        "name": "Lothar Kurbjuweit (East Germany)"
                                },
                                {
                                        "code": "120",
                                        "name": "Frank Ganzera (East Germany)"
                                },
                                {
                                        "code": "121",
                                        "name": "Klaus Sammer (East Germany)"
                                },
                                {
                                        "code": "122",
                                        "name": "Helmut Stein (East Germany)"
                                },
                                {
                                        "code": "123",
                                        "name": "Hans-Jurgen Kreische (East Germany)"
                                },
                                {
                                        "code": "124",
                                        "name": "Wolfgang Seguin (East Germany)"
                                },
                                {
                                        "code": "125",
                                        "name": "Reinhard Lauck (East Germany)"
                                },
                                {
                                        "code": "126",
                                        "name": "Joachim Streich (East Germany)"
                                },
                                {
                                        "code": "127",
                                        "name": "Jurgen Sparwasser (East Germany)"
                                },
                                {
                                        "code": "128",
                                        "name": "Peter Ducke (East Germany)"
                                },
                                {
                                        "code": "129",
                                        "name": "Wolfram Lowe (East Germany)"
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
                                        "code": "130",
                                        "name": "Badge (Chile)"
                                },
                                {
                                        "code": "131",
                                        "name": "Team (Chile)"
                                },
                                {
                                        "code": "132",
                                        "name": "Cartoon (Chile)"
                                },
                                {
                                        "code": "133",
                                        "name": "Juan Olivares (Chile)"
                                },
                                {
                                        "code": "134",
                                        "name": "Adolfo Nef (Chile)"
                                },
                                {
                                        "code": "135",
                                        "name": "Rafael Gonzalez (Chile)"
                                },
                                {
                                        "code": "136",
                                        "name": "Juan Rodriguez (Chile)"
                                },
                                {
                                        "code": "137",
                                        "name": "Eduardo Herrera (Chile)"
                                },
                                {
                                        "code": "138",
                                        "name": "Mario Galindo (Chile)"
                                },
                                {
                                        "code": "139",
                                        "name": "Antonio Arias (Chile)"
                                },
                                {
                                        "code": "140",
                                        "name": "Francisco Valdes (Chile)"
                                },
                                {
                                        "code": "141",
                                        "name": "Nelson Vasquez (Chile)"
                                },
                                {
                                        "code": "142",
                                        "name": "Alfonso Lara (Chile)"
                                },
                                {
                                        "code": "143",
                                        "name": "Carlos Caszely (Chile)"
                                },
                                {
                                        "code": "144",
                                        "name": "Sergio Ahumada (Chile)"
                                },
                                {
                                        "code": "145",
                                        "name": "Leonardo Veliz (Chile)"
                                },
                                {
                                        "code": "146",
                                        "name": "Julio Crisosto (Chile)"
                                }
                        ]
                }
        ],
        "Group 2": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "147",
                                        "name": "Badge (Brazil)"
                                },
                                {
                                        "code": "148",
                                        "name": "Team (Brazil)"
                                },
                                {
                                        "code": "149",
                                        "name": "Cartoon (Brazil)"
                                },
                                {
                                        "code": "150",
                                        "name": "Joao Havelange (Brazil)"
                                },
                                {
                                        "code": "151",
                                        "name": "Mario J. Lobo Zagalo (Brazil)"
                                },
                                {
                                        "code": "152",
                                        "name": "Felix (Brazil)"
                                },
                                {
                                        "code": "153",
                                        "name": "Leao (Brazil)"
                                },
                                {
                                        "code": "154",
                                        "name": "Carlos Alberto (Brazil)"
                                },
                                {
                                        "code": "155",
                                        "name": "Ze Maria (Brazil)"
                                },
                                {
                                        "code": "156",
                                        "name": "Marco Antonio (Brazil)"
                                },
                                {
                                        "code": "157",
                                        "name": "Marinho (Brazil)"
                                },
                                {
                                        "code": "158",
                                        "name": "Luis Pereira (Brazil)"
                                },
                                {
                                        "code": "159",
                                        "name": "Alfredo (Brazil)"
                                },
                                {
                                        "code": "160",
                                        "name": "Piazza (Brazil)"
                                },
                                {
                                        "code": "161",
                                        "name": "Clodoaldo (Brazil)"
                                },
                                {
                                        "code": "162",
                                        "name": "Carbone (Brazil)"
                                },
                                {
                                        "code": "163",
                                        "name": "Ademir (Brazil)"
                                },
                                {
                                        "code": "164",
                                        "name": "Rivelino (Brazil)"
                                },
                                {
                                        "code": "165",
                                        "name": "Paulo Cesar (Brazil)"
                                },
                                {
                                        "code": "166",
                                        "name": "Jairzinho (Brazil)"
                                },
                                {
                                        "code": "167",
                                        "name": "Valdomiro (Brazil)"
                                },
                                {
                                        "code": "168",
                                        "name": "Mirandinha (Brazil)"
                                },
                                {
                                        "code": "169",
                                        "name": "Leivinha (Brazil)"
                                },
                                {
                                        "code": "170",
                                        "name": "Palinha (Brazil)"
                                },
                                {
                                        "code": "171",
                                        "name": "Dirceu (Brazil)"
                                }
                        ]
                },
                {
                        "code": "ZAI",
                        "name": "Zaire",
                        "flags": [
                                "cd"
                        ],
                        "stickers": [
                                {
                                        "code": "172",
                                        "name": "Badge (Zaire)"
                                },
                                {
                                        "code": "173",
                                        "name": "Team (Zaire)"
                                },
                                {
                                        "code": "174",
                                        "name": "Cartoon (Zaire)"
                                },
                                {
                                        "code": "175",
                                        "name": "Mwamba Kazadi (Zaire)"
                                },
                                {
                                        "code": "176",
                                        "name": "Tshimen Bwanga (Zaire)"
                                },
                                {
                                        "code": "177",
                                        "name": "Mafu Kibonge (Zaire)"
                                },
                                {
                                        "code": "178",
                                        "name": "Mantanatu Kidumu (Zaire)"
                                },
                                {
                                        "code": "179",
                                        "name": "Etepe Kakoko (Zaire)"
                                },
                                {
                                        "code": "180",
                                        "name": "Maku Mayanga (Zaire)"
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
                                        "code": "181",
                                        "name": "Badge (Yugoslavia)"
                                },
                                {
                                        "code": "182",
                                        "name": "Team (Yugoslavia)"
                                },
                                {
                                        "code": "183",
                                        "name": "Cartoon (Yugoslavia)"
                                },
                                {
                                        "code": "184",
                                        "name": "Enver Maric (Yugoslavia)"
                                },
                                {
                                        "code": "185",
                                        "name": "Ivan Buljan (Yugoslavia)"
                                },
                                {
                                        "code": "186",
                                        "name": "Enver Hadziabdic (Yugoslavia)"
                                },
                                {
                                        "code": "187",
                                        "name": "Josip Katalinski (Yugoslavia)"
                                },
                                {
                                        "code": "188",
                                        "name": "Vladislav Bogicevic (Yugoslavia)"
                                },
                                {
                                        "code": "189",
                                        "name": "Miroslav Pavlovic (Yugoslavia)"
                                },
                                {
                                        "code": "190",
                                        "name": "Brane Oblak (Yugoslavia)"
                                },
                                {
                                        "code": "191",
                                        "name": "Jovan Acimovic (Yugoslavia)"
                                },
                                {
                                        "code": "192",
                                        "name": "Stanislav Karasi (Yugoslavia)"
                                },
                                {
                                        "code": "193",
                                        "name": "Slobodan Santrac (Yugoslavia)"
                                },
                                {
                                        "code": "194",
                                        "name": "Ilija Petkovic (Yugoslavia)"
                                },
                                {
                                        "code": "195",
                                        "name": "Ivica Surjak (Yugoslavia)"
                                },
                                {
                                        "code": "196",
                                        "name": "Dusan Bajevic (Yugoslavia)"
                                },
                                {
                                        "code": "197",
                                        "name": "Dragan Dzajic (Yugoslavia)"
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
                                        "code": "198",
                                        "name": "Badge (Scotland)"
                                },
                                {
                                        "code": "199",
                                        "name": "Team (Scotland)"
                                },
                                {
                                        "code": "200",
                                        "name": "Cartoon (Scotland)"
                                },
                                {
                                        "code": "201",
                                        "name": "Alistair Hunter (Scotland)"
                                },
                                {
                                        "code": "202",
                                        "name": "David Harvey (Scotland)"
                                },
                                {
                                        "code": "203",
                                        "name": "Sandy Jardine (Scotland)"
                                },
                                {
                                        "code": "204",
                                        "name": "Danny McGrain (Scotland)"
                                },
                                {
                                        "code": "205",
                                        "name": "Jim Holton (Scotland)"
                                },
                                {
                                        "code": "206",
                                        "name": "George Connelly (Scotland)"
                                },
                                {
                                        "code": "207",
                                        "name": "David Hay (Scotland)"
                                },
                                {
                                        "code": "208",
                                        "name": "Billy Bremner (Scotland)"
                                },
                                {
                                        "code": "209",
                                        "name": "Kenny Dalglish (Scotland)"
                                },
                                {
                                        "code": "210",
                                        "name": "Denis Law (Scotland)"
                                },
                                {
                                        "code": "211",
                                        "name": "Willie Morgan (Scotland)"
                                },
                                {
                                        "code": "212",
                                        "name": "Joe Jordan (Scotland)"
                                },
                                {
                                        "code": "213",
                                        "name": "Derek Parlane (Scotland)"
                                },
                                {
                                        "code": "214",
                                        "name": "Tommy Hutchison (Scotland)"
                                }
                        ]
                }
        ],
        "Group 3": [
                {
                        "code": "URU",
                        "name": "Uruguay",
                        "flags": [
                                "uy"
                        ],
                        "stickers": [
                                {
                                        "code": "215",
                                        "name": "Badge (Uruguay)"
                                },
                                {
                                        "code": "216",
                                        "name": "Team (Uruguay)"
                                },
                                {
                                        "code": "217",
                                        "name": "Cartoon (Uruguay)"
                                },
                                {
                                        "code": "218",
                                        "name": "Hector Santos (Uruguay)"
                                },
                                {
                                        "code": "219",
                                        "name": "Ladislao Mazurkiewicz (Uruguay)"
                                },
                                {
                                        "code": "220",
                                        "name": "Walter Olivera (Uruguay)"
                                },
                                {
                                        "code": "221",
                                        "name": "Gustavo De Simone (Uruguay)"
                                },
                                {
                                        "code": "222",
                                        "name": "Juan Masnik (Uruguay)"
                                },
                                {
                                        "code": "223",
                                        "name": "Mario Soryez (Uruguay)"
                                },
                                {
                                        "code": "224",
                                        "name": "Atilio Ancheta (Uruguay)"
                                },
                                {
                                        "code": "225",
                                        "name": "Mario Gonzalez (Uruguay)"
                                },
                                {
                                        "code": "226",
                                        "name": "Pedro Virgilio Rocha (Uruguay)"
                                },
                                {
                                        "code": "227",
                                        "name": "Alberto Cardaccio (Uruguay)"
                                },
                                {
                                        "code": "228",
                                        "name": "Victor Esparrago (Uruguay)"
                                },
                                {
                                        "code": "229",
                                        "name": "Luis Cubilla (Uruguay)"
                                },
                                {
                                        "code": "230",
                                        "name": "Fernando Morena (Uruguay)"
                                },
                                {
                                        "code": "231",
                                        "name": "Denis Milar (Uruguay)"
                                }
                        ]
                },
                {
                        "code": "NED",
                        "name": "Netherlands",
                        "flags": [
                                "nl"
                        ],
                        "stickers": [
                                {
                                        "code": "232",
                                        "name": "Badge (Holland)"
                                },
                                {
                                        "code": "233",
                                        "name": "Team (Holland)"
                                },
                                {
                                        "code": "234",
                                        "name": "Cartoon (Holland)"
                                },
                                {
                                        "code": "235",
                                        "name": "Piet Schrijvers (Holland)"
                                },
                                {
                                        "code": "236",
                                        "name": "Heinz Stuy (Holland)"
                                },
                                {
                                        "code": "237",
                                        "name": "Wim Suurbier (Holland)"
                                },
                                {
                                        "code": "238",
                                        "name": "AadMansveld (Holland)"
                                },
                                {
                                        "code": "239",
                                        "name": "Barry Hulshoff (Holland)"
                                },
                                {
                                        "code": "240",
                                        "name": "Ruud Krol (Holland)"
                                },
                                {
                                        "code": "241",
                                        "name": "Gerry Muhren (Holland)"
                                },
                                {
                                        "code": "242",
                                        "name": "Arie Haan (Holland)"
                                },
                                {
                                        "code": "243",
                                        "name": "Johan Neeskens (Holland)"
                                },
                                {
                                        "code": "244",
                                        "name": "Wim van Hanegem (Holland)"
                                },
                                {
                                        "code": "245",
                                        "name": "Johnny Rep (Holland)"
                                },
                                {
                                        "code": "246",
                                        "name": "Johan Cruyff (Holland)"
                                },
                                {
                                        "code": "247",
                                        "name": "Piet Keizer (Holland)"
                                },
                                {
                                        "code": "248",
                                        "name": "Rob Rensenbrink (Holland)"
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
                                        "code": "249",
                                        "name": "Badge (Bulgaria)"
                                },
                                {
                                        "code": "250",
                                        "name": "Team (Bulgaria)"
                                },
                                {
                                        "code": "251",
                                        "name": "Cartoon (Bulgaria)"
                                },
                                {
                                        "code": "252",
                                        "name": "Rumen Goranov (Bulgaria)"
                                },
                                {
                                        "code": "253",
                                        "name": "Ivan Zafirov (Bulgaria)"
                                },
                                {
                                        "code": "254",
                                        "name": "Dimitar Penev (Bulgaria)"
                                },
                                {
                                        "code": "255",
                                        "name": "Kiril Ivkov (Bulgaria)"
                                },
                                {
                                        "code": "256",
                                        "name": "Stefan Aladjov (Bulgaria)"
                                },
                                {
                                        "code": "257",
                                        "name": "Bozhil Kolev (Bulgaria)"
                                },
                                {
                                        "code": "258",
                                        "name": "Stefan Velitschkov (Bulgaria)"
                                },
                                {
                                        "code": "259",
                                        "name": "Ivan Stoianov (Bulgaria)"
                                },
                                {
                                        "code": "260",
                                        "name": "Hristo Bonev (Bulgaria)"
                                },
                                {
                                        "code": "261",
                                        "name": "Pavel Panov (Bulgaria)"
                                },
                                {
                                        "code": "262",
                                        "name": "Dimitar Dimitrov (Bulgaria)"
                                },
                                {
                                        "code": "263",
                                        "name": "Atanas Mihailov (Bulgaria)"
                                },
                                {
                                        "code": "264",
                                        "name": "Petko Petkov (Bulgaria)"
                                },
                                {
                                        "code": "265",
                                        "name": "Georgi Denev (Bulgaria)"
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
                                        "code": "266",
                                        "name": "Badge (Sweden)"
                                },
                                {
                                        "code": "267",
                                        "name": "Team (Sweden)"
                                },
                                {
                                        "code": "268",
                                        "name": "Cartoon (Sweden)"
                                },
                                {
                                        "code": "269",
                                        "name": "Ronnie Hellstrom (Sweden)"
                                },
                                {
                                        "code": "270",
                                        "name": "Roland Grip (Sweden)"
                                },
                                {
                                        "code": "271",
                                        "name": "Jan Olsson (Sweden)"
                                },
                                {
                                        "code": "272",
                                        "name": "Kent Karlsson (Sweden)"
                                },
                                {
                                        "code": "273",
                                        "name": "Bjorn Nordqvist (Sweden)"
                                },
                                {
                                        "code": "274",
                                        "name": "Bjorn Andersson (Sweden)"
                                },
                                {
                                        "code": "275",
                                        "name": "Ove Grahn (Sweden)"
                                },
                                {
                                        "code": "276",
                                        "name": "Staffan Tapper (Sweden)"
                                },
                                {
                                        "code": "277",
                                        "name": "Bo Larsson (Sweden)"
                                },
                                {
                                        "code": "278",
                                        "name": "Conny Torstensson (Sweden)"
                                },
                                {
                                        "code": "279",
                                        "name": "Harry Svensson (Sweden)"
                                },
                                {
                                        "code": "280",
                                        "name": "Ove Kindvall (Sweden)"
                                },
                                {
                                        "code": "281",
                                        "name": "Ralf Edstrom (Sweden)"
                                },
                                {
                                        "code": "282",
                                        "name": "Roland Sandberg (Sweden)"
                                }
                        ]
                }
        ],
        "Group 4": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "283",
                                        "name": "Badge (ltaly)"
                                },
                                {
                                        "code": "284",
                                        "name": "Team (ltaly)"
                                },
                                {
                                        "code": "285",
                                        "name": "Cartoon (ltaly)"
                                },
                                {
                                        "code": "286",
                                        "name": "Artemio Franchi (ltaly)"
                                },
                                {
                                        "code": "287",
                                        "name": "Ferruccio Valcareggi (ltaly)"
                                },
                                {
                                        "code": "288",
                                        "name": "Dino Zoff (ltaly)"
                                },
                                {
                                        "code": "289",
                                        "name": "Enrico Albertosi (ltaly)"
                                },
                                {
                                        "code": "290",
                                        "name": "Luciano Spinosi (ltaly)"
                                },
                                {
                                        "code": "291",
                                        "name": "Giuseppe Sabadini (ltaly)"
                                },
                                {
                                        "code": "292",
                                        "name": "Giacinto Facchetti (ltaly)"
                                },
                                {
                                        "code": "293",
                                        "name": "Mauro Bellugi (ltaly)"
                                },
                                {
                                        "code": "294",
                                        "name": "Francesco Morini (ltaly)"
                                },
                                {
                                        "code": "295",
                                        "name": "Tarcisio Bergnich (ltaly)"
                                },
                                {
                                        "code": "296",
                                        "name": "Giuseppe Wilson (ltaly)"
                                },
                                {
                                        "code": "297",
                                        "name": "Romeo Bonetti (ltaly)"
                                },
                                {
                                        "code": "298",
                                        "name": "Fabio Capello (ltaly)"
                                },
                                {
                                        "code": "299",
                                        "name": "Gianni Rivera (ltaly)"
                                },
                                {
                                        "code": "300",
                                        "name": "Antonio Juliano (ltaly)"
                                },
                                {
                                        "code": "301",
                                        "name": "Sandro Mazzola (ltaly)"
                                },
                                {
                                        "code": "302",
                                        "name": "Franco Causio (ltaly)"
                                },
                                {
                                        "code": "303",
                                        "name": "Giorgio Chinaglia (ltaly)"
                                },
                                {
                                        "code": "304",
                                        "name": "Pietro Anastasi (ltaly)"
                                },
                                {
                                        "code": "305",
                                        "name": "Roberto Boninsegna (ltaly)"
                                },
                                {
                                        "code": "306",
                                        "name": "Luigi Riva (ltaly)"
                                },
                                {
                                        "code": "307",
                                        "name": "Luciano Chiarugi (ltaly)"
                                }
                        ]
                },
                {
                        "code": "HAI",
                        "name": "Haiti",
                        "flags": [
                                "ht"
                        ],
                        "stickers": [
                                {
                                        "code": "308",
                                        "name": "Badge (Haiti)"
                                },
                                {
                                        "code": "309",
                                        "name": "Team (Haiti)"
                                },
                                {
                                        "code": "310",
                                        "name": "Cartoon (Haiti)"
                                },
                                {
                                        "code": "311",
                                        "name": "Henri Francillon (Haiti)"
                                },
                                {
                                        "code": "312",
                                        "name": "Wilner Nazaire (Haiti)"
                                },
                                {
                                        "code": "313",
                                        "name": "Arsene Auguste (Haiti)"
                                },
                                {
                                        "code": "314",
                                        "name": "Philippe Vorbe (Haiti)"
                                },
                                {
                                        "code": "315",
                                        "name": "Jean-Claude Desir (Haiti)"
                                },
                                {
                                        "code": "316",
                                        "name": "Emmanuel Sanon (Haiti)"
                                }
                        ]
                },
                {
                        "code": "ARG",
                        "name": "Argentina",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "317",
                                        "name": "Badge (Argentina)"
                                },
                                {
                                        "code": "318",
                                        "name": "Team (Argentina)"
                                },
                                {
                                        "code": "319",
                                        "name": "Cartoon (Argentina)"
                                },
                                {
                                        "code": "320",
                                        "name": "Daniel Carnevali (Argentina)"
                                },
                                {
                                        "code": "321",
                                        "name": "Miguel Angel Santoro (Argentina)"
                                },
                                {
                                        "code": "322",
                                        "name": "Francisco Sa (Argentina)"
                                },
                                {
                                        "code": "323",
                                        "name": "Enrique Wolff (Argentina)"
                                },
                                {
                                        "code": "324",
                                        "name": "Roberto Perfumo (Argentina)"
                                },
                                {
                                        "code": "325",
                                        "name": "Hugo Bargas (Argentina)"
                                },
                                {
                                        "code": "326",
                                        "name": "Enrique Chazarreta (Argentina)"
                                },
                                {
                                        "code": "327",
                                        "name": "Roberto Telch (Argentina)"
                                },
                                {
                                        "code": "328",
                                        "name": "Miguel Angel Brindisi (Argentina)"
                                },
                                {
                                        "code": "329",
                                        "name": "Ruben Galvan (Argentina)"
                                },
                                {
                                        "code": "330",
                                        "name": "Norberto Alonso (Argentina)"
                                },
                                {
                                        "code": "331",
                                        "name": "Hector Yazalde (Argentina)"
                                },
                                {
                                        "code": "332",
                                        "name": "Roque Avallay (Argentina)"
                                },
                                {
                                        "code": "333",
                                        "name": "Ruben Hugo Ayala (Argentina)"
                                }
                        ]
                },
                {
                        "code": "POL",
                        "name": "Poland",
                        "flags": [
                                "pl"
                        ],
                        "stickers": [
                                {
                                        "code": "334",
                                        "name": "Badge (Poland)"
                                },
                                {
                                        "code": "335",
                                        "name": "Team (Poland)"
                                },
                                {
                                        "code": "336",
                                        "name": "Cartoon (Poland)"
                                },
                                {
                                        "code": "337",
                                        "name": "Jan Tomasewski (Poland)"
                                },
                                {
                                        "code": "338",
                                        "name": "Jerzy Gorgon (Poland)"
                                },
                                {
                                        "code": "339",
                                        "name": "Antoni Szymanowski (Poland)"
                                },
                                {
                                        "code": "340",
                                        "name": "Adam Musial (Poland)"
                                },
                                {
                                        "code": "341",
                                        "name": "Miroslaw Bulzacki (Poland)"
                                },
                                {
                                        "code": "342",
                                        "name": "Zbigniew Gut (Poland)"
                                },
                                {
                                        "code": "343",
                                        "name": "Zygmunt Maszczyk (Poland)"
                                },
                                {
                                        "code": "344",
                                        "name": "Henryk Kasperczak (Poland)"
                                },
                                {
                                        "code": "345",
                                        "name": "Leslaw Cmikiewicz (Poland)"
                                },
                                {
                                        "code": "346",
                                        "name": "Kazimierz Deyna (Poland)"
                                },
                                {
                                        "code": "347",
                                        "name": "Grzegorz Lato (Poland)"
                                },
                                {
                                        "code": "348",
                                        "name": "Wldozimierz Lubanski (Poland)"
                                },
                                {
                                        "code": "349",
                                        "name": "Jan Domarski (Poland)"
                                },
                                {
                                        "code": "350",
                                        "name": "Robert Gadocha (Poland)"
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
                                        "code": "351",
                                        "name": "Paul Van Himst (Belgium)"
                                },
                                {
                                        "code": "352",
                                        "name": "Christian Piot (Belgium)"
                                },
                                {
                                        "code": "353",
                                        "name": "Badge (Belgium)"
                                },
                                {
                                        "code": "354",
                                        "name": "Maurice Martens (Belgium)"
                                },
                                {
                                        "code": "355",
                                        "name": "Leon Semmeling (Belgium)"
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
                                        "code": "356",
                                        "name": "Vladimir Muntian (CCCP)"
                                },
                                {
                                        "code": "357",
                                        "name": "Revaz Dzodzuashvili (CCCP)"
                                },
                                {
                                        "code": "358",
                                        "name": "Badge (CCCP)"
                                },
                                {
                                        "code": "359",
                                        "name": "Vladimir Kaplichnyi (CCCP)"
                                },
                                {
                                        "code": "360",
                                        "name": "Murtaz Khurtsilava (CCCP)"
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
                                        "code": "361",
                                        "name": "Ivo Viktor (Czechoslovakia)"
                                },
                                {
                                        "code": "362",
                                        "name": "Josef Adamec (Czechoslovakia)"
                                },
                                {
                                        "code": "363",
                                        "name": "Badge (Czechoslovakia)"
                                },
                                {
                                        "code": "364",
                                        "name": "Jan Pivarnik (Czechoslovakia)"
                                },
                                {
                                        "code": "365",
                                        "name": "Pavel Stratil (Czechoslovakia)"
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
                                        "code": "366",
                                        "name": "Bobby Moore (England)"
                                },
                                {
                                        "code": "367",
                                        "name": "Allan Clarke (England)"
                                },
                                {
                                        "code": "368",
                                        "name": "Badge (England)"
                                },
                                {
                                        "code": "369",
                                        "name": "Martin Peters (England)"
                                },
                                {
                                        "code": "370",
                                        "name": "Roy McFarland (England)"
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
                                        "code": "371",
                                        "name": "Jose Angel Iribar (Spain)"
                                },
                                {
                                        "code": "372",
                                        "name": "Juan Manuel Asensi (Spain)"
                                },
                                {
                                        "code": "373",
                                        "name": "Badge (Spain)"
                                },
                                {
                                        "code": "374",
                                        "name": "Jose Martinez \"Pirri\" (Spain)"
                                },
                                {
                                        "code": "375",
                                        "name": "Jose Claramunt (Spain)"
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
                                        "code": "376",
                                        "name": "Henri Michel (France)"
                                },
                                {
                                        "code": "377",
                                        "name": "Georges Bereta (France)"
                                },
                                {
                                        "code": "378",
                                        "name": "Badge (France)"
                                },
                                {
                                        "code": "379",
                                        "name": "Marius Tresor (France)"
                                },
                                {
                                        "code": "380",
                                        "name": "Henre Revelli (France)"
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
                                        "code": "381",
                                        "name": "Karl Odermatt (Switzerland)"
                                },
                                {
                                        "code": "382",
                                        "name": "Kurt Muller (Switzerland)"
                                },
                                {
                                        "code": "383",
                                        "name": "Badge (Switzerland)"
                                },
                                {
                                        "code": "384",
                                        "name": "Pierre Chapuisat (Switzerland)"
                                },
                                {
                                        "code": "385",
                                        "name": "Jakob Kuhn (Switzerland)"
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
                                        "code": "386",
                                        "name": "Ferenc Bene (Hungary)"
                                },
                                {
                                        "code": "387",
                                        "name": "Istvan Juhasz (Hungary)"
                                },
                                {
                                        "code": "388",
                                        "name": "Badge (Hungary)"
                                },
                                {
                                        "code": "389",
                                        "name": "Sandor Zambo (Hungary)"
                                },
                                {
                                        "code": "390",
                                        "name": "Mihaly Kozma (Hungary)"
                                }
                        ]
                },
                {
                        "code": "AUT",
                        "name": "Austria",
                        "flags": [
                                "at"
                        ],
                        "stickers": [
                                {
                                        "code": "391",
                                        "name": "Kurt Jara (Austria)"
                                },
                                {
                                        "code": "392",
                                        "name": "August Starek (Austria)"
                                },
                                {
                                        "code": "393",
                                        "name": "Badge (Austria)"
                                },
                                {
                                        "code": "394",
                                        "name": "Thomas Parits (Austria)"
                                },
                                {
                                        "code": "395",
                                        "name": "Franz Hasil (Austria)"
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
                                        "code": "396",
                                        "name": "Eusebio (Portugal)"
                                },
                                {
                                        "code": "397",
                                        "name": "Jose Henrique (Portugal)"
                                },
                                {
                                        "code": "398",
                                        "name": "Badge (Portugal)"
                                },
                                {
                                        "code": "399",
                                        "name": "Jose Torres (Portugal)"
                                },
                                {
                                        "code": "400",
                                        "name": "Antonio Simoes (Portugal)"
                                }
                        ]
                }
        ]
}
};

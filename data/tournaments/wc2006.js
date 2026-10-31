// data/tournaments/wc2006.js
// Official Panini Germany 2006 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc2006'] = {
    id: 'wc2006',
    categoryId: 'fifa-world-cup',
    year: 2006,
    title: 'Germany 2006',
    subtitle: 'Germany • 32 Teams • 596 Stickers',
    dbKey: 'panini2006',
    isSequential: true,
    totalStickers: 596,
    status: 'active',
    phase: 'Phase 2 (1990–2006)',
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
                        "name": "Trophy, Mascot & 12 Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "2",
                                        "name": "Official Germany 2006 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Goleo VI (Official Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Pille the Talking Ball (Mascot)"
                                },
                                {
                                        "code": "5",
                                        "name": "Official Match Ball (Teamgeist)"
                                },
                                {
                                        "code": "6",
                                        "name": "Official Germany 2006 Poster"
                                },
                                {
                                        "code": "7",
                                        "name": "FIFA Fair Play Emblem"
                                },
                                {
                                        "code": "8",
                                        "name": "Olympiastadion Berlin"
                                },
                                {
                                        "code": "9",
                                        "name": "Signal Iduna Park Dortmund"
                                },
                                {
                                        "code": "10",
                                        "name": "Allianz Arena München"
                                },
                                {
                                        "code": "11",
                                        "name": "Gottlieb-Daimler-Stadion Stuttgart"
                                },
                                {
                                        "code": "12",
                                        "name": "Veltins-Arena Gelsenkirchen"
                                },
                                {
                                        "code": "13",
                                        "name": "AOL Arena Hamburg"
                                },
                                {
                                        "code": "14",
                                        "name": "Commerzbank-Arena Frankfurt"
                                },
                                {
                                        "code": "15",
                                        "name": "RheinEnergieStadion Köln"
                                },
                                {
                                        "code": "16",
                                        "name": "AWD-Arena Hannover"
                                },
                                {
                                        "code": "17",
                                        "name": "Zentralstadion Leipzig"
                                },
                                {
                                        "code": "18",
                                        "name": "Fritz-Walter-Stadion Kaiserslautern"
                                },
                                {
                                        "code": "19",
                                        "name": "easyCredit-Stadion Nürnberg"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "GER",
                        "name": "Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "20",
                                        "name": "Germany Badge"
                                },
                                {
                                        "code": "21",
                                        "name": "Germany Team Photo"
                                },
                                {
                                        "code": "22",
                                        "name": "Jens Lehmann (Germany)"
                                },
                                {
                                        "code": "23",
                                        "name": "Arne Friedrich (Germany)"
                                },
                                {
                                        "code": "24",
                                        "name": "Per Mertesacker (Germany)"
                                },
                                {
                                        "code": "25",
                                        "name": "Christoph Metzelder (Germany)"
                                },
                                {
                                        "code": "26",
                                        "name": "Philipp Lahm (Germany)"
                                },
                                {
                                        "code": "27",
                                        "name": "Bernd Schneider (Germany)"
                                },
                                {
                                        "code": "28",
                                        "name": "Torsten Frings (Germany)"
                                },
                                {
                                        "code": "29",
                                        "name": "Michael Ballack (Germany)"
                                },
                                {
                                        "code": "30",
                                        "name": "Bastian Schweinsteiger (Germany)"
                                },
                                {
                                        "code": "31",
                                        "name": "Miroslav Klose (Germany)"
                                },
                                {
                                        "code": "32",
                                        "name": "Lukas Podolski (Germany)"
                                },
                                {
                                        "code": "33",
                                        "name": "Oliver Neuville (Germany)"
                                },
                                {
                                        "code": "34",
                                        "name": "Gerald Asamoah (Germany)"
                                },
                                {
                                        "code": "35",
                                        "name": "Tim Borowski (Germany)"
                                },
                                {
                                        "code": "36",
                                        "name": "David Odonkor (Germany)"
                                },
                                {
                                        "code": "37",
                                        "name": "Oliver Kahn (Germany)"
                                }
                        ]
                },
                {
                        "code": "CRC",
                        "name": "Costa Rica",
                        "flags": [
                                "cr"
                        ],
                        "stickers": [
                                {
                                        "code": "38",
                                        "name": "Costa Rica Badge"
                                },
                                {
                                        "code": "39",
                                        "name": "Costa Rica Team Photo"
                                },
                                {
                                        "code": "40",
                                        "name": "Jose Porras (Costa Rica)"
                                },
                                {
                                        "code": "41",
                                        "name": "Luis Marin (Costa Rica)"
                                },
                                {
                                        "code": "42",
                                        "name": "Michael Umana (Costa Rica)"
                                },
                                {
                                        "code": "43",
                                        "name": "Gilberto Martinez (Costa Rica)"
                                },
                                {
                                        "code": "44",
                                        "name": "Leonardo Gonzalez (Costa Rica)"
                                },
                                {
                                        "code": "45",
                                        "name": "Mauricio Solis (Costa Rica)"
                                },
                                {
                                        "code": "46",
                                        "name": "Walter Centeno (Costa Rica)"
                                },
                                {
                                        "code": "47",
                                        "name": "Danny Fonseca (Costa Rica)"
                                },
                                {
                                        "code": "48",
                                        "name": "Ronald Gomez (Costa Rica)"
                                },
                                {
                                        "code": "49",
                                        "name": "Paulo Wanchope (Costa Rica)"
                                },
                                {
                                        "code": "50",
                                        "name": "Christian Bolanos (Costa Rica)"
                                },
                                {
                                        "code": "51",
                                        "name": "Alvaro Saborio (Costa Rica)"
                                },
                                {
                                        "code": "52",
                                        "name": "Kurt Bernard (Costa Rica)"
                                },
                                {
                                        "code": "53",
                                        "name": "Randall Azofeifa (Costa Rica)"
                                },
                                {
                                        "code": "54",
                                        "name": "Carlos Johnson (Costa Rica)"
                                },
                                {
                                        "code": "55",
                                        "name": "Wardy Alfaro (Costa Rica)"
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
                                        "code": "56",
                                        "name": "Poland Badge"
                                },
                                {
                                        "code": "57",
                                        "name": "Poland Team Photo"
                                },
                                {
                                        "code": "58",
                                        "name": "Artur Boruc (Poland)"
                                },
                                {
                                        "code": "59",
                                        "name": "Marcin Baszczynski (Poland)"
                                },
                                {
                                        "code": "60",
                                        "name": "Jacek Bak (Poland)"
                                },
                                {
                                        "code": "61",
                                        "name": "Mariusz Jop (Poland)"
                                },
                                {
                                        "code": "62",
                                        "name": "Michal Zewlakow (Poland)"
                                },
                                {
                                        "code": "63",
                                        "name": "Radoslaw Sobolewski (Poland)"
                                },
                                {
                                        "code": "64",
                                        "name": "Jacek Krzynowek (Poland)"
                                },
                                {
                                        "code": "65",
                                        "name": "Miroslaw Szymkowiak (Poland)"
                                },
                                {
                                        "code": "66",
                                        "name": "Kamil Kosowski (Poland)"
                                },
                                {
                                        "code": "67",
                                        "name": "Maciej Zurawski (Poland)"
                                },
                                {
                                        "code": "68",
                                        "name": "Euzebiusz Smolarek (Poland)"
                                },
                                {
                                        "code": "69",
                                        "name": "Grzegorz Rasiak (Poland)"
                                },
                                {
                                        "code": "70",
                                        "name": "Ireneusz Jelen (Poland)"
                                },
                                {
                                        "code": "71",
                                        "name": "Arkadiusz Radomski (Poland)"
                                },
                                {
                                        "code": "72",
                                        "name": "Dariusz Dudka (Poland)"
                                },
                                {
                                        "code": "73",
                                        "name": "Tomasz Kuszczak (Poland)"
                                }
                        ]
                },
                {
                        "code": "ECU",
                        "name": "Ecuador",
                        "flags": [
                                "ec"
                        ],
                        "stickers": [
                                {
                                        "code": "74",
                                        "name": "Ecuador Badge"
                                },
                                {
                                        "code": "75",
                                        "name": "Ecuador Team Photo"
                                },
                                {
                                        "code": "76",
                                        "name": "Cristian Mora (Ecuador)"
                                },
                                {
                                        "code": "77",
                                        "name": "Ulises de la Cruz (Ecuador)"
                                },
                                {
                                        "code": "78",
                                        "name": "Ivan Hurtado (Ecuador)"
                                },
                                {
                                        "code": "79",
                                        "name": "Giovanny Espinoza (Ecuador)"
                                },
                                {
                                        "code": "80",
                                        "name": "Neicer Reasco (Ecuador)"
                                },
                                {
                                        "code": "81",
                                        "name": "Edwin Tenorio (Ecuador)"
                                },
                                {
                                        "code": "82",
                                        "name": "Segundo Castillo (Ecuador)"
                                },
                                {
                                        "code": "83",
                                        "name": "Edison Mendez (Ecuador)"
                                },
                                {
                                        "code": "84",
                                        "name": "Luis Antonio Valencia (Ecuador)"
                                },
                                {
                                        "code": "85",
                                        "name": "Agustin Delgado (Ecuador)"
                                },
                                {
                                        "code": "86",
                                        "name": "Carlos Tenorio (Ecuador)"
                                },
                                {
                                        "code": "87",
                                        "name": "Ivan Kaviedes (Ecuador)"
                                },
                                {
                                        "code": "88",
                                        "name": "Cristian Lara (Ecuador)"
                                },
                                {
                                        "code": "89",
                                        "name": "Patricio Urrutia (Ecuador)"
                                },
                                {
                                        "code": "90",
                                        "name": "Paul Ambrosi (Ecuador)"
                                },
                                {
                                        "code": "91",
                                        "name": "Edwin Villafuerte (Ecuador)"
                                }
                        ]
                }
        ],
        "Group B": [
                {
                        "code": "ENG",
                        "name": "England",
                        "flags": [
                                "gb-eng"
                        ],
                        "stickers": [
                                {
                                        "code": "92",
                                        "name": "England Badge"
                                },
                                {
                                        "code": "93",
                                        "name": "England Team Photo"
                                },
                                {
                                        "code": "94",
                                        "name": "Paul Robinson (England)"
                                },
                                {
                                        "code": "95",
                                        "name": "Gary Neville (England)"
                                },
                                {
                                        "code": "96",
                                        "name": "Rio Ferdinand (England)"
                                },
                                {
                                        "code": "97",
                                        "name": "John Terry (England)"
                                },
                                {
                                        "code": "98",
                                        "name": "Ashley Cole (England)"
                                },
                                {
                                        "code": "99",
                                        "name": "David Beckham (England)"
                                },
                                {
                                        "code": "100",
                                        "name": "Steven Gerrard (England)"
                                },
                                {
                                        "code": "101",
                                        "name": "Frank Lampard (England)"
                                },
                                {
                                        "code": "102",
                                        "name": "Joe Cole (England)"
                                },
                                {
                                        "code": "103",
                                        "name": "Wayne Rooney (England)"
                                },
                                {
                                        "code": "104",
                                        "name": "Michael Owen (England)"
                                },
                                {
                                        "code": "105",
                                        "name": "Peter Crouch (England)"
                                },
                                {
                                        "code": "106",
                                        "name": "Jamie Carragher (England)"
                                },
                                {
                                        "code": "107",
                                        "name": "Owen Hargreaves (England)"
                                },
                                {
                                        "code": "108",
                                        "name": "Aaron Lennon (England)"
                                },
                                {
                                        "code": "109",
                                        "name": "David James (England)"
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
                                        "code": "110",
                                        "name": "Paraguay Badge"
                                },
                                {
                                        "code": "111",
                                        "name": "Paraguay Team Photo"
                                },
                                {
                                        "code": "112",
                                        "name": "Justo Villar (Paraguay)"
                                },
                                {
                                        "code": "113",
                                        "name": "Carlos Gamarra (Paraguay)"
                                },
                                {
                                        "code": "114",
                                        "name": "Julio Cesar Caceres (Paraguay)"
                                },
                                {
                                        "code": "115",
                                        "name": "Delio Toledo (Paraguay)"
                                },
                                {
                                        "code": "116",
                                        "name": "Denis Caniza (Paraguay)"
                                },
                                {
                                        "code": "117",
                                        "name": "Roberto Acuna (Paraguay)"
                                },
                                {
                                        "code": "118",
                                        "name": "Carlos Paredes (Paraguay)"
                                },
                                {
                                        "code": "119",
                                        "name": "Edgar Barreto (Paraguay)"
                                },
                                {
                                        "code": "120",
                                        "name": "Cristian Riveros (Paraguay)"
                                },
                                {
                                        "code": "121",
                                        "name": "Roque Santa Cruz (Paraguay)"
                                },
                                {
                                        "code": "122",
                                        "name": "Nelson Valdez (Paraguay)"
                                },
                                {
                                        "code": "123",
                                        "name": "Jose Cardozo (Paraguay)"
                                },
                                {
                                        "code": "124",
                                        "name": "Julio dos Santos (Paraguay)"
                                },
                                {
                                        "code": "125",
                                        "name": "Nelson Cuevas (Paraguay)"
                                },
                                {
                                        "code": "126",
                                        "name": "Salvador Cabanas (Paraguay)"
                                },
                                {
                                        "code": "127",
                                        "name": "Aldo Bobadilla (Paraguay)"
                                }
                        ]
                },
                {
                        "code": "TRI",
                        "name": "Trinidad and Tobago",
                        "flags": [
                                "tt"
                        ],
                        "stickers": [
                                {
                                        "code": "128",
                                        "name": "Trinidad and Tobago Badge"
                                },
                                {
                                        "code": "129",
                                        "name": "Trinidad and Tobago Team Photo"
                                },
                                {
                                        "code": "130",
                                        "name": "Shaka Hislop (Trinidad and Tobago)"
                                },
                                {
                                        "code": "131",
                                        "name": "Brent Sancho (Trinidad and Tobago)"
                                },
                                {
                                        "code": "132",
                                        "name": "Dennis Lawrence (Trinidad and Tobago)"
                                },
                                {
                                        "code": "133",
                                        "name": "Cyd Gray (Trinidad and Tobago)"
                                },
                                {
                                        "code": "134",
                                        "name": "Avery John (Trinidad and Tobago)"
                                },
                                {
                                        "code": "135",
                                        "name": "Carlos Edwards (Trinidad and Tobago)"
                                },
                                {
                                        "code": "136",
                                        "name": "Chris Birchall (Trinidad and Tobago)"
                                },
                                {
                                        "code": "137",
                                        "name": "Aurtis Whitley (Trinidad and Tobago)"
                                },
                                {
                                        "code": "138",
                                        "name": "Dwight Yorke (Trinidad and Tobago)"
                                },
                                {
                                        "code": "139",
                                        "name": "Stern John (Trinidad and Tobago)"
                                },
                                {
                                        "code": "140",
                                        "name": "Kenwyne Jones (Trinidad and Tobago)"
                                },
                                {
                                        "code": "141",
                                        "name": "Russell Latapy (Trinidad and Tobago)"
                                },
                                {
                                        "code": "142",
                                        "name": "Cornell Glen (Trinidad and Tobago)"
                                },
                                {
                                        "code": "143",
                                        "name": "Silvio Spann (Trinidad and Tobago)"
                                },
                                {
                                        "code": "144",
                                        "name": "Densill Theobald (Trinidad and Tobago)"
                                },
                                {
                                        "code": "145",
                                        "name": "Kelvin Jack (Trinidad and Tobago)"
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
                                        "code": "146",
                                        "name": "Sweden Badge"
                                },
                                {
                                        "code": "147",
                                        "name": "Sweden Team Photo"
                                },
                                {
                                        "code": "148",
                                        "name": "Andreas Isaksson (Sweden)"
                                },
                                {
                                        "code": "149",
                                        "name": "Olof Mellberg (Sweden)"
                                },
                                {
                                        "code": "150",
                                        "name": "Teddy Lucic (Sweden)"
                                },
                                {
                                        "code": "151",
                                        "name": "Erik Edman (Sweden)"
                                },
                                {
                                        "code": "152",
                                        "name": "Niclas Alexandersson (Sweden)"
                                },
                                {
                                        "code": "153",
                                        "name": "Tobias Linderoth (Sweden)"
                                },
                                {
                                        "code": "154",
                                        "name": "Christian Wilhelmsson (Sweden)"
                                },
                                {
                                        "code": "155",
                                        "name": "Kim Kallstrom (Sweden)"
                                },
                                {
                                        "code": "156",
                                        "name": "Freddie Ljungberg (Sweden)"
                                },
                                {
                                        "code": "157",
                                        "name": "Zlatan Ibrahimovic (Sweden)"
                                },
                                {
                                        "code": "158",
                                        "name": "Henrik Larsson (Sweden)"
                                },
                                {
                                        "code": "159",
                                        "name": "Marcus Allback (Sweden)"
                                },
                                {
                                        "code": "160",
                                        "name": "Mattias Jonson (Sweden)"
                                },
                                {
                                        "code": "161",
                                        "name": "Anders Svensson (Sweden)"
                                },
                                {
                                        "code": "162",
                                        "name": "Daniel Andersson (Sweden)"
                                },
                                {
                                        "code": "163",
                                        "name": "John Alvbage (Sweden)"
                                }
                        ]
                }
        ],
        "Group C": [
                {
                        "code": "ARG",
                        "name": "Argentina",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "164",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "165",
                                        "name": "Argentina Team Photo"
                                },
                                {
                                        "code": "166",
                                        "name": "Roberto Abbondanzieri (Argentina)"
                                },
                                {
                                        "code": "167",
                                        "name": "Roberto Ayala (Argentina)"
                                },
                                {
                                        "code": "168",
                                        "name": "Gabriel Heinze (Argentina)"
                                },
                                {
                                        "code": "169",
                                        "name": "Juan Pablo Sorin (Argentina)"
                                },
                                {
                                        "code": "170",
                                        "name": "Fabricio Coloccini (Argentina)"
                                },
                                {
                                        "code": "171",
                                        "name": "Javier Mascherano (Argentina)"
                                },
                                {
                                        "code": "172",
                                        "name": "Esteban Cambiasso (Argentina)"
                                },
                                {
                                        "code": "173",
                                        "name": "Juan Roman Riquelme (Argentina)"
                                },
                                {
                                        "code": "174",
                                        "name": "Maxi Rodriguez (Argentina)"
                                },
                                {
                                        "code": "175",
                                        "name": "Hernan Crespo (Argentina)"
                                },
                                {
                                        "code": "176",
                                        "name": "Javier Saviola (Argentina)"
                                },
                                {
                                        "code": "177",
                                        "name": "Lionel Messi (Argentina)"
                                },
                                {
                                        "code": "178",
                                        "name": "Carlos Tevez (Argentina)"
                                },
                                {
                                        "code": "179",
                                        "name": "Pablo Aimar (Argentina)"
                                },
                                {
                                        "code": "180",
                                        "name": "Lucho Gonzalez (Argentina)"
                                },
                                {
                                        "code": "181",
                                        "name": "Leo Franco (Argentina)"
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
                                        "code": "182",
                                        "name": "Ivory Coast Badge"
                                },
                                {
                                        "code": "183",
                                        "name": "Ivory Coast Team Photo"
                                },
                                {
                                        "code": "184",
                                        "name": "Jean-Jacques Tizie (Ivory Coast)"
                                },
                                {
                                        "code": "185",
                                        "name": "Emmanuel Eboue (Ivory Coast)"
                                },
                                {
                                        "code": "186",
                                        "name": "Kolo Toure (Ivory Coast)"
                                },
                                {
                                        "code": "187",
                                        "name": "Arthur Boka (Ivory Coast)"
                                },
                                {
                                        "code": "188",
                                        "name": "Blaise Kouassi (Ivory Coast)"
                                },
                                {
                                        "code": "189",
                                        "name": "Didier Zokora (Ivory Coast)"
                                },
                                {
                                        "code": "190",
                                        "name": "Yaya Toure (Ivory Coast)"
                                },
                                {
                                        "code": "191",
                                        "name": "Kanga Akale (Ivory Coast)"
                                },
                                {
                                        "code": "192",
                                        "name": "Bonaventure Kalou (Ivory Coast)"
                                },
                                {
                                        "code": "193",
                                        "name": "Didier Drogba (Ivory Coast)"
                                },
                                {
                                        "code": "194",
                                        "name": "Aruna Dindane (Ivory Coast)"
                                },
                                {
                                        "code": "195",
                                        "name": "Bakari Kone (Ivory Coast)"
                                },
                                {
                                        "code": "196",
                                        "name": "Arouna Kone (Ivory Coast)"
                                },
                                {
                                        "code": "197",
                                        "name": "Gilles Yapi Yapo (Ivory Coast)"
                                },
                                {
                                        "code": "198",
                                        "name": "Emerse Fae (Ivory Coast)"
                                },
                                {
                                        "code": "199",
                                        "name": "Boubacar Barry (Ivory Coast)"
                                }
                        ]
                },
                {
                        "code": "SCG",
                        "name": "Serbia and Montenegro",
                        "flags": [
                                "rs"
                        ],
                        "stickers": [
                                {
                                        "code": "200",
                                        "name": "Serbia and Montenegro Badge"
                                },
                                {
                                        "code": "201",
                                        "name": "Serbia and Montenegro Team Photo"
                                },
                                {
                                        "code": "202",
                                        "name": "Dragoslav Jevric (Serbia and Montenegro)"
                                },
                                {
                                        "code": "203",
                                        "name": "Goran Gavrancic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "204",
                                        "name": "Nemanja Vidic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "205",
                                        "name": "Mladen Krstajic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "206",
                                        "name": "Ivica Dragutinovic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "207",
                                        "name": "Igor Duljaj (Serbia and Montenegro)"
                                },
                                {
                                        "code": "208",
                                        "name": "Predrag Djordjevic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "209",
                                        "name": "Dejan Stankovic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "210",
                                        "name": "Ognjen Koroman (Serbia and Montenegro)"
                                },
                                {
                                        "code": "211",
                                        "name": "Mateja Kezman (Serbia and Montenegro)"
                                },
                                {
                                        "code": "212",
                                        "name": "Savo Milosevic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "213",
                                        "name": "Nikola Zigic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "214",
                                        "name": "Danijel Ljuboja (Serbia and Montenegro)"
                                },
                                {
                                        "code": "215",
                                        "name": "Zvonimir Vukic (Serbia and Montenegro)"
                                },
                                {
                                        "code": "216",
                                        "name": "Albert Nadj (Serbia and Montenegro)"
                                },
                                {
                                        "code": "217",
                                        "name": "Oliver Kovacevic (Serbia and Montenegro)"
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
                                        "code": "218",
                                        "name": "Netherlands Badge"
                                },
                                {
                                        "code": "219",
                                        "name": "Netherlands Team Photo"
                                },
                                {
                                        "code": "220",
                                        "name": "Edwin van der Sar (Netherlands)"
                                },
                                {
                                        "code": "221",
                                        "name": "Jan Kromkamp (Netherlands)"
                                },
                                {
                                        "code": "222",
                                        "name": "Andre Ooijer (Netherlands)"
                                },
                                {
                                        "code": "223",
                                        "name": "Joris Mathijsen (Netherlands)"
                                },
                                {
                                        "code": "224",
                                        "name": "Giovanni van Bronckhorst (Netherlands)"
                                },
                                {
                                        "code": "225",
                                        "name": "Mark van Bommel (Netherlands)"
                                },
                                {
                                        "code": "226",
                                        "name": "Wesley Sneijder (Netherlands)"
                                },
                                {
                                        "code": "227",
                                        "name": "Phillip Cocu (Netherlands)"
                                },
                                {
                                        "code": "228",
                                        "name": "Arjen Robben (Netherlands)"
                                },
                                {
                                        "code": "229",
                                        "name": "Ruud van Nistelrooy (Netherlands)"
                                },
                                {
                                        "code": "230",
                                        "name": "Robin van Persie (Netherlands)"
                                },
                                {
                                        "code": "231",
                                        "name": "Dirk Kuyt (Netherlands)"
                                },
                                {
                                        "code": "232",
                                        "name": "Rafael van der Vaart (Netherlands)"
                                },
                                {
                                        "code": "233",
                                        "name": "John Heitinga (Netherlands)"
                                },
                                {
                                        "code": "234",
                                        "name": "Hedwiges Maduro (Netherlands)"
                                },
                                {
                                        "code": "235",
                                        "name": "Tim de Cler (Netherlands)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "MEX",
                        "name": "Mexico",
                        "flags": [
                                "mx"
                        ],
                        "stickers": [
                                {
                                        "code": "236",
                                        "name": "Mexico Badge"
                                },
                                {
                                        "code": "237",
                                        "name": "Mexico Team Photo"
                                },
                                {
                                        "code": "238",
                                        "name": "Oswaldo Sanchez (Mexico)"
                                },
                                {
                                        "code": "239",
                                        "name": "Carlos Salcido (Mexico)"
                                },
                                {
                                        "code": "240",
                                        "name": "Rafael Marquez (Mexico)"
                                },
                                {
                                        "code": "241",
                                        "name": "Ricardo Osorio (Mexico)"
                                },
                                {
                                        "code": "242",
                                        "name": "Mario Mendez (Mexico)"
                                },
                                {
                                        "code": "243",
                                        "name": "Pavel Pardo (Mexico)"
                                },
                                {
                                        "code": "244",
                                        "name": "Gerardo Torrado (Mexico)"
                                },
                                {
                                        "code": "245",
                                        "name": "Zinha (Mexico)"
                                },
                                {
                                        "code": "246",
                                        "name": "Ramon Morales (Mexico)"
                                },
                                {
                                        "code": "247",
                                        "name": "Jared Borgetti (Mexico)"
                                },
                                {
                                        "code": "248",
                                        "name": "Guillermo Franco (Mexico)"
                                },
                                {
                                        "code": "249",
                                        "name": "Omar Bravo (Mexico)"
                                },
                                {
                                        "code": "250",
                                        "name": "Francisco Fonseca (Mexico)"
                                },
                                {
                                        "code": "251",
                                        "name": "Jesus Arellano (Mexico)"
                                },
                                {
                                        "code": "252",
                                        "name": "Jose Antonio Castro (Mexico)"
                                },
                                {
                                        "code": "253",
                                        "name": "Jose de Jesus Corona (Mexico)"
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
                                        "code": "254",
                                        "name": "Iran Badge"
                                },
                                {
                                        "code": "255",
                                        "name": "Iran Team Photo"
                                },
                                {
                                        "code": "256",
                                        "name": "Ebrahim Mirzapour (Iran)"
                                },
                                {
                                        "code": "257",
                                        "name": "Yahya Golmohammadi (Iran)"
                                },
                                {
                                        "code": "258",
                                        "name": "Rahman Rezaei (Iran)"
                                },
                                {
                                        "code": "259",
                                        "name": "Hossein Kaebi (Iran)"
                                },
                                {
                                        "code": "260",
                                        "name": "Mohammad Nosrati (Iran)"
                                },
                                {
                                        "code": "261",
                                        "name": "Javad Nekounam (Iran)"
                                },
                                {
                                        "code": "262",
                                        "name": "Andranik Teymourian (Iran)"
                                },
                                {
                                        "code": "263",
                                        "name": "Mehdi Mahdavikia (Iran)"
                                },
                                {
                                        "code": "264",
                                        "name": "Ali Karimi (Iran)"
                                },
                                {
                                        "code": "265",
                                        "name": "Vahid Hashemian (Iran)"
                                },
                                {
                                        "code": "266",
                                        "name": "Ali Daei (Iran)"
                                },
                                {
                                        "code": "267",
                                        "name": "Ferydoon Zandi (Iran)"
                                },
                                {
                                        "code": "268",
                                        "name": "Arash Borhani (Iran)"
                                },
                                {
                                        "code": "269",
                                        "name": "Rasoul Khatibi (Iran)"
                                },
                                {
                                        "code": "270",
                                        "name": "Masoud Shojaei (Iran)"
                                },
                                {
                                        "code": "271",
                                        "name": "Hassan Roudbarian (Iran)"
                                }
                        ]
                },
                {
                        "code": "ANG",
                        "name": "Angola",
                        "flags": [
                                "ao"
                        ],
                        "stickers": [
                                {
                                        "code": "272",
                                        "name": "Angola Badge"
                                },
                                {
                                        "code": "273",
                                        "name": "Angola Team Photo"
                                },
                                {
                                        "code": "274",
                                        "name": "Joao Ricardo (Angola)"
                                },
                                {
                                        "code": "275",
                                        "name": "Loco (Angola)"
                                },
                                {
                                        "code": "276",
                                        "name": "Jamba (Angola)"
                                },
                                {
                                        "code": "277",
                                        "name": "Kali (Angola)"
                                },
                                {
                                        "code": "278",
                                        "name": "Delgado (Angola)"
                                },
                                {
                                        "code": "279",
                                        "name": "Andre Macanga (Angola)"
                                },
                                {
                                        "code": "280",
                                        "name": "Ze Kalanga (Angola)"
                                },
                                {
                                        "code": "281",
                                        "name": "Figueiredo (Angola)"
                                },
                                {
                                        "code": "282",
                                        "name": "Mendonca (Angola)"
                                },
                                {
                                        "code": "283",
                                        "name": "Akwa (Angola)"
                                },
                                {
                                        "code": "284",
                                        "name": "Mantorras (Angola)"
                                },
                                {
                                        "code": "285",
                                        "name": "Love (Angola)"
                                },
                                {
                                        "code": "286",
                                        "name": "Mateus (Angola)"
                                },
                                {
                                        "code": "287",
                                        "name": "Flavio Amado (Angola)"
                                },
                                {
                                        "code": "288",
                                        "name": "Miloy (Angola)"
                                },
                                {
                                        "code": "289",
                                        "name": "Mario Hipolito (Angola)"
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
                                        "code": "290",
                                        "name": "Portugal Badge"
                                },
                                {
                                        "code": "291",
                                        "name": "Portugal Team Photo"
                                },
                                {
                                        "code": "292",
                                        "name": "Ricardo Pereira (Portugal)"
                                },
                                {
                                        "code": "293",
                                        "name": "Miguel Monteiro (Portugal)"
                                },
                                {
                                        "code": "294",
                                        "name": "Ricardo Carvalho (Portugal)"
                                },
                                {
                                        "code": "295",
                                        "name": "Fernando Meira (Portugal)"
                                },
                                {
                                        "code": "296",
                                        "name": "Nuno Valente (Portugal)"
                                },
                                {
                                        "code": "297",
                                        "name": "Costinha (Portugal)"
                                },
                                {
                                        "code": "298",
                                        "name": "Maniche (Portugal)"
                                },
                                {
                                        "code": "299",
                                        "name": "Deco (Portugal)"
                                },
                                {
                                        "code": "300",
                                        "name": "Luis Figo (Portugal)"
                                },
                                {
                                        "code": "301",
                                        "name": "Cristiano Ronaldo (Portugal)"
                                },
                                {
                                        "code": "302",
                                        "name": "Pauleta (Portugal)"
                                },
                                {
                                        "code": "303",
                                        "name": "Simao Sabrosa (Portugal)"
                                },
                                {
                                        "code": "304",
                                        "name": "Tiago Mendes (Portugal)"
                                },
                                {
                                        "code": "305",
                                        "name": "Petit (Portugal)"
                                },
                                {
                                        "code": "306",
                                        "name": "Helder Postiga (Portugal)"
                                },
                                {
                                        "code": "307",
                                        "name": "Quim Silva (Portugal)"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "308",
                                        "name": "Italy Badge"
                                },
                                {
                                        "code": "309",
                                        "name": "Italy Team Photo"
                                },
                                {
                                        "code": "310",
                                        "name": "Gianluigi Buffon (Italy)"
                                },
                                {
                                        "code": "311",
                                        "name": "Gianluca Zambrotta (Italy)"
                                },
                                {
                                        "code": "312",
                                        "name": "Fabio Cannavaro (Italy)"
                                },
                                {
                                        "code": "313",
                                        "name": "Alessandro Nesta (Italy)"
                                },
                                {
                                        "code": "314",
                                        "name": "Fabio Grosso (Italy)"
                                },
                                {
                                        "code": "315",
                                        "name": "Mauro Camoranesi (Italy)"
                                },
                                {
                                        "code": "316",
                                        "name": "Gennaro Gattuso (Italy)"
                                },
                                {
                                        "code": "317",
                                        "name": "Andrea Pirlo (Italy)"
                                },
                                {
                                        "code": "318",
                                        "name": "Simone Perrotta (Italy)"
                                },
                                {
                                        "code": "319",
                                        "name": "Francesco Totti (Italy)"
                                },
                                {
                                        "code": "320",
                                        "name": "Luca Toni (Italy)"
                                },
                                {
                                        "code": "321",
                                        "name": "Alessandro Del Piero (Italy)"
                                },
                                {
                                        "code": "322",
                                        "name": "Filippo Inzaghi (Italy)"
                                },
                                {
                                        "code": "323",
                                        "name": "Alberto Gilardino (Italy)"
                                },
                                {
                                        "code": "324",
                                        "name": "Marco Materazzi (Italy)"
                                },
                                {
                                        "code": "325",
                                        "name": "Angelo Peruzzi (Italy)"
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
                                        "code": "326",
                                        "name": "Ghana Badge"
                                },
                                {
                                        "code": "327",
                                        "name": "Ghana Team Photo"
                                },
                                {
                                        "code": "328",
                                        "name": "Richard Kingson (Ghana)"
                                },
                                {
                                        "code": "329",
                                        "name": "John Paintsil (Ghana)"
                                },
                                {
                                        "code": "330",
                                        "name": "Samuel Kuffour (Ghana)"
                                },
                                {
                                        "code": "331",
                                        "name": "John Mensah (Ghana)"
                                },
                                {
                                        "code": "332",
                                        "name": "Emmanuel Pappoe (Ghana)"
                                },
                                {
                                        "code": "333",
                                        "name": "Michael Essien (Ghana)"
                                },
                                {
                                        "code": "334",
                                        "name": "Stephen Appiah (Ghana)"
                                },
                                {
                                        "code": "335",
                                        "name": "Sulley Muntari (Ghana)"
                                },
                                {
                                        "code": "336",
                                        "name": "Haminu Draman (Ghana)"
                                },
                                {
                                        "code": "337",
                                        "name": "Asamoah Gyan (Ghana)"
                                },
                                {
                                        "code": "338",
                                        "name": "Matthew Amoah (Ghana)"
                                },
                                {
                                        "code": "339",
                                        "name": "Razak Pimpong (Ghana)"
                                },
                                {
                                        "code": "340",
                                        "name": "Derek Boateng (Ghana)"
                                },
                                {
                                        "code": "341",
                                        "name": "Otto Addo (Ghana)"
                                },
                                {
                                        "code": "342",
                                        "name": "Alex Tachie-Mensah (Ghana)"
                                },
                                {
                                        "code": "343",
                                        "name": "George Owu (Ghana)"
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
                                        "code": "344",
                                        "name": "United States Badge"
                                },
                                {
                                        "code": "345",
                                        "name": "United States Team Photo"
                                },
                                {
                                        "code": "346",
                                        "name": "Kasey Keller (United States)"
                                },
                                {
                                        "code": "347",
                                        "name": "Steve Cherundolo (United States)"
                                },
                                {
                                        "code": "348",
                                        "name": "Oguchi Onyewu (United States)"
                                },
                                {
                                        "code": "349",
                                        "name": "Eddie Pope (United States)"
                                },
                                {
                                        "code": "350",
                                        "name": "Eddie Lewis (United States)"
                                },
                                {
                                        "code": "351",
                                        "name": "Pablo Mastroeni (United States)"
                                },
                                {
                                        "code": "352",
                                        "name": "Claudio Reyna (United States)"
                                },
                                {
                                        "code": "353",
                                        "name": "John O'Brien (United States)"
                                },
                                {
                                        "code": "354",
                                        "name": "Bobby Convey (United States)"
                                },
                                {
                                        "code": "355",
                                        "name": "Landon Donovan (United States)"
                                },
                                {
                                        "code": "356",
                                        "name": "Brian McBride (United States)"
                                },
                                {
                                        "code": "357",
                                        "name": "Clint Dempsey (United States)"
                                },
                                {
                                        "code": "358",
                                        "name": "DaMarcus Beasley (United States)"
                                },
                                {
                                        "code": "359",
                                        "name": "Eddie Johnson (United States)"
                                },
                                {
                                        "code": "360",
                                        "name": "Jimmy Conrad (United States)"
                                },
                                {
                                        "code": "361",
                                        "name": "Tim Howard (United States)"
                                }
                        ]
                },
                {
                        "code": "CZE",
                        "name": "Czech Republic",
                        "flags": [
                                "cz"
                        ],
                        "stickers": [
                                {
                                        "code": "362",
                                        "name": "Czech Republic Badge"
                                },
                                {
                                        "code": "363",
                                        "name": "Czech Republic Team Photo"
                                },
                                {
                                        "code": "364",
                                        "name": "Petr Cech (Czech Republic)"
                                },
                                {
                                        "code": "365",
                                        "name": "Zdenek Grygera (Czech Republic)"
                                },
                                {
                                        "code": "366",
                                        "name": "Tomas Ujfalusi (Czech Republic)"
                                },
                                {
                                        "code": "367",
                                        "name": "David Rozehnal (Czech Republic)"
                                },
                                {
                                        "code": "368",
                                        "name": "Marek Jankulovski (Czech Republic)"
                                },
                                {
                                        "code": "369",
                                        "name": "Karel Poborsky (Czech Republic)"
                                },
                                {
                                        "code": "370",
                                        "name": "Tomas Rosicky (Czech Republic)"
                                },
                                {
                                        "code": "371",
                                        "name": "Pavel Nedved (Czech Republic)"
                                },
                                {
                                        "code": "372",
                                        "name": "Jan Polak (Czech Republic)"
                                },
                                {
                                        "code": "373",
                                        "name": "Milan Baros (Czech Republic)"
                                },
                                {
                                        "code": "374",
                                        "name": "Jan Koller (Czech Republic)"
                                },
                                {
                                        "code": "375",
                                        "name": "Jiri Stajner (Czech Republic)"
                                },
                                {
                                        "code": "376",
                                        "name": "Vratislav Lokvenc (Czech Republic)"
                                },
                                {
                                        "code": "377",
                                        "name": "Jaroslav Plasil (Czech Republic)"
                                },
                                {
                                        "code": "378",
                                        "name": "Libor Sionko (Czech Republic)"
                                },
                                {
                                        "code": "379",
                                        "name": "Jaromir Blazek (Czech Republic)"
                                }
                        ]
                }
        ],
        "Group F": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "380",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "381",
                                        "name": "Brazil Team Photo"
                                },
                                {
                                        "code": "382",
                                        "name": "Dida (Brazil)"
                                },
                                {
                                        "code": "383",
                                        "name": "Cafu (Brazil)"
                                },
                                {
                                        "code": "384",
                                        "name": "Lucio (Brazil)"
                                },
                                {
                                        "code": "385",
                                        "name": "Juan (Brazil)"
                                },
                                {
                                        "code": "386",
                                        "name": "Roberto Carlos (Brazil)"
                                },
                                {
                                        "code": "387",
                                        "name": "Emerson (Brazil)"
                                },
                                {
                                        "code": "388",
                                        "name": "Ze Roberto (Brazil)"
                                },
                                {
                                        "code": "389",
                                        "name": "Kaka (Brazil)"
                                },
                                {
                                        "code": "390",
                                        "name": "Ronaldinho (Brazil)"
                                },
                                {
                                        "code": "391",
                                        "name": "Adriano (Brazil)"
                                },
                                {
                                        "code": "392",
                                        "name": "Ronaldo (Brazil)"
                                },
                                {
                                        "code": "393",
                                        "name": "Robinho (Brazil)"
                                },
                                {
                                        "code": "394",
                                        "name": "Juninho Pernambucano (Brazil)"
                                },
                                {
                                        "code": "395",
                                        "name": "Gilberto Silva (Brazil)"
                                },
                                {
                                        "code": "396",
                                        "name": "Cicinho (Brazil)"
                                },
                                {
                                        "code": "397",
                                        "name": "Rogerio Ceni (Brazil)"
                                }
                        ]
                },
                {
                        "code": "CRO",
                        "name": "Croatia",
                        "flags": [
                                "hr"
                        ],
                        "stickers": [
                                {
                                        "code": "398",
                                        "name": "Croatia Badge"
                                },
                                {
                                        "code": "399",
                                        "name": "Croatia Team Photo"
                                },
                                {
                                        "code": "400",
                                        "name": "Stipe Pletikosa (Croatia)"
                                },
                                {
                                        "code": "401",
                                        "name": "Dario Simic (Croatia)"
                                },
                                {
                                        "code": "402",
                                        "name": "Robert Kovac (Croatia)"
                                },
                                {
                                        "code": "403",
                                        "name": "Josip Simunic (Croatia)"
                                },
                                {
                                        "code": "404",
                                        "name": "Darijo Srna (Croatia)"
                                },
                                {
                                        "code": "405",
                                        "name": "Igor Tudor (Croatia)"
                                },
                                {
                                        "code": "406",
                                        "name": "Niko Kovac (Croatia)"
                                },
                                {
                                        "code": "407",
                                        "name": "Marko Babic (Croatia)"
                                },
                                {
                                        "code": "408",
                                        "name": "Niko Kranjcar (Croatia)"
                                },
                                {
                                        "code": "409",
                                        "name": "Dado Prso (Croatia)"
                                },
                                {
                                        "code": "410",
                                        "name": "Ivan Klasnic (Croatia)"
                                },
                                {
                                        "code": "411",
                                        "name": "Ivica Olic (Croatia)"
                                },
                                {
                                        "code": "412",
                                        "name": "Luka Modric (Croatia)"
                                },
                                {
                                        "code": "413",
                                        "name": "Jerko Leko (Croatia)"
                                },
                                {
                                        "code": "414",
                                        "name": "Ivan Bosnjak (Croatia)"
                                },
                                {
                                        "code": "415",
                                        "name": "Tomislav Butina (Croatia)"
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
                                        "code": "416",
                                        "name": "Australia Badge"
                                },
                                {
                                        "code": "417",
                                        "name": "Australia Team Photo"
                                },
                                {
                                        "code": "418",
                                        "name": "Mark Schwarzer (Australia)"
                                },
                                {
                                        "code": "419",
                                        "name": "Brett Emerton (Australia)"
                                },
                                {
                                        "code": "420",
                                        "name": "Lucas Neill (Australia)"
                                },
                                {
                                        "code": "421",
                                        "name": "Craig Moore (Australia)"
                                },
                                {
                                        "code": "422",
                                        "name": "Scott Chipperfield (Australia)"
                                },
                                {
                                        "code": "423",
                                        "name": "Vince Grella (Australia)"
                                },
                                {
                                        "code": "424",
                                        "name": "Jason Culina (Australia)"
                                },
                                {
                                        "code": "425",
                                        "name": "Marco Bresciano (Australia)"
                                },
                                {
                                        "code": "426",
                                        "name": "Tim Cahill (Australia)"
                                },
                                {
                                        "code": "427",
                                        "name": "Harry Kewell (Australia)"
                                },
                                {
                                        "code": "428",
                                        "name": "Mark Viduka (Australia)"
                                },
                                {
                                        "code": "429",
                                        "name": "John Aloisi (Australia)"
                                },
                                {
                                        "code": "430",
                                        "name": "Archie Thompson (Australia)"
                                },
                                {
                                        "code": "431",
                                        "name": "Mile Sterjovski (Australia)"
                                },
                                {
                                        "code": "432",
                                        "name": "Luke Wilkshire (Australia)"
                                },
                                {
                                        "code": "433",
                                        "name": "Zeljko Kalac (Australia)"
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
                                        "code": "434",
                                        "name": "Japan Badge"
                                },
                                {
                                        "code": "435",
                                        "name": "Japan Team Photo"
                                },
                                {
                                        "code": "436",
                                        "name": "Yoshikatsu Kawaguchi (Japan)"
                                },
                                {
                                        "code": "437",
                                        "name": "Akira Kaji (Japan)"
                                },
                                {
                                        "code": "438",
                                        "name": "Tsuneyasu Miyamoto (Japan)"
                                },
                                {
                                        "code": "439",
                                        "name": "Yuji Nakazawa (Japan)"
                                },
                                {
                                        "code": "440",
                                        "name": "Alessandro Santos (Japan)"
                                },
                                {
                                        "code": "441",
                                        "name": "Takashi Fukunishi (Japan)"
                                },
                                {
                                        "code": "442",
                                        "name": "Hidetoshi Nakata (Japan)"
                                },
                                {
                                        "code": "443",
                                        "name": "Shunsuke Nakamura (Japan)"
                                },
                                {
                                        "code": "444",
                                        "name": "Mitsuo Ogasawara (Japan)"
                                },
                                {
                                        "code": "445",
                                        "name": "Naohiro Takahara (Japan)"
                                },
                                {
                                        "code": "446",
                                        "name": "Atsushi Yanagisawa (Japan)"
                                },
                                {
                                        "code": "447",
                                        "name": "Masashi Oguro (Japan)"
                                },
                                {
                                        "code": "448",
                                        "name": "Keisuke Tsuboi (Japan)"
                                },
                                {
                                        "code": "449",
                                        "name": "Shinji Ono (Japan)"
                                },
                                {
                                        "code": "450",
                                        "name": "Koji Nakata (Japan)"
                                },
                                {
                                        "code": "451",
                                        "name": "Seigo Narazaki (Japan)"
                                }
                        ]
                }
        ],
        "Group G": [
                {
                        "code": "FRA",
                        "name": "France",
                        "flags": [
                                "fr"
                        ],
                        "stickers": [
                                {
                                        "code": "452",
                                        "name": "France Badge"
                                },
                                {
                                        "code": "453",
                                        "name": "France Team Photo"
                                },
                                {
                                        "code": "454",
                                        "name": "Fabien Barthez (France)"
                                },
                                {
                                        "code": "455",
                                        "name": "Willy Sagnol (France)"
                                },
                                {
                                        "code": "456",
                                        "name": "Lilian Thuram (France)"
                                },
                                {
                                        "code": "457",
                                        "name": "William Gallas (France)"
                                },
                                {
                                        "code": "458",
                                        "name": "Eric Abidal (France)"
                                },
                                {
                                        "code": "459",
                                        "name": "Patrick Vieira (France)"
                                },
                                {
                                        "code": "460",
                                        "name": "Claude Makelele (France)"
                                },
                                {
                                        "code": "461",
                                        "name": "Zinedine Zidane (France)"
                                },
                                {
                                        "code": "462",
                                        "name": "Florent Malouda (France)"
                                },
                                {
                                        "code": "463",
                                        "name": "Thierry Henry (France)"
                                },
                                {
                                        "code": "464",
                                        "name": "Franck Ribery (France)"
                                },
                                {
                                        "code": "465",
                                        "name": "David Trezeguet (France)"
                                },
                                {
                                        "code": "466",
                                        "name": "Sylvain Wiltord (France)"
                                },
                                {
                                        "code": "467",
                                        "name": "Alou Diarra (France)"
                                },
                                {
                                        "code": "468",
                                        "name": "Vikash Dhorasoo (France)"
                                },
                                {
                                        "code": "469",
                                        "name": "Gregory Coupet (France)"
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
                                        "code": "470",
                                        "name": "Switzerland Badge"
                                },
                                {
                                        "code": "471",
                                        "name": "Switzerland Team Photo"
                                },
                                {
                                        "code": "472",
                                        "name": "Pascal Zuberbühler (Switzerland)"
                                },
                                {
                                        "code": "473",
                                        "name": "Philipp Degen (Switzerland)"
                                },
                                {
                                        "code": "474",
                                        "name": "Patrick Müller (Switzerland)"
                                },
                                {
                                        "code": "475",
                                        "name": "Philippe Senderos (Switzerland)"
                                },
                                {
                                        "code": "476",
                                        "name": "Ludovic Magnin (Switzerland)"
                                },
                                {
                                        "code": "477",
                                        "name": "Tranquillo Barnetta (Switzerland)"
                                },
                                {
                                        "code": "478",
                                        "name": "Johann Vogel (Switzerland)"
                                },
                                {
                                        "code": "479",
                                        "name": "Raphael Wicky (Switzerland)"
                                },
                                {
                                        "code": "480",
                                        "name": "Ricardo Cabanas (Switzerland)"
                                },
                                {
                                        "code": "481",
                                        "name": "Alexander Frei (Switzerland)"
                                },
                                {
                                        "code": "482",
                                        "name": "Marco Streller (Switzerland)"
                                },
                                {
                                        "code": "483",
                                        "name": "Johan Vonlanthen (Switzerland)"
                                },
                                {
                                        "code": "484",
                                        "name": "Valon Behrami (Switzerland)"
                                },
                                {
                                        "code": "485",
                                        "name": "Hakan Yakin (Switzerland)"
                                },
                                {
                                        "code": "486",
                                        "name": "David Degen (Switzerland)"
                                },
                                {
                                        "code": "487",
                                        "name": "Fabio Coltorti (Switzerland)"
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
                                        "code": "488",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "489",
                                        "name": "South Korea Team Photo"
                                },
                                {
                                        "code": "490",
                                        "name": "Lee Woon-jae (South Korea)"
                                },
                                {
                                        "code": "491",
                                        "name": "Song Chong-gug (South Korea)"
                                },
                                {
                                        "code": "492",
                                        "name": "Choi Jin-cheul (South Korea)"
                                },
                                {
                                        "code": "493",
                                        "name": "Kim Young-chul (South Korea)"
                                },
                                {
                                        "code": "494",
                                        "name": "Lee Young-pyo (South Korea)"
                                },
                                {
                                        "code": "495",
                                        "name": "Lee Ho (South Korea)"
                                },
                                {
                                        "code": "496",
                                        "name": "Kim Nam-il (South Korea)"
                                },
                                {
                                        "code": "497",
                                        "name": "Park Ji-sung (South Korea)"
                                },
                                {
                                        "code": "498",
                                        "name": "Lee Eul-yong (South Korea)"
                                },
                                {
                                        "code": "499",
                                        "name": "Lee Chun-soo (South Korea)"
                                },
                                {
                                        "code": "500",
                                        "name": "Cho Jae-jin (South Korea)"
                                },
                                {
                                        "code": "501",
                                        "name": "Ahn Jung-hwan (South Korea)"
                                },
                                {
                                        "code": "502",
                                        "name": "Park Chu-young (South Korea)"
                                },
                                {
                                        "code": "503",
                                        "name": "Seol Ki-hyeon (South Korea)"
                                },
                                {
                                        "code": "504",
                                        "name": "Kim Do-heon (South Korea)"
                                },
                                {
                                        "code": "505",
                                        "name": "Kim Yong-dae (South Korea)"
                                }
                        ]
                },
                {
                        "code": "TOG",
                        "name": "Togo",
                        "flags": [
                                "tg"
                        ],
                        "stickers": [
                                {
                                        "code": "506",
                                        "name": "Togo Badge"
                                },
                                {
                                        "code": "507",
                                        "name": "Togo Team Photo"
                                },
                                {
                                        "code": "508",
                                        "name": "Kossi Agassa (Togo)"
                                },
                                {
                                        "code": "509",
                                        "name": "Dare Nibombe (Togo)"
                                },
                                {
                                        "code": "510",
                                        "name": "Jean-Paul Abalo (Togo)"
                                },
                                {
                                        "code": "511",
                                        "name": "Ludovic Assemoassa (Togo)"
                                },
                                {
                                        "code": "512",
                                        "name": "Richmond Forson (Togo)"
                                },
                                {
                                        "code": "513",
                                        "name": "Alaixys Romao (Togo)"
                                },
                                {
                                        "code": "514",
                                        "name": "Kuami Agboh (Togo)"
                                },
                                {
                                        "code": "515",
                                        "name": "Cherif Toure Mamam (Togo)"
                                },
                                {
                                        "code": "516",
                                        "name": "Yao Aziawonou (Togo)"
                                },
                                {
                                        "code": "517",
                                        "name": "Emmanuel Adebayor (Togo)"
                                },
                                {
                                        "code": "518",
                                        "name": "Mohamed Kader (Togo)"
                                },
                                {
                                        "code": "519",
                                        "name": "Junior Senaya (Togo)"
                                },
                                {
                                        "code": "520",
                                        "name": "Thomas Dossevi (Togo)"
                                },
                                {
                                        "code": "521",
                                        "name": "Massamasso Tchangai (Togo)"
                                },
                                {
                                        "code": "522",
                                        "name": "Moustapha Salifou (Togo)"
                                },
                                {
                                        "code": "523",
                                        "name": "Nimini Tchagnirou (Togo)"
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
                                        "code": "524",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "525",
                                        "name": "Spain Team Photo"
                                },
                                {
                                        "code": "526",
                                        "name": "Iker Casillas (Spain)"
                                },
                                {
                                        "code": "527",
                                        "name": "Sergio Ramos (Spain)"
                                },
                                {
                                        "code": "528",
                                        "name": "Carles Puyol (Spain)"
                                },
                                {
                                        "code": "529",
                                        "name": "Pablo Ibanez (Spain)"
                                },
                                {
                                        "code": "530",
                                        "name": "Mariano Pernia (Spain)"
                                },
                                {
                                        "code": "531",
                                        "name": "Marcos Senna (Spain)"
                                },
                                {
                                        "code": "532",
                                        "name": "Xavi Hernandez (Spain)"
                                },
                                {
                                        "code": "533",
                                        "name": "Xabi Alonso (Spain)"
                                },
                                {
                                        "code": "534",
                                        "name": "Cesc Fabregas (Spain)"
                                },
                                {
                                        "code": "535",
                                        "name": "Fernando Torres (Spain)"
                                },
                                {
                                        "code": "536",
                                        "name": "David Villa (Spain)"
                                },
                                {
                                        "code": "537",
                                        "name": "Raul Gonzalez (Spain)"
                                },
                                {
                                        "code": "538",
                                        "name": "Joaquin Sanchez (Spain)"
                                },
                                {
                                        "code": "539",
                                        "name": "Luis Garcia (Spain)"
                                },
                                {
                                        "code": "540",
                                        "name": "Andres Iniesta (Spain)"
                                },
                                {
                                        "code": "541",
                                        "name": "Santiago Canizares (Spain)"
                                }
                        ]
                },
                {
                        "code": "UKR",
                        "name": "Ukraine",
                        "flags": [
                                "ua"
                        ],
                        "stickers": [
                                {
                                        "code": "542",
                                        "name": "Ukraine Badge"
                                },
                                {
                                        "code": "543",
                                        "name": "Ukraine Team Photo"
                                },
                                {
                                        "code": "544",
                                        "name": "Oleksandr Shovkovskiy (Ukraine)"
                                },
                                {
                                        "code": "545",
                                        "name": "Oleg Gusev (Ukraine)"
                                },
                                {
                                        "code": "546",
                                        "name": "Andriy Rusol (Ukraine)"
                                },
                                {
                                        "code": "547",
                                        "name": "Vladyslav Vashchuk (Ukraine)"
                                },
                                {
                                        "code": "548",
                                        "name": "Andriy Nesmachniy (Ukraine)"
                                },
                                {
                                        "code": "549",
                                        "name": "Anatoliy Tymoshchuk (Ukraine)"
                                },
                                {
                                        "code": "550",
                                        "name": "Oleg Shelayev (Ukraine)"
                                },
                                {
                                        "code": "551",
                                        "name": "Serhiy Rebrov (Ukraine)"
                                },
                                {
                                        "code": "552",
                                        "name": "Maksym Kalynychenko (Ukraine)"
                                },
                                {
                                        "code": "553",
                                        "name": "Andriy Shevchenko (Ukraine)"
                                },
                                {
                                        "code": "554",
                                        "name": "Andriy Voronin (Ukraine)"
                                },
                                {
                                        "code": "555",
                                        "name": "Artem Milevskiy (Ukraine)"
                                },
                                {
                                        "code": "556",
                                        "name": "Andriy Vorobey (Ukraine)"
                                },
                                {
                                        "code": "557",
                                        "name": "Ruslan Rotan (Ukraine)"
                                },
                                {
                                        "code": "558",
                                        "name": "Serhiy Nazarenko (Ukraine)"
                                },
                                {
                                        "code": "559",
                                        "name": "Bohdan Shust (Ukraine)"
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
                                        "code": "560",
                                        "name": "Tunisia Badge"
                                },
                                {
                                        "code": "561",
                                        "name": "Tunisia Team Photo"
                                },
                                {
                                        "code": "562",
                                        "name": "Ali Boumnijel (Tunisia)"
                                },
                                {
                                        "code": "563",
                                        "name": "Hatem Trabelsi (Tunisia)"
                                },
                                {
                                        "code": "564",
                                        "name": "Radhi Jaidi (Tunisia)"
                                },
                                {
                                        "code": "565",
                                        "name": "Karim Haggui (Tunisia)"
                                },
                                {
                                        "code": "566",
                                        "name": "David Jemmali (Tunisia)"
                                },
                                {
                                        "code": "567",
                                        "name": "Riadh Bouazizi (Tunisia)"
                                },
                                {
                                        "code": "568",
                                        "name": "Jawhar Mnari (Tunisia)"
                                },
                                {
                                        "code": "569",
                                        "name": "Adel Chedli (Tunisia)"
                                },
                                {
                                        "code": "570",
                                        "name": "Kaies Ghodhbane (Tunisia)"
                                },
                                {
                                        "code": "571",
                                        "name": "Ziad Jaziri (Tunisia)"
                                },
                                {
                                        "code": "572",
                                        "name": "Francileudo Santos (Tunisia)"
                                },
                                {
                                        "code": "573",
                                        "name": "Yassine Chikhaoui (Tunisia)"
                                },
                                {
                                        "code": "574",
                                        "name": "Chaouki Ben Saada (Tunisia)"
                                },
                                {
                                        "code": "575",
                                        "name": "Hamed Namouchi (Tunisia)"
                                },
                                {
                                        "code": "576",
                                        "name": "Kais Zouaghi (Tunisia)"
                                },
                                {
                                        "code": "577",
                                        "name": "Hamdi Kasraoui (Tunisia)"
                                }
                        ]
                },
                {
                        "code": "KSA",
                        "name": "Saudi Arabia",
                        "flags": [
                                "sa"
                        ],
                        "stickers": [
                                {
                                        "code": "578",
                                        "name": "Saudi Arabia Badge"
                                },
                                {
                                        "code": "579",
                                        "name": "Saudi Arabia Team Photo"
                                },
                                {
                                        "code": "580",
                                        "name": "Mabrouk Zaid (Saudi Arabia)"
                                },
                                {
                                        "code": "581",
                                        "name": "Ahmed Dokhi (Saudi Arabia)"
                                },
                                {
                                        "code": "582",
                                        "name": "Redha Tukar (Saudi Arabia)"
                                },
                                {
                                        "code": "583",
                                        "name": "Hamad Al-Montashari (Saudi Arabia)"
                                },
                                {
                                        "code": "584",
                                        "name": "Hussein Abdulghani (Saudi Arabia)"
                                },
                                {
                                        "code": "585",
                                        "name": "Saud Khariri (Saudi Arabia)"
                                },
                                {
                                        "code": "586",
                                        "name": "Omar Al-Ghamdi (Saudi Arabia)"
                                },
                                {
                                        "code": "587",
                                        "name": "Khaled Aziz (Saudi Arabia)"
                                },
                                {
                                        "code": "588",
                                        "name": "Nawaf Al-Temyat (Saudi Arabia)"
                                },
                                {
                                        "code": "589",
                                        "name": "Yasser Al-Qahtani (Saudi Arabia)"
                                },
                                {
                                        "code": "590",
                                        "name": "Sami Al-Jaber (Saudi Arabia)"
                                },
                                {
                                        "code": "591",
                                        "name": "Mohammed Noor (Saudi Arabia)"
                                },
                                {
                                        "code": "592",
                                        "name": "Mohammad Al-Shalhoub (Saudi Arabia)"
                                },
                                {
                                        "code": "593",
                                        "name": "Malek Mouath (Saudi Arabia)"
                                },
                                {
                                        "code": "594",
                                        "name": "Abdulaziz Khathran (Saudi Arabia)"
                                },
                                {
                                        "code": "595",
                                        "name": "Mohammad Khouja (Saudi Arabia)"
                                }
                        ]
                }
        ],
        "Final & Celebration": [
                {
                        "code": "FINAL",
                        "name": "World Cup Roll of Honour & Celebration",
                        "stickers": [
                                {
                                        "code": "596",
                                        "name": "World Cup Roll of Honour & Celebration"
                                }
                        ]
                }
        ]
}
};

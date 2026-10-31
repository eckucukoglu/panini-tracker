// data/tournaments/wc1994.js
// Official Panini USA 94 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc1994'] = {
    id: 'wc1994',
    categoryId: 'fifa-world-cup',
    year: 1994,
    title: 'USA 94',
    subtitle: 'United States • 24 Teams • 444 Stickers',
    dbKey: 'panini1994',
    isSequential: true,
    totalStickers: 444,
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
                        "name": "Trophy, Mascot & Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "2",
                                        "name": "Official USA 94 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Striker the World Cup Pup (Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Rose Bowl (Pasadena / Los Angeles)"
                                },
                                {
                                        "code": "5",
                                        "name": "Stanford Stadium (Palo Alto / San Francisco)"
                                },
                                {
                                        "code": "6",
                                        "name": "Pontiac Silverdome (Detroit)"
                                },
                                {
                                        "code": "7",
                                        "name": "Giants Stadium (East Rutherford / New York)"
                                },
                                {
                                        "code": "8",
                                        "name": "Cotton Bowl (Dallas)"
                                },
                                {
                                        "code": "9",
                                        "name": "Soldier Field (Chicago)"
                                },
                                {
                                        "code": "10",
                                        "name": "Citrus Bowl (Orlando)"
                                },
                                {
                                        "code": "11",
                                        "name": "Foxboro Stadium (Boston)"
                                },
                                {
                                        "code": "12",
                                        "name": "Robert F. Kennedy Memorial Stadium (Washington D.C.)"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "USA",
                        "name": "United States",
                        "flags": [
                                "us"
                        ],
                        "stickers": [
                                {
                                        "code": "13",
                                        "name": "United States Badge"
                                },
                                {
                                        "code": "14",
                                        "name": "United States Team Photo"
                                },
                                {
                                        "code": "15",
                                        "name": "Tony Meola (United States)"
                                },
                                {
                                        "code": "16",
                                        "name": "Brad Friedel (United States)"
                                },
                                {
                                        "code": "17",
                                        "name": "Marcelo Balboa (United States)"
                                },
                                {
                                        "code": "18",
                                        "name": "Alexi Lalas (United States)"
                                },
                                {
                                        "code": "19",
                                        "name": "Thomas Dooley (United States)"
                                },
                                {
                                        "code": "20",
                                        "name": "Paul Caligiuri (United States)"
                                },
                                {
                                        "code": "21",
                                        "name": "Fernando Clavijo (United States)"
                                },
                                {
                                        "code": "22",
                                        "name": "Tab Ramos (United States)"
                                },
                                {
                                        "code": "23",
                                        "name": "John Harkes (United States)"
                                },
                                {
                                        "code": "24",
                                        "name": "Cobi Jones (United States)"
                                },
                                {
                                        "code": "25",
                                        "name": "Mike Sorber (United States)"
                                },
                                {
                                        "code": "26",
                                        "name": "Hugo Perez (United States)"
                                },
                                {
                                        "code": "27",
                                        "name": "Eric Wynalda (United States)"
                                },
                                {
                                        "code": "28",
                                        "name": "Earnie Stewart (United States)"
                                },
                                {
                                        "code": "29",
                                        "name": "Roy Wegerle (United States)"
                                },
                                {
                                        "code": "30",
                                        "name": "Frank Klopas (United States)"
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
                                        "code": "31",
                                        "name": "Switzerland Badge"
                                },
                                {
                                        "code": "32",
                                        "name": "Switzerland Team Photo"
                                },
                                {
                                        "code": "33",
                                        "name": "Marco Pascolo (Switzerland)"
                                },
                                {
                                        "code": "34",
                                        "name": "Stephan Lehmann (Switzerland)"
                                },
                                {
                                        "code": "35",
                                        "name": "Marc Hottiger (Switzerland)"
                                },
                                {
                                        "code": "36",
                                        "name": "Alain Geiger (Switzerland)"
                                },
                                {
                                        "code": "37",
                                        "name": "Yvan Quentin (Switzerland)"
                                },
                                {
                                        "code": "38",
                                        "name": "Dominique Herr (Switzerland)"
                                },
                                {
                                        "code": "39",
                                        "name": "Jurg Studer (Switzerland)"
                                },
                                {
                                        "code": "40",
                                        "name": "Ciriaco Sforza (Switzerland)"
                                },
                                {
                                        "code": "41",
                                        "name": "Georges Bregy (Switzerland)"
                                },
                                {
                                        "code": "42",
                                        "name": "Thomas Bickel (Switzerland)"
                                },
                                {
                                        "code": "43",
                                        "name": "Christophe Ohrel (Switzerland)"
                                },
                                {
                                        "code": "44",
                                        "name": "Alain Sutter (Switzerland)"
                                },
                                {
                                        "code": "45",
                                        "name": "Stephane Chapuisat (Switzerland)"
                                },
                                {
                                        "code": "46",
                                        "name": "Kubilay Turkyilmaz (Switzerland)"
                                },
                                {
                                        "code": "47",
                                        "name": "Adrian Knup (Switzerland)"
                                },
                                {
                                        "code": "48",
                                        "name": "Nestor Subiat (Switzerland)"
                                }
                        ]
                },
                {
                        "code": "COL",
                        "name": "Colombia",
                        "flags": [
                                "co"
                        ],
                        "stickers": [
                                {
                                        "code": "49",
                                        "name": "Colombia Badge"
                                },
                                {
                                        "code": "50",
                                        "name": "Colombia Team Photo"
                                },
                                {
                                        "code": "51",
                                        "name": "Oscar Cordoba (Colombia)"
                                },
                                {
                                        "code": "52",
                                        "name": "Farid Mondragon (Colombia)"
                                },
                                {
                                        "code": "53",
                                        "name": "Andres Escobar (Colombia)"
                                },
                                {
                                        "code": "54",
                                        "name": "Luis Carlos Perea (Colombia)"
                                },
                                {
                                        "code": "55",
                                        "name": "Luis Fernando Herrera (Colombia)"
                                },
                                {
                                        "code": "56",
                                        "name": "Wilson Perez (Colombia)"
                                },
                                {
                                        "code": "57",
                                        "name": "Alexis Mendoza (Colombia)"
                                },
                                {
                                        "code": "58",
                                        "name": "Leonel Alvarez (Colombia)"
                                },
                                {
                                        "code": "59",
                                        "name": "Gabriel Gomez (Colombia)"
                                },
                                {
                                        "code": "60",
                                        "name": "Carlos Valderrama (Colombia)"
                                },
                                {
                                        "code": "61",
                                        "name": "Freddy Rincon (Colombia)"
                                },
                                {
                                        "code": "62",
                                        "name": "Mauricio Serna (Colombia)"
                                },
                                {
                                        "code": "63",
                                        "name": "Faustino Asprilla (Colombia)"
                                },
                                {
                                        "code": "64",
                                        "name": "Adolfo Valencia (Colombia)"
                                },
                                {
                                        "code": "65",
                                        "name": "Antony de Avila (Colombia)"
                                },
                                {
                                        "code": "66",
                                        "name": "Victor Aristizabal (Colombia)"
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
                                        "code": "67",
                                        "name": "Romania Badge"
                                },
                                {
                                        "code": "68",
                                        "name": "Romania Team Photo"
                                },
                                {
                                        "code": "69",
                                        "name": "Bogdan Stelea (Romania)"
                                },
                                {
                                        "code": "70",
                                        "name": "Florin Prunea (Romania)"
                                },
                                {
                                        "code": "71",
                                        "name": "Dan Petrescu (Romania)"
                                },
                                {
                                        "code": "72",
                                        "name": "Gheorghe Popescu (Romania)"
                                },
                                {
                                        "code": "73",
                                        "name": "Daniel Prodan (Romania)"
                                },
                                {
                                        "code": "74",
                                        "name": "Miodrag Belodedici (Romania)"
                                },
                                {
                                        "code": "75",
                                        "name": "Tibor Selymes (Romania)"
                                },
                                {
                                        "code": "76",
                                        "name": "Gheorghe Hagi (Romania)"
                                },
                                {
                                        "code": "77",
                                        "name": "Dorinel Munteanu (Romania)"
                                },
                                {
                                        "code": "78",
                                        "name": "Ioan Lupescu (Romania)"
                                },
                                {
                                        "code": "79",
                                        "name": "Ilie Dumitrescu (Romania)"
                                },
                                {
                                        "code": "80",
                                        "name": "Basarab Panduru (Romania)"
                                },
                                {
                                        "code": "81",
                                        "name": "Florin Raducioiu (Romania)"
                                },
                                {
                                        "code": "82",
                                        "name": "Ion Vladoiu (Romania)"
                                },
                                {
                                        "code": "83",
                                        "name": "Gheorghe Mihali (Romania)"
                                },
                                {
                                        "code": "84",
                                        "name": "Constantin Galca (Romania)"
                                }
                        ]
                }
        ],
        "Group B": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "85",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "86",
                                        "name": "Brazil Team Photo"
                                },
                                {
                                        "code": "87",
                                        "name": "Taffarel (Brazil)"
                                },
                                {
                                        "code": "88",
                                        "name": "Zetti (Brazil)"
                                },
                                {
                                        "code": "89",
                                        "name": "Jorginho (Brazil)"
                                },
                                {
                                        "code": "90",
                                        "name": "Ricardo Rocha (Brazil)"
                                },
                                {
                                        "code": "91",
                                        "name": "Aldair (Brazil)"
                                },
                                {
                                        "code": "92",
                                        "name": "Marcio Santos (Brazil)"
                                },
                                {
                                        "code": "93",
                                        "name": "Branco (Brazil)"
                                },
                                {
                                        "code": "94",
                                        "name": "Cafu (Brazil)"
                                },
                                {
                                        "code": "95",
                                        "name": "Mauro Silva (Brazil)"
                                },
                                {
                                        "code": "96",
                                        "name": "Dunga (Brazil)"
                                },
                                {
                                        "code": "97",
                                        "name": "Rai (Brazil)"
                                },
                                {
                                        "code": "98",
                                        "name": "Mazinho (Brazil)"
                                },
                                {
                                        "code": "99",
                                        "name": "Zinho (Brazil)"
                                },
                                {
                                        "code": "100",
                                        "name": "Bebeto (Brazil)"
                                },
                                {
                                        "code": "101",
                                        "name": "Romario (Brazil)"
                                },
                                {
                                        "code": "102",
                                        "name": "Muller (Brazil)"
                                }
                        ]
                },
                {
                        "code": "RUS",
                        "name": "Russia",
                        "flags": [
                                "ru"
                        ],
                        "stickers": [
                                {
                                        "code": "103",
                                        "name": "Russia Badge"
                                },
                                {
                                        "code": "104",
                                        "name": "Russia Team Photo"
                                },
                                {
                                        "code": "105",
                                        "name": "Dmitriy Kharin (Russia)"
                                },
                                {
                                        "code": "106",
                                        "name": "Stanislav Cherchesov (Russia)"
                                },
                                {
                                        "code": "107",
                                        "name": "Viktor Onopko (Russia)"
                                },
                                {
                                        "code": "108",
                                        "name": "Yuriy Nikiforov (Russia)"
                                },
                                {
                                        "code": "109",
                                        "name": "Dmitriy Galiamin (Russia)"
                                },
                                {
                                        "code": "110",
                                        "name": "Sergei Gorlukovich (Russia)"
                                },
                                {
                                        "code": "111",
                                        "name": "Dmitriy Kuznetsov (Russia)"
                                },
                                {
                                        "code": "112",
                                        "name": "Igor Shalimov (Russia)"
                                },
                                {
                                        "code": "113",
                                        "name": "Aleksandr Mostovoy (Russia)"
                                },
                                {
                                        "code": "114",
                                        "name": "Valeriy Karpin (Russia)"
                                },
                                {
                                        "code": "115",
                                        "name": "Igor Dobrovolskiy (Russia)"
                                },
                                {
                                        "code": "116",
                                        "name": "Igor Kolyvanov (Russia)"
                                },
                                {
                                        "code": "117",
                                        "name": "Oleg Salenko (Russia)"
                                },
                                {
                                        "code": "118",
                                        "name": "Sergei Yuran (Russia)"
                                },
                                {
                                        "code": "119",
                                        "name": "Dmitri Radchenko (Russia)"
                                },
                                {
                                        "code": "120",
                                        "name": "Vladimir Beschastnykh (Russia)"
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
                                        "code": "121",
                                        "name": "Cameroon Badge"
                                },
                                {
                                        "code": "122",
                                        "name": "Cameroon Team Photo"
                                },
                                {
                                        "code": "123",
                                        "name": "Joseph-Antoine Bell (Cameroon)"
                                },
                                {
                                        "code": "124",
                                        "name": "Jacques Songo'o (Cameroon)"
                                },
                                {
                                        "code": "125",
                                        "name": "Stephen Tataw (Cameroon)"
                                },
                                {
                                        "code": "126",
                                        "name": "Rigobert Song (Cameroon)"
                                },
                                {
                                        "code": "127",
                                        "name": "Raymond Kalla (Cameroon)"
                                },
                                {
                                        "code": "128",
                                        "name": "Victor N'Dip (Cameroon)"
                                },
                                {
                                        "code": "129",
                                        "name": "Hans Agbo (Cameroon)"
                                },
                                {
                                        "code": "130",
                                        "name": "Thomas Libiih (Cameroon)"
                                },
                                {
                                        "code": "131",
                                        "name": "Marc-Vivien Foe (Cameroon)"
                                },
                                {
                                        "code": "132",
                                        "name": "Andre Kana-Biyik (Cameroon)"
                                },
                                {
                                        "code": "133",
                                        "name": "Emile M'Bouh (Cameroon)"
                                },
                                {
                                        "code": "134",
                                        "name": "Louis-Paul M'Fede (Cameroon)"
                                },
                                {
                                        "code": "135",
                                        "name": "Roger Milla (Cameroon)"
                                },
                                {
                                        "code": "136",
                                        "name": "Francois Omam-Biyik (Cameroon)"
                                },
                                {
                                        "code": "137",
                                        "name": "David Embe (Cameroon)"
                                },
                                {
                                        "code": "138",
                                        "name": "Alphonse Tchami (Cameroon)"
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
                                        "code": "139",
                                        "name": "Sweden Badge"
                                },
                                {
                                        "code": "140",
                                        "name": "Sweden Team Photo"
                                },
                                {
                                        "code": "141",
                                        "name": "Thomas Ravelli (Sweden)"
                                },
                                {
                                        "code": "142",
                                        "name": "Lars Eriksson (Sweden)"
                                },
                                {
                                        "code": "143",
                                        "name": "Roland Nilsson (Sweden)"
                                },
                                {
                                        "code": "144",
                                        "name": "Patrik Andersson (Sweden)"
                                },
                                {
                                        "code": "145",
                                        "name": "Joachim Bjorklund (Sweden)"
                                },
                                {
                                        "code": "146",
                                        "name": "Pontus Kamark (Sweden)"
                                },
                                {
                                        "code": "147",
                                        "name": "Roger Ljung (Sweden)"
                                },
                                {
                                        "code": "148",
                                        "name": "Stefan Schwarz (Sweden)"
                                },
                                {
                                        "code": "149",
                                        "name": "Jonas Thern (Sweden)"
                                },
                                {
                                        "code": "150",
                                        "name": "Klas Ingesson (Sweden)"
                                },
                                {
                                        "code": "151",
                                        "name": "Anders Limpar (Sweden)"
                                },
                                {
                                        "code": "152",
                                        "name": "Tomas Brolin (Sweden)"
                                },
                                {
                                        "code": "153",
                                        "name": "Martin Dahlin (Sweden)"
                                },
                                {
                                        "code": "154",
                                        "name": "Kennet Andersson (Sweden)"
                                },
                                {
                                        "code": "155",
                                        "name": "Henrik Larsson (Sweden)"
                                },
                                {
                                        "code": "156",
                                        "name": "Mikael Nilsson (Sweden)"
                                }
                        ]
                }
        ],
        "Group C": [
                {
                        "code": "GER",
                        "name": "Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "157",
                                        "name": "Germany Badge"
                                },
                                {
                                        "code": "158",
                                        "name": "Germany Team Photo"
                                },
                                {
                                        "code": "159",
                                        "name": "Bodo Illgner (Germany)"
                                },
                                {
                                        "code": "160",
                                        "name": "Andreas Kopke (Germany)"
                                },
                                {
                                        "code": "161",
                                        "name": "Lothar Matthaus (Germany)"
                                },
                                {
                                        "code": "162",
                                        "name": "Jurgen Kohler (Germany)"
                                },
                                {
                                        "code": "163",
                                        "name": "Thomas Helmer (Germany)"
                                },
                                {
                                        "code": "164",
                                        "name": "Guido Buchwald (Germany)"
                                },
                                {
                                        "code": "165",
                                        "name": "Andreas Brehme (Germany)"
                                },
                                {
                                        "code": "166",
                                        "name": "Thomas Berthold (Germany)"
                                },
                                {
                                        "code": "167",
                                        "name": "Thomas Hassler (Germany)"
                                },
                                {
                                        "code": "168",
                                        "name": "Stefan Effenberg (Germany)"
                                },
                                {
                                        "code": "169",
                                        "name": "Andreas Moller (Germany)"
                                },
                                {
                                        "code": "170",
                                        "name": "Mario Basler (Germany)"
                                },
                                {
                                        "code": "171",
                                        "name": "Jurgen Klinsmann (Germany)"
                                },
                                {
                                        "code": "172",
                                        "name": "Rudi Voller (Germany)"
                                },
                                {
                                        "code": "173",
                                        "name": "Karl-Heinz Riedle (Germany)"
                                },
                                {
                                        "code": "174",
                                        "name": "Ulf Kirsten (Germany)"
                                }
                        ]
                },
                {
                        "code": "BOL",
                        "name": "Bolivia",
                        "flags": [
                                "bo"
                        ],
                        "stickers": [
                                {
                                        "code": "175",
                                        "name": "Bolivia Badge"
                                },
                                {
                                        "code": "176",
                                        "name": "Bolivia Team Photo"
                                },
                                {
                                        "code": "177",
                                        "name": "Carlos Trucco (Bolivia)"
                                },
                                {
                                        "code": "178",
                                        "name": "Dario Rojas (Bolivia)"
                                },
                                {
                                        "code": "179",
                                        "name": "Miguel Rimba (Bolivia)"
                                },
                                {
                                        "code": "180",
                                        "name": "Marco Sandy (Bolivia)"
                                },
                                {
                                        "code": "181",
                                        "name": "Gustavo Quinteros (Bolivia)"
                                },
                                {
                                        "code": "182",
                                        "name": "Luis Cristaldo (Bolivia)"
                                },
                                {
                                        "code": "183",
                                        "name": "Modesto Soruco (Bolivia)"
                                },
                                {
                                        "code": "184",
                                        "name": "Carlos Borja (Bolivia)"
                                },
                                {
                                        "code": "185",
                                        "name": "Jose Milton Melgar (Bolivia)"
                                },
                                {
                                        "code": "186",
                                        "name": "Julio Cesar Baldivieso (Bolivia)"
                                },
                                {
                                        "code": "187",
                                        "name": "Erwin Sanchez (Bolivia)"
                                },
                                {
                                        "code": "188",
                                        "name": "Mauricio Ramos (Bolivia)"
                                },
                                {
                                        "code": "189",
                                        "name": "Marco Etcheverry (Bolivia)"
                                },
                                {
                                        "code": "190",
                                        "name": "Jaime Moreno (Bolivia)"
                                },
                                {
                                        "code": "191",
                                        "name": "William Ramallo (Bolivia)"
                                },
                                {
                                        "code": "192",
                                        "name": "Alvaro Pena (Bolivia)"
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
                                        "code": "193",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "194",
                                        "name": "Spain Team Photo"
                                },
                                {
                                        "code": "195",
                                        "name": "Andoni Zubizarreta (Spain)"
                                },
                                {
                                        "code": "196",
                                        "name": "Santiago Canizares (Spain)"
                                },
                                {
                                        "code": "197",
                                        "name": "Albert Ferrer (Spain)"
                                },
                                {
                                        "code": "198",
                                        "name": "Rafael Alkorta (Spain)"
                                },
                                {
                                        "code": "199",
                                        "name": "Fernando Hierro (Spain)"
                                },
                                {
                                        "code": "200",
                                        "name": "Miguel Angel Nadal (Spain)"
                                },
                                {
                                        "code": "201",
                                        "name": "Sergi Barjuan (Spain)"
                                },
                                {
                                        "code": "202",
                                        "name": "Jorge Otero (Spain)"
                                },
                                {
                                        "code": "203",
                                        "name": "Pep Guardiola (Spain)"
                                },
                                {
                                        "code": "204",
                                        "name": "Jose Mari Bakero (Spain)"
                                },
                                {
                                        "code": "205",
                                        "name": "Luis Enrique (Spain)"
                                },
                                {
                                        "code": "206",
                                        "name": "Txiki Begiristain (Spain)"
                                },
                                {
                                        "code": "207",
                                        "name": "Julio Salinas (Spain)"
                                },
                                {
                                        "code": "208",
                                        "name": "Jon Andoni Goikoetxea (Spain)"
                                },
                                {
                                        "code": "209",
                                        "name": "Juanele (Spain)"
                                },
                                {
                                        "code": "210",
                                        "name": "Felipe Minambres (Spain)"
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
                                        "code": "211",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "212",
                                        "name": "South Korea Team Photo"
                                },
                                {
                                        "code": "213",
                                        "name": "Choi In-young (South Korea)"
                                },
                                {
                                        "code": "214",
                                        "name": "Lee Woon-jae (South Korea)"
                                },
                                {
                                        "code": "215",
                                        "name": "Hong Myung-bo (South Korea)"
                                },
                                {
                                        "code": "216",
                                        "name": "Kim Pan-keun (South Korea)"
                                },
                                {
                                        "code": "217",
                                        "name": "Park Jung-bae (South Korea)"
                                },
                                {
                                        "code": "218",
                                        "name": "Shin Hong-gi (South Korea)"
                                },
                                {
                                        "code": "219",
                                        "name": "Gu Sang-bum (South Korea)"
                                },
                                {
                                        "code": "220",
                                        "name": "Lee Young-jin (South Korea)"
                                },
                                {
                                        "code": "221",
                                        "name": "Kim Joo-sung (South Korea)"
                                },
                                {
                                        "code": "222",
                                        "name": "Ha Seok-ju (South Korea)"
                                },
                                {
                                        "code": "223",
                                        "name": "Cho Jin-ho (South Korea)"
                                },
                                {
                                        "code": "224",
                                        "name": "Noh Jung-yoon (South Korea)"
                                },
                                {
                                        "code": "225",
                                        "name": "Hwang Sun-hong (South Korea)"
                                },
                                {
                                        "code": "226",
                                        "name": "Seo Jung-won (South Korea)"
                                },
                                {
                                        "code": "227",
                                        "name": "Ko Jeong-woon (South Korea)"
                                },
                                {
                                        "code": "228",
                                        "name": "Kim Do-hoon (South Korea)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "ARG",
                        "name": "Argentina",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "229",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "230",
                                        "name": "Argentina Team Photo"
                                },
                                {
                                        "code": "231",
                                        "name": "Sergio Goycochea (Argentina)"
                                },
                                {
                                        "code": "232",
                                        "name": "Luis Islas (Argentina)"
                                },
                                {
                                        "code": "233",
                                        "name": "Roberto Sensini (Argentina)"
                                },
                                {
                                        "code": "234",
                                        "name": "Oscar Ruggeri (Argentina)"
                                },
                                {
                                        "code": "235",
                                        "name": "Fernando Caceres (Argentina)"
                                },
                                {
                                        "code": "236",
                                        "name": "Jose Chamot (Argentina)"
                                },
                                {
                                        "code": "237",
                                        "name": "Hernan Diaz (Argentina)"
                                },
                                {
                                        "code": "238",
                                        "name": "Diego Simeone (Argentina)"
                                },
                                {
                                        "code": "239",
                                        "name": "Fernando Redondo (Argentina)"
                                },
                                {
                                        "code": "240",
                                        "name": "Diego Armando Maradona (Argentina)"
                                },
                                {
                                        "code": "241",
                                        "name": "Ariel Ortega (Argentina)"
                                },
                                {
                                        "code": "242",
                                        "name": "Leonardo Rodriguez (Argentina)"
                                },
                                {
                                        "code": "243",
                                        "name": "Gabriel Batistuta (Argentina)"
                                },
                                {
                                        "code": "244",
                                        "name": "Claudio Caniggia (Argentina)"
                                },
                                {
                                        "code": "245",
                                        "name": "Abel Balbo (Argentina)"
                                },
                                {
                                        "code": "246",
                                        "name": "Ramon Medina Bello (Argentina)"
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
                                        "code": "247",
                                        "name": "Greece Badge"
                                },
                                {
                                        "code": "248",
                                        "name": "Greece Team Photo"
                                },
                                {
                                        "code": "249",
                                        "name": "Antonis Minou (Greece)"
                                },
                                {
                                        "code": "250",
                                        "name": "Elias Atmatsidis (Greece)"
                                },
                                {
                                        "code": "251",
                                        "name": "Stratos Apostolakis (Greece)"
                                },
                                {
                                        "code": "252",
                                        "name": "Giannis Kalitzakis (Greece)"
                                },
                                {
                                        "code": "253",
                                        "name": "Stelios Manolas (Greece)"
                                },
                                {
                                        "code": "254",
                                        "name": "Thanasis Kolitsidakis (Greece)"
                                },
                                {
                                        "code": "255",
                                        "name": "Kyriakos Karataidis (Greece)"
                                },
                                {
                                        "code": "256",
                                        "name": "Nikos Nioplias (Greece)"
                                },
                                {
                                        "code": "257",
                                        "name": "Savvas Kofidis (Greece)"
                                },
                                {
                                        "code": "258",
                                        "name": "Panagiotis Tsalouchidis (Greece)"
                                },
                                {
                                        "code": "259",
                                        "name": "Spyros Marangos (Greece)"
                                },
                                {
                                        "code": "260",
                                        "name": "Tasos Mitropoulos (Greece)"
                                },
                                {
                                        "code": "261",
                                        "name": "Dimitris Saravakos (Greece)"
                                },
                                {
                                        "code": "262",
                                        "name": "Nikos Machlas (Greece)"
                                },
                                {
                                        "code": "263",
                                        "name": "Alexis Alexoudis (Greece)"
                                },
                                {
                                        "code": "264",
                                        "name": "Vasilis Dimitriadis (Greece)"
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
                                        "code": "265",
                                        "name": "Nigeria Badge"
                                },
                                {
                                        "code": "266",
                                        "name": "Nigeria Team Photo"
                                },
                                {
                                        "code": "267",
                                        "name": "Peter Rufai (Nigeria)"
                                },
                                {
                                        "code": "268",
                                        "name": "Alloysius Agu (Nigeria)"
                                },
                                {
                                        "code": "269",
                                        "name": "Augustine Eguavoen (Nigeria)"
                                },
                                {
                                        "code": "270",
                                        "name": "Uche Okechukwu (Nigeria)"
                                },
                                {
                                        "code": "271",
                                        "name": "Chidi Nwanu (Nigeria)"
                                },
                                {
                                        "code": "272",
                                        "name": "Michael Emenalo (Nigeria)"
                                },
                                {
                                        "code": "273",
                                        "name": "Stephen Keshi (Nigeria)"
                                },
                                {
                                        "code": "274",
                                        "name": "Sunday Oliseh (Nigeria)"
                                },
                                {
                                        "code": "275",
                                        "name": "Finidi George (Nigeria)"
                                },
                                {
                                        "code": "276",
                                        "name": "Jay-Jay Okocha (Nigeria)"
                                },
                                {
                                        "code": "277",
                                        "name": "Emmanuel Amunike (Nigeria)"
                                },
                                {
                                        "code": "278",
                                        "name": "Mutiu Adepoju (Nigeria)"
                                },
                                {
                                        "code": "279",
                                        "name": "Rashidi Yekini (Nigeria)"
                                },
                                {
                                        "code": "280",
                                        "name": "Daniel Amokachi (Nigeria)"
                                },
                                {
                                        "code": "281",
                                        "name": "Samson Siasia (Nigeria)"
                                },
                                {
                                        "code": "282",
                                        "name": "Victor Ikpeba (Nigeria)"
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
                                        "code": "283",
                                        "name": "Bulgaria Badge"
                                },
                                {
                                        "code": "284",
                                        "name": "Bulgaria Team Photo"
                                },
                                {
                                        "code": "285",
                                        "name": "Borislav Mikhailov (Bulgaria)"
                                },
                                {
                                        "code": "286",
                                        "name": "Plamen Nikolov (Bulgaria)"
                                },
                                {
                                        "code": "287",
                                        "name": "Emil Kremenliev (Bulgaria)"
                                },
                                {
                                        "code": "288",
                                        "name": "Trifon Ivanov (Bulgaria)"
                                },
                                {
                                        "code": "289",
                                        "name": "Petar Hubchev (Bulgaria)"
                                },
                                {
                                        "code": "290",
                                        "name": "Tsanko Tsvetanov (Bulgaria)"
                                },
                                {
                                        "code": "291",
                                        "name": "Ilian Kiriakov (Bulgaria)"
                                },
                                {
                                        "code": "292",
                                        "name": "Zlatko Yankov (Bulgaria)"
                                },
                                {
                                        "code": "293",
                                        "name": "Yordan Letchkov (Bulgaria)"
                                },
                                {
                                        "code": "294",
                                        "name": "Krasimir Balakov (Bulgaria)"
                                },
                                {
                                        "code": "295",
                                        "name": "Daniel Borimirov (Bulgaria)"
                                },
                                {
                                        "code": "296",
                                        "name": "Georgi Georgiev (Bulgaria)"
                                },
                                {
                                        "code": "297",
                                        "name": "Hristo Stoichkov (Bulgaria)"
                                },
                                {
                                        "code": "298",
                                        "name": "Emil Kostadinov (Bulgaria)"
                                },
                                {
                                        "code": "299",
                                        "name": "Nasko Sirakov (Bulgaria)"
                                },
                                {
                                        "code": "300",
                                        "name": "Petar Aleksandrov (Bulgaria)"
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
                                        "code": "301",
                                        "name": "Italy Badge"
                                },
                                {
                                        "code": "302",
                                        "name": "Italy Team Photo"
                                },
                                {
                                        "code": "303",
                                        "name": "Gianluca Pagliuca (Italy)"
                                },
                                {
                                        "code": "304",
                                        "name": "Luca Marchegiani (Italy)"
                                },
                                {
                                        "code": "305",
                                        "name": "Franco Baresi (Italy)"
                                },
                                {
                                        "code": "306",
                                        "name": "Paolo Maldini (Italy)"
                                },
                                {
                                        "code": "307",
                                        "name": "Antonio Benarrivo (Italy)"
                                },
                                {
                                        "code": "308",
                                        "name": "Alessandro Costacurta (Italy)"
                                },
                                {
                                        "code": "309",
                                        "name": "Roberto Mussi (Italy)"
                                },
                                {
                                        "code": "310",
                                        "name": "Mauro Tassotti (Italy)"
                                },
                                {
                                        "code": "311",
                                        "name": "Dino Baggio (Italy)"
                                },
                                {
                                        "code": "312",
                                        "name": "Demetrio Albertini (Italy)"
                                },
                                {
                                        "code": "313",
                                        "name": "Roberto Donadoni (Italy)"
                                },
                                {
                                        "code": "314",
                                        "name": "Nicola Berti (Italy)"
                                },
                                {
                                        "code": "315",
                                        "name": "Roberto Baggio (Italy)"
                                },
                                {
                                        "code": "316",
                                        "name": "Gianfranco Zola (Italy)"
                                },
                                {
                                        "code": "317",
                                        "name": "Giuseppe Signori (Italy)"
                                },
                                {
                                        "code": "318",
                                        "name": "Daniele Massaro (Italy)"
                                }
                        ]
                },
                {
                        "code": "IRL",
                        "name": "Republic of Ireland",
                        "flags": [
                                "ie"
                        ],
                        "stickers": [
                                {
                                        "code": "319",
                                        "name": "Republic of Ireland Badge"
                                },
                                {
                                        "code": "320",
                                        "name": "Republic of Ireland Team Photo"
                                },
                                {
                                        "code": "321",
                                        "name": "Pat Bonner (Republic of Ireland)"
                                },
                                {
                                        "code": "322",
                                        "name": "Alan Kelly (Republic of Ireland)"
                                },
                                {
                                        "code": "323",
                                        "name": "Denis Irwin (Republic of Ireland)"
                                },
                                {
                                        "code": "324",
                                        "name": "Paul McGrath (Republic of Ireland)"
                                },
                                {
                                        "code": "325",
                                        "name": "Phil Babb (Republic of Ireland)"
                                },
                                {
                                        "code": "326",
                                        "name": "Terry Phelan (Republic of Ireland)"
                                },
                                {
                                        "code": "327",
                                        "name": "Gary Kelly (Republic of Ireland)"
                                },
                                {
                                        "code": "328",
                                        "name": "Roy Keane (Republic of Ireland)"
                                },
                                {
                                        "code": "329",
                                        "name": "Andy Townsend (Republic of Ireland)"
                                },
                                {
                                        "code": "330",
                                        "name": "Ray Houghton (Republic of Ireland)"
                                },
                                {
                                        "code": "331",
                                        "name": "John Sheridan (Republic of Ireland)"
                                },
                                {
                                        "code": "332",
                                        "name": "Steve Staunton (Republic of Ireland)"
                                },
                                {
                                        "code": "333",
                                        "name": "John Aldridge (Republic of Ireland)"
                                },
                                {
                                        "code": "334",
                                        "name": "Tommy Coyne (Republic of Ireland)"
                                },
                                {
                                        "code": "335",
                                        "name": "Tony Cascarino (Republic of Ireland)"
                                },
                                {
                                        "code": "336",
                                        "name": "David Kelly (Republic of Ireland)"
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
                                        "code": "337",
                                        "name": "Norway Badge"
                                },
                                {
                                        "code": "338",
                                        "name": "Norway Team Photo"
                                },
                                {
                                        "code": "339",
                                        "name": "Erik Thorstvedt (Norway)"
                                },
                                {
                                        "code": "340",
                                        "name": "Frode Grodas (Norway)"
                                },
                                {
                                        "code": "341",
                                        "name": "Henning Berg (Norway)"
                                },
                                {
                                        "code": "342",
                                        "name": "Rune Bratseth (Norway)"
                                },
                                {
                                        "code": "343",
                                        "name": "Alf-Inge Haaland (Norway)"
                                },
                                {
                                        "code": "344",
                                        "name": "Stig Inge Bjornebye (Norway)"
                                },
                                {
                                        "code": "345",
                                        "name": "Tore Pedersen (Norway)"
                                },
                                {
                                        "code": "346",
                                        "name": "Oyvind Leonhardsen (Norway)"
                                },
                                {
                                        "code": "347",
                                        "name": "Kjetil Rekdal (Norway)"
                                },
                                {
                                        "code": "348",
                                        "name": "Erik Mykland (Norway)"
                                },
                                {
                                        "code": "349",
                                        "name": "Lars Bohinen (Norway)"
                                },
                                {
                                        "code": "350",
                                        "name": "Jahn Ivar Jakobsen (Norway)"
                                },
                                {
                                        "code": "351",
                                        "name": "Jostein Flo (Norway)"
                                },
                                {
                                        "code": "352",
                                        "name": "Jan Aage Fjortoft (Norway)"
                                },
                                {
                                        "code": "353",
                                        "name": "Goran Sorloth (Norway)"
                                },
                                {
                                        "code": "354",
                                        "name": "Sigurd Rushfeldt (Norway)"
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
                                        "code": "355",
                                        "name": "Mexico Badge"
                                },
                                {
                                        "code": "356",
                                        "name": "Mexico Team Photo"
                                },
                                {
                                        "code": "357",
                                        "name": "Jorge Campos (Mexico)"
                                },
                                {
                                        "code": "358",
                                        "name": "Felix Fernandez (Mexico)"
                                },
                                {
                                        "code": "359",
                                        "name": "Claudio Suarez (Mexico)"
                                },
                                {
                                        "code": "360",
                                        "name": "Juan de Dios Ramirez Perales (Mexico)"
                                },
                                {
                                        "code": "361",
                                        "name": "Ignacio Ambriz (Mexico)"
                                },
                                {
                                        "code": "362",
                                        "name": "Ramon Ramirez (Mexico)"
                                },
                                {
                                        "code": "363",
                                        "name": "Jorge Rodriguez (Mexico)"
                                },
                                {
                                        "code": "364",
                                        "name": "Marcelino Bernal (Mexico)"
                                },
                                {
                                        "code": "365",
                                        "name": "Alberto Garcia Aspe (Mexico)"
                                },
                                {
                                        "code": "366",
                                        "name": "Joaquin del Olmo (Mexico)"
                                },
                                {
                                        "code": "367",
                                        "name": "Missael Espinoza (Mexico)"
                                },
                                {
                                        "code": "368",
                                        "name": "Luis Roberto Alves Zague (Mexico)"
                                },
                                {
                                        "code": "369",
                                        "name": "Hugo Sanchez (Mexico)"
                                },
                                {
                                        "code": "370",
                                        "name": "Luis Garcia (Mexico)"
                                },
                                {
                                        "code": "371",
                                        "name": "Carlos Hermosillo (Mexico)"
                                },
                                {
                                        "code": "372",
                                        "name": "Daniel Guzman (Mexico)"
                                }
                        ]
                }
        ],
        "Group F": [
                {
                        "code": "BEL",
                        "name": "Belgium",
                        "flags": [
                                "be"
                        ],
                        "stickers": [
                                {
                                        "code": "373",
                                        "name": "Belgium Badge"
                                },
                                {
                                        "code": "374",
                                        "name": "Belgium Team Photo"
                                },
                                {
                                        "code": "375",
                                        "name": "Michel Preud'homme (Belgium)"
                                },
                                {
                                        "code": "376",
                                        "name": "Filip De Wilde (Belgium)"
                                },
                                {
                                        "code": "377",
                                        "name": "Philippe Albert (Belgium)"
                                },
                                {
                                        "code": "378",
                                        "name": "Georges Grun (Belgium)"
                                },
                                {
                                        "code": "379",
                                        "name": "Michel De Wolf (Belgium)"
                                },
                                {
                                        "code": "380",
                                        "name": "Vital Borkelmans (Belgium)"
                                },
                                {
                                        "code": "381",
                                        "name": "Rudi Smidts (Belgium)"
                                },
                                {
                                        "code": "382",
                                        "name": "Lorenzo Staelens (Belgium)"
                                },
                                {
                                        "code": "383",
                                        "name": "Franky Van der Elst (Belgium)"
                                },
                                {
                                        "code": "384",
                                        "name": "Enzo Scifo (Belgium)"
                                },
                                {
                                        "code": "385",
                                        "name": "Marc Emmers (Belgium)"
                                },
                                {
                                        "code": "386",
                                        "name": "Danny Boffin (Belgium)"
                                },
                                {
                                        "code": "387",
                                        "name": "Marc Degryse (Belgium)"
                                },
                                {
                                        "code": "388",
                                        "name": "Luc Nilis (Belgium)"
                                },
                                {
                                        "code": "389",
                                        "name": "Josip Weber (Belgium)"
                                },
                                {
                                        "code": "390",
                                        "name": "Alexandre Czerniatynski (Belgium)"
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
                                        "code": "391",
                                        "name": "Morocco Badge"
                                },
                                {
                                        "code": "392",
                                        "name": "Morocco Team Photo"
                                },
                                {
                                        "code": "393",
                                        "name": "Khalil Azmi (Morocco)"
                                },
                                {
                                        "code": "394",
                                        "name": "Zakaria Alaoui (Morocco)"
                                },
                                {
                                        "code": "395",
                                        "name": "Abdelkrim El Hadrioui (Morocco)"
                                },
                                {
                                        "code": "396",
                                        "name": "Noureddine Naybet (Morocco)"
                                },
                                {
                                        "code": "397",
                                        "name": "Smahi Triki (Morocco)"
                                },
                                {
                                        "code": "398",
                                        "name": "Rachid Neqrouz (Morocco)"
                                },
                                {
                                        "code": "399",
                                        "name": "Tahar El Khalej (Morocco)"
                                },
                                {
                                        "code": "400",
                                        "name": "Rachid Daoudi (Morocco)"
                                },
                                {
                                        "code": "401",
                                        "name": "Mustapha Hadji (Morocco)"
                                },
                                {
                                        "code": "402",
                                        "name": "Mustapha El Haddaoui (Morocco)"
                                },
                                {
                                        "code": "403",
                                        "name": "Mohammed Chaouch (Morocco)"
                                },
                                {
                                        "code": "404",
                                        "name": "Aziz Bouderbala (Morocco)"
                                },
                                {
                                        "code": "405",
                                        "name": "Hassan Nader (Morocco)"
                                },
                                {
                                        "code": "406",
                                        "name": "Ahmed Bahja (Morocco)"
                                },
                                {
                                        "code": "407",
                                        "name": "Abdeslam Laghrissi (Morocco)"
                                },
                                {
                                        "code": "408",
                                        "name": "Abdelmajid Bouyboud (Morocco)"
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
                                        "code": "409",
                                        "name": "Netherlands Badge"
                                },
                                {
                                        "code": "410",
                                        "name": "Netherlands Team Photo"
                                },
                                {
                                        "code": "411",
                                        "name": "Ed de Goey (Netherlands)"
                                },
                                {
                                        "code": "412",
                                        "name": "Theo Snelders (Netherlands)"
                                },
                                {
                                        "code": "413",
                                        "name": "Frank de Boer (Netherlands)"
                                },
                                {
                                        "code": "414",
                                        "name": "Ronald Koeman (Netherlands)"
                                },
                                {
                                        "code": "415",
                                        "name": "Stan Valckx (Netherlands)"
                                },
                                {
                                        "code": "416",
                                        "name": "Arthur Numan (Netherlands)"
                                },
                                {
                                        "code": "417",
                                        "name": "Ulrich van Gobbel (Netherlands)"
                                },
                                {
                                        "code": "418",
                                        "name": "Wim Jonk (Netherlands)"
                                },
                                {
                                        "code": "419",
                                        "name": "Frank Rijkaard (Netherlands)"
                                },
                                {
                                        "code": "420",
                                        "name": "Ronald de Boer (Netherlands)"
                                },
                                {
                                        "code": "421",
                                        "name": "Jan Wouters (Netherlands)"
                                },
                                {
                                        "code": "422",
                                        "name": "Marc Overmars (Netherlands)"
                                },
                                {
                                        "code": "423",
                                        "name": "Dennis Bergkamp (Netherlands)"
                                },
                                {
                                        "code": "424",
                                        "name": "Bryan Roy (Netherlands)"
                                },
                                {
                                        "code": "425",
                                        "name": "Peter van Vossen (Netherlands)"
                                },
                                {
                                        "code": "426",
                                        "name": "John Bosman (Netherlands)"
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
                                        "code": "427",
                                        "name": "Saudi Arabia Badge"
                                },
                                {
                                        "code": "428",
                                        "name": "Saudi Arabia Team Photo"
                                },
                                {
                                        "code": "429",
                                        "name": "Mohamed Al-Deayea (Saudi Arabia)"
                                },
                                {
                                        "code": "430",
                                        "name": "Hussein Al-Sadiq (Saudi Arabia)"
                                },
                                {
                                        "code": "431",
                                        "name": "Mohammed Al-Khilaiwi (Saudi Arabia)"
                                },
                                {
                                        "code": "432",
                                        "name": "Ahmad Jamil Madani (Saudi Arabia)"
                                },
                                {
                                        "code": "433",
                                        "name": "Abdullah Zubromawi (Saudi Arabia)"
                                },
                                {
                                        "code": "434",
                                        "name": "Awad Al-Anazi (Saudi Arabia)"
                                },
                                {
                                        "code": "435",
                                        "name": "Saleh Al-Dawod (Saudi Arabia)"
                                },
                                {
                                        "code": "436",
                                        "name": "Fuad Anwar Amin (Saudi Arabia)"
                                },
                                {
                                        "code": "437",
                                        "name": "Fahad Al-Bishi (Saudi Arabia)"
                                },
                                {
                                        "code": "438",
                                        "name": "Talal Jebreen (Saudi Arabia)"
                                },
                                {
                                        "code": "439",
                                        "name": "Hamzah Saleh (Saudi Arabia)"
                                },
                                {
                                        "code": "440",
                                        "name": "Saeed Al-Owairan (Saudi Arabia)"
                                },
                                {
                                        "code": "441",
                                        "name": "Majed Abdullah (Saudi Arabia)"
                                },
                                {
                                        "code": "442",
                                        "name": "Sami Al-Jaber (Saudi Arabia)"
                                },
                                {
                                        "code": "443",
                                        "name": "Hamzah Idris (Saudi Arabia)"
                                },
                                {
                                        "code": "444",
                                        "name": "Fahad Al-Mehallel (Saudi Arabia)"
                                }
                        ]
                }
        ]
}
};

// data/tournaments/wc1990.js
// Official Panini Italia 90 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc1990'] = {
    id: 'wc1990',
    categoryId: 'fifa-world-cup',
    year: 1990,
    title: 'Italia 90',
    subtitle: 'Italy • 24 Teams • 448 Stickers',
    dbKey: 'panini1990',
    isSequential: true,
    totalStickers: 448,
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
                        "name": "Mascot, Trophy & Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "2",
                                        "name": "Official Italia 90 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Ciao (Official Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Ciao Action Mascot"
                                },
                                {
                                        "code": "5",
                                        "name": "Stadio Olimpico (Roma)"
                                },
                                {
                                        "code": "6",
                                        "name": "Stadio Giuseppe Meazza / San Siro (Milano)"
                                },
                                {
                                        "code": "7",
                                        "name": "Stadio San Paolo (Napoli)"
                                },
                                {
                                        "code": "8",
                                        "name": "Stadio delle Alpi (Torino)"
                                },
                                {
                                        "code": "9",
                                        "name": "Stadio Luigi Ferraris (Genova)"
                                },
                                {
                                        "code": "10",
                                        "name": "Stadio San Nicola (Bari)"
                                },
                                {
                                        "code": "11",
                                        "name": "Stadio Renato Dall'Ara (Bologna)"
                                },
                                {
                                        "code": "12",
                                        "name": "Stadio Marc'Antonio Bentegodi (Verona)"
                                },
                                {
                                        "code": "13",
                                        "name": "Stadio Artemio Franchi (Firenze)"
                                },
                                {
                                        "code": "14",
                                        "name": "Stadio Sant'Elia (Cagliari)"
                                },
                                {
                                        "code": "15",
                                        "name": "Stadio Friuli (Udine)"
                                },
                                {
                                        "code": "16",
                                        "name": "Stadio La Favorita (Palermo)"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "17",
                                        "name": "Italy Badge"
                                },
                                {
                                        "code": "18",
                                        "name": "Italy Team Photo"
                                },
                                {
                                        "code": "19",
                                        "name": "Walter Zenga (Italy)"
                                },
                                {
                                        "code": "20",
                                        "name": "Stefano Tacconi (Italy)"
                                },
                                {
                                        "code": "21",
                                        "name": "Franco Baresi (Italy)"
                                },
                                {
                                        "code": "22",
                                        "name": "Giuseppe Bergomi (Italy)"
                                },
                                {
                                        "code": "23",
                                        "name": "Riccardo Ferri (Italy)"
                                },
                                {
                                        "code": "24",
                                        "name": "Paolo Maldini (Italy)"
                                },
                                {
                                        "code": "25",
                                        "name": "Carlo Ancelotti (Italy)"
                                },
                                {
                                        "code": "26",
                                        "name": "Nicola Berti (Italy)"
                                },
                                {
                                        "code": "27",
                                        "name": "Fernando De Napoli (Italy)"
                                },
                                {
                                        "code": "28",
                                        "name": "Giuseppe Giannini (Italy)"
                                },
                                {
                                        "code": "29",
                                        "name": "Giancarlo Marocchi (Italy)"
                                },
                                {
                                        "code": "30",
                                        "name": "Roberto Donadoni (Italy)"
                                },
                                {
                                        "code": "31",
                                        "name": "Andrea Carnevale (Italy)"
                                },
                                {
                                        "code": "32",
                                        "name": "Roberto Mancini (Italy)"
                                },
                                {
                                        "code": "33",
                                        "name": "Salvatore Schillaci (Italy)"
                                },
                                {
                                        "code": "34",
                                        "name": "Gianluca Vialli (Italy)"
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
                                        "code": "35",
                                        "name": "Austria Badge"
                                },
                                {
                                        "code": "36",
                                        "name": "Austria Team Photo"
                                },
                                {
                                        "code": "37",
                                        "name": "Klaus Lindenberger (Austria)"
                                },
                                {
                                        "code": "38",
                                        "name": "Michael Konsel (Austria)"
                                },
                                {
                                        "code": "39",
                                        "name": "Robert Pecl (Austria)"
                                },
                                {
                                        "code": "40",
                                        "name": "Anton Pfeffer (Austria)"
                                },
                                {
                                        "code": "41",
                                        "name": "Peter Artner (Austria)"
                                },
                                {
                                        "code": "42",
                                        "name": "Ernst Aigner (Austria)"
                                },
                                {
                                        "code": "43",
                                        "name": "Manfred Zsak (Austria)"
                                },
                                {
                                        "code": "44",
                                        "name": "Andreas Herzog (Austria)"
                                },
                                {
                                        "code": "45",
                                        "name": "Michael Baur (Austria)"
                                },
                                {
                                        "code": "46",
                                        "name": "Peter Schöttel (Austria)"
                                },
                                {
                                        "code": "47",
                                        "name": "Manfred Linzmaier (Austria)"
                                },
                                {
                                        "code": "48",
                                        "name": "Gerald Willfurth (Austria)"
                                },
                                {
                                        "code": "49",
                                        "name": "Toni Polster (Austria)"
                                },
                                {
                                        "code": "50",
                                        "name": "Gerhard Rodax (Austria)"
                                },
                                {
                                        "code": "51",
                                        "name": "Andreas Ogris (Austria)"
                                },
                                {
                                        "code": "52",
                                        "name": "Christian Keglevits (Austria)"
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
                                        "code": "53",
                                        "name": "United States Badge"
                                },
                                {
                                        "code": "54",
                                        "name": "United States Team Photo"
                                },
                                {
                                        "code": "55",
                                        "name": "Tony Meola (United States)"
                                },
                                {
                                        "code": "56",
                                        "name": "Kasey Keller (United States)"
                                },
                                {
                                        "code": "57",
                                        "name": "Steve Trittschuh (United States)"
                                },
                                {
                                        "code": "58",
                                        "name": "John Doyle (United States)"
                                },
                                {
                                        "code": "59",
                                        "name": "Jimmy Banks (United States)"
                                },
                                {
                                        "code": "60",
                                        "name": "Marcelo Balboa (United States)"
                                },
                                {
                                        "code": "61",
                                        "name": "Desmond Armstrong (United States)"
                                },
                                {
                                        "code": "62",
                                        "name": "John Harkes (United States)"
                                },
                                {
                                        "code": "63",
                                        "name": "Tab Ramos (United States)"
                                },
                                {
                                        "code": "64",
                                        "name": "Paul Caligiuri (United States)"
                                },
                                {
                                        "code": "65",
                                        "name": "Brian Bliss (United States)"
                                },
                                {
                                        "code": "66",
                                        "name": "Chris Henderson (United States)"
                                },
                                {
                                        "code": "67",
                                        "name": "Peter Vermes (United States)"
                                },
                                {
                                        "code": "68",
                                        "name": "Bruce Murray (United States)"
                                },
                                {
                                        "code": "69",
                                        "name": "Eric Wynalda (United States)"
                                },
                                {
                                        "code": "70",
                                        "name": "Christopher Sullivan (United States)"
                                }
                        ]
                },
                {
                        "code": "TCH",
                        "name": "Czechoslovakia",
                        "flags": [
                                "cz",
                                "sk"
                        ],
                        "stickers": [
                                {
                                        "code": "71",
                                        "name": "Czechoslovakia Badge"
                                },
                                {
                                        "code": "72",
                                        "name": "Czechoslovakia Team Photo"
                                },
                                {
                                        "code": "73",
                                        "name": "Jan Stejskal (Czechoslovakia)"
                                },
                                {
                                        "code": "74",
                                        "name": "Ludek Miklosko (Czechoslovakia)"
                                },
                                {
                                        "code": "75",
                                        "name": "Frantisek Straka (Czechoslovakia)"
                                },
                                {
                                        "code": "76",
                                        "name": "Miroslav Kadlec (Czechoslovakia)"
                                },
                                {
                                        "code": "77",
                                        "name": "Jan Kocian (Czechoslovakia)"
                                },
                                {
                                        "code": "78",
                                        "name": "Jozef Chovanec (Czechoslovakia)"
                                },
                                {
                                        "code": "79",
                                        "name": "Lubomir Moravcik (Czechoslovakia)"
                                },
                                {
                                        "code": "80",
                                        "name": "Ivan Hasek (Czechoslovakia)"
                                },
                                {
                                        "code": "81",
                                        "name": "Michal Bilek (Czechoslovakia)"
                                },
                                {
                                        "code": "82",
                                        "name": "Vaclav Nemecek (Czechoslovakia)"
                                },
                                {
                                        "code": "83",
                                        "name": "Vladimir Weiss (Czechoslovakia)"
                                },
                                {
                                        "code": "84",
                                        "name": "Viliam Hyravy (Czechoslovakia)"
                                },
                                {
                                        "code": "85",
                                        "name": "Tomas Skuhravy (Czechoslovakia)"
                                },
                                {
                                        "code": "86",
                                        "name": "Stanislav Griga (Czechoslovakia)"
                                },
                                {
                                        "code": "87",
                                        "name": "Milan Luhovy (Czechoslovakia)"
                                },
                                {
                                        "code": "88",
                                        "name": "Ivo Knoflicek (Czechoslovakia)"
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
                                        "code": "89",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "90",
                                        "name": "Argentina Team Photo"
                                },
                                {
                                        "code": "91",
                                        "name": "Nery Pumpido (Argentina)"
                                },
                                {
                                        "code": "92",
                                        "name": "Sergio Goycochea (Argentina)"
                                },
                                {
                                        "code": "93",
                                        "name": "Jose Serrizuela (Argentina)"
                                },
                                {
                                        "code": "94",
                                        "name": "Oscar Ruggeri (Argentina)"
                                },
                                {
                                        "code": "95",
                                        "name": "Nestor Fabbri (Argentina)"
                                },
                                {
                                        "code": "96",
                                        "name": "Roberto Sensini (Argentina)"
                                },
                                {
                                        "code": "97",
                                        "name": "Juan Simon (Argentina)"
                                },
                                {
                                        "code": "98",
                                        "name": "Jose Basualdo (Argentina)"
                                },
                                {
                                        "code": "99",
                                        "name": "Jorge Burruchaga (Argentina)"
                                },
                                {
                                        "code": "100",
                                        "name": "Diego Armando Maradona (Argentina)"
                                },
                                {
                                        "code": "101",
                                        "name": "Pedro Troglio (Argentina)"
                                },
                                {
                                        "code": "102",
                                        "name": "Sergio Batista (Argentina)"
                                },
                                {
                                        "code": "103",
                                        "name": "Ricardo Giusti (Argentina)"
                                },
                                {
                                        "code": "104",
                                        "name": "Abel Balbo (Argentina)"
                                },
                                {
                                        "code": "105",
                                        "name": "Claudio Caniggia (Argentina)"
                                },
                                {
                                        "code": "106",
                                        "name": "Gustavo Dezotti (Argentina)"
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
                                        "code": "107",
                                        "name": "Cameroon Badge"
                                },
                                {
                                        "code": "108",
                                        "name": "Cameroon Team Photo"
                                },
                                {
                                        "code": "109",
                                        "name": "Thomas N'Kono (Cameroon)"
                                },
                                {
                                        "code": "110",
                                        "name": "Joseph-Antoine Bell (Cameroon)"
                                },
                                {
                                        "code": "111",
                                        "name": "Stephen Tataw (Cameroon)"
                                },
                                {
                                        "code": "112",
                                        "name": "Emmanuel Kundé (Cameroon)"
                                },
                                {
                                        "code": "113",
                                        "name": "Victor N'Dip (Cameroon)"
                                },
                                {
                                        "code": "114",
                                        "name": "Bertin Ebwellé (Cameroon)"
                                },
                                {
                                        "code": "115",
                                        "name": "Benjamin Massing (Cameroon)"
                                },
                                {
                                        "code": "116",
                                        "name": "Cyrille Makanaky (Cameroon)"
                                },
                                {
                                        "code": "117",
                                        "name": "Thomas Libiih (Cameroon)"
                                },
                                {
                                        "code": "118",
                                        "name": "André Kana-Biyik (Cameroon)"
                                },
                                {
                                        "code": "119",
                                        "name": "Emile M'Bouh (Cameroon)"
                                },
                                {
                                        "code": "120",
                                        "name": "Louis-Paul M'Fédé (Cameroon)"
                                },
                                {
                                        "code": "121",
                                        "name": "Roger Milla (Cameroon)"
                                },
                                {
                                        "code": "122",
                                        "name": "François Omam-Biyik (Cameroon)"
                                },
                                {
                                        "code": "123",
                                        "name": "Bonaventure Djonkep (Cameroon)"
                                },
                                {
                                        "code": "124",
                                        "name": "Eugène Ekéké (Cameroon)"
                                }
                        ]
                },
                {
                        "code": "URS",
                        "name": "Soviet Union",
                        "flags": [
                                "ru"
                        ],
                        "stickers": [
                                {
                                        "code": "125",
                                        "name": "Soviet Union Badge"
                                },
                                {
                                        "code": "126",
                                        "name": "Soviet Union Team Photo"
                                },
                                {
                                        "code": "127",
                                        "name": "Rinat Dasaev (Soviet Union)"
                                },
                                {
                                        "code": "128",
                                        "name": "Viktor Chanov (Soviet Union)"
                                },
                                {
                                        "code": "129",
                                        "name": "Vladimir Bessonov (Soviet Union)"
                                },
                                {
                                        "code": "130",
                                        "name": "Oleg Kuznetsov (Soviet Union)"
                                },
                                {
                                        "code": "131",
                                        "name": "Anatoliy Demyanenko (Soviet Union)"
                                },
                                {
                                        "code": "132",
                                        "name": "Sergey Gorlukovich (Soviet Union)"
                                },
                                {
                                        "code": "133",
                                        "name": "Akhrik Tsveiba (Soviet Union)"
                                },
                                {
                                        "code": "134",
                                        "name": "Vasiliy Rats (Soviet Union)"
                                },
                                {
                                        "code": "135",
                                        "name": "Aleksey Mikhailichenko (Soviet Union)"
                                },
                                {
                                        "code": "136",
                                        "name": "Gennadiy Litovchenko (Soviet Union)"
                                },
                                {
                                        "code": "137",
                                        "name": "Aleksandr Zavarov (Soviet Union)"
                                },
                                {
                                        "code": "138",
                                        "name": "Sergey Aleynikov (Soviet Union)"
                                },
                                {
                                        "code": "139",
                                        "name": "Igor Dobrovolskiy (Soviet Union)"
                                },
                                {
                                        "code": "140",
                                        "name": "Oleg Protasov (Soviet Union)"
                                },
                                {
                                        "code": "141",
                                        "name": "Aleksandr Borodyuk (Soviet Union)"
                                },
                                {
                                        "code": "142",
                                        "name": "Igor Kolyvanov (Soviet Union)"
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
                                        "code": "143",
                                        "name": "Romania Badge"
                                },
                                {
                                        "code": "144",
                                        "name": "Romania Team Photo"
                                },
                                {
                                        "code": "145",
                                        "name": "Silviu Lung (Romania)"
                                },
                                {
                                        "code": "146",
                                        "name": "Bogdan Stelea (Romania)"
                                },
                                {
                                        "code": "147",
                                        "name": "Mircea Rednic (Romania)"
                                },
                                {
                                        "code": "148",
                                        "name": "Stefan Iovan (Romania)"
                                },
                                {
                                        "code": "149",
                                        "name": "Gheorghe Popescu (Romania)"
                                },
                                {
                                        "code": "150",
                                        "name": "Ioan Andone (Romania)"
                                },
                                {
                                        "code": "151",
                                        "name": "Michael Klein (Romania)"
                                },
                                {
                                        "code": "152",
                                        "name": "Gheorghe Hagi (Romania)"
                                },
                                {
                                        "code": "153",
                                        "name": "Ioan Sabau (Romania)"
                                },
                                {
                                        "code": "154",
                                        "name": "Dorin Mateut (Romania)"
                                },
                                {
                                        "code": "155",
                                        "name": "Iosif Rotariu (Romania)"
                                },
                                {
                                        "code": "156",
                                        "name": "Danut Lupu (Romania)"
                                },
                                {
                                        "code": "157",
                                        "name": "Marius Lacatus (Romania)"
                                },
                                {
                                        "code": "158",
                                        "name": "Florin Raducioiu (Romania)"
                                },
                                {
                                        "code": "159",
                                        "name": "Rodion Camataru (Romania)"
                                },
                                {
                                        "code": "160",
                                        "name": "Ilie Dumitrescu (Romania)"
                                }
                        ]
                }
        ],
        "Group C": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "161",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "162",
                                        "name": "Brazil Team Photo"
                                },
                                {
                                        "code": "163",
                                        "name": "Taffarel (Brazil)"
                                },
                                {
                                        "code": "164",
                                        "name": "Acacio (Brazil)"
                                },
                                {
                                        "code": "165",
                                        "name": "Jorginho (Brazil)"
                                },
                                {
                                        "code": "166",
                                        "name": "Ricardo Gomes (Brazil)"
                                },
                                {
                                        "code": "167",
                                        "name": "Mauro Galvao (Brazil)"
                                },
                                {
                                        "code": "168",
                                        "name": "Mozer (Brazil)"
                                },
                                {
                                        "code": "169",
                                        "name": "Branco (Brazil)"
                                },
                                {
                                        "code": "170",
                                        "name": "Aldair (Brazil)"
                                },
                                {
                                        "code": "171",
                                        "name": "Alemao (Brazil)"
                                },
                                {
                                        "code": "172",
                                        "name": "Dunga (Brazil)"
                                },
                                {
                                        "code": "173",
                                        "name": "Valdo (Brazil)"
                                },
                                {
                                        "code": "174",
                                        "name": "Silas (Brazil)"
                                },
                                {
                                        "code": "175",
                                        "name": "Bismarck (Brazil)"
                                },
                                {
                                        "code": "176",
                                        "name": "Careca (Brazil)"
                                },
                                {
                                        "code": "177",
                                        "name": "Muller (Brazil)"
                                },
                                {
                                        "code": "178",
                                        "name": "Romario (Brazil)"
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
                                        "code": "179",
                                        "name": "Sweden Badge"
                                },
                                {
                                        "code": "180",
                                        "name": "Sweden Team Photo"
                                },
                                {
                                        "code": "181",
                                        "name": "Thomas Ravelli (Sweden)"
                                },
                                {
                                        "code": "182",
                                        "name": "Sven Andersson (Sweden)"
                                },
                                {
                                        "code": "183",
                                        "name": "Roland Nilsson (Sweden)"
                                },
                                {
                                        "code": "184",
                                        "name": "Glenn Hysen (Sweden)"
                                },
                                {
                                        "code": "185",
                                        "name": "Peter Larsson (Sweden)"
                                },
                                {
                                        "code": "186",
                                        "name": "Roger Ljung (Sweden)"
                                },
                                {
                                        "code": "187",
                                        "name": "Dennis Schiller (Sweden)"
                                },
                                {
                                        "code": "188",
                                        "name": "Klas Ingesson (Sweden)"
                                },
                                {
                                        "code": "189",
                                        "name": "Anders Limpar (Sweden)"
                                },
                                {
                                        "code": "190",
                                        "name": "Glenn Stromberg (Sweden)"
                                },
                                {
                                        "code": "191",
                                        "name": "Jonas Thern (Sweden)"
                                },
                                {
                                        "code": "192",
                                        "name": "Stefan Rehn (Sweden)"
                                },
                                {
                                        "code": "193",
                                        "name": "Joakim Nilsson (Sweden)"
                                },
                                {
                                        "code": "194",
                                        "name": "Mats Magnusson (Sweden)"
                                },
                                {
                                        "code": "195",
                                        "name": "Tomas Brolin (Sweden)"
                                },
                                {
                                        "code": "196",
                                        "name": "Johnny Ekstrom (Sweden)"
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
                                        "code": "197",
                                        "name": "Costa Rica Badge"
                                },
                                {
                                        "code": "198",
                                        "name": "Costa Rica Team Photo"
                                },
                                {
                                        "code": "199",
                                        "name": "Luis Gabelo Conejo (Costa Rica)"
                                },
                                {
                                        "code": "200",
                                        "name": "Hermidio Barrantes (Costa Rica)"
                                },
                                {
                                        "code": "201",
                                        "name": "Roger Flores (Costa Rica)"
                                },
                                {
                                        "code": "202",
                                        "name": "Mauricio Montero (Costa Rica)"
                                },
                                {
                                        "code": "203",
                                        "name": "Hector Marchena (Costa Rica)"
                                },
                                {
                                        "code": "204",
                                        "name": "Ronald Gonzalez (Costa Rica)"
                                },
                                {
                                        "code": "205",
                                        "name": "Vladimir Quesada (Costa Rica)"
                                },
                                {
                                        "code": "206",
                                        "name": "German Chavarria (Costa Rica)"
                                },
                                {
                                        "code": "207",
                                        "name": "Roger Gomez (Costa Rica)"
                                },
                                {
                                        "code": "208",
                                        "name": "Alexandre Guimaraes (Costa Rica)"
                                },
                                {
                                        "code": "209",
                                        "name": "Oscar Ramirez (Costa Rica)"
                                },
                                {
                                        "code": "210",
                                        "name": "Juan Cayasso (Costa Rica)"
                                },
                                {
                                        "code": "211",
                                        "name": "Claudio Jara (Costa Rica)"
                                },
                                {
                                        "code": "212",
                                        "name": "Hernan Medford (Costa Rica)"
                                },
                                {
                                        "code": "213",
                                        "name": "Leoni Flores (Costa Rica)"
                                },
                                {
                                        "code": "214",
                                        "name": "Roy Myers (Costa Rica)"
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
                                        "code": "215",
                                        "name": "Scotland Badge"
                                },
                                {
                                        "code": "216",
                                        "name": "Scotland Team Photo"
                                },
                                {
                                        "code": "217",
                                        "name": "Jim Leighton (Scotland)"
                                },
                                {
                                        "code": "218",
                                        "name": "Andy Goram (Scotland)"
                                },
                                {
                                        "code": "219",
                                        "name": "Alex McLeish (Scotland)"
                                },
                                {
                                        "code": "220",
                                        "name": "Maurice Malpas (Scotland)"
                                },
                                {
                                        "code": "221",
                                        "name": "Richard Gough (Scotland)"
                                },
                                {
                                        "code": "222",
                                        "name": "David McPherson (Scotland)"
                                },
                                {
                                        "code": "223",
                                        "name": "Craig Levein (Scotland)"
                                },
                                {
                                        "code": "224",
                                        "name": "Roy Aitken (Scotland)"
                                },
                                {
                                        "code": "225",
                                        "name": "Paul McStay (Scotland)"
                                },
                                {
                                        "code": "226",
                                        "name": "Stuart McCall (Scotland)"
                                },
                                {
                                        "code": "227",
                                        "name": "Murdo MacLeod (Scotland)"
                                },
                                {
                                        "code": "228",
                                        "name": "Jim Bett (Scotland)"
                                },
                                {
                                        "code": "229",
                                        "name": "Ally McCoist (Scotland)"
                                },
                                {
                                        "code": "230",
                                        "name": "Mo Johnston (Scotland)"
                                },
                                {
                                        "code": "231",
                                        "name": "Gordon Durie (Scotland)"
                                },
                                {
                                        "code": "232",
                                        "name": "Robert Fleck (Scotland)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "FRG",
                        "name": "West Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "233",
                                        "name": "West Germany Badge"
                                },
                                {
                                        "code": "234",
                                        "name": "West Germany Team Photo"
                                },
                                {
                                        "code": "235",
                                        "name": "Bodo Illgner (West Germany)"
                                },
                                {
                                        "code": "236",
                                        "name": "Raimond Aumann (West Germany)"
                                },
                                {
                                        "code": "237",
                                        "name": "Klaus Augenthaler (West Germany)"
                                },
                                {
                                        "code": "238",
                                        "name": "Thomas Berthold (West Germany)"
                                },
                                {
                                        "code": "239",
                                        "name": "Andreas Brehme (West Germany)"
                                },
                                {
                                        "code": "240",
                                        "name": "Guido Buchwald (West Germany)"
                                },
                                {
                                        "code": "241",
                                        "name": "Jurgen Kohler (West Germany)"
                                },
                                {
                                        "code": "242",
                                        "name": "Stefan Reuter (West Germany)"
                                },
                                {
                                        "code": "243",
                                        "name": "Thomas Hassler (West Germany)"
                                },
                                {
                                        "code": "244",
                                        "name": "Pierre Littbarski (West Germany)"
                                },
                                {
                                        "code": "245",
                                        "name": "Lothar Matthaus (West Germany)"
                                },
                                {
                                        "code": "246",
                                        "name": "Uwe Bein (West Germany)"
                                },
                                {
                                        "code": "247",
                                        "name": "Olaf Thon (West Germany)"
                                },
                                {
                                        "code": "248",
                                        "name": "Rudi Voller (West Germany)"
                                },
                                {
                                        "code": "249",
                                        "name": "Jurgen Klinsmann (West Germany)"
                                },
                                {
                                        "code": "250",
                                        "name": "Karl-Heinz Riedle (West Germany)"
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
                                        "code": "251",
                                        "name": "Yugoslavia Badge"
                                },
                                {
                                        "code": "252",
                                        "name": "Yugoslavia Team Photo"
                                },
                                {
                                        "code": "253",
                                        "name": "Tomislav Ivkovic (Yugoslavia)"
                                },
                                {
                                        "code": "254",
                                        "name": "Fahrudin Omerovic (Yugoslavia)"
                                },
                                {
                                        "code": "255",
                                        "name": "Predrag Spasic (Yugoslavia)"
                                },
                                {
                                        "code": "256",
                                        "name": "Zoran Vulic (Yugoslavia)"
                                },
                                {
                                        "code": "257",
                                        "name": "Mirsad Baljic (Yugoslavia)"
                                },
                                {
                                        "code": "258",
                                        "name": "Faruk Hadzibegic (Yugoslavia)"
                                },
                                {
                                        "code": "259",
                                        "name": "Davor Jozic (Yugoslavia)"
                                },
                                {
                                        "code": "260",
                                        "name": "Dragan Stojkovic (Yugoslavia)"
                                },
                                {
                                        "code": "261",
                                        "name": "Safet Susic (Yugoslavia)"
                                },
                                {
                                        "code": "262",
                                        "name": "Robert Prosinecki (Yugoslavia)"
                                },
                                {
                                        "code": "263",
                                        "name": "Dejan Savicevic (Yugoslavia)"
                                },
                                {
                                        "code": "264",
                                        "name": "Mehmed Bazdarevic (Yugoslavia)"
                                },
                                {
                                        "code": "265",
                                        "name": "Srecko Katanec (Yugoslavia)"
                                },
                                {
                                        "code": "266",
                                        "name": "Darko Pancev (Yugoslavia)"
                                },
                                {
                                        "code": "267",
                                        "name": "Zlatko Vujovic (Yugoslavia)"
                                },
                                {
                                        "code": "268",
                                        "name": "Alen Boksic (Yugoslavia)"
                                }
                        ]
                },
                {
                        "code": "UAE",
                        "name": "United Arab Emirates",
                        "flags": [
                                "ae"
                        ],
                        "stickers": [
                                {
                                        "code": "269",
                                        "name": "United Arab Emirates Badge"
                                },
                                {
                                        "code": "270",
                                        "name": "United Arab Emirates Team Photo"
                                },
                                {
                                        "code": "271",
                                        "name": "Muhsin Musabah (United Arab Emirates)"
                                },
                                {
                                        "code": "272",
                                        "name": "Abdulqadir Hassan (United Arab Emirates)"
                                },
                                {
                                        "code": "273",
                                        "name": "Khalil Ghanim (United Arab Emirates)"
                                },
                                {
                                        "code": "274",
                                        "name": "Mubarak Ghanim (United Arab Emirates)"
                                },
                                {
                                        "code": "275",
                                        "name": "Eissa Meer (United Arab Emirates)"
                                },
                                {
                                        "code": "276",
                                        "name": "Ibrahim Meer (United Arab Emirates)"
                                },
                                {
                                        "code": "277",
                                        "name": "Yousuf Hussain (United Arab Emirates)"
                                },
                                {
                                        "code": "278",
                                        "name": "Mohamed Salim (United Arab Emirates)"
                                },
                                {
                                        "code": "279",
                                        "name": "Nasir Khamees (United Arab Emirates)"
                                },
                                {
                                        "code": "280",
                                        "name": "Ali Thani (United Arab Emirates)"
                                },
                                {
                                        "code": "281",
                                        "name": "Khalid Ismail (United Arab Emirates)"
                                },
                                {
                                        "code": "282",
                                        "name": "Fahad Khamees (United Arab Emirates)"
                                },
                                {
                                        "code": "283",
                                        "name": "Adnan Al Talyani (United Arab Emirates)"
                                },
                                {
                                        "code": "284",
                                        "name": "Zuhair Bakhit (United Arab Emirates)"
                                },
                                {
                                        "code": "285",
                                        "name": "Abdulaziz Mohamed (United Arab Emirates)"
                                },
                                {
                                        "code": "286",
                                        "name": "Hussain Ghuloum (United Arab Emirates)"
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
                                        "code": "287",
                                        "name": "Colombia Badge"
                                },
                                {
                                        "code": "288",
                                        "name": "Colombia Team Photo"
                                },
                                {
                                        "code": "289",
                                        "name": "Rene Higuita (Colombia)"
                                },
                                {
                                        "code": "290",
                                        "name": "Eduardo Nino (Colombia)"
                                },
                                {
                                        "code": "291",
                                        "name": "Andres Escobar (Colombia)"
                                },
                                {
                                        "code": "292",
                                        "name": "Luis Fernando Herrera (Colombia)"
                                },
                                {
                                        "code": "293",
                                        "name": "Gildardo Gomez (Colombia)"
                                },
                                {
                                        "code": "294",
                                        "name": "Luis Carlos Perea (Colombia)"
                                },
                                {
                                        "code": "295",
                                        "name": "Carlos Hoyos (Colombia)"
                                },
                                {
                                        "code": "296",
                                        "name": "Leonel Alvarez (Colombia)"
                                },
                                {
                                        "code": "297",
                                        "name": "Carlos Valderrama (Colombia)"
                                },
                                {
                                        "code": "298",
                                        "name": "Bernardo Redin (Colombia)"
                                },
                                {
                                        "code": "299",
                                        "name": "Freddy Rincon (Colombia)"
                                },
                                {
                                        "code": "300",
                                        "name": "Gabriel Gomez (Colombia)"
                                },
                                {
                                        "code": "301",
                                        "name": "Arnoldo Iguaran (Colombia)"
                                },
                                {
                                        "code": "302",
                                        "name": "Faustino Asprilla (Colombia)"
                                },
                                {
                                        "code": "303",
                                        "name": "Albeiro Usuriaga (Colombia)"
                                },
                                {
                                        "code": "304",
                                        "name": "Ruben Dario Hernandez (Colombia)"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "BEL",
                        "name": "Belgium",
                        "flags": [
                                "be"
                        ],
                        "stickers": [
                                {
                                        "code": "305",
                                        "name": "Belgium Badge"
                                },
                                {
                                        "code": "306",
                                        "name": "Belgium Team Photo"
                                },
                                {
                                        "code": "307",
                                        "name": "Michel Preud'homme (Belgium)"
                                },
                                {
                                        "code": "308",
                                        "name": "Filip De Wilde (Belgium)"
                                },
                                {
                                        "code": "309",
                                        "name": "Eric Gerets (Belgium)"
                                },
                                {
                                        "code": "310",
                                        "name": "Georges Grun (Belgium)"
                                },
                                {
                                        "code": "311",
                                        "name": "Leo Clijsters (Belgium)"
                                },
                                {
                                        "code": "312",
                                        "name": "Stephane Demol (Belgium)"
                                },
                                {
                                        "code": "313",
                                        "name": "Michel De Wolf (Belgium)"
                                },
                                {
                                        "code": "314",
                                        "name": "Franky Van der Elst (Belgium)"
                                },
                                {
                                        "code": "315",
                                        "name": "Enzo Scifo (Belgium)"
                                },
                                {
                                        "code": "316",
                                        "name": "Jan Ceulemans (Belgium)"
                                },
                                {
                                        "code": "317",
                                        "name": "Bruno Versavel (Belgium)"
                                },
                                {
                                        "code": "318",
                                        "name": "Marc Emmers (Belgium)"
                                },
                                {
                                        "code": "319",
                                        "name": "Patrick Vervoort (Belgium)"
                                },
                                {
                                        "code": "320",
                                        "name": "Marc Degryse (Belgium)"
                                },
                                {
                                        "code": "321",
                                        "name": "Luc Nilis (Belgium)"
                                },
                                {
                                        "code": "322",
                                        "name": "Marc Van Der Linden (Belgium)"
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
                                        "code": "323",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "324",
                                        "name": "South Korea Team Photo"
                                },
                                {
                                        "code": "325",
                                        "name": "Kim Poong-joo (South Korea)"
                                },
                                {
                                        "code": "326",
                                        "name": "Choi In-young (South Korea)"
                                },
                                {
                                        "code": "327",
                                        "name": "Park Kyung-hoon (South Korea)"
                                },
                                {
                                        "code": "328",
                                        "name": "Chung Yong-hwan (South Korea)"
                                },
                                {
                                        "code": "329",
                                        "name": "Gu Sang-bum (South Korea)"
                                },
                                {
                                        "code": "330",
                                        "name": "Choi Kang-hee (South Korea)"
                                },
                                {
                                        "code": "331",
                                        "name": "Yoon Deuk-jeo (South Korea)"
                                },
                                {
                                        "code": "332",
                                        "name": "Lee Young-jin (South Korea)"
                                },
                                {
                                        "code": "333",
                                        "name": "Kim Joo-sung (South Korea)"
                                },
                                {
                                        "code": "334",
                                        "name": "Lee Heung-sil (South Korea)"
                                },
                                {
                                        "code": "335",
                                        "name": "Noh Soo-jin (South Korea)"
                                },
                                {
                                        "code": "336",
                                        "name": "Hwangbo Kwan (South Korea)"
                                },
                                {
                                        "code": "337",
                                        "name": "Byun Byung-joo (South Korea)"
                                },
                                {
                                        "code": "338",
                                        "name": "Choi Soon-ho (South Korea)"
                                },
                                {
                                        "code": "339",
                                        "name": "Hwang Sun-hong (South Korea)"
                                },
                                {
                                        "code": "340",
                                        "name": "Seo Jung-won (South Korea)"
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
                                        "code": "341",
                                        "name": "Uruguay Badge"
                                },
                                {
                                        "code": "342",
                                        "name": "Uruguay Team Photo"
                                },
                                {
                                        "code": "343",
                                        "name": "Fernando Alvez (Uruguay)"
                                },
                                {
                                        "code": "344",
                                        "name": "Eduardo Pereira (Uruguay)"
                                },
                                {
                                        "code": "345",
                                        "name": "Nelson Gutierrez (Uruguay)"
                                },
                                {
                                        "code": "346",
                                        "name": "Hugo De Leon (Uruguay)"
                                },
                                {
                                        "code": "347",
                                        "name": "Jose Herrera (Uruguay)"
                                },
                                {
                                        "code": "348",
                                        "name": "Alfonso Dominguez (Uruguay)"
                                },
                                {
                                        "code": "349",
                                        "name": "Daniel Revelez (Uruguay)"
                                },
                                {
                                        "code": "350",
                                        "name": "Enzo Francescoli (Uruguay)"
                                },
                                {
                                        "code": "351",
                                        "name": "Santiago Ostolaza (Uruguay)"
                                },
                                {
                                        "code": "352",
                                        "name": "Ruben Paz (Uruguay)"
                                },
                                {
                                        "code": "353",
                                        "name": "Jose Perdomo (Uruguay)"
                                },
                                {
                                        "code": "354",
                                        "name": "Gabriel Correa (Uruguay)"
                                },
                                {
                                        "code": "355",
                                        "name": "Ruben Pereira (Uruguay)"
                                },
                                {
                                        "code": "356",
                                        "name": "Antonio Alzamendi (Uruguay)"
                                },
                                {
                                        "code": "357",
                                        "name": "Ruben Sosa (Uruguay)"
                                },
                                {
                                        "code": "358",
                                        "name": "Carlos Aguilera (Uruguay)"
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
                                        "code": "359",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "360",
                                        "name": "Spain Team Photo"
                                },
                                {
                                        "code": "361",
                                        "name": "Andoni Zubizarreta (Spain)"
                                },
                                {
                                        "code": "362",
                                        "name": "Juan Carlos Ablanedo (Spain)"
                                },
                                {
                                        "code": "363",
                                        "name": "Chendo (Spain)"
                                },
                                {
                                        "code": "364",
                                        "name": "Manuel Sanchis (Spain)"
                                },
                                {
                                        "code": "365",
                                        "name": "Andoni Goikoetxea (Spain)"
                                },
                                {
                                        "code": "366",
                                        "name": "Quique Sanchez Flores (Spain)"
                                },
                                {
                                        "code": "367",
                                        "name": "Rafael Alkorta (Spain)"
                                },
                                {
                                        "code": "368",
                                        "name": "Genar Andrinua (Spain)"
                                },
                                {
                                        "code": "369",
                                        "name": "Michel (Spain)"
                                },
                                {
                                        "code": "370",
                                        "name": "Martin Vazquez (Spain)"
                                },
                                {
                                        "code": "371",
                                        "name": "Roberto Fernandez (Spain)"
                                },
                                {
                                        "code": "372",
                                        "name": "Fernando Hierro (Spain)"
                                },
                                {
                                        "code": "373",
                                        "name": "Jose Mari Bakero (Spain)"
                                },
                                {
                                        "code": "374",
                                        "name": "Emilio Butragueno (Spain)"
                                },
                                {
                                        "code": "375",
                                        "name": "Julio Salinas (Spain)"
                                },
                                {
                                        "code": "376",
                                        "name": "Manolo (Spain)"
                                }
                        ]
                }
        ],
        "Group F": [
                {
                        "code": "ENG",
                        "name": "England",
                        "flags": [
                                "gb-eng"
                        ],
                        "stickers": [
                                {
                                        "code": "377",
                                        "name": "England Badge"
                                },
                                {
                                        "code": "378",
                                        "name": "England Team Photo"
                                },
                                {
                                        "code": "379",
                                        "name": "Peter Shilton (England)"
                                },
                                {
                                        "code": "380",
                                        "name": "Chris Woods (England)"
                                },
                                {
                                        "code": "381",
                                        "name": "Des Walker (England)"
                                },
                                {
                                        "code": "382",
                                        "name": "Terry Butcher (England)"
                                },
                                {
                                        "code": "383",
                                        "name": "Stuart Pearce (England)"
                                },
                                {
                                        "code": "384",
                                        "name": "Paul Parker (England)"
                                },
                                {
                                        "code": "385",
                                        "name": "Gary Stevens (England)"
                                },
                                {
                                        "code": "386",
                                        "name": "Bryan Robson (England)"
                                },
                                {
                                        "code": "387",
                                        "name": "Chris Waddle (England)"
                                },
                                {
                                        "code": "388",
                                        "name": "Paul Gascoigne (England)"
                                },
                                {
                                        "code": "389",
                                        "name": "Steve McMahon (England)"
                                },
                                {
                                        "code": "390",
                                        "name": "David Platt (England)"
                                },
                                {
                                        "code": "391",
                                        "name": "John Barnes (England)"
                                },
                                {
                                        "code": "392",
                                        "name": "Gary Lineker (England)"
                                },
                                {
                                        "code": "393",
                                        "name": "Peter Beardsley (England)"
                                },
                                {
                                        "code": "394",
                                        "name": "Steve Bull (England)"
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
                                        "code": "395",
                                        "name": "Republic of Ireland Badge"
                                },
                                {
                                        "code": "396",
                                        "name": "Republic of Ireland Team Photo"
                                },
                                {
                                        "code": "397",
                                        "name": "Pat Bonner (Republic of Ireland)"
                                },
                                {
                                        "code": "398",
                                        "name": "Gerry Peyton (Republic of Ireland)"
                                },
                                {
                                        "code": "399",
                                        "name": "Chris Morris (Republic of Ireland)"
                                },
                                {
                                        "code": "400",
                                        "name": "Mick McCarthy (Republic of Ireland)"
                                },
                                {
                                        "code": "401",
                                        "name": "Kevin Moran (Republic of Ireland)"
                                },
                                {
                                        "code": "402",
                                        "name": "Steve Staunton (Republic of Ireland)"
                                },
                                {
                                        "code": "403",
                                        "name": "Chris Hughton (Republic of Ireland)"
                                },
                                {
                                        "code": "404",
                                        "name": "Paul McGrath (Republic of Ireland)"
                                },
                                {
                                        "code": "405",
                                        "name": "Ray Houghton (Republic of Ireland)"
                                },
                                {
                                        "code": "406",
                                        "name": "Ronnie Whelan (Republic of Ireland)"
                                },
                                {
                                        "code": "407",
                                        "name": "Kevin Sheedy (Republic of Ireland)"
                                },
                                {
                                        "code": "408",
                                        "name": "Andy Townsend (Republic of Ireland)"
                                },
                                {
                                        "code": "409",
                                        "name": "John Sheridan (Republic of Ireland)"
                                },
                                {
                                        "code": "410",
                                        "name": "John Aldridge (Republic of Ireland)"
                                },
                                {
                                        "code": "411",
                                        "name": "Frank Stapleton (Republic of Ireland)"
                                },
                                {
                                        "code": "412",
                                        "name": "Niall Quinn (Republic of Ireland)"
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
                                        "code": "413",
                                        "name": "Netherlands Badge"
                                },
                                {
                                        "code": "414",
                                        "name": "Netherlands Team Photo"
                                },
                                {
                                        "code": "415",
                                        "name": "Hans van Breukelen (Netherlands)"
                                },
                                {
                                        "code": "416",
                                        "name": "Joop Hiele (Netherlands)"
                                },
                                {
                                        "code": "417",
                                        "name": "Ronald Koeman (Netherlands)"
                                },
                                {
                                        "code": "418",
                                        "name": "Adri van Tiggelen (Netherlands)"
                                },
                                {
                                        "code": "419",
                                        "name": "Berry van Aerle (Netherlands)"
                                },
                                {
                                        "code": "420",
                                        "name": "Graeme Rutjes (Netherlands)"
                                },
                                {
                                        "code": "421",
                                        "name": "Danny Blind (Netherlands)"
                                },
                                {
                                        "code": "422",
                                        "name": "Frank Rijkaard (Netherlands)"
                                },
                                {
                                        "code": "423",
                                        "name": "Jan Wouters (Netherlands)"
                                },
                                {
                                        "code": "424",
                                        "name": "Gerald Vanenburg (Netherlands)"
                                },
                                {
                                        "code": "425",
                                        "name": "Erwin Koeman (Netherlands)"
                                },
                                {
                                        "code": "426",
                                        "name": "Richard Witschge (Netherlands)"
                                },
                                {
                                        "code": "427",
                                        "name": "Ruud Gullit (Netherlands)"
                                },
                                {
                                        "code": "428",
                                        "name": "Marco van Basten (Netherlands)"
                                },
                                {
                                        "code": "429",
                                        "name": "Wim Kieft (Netherlands)"
                                },
                                {
                                        "code": "430",
                                        "name": "Hans Gillhaus (Netherlands)"
                                }
                        ]
                },
                {
                        "code": "EGY",
                        "name": "Egypt",
                        "flags": [
                                "eg"
                        ],
                        "stickers": [
                                {
                                        "code": "431",
                                        "name": "Egypt Badge"
                                },
                                {
                                        "code": "432",
                                        "name": "Egypt Team Photo"
                                },
                                {
                                        "code": "433",
                                        "name": "Ahmed Shobair (Egypt)"
                                },
                                {
                                        "code": "434",
                                        "name": "Thabet El-Batal (Egypt)"
                                },
                                {
                                        "code": "435",
                                        "name": "Ibrahim Hassan (Egypt)"
                                },
                                {
                                        "code": "436",
                                        "name": "Hesham Yakan (Egypt)"
                                },
                                {
                                        "code": "437",
                                        "name": "Rabie Yassin (Egypt)"
                                },
                                {
                                        "code": "438",
                                        "name": "Hany Ramzy (Egypt)"
                                },
                                {
                                        "code": "439",
                                        "name": "Ashraf Kasem (Egypt)"
                                },
                                {
                                        "code": "440",
                                        "name": "Magdi Abdelghani (Egypt)"
                                },
                                {
                                        "code": "441",
                                        "name": "Ismail Youssef (Egypt)"
                                },
                                {
                                        "code": "442",
                                        "name": "Taher Abouzaid (Egypt)"
                                },
                                {
                                        "code": "443",
                                        "name": "Magdy Tolba (Egypt)"
                                },
                                {
                                        "code": "444",
                                        "name": "Tarek Soliman (Egypt)"
                                },
                                {
                                        "code": "445",
                                        "name": "Hossam Hassan (Egypt)"
                                },
                                {
                                        "code": "446",
                                        "name": "Gamal Abdelhamid (Egypt)"
                                },
                                {
                                        "code": "447",
                                        "name": "Ayman Shawky (Egypt)"
                                },
                                {
                                        "code": "448",
                                        "name": "Ahmed El-Kass (Egypt)"
                                }
                        ]
                }
        ]
}
};

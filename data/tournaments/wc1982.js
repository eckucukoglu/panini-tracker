// data/tournaments/wc1982.js
// Official Panini España 82 World Cup Collection (1-427)

TOURNAMENTS_CONFIG.tournaments['wc1982'] = {
    id: 'wc1982',
    categoryId: 'fifa-world-cup',
    year: 1982,
    title: 'España 82',
    subtitle: 'Spain • 24 Teams • 427 Stickers',
    dbKey: 'panini1982',
    isSequential: true,
    totalStickers: 427,
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
                        "name": "Trophy, Mascot & Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "2",
                                        "name": "Official Logo"
                                },
                                {
                                        "code": "3",
                                        "name": "Naranjito (Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "España 82"
                                },
                                {
                                        "code": "5",
                                        "name": "Poster Madrid"
                                },
                                {
                                        "code": "6",
                                        "name": "Poster Barcelona"
                                },
                                {
                                        "code": "7",
                                        "name": "Poster Sevilla"
                                },
                                {
                                        "code": "8",
                                        "name": "Poster Vigo"
                                },
                                {
                                        "code": "9",
                                        "name": "Poster La Coruña"
                                },
                                {
                                        "code": "10",
                                        "name": "Poster Gijón"
                                },
                                {
                                        "code": "11",
                                        "name": "Estadio Santiago Bernabéu Madrid"
                                },
                                {
                                        "code": "12",
                                        "name": "Estadio Vicente Calderón Madrid"
                                },
                                {
                                        "code": "13",
                                        "name": "Estadio Nou Camp Barcelona"
                                },
                                {
                                        "code": "14",
                                        "name": "Estadio Sarriá Barcelona"
                                },
                                {
                                        "code": "15",
                                        "name": "Estadio Sánchez Pizjuán Sevilla"
                                },
                                {
                                        "code": "16",
                                        "name": "Estadio Benito Villamarín Sevilla"
                                },
                                {
                                        "code": "17",
                                        "name": "Poster Oviedo"
                                },
                                {
                                        "code": "18",
                                        "name": "Poster Alicante"
                                },
                                {
                                        "code": "19",
                                        "name": "Poster Elche"
                                },
                                {
                                        "code": "20",
                                        "name": "Poster Bilbao"
                                },
                                {
                                        "code": "21",
                                        "name": "Estadio Balaídos Vigo"
                                },
                                {
                                        "code": "22",
                                        "name": "Estadio Riazor La Coruña"
                                },
                                {
                                        "code": "23",
                                        "name": "Estadio El Molinón Gijón"
                                },
                                {
                                        "code": "24",
                                        "name": "Estadio Carlos Tartiere Oviedo"
                                },
                                {
                                        "code": "25",
                                        "name": "Estadio Rico Pérez Alicante"
                                },
                                {
                                        "code": "26",
                                        "name": "Nuevo Estadio Elche"
                                },
                                {
                                        "code": "27",
                                        "name": "Poster Valladolid"
                                },
                                {
                                        "code": "28",
                                        "name": "Poster Valencia"
                                },
                                {
                                        "code": "29",
                                        "name": "Poster Zaragoza"
                                },
                                {
                                        "code": "30",
                                        "name": "Poster Malaga"
                                },
                                {
                                        "code": "31",
                                        "name": "Estadio San Mamés Bilbao"
                                },
                                {
                                        "code": "32",
                                        "name": "Estadio José Zorrilla Valladolid"
                                },
                                {
                                        "code": "33",
                                        "name": "Estadio Luis Casanova Valencia"
                                },
                                {
                                        "code": "34",
                                        "name": "Estadio La Romareda Zaragoza"
                                },
                                {
                                        "code": "35",
                                        "name": "Estadio La Rosaleda Málaga"
                                }
                        ]
                }
        ],
        "Group 1": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "36",
                                        "name": "Italia Emblem"
                                },
                                {
                                        "code": "37",
                                        "name": "Italia"
                                },
                                {
                                        "code": "38",
                                        "name": "Dino Zoff"
                                },
                                {
                                        "code": "39",
                                        "name": "Claudio Gentile"
                                },
                                {
                                        "code": "40",
                                        "name": "Gaetano Scirea"
                                },
                                {
                                        "code": "41",
                                        "name": "Fulvio Collovati"
                                },
                                {
                                        "code": "42",
                                        "name": "Pietro Vierchowod"
                                },
                                {
                                        "code": "43",
                                        "name": "Antonio Cabrini"
                                },
                                {
                                        "code": "44",
                                        "name": "Gabriele Oriali"
                                },
                                {
                                        "code": "45",
                                        "name": "Giampiero Marini"
                                },
                                {
                                        "code": "46",
                                        "name": "Marco Tardelli"
                                },
                                {
                                        "code": "47",
                                        "name": "Giuseppe Dossena"
                                },
                                {
                                        "code": "48",
                                        "name": "Giancarlo Antognoni"
                                },
                                {
                                        "code": "49",
                                        "name": "Bruno Conti"
                                },
                                {
                                        "code": "50",
                                        "name": "Paolo Rossi"
                                },
                                {
                                        "code": "51",
                                        "name": "Roberto Pruzzo"
                                },
                                {
                                        "code": "52",
                                        "name": "Francesco Graziani"
                                },
                                {
                                        "code": "53",
                                        "name": "Roberto Bettega"
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
                                        "code": "54",
                                        "name": "Polska Emblem"
                                },
                                {
                                        "code": "55",
                                        "name": "Polska"
                                },
                                {
                                        "code": "56",
                                        "name": "Jozef Mlynarczyk"
                                },
                                {
                                        "code": "57",
                                        "name": "Marek Dziuba"
                                },
                                {
                                        "code": "58",
                                        "name": "Wladyslaw Zmuda"
                                },
                                {
                                        "code": "59",
                                        "name": "Pawel Janas"
                                },
                                {
                                        "code": "60",
                                        "name": "Piotr Skrobowski"
                                },
                                {
                                        "code": "61",
                                        "name": "Jan Jalocha"
                                },
                                {
                                        "code": "62",
                                        "name": "Roman Wojcicki"
                                },
                                {
                                        "code": "63",
                                        "name": "Stefan Majewski"
                                },
                                {
                                        "code": "64",
                                        "name": "Waldemar Matysik"
                                },
                                {
                                        "code": "65",
                                        "name": "Janusz Kupcewicz"
                                },
                                {
                                        "code": "66",
                                        "name": "Zbigniew Boniek"
                                },
                                {
                                        "code": "67",
                                        "name": "Grzegorz Lato"
                                },
                                {
                                        "code": "68",
                                        "name": "Andrzej Szarmach"
                                },
                                {
                                        "code": "69",
                                        "name": "Wlodzimierz Smolarek"
                                },
                                {
                                        "code": "70",
                                        "name": "Andrzej Iwan"
                                },
                                {
                                        "code": "71",
                                        "name": "Piotr Mowlik"
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
                                        "code": "72",
                                        "name": "Peru Emblem"
                                },
                                {
                                        "code": "73",
                                        "name": "Peru"
                                },
                                {
                                        "code": "74",
                                        "name": "Ramon Quiroga"
                                },
                                {
                                        "code": "75",
                                        "name": "Jaime Duarte"
                                },
                                {
                                        "code": "76",
                                        "name": "Hector Chumpitaz"
                                },
                                {
                                        "code": "77",
                                        "name": "Salvador Salguero"
                                },
                                {
                                        "code": "78",
                                        "name": "Ruben Toribio Diaz"
                                },
                                {
                                        "code": "79",
                                        "name": "Roberto Rojas"
                                },
                                {
                                        "code": "80",
                                        "name": "Jorge Olaechea"
                                },
                                {
                                        "code": "81",
                                        "name": "Jose Velasquez"
                                },
                                {
                                        "code": "82",
                                        "name": "Cesar Cueto"
                                },
                                {
                                        "code": "83",
                                        "name": "Luis Alberto Reyna"
                                },
                                {
                                        "code": "84",
                                        "name": "Julio Cesar Uribe"
                                },
                                {
                                        "code": "85",
                                        "name": "Teofilo Cubillas"
                                },
                                {
                                        "code": "86",
                                        "name": "Jeronimo Barbadillo"
                                },
                                {
                                        "code": "87",
                                        "name": "Guilleme La Rosa"
                                },
                                {
                                        "code": "88",
                                        "name": "Juan Carlos Oblitas"
                                },
                                {
                                        "code": "89",
                                        "name": "Eusebio Acasuzo"
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
                                        "code": "90",
                                        "name": "Cameroun Emblem"
                                },
                                {
                                        "code": "91",
                                        "name": "Cameroun"
                                },
                                {
                                        "code": "92",
                                        "name": "Thomas N'Kono / Michel Kaham"
                                },
                                {
                                        "code": "93",
                                        "name": "Francois Doumbe Lea / Ibrahim AouDou"
                                },
                                {
                                        "code": "94",
                                        "name": "Ephraim M'Bom / Edmond Enoka"
                                },
                                {
                                        "code": "95",
                                        "name": "Emmanuel Kunde / Theophile Abega"
                                },
                                {
                                        "code": "96",
                                        "name": "Joseph Kanga / Jean-Pierre Tokoto"
                                },
                                {
                                        "code": "97",
                                        "name": "Paul Bahoken / Ernest-Lottin Ebongue"
                                },
                                {
                                        "code": "98",
                                        "name": "Roger Milla / Martin Maya"
                                },
                                {
                                        "code": "99",
                                        "name": "Jacques N'Guea / Antoine Bell"
                                }
                        ]
                }
        ],
        "Group 2": [
                {
                        "code": "ALG",
                        "name": "Algeria",
                        "flags": [
                                "dz"
                        ],
                        "stickers": [
                                {
                                        "code": "100",
                                        "name": "Algerie Emblem"
                                },
                                {
                                        "code": "101",
                                        "name": "Algerie"
                                },
                                {
                                        "code": "102",
                                        "name": "Mehdi Cerbah / Salah Larbes"
                                },
                                {
                                        "code": "103",
                                        "name": "Mahmoud Guendouz / Abdel Djaadaoui"
                                },
                                {
                                        "code": "104",
                                        "name": "Noureddine Kourichi / Faquzi Mansouri UER UER: First name misspelled \"Norredine\""
                                },
                                {
                                        "code": "105",
                                        "name": "Bouzid Mahyouz / Mohammed Kaci Said"
                                },
                                {
                                        "code": "106",
                                        "name": "Ali Fergani / Lakhdar Belloumi"
                                },
                                {
                                        "code": "107",
                                        "name": "Hocine Yahi / Mustapha Dahleb"
                                },
                                {
                                        "code": "108",
                                        "name": "Rabah Madjer / Djamel Zidane"
                                },
                                {
                                        "code": "109",
                                        "name": "Rabah Gamouh / Mourad Amara"
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
                                        "code": "110",
                                        "name": "Deutschland-BRD Emblem"
                                },
                                {
                                        "code": "111",
                                        "name": "Deutschland-BRD"
                                },
                                {
                                        "code": "112",
                                        "name": "Harald Schumacher"
                                },
                                {
                                        "code": "113",
                                        "name": "Manfred Kaltz"
                                },
                                {
                                        "code": "114",
                                        "name": "Ulrich Stielike"
                                },
                                {
                                        "code": "115",
                                        "name": "Wilfried Hannes"
                                },
                                {
                                        "code": "116",
                                        "name": "Karl-Heinz Förster"
                                },
                                {
                                        "code": "117",
                                        "name": "Hans-Peter Briegel"
                                },
                                {
                                        "code": "118",
                                        "name": "Bernd Förster"
                                },
                                {
                                        "code": "119",
                                        "name": "Wolfgang Dremmler"
                                },
                                {
                                        "code": "120",
                                        "name": "Bernd Schuster"
                                },
                                {
                                        "code": "121",
                                        "name": "Paul Breitner"
                                },
                                {
                                        "code": "122",
                                        "name": "Felix Wolfgang Magath"
                                },
                                {
                                        "code": "123",
                                        "name": "Hans Müller"
                                },
                                {
                                        "code": "124",
                                        "name": "Pierre Littbarski"
                                },
                                {
                                        "code": "125",
                                        "name": "Klaus Fischer"
                                },
                                {
                                        "code": "126",
                                        "name": "Horst Hrubesch"
                                },
                                {
                                        "code": "127",
                                        "name": "Karl-Heinz Rummenigge"
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
                                        "code": "128",
                                        "name": "Österreich Emblem"
                                },
                                {
                                        "code": "129",
                                        "name": "Österreich"
                                },
                                {
                                        "code": "130",
                                        "name": "Herbert Feurer"
                                },
                                {
                                        "code": "131",
                                        "name": "Hans Dihanich"
                                },
                                {
                                        "code": "132",
                                        "name": "Bernd Krauss"
                                },
                                {
                                        "code": "133",
                                        "name": "Bruno Pezzey"
                                },
                                {
                                        "code": "134",
                                        "name": "Heribert Weber"
                                },
                                {
                                        "code": "135",
                                        "name": "Hans-Dieter Mirnegg"
                                },
                                {
                                        "code": "136",
                                        "name": "Roland Hattenberger"
                                },
                                {
                                        "code": "137",
                                        "name": "Reinhold Hintermaier"
                                },
                                {
                                        "code": "138",
                                        "name": "Ernst Baumeister"
                                },
                                {
                                        "code": "139",
                                        "name": "Herbert Prohaska"
                                },
                                {
                                        "code": "140",
                                        "name": "Kurt Jara"
                                },
                                {
                                        "code": "141",
                                        "name": "Walter Schachner"
                                },
                                {
                                        "code": "142",
                                        "name": "Hans Krankl"
                                },
                                {
                                        "code": "143",
                                        "name": "Kurt Welzl"
                                },
                                {
                                        "code": "144",
                                        "name": "Christian Keglevits"
                                },
                                {
                                        "code": "145",
                                        "name": "Friedrich Koncilia"
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
                                        "code": "146",
                                        "name": "Chile Emblem"
                                },
                                {
                                        "code": "147",
                                        "name": "Chile"
                                },
                                {
                                        "code": "148",
                                        "name": "Mario Osben"
                                },
                                {
                                        "code": "149",
                                        "name": "Lizardo Garrido"
                                },
                                {
                                        "code": "150",
                                        "name": "Elias Figueroa"
                                },
                                {
                                        "code": "151",
                                        "name": "Mario Soto"
                                },
                                {
                                        "code": "152",
                                        "name": "Rene Valenzuela"
                                },
                                {
                                        "code": "153",
                                        "name": "Mario Galindo"
                                },
                                {
                                        "code": "154",
                                        "name": "Vladimir Bigorra"
                                },
                                {
                                        "code": "155",
                                        "name": "Rodolfo Dubo"
                                },
                                {
                                        "code": "156",
                                        "name": "Manuel Rojas"
                                },
                                {
                                        "code": "157",
                                        "name": "Carlos Rivas"
                                },
                                {
                                        "code": "158",
                                        "name": "Miguel Angel Neira"
                                },
                                {
                                        "code": "159",
                                        "name": "Orlando Mondaca"
                                },
                                {
                                        "code": "160",
                                        "name": "Patricio Yanez"
                                },
                                {
                                        "code": "161",
                                        "name": "Carlos Caszely"
                                },
                                {
                                        "code": "162",
                                        "name": "Gustavo Moscoso"
                                },
                                {
                                        "code": "163",
                                        "name": "Oscar Wirth"
                                }
                        ]
                }
        ],
        "Group 3": [
                {
                        "code": "ARG",
                        "name": "Argentina",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "164",
                                        "name": "Argentina Emblem"
                                },
                                {
                                        "code": "165",
                                        "name": "Argentina"
                                },
                                {
                                        "code": "166",
                                        "name": "Ubaldo Matildo Fillol"
                                },
                                {
                                        "code": "167",
                                        "name": "Jorge Mario Olguin"
                                },
                                {
                                        "code": "168",
                                        "name": "Luis Adolfo Galvan"
                                },
                                {
                                        "code": "169",
                                        "name": "Jose Van Tuyne"
                                },
                                {
                                        "code": "170",
                                        "name": "Daniel Alberto Passarella"
                                },
                                {
                                        "code": "171",
                                        "name": "Enzo Trossero"
                                },
                                {
                                        "code": "172",
                                        "name": "Alberto Cesar Tarantini"
                                },
                                {
                                        "code": "173",
                                        "name": "Americo Ruben Gallego"
                                },
                                {
                                        "code": "174",
                                        "name": "Juan Alberto Barbas"
                                },
                                {
                                        "code": "175",
                                        "name": "Osvaldo Carlos Ardiles"
                                },
                                {
                                        "code": "176",
                                        "name": "Diego Armando Maradona"
                                },
                                {
                                        "code": "177",
                                        "name": "Daniel Jose Valencia"
                                },
                                {
                                        "code": "178",
                                        "name": "Daniel Ricardo Bertoni"
                                },
                                {
                                        "code": "179",
                                        "name": "Ramon Angel Diaz"
                                },
                                {
                                        "code": "180",
                                        "name": "Mario Alberto Kempes"
                                },
                                {
                                        "code": "181",
                                        "name": "Hector Rodolfo Baley"
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
                                        "code": "182",
                                        "name": "Magyarorszag Emblem"
                                },
                                {
                                        "code": "183",
                                        "name": "Magyarorszag"
                                },
                                {
                                        "code": "184",
                                        "name": "Ferenc Meszaros"
                                },
                                {
                                        "code": "185",
                                        "name": "Gyozo Martos"
                                },
                                {
                                        "code": "186",
                                        "name": "Gabor Szanto"
                                },
                                {
                                        "code": "187",
                                        "name": "Laszlo Balint"
                                },
                                {
                                        "code": "188",
                                        "name": "Attila Kerekes"
                                },
                                {
                                        "code": "189",
                                        "name": "Imre Garaba"
                                },
                                {
                                        "code": "190",
                                        "name": "Jozsef Toth"
                                },
                                {
                                        "code": "191",
                                        "name": "Sandor Sallai"
                                },
                                {
                                        "code": "192",
                                        "name": "Sandor Muller"
                                },
                                {
                                        "code": "193",
                                        "name": "Karoly Csapo"
                                },
                                {
                                        "code": "194",
                                        "name": "Tibor Nyilasi"
                                },
                                {
                                        "code": "195",
                                        "name": "Laszlo Fazekas"
                                },
                                {
                                        "code": "196",
                                        "name": "Laszlo Kiss"
                                },
                                {
                                        "code": "197",
                                        "name": "Andras Torocsik"
                                },
                                {
                                        "code": "198",
                                        "name": "Ignac Izso"
                                },
                                {
                                        "code": "199",
                                        "name": "Bela Katzirz"
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
                                        "code": "200",
                                        "name": "Belgique-België Emblem"
                                },
                                {
                                        "code": "201",
                                        "name": "Belgique-België"
                                },
                                {
                                        "code": "202",
                                        "name": "Jean-Marie Pfaff"
                                },
                                {
                                        "code": "203",
                                        "name": "Eric Gerets"
                                },
                                {
                                        "code": "204",
                                        "name": "Walter Meeuws"
                                },
                                {
                                        "code": "205",
                                        "name": "Luc Millecamps"
                                },
                                {
                                        "code": "206",
                                        "name": "Michel Renquin"
                                },
                                {
                                        "code": "207",
                                        "name": "Marc Baecke"
                                },
                                {
                                        "code": "208",
                                        "name": "Ludo Coeck"
                                },
                                {
                                        "code": "209",
                                        "name": "Rene Vandereycken"
                                },
                                {
                                        "code": "210",
                                        "name": "Wilfried Van Moer"
                                },
                                {
                                        "code": "211",
                                        "name": "Juan Lozano"
                                },
                                {
                                        "code": "212",
                                        "name": "Frankie Vercauteren"
                                },
                                {
                                        "code": "213",
                                        "name": "Frans Van Der Elst"
                                },
                                {
                                        "code": "214",
                                        "name": "Erwin Vandenbergh"
                                },
                                {
                                        "code": "215",
                                        "name": "Jan Ceulemans"
                                },
                                {
                                        "code": "216",
                                        "name": "Alex Czerniatynski"
                                },
                                {
                                        "code": "217",
                                        "name": "Michel Preud'homme"
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
                                        "code": "218",
                                        "name": "El Salvador Emblem"
                                },
                                {
                                        "code": "219",
                                        "name": "El Salvador"
                                },
                                {
                                        "code": "220",
                                        "name": "Luis Ricardo Guevara Mora / Carlos Humberto Recinos"
                                },
                                {
                                        "code": "221",
                                        "name": "Jose Francisco Jovel / Jaime Alberto Rodrigues"
                                },
                                {
                                        "code": "222",
                                        "name": "Ramon Alfredo Fagoaga / Francisco Salvador Osorto"
                                },
                                {
                                        "code": "223",
                                        "name": "Juan Gilberto Quinteros / Jose Luis Rugamas"
                                },
                                {
                                        "code": "224",
                                        "name": "Jose Norberto Huezo / Joaquin Alonso Ventura"
                                },
                                {
                                        "code": "225",
                                        "name": "Jose Miguel Escamilla / Jorge Alberto Gonzalez"
                                },
                                {
                                        "code": "226",
                                        "name": "Oscar Gustavo Guerrero / Francisco Ever Hernandez"
                                },
                                {
                                        "code": "227",
                                        "name": "Mauricio Quintanilla / Carlos Rivera"
                                }
                        ]
                }
        ],
        "Group 4": [
                {
                        "code": "KUW",
                        "name": "Kuwait",
                        "flags": [
                                "kw"
                        ],
                        "stickers": [
                                {
                                        "code": "228",
                                        "name": "Kuwait Emblem"
                                },
                                {
                                        "code": "229",
                                        "name": "Kuwait"
                                },
                                {
                                        "code": "230",
                                        "name": "Ahmad Al-Tarabulsi / Naeem Saad Mubarak"
                                },
                                {
                                        "code": "231",
                                        "name": "Mahboub Jumaa Mubarak / Abdullah Mayouf"
                                },
                                {
                                        "code": "232",
                                        "name": "Waleed Al-Jasem / Sami Al-Hashash"
                                },
                                {
                                        "code": "233",
                                        "name": "Hamoud Al-Shemmari / Saad Al-Houti UER UER: Name misspelled \"Humoud Al-Shammari\""
                                },
                                {
                                        "code": "234",
                                        "name": "Nasser Al-Ghanem / Abdullah Al-Buloushi"
                                },
                                {
                                        "code": "235",
                                        "name": "Mohammad Karam / Fathi Kameel"
                                },
                                {
                                        "code": "236",
                                        "name": "Faisal Al-Dakheel / Jasem Yaqoub"
                                },
                                {
                                        "code": "237",
                                        "name": "Abdul-Aziz Al-Anbari / Adam Marjan"
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
                                        "code": "238",
                                        "name": "England Emblem"
                                },
                                {
                                        "code": "239",
                                        "name": "England"
                                },
                                {
                                        "code": "240",
                                        "name": "Peter Shilton"
                                },
                                {
                                        "code": "241",
                                        "name": "Phil Neal"
                                },
                                {
                                        "code": "242",
                                        "name": "Phil Thompson"
                                },
                                {
                                        "code": "243",
                                        "name": "Alvin Martin"
                                },
                                {
                                        "code": "244",
                                        "name": "Kenny Sansom"
                                },
                                {
                                        "code": "245",
                                        "name": "Mick Mills"
                                },
                                {
                                        "code": "246",
                                        "name": "Bryan Robson"
                                },
                                {
                                        "code": "247",
                                        "name": "Terry McDermott"
                                },
                                {
                                        "code": "248",
                                        "name": "Trevor Brooking"
                                },
                                {
                                        "code": "249",
                                        "name": "Glenn Hoddle"
                                },
                                {
                                        "code": "250",
                                        "name": "Kevin Keegan"
                                },
                                {
                                        "code": "251",
                                        "name": "Steve Coppell"
                                },
                                {
                                        "code": "252",
                                        "name": "Paul Mariner"
                                },
                                {
                                        "code": "253",
                                        "name": "Trevor Francis"
                                },
                                {
                                        "code": "254",
                                        "name": "Tony Woodcock"
                                },
                                {
                                        "code": "255",
                                        "name": "Ray Clemence"
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
                                        "code": "256",
                                        "name": "Ceskoslovensko Emblem"
                                },
                                {
                                        "code": "257",
                                        "name": "Ceskoslovensko"
                                },
                                {
                                        "code": "258",
                                        "name": "Zdenek Hruska"
                                },
                                {
                                        "code": "259",
                                        "name": "Frantisek Jakubec"
                                },
                                {
                                        "code": "260",
                                        "name": "Jan Fiala"
                                },
                                {
                                        "code": "261",
                                        "name": "Ladislav Jurkemik"
                                },
                                {
                                        "code": "262",
                                        "name": "Rostislav Vojacek"
                                },
                                {
                                        "code": "263",
                                        "name": "Jozef Barmos"
                                },
                                {
                                        "code": "264",
                                        "name": "Jan Berger"
                                },
                                {
                                        "code": "265",
                                        "name": "Frantisek Stambachr"
                                },
                                {
                                        "code": "266",
                                        "name": "Premysl Bicovsky"
                                },
                                {
                                        "code": "267",
                                        "name": "Antonin Panenka"
                                },
                                {
                                        "code": "268",
                                        "name": "Jan Kozak"
                                },
                                {
                                        "code": "269",
                                        "name": "Ladislav Vizek"
                                },
                                {
                                        "code": "270",
                                        "name": "Marian Masny"
                                },
                                {
                                        "code": "271",
                                        "name": "Zdenek Nehoda"
                                },
                                {
                                        "code": "272",
                                        "name": "Tomas Kriz"
                                },
                                {
                                        "code": "273",
                                        "name": "Stanislav Seman"
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
                                        "code": "274",
                                        "name": "France Emblem"
                                },
                                {
                                        "code": "275",
                                        "name": "France"
                                },
                                {
                                        "code": "276",
                                        "name": "Jean Castaneda"
                                },
                                {
                                        "code": "277",
                                        "name": "Gerard Janvion"
                                },
                                {
                                        "code": "278",
                                        "name": "Patrick Battiston"
                                },
                                {
                                        "code": "279",
                                        "name": "Marius Tresor"
                                },
                                {
                                        "code": "280",
                                        "name": "Christian Lopez"
                                },
                                {
                                        "code": "281",
                                        "name": "Maxime Bossis"
                                },
                                {
                                        "code": "282",
                                        "name": "Jean-Amadou Tigana"
                                },
                                {
                                        "code": "283",
                                        "name": "Bernard Genghini"
                                },
                                {
                                        "code": "284",
                                        "name": "Jean-Francois Larios"
                                },
                                {
                                        "code": "285",
                                        "name": "Alain Giresse"
                                },
                                {
                                        "code": "286",
                                        "name": "Michel Platini"
                                },
                                {
                                        "code": "287",
                                        "name": "Jacques Zimako"
                                },
                                {
                                        "code": "288",
                                        "name": "Dominique Rocheteau"
                                },
                                {
                                        "code": "289",
                                        "name": "Bernard Lacombe"
                                },
                                {
                                        "code": "290",
                                        "name": "Didier Six"
                                },
                                {
                                        "code": "291",
                                        "name": "Bruno Bellone"
                                }
                        ]
                }
        ],
        "Group 5": [
                {
                        "code": "ESP",
                        "name": "Spain (H)",
                        "flags": [
                                "es"
                        ],
                        "stickers": [
                                {
                                        "code": "292",
                                        "name": "España Emblem"
                                },
                                {
                                        "code": "293",
                                        "name": "España"
                                },
                                {
                                        "code": "294",
                                        "name": "Luis Arconada"
                                },
                                {
                                        "code": "295",
                                        "name": "Jose Antonio Camacho"
                                },
                                {
                                        "code": "296",
                                        "name": "Genaro Celayeta"
                                },
                                {
                                        "code": "297",
                                        "name": "Jose Ramon Alesanco"
                                },
                                {
                                        "code": "298",
                                        "name": "Miguel Tendillo"
                                },
                                {
                                        "code": "299",
                                        "name": "Rafael Gordillo"
                                },
                                {
                                        "code": "300",
                                        "name": "Victor Munoz"
                                },
                                {
                                        "code": "301",
                                        "name": "Miguel Angel Alonso"
                                },
                                {
                                        "code": "302",
                                        "name": "Jesus Maria Zamora"
                                },
                                {
                                        "code": "303",
                                        "name": "Enrique Saura"
                                },
                                {
                                        "code": "304",
                                        "name": "Marcos Alonso"
                                },
                                {
                                        "code": "305",
                                        "name": "Juan Gomez \"Juanito\""
                                },
                                {
                                        "code": "306",
                                        "name": "Jesus Satrustegui"
                                },
                                {
                                        "code": "307",
                                        "name": "Enrique Castro \"Quini\""
                                },
                                {
                                        "code": "308",
                                        "name": "Carlos Alonso \"Santillana\""
                                },
                                {
                                        "code": "309",
                                        "name": "Roberto Lopez Ufarte"
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
                                        "code": "310",
                                        "name": "Jugoslavija Emblem"
                                },
                                {
                                        "code": "311",
                                        "name": "Jugoslavija"
                                },
                                {
                                        "code": "312",
                                        "name": "Dragan Pantelic"
                                },
                                {
                                        "code": "313",
                                        "name": "Zoran Vujovic"
                                },
                                {
                                        "code": "314",
                                        "name": "Ivan Buljan"
                                },
                                {
                                        "code": "315",
                                        "name": "Velimir Zajec"
                                },
                                {
                                        "code": "316",
                                        "name": "Nenad Stojkovic"
                                },
                                {
                                        "code": "317",
                                        "name": "Zlatko Krmpotic"
                                },
                                {
                                        "code": "318",
                                        "name": "Ivan Gudelj"
                                },
                                {
                                        "code": "319",
                                        "name": "Edhem Sljivo"
                                },
                                {
                                        "code": "320",
                                        "name": "Vladimir Petrovic"
                                },
                                {
                                        "code": "321",
                                        "name": "Ivo Jerolimov"
                                },
                                {
                                        "code": "322",
                                        "name": "Ivica Surjak"
                                },
                                {
                                        "code": "323",
                                        "name": "Zlatko Vujovic"
                                },
                                {
                                        "code": "324",
                                        "name": "Vahid Halilhodzic"
                                },
                                {
                                        "code": "325",
                                        "name": "Safet Susic"
                                },
                                {
                                        "code": "326",
                                        "name": "Predrag Pasic"
                                },
                                {
                                        "code": "327",
                                        "name": "Ratko Svilar"
                                }
                        ]
                },
                {
                        "code": "NIR",
                        "name": "Northern Ireland",
                        "flags": [
                                "gb-nir"
                        ],
                        "stickers": [
                                {
                                        "code": "328",
                                        "name": "Northern Ireland Emblem"
                                },
                                {
                                        "code": "329",
                                        "name": "Northern Ireland"
                                },
                                {
                                        "code": "330",
                                        "name": "Pat Jennings"
                                },
                                {
                                        "code": "331",
                                        "name": "Jimmy Nicholl"
                                },
                                {
                                        "code": "332",
                                        "name": "Chris Nicholl"
                                },
                                {
                                        "code": "333",
                                        "name": "Sammy Nelson"
                                },
                                {
                                        "code": "334",
                                        "name": "John O'Neill"
                                },
                                {
                                        "code": "335",
                                        "name": "Mal Donaghy"
                                },
                                {
                                        "code": "336",
                                        "name": "Tommy Cassidy"
                                },
                                {
                                        "code": "337",
                                        "name": "Noel Brotherston"
                                },
                                {
                                        "code": "338",
                                        "name": "Martin O'Neill"
                                },
                                {
                                        "code": "339",
                                        "name": "Sammy McIlroy"
                                },
                                {
                                        "code": "340",
                                        "name": "David McCreery"
                                },
                                {
                                        "code": "341",
                                        "name": "Terry Cochrane"
                                },
                                {
                                        "code": "342",
                                        "name": "Garry Armstrong"
                                },
                                {
                                        "code": "343",
                                        "name": "Billy Hamilton"
                                },
                                {
                                        "code": "344",
                                        "name": "Tommy Sloan"
                                },
                                {
                                        "code": "345",
                                        "name": "Jim Platt"
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
                                        "code": "346",
                                        "name": "Honduras Emblem"
                                },
                                {
                                        "code": "347",
                                        "name": "Honduras"
                                },
                                {
                                        "code": "348",
                                        "name": "Julio Cesar Arzu"
                                },
                                {
                                        "code": "349",
                                        "name": "Efrain Gutierrez"
                                },
                                {
                                        "code": "350",
                                        "name": "Gilberto Yearwood"
                                },
                                {
                                        "code": "351",
                                        "name": "Anthony Costly"
                                },
                                {
                                        "code": "352",
                                        "name": "Jaime Villegas"
                                },
                                {
                                        "code": "353",
                                        "name": "Fernando Bulnes"
                                },
                                {
                                        "code": "354",
                                        "name": "Hector Zelaya"
                                },
                                {
                                        "code": "355",
                                        "name": "Javier Toledo"
                                },
                                {
                                        "code": "356",
                                        "name": "Ramon Maradiaga"
                                },
                                {
                                        "code": "357",
                                        "name": "Salvador Bernardes"
                                },
                                {
                                        "code": "358",
                                        "name": "Carlos Orlando Caballero"
                                },
                                {
                                        "code": "359",
                                        "name": "Tony Laing"
                                },
                                {
                                        "code": "360",
                                        "name": "Jorge Urquia"
                                },
                                {
                                        "code": "361",
                                        "name": "Jimmy James Bailey"
                                },
                                {
                                        "code": "362",
                                        "name": "Roberto Figueroa"
                                },
                                {
                                        "code": "363",
                                        "name": "Jimmy Steward"
                                }
                        ]
                }
        ],
        "Group 6": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "364",
                                        "name": "Brasil Emblem"
                                },
                                {
                                        "code": "365",
                                        "name": "Brasil"
                                },
                                {
                                        "code": "366",
                                        "name": "Valdir Peres"
                                },
                                {
                                        "code": "367",
                                        "name": "Edevaldo"
                                },
                                {
                                        "code": "368",
                                        "name": "Luisinho"
                                },
                                {
                                        "code": "369",
                                        "name": "Oscar"
                                },
                                {
                                        "code": "370",
                                        "name": "Edinho"
                                },
                                {
                                        "code": "371",
                                        "name": "Junior"
                                },
                                {
                                        "code": "372",
                                        "name": "Falcao"
                                },
                                {
                                        "code": "373",
                                        "name": "Toninho Cerezo"
                                },
                                {
                                        "code": "374",
                                        "name": "Socrates"
                                },
                                {
                                        "code": "375",
                                        "name": "Zico"
                                },
                                {
                                        "code": "376",
                                        "name": "Renato"
                                },
                                {
                                        "code": "377",
                                        "name": "Paulo Isidoro"
                                },
                                {
                                        "code": "378",
                                        "name": "Serginho"
                                },
                                {
                                        "code": "379",
                                        "name": "Roberto"
                                },
                                {
                                        "code": "380",
                                        "name": "Eder"
                                },
                                {
                                        "code": "381",
                                        "name": "Ze Sergio"
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
                                        "code": "382",
                                        "name": "SSSR Emblem"
                                },
                                {
                                        "code": "383",
                                        "name": "SSSR"
                                },
                                {
                                        "code": "384",
                                        "name": "Renat Dasaev"
                                },
                                {
                                        "code": "385",
                                        "name": "Tengiz Sulakvelidze"
                                },
                                {
                                        "code": "386",
                                        "name": "Aleksandr Chivadze"
                                },
                                {
                                        "code": "387",
                                        "name": "Sergeij Baltacha"
                                },
                                {
                                        "code": "388",
                                        "name": "Anatolij Demjanenko"
                                },
                                {
                                        "code": "389",
                                        "name": "Sergeij Borovski"
                                },
                                {
                                        "code": "390",
                                        "name": "Iurij Susloparov"
                                },
                                {
                                        "code": "391",
                                        "name": "Sergeij Shavlo"
                                },
                                {
                                        "code": "392",
                                        "name": "Vladimir Bessonov"
                                },
                                {
                                        "code": "393",
                                        "name": "Vitalij Daraselija"
                                },
                                {
                                        "code": "394",
                                        "name": "Leonid Burjak"
                                },
                                {
                                        "code": "395",
                                        "name": "David Kipiani"
                                },
                                {
                                        "code": "396",
                                        "name": "Iurij Gavrilov"
                                },
                                {
                                        "code": "397",
                                        "name": "Ramaz Scenghelija"
                                },
                                {
                                        "code": "398",
                                        "name": "Sergeij Andreev"
                                },
                                {
                                        "code": "399",
                                        "name": "Oleg Blochin"
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
                                        "code": "400",
                                        "name": "Scotland Emblem"
                                },
                                {
                                        "code": "401",
                                        "name": "Scotland"
                                },
                                {
                                        "code": "402",
                                        "name": "Alan Rough"
                                },
                                {
                                        "code": "403",
                                        "name": "Danny McGrain"
                                },
                                {
                                        "code": "404",
                                        "name": "Alex McLeish"
                                },
                                {
                                        "code": "405",
                                        "name": "Alan Hansen"
                                },
                                {
                                        "code": "406",
                                        "name": "Willie Miller"
                                },
                                {
                                        "code": "407",
                                        "name": "Frank Gray"
                                },
                                {
                                        "code": "408",
                                        "name": "Gordon Strachan"
                                },
                                {
                                        "code": "409",
                                        "name": "Asa Hartford"
                                },
                                {
                                        "code": "410",
                                        "name": "Graeme Souness"
                                },
                                {
                                        "code": "411",
                                        "name": "John Wark"
                                },
                                {
                                        "code": "412",
                                        "name": "John Robertson"
                                },
                                {
                                        "code": "413",
                                        "name": "Kenny Dalglish"
                                },
                                {
                                        "code": "414",
                                        "name": "Steve Archibald"
                                },
                                {
                                        "code": "415",
                                        "name": "Joe Jordan"
                                },
                                {
                                        "code": "416",
                                        "name": "Andy Gray"
                                },
                                {
                                        "code": "417",
                                        "name": "Davie Provan"
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
                                        "code": "418",
                                        "name": "New Zealand Emblem"
                                },
                                {
                                        "code": "419",
                                        "name": "New Zealand"
                                },
                                {
                                        "code": "420",
                                        "name": "Richard Wilson / Glen Dods"
                                },
                                {
                                        "code": "421",
                                        "name": "Bobby Almond / Ricky Herbert"
                                },
                                {
                                        "code": "422",
                                        "name": "Glen Adam / Adrian Elrick"
                                },
                                {
                                        "code": "423",
                                        "name": "Keith Mackay / Duncan Cole"
                                },
                                {
                                        "code": "424",
                                        "name": "Alan Boath / Peter Simonsen"
                                },
                                {
                                        "code": "425",
                                        "name": "Grant Turner / Steve Sumner"
                                },
                                {
                                        "code": "426",
                                        "name": "Brian Turner / Wynton Rufer"
                                },
                                {
                                        "code": "427",
                                        "name": "Steve Wooddin / Frank Van Hattum"
                                }
                        ]
                }
        ]
}
};

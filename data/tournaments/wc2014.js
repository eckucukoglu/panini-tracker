// data/tournaments/wc2014.js
// Official Panini Brasil 2014 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc2014'] = {
    id: 'wc2014',
    categoryId: 'fifa-world-cup',
    year: 2014,
    title: 'Brasil 2014',
    subtitle: 'Brazil • 32 Teams • 640 Stickers',
    dbKey: 'panini2014',
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
                        "name": "Trophy, Mascot, 12 Stadiums & Posters",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "2",
                                        "name": "Official Brasil 2014 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Fuleco (Official Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Brazuca (Official Match Ball)"
                                },
                                {
                                        "code": "5",
                                        "name": "Estádio do Maracanã (Rio de Janeiro)"
                                },
                                {
                                        "code": "6",
                                        "name": "Arena de São Paulo"
                                },
                                {
                                        "code": "7",
                                        "name": "Estádio Mineirão (Belo Horizonte)"
                                },
                                {
                                        "code": "8",
                                        "name": "Estádio Nacional Mané Garrincha (Brasília)"
                                },
                                {
                                        "code": "9",
                                        "name": "Estádio Castelão (Fortaleza)"
                                },
                                {
                                        "code": "10",
                                        "name": "Arena Fonte Nova (Salvador)"
                                },
                                {
                                        "code": "11",
                                        "name": "Estádio Beira-Rio (Porto Alegre)"
                                },
                                {
                                        "code": "12",
                                        "name": "Arena Pernambuco (Recife)"
                                },
                                {
                                        "code": "13",
                                        "name": "Arena da Amazônia (Manaus)"
                                },
                                {
                                        "code": "14",
                                        "name": "Arena Pantanal (Cuiabá)"
                                },
                                {
                                        "code": "15",
                                        "name": "Arena das Dunas (Natal)"
                                },
                                {
                                        "code": "16",
                                        "name": "Arena da Baixada (Curitiba)"
                                },
                                {
                                        "code": "17",
                                        "name": "Host City Poster: Rio de Janeiro"
                                },
                                {
                                        "code": "18",
                                        "name": "Host City Poster: São Paulo"
                                },
                                {
                                        "code": "19",
                                        "name": "Host City Poster: Belo Horizonte"
                                },
                                {
                                        "code": "20",
                                        "name": "Host City Poster: Brasília"
                                },
                                {
                                        "code": "21",
                                        "name": "Host City Poster: Fortaleza"
                                },
                                {
                                        "code": "22",
                                        "name": "Host City Poster: Salvador"
                                },
                                {
                                        "code": "23",
                                        "name": "Host City Poster: Porto Alegre"
                                },
                                {
                                        "code": "24",
                                        "name": "Host City Poster: Recife"
                                },
                                {
                                        "code": "25",
                                        "name": "Host City Poster: Manaus"
                                },
                                {
                                        "code": "26",
                                        "name": "Host City Poster: Cuiabá"
                                },
                                {
                                        "code": "27",
                                        "name": "Host City Poster: Natal"
                                },
                                {
                                        "code": "28",
                                        "name": "Host City Poster: Curitiba"
                                },
                                {
                                        "code": "29",
                                        "name": "FIFA Fair Play Emblem"
                                },
                                {
                                        "code": "30",
                                        "name": "Official Brasil 2014 Poster"
                                },
                                {
                                        "code": "31",
                                        "name": "Roll of Honour: World Champions (1930-1970)"
                                },
                                {
                                        "code": "32",
                                        "name": "Roll of Honour: World Champions (1974-2010)"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "33",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "34",
                                        "name": "Brazil Team Photo"
                                },
                                {
                                        "code": "35",
                                        "name": "Julio Cesar (Brazil)"
                                },
                                {
                                        "code": "36",
                                        "name": "Daniel Alves (Brazil)"
                                },
                                {
                                        "code": "37",
                                        "name": "Thiago Silva (Brazil)"
                                },
                                {
                                        "code": "38",
                                        "name": "David Luiz (Brazil)"
                                },
                                {
                                        "code": "39",
                                        "name": "Marcelo (Brazil)"
                                },
                                {
                                        "code": "40",
                                        "name": "Dante (Brazil)"
                                },
                                {
                                        "code": "41",
                                        "name": "Luiz Gustavo (Brazil)"
                                },
                                {
                                        "code": "42",
                                        "name": "Paulinho (Brazil)"
                                },
                                {
                                        "code": "43",
                                        "name": "Fernandinho (Brazil)"
                                },
                                {
                                        "code": "44",
                                        "name": "Oscar (Brazil)"
                                },
                                {
                                        "code": "45",
                                        "name": "Willian (Brazil)"
                                },
                                {
                                        "code": "46",
                                        "name": "Neymar Jr (Brazil)"
                                },
                                {
                                        "code": "47",
                                        "name": "Hulk (Brazil)"
                                },
                                {
                                        "code": "48",
                                        "name": "Fred (Brazil)"
                                },
                                {
                                        "code": "49",
                                        "name": "Bernard (Brazil)"
                                },
                                {
                                        "code": "50",
                                        "name": "Ramires (Brazil)"
                                },
                                {
                                        "code": "51",
                                        "name": "Jefferson (Brazil)"
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
                                        "code": "52",
                                        "name": "Croatia Badge"
                                },
                                {
                                        "code": "53",
                                        "name": "Croatia Team Photo"
                                },
                                {
                                        "code": "54",
                                        "name": "Stipe Pletikosa (Croatia)"
                                },
                                {
                                        "code": "55",
                                        "name": "Darijo Srna (Croatia)"
                                },
                                {
                                        "code": "56",
                                        "name": "Vedran Corluka (Croatia)"
                                },
                                {
                                        "code": "57",
                                        "name": "Dejan Lovren (Croatia)"
                                },
                                {
                                        "code": "58",
                                        "name": "Danijel Pranjic (Croatia)"
                                },
                                {
                                        "code": "59",
                                        "name": "Sime Vrsaljko (Croatia)"
                                },
                                {
                                        "code": "60",
                                        "name": "Ivan Rakitic (Croatia)"
                                },
                                {
                                        "code": "61",
                                        "name": "Luka Modric (Croatia)"
                                },
                                {
                                        "code": "62",
                                        "name": "Mateo Kovacic (Croatia)"
                                },
                                {
                                        "code": "63",
                                        "name": "Ivan Perisic (Croatia)"
                                },
                                {
                                        "code": "64",
                                        "name": "Ivica Olic (Croatia)"
                                },
                                {
                                        "code": "65",
                                        "name": "Mario Mandzukic (Croatia)"
                                },
                                {
                                        "code": "66",
                                        "name": "Eduardo da Silva (Croatia)"
                                },
                                {
                                        "code": "67",
                                        "name": "Ante Rebic (Croatia)"
                                },
                                {
                                        "code": "68",
                                        "name": "Marcelo Brozovic (Croatia)"
                                },
                                {
                                        "code": "69",
                                        "name": "Gordon Schildenfeld (Croatia)"
                                },
                                {
                                        "code": "70",
                                        "name": "Danijel Subasic (Croatia)"
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
                                        "code": "71",
                                        "name": "Mexico Badge"
                                },
                                {
                                        "code": "72",
                                        "name": "Mexico Team Photo"
                                },
                                {
                                        "code": "73",
                                        "name": "Guillermo Ochoa (Mexico)"
                                },
                                {
                                        "code": "74",
                                        "name": "Paul Aguilar (Mexico)"
                                },
                                {
                                        "code": "75",
                                        "name": "Francisco Rodriguez (Mexico)"
                                },
                                {
                                        "code": "76",
                                        "name": "Rafael Marquez (Mexico)"
                                },
                                {
                                        "code": "77",
                                        "name": "Hector Moreno (Mexico)"
                                },
                                {
                                        "code": "78",
                                        "name": "Miguel Layun (Mexico)"
                                },
                                {
                                        "code": "79",
                                        "name": "Jose Juan Vazquez (Mexico)"
                                },
                                {
                                        "code": "80",
                                        "name": "Hector Herrera (Mexico)"
                                },
                                {
                                        "code": "81",
                                        "name": "Andres Guardado (Mexico)"
                                },
                                {
                                        "code": "82",
                                        "name": "Carlos Pena (Mexico)"
                                },
                                {
                                        "code": "83",
                                        "name": "Giovani dos Santos (Mexico)"
                                },
                                {
                                        "code": "84",
                                        "name": "Oribe Peralta (Mexico)"
                                },
                                {
                                        "code": "85",
                                        "name": "Javier Hernandez (Mexico)"
                                },
                                {
                                        "code": "86",
                                        "name": "Raul Jimenez (Mexico)"
                                },
                                {
                                        "code": "87",
                                        "name": "Marco Fabian (Mexico)"
                                },
                                {
                                        "code": "88",
                                        "name": "Carlos Salcido (Mexico)"
                                },
                                {
                                        "code": "89",
                                        "name": "Jose de Jesus Corona (Mexico)"
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
                                        "name": "Cameroon Badge"
                                },
                                {
                                        "code": "91",
                                        "name": "Cameroon Team Photo"
                                },
                                {
                                        "code": "92",
                                        "name": "Charles Itandje (Cameroon)"
                                },
                                {
                                        "code": "93",
                                        "name": "Cedric Djeugoue (Cameroon)"
                                },
                                {
                                        "code": "94",
                                        "name": "Nicolas N'Koulou (Cameroon)"
                                },
                                {
                                        "code": "95",
                                        "name": "Aurelien Chedjou (Cameroon)"
                                },
                                {
                                        "code": "96",
                                        "name": "Henri Bedimo (Cameroon)"
                                },
                                {
                                        "code": "97",
                                        "name": "Benoit Assou-Ekotto (Cameroon)"
                                },
                                {
                                        "code": "98",
                                        "name": "Stephane Mbia (Cameroon)"
                                },
                                {
                                        "code": "99",
                                        "name": "Alexandre Song (Cameroon)"
                                },
                                {
                                        "code": "100",
                                        "name": "Eyong Enoh (Cameroon)"
                                },
                                {
                                        "code": "101",
                                        "name": "Joel Matip (Cameroon)"
                                },
                                {
                                        "code": "102",
                                        "name": "Benjamin Moukandjo (Cameroon)"
                                },
                                {
                                        "code": "103",
                                        "name": "Samuel Eto'o (Cameroon)"
                                },
                                {
                                        "code": "104",
                                        "name": "Vincent Aboubakar (Cameroon)"
                                },
                                {
                                        "code": "105",
                                        "name": "Eric Maxim Choupo-Moting (Cameroon)"
                                },
                                {
                                        "code": "106",
                                        "name": "Pierre Webo (Cameroon)"
                                },
                                {
                                        "code": "107",
                                        "name": "Jean Makoun (Cameroon)"
                                },
                                {
                                        "code": "108",
                                        "name": "Sammy N'Djock (Cameroon)"
                                }
                        ]
                }
        ],
        "Group B": [
                {
                        "code": "ESP",
                        "name": "Spain",
                        "flags": [
                                "es"
                        ],
                        "stickers": [
                                {
                                        "code": "109",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "110",
                                        "name": "Spain Team Photo"
                                },
                                {
                                        "code": "111",
                                        "name": "Iker Casillas (Spain)"
                                },
                                {
                                        "code": "112",
                                        "name": "Cesar Azpilicueta (Spain)"
                                },
                                {
                                        "code": "113",
                                        "name": "Sergio Ramos (Spain)"
                                },
                                {
                                        "code": "114",
                                        "name": "Gerard Pique (Spain)"
                                },
                                {
                                        "code": "115",
                                        "name": "Jordi Alba (Spain)"
                                },
                                {
                                        "code": "116",
                                        "name": "Javi Martinez (Spain)"
                                },
                                {
                                        "code": "117",
                                        "name": "Sergio Busquets (Spain)"
                                },
                                {
                                        "code": "118",
                                        "name": "Xabi Alonso (Spain)"
                                },
                                {
                                        "code": "119",
                                        "name": "Xavi Hernandez (Spain)"
                                },
                                {
                                        "code": "120",
                                        "name": "Andres Iniesta (Spain)"
                                },
                                {
                                        "code": "121",
                                        "name": "David Silva (Spain)"
                                },
                                {
                                        "code": "122",
                                        "name": "Koke (Spain)"
                                },
                                {
                                        "code": "123",
                                        "name": "Pedro Rodriguez (Spain)"
                                },
                                {
                                        "code": "124",
                                        "name": "Diego Costa (Spain)"
                                },
                                {
                                        "code": "125",
                                        "name": "David Villa (Spain)"
                                },
                                {
                                        "code": "126",
                                        "name": "Fernando Torres (Spain)"
                                },
                                {
                                        "code": "127",
                                        "name": "Pepe Reina (Spain)"
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
                                        "code": "128",
                                        "name": "Netherlands Badge"
                                },
                                {
                                        "code": "129",
                                        "name": "Netherlands Team Photo"
                                },
                                {
                                        "code": "130",
                                        "name": "Jasper Cillessen (Netherlands)"
                                },
                                {
                                        "code": "131",
                                        "name": "Daryl Janmaat (Netherlands)"
                                },
                                {
                                        "code": "132",
                                        "name": "Stefan de Vrij (Netherlands)"
                                },
                                {
                                        "code": "133",
                                        "name": "Ron Vlaar (Netherlands)"
                                },
                                {
                                        "code": "134",
                                        "name": "Bruno Martins Indi (Netherlands)"
                                },
                                {
                                        "code": "135",
                                        "name": "Daley Blind (Netherlands)"
                                },
                                {
                                        "code": "136",
                                        "name": "Nigel de Jong (Netherlands)"
                                },
                                {
                                        "code": "137",
                                        "name": "Jonathan de Guzman (Netherlands)"
                                },
                                {
                                        "code": "138",
                                        "name": "Georginio Wijnaldum (Netherlands)"
                                },
                                {
                                        "code": "139",
                                        "name": "Wesley Sneijder (Netherlands)"
                                },
                                {
                                        "code": "140",
                                        "name": "Arjen Robben (Netherlands)"
                                },
                                {
                                        "code": "141",
                                        "name": "Robin van Persie (Netherlands)"
                                },
                                {
                                        "code": "142",
                                        "name": "Dirk Kuyt (Netherlands)"
                                },
                                {
                                        "code": "143",
                                        "name": "Memphis Depay (Netherlands)"
                                },
                                {
                                        "code": "144",
                                        "name": "Klaas-Jan Huntelaar (Netherlands)"
                                },
                                {
                                        "code": "145",
                                        "name": "Joel Veltman (Netherlands)"
                                },
                                {
                                        "code": "146",
                                        "name": "Tim Krul (Netherlands)"
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
                                        "code": "147",
                                        "name": "Chile Badge"
                                },
                                {
                                        "code": "148",
                                        "name": "Chile Team Photo"
                                },
                                {
                                        "code": "149",
                                        "name": "Claudio Bravo (Chile)"
                                },
                                {
                                        "code": "150",
                                        "name": "Mauricio Isla (Chile)"
                                },
                                {
                                        "code": "151",
                                        "name": "Gary Medel (Chile)"
                                },
                                {
                                        "code": "152",
                                        "name": "Gonzalo Jara (Chile)"
                                },
                                {
                                        "code": "153",
                                        "name": "Eugenio Mena (Chile)"
                                },
                                {
                                        "code": "154",
                                        "name": "Charles Aranguiz (Chile)"
                                },
                                {
                                        "code": "155",
                                        "name": "Marcelo Diaz (Chile)"
                                },
                                {
                                        "code": "156",
                                        "name": "Arturo Vidal (Chile)"
                                },
                                {
                                        "code": "157",
                                        "name": "Jorge Valdivia (Chile)"
                                },
                                {
                                        "code": "158",
                                        "name": "Alexis Sanchez (Chile)"
                                },
                                {
                                        "code": "159",
                                        "name": "Eduardo Vargas (Chile)"
                                },
                                {
                                        "code": "160",
                                        "name": "Jean Beausejour (Chile)"
                                },
                                {
                                        "code": "161",
                                        "name": "Felipe Gutierrez (Chile)"
                                },
                                {
                                        "code": "162",
                                        "name": "Mauricio Pinilla (Chile)"
                                },
                                {
                                        "code": "163",
                                        "name": "Carlos Carmona (Chile)"
                                },
                                {
                                        "code": "164",
                                        "name": "Jose Rojas (Chile)"
                                },
                                {
                                        "code": "165",
                                        "name": "Johnny Herrera (Chile)"
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
                                        "code": "166",
                                        "name": "Australia Badge"
                                },
                                {
                                        "code": "167",
                                        "name": "Australia Team Photo"
                                },
                                {
                                        "code": "168",
                                        "name": "Mathew Ryan (Australia)"
                                },
                                {
                                        "code": "169",
                                        "name": "Ivan Franjic (Australia)"
                                },
                                {
                                        "code": "170",
                                        "name": "Matthew Spiranovic (Australia)"
                                },
                                {
                                        "code": "171",
                                        "name": "Alex Wilkinson (Australia)"
                                },
                                {
                                        "code": "172",
                                        "name": "Jason Davidson (Australia)"
                                },
                                {
                                        "code": "173",
                                        "name": "Mark Milligan (Australia)"
                                },
                                {
                                        "code": "174",
                                        "name": "Mile Jedinak (Australia)"
                                },
                                {
                                        "code": "175",
                                        "name": "Matt McKay (Australia)"
                                },
                                {
                                        "code": "176",
                                        "name": "Mark Bresciano (Australia)"
                                },
                                {
                                        "code": "177",
                                        "name": "Tommy Oar (Australia)"
                                },
                                {
                                        "code": "178",
                                        "name": "Mathew Leckie (Australia)"
                                },
                                {
                                        "code": "179",
                                        "name": "Tim Cahill (Australia)"
                                },
                                {
                                        "code": "180",
                                        "name": "Dario Vidosic (Australia)"
                                },
                                {
                                        "code": "181",
                                        "name": "Ben Halloran (Australia)"
                                },
                                {
                                        "code": "182",
                                        "name": "James Troisi (Australia)"
                                },
                                {
                                        "code": "183",
                                        "name": "Ryan McGowan (Australia)"
                                },
                                {
                                        "code": "184",
                                        "name": "Mitchell Langerak (Australia)"
                                }
                        ]
                }
        ],
        "Group C": [
                {
                        "code": "COL",
                        "name": "Colombia",
                        "flags": [
                                "co"
                        ],
                        "stickers": [
                                {
                                        "code": "185",
                                        "name": "Colombia Badge"
                                },
                                {
                                        "code": "186",
                                        "name": "Colombia Team Photo"
                                },
                                {
                                        "code": "187",
                                        "name": "David Ospina (Colombia)"
                                },
                                {
                                        "code": "188",
                                        "name": "Camilo Zuniga (Colombia)"
                                },
                                {
                                        "code": "189",
                                        "name": "Cristian Zapata (Colombia)"
                                },
                                {
                                        "code": "190",
                                        "name": "Mario Yepes (Colombia)"
                                },
                                {
                                        "code": "191",
                                        "name": "Pablo Armero (Colombia)"
                                },
                                {
                                        "code": "192",
                                        "name": "Santiago Arias (Colombia)"
                                },
                                {
                                        "code": "193",
                                        "name": "Carlos Sanchez (Colombia)"
                                },
                                {
                                        "code": "194",
                                        "name": "Abel Aguilar (Colombia)"
                                },
                                {
                                        "code": "195",
                                        "name": "Juan Cuadrado (Colombia)"
                                },
                                {
                                        "code": "196",
                                        "name": "James Rodriguez (Colombia)"
                                },
                                {
                                        "code": "197",
                                        "name": "Victor Ibarbo (Colombia)"
                                },
                                {
                                        "code": "198",
                                        "name": "Teofilo Gutierrez (Colombia)"
                                },
                                {
                                        "code": "199",
                                        "name": "Jackson Martinez (Colombia)"
                                },
                                {
                                        "code": "200",
                                        "name": "Carlos Bacca (Colombia)"
                                },
                                {
                                        "code": "201",
                                        "name": "Fredy Guarin (Colombia)"
                                },
                                {
                                        "code": "202",
                                        "name": "Juan Fernando Quintero (Colombia)"
                                },
                                {
                                        "code": "203",
                                        "name": "Faryd Mondragon (Colombia)"
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
                                        "code": "204",
                                        "name": "Greece Badge"
                                },
                                {
                                        "code": "205",
                                        "name": "Greece Team Photo"
                                },
                                {
                                        "code": "206",
                                        "name": "Orestis Karnezis (Greece)"
                                },
                                {
                                        "code": "207",
                                        "name": "Vasilis Torosidis (Greece)"
                                },
                                {
                                        "code": "208",
                                        "name": "Kostas Manolas (Greece)"
                                },
                                {
                                        "code": "209",
                                        "name": "Sokratis Papastathopoulos (Greece)"
                                },
                                {
                                        "code": "210",
                                        "name": "Jose Holebas (Greece)"
                                },
                                {
                                        "code": "211",
                                        "name": "Loukas Vyntra (Greece)"
                                },
                                {
                                        "code": "212",
                                        "name": "Ioannis Maniatis (Greece)"
                                },
                                {
                                        "code": "213",
                                        "name": "Kostas Katsouranis (Greece)"
                                },
                                {
                                        "code": "214",
                                        "name": "Giorgos Karagounis (Greece)"
                                },
                                {
                                        "code": "215",
                                        "name": "Panagiotis Kone (Greece)"
                                },
                                {
                                        "code": "216",
                                        "name": "Lazaros Christodoulopoulos (Greece)"
                                },
                                {
                                        "code": "217",
                                        "name": "Dimitris Salpingidis (Greece)"
                                },
                                {
                                        "code": "218",
                                        "name": "Georgios Samaras (Greece)"
                                },
                                {
                                        "code": "219",
                                        "name": "Kostas Mitroglou (Greece)"
                                },
                                {
                                        "code": "220",
                                        "name": "Theofanis Gekas (Greece)"
                                },
                                {
                                        "code": "221",
                                        "name": "Andreas Samaris (Greece)"
                                },
                                {
                                        "code": "222",
                                        "name": "Panagiotis Glykos (Greece)"
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
                                        "code": "223",
                                        "name": "Ivory Coast Badge"
                                },
                                {
                                        "code": "224",
                                        "name": "Ivory Coast Team Photo"
                                },
                                {
                                        "code": "225",
                                        "name": "Boubacar Barry (Ivory Coast)"
                                },
                                {
                                        "code": "226",
                                        "name": "Serge Aurier (Ivory Coast)"
                                },
                                {
                                        "code": "227",
                                        "name": "Kolo Toure (Ivory Coast)"
                                },
                                {
                                        "code": "228",
                                        "name": "Souleymane Bamba (Ivory Coast)"
                                },
                                {
                                        "code": "229",
                                        "name": "Arthur Boka (Ivory Coast)"
                                },
                                {
                                        "code": "230",
                                        "name": "Constant Djakpa (Ivory Coast)"
                                },
                                {
                                        "code": "231",
                                        "name": "Didier Zokora (Ivory Coast)"
                                },
                                {
                                        "code": "232",
                                        "name": "Cheick Tiote (Ivory Coast)"
                                },
                                {
                                        "code": "233",
                                        "name": "Yaya Toure (Ivory Coast)"
                                },
                                {
                                        "code": "234",
                                        "name": "Serey Die (Ivory Coast)"
                                },
                                {
                                        "code": "235",
                                        "name": "Max Gradel (Ivory Coast)"
                                },
                                {
                                        "code": "236",
                                        "name": "Gervinho (Ivory Coast)"
                                },
                                {
                                        "code": "237",
                                        "name": "Salomon Kalou (Ivory Coast)"
                                },
                                {
                                        "code": "238",
                                        "name": "Didier Drogba (Ivory Coast)"
                                },
                                {
                                        "code": "239",
                                        "name": "Wilfried Bony (Ivory Coast)"
                                },
                                {
                                        "code": "240",
                                        "name": "Giovanni Sio (Ivory Coast)"
                                },
                                {
                                        "code": "241",
                                        "name": "Sayouba Mande (Ivory Coast)"
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
                                        "code": "242",
                                        "name": "Japan Badge"
                                },
                                {
                                        "code": "243",
                                        "name": "Japan Team Photo"
                                },
                                {
                                        "code": "244",
                                        "name": "Eiji Kawashima (Japan)"
                                },
                                {
                                        "code": "245",
                                        "name": "Atsuto Uchida (Japan)"
                                },
                                {
                                        "code": "246",
                                        "name": "Yuji Nakazawa (Japan)"
                                },
                                {
                                        "code": "247",
                                        "name": "Maya Yoshida (Japan)"
                                },
                                {
                                        "code": "248",
                                        "name": "Yuto Nagatomo (Japan)"
                                },
                                {
                                        "code": "249",
                                        "name": "Yasuyuki Konno (Japan)"
                                },
                                {
                                        "code": "250",
                                        "name": "Hotaru Yamaguchi (Japan)"
                                },
                                {
                                        "code": "251",
                                        "name": "Makoto Hasebe (Japan)"
                                },
                                {
                                        "code": "252",
                                        "name": "Yasuhito Endo (Japan)"
                                },
                                {
                                        "code": "253",
                                        "name": "Shinji Kagawa (Japan)"
                                },
                                {
                                        "code": "254",
                                        "name": "Keisuke Honda (Japan)"
                                },
                                {
                                        "code": "255",
                                        "name": "Shinji Okazaki (Japan)"
                                },
                                {
                                        "code": "256",
                                        "name": "Yoshito Okubo (Japan)"
                                },
                                {
                                        "code": "257",
                                        "name": "Yoichiro Kakitani (Japan)"
                                },
                                {
                                        "code": "258",
                                        "name": "Yuya Osako (Japan)"
                                },
                                {
                                        "code": "259",
                                        "name": "Hiroshi Kiyotake (Japan)"
                                },
                                {
                                        "code": "260",
                                        "name": "Shusaku Nishikawa (Japan)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "URU",
                        "name": "Uruguay",
                        "flags": [
                                "uy"
                        ],
                        "stickers": [
                                {
                                        "code": "261",
                                        "name": "Uruguay Badge"
                                },
                                {
                                        "code": "262",
                                        "name": "Uruguay Team Photo"
                                },
                                {
                                        "code": "263",
                                        "name": "Fernando Muslera (Uruguay)"
                                },
                                {
                                        "code": "264",
                                        "name": "Maxi Pereira (Uruguay)"
                                },
                                {
                                        "code": "265",
                                        "name": "Diego Lugano (Uruguay)"
                                },
                                {
                                        "code": "266",
                                        "name": "Diego Godin (Uruguay)"
                                },
                                {
                                        "code": "267",
                                        "name": "Martin Caceres (Uruguay)"
                                },
                                {
                                        "code": "268",
                                        "name": "Jose Maria Gimenez (Uruguay)"
                                },
                                {
                                        "code": "269",
                                        "name": "Egidio Arevalo Rios (Uruguay)"
                                },
                                {
                                        "code": "270",
                                        "name": "Alvaro Gonzalez (Uruguay)"
                                },
                                {
                                        "code": "271",
                                        "name": "Cristian Rodriguez (Uruguay)"
                                },
                                {
                                        "code": "272",
                                        "name": "Nicolas Lodeiro (Uruguay)"
                                },
                                {
                                        "code": "273",
                                        "name": "Gaston Ramirez (Uruguay)"
                                },
                                {
                                        "code": "274",
                                        "name": "Luis Suarez (Uruguay)"
                                },
                                {
                                        "code": "275",
                                        "name": "Edinson Cavani (Uruguay)"
                                },
                                {
                                        "code": "276",
                                        "name": "Diego Forlan (Uruguay)"
                                },
                                {
                                        "code": "277",
                                        "name": "Christian Stuani (Uruguay)"
                                },
                                {
                                        "code": "278",
                                        "name": "Alvaro Pereira (Uruguay)"
                                },
                                {
                                        "code": "279",
                                        "name": "Martin Silva (Uruguay)"
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
                                        "code": "280",
                                        "name": "Costa Rica Badge"
                                },
                                {
                                        "code": "281",
                                        "name": "Costa Rica Team Photo"
                                },
                                {
                                        "code": "282",
                                        "name": "Keylor Navas (Costa Rica)"
                                },
                                {
                                        "code": "283",
                                        "name": "Cristian Gamboa (Costa Rica)"
                                },
                                {
                                        "code": "284",
                                        "name": "Oscar Duarte (Costa Rica)"
                                },
                                {
                                        "code": "285",
                                        "name": "Giancarlo Gonzalez (Costa Rica)"
                                },
                                {
                                        "code": "286",
                                        "name": "Michael Umana (Costa Rica)"
                                },
                                {
                                        "code": "287",
                                        "name": "Junior Diaz (Costa Rica)"
                                },
                                {
                                        "code": "288",
                                        "name": "Celso Borges (Costa Rica)"
                                },
                                {
                                        "code": "289",
                                        "name": "Yeltsin Tejeda (Costa Rica)"
                                },
                                {
                                        "code": "290",
                                        "name": "Christian Bolanos (Costa Rica)"
                                },
                                {
                                        "code": "291",
                                        "name": "Bryan Ruiz (Costa Rica)"
                                },
                                {
                                        "code": "292",
                                        "name": "Joel Campbell (Costa Rica)"
                                },
                                {
                                        "code": "293",
                                        "name": "Marco Urena (Costa Rica)"
                                },
                                {
                                        "code": "294",
                                        "name": "Randall Brenes (Costa Rica)"
                                },
                                {
                                        "code": "295",
                                        "name": "Roy Miller (Costa Rica)"
                                },
                                {
                                        "code": "296",
                                        "name": "Jose Miguel Cubero (Costa Rica)"
                                },
                                {
                                        "code": "297",
                                        "name": "Diego Calvo (Costa Rica)"
                                },
                                {
                                        "code": "298",
                                        "name": "Patrick Pemberton (Costa Rica)"
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
                                        "code": "299",
                                        "name": "England Badge"
                                },
                                {
                                        "code": "300",
                                        "name": "England Team Photo"
                                },
                                {
                                        "code": "301",
                                        "name": "Joe Hart (England)"
                                },
                                {
                                        "code": "302",
                                        "name": "Glen Johnson (England)"
                                },
                                {
                                        "code": "303",
                                        "name": "Gary Cahill (England)"
                                },
                                {
                                        "code": "304",
                                        "name": "Phil Jagielka (England)"
                                },
                                {
                                        "code": "305",
                                        "name": "Leighton Baines (England)"
                                },
                                {
                                        "code": "306",
                                        "name": "Phil Jones (England)"
                                },
                                {
                                        "code": "307",
                                        "name": "Steven Gerrard (England)"
                                },
                                {
                                        "code": "308",
                                        "name": "Jordan Henderson (England)"
                                },
                                {
                                        "code": "309",
                                        "name": "Jack Wilshere (England)"
                                },
                                {
                                        "code": "310",
                                        "name": "Raheem Sterling (England)"
                                },
                                {
                                        "code": "311",
                                        "name": "Wayne Rooney (England)"
                                },
                                {
                                        "code": "312",
                                        "name": "Daniel Sturridge (England)"
                                },
                                {
                                        "code": "313",
                                        "name": "Danny Welbeck (England)"
                                },
                                {
                                        "code": "314",
                                        "name": "Ross Barkley (England)"
                                },
                                {
                                        "code": "315",
                                        "name": "Adam Lallana (England)"
                                },
                                {
                                        "code": "316",
                                        "name": "Frank Lampard (England)"
                                },
                                {
                                        "code": "317",
                                        "name": "Ben Foster (England)"
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
                                        "code": "318",
                                        "name": "Italy Badge"
                                },
                                {
                                        "code": "319",
                                        "name": "Italy Team Photo"
                                },
                                {
                                        "code": "320",
                                        "name": "Gianluigi Buffon (Italy)"
                                },
                                {
                                        "code": "321",
                                        "name": "Matteo Darmian (Italy)"
                                },
                                {
                                        "code": "322",
                                        "name": "Andrea Barzagli (Italy)"
                                },
                                {
                                        "code": "323",
                                        "name": "Giorgio Chiellini (Italy)"
                                },
                                {
                                        "code": "324",
                                        "name": "Mattia De Sciglio (Italy)"
                                },
                                {
                                        "code": "325",
                                        "name": "Leonardo Bonucci (Italy)"
                                },
                                {
                                        "code": "326",
                                        "name": "Daniele De Rossi (Italy)"
                                },
                                {
                                        "code": "327",
                                        "name": "Andrea Pirlo (Italy)"
                                },
                                {
                                        "code": "328",
                                        "name": "Marco Verratti (Italy)"
                                },
                                {
                                        "code": "329",
                                        "name": "Claudio Marchisio (Italy)"
                                },
                                {
                                        "code": "330",
                                        "name": "Antonio Candreva (Italy)"
                                },
                                {
                                        "code": "331",
                                        "name": "Mario Balotelli (Italy)"
                                },
                                {
                                        "code": "332",
                                        "name": "Ciro Immobile (Italy)"
                                },
                                {
                                        "code": "333",
                                        "name": "Lorenzo Insigne (Italy)"
                                },
                                {
                                        "code": "334",
                                        "name": "Alessio Cerci (Italy)"
                                },
                                {
                                        "code": "335",
                                        "name": "Thiago Motta (Italy)"
                                },
                                {
                                        "code": "336",
                                        "name": "Salvatore Sirigu (Italy)"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "SUI",
                        "name": "Switzerland",
                        "flags": [
                                "ch"
                        ],
                        "stickers": [
                                {
                                        "code": "337",
                                        "name": "Switzerland Badge"
                                },
                                {
                                        "code": "338",
                                        "name": "Switzerland Team Photo"
                                },
                                {
                                        "code": "339",
                                        "name": "Diego Benaglio (Switzerland)"
                                },
                                {
                                        "code": "340",
                                        "name": "Stephan Lichtsteiner (Switzerland)"
                                },
                                {
                                        "code": "341",
                                        "name": "Fabian Schär (Switzerland)"
                                },
                                {
                                        "code": "342",
                                        "name": "Johan Djourou (Switzerland)"
                                },
                                {
                                        "code": "343",
                                        "name": "Ricardo Rodriguez (Switzerland)"
                                },
                                {
                                        "code": "344",
                                        "name": "Steve von Bergen (Switzerland)"
                                },
                                {
                                        "code": "345",
                                        "name": "Valon Behrami (Switzerland)"
                                },
                                {
                                        "code": "346",
                                        "name": "Gokhan Inler (Switzerland)"
                                },
                                {
                                        "code": "347",
                                        "name": "Granit Xhaka (Switzerland)"
                                },
                                {
                                        "code": "348",
                                        "name": "Xherdan Shaqiri (Switzerland)"
                                },
                                {
                                        "code": "349",
                                        "name": "Admir Mehmedi (Switzerland)"
                                },
                                {
                                        "code": "350",
                                        "name": "Haris Seferovic (Switzerland)"
                                },
                                {
                                        "code": "351",
                                        "name": "Josip Drmic (Switzerland)"
                                },
                                {
                                        "code": "352",
                                        "name": "Blerim Dzemaili (Switzerland)"
                                },
                                {
                                        "code": "353",
                                        "name": "Gelson Fernandes (Switzerland)"
                                },
                                {
                                        "code": "354",
                                        "name": "Valentin Stocker (Switzerland)"
                                },
                                {
                                        "code": "355",
                                        "name": "Yann Sommer (Switzerland)"
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
                                        "code": "356",
                                        "name": "Ecuador Badge"
                                },
                                {
                                        "code": "357",
                                        "name": "Ecuador Team Photo"
                                },
                                {
                                        "code": "358",
                                        "name": "Alexander Dominguez (Ecuador)"
                                },
                                {
                                        "code": "359",
                                        "name": "Juan Carlos Paredes (Ecuador)"
                                },
                                {
                                        "code": "360",
                                        "name": "Jorge Guagua (Ecuador)"
                                },
                                {
                                        "code": "361",
                                        "name": "Frickson Erazo (Ecuador)"
                                },
                                {
                                        "code": "362",
                                        "name": "Walter Ayovi (Ecuador)"
                                },
                                {
                                        "code": "363",
                                        "name": "Gabriel Achilier (Ecuador)"
                                },
                                {
                                        "code": "364",
                                        "name": "Antonio Valencia (Ecuador)"
                                },
                                {
                                        "code": "365",
                                        "name": "Segundo Castillo (Ecuador)"
                                },
                                {
                                        "code": "366",
                                        "name": "Christian Noboa (Ecuador)"
                                },
                                {
                                        "code": "367",
                                        "name": "Jefferson Montero (Ecuador)"
                                },
                                {
                                        "code": "368",
                                        "name": "Enner Valencia (Ecuador)"
                                },
                                {
                                        "code": "369",
                                        "name": "Felipe Caicedo (Ecuador)"
                                },
                                {
                                        "code": "370",
                                        "name": "Michael Arroyo (Ecuador)"
                                },
                                {
                                        "code": "371",
                                        "name": "Renato Ibarra (Ecuador)"
                                },
                                {
                                        "code": "372",
                                        "name": "Oswaldo Minda (Ecuador)"
                                },
                                {
                                        "code": "373",
                                        "name": "Jaime Ayovi (Ecuador)"
                                },
                                {
                                        "code": "374",
                                        "name": "Maximo Banguera (Ecuador)"
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
                                        "code": "375",
                                        "name": "France Badge"
                                },
                                {
                                        "code": "376",
                                        "name": "France Team Photo"
                                },
                                {
                                        "code": "377",
                                        "name": "Hugo Lloris (France)"
                                },
                                {
                                        "code": "378",
                                        "name": "Mathieu Debuchy (France)"
                                },
                                {
                                        "code": "379",
                                        "name": "Raphael Varane (France)"
                                },
                                {
                                        "code": "380",
                                        "name": "Mamadou Sakho (France)"
                                },
                                {
                                        "code": "381",
                                        "name": "Patrice Evra (France)"
                                },
                                {
                                        "code": "382",
                                        "name": "Bacary Sagna (France)"
                                },
                                {
                                        "code": "383",
                                        "name": "Paul Pogba (France)"
                                },
                                {
                                        "code": "384",
                                        "name": "Yohan Cabaye (France)"
                                },
                                {
                                        "code": "385",
                                        "name": "Blaise Matuidi (France)"
                                },
                                {
                                        "code": "386",
                                        "name": "Mathieu Valbuena (France)"
                                },
                                {
                                        "code": "387",
                                        "name": "Moussa Sissoko (France)"
                                },
                                {
                                        "code": "388",
                                        "name": "Karim Benzema (France)"
                                },
                                {
                                        "code": "389",
                                        "name": "Olivier Giroud (France)"
                                },
                                {
                                        "code": "390",
                                        "name": "Antoine Griezmann (France)"
                                },
                                {
                                        "code": "391",
                                        "name": "Loic Remy (France)"
                                },
                                {
                                        "code": "392",
                                        "name": "Laurent Koscielny (France)"
                                },
                                {
                                        "code": "393",
                                        "name": "Stephane Ruffier (France)"
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
                                        "code": "394",
                                        "name": "Honduras Badge"
                                },
                                {
                                        "code": "395",
                                        "name": "Honduras Team Photo"
                                },
                                {
                                        "code": "396",
                                        "name": "Noel Valladares (Honduras)"
                                },
                                {
                                        "code": "397",
                                        "name": "Brayan Beckeles (Honduras)"
                                },
                                {
                                        "code": "398",
                                        "name": "Victor Bernardez (Honduras)"
                                },
                                {
                                        "code": "399",
                                        "name": "Maynor Figueroa (Honduras)"
                                },
                                {
                                        "code": "400",
                                        "name": "Emilio Izaguirre (Honduras)"
                                },
                                {
                                        "code": "401",
                                        "name": "Osman Chavez (Honduras)"
                                },
                                {
                                        "code": "402",
                                        "name": "Wilson Palacios (Honduras)"
                                },
                                {
                                        "code": "403",
                                        "name": "Luis Garrido (Honduras)"
                                },
                                {
                                        "code": "404",
                                        "name": "Boniek Garcia (Honduras)"
                                },
                                {
                                        "code": "405",
                                        "name": "Andy Najar (Honduras)"
                                },
                                {
                                        "code": "406",
                                        "name": "Roger Espinoza (Honduras)"
                                },
                                {
                                        "code": "407",
                                        "name": "Carlo Costly (Honduras)"
                                },
                                {
                                        "code": "408",
                                        "name": "Jerry Bengtson (Honduras)"
                                },
                                {
                                        "code": "409",
                                        "name": "Marvin Chavez (Honduras)"
                                },
                                {
                                        "code": "410",
                                        "name": "Jerry Palacios (Honduras)"
                                },
                                {
                                        "code": "411",
                                        "name": "Mario Martinez (Honduras)"
                                },
                                {
                                        "code": "412",
                                        "name": "Donis Escober (Honduras)"
                                }
                        ]
                }
        ],
        "Group F": [
                {
                        "code": "ARG",
                        "name": "Argentina",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "413",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "414",
                                        "name": "Argentina Team Photo"
                                },
                                {
                                        "code": "415",
                                        "name": "Sergio Romero (Argentina)"
                                },
                                {
                                        "code": "416",
                                        "name": "Pablo Zabaleta (Argentina)"
                                },
                                {
                                        "code": "417",
                                        "name": "Federico Fernandez (Argentina)"
                                },
                                {
                                        "code": "418",
                                        "name": "Ezequiel Garay (Argentina)"
                                },
                                {
                                        "code": "419",
                                        "name": "Marcos Rojo (Argentina)"
                                },
                                {
                                        "code": "420",
                                        "name": "Martin Demichelis (Argentina)"
                                },
                                {
                                        "code": "421",
                                        "name": "Javier Mascherano (Argentina)"
                                },
                                {
                                        "code": "422",
                                        "name": "Fernando Gago (Argentina)"
                                },
                                {
                                        "code": "423",
                                        "name": "Angel Di Maria (Argentina)"
                                },
                                {
                                        "code": "424",
                                        "name": "Lionel Messi (Argentina)"
                                },
                                {
                                        "code": "425",
                                        "name": "Gonzalo Higuain (Argentina)"
                                },
                                {
                                        "code": "426",
                                        "name": "Sergio Aguero (Argentina)"
                                },
                                {
                                        "code": "427",
                                        "name": "Ezequiel Lavezzi (Argentina)"
                                },
                                {
                                        "code": "428",
                                        "name": "Rodrigo Palacio (Argentina)"
                                },
                                {
                                        "code": "429",
                                        "name": "Maxi Rodriguez (Argentina)"
                                },
                                {
                                        "code": "430",
                                        "name": "Lucas Biglia (Argentina)"
                                },
                                {
                                        "code": "431",
                                        "name": "Mariano Andujar (Argentina)"
                                }
                        ]
                },
                {
                        "code": "BIH",
                        "name": "Bosnia and Herzegovina",
                        "flags": [
                                "ba"
                        ],
                        "stickers": [
                                {
                                        "code": "432",
                                        "name": "Bosnia and Herzegovina Badge"
                                },
                                {
                                        "code": "433",
                                        "name": "Bosnia and Herzegovina Team Photo"
                                },
                                {
                                        "code": "434",
                                        "name": "Asmir Begovic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "435",
                                        "name": "Mensur Mujdza (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "436",
                                        "name": "Ermin Bicakcic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "437",
                                        "name": "Emir Spahic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "438",
                                        "name": "Sead Kolasinac (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "439",
                                        "name": "Toni Sunjic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "440",
                                        "name": "Muhamed Besic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "441",
                                        "name": "Miralem Pjanic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "442",
                                        "name": "Zvjezdan Misimovic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "443",
                                        "name": "Senad Lulic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "444",
                                        "name": "Haris Medunjanin (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "445",
                                        "name": "Edin Dzeko (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "446",
                                        "name": "Vedad Ibisevic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "447",
                                        "name": "Izet Hajrovic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "448",
                                        "name": "Edin Visca (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "449",
                                        "name": "Sejad Salihovic (Bosnia and Herzegovina)"
                                },
                                {
                                        "code": "450",
                                        "name": "Asmir Avdukic (Bosnia and Herzegovina)"
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
                                        "code": "451",
                                        "name": "Iran Badge"
                                },
                                {
                                        "code": "452",
                                        "name": "Iran Team Photo"
                                },
                                {
                                        "code": "453",
                                        "name": "Alireza Haghighi (Iran)"
                                },
                                {
                                        "code": "454",
                                        "name": "Pejman Montazeri (Iran)"
                                },
                                {
                                        "code": "455",
                                        "name": "Jalal Hosseini (Iran)"
                                },
                                {
                                        "code": "456",
                                        "name": "Amir Hossein Sadeghi (Iran)"
                                },
                                {
                                        "code": "457",
                                        "name": "Mehrdad Pooladi (Iran)"
                                },
                                {
                                        "code": "458",
                                        "name": "Khosro Heydari (Iran)"
                                },
                                {
                                        "code": "459",
                                        "name": "Andranik Teymourian (Iran)"
                                },
                                {
                                        "code": "460",
                                        "name": "Javad Nekounam (Iran)"
                                },
                                {
                                        "code": "461",
                                        "name": "Ehsan Hajsafi (Iran)"
                                },
                                {
                                        "code": "462",
                                        "name": "Ashkan Dejagah (Iran)"
                                },
                                {
                                        "code": "463",
                                        "name": "Masoud Shojaei (Iran)"
                                },
                                {
                                        "code": "464",
                                        "name": "Reza Ghoochannejhad (Iran)"
                                },
                                {
                                        "code": "465",
                                        "name": "Karim Ansarifard (Iran)"
                                },
                                {
                                        "code": "466",
                                        "name": "Alireza Jahanbakhsh (Iran)"
                                },
                                {
                                        "code": "467",
                                        "name": "Khosro Heydari (Iran)"
                                },
                                {
                                        "code": "468",
                                        "name": "Hashem Beikzadeh (Iran)"
                                },
                                {
                                        "code": "469",
                                        "name": "Rahman Ahmadi (Iran)"
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
                                        "code": "470",
                                        "name": "Nigeria Badge"
                                },
                                {
                                        "code": "471",
                                        "name": "Nigeria Team Photo"
                                },
                                {
                                        "code": "472",
                                        "name": "Vincent Enyeama (Nigeria)"
                                },
                                {
                                        "code": "473",
                                        "name": "Efe Ambrose (Nigeria)"
                                },
                                {
                                        "code": "474",
                                        "name": "Joseph Yobo (Nigeria)"
                                },
                                {
                                        "code": "475",
                                        "name": "Kenneth Omeruo (Nigeria)"
                                },
                                {
                                        "code": "476",
                                        "name": "Juwon Oshaniwa (Nigeria)"
                                },
                                {
                                        "code": "477",
                                        "name": "Godfrey Oboabona (Nigeria)"
                                },
                                {
                                        "code": "478",
                                        "name": "John Obi Mikel (Nigeria)"
                                },
                                {
                                        "code": "479",
                                        "name": "Ogenyi Onazi (Nigeria)"
                                },
                                {
                                        "code": "480",
                                        "name": "Michael Babatunde (Nigeria)"
                                },
                                {
                                        "code": "481",
                                        "name": "Peter Odemwingie (Nigeria)"
                                },
                                {
                                        "code": "482",
                                        "name": "Ahmed Musa (Nigeria)"
                                },
                                {
                                        "code": "483",
                                        "name": "Emmanuel Emenike (Nigeria)"
                                },
                                {
                                        "code": "484",
                                        "name": "Victor Moses (Nigeria)"
                                },
                                {
                                        "code": "485",
                                        "name": "Shola Ameobi (Nigeria)"
                                },
                                {
                                        "code": "486",
                                        "name": "Ramon Azeez (Nigeria)"
                                },
                                {
                                        "code": "487",
                                        "name": "Uche Nwofor (Nigeria)"
                                },
                                {
                                        "code": "488",
                                        "name": "Austin Ejide (Nigeria)"
                                }
                        ]
                }
        ],
        "Group G": [
                {
                        "code": "GER",
                        "name": "Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "489",
                                        "name": "Germany Badge"
                                },
                                {
                                        "code": "490",
                                        "name": "Germany Team Photo"
                                },
                                {
                                        "code": "491",
                                        "name": "Manuel Neuer (Germany)"
                                },
                                {
                                        "code": "492",
                                        "name": "Philipp Lahm (Germany)"
                                },
                                {
                                        "code": "493",
                                        "name": "Jerome Boateng (Germany)"
                                },
                                {
                                        "code": "494",
                                        "name": "Mats Hummels (Germany)"
                                },
                                {
                                        "code": "495",
                                        "name": "Benedikt Höwedes (Germany)"
                                },
                                {
                                        "code": "496",
                                        "name": "Per Mertesacker (Germany)"
                                },
                                {
                                        "code": "497",
                                        "name": "Sami Khedira (Germany)"
                                },
                                {
                                        "code": "498",
                                        "name": "Bastian Schweinsteiger (Germany)"
                                },
                                {
                                        "code": "499",
                                        "name": "Toni Kroos (Germany)"
                                },
                                {
                                        "code": "500",
                                        "name": "Mesut Özil (Germany)"
                                },
                                {
                                        "code": "501",
                                        "name": "Thomas Müller (Germany)"
                                },
                                {
                                        "code": "502",
                                        "name": "Mario Götze (Germany)"
                                },
                                {
                                        "code": "503",
                                        "name": "Miroslav Klose (Germany)"
                                },
                                {
                                        "code": "504",
                                        "name": "André Schürrle (Germany)"
                                },
                                {
                                        "code": "505",
                                        "name": "Lukas Podolski (Germany)"
                                },
                                {
                                        "code": "506",
                                        "name": "Julian Draxler (Germany)"
                                },
                                {
                                        "code": "507",
                                        "name": "Roman Weidenfeller (Germany)"
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
                                        "code": "508",
                                        "name": "Portugal Badge"
                                },
                                {
                                        "code": "509",
                                        "name": "Portugal Team Photo"
                                },
                                {
                                        "code": "510",
                                        "name": "Rui Patricio (Portugal)"
                                },
                                {
                                        "code": "511",
                                        "name": "Joao Pereira (Portugal)"
                                },
                                {
                                        "code": "512",
                                        "name": "Pepe (Portugal)"
                                },
                                {
                                        "code": "513",
                                        "name": "Bruno Alves (Portugal)"
                                },
                                {
                                        "code": "514",
                                        "name": "Fabio Coentrao (Portugal)"
                                },
                                {
                                        "code": "515",
                                        "name": "Ricardo Costa (Portugal)"
                                },
                                {
                                        "code": "516",
                                        "name": "Miguel Veloso (Portugal)"
                                },
                                {
                                        "code": "517",
                                        "name": "Joao Moutinho (Portugal)"
                                },
                                {
                                        "code": "518",
                                        "name": "Raul Meireles (Portugal)"
                                },
                                {
                                        "code": "519",
                                        "name": "Nani (Portugal)"
                                },
                                {
                                        "code": "520",
                                        "name": "Cristiano Ronaldo (Portugal)"
                                },
                                {
                                        "code": "521",
                                        "name": "Helder Postiga (Portugal)"
                                },
                                {
                                        "code": "522",
                                        "name": "Eder (Portugal)"
                                },
                                {
                                        "code": "523",
                                        "name": "Silvestre Varela (Portugal)"
                                },
                                {
                                        "code": "524",
                                        "name": "Vieirinha (Portugal)"
                                },
                                {
                                        "code": "525",
                                        "name": "William Carvalho (Portugal)"
                                },
                                {
                                        "code": "526",
                                        "name": "Beto (Portugal)"
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
                                        "code": "527",
                                        "name": "Ghana Badge"
                                },
                                {
                                        "code": "528",
                                        "name": "Ghana Team Photo"
                                },
                                {
                                        "code": "529",
                                        "name": "Fatau Dauda (Ghana)"
                                },
                                {
                                        "code": "530",
                                        "name": "Harrison Afful (Ghana)"
                                },
                                {
                                        "code": "531",
                                        "name": "John Boye (Ghana)"
                                },
                                {
                                        "code": "532",
                                        "name": "Jonathan Mensah (Ghana)"
                                },
                                {
                                        "code": "533",
                                        "name": "Kwadwo Asamoah (Ghana)"
                                },
                                {
                                        "code": "534",
                                        "name": "Daniel Opare (Ghana)"
                                },
                                {
                                        "code": "535",
                                        "name": "Rabiu Mohammed (Ghana)"
                                },
                                {
                                        "code": "536",
                                        "name": "Sulley Muntari (Ghana)"
                                },
                                {
                                        "code": "537",
                                        "name": "Christian Atsu (Ghana)"
                                },
                                {
                                        "code": "538",
                                        "name": "Kevin-Prince Boateng (Ghana)"
                                },
                                {
                                        "code": "539",
                                        "name": "Andre Ayew (Ghana)"
                                },
                                {
                                        "code": "540",
                                        "name": "Asamoah Gyan (Ghana)"
                                },
                                {
                                        "code": "541",
                                        "name": "Jordan Ayew (Ghana)"
                                },
                                {
                                        "code": "542",
                                        "name": "Mubarak Wakaso (Ghana)"
                                },
                                {
                                        "code": "543",
                                        "name": "Michael Essien (Ghana)"
                                },
                                {
                                        "code": "544",
                                        "name": "Afriyie Acquah (Ghana)"
                                },
                                {
                                        "code": "545",
                                        "name": "Adam Kwarasey (Ghana)"
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
                                        "code": "546",
                                        "name": "United States Badge"
                                },
                                {
                                        "code": "547",
                                        "name": "United States Team Photo"
                                },
                                {
                                        "code": "548",
                                        "name": "Tim Howard (United States)"
                                },
                                {
                                        "code": "549",
                                        "name": "Fabian Johnson (United States)"
                                },
                                {
                                        "code": "550",
                                        "name": "Geoff Cameron (United States)"
                                },
                                {
                                        "code": "551",
                                        "name": "Matt Besler (United States)"
                                },
                                {
                                        "code": "552",
                                        "name": "DaMarcus Beasley (United States)"
                                },
                                {
                                        "code": "553",
                                        "name": "Omar Gonzalez (United States)"
                                },
                                {
                                        "code": "554",
                                        "name": "Kyle Beckerman (United States)"
                                },
                                {
                                        "code": "555",
                                        "name": "Jermaine Jones (United States)"
                                },
                                {
                                        "code": "556",
                                        "name": "Michael Bradley (United States)"
                                },
                                {
                                        "code": "557",
                                        "name": "Alejandro Bedoya (United States)"
                                },
                                {
                                        "code": "558",
                                        "name": "Graham Zusi (United States)"
                                },
                                {
                                        "code": "559",
                                        "name": "Clint Dempsey (United States)"
                                },
                                {
                                        "code": "560",
                                        "name": "Jozy Altidore (United States)"
                                },
                                {
                                        "code": "561",
                                        "name": "Chris Wondolowski (United States)"
                                },
                                {
                                        "code": "562",
                                        "name": "Aron Johannsson (United States)"
                                },
                                {
                                        "code": "563",
                                        "name": "Julian Green (United States)"
                                },
                                {
                                        "code": "564",
                                        "name": "Brad Guzan (United States)"
                                }
                        ]
                }
        ],
        "Group H": [
                {
                        "code": "BEL",
                        "name": "Belgium",
                        "flags": [
                                "be"
                        ],
                        "stickers": [
                                {
                                        "code": "565",
                                        "name": "Belgium Badge"
                                },
                                {
                                        "code": "566",
                                        "name": "Belgium Team Photo"
                                },
                                {
                                        "code": "567",
                                        "name": "Thibaut Courtois (Belgium)"
                                },
                                {
                                        "code": "568",
                                        "name": "Toby Alderweireld (Belgium)"
                                },
                                {
                                        "code": "569",
                                        "name": "Vincent Kompany (Belgium)"
                                },
                                {
                                        "code": "570",
                                        "name": "Daniel Van Buyten (Belgium)"
                                },
                                {
                                        "code": "571",
                                        "name": "Jan Vertonghen (Belgium)"
                                },
                                {
                                        "code": "572",
                                        "name": "Thomas Vermaelen (Belgium)"
                                },
                                {
                                        "code": "573",
                                        "name": "Axel Witsel (Belgium)"
                                },
                                {
                                        "code": "574",
                                        "name": "Marouane Fellaini (Belgium)"
                                },
                                {
                                        "code": "575",
                                        "name": "Kevin De Bruyne (Belgium)"
                                },
                                {
                                        "code": "576",
                                        "name": "Eden Hazard (Belgium)"
                                },
                                {
                                        "code": "577",
                                        "name": "Dries Mertens (Belgium)"
                                },
                                {
                                        "code": "578",
                                        "name": "Romelu Lukaku (Belgium)"
                                },
                                {
                                        "code": "579",
                                        "name": "Divock Origi (Belgium)"
                                },
                                {
                                        "code": "580",
                                        "name": "Adnan Januzaj (Belgium)"
                                },
                                {
                                        "code": "581",
                                        "name": "Nacer Chadli (Belgium)"
                                },
                                {
                                        "code": "582",
                                        "name": "Mousa Dembele (Belgium)"
                                },
                                {
                                        "code": "583",
                                        "name": "Simon Mignolet (Belgium)"
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
                                        "code": "584",
                                        "name": "Algeria Badge"
                                },
                                {
                                        "code": "585",
                                        "name": "Algeria Team Photo"
                                },
                                {
                                        "code": "586",
                                        "name": "Rais M'Bolhi (Algeria)"
                                },
                                {
                                        "code": "587",
                                        "name": "Aissa Mandi (Algeria)"
                                },
                                {
                                        "code": "588",
                                        "name": "Madjid Bougherra (Algeria)"
                                },
                                {
                                        "code": "589",
                                        "name": "Rafik Halliche (Algeria)"
                                },
                                {
                                        "code": "590",
                                        "name": "Faouzi Ghoulam (Algeria)"
                                },
                                {
                                        "code": "591",
                                        "name": "Carl Medjani (Algeria)"
                                },
                                {
                                        "code": "592",
                                        "name": "Mehdi Mostefa (Algeria)"
                                },
                                {
                                        "code": "593",
                                        "name": "Nabil Bentaleb (Algeria)"
                                },
                                {
                                        "code": "594",
                                        "name": "Saphir Taider (Algeria)"
                                },
                                {
                                        "code": "595",
                                        "name": "Sofiane Feghouli (Algeria)"
                                },
                                {
                                        "code": "596",
                                        "name": "Yacine Brahimi (Algeria)"
                                },
                                {
                                        "code": "597",
                                        "name": "Islam Slimani (Algeria)"
                                },
                                {
                                        "code": "598",
                                        "name": "El Arabi Hillel Soudani (Algeria)"
                                },
                                {
                                        "code": "599",
                                        "name": "Nabil Ghilas (Algeria)"
                                },
                                {
                                        "code": "600",
                                        "name": "Riyad Mahrez (Algeria)"
                                },
                                {
                                        "code": "601",
                                        "name": "Hassan Yebda (Algeria)"
                                },
                                {
                                        "code": "602",
                                        "name": "Mohamed Lamine Zemmamouche (Algeria)"
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
                                        "code": "603",
                                        "name": "Russia Badge"
                                },
                                {
                                        "code": "604",
                                        "name": "Russia Team Photo"
                                },
                                {
                                        "code": "605",
                                        "name": "Igor Akinfeev (Russia)"
                                },
                                {
                                        "code": "606",
                                        "name": "Alexei Kozlov (Russia)"
                                },
                                {
                                        "code": "607",
                                        "name": "Vasili Berezutski (Russia)"
                                },
                                {
                                        "code": "608",
                                        "name": "Sergei Ignashevich (Russia)"
                                },
                                {
                                        "code": "609",
                                        "name": "Dmitri Kombarov (Russia)"
                                },
                                {
                                        "code": "610",
                                        "name": "Andrey Eshchenko (Russia)"
                                },
                                {
                                        "code": "611",
                                        "name": "Denis Glushakov (Russia)"
                                },
                                {
                                        "code": "612",
                                        "name": "Igor Denisov (Russia)"
                                },
                                {
                                        "code": "613",
                                        "name": "Viktor Fayzulin (Russia)"
                                },
                                {
                                        "code": "614",
                                        "name": "Roman Shirokov (Russia)"
                                },
                                {
                                        "code": "615",
                                        "name": "Oleg Shatov (Russia)"
                                },
                                {
                                        "code": "616",
                                        "name": "Alexander Samedov (Russia)"
                                },
                                {
                                        "code": "617",
                                        "name": "Alexander Kokorin (Russia)"
                                },
                                {
                                        "code": "618",
                                        "name": "Alexander Kerzhakov (Russia)"
                                },
                                {
                                        "code": "619",
                                        "name": "Alan Dzagoev (Russia)"
                                },
                                {
                                        "code": "620",
                                        "name": "Maxim Kanunnikov (Russia)"
                                },
                                {
                                        "code": "621",
                                        "name": "Yuri Lodygin (Russia)"
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
                                        "code": "622",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "623",
                                        "name": "South Korea Team Photo"
                                },
                                {
                                        "code": "624",
                                        "name": "Jung Sung-ryong (South Korea)"
                                },
                                {
                                        "code": "625",
                                        "name": "Lee Yong (South Korea)"
                                },
                                {
                                        "code": "626",
                                        "name": "Hong Jeong-ho (South Korea)"
                                },
                                {
                                        "code": "627",
                                        "name": "Kim Young-gwon (South Korea)"
                                },
                                {
                                        "code": "628",
                                        "name": "Yun Suk-young (South Korea)"
                                },
                                {
                                        "code": "629",
                                        "name": "Kim Chang-soo (South Korea)"
                                },
                                {
                                        "code": "630",
                                        "name": "Han Kook-young (South Korea)"
                                },
                                {
                                        "code": "631",
                                        "name": "Ki Sung-yueng (South Korea)"
                                },
                                {
                                        "code": "632",
                                        "name": "Lee Chung-yong (South Korea)"
                                },
                                {
                                        "code": "633",
                                        "name": "Koo Ja-cheol (South Korea)"
                                },
                                {
                                        "code": "634",
                                        "name": "Son Heung-min (South Korea)"
                                },
                                {
                                        "code": "635",
                                        "name": "Park Chu-young (South Korea)"
                                },
                                {
                                        "code": "636",
                                        "name": "Kim Shin-wook (South Korea)"
                                },
                                {
                                        "code": "637",
                                        "name": "Ji Dong-won (South Korea)"
                                },
                                {
                                        "code": "638",
                                        "name": "Kim Bo-kyung (South Korea)"
                                },
                                {
                                        "code": "639",
                                        "name": "Ha Dae-sung (South Korea)"
                                },
                                {
                                        "code": "640",
                                        "name": "Kim Seung-gyu (South Korea)"
                                }
                        ]
                }
        ]
}
};

// data/tournaments/wc1998.js
// Official Panini France 98 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc1998'] = {
    id: 'wc1998',
    categoryId: 'fifa-world-cup',
    year: 1998,
    title: 'France 98',
    subtitle: 'France • 32 Teams • 561 Stickers',
    dbKey: 'panini1998',
    isSequential: true,
    totalStickers: 561,
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
                                        "name": "Official France 98 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Footix (Official Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Official Match Ball (Tricolore)"
                                },
                                {
                                        "code": "5",
                                        "name": "Stade de France (Saint-Denis)"
                                },
                                {
                                        "code": "6",
                                        "name": "Parc des Princes (Paris)"
                                },
                                {
                                        "code": "7",
                                        "name": "Stade Vélodrome (Marseille)"
                                },
                                {
                                        "code": "8",
                                        "name": "Stade de Gerland (Lyon)"
                                },
                                {
                                        "code": "9",
                                        "name": "Stade Félix-Bollaert (Lens)"
                                },
                                {
                                        "code": "10",
                                        "name": "Stade de la Beaujoire (Nantes)"
                                },
                                {
                                        "code": "11",
                                        "name": "Stade Chaban-Delmas (Bordeaux)"
                                },
                                {
                                        "code": "12",
                                        "name": "Stadium de Toulouse"
                                },
                                {
                                        "code": "13",
                                        "name": "Stade Geoffroy-Guichard (Saint-Étienne)"
                                },
                                {
                                        "code": "14",
                                        "name": "Stade de la Mosson (Montpellier)"
                                },
                                {
                                        "code": "15",
                                        "name": "Official Poster France 98"
                                },
                                {
                                        "code": "16",
                                        "name": "Tournament Roll of Honour (1930-1966)"
                                },
                                {
                                        "code": "17",
                                        "name": "Tournament Roll of Honour (1970-1994)"
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
                                        "code": "18",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "19",
                                        "name": "Claudio Taffarel (Brazil)"
                                },
                                {
                                        "code": "20",
                                        "name": "Cafu (Brazil)"
                                },
                                {
                                        "code": "21",
                                        "name": "Aldair (Brazil)"
                                },
                                {
                                        "code": "22",
                                        "name": "Junior Baiano (Brazil)"
                                },
                                {
                                        "code": "23",
                                        "name": "Roberto Carlos (Brazil)"
                                },
                                {
                                        "code": "24",
                                        "name": "Dunga (Brazil)"
                                },
                                {
                                        "code": "25",
                                        "name": "Cesar Sampaio (Brazil)"
                                },
                                {
                                        "code": "26",
                                        "name": "Leonardo (Brazil)"
                                },
                                {
                                        "code": "27",
                                        "name": "Rivaldo (Brazil)"
                                },
                                {
                                        "code": "28",
                                        "name": "Ronaldo (Brazil)"
                                },
                                {
                                        "code": "29",
                                        "name": "Bebeto (Brazil)"
                                },
                                {
                                        "code": "30",
                                        "name": "Denilson (Brazil)"
                                },
                                {
                                        "code": "31",
                                        "name": "Ze Roberto (Brazil)"
                                },
                                {
                                        "code": "32",
                                        "name": "Giovanni (Brazil)"
                                },
                                {
                                        "code": "33",
                                        "name": "Edmundo (Brazil)"
                                },
                                {
                                        "code": "34",
                                        "name": "Dida (Brazil)"
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
                                        "code": "35",
                                        "name": "Scotland Badge"
                                },
                                {
                                        "code": "36",
                                        "name": "Jim Leighton (Scotland)"
                                },
                                {
                                        "code": "37",
                                        "name": "Colin Hendry (Scotland)"
                                },
                                {
                                        "code": "38",
                                        "name": "Tom Boyd (Scotland)"
                                },
                                {
                                        "code": "39",
                                        "name": "Christian Dailly (Scotland)"
                                },
                                {
                                        "code": "40",
                                        "name": "David Weir (Scotland)"
                                },
                                {
                                        "code": "41",
                                        "name": "Craig Burley (Scotland)"
                                },
                                {
                                        "code": "42",
                                        "name": "Paul Lambert (Scotland)"
                                },
                                {
                                        "code": "43",
                                        "name": "John Collins (Scotland)"
                                },
                                {
                                        "code": "44",
                                        "name": "Scot Gemmill (Scotland)"
                                },
                                {
                                        "code": "45",
                                        "name": "Darren Jackson (Scotland)"
                                },
                                {
                                        "code": "46",
                                        "name": "Kevin Gallacher (Scotland)"
                                },
                                {
                                        "code": "47",
                                        "name": "Gordon Durie (Scotland)"
                                },
                                {
                                        "code": "48",
                                        "name": "Ally McCoist (Scotland)"
                                },
                                {
                                        "code": "49",
                                        "name": "Simon Donnelly (Scotland)"
                                },
                                {
                                        "code": "50",
                                        "name": "Neil Sullivan (Scotland)"
                                },
                                {
                                        "code": "51",
                                        "name": "Tosh McKinlay (Scotland)"
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
                                        "code": "52",
                                        "name": "Morocco Badge"
                                },
                                {
                                        "code": "53",
                                        "name": "Abdelkader El Brazi (Morocco)"
                                },
                                {
                                        "code": "54",
                                        "name": "Abdelilah Saber (Morocco)"
                                },
                                {
                                        "code": "55",
                                        "name": "Noureddine Naybet (Morocco)"
                                },
                                {
                                        "code": "56",
                                        "name": "Smahi Triki (Morocco)"
                                },
                                {
                                        "code": "57",
                                        "name": "Abdelkrim El Hadrioui (Morocco)"
                                },
                                {
                                        "code": "58",
                                        "name": "Tahar El Khalej (Morocco)"
                                },
                                {
                                        "code": "59",
                                        "name": "Said Chiba (Morocco)"
                                },
                                {
                                        "code": "60",
                                        "name": "Mustapha Hadji (Morocco)"
                                },
                                {
                                        "code": "61",
                                        "name": "Youssef Chippo (Morocco)"
                                },
                                {
                                        "code": "62",
                                        "name": "Salaheddine Bassir (Morocco)"
                                },
                                {
                                        "code": "63",
                                        "name": "Abdeljalil Hadda Camacho (Morocco)"
                                },
                                {
                                        "code": "64",
                                        "name": "Rachid Daoudi (Morocco)"
                                },
                                {
                                        "code": "65",
                                        "name": "Gharib Amzine (Morocco)"
                                },
                                {
                                        "code": "66",
                                        "name": "Ali El Khattabi (Morocco)"
                                },
                                {
                                        "code": "67",
                                        "name": "Jamal Sellami (Morocco)"
                                },
                                {
                                        "code": "68",
                                        "name": "Mustapha Chadili (Morocco)"
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
                                        "code": "69",
                                        "name": "Norway Badge"
                                },
                                {
                                        "code": "70",
                                        "name": "Frode Grodas (Norway)"
                                },
                                {
                                        "code": "71",
                                        "name": "Henning Berg (Norway)"
                                },
                                {
                                        "code": "72",
                                        "name": "Ronny Johnsen (Norway)"
                                },
                                {
                                        "code": "73",
                                        "name": "Dan Eggen (Norway)"
                                },
                                {
                                        "code": "74",
                                        "name": "Stig Inge Bjornebye (Norway)"
                                },
                                {
                                        "code": "75",
                                        "name": "Oyvind Leonhardsen (Norway)"
                                },
                                {
                                        "code": "76",
                                        "name": "Kjetil Rekdal (Norway)"
                                },
                                {
                                        "code": "77",
                                        "name": "Erik Mykland (Norway)"
                                },
                                {
                                        "code": "78",
                                        "name": "Roar Strand (Norway)"
                                },
                                {
                                        "code": "79",
                                        "name": "Havard Flo (Norway)"
                                },
                                {
                                        "code": "80",
                                        "name": "Tore Andre Flo (Norway)"
                                },
                                {
                                        "code": "81",
                                        "name": "Ole Gunnar Solskjaer (Norway)"
                                },
                                {
                                        "code": "82",
                                        "name": "Jahn Ivar Jakobsen (Norway)"
                                },
                                {
                                        "code": "83",
                                        "name": "Vidar Riseth (Norway)"
                                },
                                {
                                        "code": "84",
                                        "name": "Egil Ostenstad (Norway)"
                                },
                                {
                                        "code": "85",
                                        "name": "Thomas Myhre (Norway)"
                                }
                        ]
                }
        ],
        "Group B": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "86",
                                        "name": "Italy Badge"
                                },
                                {
                                        "code": "87",
                                        "name": "Gianluca Pagliuca (Italy)"
                                },
                                {
                                        "code": "88",
                                        "name": "Giuseppe Bergomi (Italy)"
                                },
                                {
                                        "code": "89",
                                        "name": "Paolo Maldini (Italy)"
                                },
                                {
                                        "code": "90",
                                        "name": "Fabio Cannavaro (Italy)"
                                },
                                {
                                        "code": "91",
                                        "name": "Alessandro Nesta (Italy)"
                                },
                                {
                                        "code": "92",
                                        "name": "Alessandro Costacurta (Italy)"
                                },
                                {
                                        "code": "93",
                                        "name": "Demetrio Albertini (Italy)"
                                },
                                {
                                        "code": "94",
                                        "name": "Dino Baggio (Italy)"
                                },
                                {
                                        "code": "95",
                                        "name": "Luigi Di Biagio (Italy)"
                                },
                                {
                                        "code": "96",
                                        "name": "Francesco Moriero (Italy)"
                                },
                                {
                                        "code": "97",
                                        "name": "Roberto Baggio (Italy)"
                                },
                                {
                                        "code": "98",
                                        "name": "Alessandro Del Piero (Italy)"
                                },
                                {
                                        "code": "99",
                                        "name": "Christian Vieri (Italy)"
                                },
                                {
                                        "code": "100",
                                        "name": "Filippo Inzaghi (Italy)"
                                },
                                {
                                        "code": "101",
                                        "name": "Enrico Chiesa (Italy)"
                                },
                                {
                                        "code": "102",
                                        "name": "Angelo Peruzzi (Italy)"
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
                                        "code": "103",
                                        "name": "Chile Badge"
                                },
                                {
                                        "code": "104",
                                        "name": "Nelson Tapia (Chile)"
                                },
                                {
                                        "code": "105",
                                        "name": "Ronald Fuentes (Chile)"
                                },
                                {
                                        "code": "106",
                                        "name": "Pedro Reyes (Chile)"
                                },
                                {
                                        "code": "107",
                                        "name": "Javier Margas (Chile)"
                                },
                                {
                                        "code": "108",
                                        "name": "Moises Villarroel (Chile)"
                                },
                                {
                                        "code": "109",
                                        "name": "Francisco Rojas (Chile)"
                                },
                                {
                                        "code": "110",
                                        "name": "Nelson Parraguez (Chile)"
                                },
                                {
                                        "code": "111",
                                        "name": "Clarence Acuna (Chile)"
                                },
                                {
                                        "code": "112",
                                        "name": "Jose Luis Sierra (Chile)"
                                },
                                {
                                        "code": "113",
                                        "name": "Marcelo Salas (Chile)"
                                },
                                {
                                        "code": "114",
                                        "name": "Ivan Zamorano (Chile)"
                                },
                                {
                                        "code": "115",
                                        "name": "Fabian Estay (Chile)"
                                },
                                {
                                        "code": "116",
                                        "name": "Jose Luis Sanchez (Chile)"
                                },
                                {
                                        "code": "117",
                                        "name": "Marcelo Vega (Chile)"
                                },
                                {
                                        "code": "118",
                                        "name": "Manuel Neira (Chile)"
                                },
                                {
                                        "code": "119",
                                        "name": "Marcelo Ramirez (Chile)"
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
                                        "code": "120",
                                        "name": "Cameroon Badge"
                                },
                                {
                                        "code": "121",
                                        "name": "Jacques Songo'o (Cameroon)"
                                },
                                {
                                        "code": "122",
                                        "name": "Rigobert Song (Cameroon)"
                                },
                                {
                                        "code": "123",
                                        "name": "Raymond Kalla (Cameroon)"
                                },
                                {
                                        "code": "124",
                                        "name": "Pierre Wome (Cameroon)"
                                },
                                {
                                        "code": "125",
                                        "name": "Pierre Njanka (Cameroon)"
                                },
                                {
                                        "code": "126",
                                        "name": "Geremi Njitap (Cameroon)"
                                },
                                {
                                        "code": "127",
                                        "name": "Salomon Olembe (Cameroon)"
                                },
                                {
                                        "code": "128",
                                        "name": "Didier Angibeaud (Cameroon)"
                                },
                                {
                                        "code": "129",
                                        "name": "Augustine Simo (Cameroon)"
                                },
                                {
                                        "code": "130",
                                        "name": "Joseph-Desire Job (Cameroon)"
                                },
                                {
                                        "code": "131",
                                        "name": "Francois Omam-Biyik (Cameroon)"
                                },
                                {
                                        "code": "132",
                                        "name": "Patrick Mboma (Cameroon)"
                                },
                                {
                                        "code": "133",
                                        "name": "Samuel Eto'o (Cameroon)"
                                },
                                {
                                        "code": "134",
                                        "name": "Alphonse Tchami (Cameroon)"
                                },
                                {
                                        "code": "135",
                                        "name": "Marcel Mahouve (Cameroon)"
                                },
                                {
                                        "code": "136",
                                        "name": "Alioum Boukar (Cameroon)"
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
                                        "code": "137",
                                        "name": "Austria Badge"
                                },
                                {
                                        "code": "138",
                                        "name": "Michael Konsel (Austria)"
                                },
                                {
                                        "code": "139",
                                        "name": "Peter Schöttel (Austria)"
                                },
                                {
                                        "code": "140",
                                        "name": "Anton Pfeffer (Austria)"
                                },
                                {
                                        "code": "141",
                                        "name": "Wolfgang Feiersinger (Austria)"
                                },
                                {
                                        "code": "142",
                                        "name": "Markus Schopp (Austria)"
                                },
                                {
                                        "code": "143",
                                        "name": "Dietmar Kühbauer (Austria)"
                                },
                                {
                                        "code": "144",
                                        "name": "Andreas Herzog (Austria)"
                                },
                                {
                                        "code": "145",
                                        "name": "Roman Mählich (Austria)"
                                },
                                {
                                        "code": "146",
                                        "name": "Harald Cerny (Austria)"
                                },
                                {
                                        "code": "147",
                                        "name": "Toni Polster (Austria)"
                                },
                                {
                                        "code": "148",
                                        "name": "Ivica Vastic (Austria)"
                                },
                                {
                                        "code": "149",
                                        "name": "Heimo Pfeifenberger (Austria)"
                                },
                                {
                                        "code": "150",
                                        "name": "Peter Wetl (Austria)"
                                },
                                {
                                        "code": "151",
                                        "name": "Hannes Reinmayr (Austria)"
                                },
                                {
                                        "code": "152",
                                        "name": "Mario Haas (Austria)"
                                },
                                {
                                        "code": "153",
                                        "name": "Franz Wohlfahrt (Austria)"
                                }
                        ]
                }
        ],
        "Group C": [
                {
                        "code": "FRA",
                        "name": "France",
                        "flags": [
                                "fr"
                        ],
                        "stickers": [
                                {
                                        "code": "154",
                                        "name": "France Badge"
                                },
                                {
                                        "code": "155",
                                        "name": "Fabien Barthez (France)"
                                },
                                {
                                        "code": "156",
                                        "name": "Lilian Thuram (France)"
                                },
                                {
                                        "code": "157",
                                        "name": "Marcel Desailly (France)"
                                },
                                {
                                        "code": "158",
                                        "name": "Laurent Blanc (France)"
                                },
                                {
                                        "code": "159",
                                        "name": "Bixente Lizarazu (France)"
                                },
                                {
                                        "code": "160",
                                        "name": "Didier Deschamps (France)"
                                },
                                {
                                        "code": "161",
                                        "name": "Emmanuel Petit (France)"
                                },
                                {
                                        "code": "162",
                                        "name": "Christian Karembeu (France)"
                                },
                                {
                                        "code": "163",
                                        "name": "Zinedine Zidane (France)"
                                },
                                {
                                        "code": "164",
                                        "name": "Youri Djorkaeff (France)"
                                },
                                {
                                        "code": "165",
                                        "name": "Stephane Guivarc'h (France)"
                                },
                                {
                                        "code": "166",
                                        "name": "Thierry Henry (France)"
                                },
                                {
                                        "code": "167",
                                        "name": "David Trezeguet (France)"
                                },
                                {
                                        "code": "168",
                                        "name": "Robert Pires (France)"
                                },
                                {
                                        "code": "169",
                                        "name": "Christophe Dugarry (France)"
                                },
                                {
                                        "code": "170",
                                        "name": "Bernard Lama (France)"
                                }
                        ]
                },
                {
                        "code": "RSA",
                        "name": "South Africa",
                        "flags": [
                                "za"
                        ],
                        "stickers": [
                                {
                                        "code": "171",
                                        "name": "South Africa Badge"
                                },
                                {
                                        "code": "172",
                                        "name": "Hans Vonk (South Africa)"
                                },
                                {
                                        "code": "173",
                                        "name": "Mark Fish (South Africa)"
                                },
                                {
                                        "code": "174",
                                        "name": "Lucas Radebe (South Africa)"
                                },
                                {
                                        "code": "175",
                                        "name": "Pierre Issa (South Africa)"
                                },
                                {
                                        "code": "176",
                                        "name": "David Nyathi (South Africa)"
                                },
                                {
                                        "code": "177",
                                        "name": "John Moshoeu (South Africa)"
                                },
                                {
                                        "code": "178",
                                        "name": "Quinton Fortune (South Africa)"
                                },
                                {
                                        "code": "179",
                                        "name": "Helman Mkhalele (South Africa)"
                                },
                                {
                                        "code": "180",
                                        "name": "Doctor Khumalo (South Africa)"
                                },
                                {
                                        "code": "181",
                                        "name": "Shaun Bartlett (South Africa)"
                                },
                                {
                                        "code": "182",
                                        "name": "Benni McCarthy (South Africa)"
                                },
                                {
                                        "code": "183",
                                        "name": "Philemon Masinga (South Africa)"
                                },
                                {
                                        "code": "184",
                                        "name": "Brendan Augustine (South Africa)"
                                },
                                {
                                        "code": "185",
                                        "name": "Delron Buckley (South Africa)"
                                },
                                {
                                        "code": "186",
                                        "name": "Alfred Phiri (South Africa)"
                                },
                                {
                                        "code": "187",
                                        "name": "Andre Arendse (South Africa)"
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
                                        "code": "188",
                                        "name": "Saudi Arabia Badge"
                                },
                                {
                                        "code": "189",
                                        "name": "Mohamed Al-Deayea (Saudi Arabia)"
                                },
                                {
                                        "code": "190",
                                        "name": "Mohammed Al-Jahani (Saudi Arabia)"
                                },
                                {
                                        "code": "191",
                                        "name": "Mohammed Al-Khilaiwi (Saudi Arabia)"
                                },
                                {
                                        "code": "192",
                                        "name": "Abdullah Zubromawi (Saudi Arabia)"
                                },
                                {
                                        "code": "193",
                                        "name": "Hussein Abdulghani (Saudi Arabia)"
                                },
                                {
                                        "code": "194",
                                        "name": "Fuad Anwar Amin (Saudi Arabia)"
                                },
                                {
                                        "code": "195",
                                        "name": "Khamis Al-Owairan (Saudi Arabia)"
                                },
                                {
                                        "code": "196",
                                        "name": "Ibrahim Al-Shahrani (Saudi Arabia)"
                                },
                                {
                                        "code": "197",
                                        "name": "Nawaf Al-Temyat (Saudi Arabia)"
                                },
                                {
                                        "code": "198",
                                        "name": "Saeed Al-Owairan (Saudi Arabia)"
                                },
                                {
                                        "code": "199",
                                        "name": "Sami Al-Jaber (Saudi Arabia)"
                                },
                                {
                                        "code": "200",
                                        "name": "Fahad Al-Mehallel (Saudi Arabia)"
                                },
                                {
                                        "code": "201",
                                        "name": "Hamzah Saleh (Saudi Arabia)"
                                },
                                {
                                        "code": "202",
                                        "name": "Yousuf Al-Thunayan (Saudi Arabia)"
                                },
                                {
                                        "code": "203",
                                        "name": "Obeid Al-Dosari (Saudi Arabia)"
                                },
                                {
                                        "code": "204",
                                        "name": "Hussein Al-Sadiq (Saudi Arabia)"
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
                                        "code": "205",
                                        "name": "Denmark Badge"
                                },
                                {
                                        "code": "206",
                                        "name": "Peter Schmeichel (Denmark)"
                                },
                                {
                                        "code": "207",
                                        "name": "Marc Rieper (Denmark)"
                                },
                                {
                                        "code": "208",
                                        "name": "Jes Hogh (Denmark)"
                                },
                                {
                                        "code": "209",
                                        "name": "Soren Colding (Denmark)"
                                },
                                {
                                        "code": "210",
                                        "name": "Jan Heintze (Denmark)"
                                },
                                {
                                        "code": "211",
                                        "name": "Thomas Helveg (Denmark)"
                                },
                                {
                                        "code": "212",
                                        "name": "Allan Nielsen (Denmark)"
                                },
                                {
                                        "code": "213",
                                        "name": "Michael Laudrup (Denmark)"
                                },
                                {
                                        "code": "214",
                                        "name": "Brian Laudrup (Denmark)"
                                },
                                {
                                        "code": "215",
                                        "name": "Martin Jorgensen (Denmark)"
                                },
                                {
                                        "code": "216",
                                        "name": "Ebbe Sand (Denmark)"
                                },
                                {
                                        "code": "217",
                                        "name": "Peter Moller (Denmark)"
                                },
                                {
                                        "code": "218",
                                        "name": "Miklos Molnar (Denmark)"
                                },
                                {
                                        "code": "219",
                                        "name": "Morten Wieghorst (Denmark)"
                                },
                                {
                                        "code": "220",
                                        "name": "Stig Tofting (Denmark)"
                                },
                                {
                                        "code": "221",
                                        "name": "Mogens Krogh (Denmark)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "ESP",
                        "name": "Spain",
                        "flags": [
                                "es"
                        ],
                        "stickers": [
                                {
                                        "code": "222",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "223",
                                        "name": "Andoni Zubizarreta (Spain)"
                                },
                                {
                                        "code": "224",
                                        "name": "Albert Ferrer (Spain)"
                                },
                                {
                                        "code": "225",
                                        "name": "Rafael Alkorta (Spain)"
                                },
                                {
                                        "code": "226",
                                        "name": "Miguel Angel Nadal (Spain)"
                                },
                                {
                                        "code": "227",
                                        "name": "Sergi Barjuan (Spain)"
                                },
                                {
                                        "code": "228",
                                        "name": "Fernando Hierro (Spain)"
                                },
                                {
                                        "code": "229",
                                        "name": "Luis Enrique (Spain)"
                                },
                                {
                                        "code": "230",
                                        "name": "Guillermo Amor (Spain)"
                                },
                                {
                                        "code": "231",
                                        "name": "Josep Guardiola (Spain)"
                                },
                                {
                                        "code": "232",
                                        "name": "Raul Gonzalez (Spain)"
                                },
                                {
                                        "code": "233",
                                        "name": "Fernando Morientes (Spain)"
                                },
                                {
                                        "code": "234",
                                        "name": "Kiko Narvaez (Spain)"
                                },
                                {
                                        "code": "235",
                                        "name": "Alfonso Perez (Spain)"
                                },
                                {
                                        "code": "236",
                                        "name": "Julen Guerrero (Spain)"
                                },
                                {
                                        "code": "237",
                                        "name": "Joseba Etxeberria (Spain)"
                                },
                                {
                                        "code": "238",
                                        "name": "Santiago Canizares (Spain)"
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
                                        "code": "239",
                                        "name": "Nigeria Badge"
                                },
                                {
                                        "code": "240",
                                        "name": "Peter Rufai (Nigeria)"
                                },
                                {
                                        "code": "241",
                                        "name": "Mobi Oparaku (Nigeria)"
                                },
                                {
                                        "code": "242",
                                        "name": "Taribo West (Nigeria)"
                                },
                                {
                                        "code": "243",
                                        "name": "Uche Okechukwu (Nigeria)"
                                },
                                {
                                        "code": "244",
                                        "name": "Celestine Babayaro (Nigeria)"
                                },
                                {
                                        "code": "245",
                                        "name": "Sunday Oliseh (Nigeria)"
                                },
                                {
                                        "code": "246",
                                        "name": "Mutiu Adepoju (Nigeria)"
                                },
                                {
                                        "code": "247",
                                        "name": "Finidi George (Nigeria)"
                                },
                                {
                                        "code": "248",
                                        "name": "Jay-Jay Okocha (Nigeria)"
                                },
                                {
                                        "code": "249",
                                        "name": "Nwankwo Kanu (Nigeria)"
                                },
                                {
                                        "code": "250",
                                        "name": "Victor Ikpeba (Nigeria)"
                                },
                                {
                                        "code": "251",
                                        "name": "Daniel Amokachi (Nigeria)"
                                },
                                {
                                        "code": "252",
                                        "name": "Tijani Babangida (Nigeria)"
                                },
                                {
                                        "code": "253",
                                        "name": "Rashidi Yekini (Nigeria)"
                                },
                                {
                                        "code": "254",
                                        "name": "Garba Lawal (Nigeria)"
                                },
                                {
                                        "code": "255",
                                        "name": "Willy Okpara (Nigeria)"
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
                                        "code": "256",
                                        "name": "Paraguay Badge"
                                },
                                {
                                        "code": "257",
                                        "name": "Jose Luis Chilavert (Paraguay)"
                                },
                                {
                                        "code": "258",
                                        "name": "Francisco Arce (Paraguay)"
                                },
                                {
                                        "code": "259",
                                        "name": "Carlos Gamarra (Paraguay)"
                                },
                                {
                                        "code": "260",
                                        "name": "Celso Ayala (Paraguay)"
                                },
                                {
                                        "code": "261",
                                        "name": "Pedro Sarabia (Paraguay)"
                                },
                                {
                                        "code": "262",
                                        "name": "Julio Cesar Enciso (Paraguay)"
                                },
                                {
                                        "code": "263",
                                        "name": "Roberto Acuna (Paraguay)"
                                },
                                {
                                        "code": "264",
                                        "name": "Carlos Paredes (Paraguay)"
                                },
                                {
                                        "code": "265",
                                        "name": "Denis Caniza (Paraguay)"
                                },
                                {
                                        "code": "266",
                                        "name": "Jose Cardozo (Paraguay)"
                                },
                                {
                                        "code": "267",
                                        "name": "Miguel Angel Benitez (Paraguay)"
                                },
                                {
                                        "code": "268",
                                        "name": "Hugo Brizuela (Paraguay)"
                                },
                                {
                                        "code": "269",
                                        "name": "Cesar Ramirez (Paraguay)"
                                },
                                {
                                        "code": "270",
                                        "name": "Aristides Rojas (Paraguay)"
                                },
                                {
                                        "code": "271",
                                        "name": "Julio Cesar Yegros (Paraguay)"
                                },
                                {
                                        "code": "272",
                                        "name": "Ruben Ruiz Diaz (Paraguay)"
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
                                        "code": "273",
                                        "name": "Bulgaria Badge"
                                },
                                {
                                        "code": "274",
                                        "name": "Zdravko Zdravkov (Bulgaria)"
                                },
                                {
                                        "code": "275",
                                        "name": "Radostin Kishishev (Bulgaria)"
                                },
                                {
                                        "code": "276",
                                        "name": "Trifon Ivanov (Bulgaria)"
                                },
                                {
                                        "code": "277",
                                        "name": "Petar Hubchev (Bulgaria)"
                                },
                                {
                                        "code": "278",
                                        "name": "Ivaylo Petkov (Bulgaria)"
                                },
                                {
                                        "code": "279",
                                        "name": "Zlatko Yankov (Bulgaria)"
                                },
                                {
                                        "code": "280",
                                        "name": "Ivaylo Yordanov (Bulgaria)"
                                },
                                {
                                        "code": "281",
                                        "name": "Krasimir Balakov (Bulgaria)"
                                },
                                {
                                        "code": "282",
                                        "name": "Ilian Iliev (Bulgaria)"
                                },
                                {
                                        "code": "283",
                                        "name": "Hristo Stoichkov (Bulgaria)"
                                },
                                {
                                        "code": "284",
                                        "name": "Emil Kostadinov (Bulgaria)"
                                },
                                {
                                        "code": "285",
                                        "name": "Luboslav Penev (Bulgaria)"
                                },
                                {
                                        "code": "286",
                                        "name": "Georgi Ivanov (Bulgaria)"
                                },
                                {
                                        "code": "287",
                                        "name": "Daniel Borimirov (Bulgaria)"
                                },
                                {
                                        "code": "288",
                                        "name": "Marian Hristov (Bulgaria)"
                                },
                                {
                                        "code": "289",
                                        "name": "Borislav Mikhailov (Bulgaria)"
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
                                        "code": "290",
                                        "name": "Netherlands Badge"
                                },
                                {
                                        "code": "291",
                                        "name": "Edwin van der Sar (Netherlands)"
                                },
                                {
                                        "code": "292",
                                        "name": "Michael Reiziger (Netherlands)"
                                },
                                {
                                        "code": "293",
                                        "name": "Jaap Stam (Netherlands)"
                                },
                                {
                                        "code": "294",
                                        "name": "Frank de Boer (Netherlands)"
                                },
                                {
                                        "code": "295",
                                        "name": "Arthur Numan (Netherlands)"
                                },
                                {
                                        "code": "296",
                                        "name": "Wim Jonk (Netherlands)"
                                },
                                {
                                        "code": "297",
                                        "name": "Clarence Seedorf (Netherlands)"
                                },
                                {
                                        "code": "298",
                                        "name": "Edgar Davids (Netherlands)"
                                },
                                {
                                        "code": "299",
                                        "name": "Ronald de Boer (Netherlands)"
                                },
                                {
                                        "code": "300",
                                        "name": "Dennis Bergkamp (Netherlands)"
                                },
                                {
                                        "code": "301",
                                        "name": "Patrick Kluivert (Netherlands)"
                                },
                                {
                                        "code": "302",
                                        "name": "Marc Overmars (Netherlands)"
                                },
                                {
                                        "code": "303",
                                        "name": "Boudewijn Zenden (Netherlands)"
                                },
                                {
                                        "code": "304",
                                        "name": "Pierre van Hooijdonk (Netherlands)"
                                },
                                {
                                        "code": "305",
                                        "name": "Phillip Cocu (Netherlands)"
                                },
                                {
                                        "code": "306",
                                        "name": "Ed de Goey (Netherlands)"
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
                                        "code": "307",
                                        "name": "Belgium Badge"
                                },
                                {
                                        "code": "308",
                                        "name": "Filip De Wilde (Belgium)"
                                },
                                {
                                        "code": "309",
                                        "name": "Bertrand Crasson (Belgium)"
                                },
                                {
                                        "code": "310",
                                        "name": "Lorenzo Staelens (Belgium)"
                                },
                                {
                                        "code": "311",
                                        "name": "Gordan Vidovic (Belgium)"
                                },
                                {
                                        "code": "312",
                                        "name": "Vital Borkelmans (Belgium)"
                                },
                                {
                                        "code": "313",
                                        "name": "Franky Van der Elst (Belgium)"
                                },
                                {
                                        "code": "314",
                                        "name": "Enzo Scifo (Belgium)"
                                },
                                {
                                        "code": "315",
                                        "name": "Marc Wilmots (Belgium)"
                                },
                                {
                                        "code": "316",
                                        "name": "Danny Boffin (Belgium)"
                                },
                                {
                                        "code": "317",
                                        "name": "Luc Nilis (Belgium)"
                                },
                                {
                                        "code": "318",
                                        "name": "Luis Oliveira (Belgium)"
                                },
                                {
                                        "code": "319",
                                        "name": "Gert Verheyen (Belgium)"
                                },
                                {
                                        "code": "320",
                                        "name": "Mbo Mpenza (Belgium)"
                                },
                                {
                                        "code": "321",
                                        "name": "Emile Mpenza (Belgium)"
                                },
                                {
                                        "code": "322",
                                        "name": "Philippe Clement (Belgium)"
                                },
                                {
                                        "code": "323",
                                        "name": "Dany Verlinden (Belgium)"
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
                                        "code": "324",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "325",
                                        "name": "Kim Byung-ji (South Korea)"
                                },
                                {
                                        "code": "326",
                                        "name": "Choi Sung-yong (South Korea)"
                                },
                                {
                                        "code": "327",
                                        "name": "Hong Myung-bo (South Korea)"
                                },
                                {
                                        "code": "328",
                                        "name": "Lee Min-sung (South Korea)"
                                },
                                {
                                        "code": "329",
                                        "name": "Kim Tae-young (South Korea)"
                                },
                                {
                                        "code": "330",
                                        "name": "Yoo Sang-chul (South Korea)"
                                },
                                {
                                        "code": "331",
                                        "name": "Ha Seok-ju (South Korea)"
                                },
                                {
                                        "code": "332",
                                        "name": "Lee Sang-yoon (South Korea)"
                                },
                                {
                                        "code": "333",
                                        "name": "Noh Jung-yoon (South Korea)"
                                },
                                {
                                        "code": "334",
                                        "name": "Choi Yong-soo (South Korea)"
                                },
                                {
                                        "code": "335",
                                        "name": "Seo Jung-won (South Korea)"
                                },
                                {
                                        "code": "336",
                                        "name": "Hwang Sun-hong (South Korea)"
                                },
                                {
                                        "code": "337",
                                        "name": "Ko Jeong-woon (South Korea)"
                                },
                                {
                                        "code": "338",
                                        "name": "Lee Dong-gook (South Korea)"
                                },
                                {
                                        "code": "339",
                                        "name": "Kim Do-hoon (South Korea)"
                                },
                                {
                                        "code": "340",
                                        "name": "Seo Dong-myung (South Korea)"
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
                                        "code": "341",
                                        "name": "Mexico Badge"
                                },
                                {
                                        "code": "342",
                                        "name": "Jorge Campos (Mexico)"
                                },
                                {
                                        "code": "343",
                                        "name": "Claudio Suarez (Mexico)"
                                },
                                {
                                        "code": "344",
                                        "name": "Duilio Davino (Mexico)"
                                },
                                {
                                        "code": "345",
                                        "name": "Pavel Pardo (Mexico)"
                                },
                                {
                                        "code": "346",
                                        "name": "Salvador Carmona (Mexico)"
                                },
                                {
                                        "code": "347",
                                        "name": "Alberto Garcia Aspe (Mexico)"
                                },
                                {
                                        "code": "348",
                                        "name": "Marcelino Bernal (Mexico)"
                                },
                                {
                                        "code": "349",
                                        "name": "Ramon Ramirez (Mexico)"
                                },
                                {
                                        "code": "350",
                                        "name": "Jaime Ordiales (Mexico)"
                                },
                                {
                                        "code": "351",
                                        "name": "Cuauhtemoc Blanco (Mexico)"
                                },
                                {
                                        "code": "352",
                                        "name": "Luis Hernandez (Mexico)"
                                },
                                {
                                        "code": "353",
                                        "name": "Francisco Palencia (Mexico)"
                                },
                                {
                                        "code": "354",
                                        "name": "Ricardo Pelaez (Mexico)"
                                },
                                {
                                        "code": "355",
                                        "name": "Jesus Arellano (Mexico)"
                                },
                                {
                                        "code": "356",
                                        "name": "German Villa (Mexico)"
                                },
                                {
                                        "code": "357",
                                        "name": "Oswaldo Sanchez (Mexico)"
                                }
                        ]
                }
        ],
        "Group F": [
                {
                        "code": "GER",
                        "name": "Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "358",
                                        "name": "Germany Badge"
                                },
                                {
                                        "code": "359",
                                        "name": "Andreas Kopke (Germany)"
                                },
                                {
                                        "code": "360",
                                        "name": "Christian Worns (Germany)"
                                },
                                {
                                        "code": "361",
                                        "name": "Lothar Matthaus (Germany)"
                                },
                                {
                                        "code": "362",
                                        "name": "Jurgen Kohler (Germany)"
                                },
                                {
                                        "code": "363",
                                        "name": "Jorg Heinrich (Germany)"
                                },
                                {
                                        "code": "364",
                                        "name": "Michael Tarnat (Germany)"
                                },
                                {
                                        "code": "365",
                                        "name": "Dietmar Hamann (Germany)"
                                },
                                {
                                        "code": "366",
                                        "name": "Jens Jeremies (Germany)"
                                },
                                {
                                        "code": "367",
                                        "name": "Thomas Hassler (Germany)"
                                },
                                {
                                        "code": "368",
                                        "name": "Andreas Moller (Germany)"
                                },
                                {
                                        "code": "369",
                                        "name": "Jurgen Klinsmann (Germany)"
                                },
                                {
                                        "code": "370",
                                        "name": "Oliver Bierhoff (Germany)"
                                },
                                {
                                        "code": "371",
                                        "name": "Ulf Kirsten (Germany)"
                                },
                                {
                                        "code": "372",
                                        "name": "Olaf Marschall (Germany)"
                                },
                                {
                                        "code": "373",
                                        "name": "Stefan Reuter (Germany)"
                                },
                                {
                                        "code": "374",
                                        "name": "Oliver Kahn (Germany)"
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
                                        "code": "375",
                                        "name": "United States Badge"
                                },
                                {
                                        "code": "376",
                                        "name": "Kasey Keller (United States)"
                                },
                                {
                                        "code": "377",
                                        "name": "Thomas Dooley (United States)"
                                },
                                {
                                        "code": "378",
                                        "name": "Eddie Pope (United States)"
                                },
                                {
                                        "code": "379",
                                        "name": "David Regis (United States)"
                                },
                                {
                                        "code": "380",
                                        "name": "Mike Burns (United States)"
                                },
                                {
                                        "code": "381",
                                        "name": "Earnie Stewart (United States)"
                                },
                                {
                                        "code": "382",
                                        "name": "Brian Maisonneuve (United States)"
                                },
                                {
                                        "code": "383",
                                        "name": "Claudio Reyna (United States)"
                                },
                                {
                                        "code": "384",
                                        "name": "Cobi Jones (United States)"
                                },
                                {
                                        "code": "385",
                                        "name": "Eric Wynalda (United States)"
                                },
                                {
                                        "code": "386",
                                        "name": "Brian McBride (United States)"
                                },
                                {
                                        "code": "387",
                                        "name": "Roy Wegerle (United States)"
                                },
                                {
                                        "code": "388",
                                        "name": "Preki Radosavljevic (United States)"
                                },
                                {
                                        "code": "389",
                                        "name": "Joe-Max Moore (United States)"
                                },
                                {
                                        "code": "390",
                                        "name": "Tab Ramos (United States)"
                                },
                                {
                                        "code": "391",
                                        "name": "Brad Friedel (United States)"
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
                                        "code": "392",
                                        "name": "Yugoslavia Badge"
                                },
                                {
                                        "code": "393",
                                        "name": "Ivica Kralj (Yugoslavia)"
                                },
                                {
                                        "code": "394",
                                        "name": "Zoran Mirkovic (Yugoslavia)"
                                },
                                {
                                        "code": "395",
                                        "name": "Goran Djorovic (Yugoslavia)"
                                },
                                {
                                        "code": "396",
                                        "name": "Sinisa Mihajlovic (Yugoslavia)"
                                },
                                {
                                        "code": "397",
                                        "name": "Slobodan Komljenovic (Yugoslavia)"
                                },
                                {
                                        "code": "398",
                                        "name": "Slavisa Jokanovic (Yugoslavia)"
                                },
                                {
                                        "code": "399",
                                        "name": "Vladimir Jugovic (Yugoslavia)"
                                },
                                {
                                        "code": "400",
                                        "name": "Dragan Stojkovic (Yugoslavia)"
                                },
                                {
                                        "code": "401",
                                        "name": "Zeljko Petrovic (Yugoslavia)"
                                },
                                {
                                        "code": "402",
                                        "name": "Predrag Mijatovic (Yugoslavia)"
                                },
                                {
                                        "code": "403",
                                        "name": "Savo Milosevic (Yugoslavia)"
                                },
                                {
                                        "code": "404",
                                        "name": "Darko Kovacevic (Yugoslavia)"
                                },
                                {
                                        "code": "405",
                                        "name": "Dejan Savicevic (Yugoslavia)"
                                },
                                {
                                        "code": "406",
                                        "name": "Dejan Stankovic (Yugoslavia)"
                                },
                                {
                                        "code": "407",
                                        "name": "Perica Ognjenovic (Yugoslavia)"
                                },
                                {
                                        "code": "408",
                                        "name": "Dragoje Lekovic (Yugoslavia)"
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
                                        "code": "409",
                                        "name": "Iran Badge"
                                },
                                {
                                        "code": "410",
                                        "name": "Ahmad Reza Abedzadeh (Iran)"
                                },
                                {
                                        "code": "411",
                                        "name": "Mohammad Khakpour (Iran)"
                                },
                                {
                                        "code": "412",
                                        "name": "Nader Mohammadkhani (Iran)"
                                },
                                {
                                        "code": "413",
                                        "name": "Javad Zarincheh (Iran)"
                                },
                                {
                                        "code": "414",
                                        "name": "Mehdi Pashazadeh (Iran)"
                                },
                                {
                                        "code": "415",
                                        "name": "Mehdi Mahdavikia (Iran)"
                                },
                                {
                                        "code": "416",
                                        "name": "Karim Bagheri (Iran)"
                                },
                                {
                                        "code": "417",
                                        "name": "Hamid Estili (Iran)"
                                },
                                {
                                        "code": "418",
                                        "name": "Mehrdad Minavand (Iran)"
                                },
                                {
                                        "code": "419",
                                        "name": "Ali Daei (Iran)"
                                },
                                {
                                        "code": "420",
                                        "name": "Khodadad Azizi (Iran)"
                                },
                                {
                                        "code": "421",
                                        "name": "Alireza Mansourian (Iran)"
                                },
                                {
                                        "code": "422",
                                        "name": "Sirous Dinmohammadi (Iran)"
                                },
                                {
                                        "code": "423",
                                        "name": "Sattar Hamedani (Iran)"
                                },
                                {
                                        "code": "424",
                                        "name": "Ali Latifi (Iran)"
                                },
                                {
                                        "code": "425",
                                        "name": "Nima Nakisa (Iran)"
                                }
                        ]
                }
        ],
        "Group G": [
                {
                        "code": "ROU",
                        "name": "Romania",
                        "flags": [
                                "ro"
                        ],
                        "stickers": [
                                {
                                        "code": "426",
                                        "name": "Romania Badge"
                                },
                                {
                                        "code": "427",
                                        "name": "Bogdan Stelea (Romania)"
                                },
                                {
                                        "code": "428",
                                        "name": "Dan Petrescu (Romania)"
                                },
                                {
                                        "code": "429",
                                        "name": "Gheorghe Popescu (Romania)"
                                },
                                {
                                        "code": "430",
                                        "name": "Gheorghe Mihali (Romania)"
                                },
                                {
                                        "code": "431",
                                        "name": "Liviu Ciobotariu (Romania)"
                                },
                                {
                                        "code": "432",
                                        "name": "Dorinel Munteanu (Romania)"
                                },
                                {
                                        "code": "433",
                                        "name": "Constantin Galca (Romania)"
                                },
                                {
                                        "code": "434",
                                        "name": "Gheorghe Hagi (Romania)"
                                },
                                {
                                        "code": "435",
                                        "name": "Iulian Filipescu (Romania)"
                                },
                                {
                                        "code": "436",
                                        "name": "Adrian Ilie (Romania)"
                                },
                                {
                                        "code": "437",
                                        "name": "Viorel Moldovan (Romania)"
                                },
                                {
                                        "code": "438",
                                        "name": "Ilie Dumitrescu (Romania)"
                                },
                                {
                                        "code": "439",
                                        "name": "Gheorghe Craioveanu (Romania)"
                                },
                                {
                                        "code": "440",
                                        "name": "Lucian Marinescu (Romania)"
                                },
                                {
                                        "code": "441",
                                        "name": "Laurentiu Rosu (Romania)"
                                },
                                {
                                        "code": "442",
                                        "name": "Florin Prunea (Romania)"
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
                                        "code": "443",
                                        "name": "Colombia Badge"
                                },
                                {
                                        "code": "444",
                                        "name": "Farid Mondragon (Colombia)"
                                },
                                {
                                        "code": "445",
                                        "name": "Ivan Cordoba (Colombia)"
                                },
                                {
                                        "code": "446",
                                        "name": "Jorge Bermudez (Colombia)"
                                },
                                {
                                        "code": "447",
                                        "name": "Wilmer Cabrera (Colombia)"
                                },
                                {
                                        "code": "448",
                                        "name": "Jose Fernando Santa (Colombia)"
                                },
                                {
                                        "code": "449",
                                        "name": "Mauricio Serna (Colombia)"
                                },
                                {
                                        "code": "450",
                                        "name": "Harold Lozano (Colombia)"
                                },
                                {
                                        "code": "451",
                                        "name": "Carlos Valderrama (Colombia)"
                                },
                                {
                                        "code": "452",
                                        "name": "Freddy Rincon (Colombia)"
                                },
                                {
                                        "code": "453",
                                        "name": "Faustino Asprilla (Colombia)"
                                },
                                {
                                        "code": "454",
                                        "name": "Adolfo Valencia (Colombia)"
                                },
                                {
                                        "code": "455",
                                        "name": "Victor Aristizabal (Colombia)"
                                },
                                {
                                        "code": "456",
                                        "name": "Hamilton Ricard (Colombia)"
                                },
                                {
                                        "code": "457",
                                        "name": "Antony de Avila (Colombia)"
                                },
                                {
                                        "code": "458",
                                        "name": "Leider Preciado (Colombia)"
                                },
                                {
                                        "code": "459",
                                        "name": "Oscar Cordoba (Colombia)"
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
                                        "code": "460",
                                        "name": "England Badge"
                                },
                                {
                                        "code": "461",
                                        "name": "David Seaman (England)"
                                },
                                {
                                        "code": "462",
                                        "name": "Gary Neville (England)"
                                },
                                {
                                        "code": "463",
                                        "name": "Tony Adams (England)"
                                },
                                {
                                        "code": "464",
                                        "name": "Sol Campbell (England)"
                                },
                                {
                                        "code": "465",
                                        "name": "Graeme Le Saux (England)"
                                },
                                {
                                        "code": "466",
                                        "name": "David Beckham (England)"
                                },
                                {
                                        "code": "467",
                                        "name": "Paul Ince (England)"
                                },
                                {
                                        "code": "468",
                                        "name": "David Batty (England)"
                                },
                                {
                                        "code": "469",
                                        "name": "Paul Scholes (England)"
                                },
                                {
                                        "code": "470",
                                        "name": "Darren Anderton (England)"
                                },
                                {
                                        "code": "471",
                                        "name": "Alan Shearer (England)"
                                },
                                {
                                        "code": "472",
                                        "name": "Michael Owen (England)"
                                },
                                {
                                        "code": "473",
                                        "name": "Teddy Sheringham (England)"
                                },
                                {
                                        "code": "474",
                                        "name": "Les Ferdinand (England)"
                                },
                                {
                                        "code": "475",
                                        "name": "Robbie Fowler (England)"
                                },
                                {
                                        "code": "476",
                                        "name": "Nigel Martyn (England)"
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
                                        "code": "477",
                                        "name": "Tunisia Badge"
                                },
                                {
                                        "code": "478",
                                        "name": "Chokri El Ouaer (Tunisia)"
                                },
                                {
                                        "code": "479",
                                        "name": "Khaled Badra (Tunisia)"
                                },
                                {
                                        "code": "480",
                                        "name": "Ferid Chouchane (Tunisia)"
                                },
                                {
                                        "code": "481",
                                        "name": "Mounir Boukadida (Tunisia)"
                                },
                                {
                                        "code": "482",
                                        "name": "Tarek Thabet (Tunisia)"
                                },
                                {
                                        "code": "483",
                                        "name": "Hatem Trabelsi (Tunisia)"
                                },
                                {
                                        "code": "484",
                                        "name": "Zoubeir Baya (Tunisia)"
                                },
                                {
                                        "code": "485",
                                        "name": "Sirajeddine Chihi (Tunisia)"
                                },
                                {
                                        "code": "486",
                                        "name": "Skander Souayah (Tunisia)"
                                },
                                {
                                        "code": "487",
                                        "name": "Adel Sellimi (Tunisia)"
                                },
                                {
                                        "code": "488",
                                        "name": "Mehdi Ben Slimane (Tunisia)"
                                },
                                {
                                        "code": "489",
                                        "name": "Ziad Tlemcani (Tunisia)"
                                },
                                {
                                        "code": "490",
                                        "name": "Imed Ben Younes (Tunisia)"
                                },
                                {
                                        "code": "491",
                                        "name": "Kaies Ghodhbane (Tunisia)"
                                },
                                {
                                        "code": "492",
                                        "name": "Riadh Bouazizi (Tunisia)"
                                },
                                {
                                        "code": "493",
                                        "name": "Ali Boumnijel (Tunisia)"
                                }
                        ]
                }
        ],
        "Group H": [
                {
                        "code": "ARG",
                        "name": "Argentina",
                        "flags": [
                                "ar"
                        ],
                        "stickers": [
                                {
                                        "code": "494",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "495",
                                        "name": "Carlos Roa (Argentina)"
                                },
                                {
                                        "code": "496",
                                        "name": "Roberto Ayala (Argentina)"
                                },
                                {
                                        "code": "497",
                                        "name": "Roberto Sensini (Argentina)"
                                },
                                {
                                        "code": "498",
                                        "name": "Jose Chamot (Argentina)"
                                },
                                {
                                        "code": "499",
                                        "name": "Javier Zanetti (Argentina)"
                                },
                                {
                                        "code": "500",
                                        "name": "Matias Almeyda (Argentina)"
                                },
                                {
                                        "code": "501",
                                        "name": "Diego Simeone (Argentina)"
                                },
                                {
                                        "code": "502",
                                        "name": "Juan Sebastian Veron (Argentina)"
                                },
                                {
                                        "code": "503",
                                        "name": "Ariel Ortega (Argentina)"
                                },
                                {
                                        "code": "504",
                                        "name": "Gabriel Batistuta (Argentina)"
                                },
                                {
                                        "code": "505",
                                        "name": "Claudio Lopez (Argentina)"
                                },
                                {
                                        "code": "506",
                                        "name": "Hernan Crespo (Argentina)"
                                },
                                {
                                        "code": "507",
                                        "name": "Marcelo Gallardo (Argentina)"
                                },
                                {
                                        "code": "508",
                                        "name": "Mauricio Pineda (Argentina)"
                                },
                                {
                                        "code": "509",
                                        "name": "Sergio Berti (Argentina)"
                                },
                                {
                                        "code": "510",
                                        "name": "German Burgos (Argentina)"
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
                                        "code": "511",
                                        "name": "Japan Badge"
                                },
                                {
                                        "code": "512",
                                        "name": "Yoshikatsu Kawaguchi (Japan)"
                                },
                                {
                                        "code": "513",
                                        "name": "Eisuke Nakanishi (Japan)"
                                },
                                {
                                        "code": "514",
                                        "name": "Masami Ihara (Japan)"
                                },
                                {
                                        "code": "515",
                                        "name": "Norio Omura (Japan)"
                                },
                                {
                                        "code": "516",
                                        "name": "Yutaka Akita (Japan)"
                                },
                                {
                                        "code": "517",
                                        "name": "Naoki Soma (Japan)"
                                },
                                {
                                        "code": "518",
                                        "name": "Motohiro Yamaguchi (Japan)"
                                },
                                {
                                        "code": "519",
                                        "name": "Hiroshi Nanami (Japan)"
                                },
                                {
                                        "code": "520",
                                        "name": "Hidetoshi Nakata (Japan)"
                                },
                                {
                                        "code": "521",
                                        "name": "Shoji Jo (Japan)"
                                },
                                {
                                        "code": "522",
                                        "name": "Masashi Nakayama (Japan)"
                                },
                                {
                                        "code": "523",
                                        "name": "Wagner Lopes (Japan)"
                                },
                                {
                                        "code": "524",
                                        "name": "Shinji Ono (Japan)"
                                },
                                {
                                        "code": "525",
                                        "name": "Takashi Hirano (Japan)"
                                },
                                {
                                        "code": "526",
                                        "name": "Masayuki Okano (Japan)"
                                },
                                {
                                        "code": "527",
                                        "name": "Seigo Narazaki (Japan)"
                                }
                        ]
                },
                {
                        "code": "JAM",
                        "name": "Jamaica",
                        "flags": [
                                "jm"
                        ],
                        "stickers": [
                                {
                                        "code": "528",
                                        "name": "Jamaica Badge"
                                },
                                {
                                        "code": "529",
                                        "name": "Warren Barrett (Jamaica)"
                                },
                                {
                                        "code": "530",
                                        "name": "Frank Sinclair (Jamaica)"
                                },
                                {
                                        "code": "531",
                                        "name": "Ian Goodison (Jamaica)"
                                },
                                {
                                        "code": "532",
                                        "name": "Linval Dixon (Jamaica)"
                                },
                                {
                                        "code": "533",
                                        "name": "Onandi Lowe (Jamaica)"
                                },
                                {
                                        "code": "534",
                                        "name": "Fitzroy Simpson (Jamaica)"
                                },
                                {
                                        "code": "535",
                                        "name": "Peter Cargill (Jamaica)"
                                },
                                {
                                        "code": "536",
                                        "name": "Theodore Whitmore (Jamaica)"
                                },
                                {
                                        "code": "537",
                                        "name": "Ricardo Gardner (Jamaica)"
                                },
                                {
                                        "code": "538",
                                        "name": "Deon Burton (Jamaica)"
                                },
                                {
                                        "code": "539",
                                        "name": "Paul Hall (Jamaica)"
                                },
                                {
                                        "code": "540",
                                        "name": "Marcus Gayle (Jamaica)"
                                },
                                {
                                        "code": "541",
                                        "name": "Robbie Earle (Jamaica)"
                                },
                                {
                                        "code": "542",
                                        "name": "Walter Boyd (Jamaica)"
                                },
                                {
                                        "code": "543",
                                        "name": "Andy Williams (Jamaica)"
                                },
                                {
                                        "code": "544",
                                        "name": "Aaron Lawrence (Jamaica)"
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
                                        "code": "545",
                                        "name": "Croatia Badge"
                                },
                                {
                                        "code": "546",
                                        "name": "Drazen Ladic (Croatia)"
                                },
                                {
                                        "code": "547",
                                        "name": "Slaven Bilic (Croatia)"
                                },
                                {
                                        "code": "548",
                                        "name": "Igor Stimac (Croatia)"
                                },
                                {
                                        "code": "549",
                                        "name": "Dario Simic (Croatia)"
                                },
                                {
                                        "code": "550",
                                        "name": "Robert Jarni (Croatia)"
                                },
                                {
                                        "code": "551",
                                        "name": "Mario Stanic (Croatia)"
                                },
                                {
                                        "code": "552",
                                        "name": "Aljosa Asanovic (Croatia)"
                                },
                                {
                                        "code": "553",
                                        "name": "Zvonimir Boban (Croatia)"
                                },
                                {
                                        "code": "554",
                                        "name": "Robert Prosinecki (Croatia)"
                                },
                                {
                                        "code": "555",
                                        "name": "Goran Vlaovic (Croatia)"
                                },
                                {
                                        "code": "556",
                                        "name": "Davor Suker (Croatia)"
                                },
                                {
                                        "code": "557",
                                        "name": "Krunoslav Jurcic (Croatia)"
                                },
                                {
                                        "code": "558",
                                        "name": "Silvio Maric (Croatia)"
                                },
                                {
                                        "code": "559",
                                        "name": "Ardian Kozniku (Croatia)"
                                },
                                {
                                        "code": "560",
                                        "name": "Igor Tudor (Croatia)"
                                },
                                {
                                        "code": "561",
                                        "name": "Marijan Mrmic (Croatia)"
                                }
                        ]
                }
        ]
}
};

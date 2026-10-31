// data/tournaments/wc2002.js
// Official Panini Korea/Japan 2002 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc2002'] = {
    id: 'wc2002',
    categoryId: 'fifa-world-cup',
    year: 2002,
    title: 'Korea/Japan 2002',
    subtitle: 'Korea & Japan • 32 Teams • 576 Stickers',
    dbKey: 'panini2002',
    isSequential: true,
    totalStickers: 576,
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
                        "name": "Trophy, Mascots & 20 Stadiums",
                        "stickers": [
                                {
                                        "code": "1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "2",
                                        "name": "Official Korea/Japan 2002 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "The Spheriks: Kaz, Ato & Nik (Mascots)"
                                },
                                {
                                        "code": "4",
                                        "name": "Official Match Ball (Fevernova)"
                                },
                                {
                                        "code": "5",
                                        "name": "Seoul World Cup Stadium (Korea)"
                                },
                                {
                                        "code": "6",
                                        "name": "Daegu World Cup Stadium (Korea)"
                                },
                                {
                                        "code": "7",
                                        "name": "Busan Asiad Main Stadium (Korea)"
                                },
                                {
                                        "code": "8",
                                        "name": "Incheon Munhak Stadium (Korea)"
                                },
                                {
                                        "code": "9",
                                        "name": "Ulsan Munsu Stadium (Korea)"
                                },
                                {
                                        "code": "10",
                                        "name": "Suwon World Cup Stadium (Korea)"
                                },
                                {
                                        "code": "11",
                                        "name": "Gwangju World Cup Stadium (Korea)"
                                },
                                {
                                        "code": "12",
                                        "name": "Jeonju World Cup Stadium (Korea)"
                                },
                                {
                                        "code": "13",
                                        "name": "Jeju World Cup Stadium (Korea)"
                                },
                                {
                                        "code": "14",
                                        "name": "Daejeon World Cup Stadium (Korea)"
                                },
                                {
                                        "code": "15",
                                        "name": "International Stadium Yokohama (Japan)"
                                },
                                {
                                        "code": "16",
                                        "name": "Saitama Stadium 2002 (Japan)"
                                },
                                {
                                        "code": "17",
                                        "name": "Shizuoka Stadium Ecopa (Japan)"
                                },
                                {
                                        "code": "18",
                                        "name": "Nagai Stadium Osaka (Japan)"
                                },
                                {
                                        "code": "19",
                                        "name": "Miyagi Stadium (Japan)"
                                },
                                {
                                        "code": "20",
                                        "name": "Oita Stadium (Japan)"
                                },
                                {
                                        "code": "21",
                                        "name": "Niigata Stadium Big Swan (Japan)"
                                },
                                {
                                        "code": "22",
                                        "name": "Kashima Soccer Stadium (Japan)"
                                },
                                {
                                        "code": "23",
                                        "name": "Kobe Wing Stadium (Japan)"
                                },
                                {
                                        "code": "24",
                                        "name": "Sapporo Dome (Japan)"
                                },
                                {
                                        "code": "25",
                                        "name": "Official Poster Korea 2002"
                                },
                                {
                                        "code": "26",
                                        "name": "Official Poster Japan 2002"
                                },
                                {
                                        "code": "27",
                                        "name": "Roll of Honour: 1930 Uruguay & 1950 Uruguay"
                                },
                                {
                                        "code": "28",
                                        "name": "Roll of Honour: 1958, 1962, 1970 & 1994 Brazil"
                                },
                                {
                                        "code": "29",
                                        "name": "Roll of Honour: 1954, 1974 & 1990 Germany"
                                },
                                {
                                        "code": "30",
                                        "name": "Roll of Honour: 1934 & 1938 & 1982 Italy"
                                },
                                {
                                        "code": "31",
                                        "name": "Roll of Honour: 1978 & 1986 Argentina"
                                },
                                {
                                        "code": "32",
                                        "name": "Roll of Honour: 1966 England & 1998 France"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "FRA",
                        "name": "France",
                        "flags": [
                                "fr"
                        ],
                        "stickers": [
                                {
                                        "code": "33",
                                        "name": "France Badge"
                                },
                                {
                                        "code": "34",
                                        "name": "Fabien Barthez (France)"
                                },
                                {
                                        "code": "35",
                                        "name": "Lilian Thuram (France)"
                                },
                                {
                                        "code": "36",
                                        "name": "Marcel Desailly (France)"
                                },
                                {
                                        "code": "37",
                                        "name": "Frank Leboeuf (France)"
                                },
                                {
                                        "code": "38",
                                        "name": "Bixente Lizarazu (France)"
                                },
                                {
                                        "code": "39",
                                        "name": "Patrick Vieira (France)"
                                },
                                {
                                        "code": "40",
                                        "name": "Emmanuel Petit (France)"
                                },
                                {
                                        "code": "41",
                                        "name": "Zinedine Zidane (France)"
                                },
                                {
                                        "code": "42",
                                        "name": "Claude Makelele (France)"
                                },
                                {
                                        "code": "43",
                                        "name": "Youri Djorkaeff (France)"
                                },
                                {
                                        "code": "44",
                                        "name": "Thierry Henry (France)"
                                },
                                {
                                        "code": "45",
                                        "name": "David Trezeguet (France)"
                                },
                                {
                                        "code": "46",
                                        "name": "Sylvain Wiltord (France)"
                                },
                                {
                                        "code": "47",
                                        "name": "Christophe Dugarry (France)"
                                },
                                {
                                        "code": "48",
                                        "name": "Willy Sagnol (France)"
                                },
                                {
                                        "code": "49",
                                        "name": "Gregory Coupet (France)"
                                }
                        ]
                },
                {
                        "code": "SEN",
                        "name": "Senegal",
                        "flags": [
                                "sn"
                        ],
                        "stickers": [
                                {
                                        "code": "50",
                                        "name": "Senegal Badge"
                                },
                                {
                                        "code": "51",
                                        "name": "Tony Sylva (Senegal)"
                                },
                                {
                                        "code": "52",
                                        "name": "Ferdinand Coly (Senegal)"
                                },
                                {
                                        "code": "53",
                                        "name": "Lamine Diatta (Senegal)"
                                },
                                {
                                        "code": "54",
                                        "name": "Aliou Cisse (Senegal)"
                                },
                                {
                                        "code": "55",
                                        "name": "Omar Daf (Senegal)"
                                },
                                {
                                        "code": "56",
                                        "name": "Papa Bouba Diop (Senegal)"
                                },
                                {
                                        "code": "57",
                                        "name": "Salif Diao (Senegal)"
                                },
                                {
                                        "code": "58",
                                        "name": "Moussa N'Diaye (Senegal)"
                                },
                                {
                                        "code": "59",
                                        "name": "Khalilou Fadiga (Senegal)"
                                },
                                {
                                        "code": "60",
                                        "name": "El Hadji Diouf (Senegal)"
                                },
                                {
                                        "code": "61",
                                        "name": "Henri Camara (Senegal)"
                                },
                                {
                                        "code": "62",
                                        "name": "Pape Thiaw (Senegal)"
                                },
                                {
                                        "code": "63",
                                        "name": "Souleymane Camara (Senegal)"
                                },
                                {
                                        "code": "64",
                                        "name": "Amdy Faye (Senegal)"
                                },
                                {
                                        "code": "65",
                                        "name": "Habib Beye (Senegal)"
                                },
                                {
                                        "code": "66",
                                        "name": "Oumar Diallo (Senegal)"
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
                                        "code": "67",
                                        "name": "Uruguay Badge"
                                },
                                {
                                        "code": "68",
                                        "name": "Fabian Carini (Uruguay)"
                                },
                                {
                                        "code": "69",
                                        "name": "Alejandro Lembo (Uruguay)"
                                },
                                {
                                        "code": "70",
                                        "name": "Paolo Montero (Uruguay)"
                                },
                                {
                                        "code": "71",
                                        "name": "Gonzalo Sorondo (Uruguay)"
                                },
                                {
                                        "code": "72",
                                        "name": "Gustavo Mendez (Uruguay)"
                                },
                                {
                                        "code": "73",
                                        "name": "Gianni Guigou (Uruguay)"
                                },
                                {
                                        "code": "74",
                                        "name": "Pablo Garcia (Uruguay)"
                                },
                                {
                                        "code": "75",
                                        "name": "Marcelo Romero (Uruguay)"
                                },
                                {
                                        "code": "76",
                                        "name": "Alvaro Recoba (Uruguay)"
                                },
                                {
                                        "code": "77",
                                        "name": "Diego Forlan (Uruguay)"
                                },
                                {
                                        "code": "78",
                                        "name": "Dario Silva (Uruguay)"
                                },
                                {
                                        "code": "79",
                                        "name": "Sebastian Abreu (Uruguay)"
                                },
                                {
                                        "code": "80",
                                        "name": "Richard Morales (Uruguay)"
                                },
                                {
                                        "code": "81",
                                        "name": "Mario Regueiro (Uruguay)"
                                },
                                {
                                        "code": "82",
                                        "name": "Federico Magallanes (Uruguay)"
                                },
                                {
                                        "code": "83",
                                        "name": "Gustavo Munua (Uruguay)"
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
                                        "code": "84",
                                        "name": "Denmark Badge"
                                },
                                {
                                        "code": "85",
                                        "name": "Thomas Sorensen (Denmark)"
                                },
                                {
                                        "code": "86",
                                        "name": "Thomas Helveg (Denmark)"
                                },
                                {
                                        "code": "87",
                                        "name": "Martin Laursen (Denmark)"
                                },
                                {
                                        "code": "88",
                                        "name": "Rene Henriksen (Denmark)"
                                },
                                {
                                        "code": "89",
                                        "name": "Jan Heintze (Denmark)"
                                },
                                {
                                        "code": "90",
                                        "name": "Stig Tofting (Denmark)"
                                },
                                {
                                        "code": "91",
                                        "name": "Thomas Gravesen (Denmark)"
                                },
                                {
                                        "code": "92",
                                        "name": "Christian Poulsen (Denmark)"
                                },
                                {
                                        "code": "93",
                                        "name": "Jesper Gronkjaer (Denmark)"
                                },
                                {
                                        "code": "94",
                                        "name": "Jon Dahl Tomasson (Denmark)"
                                },
                                {
                                        "code": "95",
                                        "name": "Ebbe Sand (Denmark)"
                                },
                                {
                                        "code": "96",
                                        "name": "Martin Jorgensen (Denmark)"
                                },
                                {
                                        "code": "97",
                                        "name": "Dennis Rommedahl (Denmark)"
                                },
                                {
                                        "code": "98",
                                        "name": "Niclas Jensen (Denmark)"
                                },
                                {
                                        "code": "99",
                                        "name": "Jan Michaelsen (Denmark)"
                                },
                                {
                                        "code": "100",
                                        "name": "Peter Kjaer (Denmark)"
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
                                        "code": "101",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "102",
                                        "name": "Iker Casillas (Spain)"
                                },
                                {
                                        "code": "103",
                                        "name": "Carles Puyol (Spain)"
                                },
                                {
                                        "code": "104",
                                        "name": "Fernando Hierro (Spain)"
                                },
                                {
                                        "code": "105",
                                        "name": "Miguel Angel Nadal (Spain)"
                                },
                                {
                                        "code": "106",
                                        "name": "Juanfran Garcia (Spain)"
                                },
                                {
                                        "code": "107",
                                        "name": "Ruben Baraja (Spain)"
                                },
                                {
                                        "code": "108",
                                        "name": "David Albelda (Spain)"
                                },
                                {
                                        "code": "109",
                                        "name": "Juan Carlos Valeron (Spain)"
                                },
                                {
                                        "code": "110",
                                        "name": "Javier De Pedro (Spain)"
                                },
                                {
                                        "code": "111",
                                        "name": "Raul Gonzalez (Spain)"
                                },
                                {
                                        "code": "112",
                                        "name": "Fernando Morientes (Spain)"
                                },
                                {
                                        "code": "113",
                                        "name": "Joaquin Sanchez (Spain)"
                                },
                                {
                                        "code": "114",
                                        "name": "Diego Tristan (Spain)"
                                },
                                {
                                        "code": "115",
                                        "name": "Gaizka Mendieta (Spain)"
                                },
                                {
                                        "code": "116",
                                        "name": "Luis Enrique (Spain)"
                                },
                                {
                                        "code": "117",
                                        "name": "Ricardo Lopez (Spain)"
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
                                        "code": "118",
                                        "name": "Slovenia Badge"
                                },
                                {
                                        "code": "119",
                                        "name": "Marko Simeunovic (Slovenia)"
                                },
                                {
                                        "code": "120",
                                        "name": "Zeljko Milinovic (Slovenia)"
                                },
                                {
                                        "code": "121",
                                        "name": "Aleksander Knavs (Slovenia)"
                                },
                                {
                                        "code": "122",
                                        "name": "Marinko Galic (Slovenia)"
                                },
                                {
                                        "code": "123",
                                        "name": "Dzoni Novak (Slovenia)"
                                },
                                {
                                        "code": "124",
                                        "name": "Ales Ceh (Slovenia)"
                                },
                                {
                                        "code": "125",
                                        "name": "Miran Pavlin (Slovenia)"
                                },
                                {
                                        "code": "126",
                                        "name": "Zlatko Zahovic (Slovenia)"
                                },
                                {
                                        "code": "127",
                                        "name": "Milenko Acimovic (Slovenia)"
                                },
                                {
                                        "code": "128",
                                        "name": "Milan Osterc (Slovenia)"
                                },
                                {
                                        "code": "129",
                                        "name": "Sebastjan Cimirotic (Slovenia)"
                                },
                                {
                                        "code": "130",
                                        "name": "Sasa Gajser (Slovenia)"
                                },
                                {
                                        "code": "131",
                                        "name": "Nastja Ceh (Slovenia)"
                                },
                                {
                                        "code": "132",
                                        "name": "Mladen Rudonja (Slovenia)"
                                },
                                {
                                        "code": "133",
                                        "name": "Amir Karic (Slovenia)"
                                },
                                {
                                        "code": "134",
                                        "name": "Mladen Dabanovic (Slovenia)"
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
                                        "code": "135",
                                        "name": "Paraguay Badge"
                                },
                                {
                                        "code": "136",
                                        "name": "Jose Luis Chilavert (Paraguay)"
                                },
                                {
                                        "code": "137",
                                        "name": "Francisco Arce (Paraguay)"
                                },
                                {
                                        "code": "138",
                                        "name": "Carlos Gamarra (Paraguay)"
                                },
                                {
                                        "code": "139",
                                        "name": "Celso Ayala (Paraguay)"
                                },
                                {
                                        "code": "140",
                                        "name": "Denis Caniza (Paraguay)"
                                },
                                {
                                        "code": "141",
                                        "name": "Julio Cesar Caceres (Paraguay)"
                                },
                                {
                                        "code": "142",
                                        "name": "Roberto Acuna (Paraguay)"
                                },
                                {
                                        "code": "143",
                                        "name": "Carlos Paredes (Paraguay)"
                                },
                                {
                                        "code": "144",
                                        "name": "Guido Alvarenga (Paraguay)"
                                },
                                {
                                        "code": "145",
                                        "name": "Roque Santa Cruz (Paraguay)"
                                },
                                {
                                        "code": "146",
                                        "name": "Jose Cardozo (Paraguay)"
                                },
                                {
                                        "code": "147",
                                        "name": "Nelson Cuevas (Paraguay)"
                                },
                                {
                                        "code": "148",
                                        "name": "Jorge Campos (Paraguay)"
                                },
                                {
                                        "code": "149",
                                        "name": "Estanislao Struway (Paraguay)"
                                },
                                {
                                        "code": "150",
                                        "name": "Richart Baez (Paraguay)"
                                },
                                {
                                        "code": "151",
                                        "name": "Ricardo Tavarelli (Paraguay)"
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
                                        "code": "152",
                                        "name": "South Africa Badge"
                                },
                                {
                                        "code": "153",
                                        "name": "Andre Arendse (South Africa)"
                                },
                                {
                                        "code": "154",
                                        "name": "Cyril Nzama (South Africa)"
                                },
                                {
                                        "code": "155",
                                        "name": "Aaron Mokoena (South Africa)"
                                },
                                {
                                        "code": "156",
                                        "name": "Lucas Radebe (South Africa)"
                                },
                                {
                                        "code": "157",
                                        "name": "Bradley Carnell (South Africa)"
                                },
                                {
                                        "code": "158",
                                        "name": "MacBeth Sibaya (South Africa)"
                                },
                                {
                                        "code": "159",
                                        "name": "Teboho Mokoena (South Africa)"
                                },
                                {
                                        "code": "160",
                                        "name": "Quinton Fortune (South Africa)"
                                },
                                {
                                        "code": "161",
                                        "name": "Jabu Pule (South Africa)"
                                },
                                {
                                        "code": "162",
                                        "name": "Benni McCarthy (South Africa)"
                                },
                                {
                                        "code": "163",
                                        "name": "Sibusiso Zuma (South Africa)"
                                },
                                {
                                        "code": "164",
                                        "name": "George Koumantarakis (South Africa)"
                                },
                                {
                                        "code": "165",
                                        "name": "Thabo Mngomeni (South Africa)"
                                },
                                {
                                        "code": "166",
                                        "name": "Delron Buckley (South Africa)"
                                },
                                {
                                        "code": "167",
                                        "name": "Steven Pienaar (South Africa)"
                                },
                                {
                                        "code": "168",
                                        "name": "Hans Vonk (South Africa)"
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
                                        "code": "169",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "170",
                                        "name": "Marcos (Brazil)"
                                },
                                {
                                        "code": "171",
                                        "name": "Cafu (Brazil)"
                                },
                                {
                                        "code": "172",
                                        "name": "Lucio (Brazil)"
                                },
                                {
                                        "code": "173",
                                        "name": "Roque Junior (Brazil)"
                                },
                                {
                                        "code": "174",
                                        "name": "Edmilson (Brazil)"
                                },
                                {
                                        "code": "175",
                                        "name": "Roberto Carlos (Brazil)"
                                },
                                {
                                        "code": "176",
                                        "name": "Gilberto Silva (Brazil)"
                                },
                                {
                                        "code": "177",
                                        "name": "Kleberson (Brazil)"
                                },
                                {
                                        "code": "178",
                                        "name": "Ronaldinho (Brazil)"
                                },
                                {
                                        "code": "179",
                                        "name": "Rivaldo (Brazil)"
                                },
                                {
                                        "code": "180",
                                        "name": "Ronaldo (Brazil)"
                                },
                                {
                                        "code": "181",
                                        "name": "Kaka (Brazil)"
                                },
                                {
                                        "code": "182",
                                        "name": "Denilson (Brazil)"
                                },
                                {
                                        "code": "183",
                                        "name": "Vampeta (Brazil)"
                                },
                                {
                                        "code": "184",
                                        "name": "Juninho Paulista (Brazil)"
                                },
                                {
                                        "code": "185",
                                        "name": "Dida (Brazil)"
                                }
                        ]
                },
                {
                        "code": "TUR",
                        "name": "Turkey",
                        "flags": [
                                "tr"
                        ],
                        "stickers": [
                                {
                                        "code": "186",
                                        "name": "Turkey Badge"
                                },
                                {
                                        "code": "187",
                                        "name": "Rüştü Reçber (Turkey)"
                                },
                                {
                                        "code": "188",
                                        "name": "Fatih Akyel (Turkey)"
                                },
                                {
                                        "code": "189",
                                        "name": "Alpay Özalan (Turkey)"
                                },
                                {
                                        "code": "190",
                                        "name": "Bülent Korkmaz (Turkey)"
                                },
                                {
                                        "code": "191",
                                        "name": "Hakan Ünsal (Turkey)"
                                },
                                {
                                        "code": "192",
                                        "name": "Ümit Davala (Turkey)"
                                },
                                {
                                        "code": "193",
                                        "name": "Tugay Kerimoğlu (Turkey)"
                                },
                                {
                                        "code": "194",
                                        "name": "Emre Belözoğlu (Turkey)"
                                },
                                {
                                        "code": "195",
                                        "name": "Yıldıray Baştürk (Turkey)"
                                },
                                {
                                        "code": "196",
                                        "name": "Hasan Şaş (Turkey)"
                                },
                                {
                                        "code": "197",
                                        "name": "Hakan Şükür (Turkey)"
                                },
                                {
                                        "code": "198",
                                        "name": "İlhan Mansız (Turkey)"
                                },
                                {
                                        "code": "199",
                                        "name": "Nihat Kahveci (Turkey)"
                                },
                                {
                                        "code": "200",
                                        "name": "Arif Erdem (Turkey)"
                                },
                                {
                                        "code": "201",
                                        "name": "Tayfur Havutçu (Turkey)"
                                },
                                {
                                        "code": "202",
                                        "name": "Ömer Çatkıç (Turkey)"
                                }
                        ]
                },
                {
                        "code": "CHN",
                        "name": "China",
                        "flags": [
                                "cn"
                        ],
                        "stickers": [
                                {
                                        "code": "203",
                                        "name": "China Badge"
                                },
                                {
                                        "code": "204",
                                        "name": "Jiang Jin (China)"
                                },
                                {
                                        "code": "205",
                                        "name": "Sun Jihai (China)"
                                },
                                {
                                        "code": "206",
                                        "name": "Fan Zhiyi (China)"
                                },
                                {
                                        "code": "207",
                                        "name": "Li Weifeng (China)"
                                },
                                {
                                        "code": "208",
                                        "name": "Wu Chengying (China)"
                                },
                                {
                                        "code": "209",
                                        "name": "Li Tie (China)"
                                },
                                {
                                        "code": "210",
                                        "name": "Li Xiaopeng (China)"
                                },
                                {
                                        "code": "211",
                                        "name": "Ma Mingyu (China)"
                                },
                                {
                                        "code": "212",
                                        "name": "Qi Hong (China)"
                                },
                                {
                                        "code": "213",
                                        "name": "Hao Haidong (China)"
                                },
                                {
                                        "code": "214",
                                        "name": "Yang Chen (China)"
                                },
                                {
                                        "code": "215",
                                        "name": "Qu Bo (China)"
                                },
                                {
                                        "code": "216",
                                        "name": "Yu Genwei (China)"
                                },
                                {
                                        "code": "217",
                                        "name": "Shao Jiayi (China)"
                                },
                                {
                                        "code": "218",
                                        "name": "Du Wei (China)"
                                },
                                {
                                        "code": "219",
                                        "name": "Ou Chuliang (China)"
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
                                        "code": "220",
                                        "name": "Costa Rica Badge"
                                },
                                {
                                        "code": "221",
                                        "name": "Erick Lonnis (Costa Rica)"
                                },
                                {
                                        "code": "222",
                                        "name": "Luis Marin (Costa Rica)"
                                },
                                {
                                        "code": "223",
                                        "name": "Mauricio Wright (Costa Rica)"
                                },
                                {
                                        "code": "224",
                                        "name": "Gilberto Martinez (Costa Rica)"
                                },
                                {
                                        "code": "225",
                                        "name": "Carlos Castro (Costa Rica)"
                                },
                                {
                                        "code": "226",
                                        "name": "Mauricio Solis (Costa Rica)"
                                },
                                {
                                        "code": "227",
                                        "name": "Walter Centeno (Costa Rica)"
                                },
                                {
                                        "code": "228",
                                        "name": "Wilmer Lopez (Costa Rica)"
                                },
                                {
                                        "code": "229",
                                        "name": "Hernan Medford (Costa Rica)"
                                },
                                {
                                        "code": "230",
                                        "name": "Rolando Fonseca (Costa Rica)"
                                },
                                {
                                        "code": "231",
                                        "name": "Paulo Wanchope (Costa Rica)"
                                },
                                {
                                        "code": "232",
                                        "name": "Ronald Gomez (Costa Rica)"
                                },
                                {
                                        "code": "233",
                                        "name": "Winston Parks (Costa Rica)"
                                },
                                {
                                        "code": "234",
                                        "name": "Steven Bryce (Costa Rica)"
                                },
                                {
                                        "code": "235",
                                        "name": "Jervis Drummond (Costa Rica)"
                                },
                                {
                                        "code": "236",
                                        "name": "Alvaro Mesen (Costa Rica)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "KOR",
                        "name": "South Korea",
                        "flags": [
                                "kr"
                        ],
                        "stickers": [
                                {
                                        "code": "237",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "238",
                                        "name": "Lee Woon-jae (South Korea)"
                                },
                                {
                                        "code": "239",
                                        "name": "Song Chong-gug (South Korea)"
                                },
                                {
                                        "code": "240",
                                        "name": "Hong Myung-bo (South Korea)"
                                },
                                {
                                        "code": "241",
                                        "name": "Kim Tae-young (South Korea)"
                                },
                                {
                                        "code": "242",
                                        "name": "Lee Young-pyo (South Korea)"
                                },
                                {
                                        "code": "243",
                                        "name": "Yoo Sang-chul (South Korea)"
                                },
                                {
                                        "code": "244",
                                        "name": "Kim Nam-il (South Korea)"
                                },
                                {
                                        "code": "245",
                                        "name": "Park Ji-sung (South Korea)"
                                },
                                {
                                        "code": "246",
                                        "name": "Ahn Jung-hwan (South Korea)"
                                },
                                {
                                        "code": "247",
                                        "name": "Seol Ki-hyeon (South Korea)"
                                },
                                {
                                        "code": "248",
                                        "name": "Hwang Sun-hong (South Korea)"
                                },
                                {
                                        "code": "249",
                                        "name": "Cha Du-ri (South Korea)"
                                },
                                {
                                        "code": "250",
                                        "name": "Lee Eul-yong (South Korea)"
                                },
                                {
                                        "code": "251",
                                        "name": "Choi Yong-soo (South Korea)"
                                },
                                {
                                        "code": "252",
                                        "name": "Lee Chun-soo (South Korea)"
                                },
                                {
                                        "code": "253",
                                        "name": "Kim Byung-ji (South Korea)"
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
                                        "code": "254",
                                        "name": "Poland Badge"
                                },
                                {
                                        "code": "255",
                                        "name": "Jerzy Dudek (Poland)"
                                },
                                {
                                        "code": "256",
                                        "name": "Tomasz Waldoch (Poland)"
                                },
                                {
                                        "code": "257",
                                        "name": "Jacek Bak (Poland)"
                                },
                                {
                                        "code": "258",
                                        "name": "Michal Zewlakow (Poland)"
                                },
                                {
                                        "code": "259",
                                        "name": "Tomasz Hajto (Poland)"
                                },
                                {
                                        "code": "260",
                                        "name": "Radoslaw Kaluzny (Poland)"
                                },
                                {
                                        "code": "261",
                                        "name": "Piotr Swierczewski (Poland)"
                                },
                                {
                                        "code": "262",
                                        "name": "Jacek Krzynowek (Poland)"
                                },
                                {
                                        "code": "263",
                                        "name": "Marek Kozminski (Poland)"
                                },
                                {
                                        "code": "264",
                                        "name": "Emmanuel Olisadebe (Poland)"
                                },
                                {
                                        "code": "265",
                                        "name": "Maciej Zurawski (Poland)"
                                },
                                {
                                        "code": "266",
                                        "name": "Pawel Kryszalowicz (Poland)"
                                },
                                {
                                        "code": "267",
                                        "name": "Marcin Zewlakow (Poland)"
                                },
                                {
                                        "code": "268",
                                        "name": "Cezary Kucharski (Poland)"
                                },
                                {
                                        "code": "269",
                                        "name": "Arkadiusz Bak (Poland)"
                                },
                                {
                                        "code": "270",
                                        "name": "Radoslaw Majdan (Poland)"
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
                                        "code": "271",
                                        "name": "United States Badge"
                                },
                                {
                                        "code": "272",
                                        "name": "Brad Friedel (United States)"
                                },
                                {
                                        "code": "273",
                                        "name": "Tony Sanneh (United States)"
                                },
                                {
                                        "code": "274",
                                        "name": "Eddie Pope (United States)"
                                },
                                {
                                        "code": "275",
                                        "name": "Gregg Berhalter (United States)"
                                },
                                {
                                        "code": "276",
                                        "name": "Frankie Hejduk (United States)"
                                },
                                {
                                        "code": "277",
                                        "name": "John O'Brien (United States)"
                                },
                                {
                                        "code": "278",
                                        "name": "Pablo Mastroeni (United States)"
                                },
                                {
                                        "code": "279",
                                        "name": "Claudio Reyna (United States)"
                                },
                                {
                                        "code": "280",
                                        "name": "Earnie Stewart (United States)"
                                },
                                {
                                        "code": "281",
                                        "name": "Landon Donovan (United States)"
                                },
                                {
                                        "code": "282",
                                        "name": "Brian McBride (United States)"
                                },
                                {
                                        "code": "283",
                                        "name": "Clint Mathis (United States)"
                                },
                                {
                                        "code": "284",
                                        "name": "Cobi Jones (United States)"
                                },
                                {
                                        "code": "285",
                                        "name": "Joe-Max Moore (United States)"
                                },
                                {
                                        "code": "286",
                                        "name": "DaMarcus Beasley (United States)"
                                },
                                {
                                        "code": "287",
                                        "name": "Kasey Keller (United States)"
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
                                        "code": "288",
                                        "name": "Portugal Badge"
                                },
                                {
                                        "code": "289",
                                        "name": "Vitor Baia (Portugal)"
                                },
                                {
                                        "code": "290",
                                        "name": "Beto (Portugal)"
                                },
                                {
                                        "code": "291",
                                        "name": "Fernando Couto (Portugal)"
                                },
                                {
                                        "code": "292",
                                        "name": "Jorge Costa (Portugal)"
                                },
                                {
                                        "code": "293",
                                        "name": "Rui Jorge (Portugal)"
                                },
                                {
                                        "code": "294",
                                        "name": "Petit (Portugal)"
                                },
                                {
                                        "code": "295",
                                        "name": "Armando Petit (Portugal)"
                                },
                                {
                                        "code": "296",
                                        "name": "Rui Costa (Portugal)"
                                },
                                {
                                        "code": "297",
                                        "name": "Luis Figo (Portugal)"
                                },
                                {
                                        "code": "298",
                                        "name": "Sergio Conceicao (Portugal)"
                                },
                                {
                                        "code": "299",
                                        "name": "Pauleta (Portugal)"
                                },
                                {
                                        "code": "300",
                                        "name": "Joao Pinto (Portugal)"
                                },
                                {
                                        "code": "301",
                                        "name": "Nuno Gomes (Portugal)"
                                },
                                {
                                        "code": "302",
                                        "name": "Capucho (Portugal)"
                                },
                                {
                                        "code": "303",
                                        "name": "Hugo Viana (Portugal)"
                                },
                                {
                                        "code": "304",
                                        "name": "Ricardo Pereira (Portugal)"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "GER",
                        "name": "Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "305",
                                        "name": "Germany Badge"
                                },
                                {
                                        "code": "306",
                                        "name": "Oliver Kahn (Germany)"
                                },
                                {
                                        "code": "307",
                                        "name": "Thomas Linke (Germany)"
                                },
                                {
                                        "code": "308",
                                        "name": "Carsten Ramelow (Germany)"
                                },
                                {
                                        "code": "309",
                                        "name": "Christoph Metzelder (Germany)"
                                },
                                {
                                        "code": "310",
                                        "name": "Torsten Frings (Germany)"
                                },
                                {
                                        "code": "311",
                                        "name": "Dietmar Hamann (Germany)"
                                },
                                {
                                        "code": "312",
                                        "name": "Michael Ballack (Germany)"
                                },
                                {
                                        "code": "313",
                                        "name": "Bernd Schneider (Germany)"
                                },
                                {
                                        "code": "314",
                                        "name": "Christian Ziege (Germany)"
                                },
                                {
                                        "code": "315",
                                        "name": "Miroslav Klose (Germany)"
                                },
                                {
                                        "code": "316",
                                        "name": "Carsten Jancker (Germany)"
                                },
                                {
                                        "code": "317",
                                        "name": "Oliver Neuville (Germany)"
                                },
                                {
                                        "code": "318",
                                        "name": "Marco Bode (Germany)"
                                },
                                {
                                        "code": "319",
                                        "name": "Gerald Asamoah (Germany)"
                                },
                                {
                                        "code": "320",
                                        "name": "Sebastian Kehl (Germany)"
                                },
                                {
                                        "code": "321",
                                        "name": "Jens Lehmann (Germany)"
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
                                        "code": "322",
                                        "name": "Saudi Arabia Badge"
                                },
                                {
                                        "code": "323",
                                        "name": "Mohamed Al-Deayea (Saudi Arabia)"
                                },
                                {
                                        "code": "324",
                                        "name": "Ahmed Dokhi (Saudi Arabia)"
                                },
                                {
                                        "code": "325",
                                        "name": "Redha Tukar (Saudi Arabia)"
                                },
                                {
                                        "code": "326",
                                        "name": "Abdullah Zubromawi (Saudi Arabia)"
                                },
                                {
                                        "code": "327",
                                        "name": "Hussein Abdulghani (Saudi Arabia)"
                                },
                                {
                                        "code": "328",
                                        "name": "Khamis Al-Dosari (Saudi Arabia)"
                                },
                                {
                                        "code": "329",
                                        "name": "Ibrahim Al-Shahrani (Saudi Arabia)"
                                },
                                {
                                        "code": "330",
                                        "name": "Nawaf Al-Temyat (Saudi Arabia)"
                                },
                                {
                                        "code": "331",
                                        "name": "Mohammed Noor (Saudi Arabia)"
                                },
                                {
                                        "code": "332",
                                        "name": "Sami Al-Jaber (Saudi Arabia)"
                                },
                                {
                                        "code": "333",
                                        "name": "Al Hasan Al-Yami (Saudi Arabia)"
                                },
                                {
                                        "code": "334",
                                        "name": "Abdullah Al-Jamaan (Saudi Arabia)"
                                },
                                {
                                        "code": "335",
                                        "name": "Obeid Al-Dosari (Saudi Arabia)"
                                },
                                {
                                        "code": "336",
                                        "name": "Fouzi Al-Shehri (Saudi Arabia)"
                                },
                                {
                                        "code": "337",
                                        "name": "Mansour Al-Thagafi (Saudi Arabia)"
                                },
                                {
                                        "code": "338",
                                        "name": "Mabrouk Zaid (Saudi Arabia)"
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
                                        "code": "339",
                                        "name": "Republic of Ireland Badge"
                                },
                                {
                                        "code": "340",
                                        "name": "Shay Given (Republic of Ireland)"
                                },
                                {
                                        "code": "341",
                                        "name": "Gary Kelly (Republic of Ireland)"
                                },
                                {
                                        "code": "342",
                                        "name": "Gary Breen (Republic of Ireland)"
                                },
                                {
                                        "code": "343",
                                        "name": "Steve Staunton (Republic of Ireland)"
                                },
                                {
                                        "code": "344",
                                        "name": "Ian Harte (Republic of Ireland)"
                                },
                                {
                                        "code": "345",
                                        "name": "Steve Finnan (Republic of Ireland)"
                                },
                                {
                                        "code": "346",
                                        "name": "Matt Holland (Republic of Ireland)"
                                },
                                {
                                        "code": "347",
                                        "name": "Mark Kinsella (Republic of Ireland)"
                                },
                                {
                                        "code": "348",
                                        "name": "Kevin Kilbane (Republic of Ireland)"
                                },
                                {
                                        "code": "349",
                                        "name": "Damien Duff (Republic of Ireland)"
                                },
                                {
                                        "code": "350",
                                        "name": "Robbie Keane (Republic of Ireland)"
                                },
                                {
                                        "code": "351",
                                        "name": "Niall Quinn (Republic of Ireland)"
                                },
                                {
                                        "code": "352",
                                        "name": "David Connolly (Republic of Ireland)"
                                },
                                {
                                        "code": "353",
                                        "name": "Jason McAteer (Republic of Ireland)"
                                },
                                {
                                        "code": "354",
                                        "name": "Lee Carsley (Republic of Ireland)"
                                },
                                {
                                        "code": "355",
                                        "name": "Dean Kiely (Republic of Ireland)"
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
                                        "code": "356",
                                        "name": "Cameroon Badge"
                                },
                                {
                                        "code": "357",
                                        "name": "Alioum Boukar (Cameroon)"
                                },
                                {
                                        "code": "358",
                                        "name": "Geremi Njitap (Cameroon)"
                                },
                                {
                                        "code": "359",
                                        "name": "Rigobert Song (Cameroon)"
                                },
                                {
                                        "code": "360",
                                        "name": "Raymond Kalla (Cameroon)"
                                },
                                {
                                        "code": "361",
                                        "name": "Pierre Wome (Cameroon)"
                                },
                                {
                                        "code": "362",
                                        "name": "Bill Tchato (Cameroon)"
                                },
                                {
                                        "code": "363",
                                        "name": "Lauren Etame Mayer (Cameroon)"
                                },
                                {
                                        "code": "364",
                                        "name": "Marc-Vivien Foe (Cameroon)"
                                },
                                {
                                        "code": "365",
                                        "name": "Salomon Olembe (Cameroon)"
                                },
                                {
                                        "code": "366",
                                        "name": "Samuel Eto'o (Cameroon)"
                                },
                                {
                                        "code": "367",
                                        "name": "Patrick Mboma (Cameroon)"
                                },
                                {
                                        "code": "368",
                                        "name": "Pius Ndiefi (Cameroon)"
                                },
                                {
                                        "code": "369",
                                        "name": "Joseph-Desire Job (Cameroon)"
                                },
                                {
                                        "code": "370",
                                        "name": "Eric Djemba-Djemba (Cameroon)"
                                },
                                {
                                        "code": "371",
                                        "name": "Lucien Mettomo (Cameroon)"
                                },
                                {
                                        "code": "372",
                                        "name": "Jacques Songo'o (Cameroon)"
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
                                        "code": "373",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "374",
                                        "name": "Pablo Cavallero (Argentina)"
                                },
                                {
                                        "code": "375",
                                        "name": "Mauricio Pochettino (Argentina)"
                                },
                                {
                                        "code": "376",
                                        "name": "Walter Samuel (Argentina)"
                                },
                                {
                                        "code": "377",
                                        "name": "Jose Chamot (Argentina)"
                                },
                                {
                                        "code": "378",
                                        "name": "Javier Zanetti (Argentina)"
                                },
                                {
                                        "code": "379",
                                        "name": "Diego Simeone (Argentina)"
                                },
                                {
                                        "code": "380",
                                        "name": "Juan Sebastian Veron (Argentina)"
                                },
                                {
                                        "code": "381",
                                        "name": "Kily Gonzalez (Argentina)"
                                },
                                {
                                        "code": "382",
                                        "name": "Ariel Ortega (Argentina)"
                                },
                                {
                                        "code": "383",
                                        "name": "Gabriel Batistuta (Argentina)"
                                },
                                {
                                        "code": "384",
                                        "name": "Claudio Lopez (Argentina)"
                                },
                                {
                                        "code": "385",
                                        "name": "Hernan Crespo (Argentina)"
                                },
                                {
                                        "code": "386",
                                        "name": "Pablo Aimar (Argentina)"
                                },
                                {
                                        "code": "387",
                                        "name": "Marcelo Gallardo (Argentina)"
                                },
                                {
                                        "code": "388",
                                        "name": "Gustavo Lopez (Argentina)"
                                },
                                {
                                        "code": "389",
                                        "name": "German Burgos (Argentina)"
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
                                        "code": "390",
                                        "name": "Nigeria Badge"
                                },
                                {
                                        "code": "391",
                                        "name": "Vincent Enyeama (Nigeria)"
                                },
                                {
                                        "code": "392",
                                        "name": "Efe Sodje (Nigeria)"
                                },
                                {
                                        "code": "393",
                                        "name": "Isaac Okoronkwo (Nigeria)"
                                },
                                {
                                        "code": "394",
                                        "name": "Taribo West (Nigeria)"
                                },
                                {
                                        "code": "395",
                                        "name": "Celestine Babayaro (Nigeria)"
                                },
                                {
                                        "code": "396",
                                        "name": "Joseph Yobo (Nigeria)"
                                },
                                {
                                        "code": "397",
                                        "name": "Justice Christopher (Nigeria)"
                                },
                                {
                                        "code": "398",
                                        "name": "Jay-Jay Okocha (Nigeria)"
                                },
                                {
                                        "code": "399",
                                        "name": "Garba Lawal (Nigeria)"
                                },
                                {
                                        "code": "400",
                                        "name": "Julius Aghahowa (Nigeria)"
                                },
                                {
                                        "code": "401",
                                        "name": "Nwankwo Kanu (Nigeria)"
                                },
                                {
                                        "code": "402",
                                        "name": "Bartholomew Ogbeche (Nigeria)"
                                },
                                {
                                        "code": "403",
                                        "name": "Pius Ikedia (Nigeria)"
                                },
                                {
                                        "code": "404",
                                        "name": "Benedict Akwuegbu (Nigeria)"
                                },
                                {
                                        "code": "405",
                                        "name": "Femi Opabunmi (Nigeria)"
                                },
                                {
                                        "code": "406",
                                        "name": "Ike Shorunmu (Nigeria)"
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
                                        "code": "407",
                                        "name": "England Badge"
                                },
                                {
                                        "code": "408",
                                        "name": "David Seaman (England)"
                                },
                                {
                                        "code": "409",
                                        "name": "Danny Mills (England)"
                                },
                                {
                                        "code": "410",
                                        "name": "Rio Ferdinand (England)"
                                },
                                {
                                        "code": "411",
                                        "name": "Sol Campbell (England)"
                                },
                                {
                                        "code": "412",
                                        "name": "Ashley Cole (England)"
                                },
                                {
                                        "code": "413",
                                        "name": "David Beckham (England)"
                                },
                                {
                                        "code": "414",
                                        "name": "Paul Scholes (England)"
                                },
                                {
                                        "code": "415",
                                        "name": "Nicky Butt (England)"
                                },
                                {
                                        "code": "416",
                                        "name": "Trevor Sinclair (England)"
                                },
                                {
                                        "code": "417",
                                        "name": "Michael Owen (England)"
                                },
                                {
                                        "code": "418",
                                        "name": "Emile Heskey (England)"
                                },
                                {
                                        "code": "419",
                                        "name": "Teddy Sheringham (England)"
                                },
                                {
                                        "code": "420",
                                        "name": "Robbie Fowler (England)"
                                },
                                {
                                        "code": "421",
                                        "name": "Kieron Dyer (England)"
                                },
                                {
                                        "code": "422",
                                        "name": "Joe Cole (England)"
                                },
                                {
                                        "code": "423",
                                        "name": "Nigel Martyn (England)"
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
                                        "code": "424",
                                        "name": "Sweden Badge"
                                },
                                {
                                        "code": "425",
                                        "name": "Magnus Hedman (Sweden)"
                                },
                                {
                                        "code": "426",
                                        "name": "Olof Mellberg (Sweden)"
                                },
                                {
                                        "code": "427",
                                        "name": "Patrik Andersson (Sweden)"
                                },
                                {
                                        "code": "428",
                                        "name": "Andreas Jakobsson (Sweden)"
                                },
                                {
                                        "code": "429",
                                        "name": "Teddy Lucic (Sweden)"
                                },
                                {
                                        "code": "430",
                                        "name": "Tobias Linderoth (Sweden)"
                                },
                                {
                                        "code": "431",
                                        "name": "Niclas Alexandersson (Sweden)"
                                },
                                {
                                        "code": "432",
                                        "name": "Anders Svensson (Sweden)"
                                },
                                {
                                        "code": "433",
                                        "name": "Freddie Ljungberg (Sweden)"
                                },
                                {
                                        "code": "434",
                                        "name": "Henrik Larsson (Sweden)"
                                },
                                {
                                        "code": "435",
                                        "name": "Marcus Allback (Sweden)"
                                },
                                {
                                        "code": "436",
                                        "name": "Zlatan Ibrahimovic (Sweden)"
                                },
                                {
                                        "code": "437",
                                        "name": "Magnus Svensson (Sweden)"
                                },
                                {
                                        "code": "438",
                                        "name": "Mattias Jonson (Sweden)"
                                },
                                {
                                        "code": "439",
                                        "name": "Daniel Andersson (Sweden)"
                                },
                                {
                                        "code": "440",
                                        "name": "Magnus Kihlstedt (Sweden)"
                                }
                        ]
                }
        ],
        "Group G": [
                {
                        "code": "ITA",
                        "name": "Italy",
                        "flags": [
                                "it"
                        ],
                        "stickers": [
                                {
                                        "code": "441",
                                        "name": "Italy Badge"
                                },
                                {
                                        "code": "442",
                                        "name": "Gianluigi Buffon (Italy)"
                                },
                                {
                                        "code": "443",
                                        "name": "Christian Panucci (Italy)"
                                },
                                {
                                        "code": "444",
                                        "name": "Alessandro Nesta (Italy)"
                                },
                                {
                                        "code": "445",
                                        "name": "Fabio Cannavaro (Italy)"
                                },
                                {
                                        "code": "446",
                                        "name": "Paolo Maldini (Italy)"
                                },
                                {
                                        "code": "447",
                                        "name": "Gianluca Zambrotta (Italy)"
                                },
                                {
                                        "code": "448",
                                        "name": "Damiano Tommasi (Italy)"
                                },
                                {
                                        "code": "449",
                                        "name": "Cristiano Zanetti (Italy)"
                                },
                                {
                                        "code": "450",
                                        "name": "Francesco Totti (Italy)"
                                },
                                {
                                        "code": "451",
                                        "name": "Christian Vieri (Italy)"
                                },
                                {
                                        "code": "452",
                                        "name": "Alessandro Del Piero (Italy)"
                                },
                                {
                                        "code": "453",
                                        "name": "Filippo Inzaghi (Italy)"
                                },
                                {
                                        "code": "454",
                                        "name": "Gennaro Gattuso (Italy)"
                                },
                                {
                                        "code": "455",
                                        "name": "Vincenzo Montella (Italy)"
                                },
                                {
                                        "code": "456",
                                        "name": "Cristiano Doni (Italy)"
                                },
                                {
                                        "code": "457",
                                        "name": "Francesco Toldo (Italy)"
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
                                        "code": "458",
                                        "name": "Ecuador Badge"
                                },
                                {
                                        "code": "459",
                                        "name": "Jose Francisco Cevallos (Ecuador)"
                                },
                                {
                                        "code": "460",
                                        "name": "Ulises de la Cruz (Ecuador)"
                                },
                                {
                                        "code": "461",
                                        "name": "Ivan Hurtado (Ecuador)"
                                },
                                {
                                        "code": "462",
                                        "name": "Augusto Poroso (Ecuador)"
                                },
                                {
                                        "code": "463",
                                        "name": "Raul Guerron (Ecuador)"
                                },
                                {
                                        "code": "464",
                                        "name": "Edwin Tenorio (Ecuador)"
                                },
                                {
                                        "code": "465",
                                        "name": "Alfonso Obregon (Ecuador)"
                                },
                                {
                                        "code": "466",
                                        "name": "Cleber Chala (Ecuador)"
                                },
                                {
                                        "code": "467",
                                        "name": "Alex Aguinaga (Ecuador)"
                                },
                                {
                                        "code": "468",
                                        "name": "Agustin Delgado (Ecuador)"
                                },
                                {
                                        "code": "469",
                                        "name": "Ivan Kaviedes (Ecuador)"
                                },
                                {
                                        "code": "470",
                                        "name": "Carlos Tenorio (Ecuador)"
                                },
                                {
                                        "code": "471",
                                        "name": "Marlon Ayovi (Ecuador)"
                                },
                                {
                                        "code": "472",
                                        "name": "Walter Ayovi (Ecuador)"
                                },
                                {
                                        "code": "473",
                                        "name": "Angel Fernandez (Ecuador)"
                                },
                                {
                                        "code": "474",
                                        "name": "Geovanny Ibarra (Ecuador)"
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
                                        "code": "475",
                                        "name": "Croatia Badge"
                                },
                                {
                                        "code": "476",
                                        "name": "Stipe Pletikosa (Croatia)"
                                },
                                {
                                        "code": "477",
                                        "name": "Dario Simic (Croatia)"
                                },
                                {
                                        "code": "478",
                                        "name": "Robert Kovac (Croatia)"
                                },
                                {
                                        "code": "479",
                                        "name": "Josip Simunic (Croatia)"
                                },
                                {
                                        "code": "480",
                                        "name": "Robert Jarni (Croatia)"
                                },
                                {
                                        "code": "481",
                                        "name": "Stjepan Tomas (Croatia)"
                                },
                                {
                                        "code": "482",
                                        "name": "Zvonimir Soldo (Croatia)"
                                },
                                {
                                        "code": "483",
                                        "name": "Niko Kovac (Croatia)"
                                },
                                {
                                        "code": "484",
                                        "name": "Milan Rapaic (Croatia)"
                                },
                                {
                                        "code": "485",
                                        "name": "Davor Suker (Croatia)"
                                },
                                {
                                        "code": "486",
                                        "name": "Alen Boksic (Croatia)"
                                },
                                {
                                        "code": "487",
                                        "name": "Ivica Olic (Croatia)"
                                },
                                {
                                        "code": "488",
                                        "name": "Robert Prosinecki (Croatia)"
                                },
                                {
                                        "code": "489",
                                        "name": "Goran Vlaovic (Croatia)"
                                },
                                {
                                        "code": "490",
                                        "name": "Mario Stanic (Croatia)"
                                },
                                {
                                        "code": "491",
                                        "name": "Tomislav Butina (Croatia)"
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
                                        "code": "492",
                                        "name": "Mexico Badge"
                                },
                                {
                                        "code": "493",
                                        "name": "Oscar Perez (Mexico)"
                                },
                                {
                                        "code": "494",
                                        "name": "Salvador Carmona (Mexico)"
                                },
                                {
                                        "code": "495",
                                        "name": "Rafael Marquez (Mexico)"
                                },
                                {
                                        "code": "496",
                                        "name": "Manuel Vidrio (Mexico)"
                                },
                                {
                                        "code": "497",
                                        "name": "Ramon Morales (Mexico)"
                                },
                                {
                                        "code": "498",
                                        "name": "Gerardo Torrado (Mexico)"
                                },
                                {
                                        "code": "499",
                                        "name": "Johan Rodriguez (Mexico)"
                                },
                                {
                                        "code": "500",
                                        "name": "Braulio Luna (Mexico)"
                                },
                                {
                                        "code": "501",
                                        "name": "Jesus Arellano (Mexico)"
                                },
                                {
                                        "code": "502",
                                        "name": "Jared Borgetti (Mexico)"
                                },
                                {
                                        "code": "503",
                                        "name": "Cuauhtemoc Blanco (Mexico)"
                                },
                                {
                                        "code": "504",
                                        "name": "Francisco Palencia (Mexico)"
                                },
                                {
                                        "code": "505",
                                        "name": "Luis Hernandez (Mexico)"
                                },
                                {
                                        "code": "506",
                                        "name": "Alberto Garcia Aspe (Mexico)"
                                },
                                {
                                        "code": "507",
                                        "name": "Sigifredo Mercado (Mexico)"
                                },
                                {
                                        "code": "508",
                                        "name": "Oswaldo Sanchez (Mexico)"
                                }
                        ]
                }
        ],
        "Group H": [
                {
                        "code": "JPN",
                        "name": "Japan",
                        "flags": [
                                "jp"
                        ],
                        "stickers": [
                                {
                                        "code": "509",
                                        "name": "Japan Badge"
                                },
                                {
                                        "code": "510",
                                        "name": "Yoshikatsu Kawaguchi (Japan)"
                                },
                                {
                                        "code": "511",
                                        "name": "Naoki Matsuda (Japan)"
                                },
                                {
                                        "code": "512",
                                        "name": "Ryuzo Morioka (Japan)"
                                },
                                {
                                        "code": "513",
                                        "name": "Koji Nakata (Japan)"
                                },
                                {
                                        "code": "514",
                                        "name": "Tsuneyasu Miyamoto (Japan)"
                                },
                                {
                                        "code": "515",
                                        "name": "Tomokazu Myojin (Japan)"
                                },
                                {
                                        "code": "516",
                                        "name": "Kazuyuki Toda (Japan)"
                                },
                                {
                                        "code": "517",
                                        "name": "Junichi Inamoto (Japan)"
                                },
                                {
                                        "code": "518",
                                        "name": "Hidetoshi Nakata (Japan)"
                                },
                                {
                                        "code": "519",
                                        "name": "Shinji Ono (Japan)"
                                },
                                {
                                        "code": "520",
                                        "name": "Takayuki Suzuki (Japan)"
                                },
                                {
                                        "code": "521",
                                        "name": "Atsushi Yanagisawa (Japan)"
                                },
                                {
                                        "code": "522",
                                        "name": "Hiroaki Morishima (Japan)"
                                },
                                {
                                        "code": "523",
                                        "name": "Masashi Nakayama (Japan)"
                                },
                                {
                                        "code": "524",
                                        "name": "Daisuke Ichikawa (Japan)"
                                },
                                {
                                        "code": "525",
                                        "name": "Seigo Narazaki (Japan)"
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
                                        "code": "526",
                                        "name": "Belgium Badge"
                                },
                                {
                                        "code": "527",
                                        "name": "Geert De Vlieger (Belgium)"
                                },
                                {
                                        "code": "528",
                                        "name": "Jacky Peeters (Belgium)"
                                },
                                {
                                        "code": "529",
                                        "name": "Daniel Van Buyten (Belgium)"
                                },
                                {
                                        "code": "530",
                                        "name": "Eric Van Meir (Belgium)"
                                },
                                {
                                        "code": "531",
                                        "name": "Nico Van Kerckhoven (Belgium)"
                                },
                                {
                                        "code": "532",
                                        "name": "Timmy Simons (Belgium)"
                                },
                                {
                                        "code": "533",
                                        "name": "Yves Vanderhaeghe (Belgium)"
                                },
                                {
                                        "code": "534",
                                        "name": "Johan Walem (Belgium)"
                                },
                                {
                                        "code": "535",
                                        "name": "Bart Goor (Belgium)"
                                },
                                {
                                        "code": "536",
                                        "name": "Marc Wilmots (Belgium)"
                                },
                                {
                                        "code": "537",
                                        "name": "Gert Verheyen (Belgium)"
                                },
                                {
                                        "code": "538",
                                        "name": "Mbo Mpenza (Belgium)"
                                },
                                {
                                        "code": "539",
                                        "name": "Wesley Sonck (Belgium)"
                                },
                                {
                                        "code": "540",
                                        "name": "Peter Van Der Heyden (Belgium)"
                                },
                                {
                                        "code": "541",
                                        "name": "Sven Vermant (Belgium)"
                                },
                                {
                                        "code": "542",
                                        "name": "Frederic Herpoel (Belgium)"
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
                                        "code": "543",
                                        "name": "Russia Badge"
                                },
                                {
                                        "code": "544",
                                        "name": "Ruslan Nigmatullin (Russia)"
                                },
                                {
                                        "code": "545",
                                        "name": "Yuri Kovtun (Russia)"
                                },
                                {
                                        "code": "546",
                                        "name": "Viktor Onopko (Russia)"
                                },
                                {
                                        "code": "547",
                                        "name": "Yuri Nikiforov (Russia)"
                                },
                                {
                                        "code": "548",
                                        "name": "Gennady Nizhegorodov (Russia)"
                                },
                                {
                                        "code": "549",
                                        "name": "Alexei Smertin (Russia)"
                                },
                                {
                                        "code": "550",
                                        "name": "Valery Karpin (Russia)"
                                },
                                {
                                        "code": "551",
                                        "name": "Egor Titov (Russia)"
                                },
                                {
                                        "code": "552",
                                        "name": "Marat Izmailov (Russia)"
                                },
                                {
                                        "code": "553",
                                        "name": "Vladimir Beschastnykh (Russia)"
                                },
                                {
                                        "code": "554",
                                        "name": "Ruslan Pimenov (Russia)"
                                },
                                {
                                        "code": "555",
                                        "name": "Dmitri Sychev (Russia)"
                                },
                                {
                                        "code": "556",
                                        "name": "Alexander Kerzhakov (Russia)"
                                },
                                {
                                        "code": "557",
                                        "name": "Dmitri Khokhlov (Russia)"
                                },
                                {
                                        "code": "558",
                                        "name": "Igor Semshov (Russia)"
                                },
                                {
                                        "code": "559",
                                        "name": "Stanislav Cherchesov (Russia)"
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
                                        "name": "Ali Boumnijel (Tunisia)"
                                },
                                {
                                        "code": "562",
                                        "name": "Hatem Trabelsi (Tunisia)"
                                },
                                {
                                        "code": "563",
                                        "name": "Khaled Badra (Tunisia)"
                                },
                                {
                                        "code": "564",
                                        "name": "Radhi Jaidi (Tunisia)"
                                },
                                {
                                        "code": "565",
                                        "name": "Raouf Bouzaiene (Tunisia)"
                                },
                                {
                                        "code": "566",
                                        "name": "Riadh Bouazizi (Tunisia)"
                                },
                                {
                                        "code": "567",
                                        "name": "Zoubeir Baya (Tunisia)"
                                },
                                {
                                        "code": "568",
                                        "name": "Kaies Ghodhbane (Tunisia)"
                                },
                                {
                                        "code": "569",
                                        "name": "Slim Ben Achour (Tunisia)"
                                },
                                {
                                        "code": "570",
                                        "name": "Ziad Jaziri (Tunisia)"
                                },
                                {
                                        "code": "571",
                                        "name": "Imed Mhedhebi (Tunisia)"
                                },
                                {
                                        "code": "572",
                                        "name": "Ali Zitouni (Tunisia)"
                                },
                                {
                                        "code": "573",
                                        "name": "Adel Sellimi (Tunisia)"
                                },
                                {
                                        "code": "574",
                                        "name": "Hassen Gabsi (Tunisia)"
                                },
                                {
                                        "code": "575",
                                        "name": "Mourad Melki (Tunisia)"
                                },
                                {
                                        "code": "576",
                                        "name": "Chokri El Ouaer (Tunisia)"
                                }
                        ]
                }
        ]
}
};

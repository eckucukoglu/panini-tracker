// data/tournaments/wc1986.js
// Official Panini Mexico 86 World Cup Collection (1-427)

TOURNAMENTS_CONFIG.tournaments['wc1986'] = {
    id: 'wc1986',
    categoryId: 'fifa-world-cup',
    year: 1986,
    title: 'Mexico 86',
    subtitle: 'Mexico • 24 Teams • 427 Stickers',
    dbKey: 'panini1986',
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
                                        "name": "World Cup 86 Official Logo"
                                },
                                {
                                        "code": "2",
                                        "name": "Official Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Pique (Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Uruguay 1930"
                                },
                                {
                                        "code": "5",
                                        "name": "Italy 1934"
                                },
                                {
                                        "code": "6",
                                        "name": "France 1938"
                                },
                                {
                                        "code": "7",
                                        "name": "Brazil 1950"
                                },
                                {
                                        "code": "8",
                                        "name": "Switzerland 1954"
                                },
                                {
                                        "code": "9",
                                        "name": "Sweden 1958"
                                },
                                {
                                        "code": "10",
                                        "name": "Chile 1962"
                                },
                                {
                                        "code": "11",
                                        "name": "England 1966"
                                },
                                {
                                        "code": "12",
                                        "name": "Mexico 1970"
                                },
                                {
                                        "code": "13",
                                        "name": "West Germany 1974"
                                },
                                {
                                        "code": "14",
                                        "name": "Argentina 1978"
                                },
                                {
                                        "code": "15",
                                        "name": "Spain 1982"
                                },
                                {
                                        "code": "16",
                                        "name": "Ciudad de Mexico"
                                },
                                {
                                        "code": "17",
                                        "name": "Estadio Azteca 2000"
                                },
                                {
                                        "code": "18",
                                        "name": "Estadio Olimpico ’68"
                                },
                                {
                                        "code": "19",
                                        "name": "Estadio Jalisco"
                                },
                                {
                                        "code": "20",
                                        "name": "Guadalajara"
                                },
                                {
                                        "code": "21",
                                        "name": "Estadio 3 de Marzo"
                                },
                                {
                                        "code": "22",
                                        "name": "Irapuato"
                                },
                                {
                                        "code": "23",
                                        "name": "Estadio Irapuato"
                                },
                                {
                                        "code": "24",
                                        "name": "Leon"
                                },
                                {
                                        "code": "25",
                                        "name": "Estadio Nou Camp"
                                },
                                {
                                        "code": "26",
                                        "name": "Estadio Neza ’86"
                                },
                                {
                                        "code": "27",
                                        "name": "Estadio Universitario"
                                },
                                {
                                        "code": "28",
                                        "name": "Monterrey"
                                },
                                {
                                        "code": "29",
                                        "name": "Estadio Tecnologico"
                                },
                                {
                                        "code": "30",
                                        "name": "Puebla"
                                },
                                {
                                        "code": "31",
                                        "name": "Estadio Cuauhtemoc"
                                },
                                {
                                        "code": "32",
                                        "name": "Queretaro"
                                },
                                {
                                        "code": "33",
                                        "name": "Estadio La Corregidora"
                                },
                                {
                                        "code": "34",
                                        "name": "Toluca"
                                },
                                {
                                        "code": "35",
                                        "name": "Estadio Luis Dosal"
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
                                        "code": "36",
                                        "name": "Badge Italia"
                                },
                                {
                                        "code": "37",
                                        "name": "Italia"
                                },
                                {
                                        "code": "38",
                                        "name": "Franco Tancredi"
                                },
                                {
                                        "code": "39",
                                        "name": "Giuseppe Bergomi"
                                },
                                {
                                        "code": "40",
                                        "name": "Gaetano Scirea"
                                },
                                {
                                        "code": "41",
                                        "name": "Pietro Vierchowod"
                                },
                                {
                                        "code": "42",
                                        "name": "Fulvio Collovati"
                                },
                                {
                                        "code": "43",
                                        "name": "Antonio Cabrini"
                                },
                                {
                                        "code": "44",
                                        "name": "Giuseppe Baresi"
                                },
                                {
                                        "code": "45",
                                        "name": "Salvatore Bagni"
                                },
                                {
                                        "code": "46",
                                        "name": "Marco Tardelli"
                                },
                                {
                                        "code": "47",
                                        "name": "Antonio Di Gennaro"
                                },
                                {
                                        "code": "48",
                                        "name": "Carlo Ancelotti"
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
                                        "name": "Aldo Serena"
                                },
                                {
                                        "code": "52",
                                        "name": "Alessandro Altobelli"
                                },
                                {
                                        "code": "53",
                                        "name": "Giovanni Galli"
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
                                        "code": "54",
                                        "name": "Badge Bulgaria"
                                },
                                {
                                        "code": "55",
                                        "name": "Bulgaria"
                                },
                                {
                                        "code": "56",
                                        "name": "Borislav Michailov"
                                },
                                {
                                        "code": "57",
                                        "name": "Krasimir Koev"
                                },
                                {
                                        "code": "58",
                                        "name": "Georgi Dimitrov"
                                },
                                {
                                        "code": "59",
                                        "name": "Nikolai Arabov"
                                },
                                {
                                        "code": "60",
                                        "name": "Petar Petrov"
                                },
                                {
                                        "code": "61",
                                        "name": "Emil Dimitrov"
                                },
                                {
                                        "code": "62",
                                        "name": "Radoslav Zdravkov"
                                },
                                {
                                        "code": "63",
                                        "name": "Ayan Sadakov"
                                },
                                {
                                        "code": "64",
                                        "name": "Zivko Gospodinov"
                                },
                                {
                                        "code": "65",
                                        "name": "Plamen Getov"
                                },
                                {
                                        "code": "66",
                                        "name": "Hristo Kolev"
                                },
                                {
                                        "code": "67",
                                        "name": "Rusi Gotchev"
                                },
                                {
                                        "code": "68",
                                        "name": "Bozidar Iskrenov"
                                },
                                {
                                        "code": "69",
                                        "name": "Kostadin Kostadinov"
                                },
                                {
                                        "code": "70",
                                        "name": "Stoycho Mladenov"
                                },
                                {
                                        "code": "71",
                                        "name": "Iliya Valov"
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
                                        "code": "72",
                                        "name": "Badge Argentina"
                                },
                                {
                                        "code": "73",
                                        "name": "Argentina"
                                },
                                {
                                        "code": "74",
                                        "name": "Ubaldo Matildo Fillol"
                                },
                                {
                                        "code": "75",
                                        "name": "Nestor Rolando Clausen"
                                },
                                {
                                        "code": "76",
                                        "name": "Daniel Alberto Passarella"
                                },
                                {
                                        "code": "77",
                                        "name": "Oscar Alfredo Ruggeri"
                                },
                                {
                                        "code": "78",
                                        "name": "Jose Luis Brown"
                                },
                                {
                                        "code": "79",
                                        "name": "Oscar Alfredo Garre"
                                },
                                {
                                        "code": "80",
                                        "name": "Miguel Angel Russo"
                                },
                                {
                                        "code": "81",
                                        "name": "Ricardo Omar Giusti"
                                },
                                {
                                        "code": "82",
                                        "name": "Juan Alberto Barbas"
                                },
                                {
                                        "code": "83",
                                        "name": "Ricardo Enrique Bochini"
                                },
                                {
                                        "code": "84",
                                        "name": "Diego Armando Maradona"
                                },
                                {
                                        "code": "85",
                                        "name": "Jorge Luis Burruchaga"
                                },
                                {
                                        "code": "86",
                                        "name": "Claudio Daniel Borghi"
                                },
                                {
                                        "code": "87",
                                        "name": "Pedro Pablo Pasculli"
                                },
                                {
                                        "code": "88",
                                        "name": "Jorge Alberto F. Valdano"
                                },
                                {
                                        "code": "89",
                                        "name": "Nery Alberto Pumpido"
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
                                        "code": "90",
                                        "name": "Badge South Korea"
                                },
                                {
                                        "code": "91",
                                        "name": "South Korea"
                                },
                                {
                                        "code": "92",
                                        "name": "Cho Byung Duk / Park Kyung Hoon"
                                },
                                {
                                        "code": "93",
                                        "name": "Jung Yong Hwan / Cho Min Kook"
                                },
                                {
                                        "code": "94",
                                        "name": "Chung Jong Soo / Kim Pyung Suk"
                                },
                                {
                                        "code": "95",
                                        "name": "Lee Tae Ho / Kim Jong Boo"
                                },
                                {
                                        "code": "96",
                                        "name": "Cho Kwang Rae / Park Chang Sun"
                                },
                                {
                                        "code": "97",
                                        "name": "Huh Jung Moo / Kim Sam Soo"
                                },
                                {
                                        "code": "98",
                                        "name": "Choi Soon Ho / Kim Joo Sung"
                                },
                                {
                                        "code": "99",
                                        "name": "Cha Bum Kun / Oh Yun Kyo"
                                }
                        ]
                }
        ],
        "Group B": [
                {
                        "code": "IRQ",
                        "name": "Iraq",
                        "flags": [
                                "iq"
                        ],
                        "stickers": [
                                {
                                        "code": "100",
                                        "name": "Badge Iraq"
                                },
                                {
                                        "code": "101",
                                        "name": "Iraq"
                                },
                                {
                                        "code": "102",
                                        "name": "Raad Hammoudi / Ganin Arabi"
                                },
                                {
                                        "code": "103",
                                        "name": "Adnan Derjal / Abdul Kadhum Mothasmar"
                                },
                                {
                                        "code": "104",
                                        "name": "Khalil Mohammed Allawi / Samir Shawir UER UER: Name misspelled \"Khahl Mohammed Alawi\""
                                },
                                {
                                        "code": "105",
                                        "name": "Basil Gewargis / Haris Mohammed"
                                },
                                {
                                        "code": "106",
                                        "name": "Natiq Hachim / Shakir Mahmoud"
                                },
                                {
                                        "code": "107",
                                        "name": "Ali Hussein Chebab / Ahmed Radhi UER UER: Last name misspelled \"Rhadi\""
                                },
                                {
                                        "code": "108",
                                        "name": "Hussein Said / Jamal Ali"
                                },
                                {
                                        "code": "109",
                                        "name": "Inad Jassim / Abdul Fatah Nussayef"
                                }
                        ]
                },
                {
                        "code": "MEX",
                        "name": "Mexico (H)",
                        "flags": [
                                "mx"
                        ],
                        "stickers": [
                                {
                                        "code": "110",
                                        "name": "Badge Mexico"
                                },
                                {
                                        "code": "111",
                                        "name": "Mexico"
                                },
                                {
                                        "code": "112",
                                        "name": "Pablo Larios"
                                },
                                {
                                        "code": "113",
                                        "name": "Mario Trejo"
                                },
                                {
                                        "code": "114",
                                        "name": "Felix Cruz Barbosa"
                                },
                                {
                                        "code": "115",
                                        "name": "Armando Manzo"
                                },
                                {
                                        "code": "116",
                                        "name": "Fernando Quirarte"
                                },
                                {
                                        "code": "117",
                                        "name": "Rafael Amador"
                                },
                                {
                                        "code": "118",
                                        "name": "Raul Servin"
                                },
                                {
                                        "code": "119",
                                        "name": "Carlos Muñoz"
                                },
                                {
                                        "code": "120",
                                        "name": "Miguel España"
                                },
                                {
                                        "code": "121",
                                        "name": "Tomas Boy"
                                },
                                {
                                        "code": "122",
                                        "name": "Javier Aguirre"
                                },
                                {
                                        "code": "123",
                                        "name": "Manuel Negrete"
                                },
                                {
                                        "code": "124",
                                        "name": "Hugo Sanchez"
                                },
                                {
                                        "code": "125",
                                        "name": "Luis Flores"
                                },
                                {
                                        "code": "126",
                                        "name": "Carlos Hermosillo"
                                },
                                {
                                        "code": "127",
                                        "name": "Olaf Heredia"
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
                                        "code": "128",
                                        "name": "Badge Belgique - België"
                                },
                                {
                                        "code": "129",
                                        "name": "Belgique - België"
                                },
                                {
                                        "code": "130",
                                        "name": "Jean-Marie Pfaff"
                                },
                                {
                                        "code": "131",
                                        "name": "Eric Gerets"
                                },
                                {
                                        "code": "132",
                                        "name": "Franky Van der Elst UER UER: Last name misspelled \"Vanderelst\""
                                },
                                {
                                        "code": "133",
                                        "name": "Hugo Broos"
                                },
                                {
                                        "code": "134",
                                        "name": "Michel Renquin"
                                },
                                {
                                        "code": "135",
                                        "name": "Georges Grun"
                                },
                                {
                                        "code": "136",
                                        "name": "Leo Van der Elst"
                                },
                                {
                                        "code": "137",
                                        "name": "Rene Vandereycken"
                                },
                                {
                                        "code": "138",
                                        "name": "Vincenzo Scifo"
                                },
                                {
                                        "code": "139",
                                        "name": "Frankie Vercauteren"
                                },
                                {
                                        "code": "140",
                                        "name": "Jan Ceulemans"
                                },
                                {
                                        "code": "141",
                                        "name": "Danny Veyt"
                                },
                                {
                                        "code": "142",
                                        "name": "Erwin Vandenbergh"
                                },
                                {
                                        "code": "143",
                                        "name": "Alex Czerniatynski"
                                },
                                {
                                        "code": "144",
                                        "name": "Filip Desmet"
                                },
                                {
                                        "code": "145",
                                        "name": "Jackie Munaron"
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
                                        "code": "146",
                                        "name": "Badge Paraguay"
                                },
                                {
                                        "code": "147",
                                        "name": "Paraguay"
                                },
                                {
                                        "code": "148",
                                        "name": "Roberto Fernandez"
                                },
                                {
                                        "code": "149",
                                        "name": "Juan Bautista Torales"
                                },
                                {
                                        "code": "150",
                                        "name": "Virginio Caceres"
                                },
                                {
                                        "code": "151",
                                        "name": "Cesar Zabala"
                                },
                                {
                                        "code": "152",
                                        "name": "Rogelio Delgado"
                                },
                                {
                                        "code": "153",
                                        "name": "Wladimiro Schetina"
                                },
                                {
                                        "code": "154",
                                        "name": "Isidro Sandoval"
                                },
                                {
                                        "code": "155",
                                        "name": "Jorge Guasch"
                                },
                                {
                                        "code": "156",
                                        "name": "Jorge Amado Nunes"
                                },
                                {
                                        "code": "157",
                                        "name": "Marciano Rolando Chilavert"
                                },
                                {
                                        "code": "158",
                                        "name": "Adolfino Canete"
                                },
                                {
                                        "code": "159",
                                        "name": "Julio Cesar Romero"
                                },
                                {
                                        "code": "160",
                                        "name": "Buenaventura Ferreira"
                                },
                                {
                                        "code": "161",
                                        "name": "Ramon Angel Hicks"
                                },
                                {
                                        "code": "162",
                                        "name": "Roberto Cabanas"
                                },
                                {
                                        "code": "163",
                                        "name": "Ever Hugo Almeida"
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
                                        "code": "164",
                                        "name": "Badge France"
                                },
                                {
                                        "code": "165",
                                        "name": "France"
                                },
                                {
                                        "code": "166",
                                        "name": "Joel Bats"
                                },
                                {
                                        "code": "167",
                                        "name": "William Ayache"
                                },
                                {
                                        "code": "168",
                                        "name": "Patrick Battiston"
                                },
                                {
                                        "code": "169",
                                        "name": "Maxime Bossis"
                                },
                                {
                                        "code": "170",
                                        "name": "Yvon Le Roux"
                                },
                                {
                                        "code": "171",
                                        "name": "Manuel Amoros"
                                },
                                {
                                        "code": "172",
                                        "name": "Luis Fernandez"
                                },
                                {
                                        "code": "173",
                                        "name": "Jean-Amadou Tigana"
                                },
                                {
                                        "code": "174",
                                        "name": "Alain Giresse"
                                },
                                {
                                        "code": "175",
                                        "name": "Michel Platini"
                                },
                                {
                                        "code": "176",
                                        "name": "Jean-Marc Ferreri"
                                },
                                {
                                        "code": "177",
                                        "name": "Dominique Rocheteau"
                                },
                                {
                                        "code": "178",
                                        "name": "Jose Toure"
                                },
                                {
                                        "code": "179",
                                        "name": "Yannick Stopyra"
                                },
                                {
                                        "code": "180",
                                        "name": "Bruno Bellone"
                                },
                                {
                                        "code": "181",
                                        "name": "Albert Rust"
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
                                        "code": "182",
                                        "name": "Badge SSSR"
                                },
                                {
                                        "code": "183",
                                        "name": "SSSR"
                                },
                                {
                                        "code": "184",
                                        "name": "Rinat Dasaev"
                                },
                                {
                                        "code": "185",
                                        "name": "Gennadi Morozov"
                                },
                                {
                                        "code": "186",
                                        "name": "Aleksandr Chivadze"
                                },
                                {
                                        "code": "187",
                                        "name": "Sergei Baltacha"
                                },
                                {
                                        "code": "188",
                                        "name": "Aleksandr Bubnov"
                                },
                                {
                                        "code": "189",
                                        "name": "Anatoli Demianenko"
                                },
                                {
                                        "code": "190",
                                        "name": "Vladimir Bessonov"
                                },
                                {
                                        "code": "191",
                                        "name": "Sergei Gotsmanov"
                                },
                                {
                                        "code": "192",
                                        "name": "Sergei Aleinikov"
                                },
                                {
                                        "code": "193",
                                        "name": "Fedor Cherenkov"
                                },
                                {
                                        "code": "194",
                                        "name": "Gennadi Litovchenko"
                                },
                                {
                                        "code": "195",
                                        "name": "Aleksandr Zavarov"
                                },
                                {
                                        "code": "196",
                                        "name": "Oleg Protasov"
                                },
                                {
                                        "code": "197",
                                        "name": "Georgi Kondratiev"
                                },
                                {
                                        "code": "198",
                                        "name": "Oleg Blochin"
                                },
                                {
                                        "code": "199",
                                        "name": "Michail Michailov"
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
                                        "code": "200",
                                        "name": "Badge Magyarorszag"
                                },
                                {
                                        "code": "201",
                                        "name": "Magyarorszag"
                                },
                                {
                                        "code": "202",
                                        "name": "Peter Distzl"
                                },
                                {
                                        "code": "203",
                                        "name": "Sandor Sallai"
                                },
                                {
                                        "code": "204",
                                        "name": "Antal Roth"
                                },
                                {
                                        "code": "205",
                                        "name": "Imre Garaba"
                                },
                                {
                                        "code": "206",
                                        "name": "Laszlo Disztl"
                                },
                                {
                                        "code": "207",
                                        "name": "Zoltan Peter"
                                },
                                {
                                        "code": "208",
                                        "name": "Jozsef Kardos"
                                },
                                {
                                        "code": "209",
                                        "name": "Antal Nagy"
                                },
                                {
                                        "code": "210",
                                        "name": "Peter Hannich"
                                },
                                {
                                        "code": "211",
                                        "name": "Lajos Detari"
                                },
                                {
                                        "code": "212",
                                        "name": "Gyula Hajszan"
                                },
                                {
                                        "code": "213",
                                        "name": "Jozsef Kiprich"
                                },
                                {
                                        "code": "214",
                                        "name": "Tibor Nyilasi"
                                },
                                {
                                        "code": "215",
                                        "name": "Marton Esterhazy"
                                },
                                {
                                        "code": "216",
                                        "name": "Laszlo Dajka"
                                },
                                {
                                        "code": "217",
                                        "name": "Jozsef Szendrei"
                                }
                        ]
                },
                {
                        "code": "CAN",
                        "name": "Canada",
                        "flags": [
                                "ca"
                        ],
                        "stickers": [
                                {
                                        "code": "218",
                                        "name": "Badge Canada"
                                },
                                {
                                        "code": "219",
                                        "name": "Canada"
                                },
                                {
                                        "code": "220",
                                        "name": "Tino Lettieri / Bob Lenarduzzi"
                                },
                                {
                                        "code": "221",
                                        "name": "Ian Bridge / Terry Moore"
                                },
                                {
                                        "code": "222",
                                        "name": "Randy Samuel / Bruce Wilson"
                                },
                                {
                                        "code": "223",
                                        "name": "David Norman / Randy Ragan"
                                },
                                {
                                        "code": "224",
                                        "name": "Mike Sweeney / Paul James"
                                },
                                {
                                        "code": "225",
                                        "name": "George Pakos / Ken Garraway"
                                },
                                {
                                        "code": "226",
                                        "name": "Igor Vrablic / Carl Valentine"
                                },
                                {
                                        "code": "227",
                                        "name": "Dale Mitchell / Paul Dolan"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "ALG",
                        "name": "Algeria",
                        "flags": [
                                "dz"
                        ],
                        "stickers": [
                                {
                                        "code": "228",
                                        "name": "Badge Algerie"
                                },
                                {
                                        "code": "229",
                                        "name": "Algerie"
                                },
                                {
                                        "code": "230",
                                        "name": "Nasser-Eddine Drid / Abdelhamid Sadmi"
                                },
                                {
                                        "code": "231",
                                        "name": "Mahmoud Guendouz / Noureddine Kourichi UER UER: First name misspelled \"Nordine\""
                                },
                                {
                                        "code": "232",
                                        "name": "Fodil Megharia / Faouzi Mansouri"
                                },
                                {
                                        "code": "233",
                                        "name": "Mohammed Kaci Said / Karim Maroc"
                                },
                                {
                                        "code": "234",
                                        "name": "Hocine Yahi / Lakhdar Belloumi"
                                },
                                {
                                        "code": "235",
                                        "name": "Rabah Madjer / Djamel Menad"
                                },
                                {
                                        "code": "236",
                                        "name": "Nacer Bouiche / Tedj Bensaoula"
                                },
                                {
                                        "code": "237",
                                        "name": "Salah Assad / Mehdi Cerbah"
                                }
                        ]
                },
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "238",
                                        "name": "Badge Brasil"
                                },
                                {
                                        "code": "239",
                                        "name": "Brasil"
                                },
                                {
                                        "code": "240",
                                        "name": "Carlos"
                                },
                                {
                                        "code": "241",
                                        "name": "Leandro"
                                },
                                {
                                        "code": "242",
                                        "name": "Edson"
                                },
                                {
                                        "code": "243",
                                        "name": "Edinho"
                                },
                                {
                                        "code": "244",
                                        "name": "Oscar"
                                },
                                {
                                        "code": "245",
                                        "name": "Mozer"
                                },
                                {
                                        "code": "246",
                                        "name": "Junior"
                                },
                                {
                                        "code": "247",
                                        "name": "Falcão"
                                },
                                {
                                        "code": "248",
                                        "name": "Toninho Cerezo"
                                },
                                {
                                        "code": "249",
                                        "name": "Socrates"
                                },
                                {
                                        "code": "250",
                                        "name": "Zico"
                                },
                                {
                                        "code": "251",
                                        "name": "Renato"
                                },
                                {
                                        "code": "252",
                                        "name": "Casagrande"
                                },
                                {
                                        "code": "253",
                                        "name": "Careca"
                                },
                                {
                                        "code": "254",
                                        "name": "Eder"
                                },
                                {
                                        "code": "255",
                                        "name": "Paulo Vitor"
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
                                        "code": "256",
                                        "name": "Badge España"
                                },
                                {
                                        "code": "257",
                                        "name": "España"
                                },
                                {
                                        "code": "258",
                                        "name": "Andoni Zubizarreta"
                                },
                                {
                                        "code": "259",
                                        "name": "Tomas Reñones"
                                },
                                {
                                        "code": "260",
                                        "name": "Antonio Maceda"
                                },
                                {
                                        "code": "261",
                                        "name": "Andoni Goicoechea"
                                },
                                {
                                        "code": "262",
                                        "name": "Jose Antonio Camacho"
                                },
                                {
                                        "code": "263",
                                        "name": "Julio Alberto Moreno"
                                },
                                {
                                        "code": "264",
                                        "name": "Juan Antonio Señor"
                                },
                                {
                                        "code": "265",
                                        "name": "Victor Muñoz"
                                },
                                {
                                        "code": "266",
                                        "name": "Ricardo Gallego"
                                },
                                {
                                        "code": "267",
                                        "name": "Rafael Gordillo"
                                },
                                {
                                        "code": "268",
                                        "name": "Ramon Caldere"
                                },
                                {
                                        "code": "269",
                                        "name": "Enrique Setien"
                                },
                                {
                                        "code": "270",
                                        "name": "Emilio Butragueño"
                                },
                                {
                                        "code": "271",
                                        "name": "Manuel Sarabia"
                                },
                                {
                                        "code": "272",
                                        "name": "Hipolito Rincon"
                                },
                                {
                                        "code": "273",
                                        "name": "Francisco J. Urruticoechea"
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
                                        "code": "274",
                                        "name": "Badge Northern Ireland"
                                },
                                {
                                        "code": "275",
                                        "name": "Northern Ireland"
                                },
                                {
                                        "code": "276",
                                        "name": "Pat Jennings"
                                },
                                {
                                        "code": "277",
                                        "name": "Jimmy Nicholl"
                                },
                                {
                                        "code": "278",
                                        "name": "John McClelland"
                                },
                                {
                                        "code": "279",
                                        "name": "John O'Neill"
                                },
                                {
                                        "code": "280",
                                        "name": "Alan McDonald"
                                },
                                {
                                        "code": "281",
                                        "name": "Mal Donaghy"
                                },
                                {
                                        "code": "282",
                                        "name": "Paul Ramsey"
                                },
                                {
                                        "code": "283",
                                        "name": "David McCreery"
                                },
                                {
                                        "code": "284",
                                        "name": "Sammy McIlroy"
                                },
                                {
                                        "code": "285",
                                        "name": "Steve Penney"
                                },
                                {
                                        "code": "286",
                                        "name": "Jimmy Quinn"
                                },
                                {
                                        "code": "287",
                                        "name": "Gerry Armstrong"
                                },
                                {
                                        "code": "288",
                                        "name": "Billy Hamilton"
                                },
                                {
                                        "code": "289",
                                        "name": "Ian Stewart"
                                },
                                {
                                        "code": "290",
                                        "name": "Norman Whiteside"
                                },
                                {
                                        "code": "291",
                                        "name": "Jim Platt"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "FRG",
                        "name": "West Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "292",
                                        "name": "Badge Deutschland-BRD"
                                },
                                {
                                        "code": "293",
                                        "name": "Deutschland-BRD"
                                },
                                {
                                        "code": "294",
                                        "name": "Harald Schumacher"
                                },
                                {
                                        "code": "295",
                                        "name": "Thomas Berthold"
                                },
                                {
                                        "code": "296",
                                        "name": "Matthias Herget"
                                },
                                {
                                        "code": "297",
                                        "name": "Klaus Augenthaler"
                                },
                                {
                                        "code": "298",
                                        "name": "Karl-Heinz Förster"
                                },
                                {
                                        "code": "299",
                                        "name": "Michael Frontzeck"
                                },
                                {
                                        "code": "300",
                                        "name": "Andreas Brehme"
                                },
                                {
                                        "code": "301",
                                        "name": "Hans-Peter Briegel"
                                },
                                {
                                        "code": "302",
                                        "name": "Lothar Matthäus"
                                },
                                {
                                        "code": "303",
                                        "name": "Olaf Thon"
                                },
                                {
                                        "code": "304",
                                        "name": "Wolfgang Felix Magath"
                                },
                                {
                                        "code": "305",
                                        "name": "Pierre Littbarski"
                                },
                                {
                                        "code": "306",
                                        "name": "Rudi Völler"
                                },
                                {
                                        "code": "307",
                                        "name": "Karl-Heinz Rummenigge"
                                },
                                {
                                        "code": "308",
                                        "name": "Klaus Allofs"
                                },
                                {
                                        "code": "309",
                                        "name": "Ulrich Stein"
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
                                        "code": "310",
                                        "name": "Badge Uruguay"
                                },
                                {
                                        "code": "311",
                                        "name": "Uruguay"
                                },
                                {
                                        "code": "312",
                                        "name": "Rodolfo Rodriguez"
                                },
                                {
                                        "code": "313",
                                        "name": "Victor Diogo"
                                },
                                {
                                        "code": "314",
                                        "name": "Nelson Gutierrez"
                                },
                                {
                                        "code": "315",
                                        "name": "Dario Pereyra"
                                },
                                {
                                        "code": "316",
                                        "name": "Eduardo Acevedo"
                                },
                                {
                                        "code": "317",
                                        "name": "Jose Batista"
                                },
                                {
                                        "code": "318",
                                        "name": "Mario Saralegui"
                                },
                                {
                                        "code": "319",
                                        "name": "Jorge Barrios"
                                },
                                {
                                        "code": "320",
                                        "name": "Miguel Bossio"
                                },
                                {
                                        "code": "321",
                                        "name": "Sergio Santin"
                                },
                                {
                                        "code": "322",
                                        "name": "Enzo Francescoli"
                                },
                                {
                                        "code": "323",
                                        "name": "Carlos Aguilera"
                                },
                                {
                                        "code": "324",
                                        "name": "Venancio Ramos"
                                },
                                {
                                        "code": "325",
                                        "name": "Wilmar Cabrera"
                                },
                                {
                                        "code": "326",
                                        "name": "Jorge Da Silva"
                                },
                                {
                                        "code": "327",
                                        "name": "Fernando Alvez"
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
                                        "code": "328",
                                        "name": "Badge Scotland"
                                },
                                {
                                        "code": "329",
                                        "name": "Scotland"
                                },
                                {
                                        "code": "330",
                                        "name": "Jim Leighton"
                                },
                                {
                                        "code": "331",
                                        "name": "Richard Gough"
                                },
                                {
                                        "code": "332",
                                        "name": "Alex McLeish"
                                },
                                {
                                        "code": "333",
                                        "name": "Willie Miller"
                                },
                                {
                                        "code": "334",
                                        "name": "Maurice Malpas"
                                },
                                {
                                        "code": "335",
                                        "name": "Steve Nicol"
                                },
                                {
                                        "code": "336",
                                        "name": "Graeme Souness"
                                },
                                {
                                        "code": "337",
                                        "name": "Roy Aitken"
                                },
                                {
                                        "code": "338",
                                        "name": "Paul McStay"
                                },
                                {
                                        "code": "339",
                                        "name": "Gordon Strachan"
                                },
                                {
                                        "code": "340",
                                        "name": "David Speedie"
                                },
                                {
                                        "code": "341",
                                        "name": "Kenny Dalglish"
                                },
                                {
                                        "code": "342",
                                        "name": "Frank McAvennie"
                                },
                                {
                                        "code": "343",
                                        "name": "Steve Archibald"
                                },
                                {
                                        "code": "344",
                                        "name": "Davie Cooper"
                                },
                                {
                                        "code": "345",
                                        "name": "Alan Rough"
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
                                        "code": "346",
                                        "name": "Badge Danmark"
                                },
                                {
                                        "code": "347",
                                        "name": "Danmark"
                                },
                                {
                                        "code": "348",
                                        "name": "Troels Rasmussen"
                                },
                                {
                                        "code": "349",
                                        "name": "John Sivebaek"
                                },
                                {
                                        "code": "350",
                                        "name": "Morten Olsen"
                                },
                                {
                                        "code": "351",
                                        "name": "Sören Busk"
                                },
                                {
                                        "code": "352",
                                        "name": "Ivan Nielsen"
                                },
                                {
                                        "code": "353",
                                        "name": "Jan Mölby"
                                },
                                {
                                        "code": "354",
                                        "name": "Sören Lerby"
                                },
                                {
                                        "code": "355",
                                        "name": "Jens Bertelsen"
                                },
                                {
                                        "code": "356",
                                        "name": "Frank Arnesen"
                                },
                                {
                                        "code": "357",
                                        "name": "Jesper Olsen"
                                },
                                {
                                        "code": "358",
                                        "name": "Allan Simonsen"
                                },
                                {
                                        "code": "359",
                                        "name": "Klaus Berggreen"
                                },
                                {
                                        "code": "360",
                                        "name": "Preben Elkjaer-Larsen"
                                },
                                {
                                        "code": "361",
                                        "name": "Michael Laudrup"
                                },
                                {
                                        "code": "362",
                                        "name": "Kenneth Brylle"
                                },
                                {
                                        "code": "363",
                                        "name": "Ole Qvist"
                                }
                        ]
                }
        ],
        "Group F": [
                {
                        "code": "POL",
                        "name": "Poland",
                        "flags": [
                                "pl"
                        ],
                        "stickers": [
                                {
                                        "code": "364",
                                        "name": "Badge Polska"
                                },
                                {
                                        "code": "365",
                                        "name": "Polska"
                                },
                                {
                                        "code": "366",
                                        "name": "Josef Mlynarczyk"
                                },
                                {
                                        "code": "367",
                                        "name": "Krzysztof Pawlak"
                                },
                                {
                                        "code": "368",
                                        "name": "Roman Wojcicki"
                                },
                                {
                                        "code": "369",
                                        "name": "Wladyslaw Zmuda"
                                },
                                {
                                        "code": "370",
                                        "name": "Kazimierz Przybys"
                                },
                                {
                                        "code": "371",
                                        "name": "Marek Ostrowski"
                                },
                                {
                                        "code": "372",
                                        "name": "Waldemar Matysik"
                                },
                                {
                                        "code": "373",
                                        "name": "Ryszard Komornicki"
                                },
                                {
                                        "code": "374",
                                        "name": "Andrzej Buncol"
                                },
                                {
                                        "code": "375",
                                        "name": "Jan Urban"
                                },
                                {
                                        "code": "376",
                                        "name": "Zbigniew Boniek"
                                },
                                {
                                        "code": "377",
                                        "name": "Dariusz Dziekanowski"
                                },
                                {
                                        "code": "378",
                                        "name": "Jan Furtok"
                                },
                                {
                                        "code": "379",
                                        "name": "Andrzej Palasz"
                                },
                                {
                                        "code": "380",
                                        "name": "Wlodzimierz Smolarek"
                                },
                                {
                                        "code": "381",
                                        "name": "Jacek Kazimierski"
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
                                        "code": "382",
                                        "name": "Badge Portugal"
                                },
                                {
                                        "code": "383",
                                        "name": "Portugal"
                                },
                                {
                                        "code": "384",
                                        "name": "Bento"
                                },
                                {
                                        "code": "385",
                                        "name": "João Pinto"
                                },
                                {
                                        "code": "386",
                                        "name": "Venâncio"
                                },
                                {
                                        "code": "387",
                                        "name": "Frederico"
                                },
                                {
                                        "code": "388",
                                        "name": "Morato"
                                },
                                {
                                        "code": "389",
                                        "name": "Inacio"
                                },
                                {
                                        "code": "390",
                                        "name": "Veloso"
                                },
                                {
                                        "code": "391",
                                        "name": "Andre"
                                },
                                {
                                        "code": "392",
                                        "name": "Sousa"
                                },
                                {
                                        "code": "393",
                                        "name": "Jaime Pacheco"
                                },
                                {
                                        "code": "394",
                                        "name": "Carlos Manuel"
                                },
                                {
                                        "code": "395",
                                        "name": "Futre"
                                },
                                {
                                        "code": "396",
                                        "name": "Gomes"
                                },
                                {
                                        "code": "397",
                                        "name": "Diamantino"
                                },
                                {
                                        "code": "398",
                                        "name": "Jordão"
                                },
                                {
                                        "code": "399",
                                        "name": "Damas"
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
                                        "code": "400",
                                        "name": "Badge England"
                                },
                                {
                                        "code": "401",
                                        "name": "England"
                                },
                                {
                                        "code": "402",
                                        "name": "Peter Shilton"
                                },
                                {
                                        "code": "403",
                                        "name": "Gary Stevens"
                                },
                                {
                                        "code": "404",
                                        "name": "Terry Butcher"
                                },
                                {
                                        "code": "405",
                                        "name": "Mark Wright"
                                },
                                {
                                        "code": "406",
                                        "name": "Terry Fenwick"
                                },
                                {
                                        "code": "407",
                                        "name": "Kenny Sansom"
                                },
                                {
                                        "code": "408",
                                        "name": "Trevor Steven"
                                },
                                {
                                        "code": "409",
                                        "name": "Paul Bracewell"
                                },
                                {
                                        "code": "410",
                                        "name": "Ray Wilkins"
                                },
                                {
                                        "code": "411",
                                        "name": "Glenn Hoddle"
                                },
                                {
                                        "code": "412",
                                        "name": "Bryan Robson"
                                },
                                {
                                        "code": "413",
                                        "name": "Mark Hateley"
                                },
                                {
                                        "code": "414",
                                        "name": "Kerry Dixon"
                                },
                                {
                                        "code": "415",
                                        "name": "Gary Lineker"
                                },
                                {
                                        "code": "416",
                                        "name": "Chris Waddle"
                                },
                                {
                                        "code": "417",
                                        "name": "Gary Bailey"
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
                                        "code": "418",
                                        "name": "Badge Maroc"
                                },
                                {
                                        "code": "419",
                                        "name": "Maroc"
                                },
                                {
                                        "code": "420",
                                        "name": "Ezzaiki Baddou \"Zaki\" / Mustapha El Biaz"
                                },
                                {
                                        "code": "421",
                                        "name": "Nourredine Bouyahyaoui / Lahcen Oudani \"Hcina\""
                                },
                                {
                                        "code": "422",
                                        "name": "Abdelmajid Lamriss / Hammou Fadili"
                                },
                                {
                                        "code": "423",
                                        "name": "Adbdelmajid Dolmy / Mustapha El Haddaoui"
                                },
                                {
                                        "code": "424",
                                        "name": "Abderrazak Khairi / Mahomed Timouni"
                                },
                                {
                                        "code": "425",
                                        "name": "Aziz Bouderbala / Khalid El Bied"
                                },
                                {
                                        "code": "426",
                                        "name": "Mustapha Merry / Abdelkrim Merry \"Krimau\""
                                },
                                {
                                        "code": "427",
                                        "name": "Abdelfettah Rhiati / Abdelfettah Mouddani"
                                }
                        ]
                }
        ]
}
};

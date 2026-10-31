// data/tournaments/wc2018.js
// Official Panini Russia 2018 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc2018'] = {
    id: 'wc2018',
    categoryId: 'fifa-world-cup',
    year: 2018,
    title: 'Russia 2018',
    subtitle: 'Russia • 32 Teams • 682 Stickers',
    dbKey: 'panini2018',
    isSequential: true,
    totalStickers: 682,
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
                                        "name": "Official Russia 2018 Emblem"
                                },
                                {
                                        "code": "3",
                                        "name": "Zabivaka the Wolf (Mascot)"
                                },
                                {
                                        "code": "4",
                                        "name": "Telstar 18 (Official Match Ball)"
                                },
                                {
                                        "code": "5",
                                        "name": "Luzhniki Stadium (Moscow)"
                                },
                                {
                                        "code": "6",
                                        "name": "Saint Petersburg Stadium"
                                },
                                {
                                        "code": "7",
                                        "name": "Fisht Olympic Stadium (Sochi)"
                                },
                                {
                                        "code": "8",
                                        "name": "Volgograd Arena"
                                },
                                {
                                        "code": "9",
                                        "name": "Kazan Arena"
                                },
                                {
                                        "code": "10",
                                        "name": "Samara Arena"
                                },
                                {
                                        "code": "11",
                                        "name": "Rostov Arena"
                                },
                                {
                                        "code": "12",
                                        "name": "Nizhny Novgorod Stadium"
                                },
                                {
                                        "code": "13",
                                        "name": "Mordovia Arena (Saransk)"
                                },
                                {
                                        "code": "14",
                                        "name": "Ekaterinburg Arena"
                                },
                                {
                                        "code": "15",
                                        "name": "Kaliningrad Stadium"
                                },
                                {
                                        "code": "16",
                                        "name": "Spartak Stadium (Moscow)"
                                },
                                {
                                        "code": "17",
                                        "name": "Host City Poster: Moscow"
                                },
                                {
                                        "code": "18",
                                        "name": "Host City Poster: Saint Petersburg"
                                },
                                {
                                        "code": "19",
                                        "name": "Host City Poster: Sochi"
                                },
                                {
                                        "code": "20",
                                        "name": "Host City Poster: Volgograd"
                                },
                                {
                                        "code": "21",
                                        "name": "Host City Poster: Kazan"
                                },
                                {
                                        "code": "22",
                                        "name": "Host City Poster: Samara"
                                },
                                {
                                        "code": "23",
                                        "name": "Host City Poster: Rostov-on-Don"
                                },
                                {
                                        "code": "24",
                                        "name": "Host City Poster: Nizhny Novgorod"
                                },
                                {
                                        "code": "25",
                                        "name": "Host City Poster: Saransk"
                                },
                                {
                                        "code": "26",
                                        "name": "Host City Poster: Ekaterinburg"
                                },
                                {
                                        "code": "27",
                                        "name": "Host City Poster: Kaliningrad"
                                },
                                {
                                        "code": "28",
                                        "name": "Official Russia 2018 Poster"
                                },
                                {
                                        "code": "29",
                                        "name": "FIFA Fair Play Emblem"
                                },
                                {
                                        "code": "30",
                                        "name": "Roll of Honour: Uruguay, Italy & Germany"
                                },
                                {
                                        "code": "31",
                                        "name": "Roll of Honour: Brazil, England & Argentina"
                                },
                                {
                                        "code": "32",
                                        "name": "Roll of Honour: France & Spain"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "RUS",
                        "name": "Russia",
                        "flags": [
                                "ru"
                        ],
                        "stickers": [
                                {
                                        "code": "33",
                                        "name": "Russia Badge"
                                },
                                {
                                        "code": "34",
                                        "name": "Russia Team Photo"
                                },
                                {
                                        "code": "35",
                                        "name": "Igor Akinfeev (Russia)"
                                },
                                {
                                        "code": "36",
                                        "name": "Mario Fernandes (Russia)"
                                },
                                {
                                        "code": "37",
                                        "name": "Ilya Kutepov (Russia)"
                                },
                                {
                                        "code": "38",
                                        "name": "Sergei Ignashevich (Russia)"
                                },
                                {
                                        "code": "39",
                                        "name": "Yuri Zhirkov (Russia)"
                                },
                                {
                                        "code": "40",
                                        "name": "Igor Smolnikov (Russia)"
                                },
                                {
                                        "code": "41",
                                        "name": "Yuri Gazinsky (Russia)"
                                },
                                {
                                        "code": "42",
                                        "name": "Roman Zobnin (Russia)"
                                },
                                {
                                        "code": "43",
                                        "name": "Aleksandr Samedov (Russia)"
                                },
                                {
                                        "code": "44",
                                        "name": "Aleksandr Golovin (Russia)"
                                },
                                {
                                        "code": "45",
                                        "name": "Denis Cheryshev (Russia)"
                                },
                                {
                                        "code": "46",
                                        "name": "Artem Dzyuba (Russia)"
                                },
                                {
                                        "code": "47",
                                        "name": "Fyodor Smolov (Russia)"
                                },
                                {
                                        "code": "48",
                                        "name": "Alan Dzagoev (Russia)"
                                },
                                {
                                        "code": "49",
                                        "name": "Aleksei Miranchuk (Russia)"
                                },
                                {
                                        "code": "50",
                                        "name": "Anton Miranchuk (Russia)"
                                },
                                {
                                        "code": "51",
                                        "name": "Daler Kuzyaev (Russia)"
                                },
                                {
                                        "code": "52",
                                        "name": "Vladimir Gabulov (Russia)"
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
                                        "code": "53",
                                        "name": "Saudi Arabia Badge"
                                },
                                {
                                        "code": "54",
                                        "name": "Saudi Arabia Team Photo"
                                },
                                {
                                        "code": "55",
                                        "name": "Abdullah Al-Mayouf (Saudi Arabia)"
                                },
                                {
                                        "code": "56",
                                        "name": "Mohammed Al-Breik (Saudi Arabia)"
                                },
                                {
                                        "code": "57",
                                        "name": "Osama Hawsawi (Saudi Arabia)"
                                },
                                {
                                        "code": "58",
                                        "name": "Omar Hawsawi (Saudi Arabia)"
                                },
                                {
                                        "code": "59",
                                        "name": "Yasser Al-Shahrani (Saudi Arabia)"
                                },
                                {
                                        "code": "60",
                                        "name": "Motaz Hawsawi (Saudi Arabia)"
                                },
                                {
                                        "code": "61",
                                        "name": "Abdullah Otayf (Saudi Arabia)"
                                },
                                {
                                        "code": "62",
                                        "name": "Salman Al-Faraj (Saudi Arabia)"
                                },
                                {
                                        "code": "63",
                                        "name": "Taisir Al-Jassim (Saudi Arabia)"
                                },
                                {
                                        "code": "64",
                                        "name": "Salem Al-Dawsari (Saudi Arabia)"
                                },
                                {
                                        "code": "65",
                                        "name": "Yahya Al-Shehri (Saudi Arabia)"
                                },
                                {
                                        "code": "66",
                                        "name": "Mohammad Al-Sahlawi (Saudi Arabia)"
                                },
                                {
                                        "code": "67",
                                        "name": "Fahad Al-Muwallad (Saudi Arabia)"
                                },
                                {
                                        "code": "68",
                                        "name": "Housain Al-Mogahwi (Saudi Arabia)"
                                },
                                {
                                        "code": "69",
                                        "name": "Hattan Bahebri (Saudi Arabia)"
                                },
                                {
                                        "code": "70",
                                        "name": "Mansoor Al-Harbi (Saudi Arabia)"
                                },
                                {
                                        "code": "71",
                                        "name": "Ali Al-Bulaihi (Saudi Arabia)"
                                },
                                {
                                        "code": "72",
                                        "name": "Yasser Al-Mosailem (Saudi Arabia)"
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
                                        "code": "73",
                                        "name": "Egypt Badge"
                                },
                                {
                                        "code": "74",
                                        "name": "Egypt Team Photo"
                                },
                                {
                                        "code": "75",
                                        "name": "Essam El-Hadary (Egypt)"
                                },
                                {
                                        "code": "76",
                                        "name": "Ahmed Fathy (Egypt)"
                                },
                                {
                                        "code": "77",
                                        "name": "Ali Gabr (Egypt)"
                                },
                                {
                                        "code": "78",
                                        "name": "Ahmed Hegazi (Egypt)"
                                },
                                {
                                        "code": "79",
                                        "name": "Mohamed Abdel-Shafy (Egypt)"
                                },
                                {
                                        "code": "80",
                                        "name": "Ahmed Elmohamady (Egypt)"
                                },
                                {
                                        "code": "81",
                                        "name": "Tarek Hamed (Egypt)"
                                },
                                {
                                        "code": "82",
                                        "name": "Mohamed Elneny (Egypt)"
                                },
                                {
                                        "code": "83",
                                        "name": "Abdallah Said (Egypt)"
                                },
                                {
                                        "code": "84",
                                        "name": "Trezeguet (Egypt)"
                                },
                                {
                                        "code": "85",
                                        "name": "Mohamed Salah (Egypt)"
                                },
                                {
                                        "code": "86",
                                        "name": "Marwan Mohsen (Egypt)"
                                },
                                {
                                        "code": "87",
                                        "name": "Ramadan Sobhi (Egypt)"
                                },
                                {
                                        "code": "88",
                                        "name": "Amr Warda (Egypt)"
                                },
                                {
                                        "code": "89",
                                        "name": "Sam Morsy (Egypt)"
                                },
                                {
                                        "code": "90",
                                        "name": "Mahmoud Kahraba (Egypt)"
                                },
                                {
                                        "code": "91",
                                        "name": "Ayman Ashraf (Egypt)"
                                },
                                {
                                        "code": "92",
                                        "name": "Mohamed El-Shenawy (Egypt)"
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
                                        "code": "93",
                                        "name": "Uruguay Badge"
                                },
                                {
                                        "code": "94",
                                        "name": "Uruguay Team Photo"
                                },
                                {
                                        "code": "95",
                                        "name": "Fernando Muslera (Uruguay)"
                                },
                                {
                                        "code": "96",
                                        "name": "Guillermo Varela (Uruguay)"
                                },
                                {
                                        "code": "97",
                                        "name": "Jose Maria Gimenez (Uruguay)"
                                },
                                {
                                        "code": "98",
                                        "name": "Diego Godin (Uruguay)"
                                },
                                {
                                        "code": "99",
                                        "name": "Martin Caceres (Uruguay)"
                                },
                                {
                                        "code": "100",
                                        "name": "Maxi Pereira (Uruguay)"
                                },
                                {
                                        "code": "101",
                                        "name": "Nahitan Nandez (Uruguay)"
                                },
                                {
                                        "code": "102",
                                        "name": "Matias Vecino (Uruguay)"
                                },
                                {
                                        "code": "103",
                                        "name": "Rodrigo Bentancur (Uruguay)"
                                },
                                {
                                        "code": "104",
                                        "name": "Giorgian De Arrascaeta (Uruguay)"
                                },
                                {
                                        "code": "105",
                                        "name": "Lucas Torreira (Uruguay)"
                                },
                                {
                                        "code": "106",
                                        "name": "Luis Suarez (Uruguay)"
                                },
                                {
                                        "code": "107",
                                        "name": "Edinson Cavani (Uruguay)"
                                },
                                {
                                        "code": "108",
                                        "name": "Cristhian Stuani (Uruguay)"
                                },
                                {
                                        "code": "109",
                                        "name": "Maxi Gomez (Uruguay)"
                                },
                                {
                                        "code": "110",
                                        "name": "Carlos Sanchez (Uruguay)"
                                },
                                {
                                        "code": "111",
                                        "name": "Gaston Silva (Uruguay)"
                                },
                                {
                                        "code": "112",
                                        "name": "Martin Silva (Uruguay)"
                                }
                        ]
                }
        ],
        "Group B": [
                {
                        "code": "POR",
                        "name": "Portugal",
                        "flags": [
                                "pt"
                        ],
                        "stickers": [
                                {
                                        "code": "113",
                                        "name": "Portugal Badge"
                                },
                                {
                                        "code": "114",
                                        "name": "Portugal Team Photo"
                                },
                                {
                                        "code": "115",
                                        "name": "Rui Patricio (Portugal)"
                                },
                                {
                                        "code": "116",
                                        "name": "Cedric Soares (Portugal)"
                                },
                                {
                                        "code": "117",
                                        "name": "Pepe (Portugal)"
                                },
                                {
                                        "code": "118",
                                        "name": "Jose Fonte (Portugal)"
                                },
                                {
                                        "code": "119",
                                        "name": "Raphael Guerreiro (Portugal)"
                                },
                                {
                                        "code": "120",
                                        "name": "Bruno Alves (Portugal)"
                                },
                                {
                                        "code": "121",
                                        "name": "William Carvalho (Portugal)"
                                },
                                {
                                        "code": "122",
                                        "name": "Joao Moutinho (Portugal)"
                                },
                                {
                                        "code": "123",
                                        "name": "Bernardo Silva (Portugal)"
                                },
                                {
                                        "code": "124",
                                        "name": "Joao Mario (Portugal)"
                                },
                                {
                                        "code": "125",
                                        "name": "Goncalo Guedes (Portugal)"
                                },
                                {
                                        "code": "126",
                                        "name": "Cristiano Ronaldo (Portugal)"
                                },
                                {
                                        "code": "127",
                                        "name": "Andre Silva (Portugal)"
                                },
                                {
                                        "code": "128",
                                        "name": "Ricardo Quaresma (Portugal)"
                                },
                                {
                                        "code": "129",
                                        "name": "Gelson Martins (Portugal)"
                                },
                                {
                                        "code": "130",
                                        "name": "Adrien Silva (Portugal)"
                                },
                                {
                                        "code": "131",
                                        "name": "Ruben Dias (Portugal)"
                                },
                                {
                                        "code": "132",
                                        "name": "Anthony Lopes (Portugal)"
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
                                        "code": "133",
                                        "name": "Spain Badge"
                                },
                                {
                                        "code": "134",
                                        "name": "Spain Team Photo"
                                },
                                {
                                        "code": "135",
                                        "name": "David de Gea (Spain)"
                                },
                                {
                                        "code": "136",
                                        "name": "Dani Carvajal (Spain)"
                                },
                                {
                                        "code": "137",
                                        "name": "Gerard Pique (Spain)"
                                },
                                {
                                        "code": "138",
                                        "name": "Sergio Ramos (Spain)"
                                },
                                {
                                        "code": "139",
                                        "name": "Jordi Alba (Spain)"
                                },
                                {
                                        "code": "140",
                                        "name": "Nacho Fernandez (Spain)"
                                },
                                {
                                        "code": "141",
                                        "name": "Sergio Busquets (Spain)"
                                },
                                {
                                        "code": "142",
                                        "name": "Koke (Spain)"
                                },
                                {
                                        "code": "143",
                                        "name": "Andres Iniesta (Spain)"
                                },
                                {
                                        "code": "144",
                                        "name": "David Silva (Spain)"
                                },
                                {
                                        "code": "145",
                                        "name": "Isco (Spain)"
                                },
                                {
                                        "code": "146",
                                        "name": "Diego Costa (Spain)"
                                },
                                {
                                        "code": "147",
                                        "name": "Iago Aspas (Spain)"
                                },
                                {
                                        "code": "148",
                                        "name": "Rodrigo Moreno (Spain)"
                                },
                                {
                                        "code": "149",
                                        "name": "Marco Asensio (Spain)"
                                },
                                {
                                        "code": "150",
                                        "name": "Thiago Alcantara (Spain)"
                                },
                                {
                                        "code": "151",
                                        "name": "Cesar Azpilicueta (Spain)"
                                },
                                {
                                        "code": "152",
                                        "name": "Kepa Arrizabalaga (Spain)"
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
                                        "code": "153",
                                        "name": "Morocco Badge"
                                },
                                {
                                        "code": "154",
                                        "name": "Morocco Team Photo"
                                },
                                {
                                        "code": "155",
                                        "name": "Munir Mohamedi (Morocco)"
                                },
                                {
                                        "code": "156",
                                        "name": "Nabil Dirar (Morocco)"
                                },
                                {
                                        "code": "157",
                                        "name": "Medhi Benatia (Morocco)"
                                },
                                {
                                        "code": "158",
                                        "name": "Romain Saiss (Morocco)"
                                },
                                {
                                        "code": "159",
                                        "name": "Achraf Hakimi (Morocco)"
                                },
                                {
                                        "code": "160",
                                        "name": "Manuel da Costa (Morocco)"
                                },
                                {
                                        "code": "161",
                                        "name": "Karim El Ahmadi (Morocco)"
                                },
                                {
                                        "code": "162",
                                        "name": "M'barek Boussoufa (Morocco)"
                                },
                                {
                                        "code": "163",
                                        "name": "Younes Belhanda (Morocco)"
                                },
                                {
                                        "code": "164",
                                        "name": "Nordin Amrabat (Morocco)"
                                },
                                {
                                        "code": "165",
                                        "name": "Hakim Ziyech (Morocco)"
                                },
                                {
                                        "code": "166",
                                        "name": "Ayoub El Kaabi (Morocco)"
                                },
                                {
                                        "code": "167",
                                        "name": "Khalid Boutaib (Morocco)"
                                },
                                {
                                        "code": "168",
                                        "name": "Youssef En-Nesyri (Morocco)"
                                },
                                {
                                        "code": "169",
                                        "name": "Amine Harit (Morocco)"
                                },
                                {
                                        "code": "170",
                                        "name": "Sofyan Amrabat (Morocco)"
                                },
                                {
                                        "code": "171",
                                        "name": "Hamza Mendyl (Morocco)"
                                },
                                {
                                        "code": "172",
                                        "name": "Yassine Bounou (Morocco)"
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
                                        "code": "173",
                                        "name": "Iran Badge"
                                },
                                {
                                        "code": "174",
                                        "name": "Iran Team Photo"
                                },
                                {
                                        "code": "175",
                                        "name": "Alireza Beiranvand (Iran)"
                                },
                                {
                                        "code": "176",
                                        "name": "Ramin Rezaeian (Iran)"
                                },
                                {
                                        "code": "177",
                                        "name": "Morteza Pouraliganji (Iran)"
                                },
                                {
                                        "code": "178",
                                        "name": "Rouzbeh Cheshmi (Iran)"
                                },
                                {
                                        "code": "179",
                                        "name": "Ehsan Hajsafi (Iran)"
                                },
                                {
                                        "code": "180",
                                        "name": "Milad Mohammadi (Iran)"
                                },
                                {
                                        "code": "181",
                                        "name": "Saeid Ezatolahi (Iran)"
                                },
                                {
                                        "code": "182",
                                        "name": "Omid Ebrahimi (Iran)"
                                },
                                {
                                        "code": "183",
                                        "name": "Vahid Amiri (Iran)"
                                },
                                {
                                        "code": "184",
                                        "name": "Alireza Jahanbakhsh (Iran)"
                                },
                                {
                                        "code": "185",
                                        "name": "Karim Ansarifard (Iran)"
                                },
                                {
                                        "code": "186",
                                        "name": "Sardar Azmoun (Iran)"
                                },
                                {
                                        "code": "187",
                                        "name": "Mehdi Taremi (Iran)"
                                },
                                {
                                        "code": "188",
                                        "name": "Saman Ghoddos (Iran)"
                                },
                                {
                                        "code": "189",
                                        "name": "Ashkan Dejagah (Iran)"
                                },
                                {
                                        "code": "190",
                                        "name": "Pejman Montazeri (Iran)"
                                },
                                {
                                        "code": "191",
                                        "name": "Masoud Shojaei (Iran)"
                                },
                                {
                                        "code": "192",
                                        "name": "Amir Abedzadeh (Iran)"
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
                                        "code": "193",
                                        "name": "France Badge"
                                },
                                {
                                        "code": "194",
                                        "name": "France Team Photo"
                                },
                                {
                                        "code": "195",
                                        "name": "Hugo Lloris (France)"
                                },
                                {
                                        "code": "196",
                                        "name": "Benjamin Pavard (France)"
                                },
                                {
                                        "code": "197",
                                        "name": "Raphael Varane (France)"
                                },
                                {
                                        "code": "198",
                                        "name": "Samuel Umtiti (France)"
                                },
                                {
                                        "code": "199",
                                        "name": "Lucas Hernandez (France)"
                                },
                                {
                                        "code": "200",
                                        "name": "Djibril Sidibe (France)"
                                },
                                {
                                        "code": "201",
                                        "name": "N'Golo Kante (France)"
                                },
                                {
                                        "code": "202",
                                        "name": "Paul Pogba (France)"
                                },
                                {
                                        "code": "203",
                                        "name": "Blaise Matuidi (France)"
                                },
                                {
                                        "code": "204",
                                        "name": "Corentin Tolisso (France)"
                                },
                                {
                                        "code": "205",
                                        "name": "Antoine Griezmann (France)"
                                },
                                {
                                        "code": "206",
                                        "name": "Kylian Mbappe (France)"
                                },
                                {
                                        "code": "207",
                                        "name": "Olivier Giroud (France)"
                                },
                                {
                                        "code": "208",
                                        "name": "Ousmane Dembele (France)"
                                },
                                {
                                        "code": "209",
                                        "name": "Nabil Fekir (France)"
                                },
                                {
                                        "code": "210",
                                        "name": "Thomas Lemar (France)"
                                },
                                {
                                        "code": "211",
                                        "name": "Presnel Kimpembe (France)"
                                },
                                {
                                        "code": "212",
                                        "name": "Steve Mandanda (France)"
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
                                        "code": "213",
                                        "name": "Australia Badge"
                                },
                                {
                                        "code": "214",
                                        "name": "Australia Team Photo"
                                },
                                {
                                        "code": "215",
                                        "name": "Mathew Ryan (Australia)"
                                },
                                {
                                        "code": "216",
                                        "name": "Josh Risdon (Australia)"
                                },
                                {
                                        "code": "217",
                                        "name": "Trent Sainsbury (Australia)"
                                },
                                {
                                        "code": "218",
                                        "name": "Mark Milligan (Australia)"
                                },
                                {
                                        "code": "219",
                                        "name": "Aziz Behich (Australia)"
                                },
                                {
                                        "code": "220",
                                        "name": "Milos Degenek (Australia)"
                                },
                                {
                                        "code": "221",
                                        "name": "Mile Jedinak (Australia)"
                                },
                                {
                                        "code": "222",
                                        "name": "Aaron Mooy (Australia)"
                                },
                                {
                                        "code": "223",
                                        "name": "Tom Rogic (Australia)"
                                },
                                {
                                        "code": "224",
                                        "name": "Mathew Leckie (Australia)"
                                },
                                {
                                        "code": "225",
                                        "name": "Robbie Kruse (Australia)"
                                },
                                {
                                        "code": "226",
                                        "name": "Andrew Nabbout (Australia)"
                                },
                                {
                                        "code": "227",
                                        "name": "Tomi Juric (Australia)"
                                },
                                {
                                        "code": "228",
                                        "name": "Daniel Arzani (Australia)"
                                },
                                {
                                        "code": "229",
                                        "name": "Tim Cahill (Australia)"
                                },
                                {
                                        "code": "230",
                                        "name": "Jackson Irvine (Australia)"
                                },
                                {
                                        "code": "231",
                                        "name": "Massimo Luongo (Australia)"
                                },
                                {
                                        "code": "232",
                                        "name": "Danny Vukovic (Australia)"
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
                                        "code": "233",
                                        "name": "Peru Badge"
                                },
                                {
                                        "code": "234",
                                        "name": "Peru Team Photo"
                                },
                                {
                                        "code": "235",
                                        "name": "Pedro Gallese (Peru)"
                                },
                                {
                                        "code": "236",
                                        "name": "Luis Advincula (Peru)"
                                },
                                {
                                        "code": "237",
                                        "name": "Christian Ramos (Peru)"
                                },
                                {
                                        "code": "238",
                                        "name": "Alberto Rodriguez (Peru)"
                                },
                                {
                                        "code": "239",
                                        "name": "Miguel Trauco (Peru)"
                                },
                                {
                                        "code": "240",
                                        "name": "Aldo Corzo (Peru)"
                                },
                                {
                                        "code": "241",
                                        "name": "Renato Tapia (Peru)"
                                },
                                {
                                        "code": "242",
                                        "name": "Yoshimar Yotun (Peru)"
                                },
                                {
                                        "code": "243",
                                        "name": "Edison Flores (Peru)"
                                },
                                {
                                        "code": "244",
                                        "name": "Christian Cueva (Peru)"
                                },
                                {
                                        "code": "245",
                                        "name": "Andre Carrillo (Peru)"
                                },
                                {
                                        "code": "246",
                                        "name": "Paolo Guerrero (Peru)"
                                },
                                {
                                        "code": "247",
                                        "name": "Jefferson Farfan (Peru)"
                                },
                                {
                                        "code": "248",
                                        "name": "Raul Ruidiaz (Peru)"
                                },
                                {
                                        "code": "249",
                                        "name": "Pedro Aquino (Peru)"
                                },
                                {
                                        "code": "250",
                                        "name": "Paolo Hurtado (Peru)"
                                },
                                {
                                        "code": "251",
                                        "name": "Anderson Santamaria (Peru)"
                                },
                                {
                                        "code": "252",
                                        "name": "Carlos Caceda (Peru)"
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
                                        "code": "253",
                                        "name": "Denmark Badge"
                                },
                                {
                                        "code": "254",
                                        "name": "Denmark Team Photo"
                                },
                                {
                                        "code": "255",
                                        "name": "Kasper Schmeichel (Denmark)"
                                },
                                {
                                        "code": "256",
                                        "name": "Henrik Dalsgaard (Denmark)"
                                },
                                {
                                        "code": "257",
                                        "name": "Simon Kjaer (Denmark)"
                                },
                                {
                                        "code": "258",
                                        "name": "Andreas Christensen (Denmark)"
                                },
                                {
                                        "code": "259",
                                        "name": "Jens Stryger Larsen (Denmark)"
                                },
                                {
                                        "code": "260",
                                        "name": "Mathias Jorgensen (Denmark)"
                                },
                                {
                                        "code": "261",
                                        "name": "William Kvist (Denmark)"
                                },
                                {
                                        "code": "262",
                                        "name": "Thomas Delaney (Denmark)"
                                },
                                {
                                        "code": "263",
                                        "name": "Christian Eriksen (Denmark)"
                                },
                                {
                                        "code": "264",
                                        "name": "Yussuf Poulsen (Denmark)"
                                },
                                {
                                        "code": "265",
                                        "name": "Pione Sisto (Denmark)"
                                },
                                {
                                        "code": "266",
                                        "name": "Nicolai Jorgensen (Denmark)"
                                },
                                {
                                        "code": "267",
                                        "name": "Andreas Cornelius (Denmark)"
                                },
                                {
                                        "code": "268",
                                        "name": "Kasper Dolberg (Denmark)"
                                },
                                {
                                        "code": "269",
                                        "name": "Martin Braithwaite (Denmark)"
                                },
                                {
                                        "code": "270",
                                        "name": "Lasse Schone (Denmark)"
                                },
                                {
                                        "code": "271",
                                        "name": "Michael Krohn-Dehli (Denmark)"
                                },
                                {
                                        "code": "272",
                                        "name": "Jonas Lossl (Denmark)"
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
                                        "code": "273",
                                        "name": "Argentina Badge"
                                },
                                {
                                        "code": "274",
                                        "name": "Argentina Team Photo"
                                },
                                {
                                        "code": "275",
                                        "name": "Willy Caballero (Argentina)"
                                },
                                {
                                        "code": "276",
                                        "name": "Gabriel Mercado (Argentina)"
                                },
                                {
                                        "code": "277",
                                        "name": "Nicolas Otamendi (Argentina)"
                                },
                                {
                                        "code": "278",
                                        "name": "Marcos Rojo (Argentina)"
                                },
                                {
                                        "code": "279",
                                        "name": "Nicolas Tagliafico (Argentina)"
                                },
                                {
                                        "code": "280",
                                        "name": "Federico Fazio (Argentina)"
                                },
                                {
                                        "code": "281",
                                        "name": "Javier Mascherano (Argentina)"
                                },
                                {
                                        "code": "282",
                                        "name": "Lucas Biglia (Argentina)"
                                },
                                {
                                        "code": "283",
                                        "name": "Ever Banega (Argentina)"
                                },
                                {
                                        "code": "284",
                                        "name": "Angel Di Maria (Argentina)"
                                },
                                {
                                        "code": "285",
                                        "name": "Maximiliano Meza (Argentina)"
                                },
                                {
                                        "code": "286",
                                        "name": "Lionel Messi (Argentina)"
                                },
                                {
                                        "code": "287",
                                        "name": "Sergio Aguero (Argentina)"
                                },
                                {
                                        "code": "288",
                                        "name": "Gonzalo Higuain (Argentina)"
                                },
                                {
                                        "code": "289",
                                        "name": "Paulo Dybala (Argentina)"
                                },
                                {
                                        "code": "290",
                                        "name": "Cristian Pavon (Argentina)"
                                },
                                {
                                        "code": "291",
                                        "name": "Eduardo Salvio (Argentina)"
                                },
                                {
                                        "code": "292",
                                        "name": "Franco Armani (Argentina)"
                                }
                        ]
                },
                {
                        "code": "ISL",
                        "name": "Iceland",
                        "flags": [
                                "is"
                        ],
                        "stickers": [
                                {
                                        "code": "293",
                                        "name": "Iceland Badge"
                                },
                                {
                                        "code": "294",
                                        "name": "Iceland Team Photo"
                                },
                                {
                                        "code": "295",
                                        "name": "Hannes Halldorsson (Iceland)"
                                },
                                {
                                        "code": "296",
                                        "name": "Birkir Saevarsson (Iceland)"
                                },
                                {
                                        "code": "297",
                                        "name": "Kari Arnason (Iceland)"
                                },
                                {
                                        "code": "298",
                                        "name": "Ragnar Sigurdsson (Iceland)"
                                },
                                {
                                        "code": "299",
                                        "name": "Hordur Magnusson (Iceland)"
                                },
                                {
                                        "code": "300",
                                        "name": "Sverrir Ingason (Iceland)"
                                },
                                {
                                        "code": "301",
                                        "name": "Aron Gunnarsson (Iceland)"
                                },
                                {
                                        "code": "302",
                                        "name": "Gylfi Sigurdsson (Iceland)"
                                },
                                {
                                        "code": "303",
                                        "name": "Birkir Bjarnason (Iceland)"
                                },
                                {
                                        "code": "304",
                                        "name": "Johann Berg Gudmundsson (Iceland)"
                                },
                                {
                                        "code": "305",
                                        "name": "Emil Hallfredsson (Iceland)"
                                },
                                {
                                        "code": "306",
                                        "name": "Alfred Finnbogason (Iceland)"
                                },
                                {
                                        "code": "307",
                                        "name": "Bjorn Sigurdarson (Iceland)"
                                },
                                {
                                        "code": "308",
                                        "name": "Jon Dadi Bodvarsson (Iceland)"
                                },
                                {
                                        "code": "309",
                                        "name": "Rurik Gislason (Iceland)"
                                },
                                {
                                        "code": "310",
                                        "name": "Ari Skulason (Iceland)"
                                },
                                {
                                        "code": "311",
                                        "name": "Arnor Traustason (Iceland)"
                                },
                                {
                                        "code": "312",
                                        "name": "Runar Runarsson (Iceland)"
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
                                        "code": "313",
                                        "name": "Croatia Badge"
                                },
                                {
                                        "code": "314",
                                        "name": "Croatia Team Photo"
                                },
                                {
                                        "code": "315",
                                        "name": "Danijel Subasic (Croatia)"
                                },
                                {
                                        "code": "316",
                                        "name": "Sime Vrsaljko (Croatia)"
                                },
                                {
                                        "code": "317",
                                        "name": "Dejan Lovren (Croatia)"
                                },
                                {
                                        "code": "318",
                                        "name": "Domagoj Vida (Croatia)"
                                },
                                {
                                        "code": "319",
                                        "name": "Ivan Strinic (Croatia)"
                                },
                                {
                                        "code": "320",
                                        "name": "Vedran Corluka (Croatia)"
                                },
                                {
                                        "code": "321",
                                        "name": "Ivan Rakitic (Croatia)"
                                },
                                {
                                        "code": "322",
                                        "name": "Luka Modric (Croatia)"
                                },
                                {
                                        "code": "323",
                                        "name": "Marcelo Brozovic (Croatia)"
                                },
                                {
                                        "code": "324",
                                        "name": "Ante Rebic (Croatia)"
                                },
                                {
                                        "code": "325",
                                        "name": "Ivan Perisic (Croatia)"
                                },
                                {
                                        "code": "326",
                                        "name": "Mario Mandzukic (Croatia)"
                                },
                                {
                                        "code": "327",
                                        "name": "Andrej Kramaric (Croatia)"
                                },
                                {
                                        "code": "328",
                                        "name": "Mateo Kovacic (Croatia)"
                                },
                                {
                                        "code": "329",
                                        "name": "Milan Badelj (Croatia)"
                                },
                                {
                                        "code": "330",
                                        "name": "Marko Pjaca (Croatia)"
                                },
                                {
                                        "code": "331",
                                        "name": "Josip Pivaric (Croatia)"
                                },
                                {
                                        "code": "332",
                                        "name": "Lovre Kalinic (Croatia)"
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
                                        "code": "333",
                                        "name": "Nigeria Badge"
                                },
                                {
                                        "code": "334",
                                        "name": "Nigeria Team Photo"
                                },
                                {
                                        "code": "335",
                                        "name": "Francis Uzoho (Nigeria)"
                                },
                                {
                                        "code": "336",
                                        "name": "Abdullahi Shehu (Nigeria)"
                                },
                                {
                                        "code": "337",
                                        "name": "William Troost-Ekong (Nigeria)"
                                },
                                {
                                        "code": "338",
                                        "name": "Leon Balogun (Nigeria)"
                                },
                                {
                                        "code": "339",
                                        "name": "Bryan Idowu (Nigeria)"
                                },
                                {
                                        "code": "340",
                                        "name": "Kenneth Omeruo (Nigeria)"
                                },
                                {
                                        "code": "341",
                                        "name": "Wilfred Ndidi (Nigeria)"
                                },
                                {
                                        "code": "342",
                                        "name": "Oghenekaro Etebo (Nigeria)"
                                },
                                {
                                        "code": "343",
                                        "name": "John Obi Mikel (Nigeria)"
                                },
                                {
                                        "code": "344",
                                        "name": "Victor Moses (Nigeria)"
                                },
                                {
                                        "code": "345",
                                        "name": "Alex Iwobi (Nigeria)"
                                },
                                {
                                        "code": "346",
                                        "name": "Odion Ighalo (Nigeria)"
                                },
                                {
                                        "code": "347",
                                        "name": "Ahmed Musa (Nigeria)"
                                },
                                {
                                        "code": "348",
                                        "name": "Kelechi Iheanacho (Nigeria)"
                                },
                                {
                                        "code": "349",
                                        "name": "Tyronne Ebuehi (Nigeria)"
                                },
                                {
                                        "code": "350",
                                        "name": "Ogenyi Onazi (Nigeria)"
                                },
                                {
                                        "code": "351",
                                        "name": "Simy Nwankwo (Nigeria)"
                                },
                                {
                                        "code": "352",
                                        "name": "Ikechukwu Ezenwa (Nigeria)"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "353",
                                        "name": "Brazil Badge"
                                },
                                {
                                        "code": "354",
                                        "name": "Brazil Team Photo"
                                },
                                {
                                        "code": "355",
                                        "name": "Alisson Becker (Brazil)"
                                },
                                {
                                        "code": "356",
                                        "name": "Danilo (Brazil)"
                                },
                                {
                                        "code": "357",
                                        "name": "Thiago Silva (Brazil)"
                                },
                                {
                                        "code": "358",
                                        "name": "Miranda (Brazil)"
                                },
                                {
                                        "code": "359",
                                        "name": "Marcelo (Brazil)"
                                },
                                {
                                        "code": "360",
                                        "name": "Fagner (Brazil)"
                                },
                                {
                                        "code": "361",
                                        "name": "Casemiro (Brazil)"
                                },
                                {
                                        "code": "362",
                                        "name": "Paulinho (Brazil)"
                                },
                                {
                                        "code": "363",
                                        "name": "Philippe Coutinho (Brazil)"
                                },
                                {
                                        "code": "364",
                                        "name": "Willian (Brazil)"
                                },
                                {
                                        "code": "365",
                                        "name": "Neymar Jr (Brazil)"
                                },
                                {
                                        "code": "366",
                                        "name": "Gabriel Jesus (Brazil)"
                                },
                                {
                                        "code": "367",
                                        "name": "Roberto Firmino (Brazil)"
                                },
                                {
                                        "code": "368",
                                        "name": "Douglas Costa (Brazil)"
                                },
                                {
                                        "code": "369",
                                        "name": "Fernandinho (Brazil)"
                                },
                                {
                                        "code": "370",
                                        "name": "Renato Augusto (Brazil)"
                                },
                                {
                                        "code": "371",
                                        "name": "Marquinhos (Brazil)"
                                },
                                {
                                        "code": "372",
                                        "name": "Ederson (Brazil)"
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
                                        "code": "373",
                                        "name": "Switzerland Badge"
                                },
                                {
                                        "code": "374",
                                        "name": "Switzerland Team Photo"
                                },
                                {
                                        "code": "375",
                                        "name": "Yann Sommer (Switzerland)"
                                },
                                {
                                        "code": "376",
                                        "name": "Stephan Lichtsteiner (Switzerland)"
                                },
                                {
                                        "code": "377",
                                        "name": "Fabian Schär (Switzerland)"
                                },
                                {
                                        "code": "378",
                                        "name": "Manuel Akanji (Switzerland)"
                                },
                                {
                                        "code": "379",
                                        "name": "Ricardo Rodriguez (Switzerland)"
                                },
                                {
                                        "code": "380",
                                        "name": "Michael Lang (Switzerland)"
                                },
                                {
                                        "code": "381",
                                        "name": "Valon Behrami (Switzerland)"
                                },
                                {
                                        "code": "382",
                                        "name": "Granit Xhaka (Switzerland)"
                                },
                                {
                                        "code": "383",
                                        "name": "Blerim Dzemaili (Switzerland)"
                                },
                                {
                                        "code": "384",
                                        "name": "Xherdan Shaqiri (Switzerland)"
                                },
                                {
                                        "code": "385",
                                        "name": "Steven Zuber (Switzerland)"
                                },
                                {
                                        "code": "386",
                                        "name": "Haris Seferovic (Switzerland)"
                                },
                                {
                                        "code": "387",
                                        "name": "Mario Gavranovic (Switzerland)"
                                },
                                {
                                        "code": "388",
                                        "name": "Breel Embolo (Switzerland)"
                                },
                                {
                                        "code": "389",
                                        "name": "Denis Zakaria (Switzerland)"
                                },
                                {
                                        "code": "390",
                                        "name": "Remo Freuler (Switzerland)"
                                },
                                {
                                        "code": "391",
                                        "name": "Gelson Fernandes (Switzerland)"
                                },
                                {
                                        "code": "392",
                                        "name": "Roman Burki (Switzerland)"
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
                                        "code": "393",
                                        "name": "Costa Rica Badge"
                                },
                                {
                                        "code": "394",
                                        "name": "Costa Rica Team Photo"
                                },
                                {
                                        "code": "395",
                                        "name": "Keylor Navas (Costa Rica)"
                                },
                                {
                                        "code": "396",
                                        "name": "Cristian Gamboa (Costa Rica)"
                                },
                                {
                                        "code": "397",
                                        "name": "Johnny Acosta (Costa Rica)"
                                },
                                {
                                        "code": "398",
                                        "name": "Giancarlo Gonzalez (Costa Rica)"
                                },
                                {
                                        "code": "399",
                                        "name": "Oscar Duarte (Costa Rica)"
                                },
                                {
                                        "code": "400",
                                        "name": "Bryan Oviedo (Costa Rica)"
                                },
                                {
                                        "code": "401",
                                        "name": "David Guzman (Costa Rica)"
                                },
                                {
                                        "code": "402",
                                        "name": "Celso Borges (Costa Rica)"
                                },
                                {
                                        "code": "403",
                                        "name": "Bryan Ruiz (Costa Rica)"
                                },
                                {
                                        "code": "404",
                                        "name": "Christian Bolanos (Costa Rica)"
                                },
                                {
                                        "code": "405",
                                        "name": "Johan Venegas (Costa Rica)"
                                },
                                {
                                        "code": "406",
                                        "name": "Marco Urena (Costa Rica)"
                                },
                                {
                                        "code": "407",
                                        "name": "Joel Campbell (Costa Rica)"
                                },
                                {
                                        "code": "408",
                                        "name": "Yeltsin Tejeda (Costa Rica)"
                                },
                                {
                                        "code": "409",
                                        "name": "Daniel Colindres (Costa Rica)"
                                },
                                {
                                        "code": "410",
                                        "name": "Kendall Waston (Costa Rica)"
                                },
                                {
                                        "code": "411",
                                        "name": "Francisco Calvo (Costa Rica)"
                                },
                                {
                                        "code": "412",
                                        "name": "Patrick Pemberton (Costa Rica)"
                                }
                        ]
                },
                {
                        "code": "SRB",
                        "name": "Serbia",
                        "flags": [
                                "rs"
                        ],
                        "stickers": [
                                {
                                        "code": "413",
                                        "name": "Serbia Badge"
                                },
                                {
                                        "code": "414",
                                        "name": "Serbia Team Photo"
                                },
                                {
                                        "code": "415",
                                        "name": "Vladimir Stojkovic (Serbia)"
                                },
                                {
                                        "code": "416",
                                        "name": "Antonio Rukavina (Serbia)"
                                },
                                {
                                        "code": "417",
                                        "name": "Branislav Ivanovic (Serbia)"
                                },
                                {
                                        "code": "418",
                                        "name": "Nikola Milenkovic (Serbia)"
                                },
                                {
                                        "code": "419",
                                        "name": "Aleksandar Kolarov (Serbia)"
                                },
                                {
                                        "code": "420",
                                        "name": "Dusko Tosic (Serbia)"
                                },
                                {
                                        "code": "421",
                                        "name": "Nemanja Matic (Serbia)"
                                },
                                {
                                        "code": "422",
                                        "name": "Luka Milivojevic (Serbia)"
                                },
                                {
                                        "code": "423",
                                        "name": "Sergej Milinkovic-Savic (Serbia)"
                                },
                                {
                                        "code": "424",
                                        "name": "Dusan Tadic (Serbia)"
                                },
                                {
                                        "code": "425",
                                        "name": "Filip Kostic (Serbia)"
                                },
                                {
                                        "code": "426",
                                        "name": "Aleksandar Mitrovic (Serbia)"
                                },
                                {
                                        "code": "427",
                                        "name": "Adem Ljajic (Serbia)"
                                },
                                {
                                        "code": "428",
                                        "name": "Nemanja Radonjic (Serbia)"
                                },
                                {
                                        "code": "429",
                                        "name": "Luka Jovic (Serbia)"
                                },
                                {
                                        "code": "430",
                                        "name": "Andrija Zivkovic (Serbia)"
                                },
                                {
                                        "code": "431",
                                        "name": "Milos Veljkovic (Serbia)"
                                },
                                {
                                        "code": "432",
                                        "name": "Marko Dmitrovic (Serbia)"
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
                                        "code": "433",
                                        "name": "Germany Badge"
                                },
                                {
                                        "code": "434",
                                        "name": "Germany Team Photo"
                                },
                                {
                                        "code": "435",
                                        "name": "Manuel Neuer (Germany)"
                                },
                                {
                                        "code": "436",
                                        "name": "Joshua Kimmich (Germany)"
                                },
                                {
                                        "code": "437",
                                        "name": "Jerome Boateng (Germany)"
                                },
                                {
                                        "code": "438",
                                        "name": "Mats Hummels (Germany)"
                                },
                                {
                                        "code": "439",
                                        "name": "Jonas Hector (Germany)"
                                },
                                {
                                        "code": "440",
                                        "name": "Niklas Süle (Germany)"
                                },
                                {
                                        "code": "441",
                                        "name": "Sami Khedira (Germany)"
                                },
                                {
                                        "code": "442",
                                        "name": "Toni Kroos (Germany)"
                                },
                                {
                                        "code": "443",
                                        "name": "Mesut Özil (Germany)"
                                },
                                {
                                        "code": "444",
                                        "name": "Thomas Müller (Germany)"
                                },
                                {
                                        "code": "445",
                                        "name": "Marco Reus (Germany)"
                                },
                                {
                                        "code": "446",
                                        "name": "Timo Werner (Germany)"
                                },
                                {
                                        "code": "447",
                                        "name": "Mario Gomez (Germany)"
                                },
                                {
                                        "code": "448",
                                        "name": "Leon Goretzka (Germany)"
                                },
                                {
                                        "code": "449",
                                        "name": "Julian Draxler (Germany)"
                                },
                                {
                                        "code": "450",
                                        "name": "Ilkay Gündogan (Germany)"
                                },
                                {
                                        "code": "451",
                                        "name": "Julian Brandt (Germany)"
                                },
                                {
                                        "code": "452",
                                        "name": "Marc-André ter Stegen (Germany)"
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
                                        "code": "453",
                                        "name": "Mexico Badge"
                                },
                                {
                                        "code": "454",
                                        "name": "Mexico Team Photo"
                                },
                                {
                                        "code": "455",
                                        "name": "Guillermo Ochoa (Mexico)"
                                },
                                {
                                        "code": "456",
                                        "name": "Carlos Salcedo (Mexico)"
                                },
                                {
                                        "code": "457",
                                        "name": "Hugo Ayala (Mexico)"
                                },
                                {
                                        "code": "458",
                                        "name": "Hector Moreno (Mexico)"
                                },
                                {
                                        "code": "459",
                                        "name": "Jesus Gallardo (Mexico)"
                                },
                                {
                                        "code": "460",
                                        "name": "Miguel Layun (Mexico)"
                                },
                                {
                                        "code": "461",
                                        "name": "Hector Herrera (Mexico)"
                                },
                                {
                                        "code": "462",
                                        "name": "Andres Guardado (Mexico)"
                                },
                                {
                                        "code": "463",
                                        "name": "Carlos Vela (Mexico)"
                                },
                                {
                                        "code": "464",
                                        "name": "Hirving Lozano (Mexico)"
                                },
                                {
                                        "code": "465",
                                        "name": "Javier Hernandez (Mexico)"
                                },
                                {
                                        "code": "466",
                                        "name": "Raul Jimenez (Mexico)"
                                },
                                {
                                        "code": "467",
                                        "name": "Oribe Peralta (Mexico)"
                                },
                                {
                                        "code": "468",
                                        "name": "Jesus Manuel Corona (Mexico)"
                                },
                                {
                                        "code": "469",
                                        "name": "Giovani dos Santos (Mexico)"
                                },
                                {
                                        "code": "470",
                                        "name": "Marco Fabian (Mexico)"
                                },
                                {
                                        "code": "471",
                                        "name": "Edson Alvarez (Mexico)"
                                },
                                {
                                        "code": "472",
                                        "name": "Alfredo Talavera (Mexico)"
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
                                        "code": "473",
                                        "name": "Sweden Badge"
                                },
                                {
                                        "code": "474",
                                        "name": "Sweden Team Photo"
                                },
                                {
                                        "code": "475",
                                        "name": "Robin Olsen (Sweden)"
                                },
                                {
                                        "code": "476",
                                        "name": "Mikael Lustig (Sweden)"
                                },
                                {
                                        "code": "477",
                                        "name": "Victor Lindelof (Sweden)"
                                },
                                {
                                        "code": "478",
                                        "name": "Andreas Granqvist (Sweden)"
                                },
                                {
                                        "code": "479",
                                        "name": "Ludwig Augustinsson (Sweden)"
                                },
                                {
                                        "code": "480",
                                        "name": "Pontus Jansson (Sweden)"
                                },
                                {
                                        "code": "481",
                                        "name": "Sebastian Larsson (Sweden)"
                                },
                                {
                                        "code": "482",
                                        "name": "Albin Ekdal (Sweden)"
                                },
                                {
                                        "code": "483",
                                        "name": "Viktor Claesson (Sweden)"
                                },
                                {
                                        "code": "484",
                                        "name": "Emil Forsberg (Sweden)"
                                },
                                {
                                        "code": "485",
                                        "name": "Ola Toivonen (Sweden)"
                                },
                                {
                                        "code": "486",
                                        "name": "Marcus Berg (Sweden)"
                                },
                                {
                                        "code": "487",
                                        "name": "John Guidetti (Sweden)"
                                },
                                {
                                        "code": "488",
                                        "name": "Isaac Kiese Thelin (Sweden)"
                                },
                                {
                                        "code": "489",
                                        "name": "Gustav Svensson (Sweden)"
                                },
                                {
                                        "code": "490",
                                        "name": "Oscar Hiljemark (Sweden)"
                                },
                                {
                                        "code": "491",
                                        "name": "Emil Krafth (Sweden)"
                                },
                                {
                                        "code": "492",
                                        "name": "Karl-Johan Johnsson (Sweden)"
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
                                        "code": "493",
                                        "name": "South Korea Badge"
                                },
                                {
                                        "code": "494",
                                        "name": "South Korea Team Photo"
                                },
                                {
                                        "code": "495",
                                        "name": "Cho Hyun-woo (South Korea)"
                                },
                                {
                                        "code": "496",
                                        "name": "Lee Yong (South Korea)"
                                },
                                {
                                        "code": "497",
                                        "name": "Jang Hyun-soo (South Korea)"
                                },
                                {
                                        "code": "498",
                                        "name": "Kim Young-gwon (South Korea)"
                                },
                                {
                                        "code": "499",
                                        "name": "Hong Chul (South Korea)"
                                },
                                {
                                        "code": "500",
                                        "name": "Kim Min-woo (South Korea)"
                                },
                                {
                                        "code": "501",
                                        "name": "Jung Woo-young (South Korea)"
                                },
                                {
                                        "code": "502",
                                        "name": "Ki Sung-yueng (South Korea)"
                                },
                                {
                                        "code": "503",
                                        "name": "Lee Jae-sung (South Korea)"
                                },
                                {
                                        "code": "504",
                                        "name": "Hwang Hee-chan (South Korea)"
                                },
                                {
                                        "code": "505",
                                        "name": "Son Heung-min (South Korea)"
                                },
                                {
                                        "code": "506",
                                        "name": "Koo Ja-cheol (South Korea)"
                                },
                                {
                                        "code": "507",
                                        "name": "Moon Seon-min (South Korea)"
                                },
                                {
                                        "code": "508",
                                        "name": "Kim Shin-wook (South Korea)"
                                },
                                {
                                        "code": "509",
                                        "name": "Ju Se-jong (South Korea)"
                                },
                                {
                                        "code": "510",
                                        "name": "Lee Seung-woo (South Korea)"
                                },
                                {
                                        "code": "511",
                                        "name": "Go Yo-han (South Korea)"
                                },
                                {
                                        "code": "512",
                                        "name": "Kim Seung-gyu (South Korea)"
                                }
                        ]
                }
        ],
        "Group G": [
                {
                        "code": "BEL",
                        "name": "Belgium",
                        "flags": [
                                "be"
                        ],
                        "stickers": [
                                {
                                        "code": "513",
                                        "name": "Belgium Badge"
                                },
                                {
                                        "code": "514",
                                        "name": "Belgium Team Photo"
                                },
                                {
                                        "code": "515",
                                        "name": "Thibaut Courtois (Belgium)"
                                },
                                {
                                        "code": "516",
                                        "name": "Toby Alderweireld (Belgium)"
                                },
                                {
                                        "code": "517",
                                        "name": "Vincent Kompany (Belgium)"
                                },
                                {
                                        "code": "518",
                                        "name": "Jan Vertonghen (Belgium)"
                                },
                                {
                                        "code": "519",
                                        "name": "Thomas Meunier (Belgium)"
                                },
                                {
                                        "code": "520",
                                        "name": "Dedryck Boyata (Belgium)"
                                },
                                {
                                        "code": "521",
                                        "name": "Axel Witsel (Belgium)"
                                },
                                {
                                        "code": "522",
                                        "name": "Kevin De Bruyne (Belgium)"
                                },
                                {
                                        "code": "523",
                                        "name": "Yannick Carrasco (Belgium)"
                                },
                                {
                                        "code": "524",
                                        "name": "Eden Hazard (Belgium)"
                                },
                                {
                                        "code": "525",
                                        "name": "Dries Mertens (Belgium)"
                                },
                                {
                                        "code": "526",
                                        "name": "Romelu Lukaku (Belgium)"
                                },
                                {
                                        "code": "527",
                                        "name": "Michy Batshuayi (Belgium)"
                                },
                                {
                                        "code": "528",
                                        "name": "Adnan Januzaj (Belgium)"
                                },
                                {
                                        "code": "529",
                                        "name": "Nacer Chadli (Belgium)"
                                },
                                {
                                        "code": "530",
                                        "name": "Marouane Fellaini (Belgium)"
                                },
                                {
                                        "code": "531",
                                        "name": "Youri Tielemans (Belgium)"
                                },
                                {
                                        "code": "532",
                                        "name": "Simon Mignolet (Belgium)"
                                }
                        ]
                },
                {
                        "code": "PAN",
                        "name": "Panama",
                        "flags": [
                                "pa"
                        ],
                        "stickers": [
                                {
                                        "code": "533",
                                        "name": "Panama Badge"
                                },
                                {
                                        "code": "534",
                                        "name": "Panama Team Photo"
                                },
                                {
                                        "code": "535",
                                        "name": "Jaime Penedo (Panama)"
                                },
                                {
                                        "code": "536",
                                        "name": "Michael Amir Murillo (Panama)"
                                },
                                {
                                        "code": "537",
                                        "name": "Roman Torres (Panama)"
                                },
                                {
                                        "code": "538",
                                        "name": "Fidel Escobar (Panama)"
                                },
                                {
                                        "code": "539",
                                        "name": "Eric Davis (Panama)"
                                },
                                {
                                        "code": "540",
                                        "name": "Felipe Baloy (Panama)"
                                },
                                {
                                        "code": "541",
                                        "name": "Gabriel Gomez (Panama)"
                                },
                                {
                                        "code": "542",
                                        "name": "Anibal Godoy (Panama)"
                                },
                                {
                                        "code": "543",
                                        "name": "Armando Cooper (Panama)"
                                },
                                {
                                        "code": "544",
                                        "name": "Edgar Yoel Barcenas (Panama)"
                                },
                                {
                                        "code": "545",
                                        "name": "Blas Perez (Panama)"
                                },
                                {
                                        "code": "546",
                                        "name": "Luis Tejada (Panama)"
                                },
                                {
                                        "code": "547",
                                        "name": "Gabriel Torres (Panama)"
                                },
                                {
                                        "code": "548",
                                        "name": "Abdiel Arroyo (Panama)"
                                },
                                {
                                        "code": "549",
                                        "name": "Ismael Diaz (Panama)"
                                },
                                {
                                        "code": "550",
                                        "name": "Valentin Pimentel (Panama)"
                                },
                                {
                                        "code": "551",
                                        "name": "Adolfo Machado (Panama)"
                                },
                                {
                                        "code": "552",
                                        "name": "Jose Calderon (Panama)"
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
                                        "code": "553",
                                        "name": "Tunisia Badge"
                                },
                                {
                                        "code": "554",
                                        "name": "Tunisia Team Photo"
                                },
                                {
                                        "code": "555",
                                        "name": "Mouez Hassen (Tunisia)"
                                },
                                {
                                        "code": "556",
                                        "name": "Dylan Bronn (Tunisia)"
                                },
                                {
                                        "code": "557",
                                        "name": "Syam Ben Youssef (Tunisia)"
                                },
                                {
                                        "code": "558",
                                        "name": "Yassine Meriah (Tunisia)"
                                },
                                {
                                        "code": "559",
                                        "name": "Ali Maaloul (Tunisia)"
                                },
                                {
                                        "code": "560",
                                        "name": "Hamdi Nagguez (Tunisia)"
                                },
                                {
                                        "code": "561",
                                        "name": "Ellyes Skhiri (Tunisia)"
                                },
                                {
                                        "code": "562",
                                        "name": "Ferjani Sassi (Tunisia)"
                                },
                                {
                                        "code": "563",
                                        "name": "Anice Badri (Tunisia)"
                                },
                                {
                                        "code": "564",
                                        "name": "Wahbi Khazri (Tunisia)"
                                },
                                {
                                        "code": "565",
                                        "name": "Fakhreddine Ben Youssef (Tunisia)"
                                },
                                {
                                        "code": "566",
                                        "name": "Naim Sliti (Tunisia)"
                                },
                                {
                                        "code": "567",
                                        "name": "Saif-Eddine Khaoui (Tunisia)"
                                },
                                {
                                        "code": "568",
                                        "name": "Bassem Srarfi (Tunisia)"
                                },
                                {
                                        "code": "569",
                                        "name": "Ghailene Chaalali (Tunisia)"
                                },
                                {
                                        "code": "570",
                                        "name": "Oussama Haddadi (Tunisia)"
                                },
                                {
                                        "code": "571",
                                        "name": "Rami Bedoui (Tunisia)"
                                },
                                {
                                        "code": "572",
                                        "name": "Farouk Ben Mustapha (Tunisia)"
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
                                        "code": "573",
                                        "name": "England Badge"
                                },
                                {
                                        "code": "574",
                                        "name": "England Team Photo"
                                },
                                {
                                        "code": "575",
                                        "name": "Jordan Pickford (England)"
                                },
                                {
                                        "code": "576",
                                        "name": "Kieran Trippier (England)"
                                },
                                {
                                        "code": "577",
                                        "name": "Kyle Walker (England)"
                                },
                                {
                                        "code": "578",
                                        "name": "John Stones (England)"
                                },
                                {
                                        "code": "579",
                                        "name": "Harry Maguire (England)"
                                },
                                {
                                        "code": "580",
                                        "name": "Ashley Young (England)"
                                },
                                {
                                        "code": "581",
                                        "name": "Jordan Henderson (England)"
                                },
                                {
                                        "code": "582",
                                        "name": "Jesse Lingard (England)"
                                },
                                {
                                        "code": "583",
                                        "name": "Dele Alli (England)"
                                },
                                {
                                        "code": "584",
                                        "name": "Raheem Sterling (England)"
                                },
                                {
                                        "code": "585",
                                        "name": "Harry Kane (England)"
                                },
                                {
                                        "code": "586",
                                        "name": "Marcus Rashford (England)"
                                },
                                {
                                        "code": "587",
                                        "name": "Jamie Vardy (England)"
                                },
                                {
                                        "code": "588",
                                        "name": "Ruben Loftus-Cheek (England)"
                                },
                                {
                                        "code": "589",
                                        "name": "Danny Rose (England)"
                                },
                                {
                                        "code": "590",
                                        "name": "Eric Dier (England)"
                                },
                                {
                                        "code": "591",
                                        "name": "Trent Alexander-Arnold (England)"
                                },
                                {
                                        "code": "592",
                                        "name": "Jack Butland (England)"
                                }
                        ]
                }
        ],
        "Group H": [
                {
                        "code": "POL",
                        "name": "Poland",
                        "flags": [
                                "pl"
                        ],
                        "stickers": [
                                {
                                        "code": "593",
                                        "name": "Poland Badge"
                                },
                                {
                                        "code": "594",
                                        "name": "Poland Team Photo"
                                },
                                {
                                        "code": "595",
                                        "name": "Wojciech Szczesny (Poland)"
                                },
                                {
                                        "code": "596",
                                        "name": "Lukasz Piszczek (Poland)"
                                },
                                {
                                        "code": "597",
                                        "name": "Kamil Glik (Poland)"
                                },
                                {
                                        "code": "598",
                                        "name": "Michal Pazdan (Poland)"
                                },
                                {
                                        "code": "599",
                                        "name": "Maciej Rybus (Poland)"
                                },
                                {
                                        "code": "600",
                                        "name": "Jan Bednarek (Poland)"
                                },
                                {
                                        "code": "601",
                                        "name": "Grzegorz Krychowiak (Poland)"
                                },
                                {
                                        "code": "602",
                                        "name": "Piotr Zielinski (Poland)"
                                },
                                {
                                        "code": "603",
                                        "name": "Jakub Blaszczykowski (Poland)"
                                },
                                {
                                        "code": "604",
                                        "name": "Kamil Grosicki (Poland)"
                                },
                                {
                                        "code": "605",
                                        "name": "Arkadiusz Milik (Poland)"
                                },
                                {
                                        "code": "606",
                                        "name": "Robert Lewandowski (Poland)"
                                },
                                {
                                        "code": "607",
                                        "name": "Lukasz Teodorczyk (Poland)"
                                },
                                {
                                        "code": "608",
                                        "name": "Dawid Kownacki (Poland)"
                                },
                                {
                                        "code": "609",
                                        "name": "Jacek Goralski (Poland)"
                                },
                                {
                                        "code": "610",
                                        "name": "Bartosz Bereszynski (Poland)"
                                },
                                {
                                        "code": "611",
                                        "name": "Karol Linetty (Poland)"
                                },
                                {
                                        "code": "612",
                                        "name": "Lukasz Fabianski (Poland)"
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
                                        "code": "613",
                                        "name": "Senegal Badge"
                                },
                                {
                                        "code": "614",
                                        "name": "Senegal Team Photo"
                                },
                                {
                                        "code": "615",
                                        "name": "Khadim N'Diaye (Senegal)"
                                },
                                {
                                        "code": "616",
                                        "name": "Moussa Wague (Senegal)"
                                },
                                {
                                        "code": "617",
                                        "name": "Salif Sane (Senegal)"
                                },
                                {
                                        "code": "618",
                                        "name": "Kalidou Koulibaly (Senegal)"
                                },
                                {
                                        "code": "619",
                                        "name": "Youssouf Sabaly (Senegal)"
                                },
                                {
                                        "code": "620",
                                        "name": "Lamine Gassama (Senegal)"
                                },
                                {
                                        "code": "621",
                                        "name": "Idrissa Gueye (Senegal)"
                                },
                                {
                                        "code": "622",
                                        "name": "Alfred N'Diaye (Senegal)"
                                },
                                {
                                        "code": "623",
                                        "name": "Badou Ndiaye (Senegal)"
                                },
                                {
                                        "code": "624",
                                        "name": "Ismaila Sarr (Senegal)"
                                },
                                {
                                        "code": "625",
                                        "name": "Sadio Mane (Senegal)"
                                },
                                {
                                        "code": "626",
                                        "name": "M'Baye Niang (Senegal)"
                                },
                                {
                                        "code": "627",
                                        "name": "Diafra Sakho (Senegal)"
                                },
                                {
                                        "code": "628",
                                        "name": "Moussa Sow (Senegal)"
                                },
                                {
                                        "code": "629",
                                        "name": "Cheikhou Kouyate (Senegal)"
                                },
                                {
                                        "code": "630",
                                        "name": "Keita Balde (Senegal)"
                                },
                                {
                                        "code": "631",
                                        "name": "Cheikh N'Doye (Senegal)"
                                },
                                {
                                        "code": "632",
                                        "name": "Abdoulaye Diallo (Senegal)"
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
                                        "code": "633",
                                        "name": "Colombia Badge"
                                },
                                {
                                        "code": "634",
                                        "name": "Colombia Team Photo"
                                },
                                {
                                        "code": "635",
                                        "name": "David Ospina (Colombia)"
                                },
                                {
                                        "code": "636",
                                        "name": "Santiago Arias (Colombia)"
                                },
                                {
                                        "code": "637",
                                        "name": "Davinson Sanchez (Colombia)"
                                },
                                {
                                        "code": "638",
                                        "name": "Yerry Mina (Colombia)"
                                },
                                {
                                        "code": "639",
                                        "name": "Johan Mojica (Colombia)"
                                },
                                {
                                        "code": "640",
                                        "name": "Cristian Zapata (Colombia)"
                                },
                                {
                                        "code": "641",
                                        "name": "Carlos Sanchez (Colombia)"
                                },
                                {
                                        "code": "642",
                                        "name": "Mateus Uribe (Colombia)"
                                },
                                {
                                        "code": "643",
                                        "name": "Wilmar Barrios (Colombia)"
                                },
                                {
                                        "code": "644",
                                        "name": "Juan Cuadrado (Colombia)"
                                },
                                {
                                        "code": "645",
                                        "name": "James Rodriguez (Colombia)"
                                },
                                {
                                        "code": "646",
                                        "name": "Radamel Falcao (Colombia)"
                                },
                                {
                                        "code": "647",
                                        "name": "Luis Muriel (Colombia)"
                                },
                                {
                                        "code": "648",
                                        "name": "Carlos Bacca (Colombia)"
                                },
                                {
                                        "code": "649",
                                        "name": "Juan Fernando Quintero (Colombia)"
                                },
                                {
                                        "code": "650",
                                        "name": "Jefferson Lerma (Colombia)"
                                },
                                {
                                        "code": "651",
                                        "name": "Jose Izquierdo (Colombia)"
                                },
                                {
                                        "code": "652",
                                        "name": "Camilo Vargas (Colombia)"
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
                                        "code": "653",
                                        "name": "Japan Badge"
                                },
                                {
                                        "code": "654",
                                        "name": "Japan Team Photo"
                                },
                                {
                                        "code": "655",
                                        "name": "Eiji Kawashima (Japan)"
                                },
                                {
                                        "code": "656",
                                        "name": "Hiroki Sakai (Japan)"
                                },
                                {
                                        "code": "657",
                                        "name": "Maya Yoshida (Japan)"
                                },
                                {
                                        "code": "658",
                                        "name": "Gen Shoji (Japan)"
                                },
                                {
                                        "code": "659",
                                        "name": "Yuto Nagatomo (Japan)"
                                },
                                {
                                        "code": "660",
                                        "name": "Tomoaki Makino (Japan)"
                                },
                                {
                                        "code": "661",
                                        "name": "Makoto Hasebe (Japan)"
                                },
                                {
                                        "code": "662",
                                        "name": "Gaku Shibasaki (Japan)"
                                },
                                {
                                        "code": "663",
                                        "name": "Genki Haraguchi (Japan)"
                                },
                                {
                                        "code": "664",
                                        "name": "Shinji Kagawa (Japan)"
                                },
                                {
                                        "code": "665",
                                        "name": "Takashi Inui (Japan)"
                                },
                                {
                                        "code": "666",
                                        "name": "Yuya Osako (Japan)"
                                },
                                {
                                        "code": "667",
                                        "name": "Shinji Okazaki (Japan)"
                                },
                                {
                                        "code": "668",
                                        "name": "Keisuke Honda (Japan)"
                                },
                                {
                                        "code": "669",
                                        "name": "Yoshinori Muto (Japan)"
                                },
                                {
                                        "code": "670",
                                        "name": "Hotaru Yamaguchi (Japan)"
                                },
                                {
                                        "code": "671",
                                        "name": "Takashi Usami (Japan)"
                                },
                                {
                                        "code": "672",
                                        "name": "Masaaki Higashiguchi (Japan)"
                                }
                        ]
                }
        ],
        "Legends Section": [
                {
                        "code": "LEGENDS",
                        "name": "World Cup Legends & Heritage",
                        "stickers": [
                                {
                                        "code": "673",
                                        "name": "Pelé (Legend - Brazil)"
                                },
                                {
                                        "code": "674",
                                        "name": "Diego Armando Maradona (Legend - Argentina)"
                                },
                                {
                                        "code": "675",
                                        "name": "Zinedine Zidane (Legend - France)"
                                },
                                {
                                        "code": "676",
                                        "name": "Ronaldo Nazário (Legend - Brazil)"
                                },
                                {
                                        "code": "677",
                                        "name": "Franz Beckenbauer (Legend - Germany)"
                                },
                                {
                                        "code": "678",
                                        "name": "Johan Cruyff (Legend - Netherlands)"
                                },
                                {
                                        "code": "679",
                                        "name": "Miroslav Klose (Legend - Germany)"
                                },
                                {
                                        "code": "680",
                                        "name": "Paolo Maldini (Legend - Italy)"
                                },
                                {
                                        "code": "681",
                                        "name": "Lothar Matthäus (Legend - Germany)"
                                },
                                {
                                        "code": "682",
                                        "name": "Bobby Moore (Legend - England)"
                                }
                        ]
                }
        ]
}
};

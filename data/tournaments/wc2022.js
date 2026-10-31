// data/tournaments/wc2022.js
// Official Panini Qatar 2022 World Cup Collection

TOURNAMENTS_CONFIG.tournaments['wc2022'] = {
    id: 'wc2022',
    categoryId: 'fifa-world-cup',
    year: 2022,
    title: 'Qatar 2022',
    subtitle: 'Qatar • 32 Teams • 670 Stickers',
    dbKey: 'panini2022',
    isSequential: false,
    totalStickers: 670,
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
                        "code": "FWC",
                        "name": "Trophy, Mascot, 8 Stadiums & Museum",
                        "stickers": [
                                {
                                        "code": "00",
                                        "name": "Panini 00 Logo"
                                },
                                {
                                        "code": "FWC1",
                                        "name": "FIFA World Cup Trophy"
                                },
                                {
                                        "code": "FWC2",
                                        "name": "Official Qatar 2022 Emblem"
                                },
                                {
                                        "code": "FWC3",
                                        "name": "La'eeb (Official Mascot)"
                                },
                                {
                                        "code": "FWC4",
                                        "name": "Al Rihla (Official Match Ball)"
                                },
                                {
                                        "code": "FWC5",
                                        "name": "Lusail Stadium (Lusail)"
                                },
                                {
                                        "code": "FWC6",
                                        "name": "Al Bayt Stadium (Al Khor)"
                                },
                                {
                                        "code": "FWC7",
                                        "name": "Stadium 974 (Doha)"
                                },
                                {
                                        "code": "FWC8",
                                        "name": "Al Thumama Stadium (Doha)"
                                },
                                {
                                        "code": "FWC9",
                                        "name": "Khalifa International Stadium (Al Rayyan)"
                                },
                                {
                                        "code": "FWC10",
                                        "name": "Education City Stadium (Al Rayyan)"
                                },
                                {
                                        "code": "FWC11",
                                        "name": "Ahmad bin Ali Stadium (Al Rayyan)"
                                },
                                {
                                        "code": "FWC12",
                                        "name": "Al Janoub Stadium (Al Wakrah)"
                                },
                                {
                                        "code": "FWC13",
                                        "name": "FIFA Museum: Uruguay 1930"
                                },
                                {
                                        "code": "FWC14",
                                        "name": "FIFA Museum: Italy 1934"
                                },
                                {
                                        "code": "FWC15",
                                        "name": "FIFA Museum: Italy 1938"
                                },
                                {
                                        "code": "FWC16",
                                        "name": "FIFA Museum: Uruguay 1950"
                                },
                                {
                                        "code": "FWC17",
                                        "name": "FIFA Museum: West Germany 1954"
                                },
                                {
                                        "code": "FWC18",
                                        "name": "FIFA Museum: Brazil 1958"
                                },
                                {
                                        "code": "FWC19",
                                        "name": "FIFA Museum: Brazil 1962"
                                },
                                {
                                        "code": "FWC20",
                                        "name": "FIFA Museum: England 1966"
                                },
                                {
                                        "code": "FWC21",
                                        "name": "FIFA Museum: Brazil 1970"
                                },
                                {
                                        "code": "FWC22",
                                        "name": "FIFA Museum: West Germany 1974"
                                },
                                {
                                        "code": "FWC23",
                                        "name": "FIFA Museum: Argentina 1978"
                                },
                                {
                                        "code": "FWC24",
                                        "name": "FIFA Museum: Italy 1982"
                                },
                                {
                                        "code": "FWC25",
                                        "name": "FIFA Museum: Argentina 1986"
                                },
                                {
                                        "code": "FWC26",
                                        "name": "FIFA Museum: West Germany 1990"
                                },
                                {
                                        "code": "FWC27",
                                        "name": "FIFA Museum: Brazil 1994"
                                },
                                {
                                        "code": "FWC28",
                                        "name": "FIFA Museum: France 1998 & Brazil 2002"
                                },
                                {
                                        "code": "FWC29",
                                        "name": "FIFA Museum: Italy 2006, Spain 2010, Germany 2014 & France 2018"
                                }
                        ]
                }
        ],
        "Group A": [
                {
                        "code": "QAT",
                        "name": "Qatar",
                        "flags": [
                                "qa"
                        ],
                        "stickers": [
                                {
                                        "code": "QAT1",
                                        "name": "Qatar Federation Shield"
                                },
                                {
                                        "code": "QAT2",
                                        "name": "Qatar Team Photo"
                                },
                                {
                                        "code": "QAT3",
                                        "name": "Saad Al-Sheeb (Qatar)"
                                },
                                {
                                        "code": "QAT4",
                                        "name": "Pedro Miguel (Qatar)"
                                },
                                {
                                        "code": "QAT5",
                                        "name": "Bassam Al-Rawi (Qatar)"
                                },
                                {
                                        "code": "QAT6",
                                        "name": "Tarek Salman (Qatar)"
                                },
                                {
                                        "code": "QAT7",
                                        "name": "Abdelkarim Hassan (Qatar)"
                                },
                                {
                                        "code": "QAT8",
                                        "name": "Homam Ahmed (Qatar)"
                                },
                                {
                                        "code": "QAT9",
                                        "name": "Boualem Khoukhi (Qatar)"
                                },
                                {
                                        "code": "QAT10",
                                        "name": "Karim Boudiaf (Qatar)"
                                },
                                {
                                        "code": "QAT11",
                                        "name": "Abdulaziz Hatem (Qatar)"
                                },
                                {
                                        "code": "QAT12",
                                        "name": "Assim Madibo (Qatar)"
                                },
                                {
                                        "code": "QAT13",
                                        "name": "Ali Assadalla (Qatar)"
                                },
                                {
                                        "code": "QAT14",
                                        "name": "Hassan Al-Haydos (Qatar)"
                                },
                                {
                                        "code": "QAT15",
                                        "name": "Akram Afif (Qatar)"
                                },
                                {
                                        "code": "QAT16",
                                        "name": "Almoez Ali (Qatar)"
                                },
                                {
                                        "code": "QAT17",
                                        "name": "Mohammed Muntari (Qatar)"
                                },
                                {
                                        "code": "QAT18",
                                        "name": "Ismaeel Mohammad (Qatar)"
                                },
                                {
                                        "code": "QAT19",
                                        "name": "Meshaal Barsham (Qatar)"
                                },
                                {
                                        "code": "QAT20",
                                        "name": "Musab Kheder (Qatar)"
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
                                        "code": "ECU1",
                                        "name": "Ecuador Federation Shield"
                                },
                                {
                                        "code": "ECU2",
                                        "name": "Ecuador Team Photo"
                                },
                                {
                                        "code": "ECU3",
                                        "name": "Hernan Galindez (Ecuador)"
                                },
                                {
                                        "code": "ECU4",
                                        "name": "Angelo Preciado (Ecuador)"
                                },
                                {
                                        "code": "ECU5",
                                        "name": "Felix Torres (Ecuador)"
                                },
                                {
                                        "code": "ECU6",
                                        "name": "Piero Hincapie (Ecuador)"
                                },
                                {
                                        "code": "ECU7",
                                        "name": "Pervis Estupinan (Ecuador)"
                                },
                                {
                                        "code": "ECU8",
                                        "name": "Robert Arboleda (Ecuador)"
                                },
                                {
                                        "code": "ECU9",
                                        "name": "Carlos Gruezo (Ecuador)"
                                },
                                {
                                        "code": "ECU10",
                                        "name": "Jhegson Mendez (Ecuador)"
                                },
                                {
                                        "code": "ECU11",
                                        "name": "Moises Caicedo (Ecuador)"
                                },
                                {
                                        "code": "ECU12",
                                        "name": "Gonzalo Plata (Ecuador)"
                                },
                                {
                                        "code": "ECU13",
                                        "name": "Romario Ibarra (Ecuador)"
                                },
                                {
                                        "code": "ECU14",
                                        "name": "Enner Valencia (Ecuador)"
                                },
                                {
                                        "code": "ECU15",
                                        "name": "Michael Estrada (Ecuador)"
                                },
                                {
                                        "code": "ECU16",
                                        "name": "Angel Mena (Ecuador)"
                                },
                                {
                                        "code": "ECU17",
                                        "name": "Jeremy Sarmiento (Ecuador)"
                                },
                                {
                                        "code": "ECU18",
                                        "name": "Jose Cifuentes (Ecuador)"
                                },
                                {
                                        "code": "ECU19",
                                        "name": "Alexander Dominguez (Ecuador)"
                                },
                                {
                                        "code": "ECU20",
                                        "name": "Xavier Arreaga (Ecuador)"
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
                                        "code": "SEN1",
                                        "name": "Senegal Federation Shield"
                                },
                                {
                                        "code": "SEN2",
                                        "name": "Senegal Team Photo"
                                },
                                {
                                        "code": "SEN3",
                                        "name": "Edouard Mendy (Senegal)"
                                },
                                {
                                        "code": "SEN4",
                                        "name": "Youssouf Sabaly (Senegal)"
                                },
                                {
                                        "code": "SEN5",
                                        "name": "Kalidou Koulibaly (Senegal)"
                                },
                                {
                                        "code": "SEN6",
                                        "name": "Abdou Diallo (Senegal)"
                                },
                                {
                                        "code": "SEN7",
                                        "name": "Ismail Jakobs (Senegal)"
                                },
                                {
                                        "code": "SEN8",
                                        "name": "Pape Abou Cisse (Senegal)"
                                },
                                {
                                        "code": "SEN9",
                                        "name": "Idrissa Gueye (Senegal)"
                                },
                                {
                                        "code": "SEN10",
                                        "name": "Nampalys Mendy (Senegal)"
                                },
                                {
                                        "code": "SEN11",
                                        "name": "Cheikhou Kouyate (Senegal)"
                                },
                                {
                                        "code": "SEN12",
                                        "name": "Krepin Diatta (Senegal)"
                                },
                                {
                                        "code": "SEN13",
                                        "name": "Ismaila Sarr (Senegal)"
                                },
                                {
                                        "code": "SEN14",
                                        "name": "Boulaye Dia (Senegal)"
                                },
                                {
                                        "code": "SEN15",
                                        "name": "Iliman Ndiaye (Senegal)"
                                },
                                {
                                        "code": "SEN16",
                                        "name": "Famara Diedhiou (Senegal)"
                                },
                                {
                                        "code": "SEN17",
                                        "name": "Bamba Dieng (Senegal)"
                                },
                                {
                                        "code": "SEN18",
                                        "name": "Pape Gueye (Senegal)"
                                },
                                {
                                        "code": "SEN19",
                                        "name": "Alfred Gomis (Senegal)"
                                },
                                {
                                        "code": "SEN20",
                                        "name": "Formose Mendy (Senegal)"
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
                                        "code": "NED1",
                                        "name": "Netherlands Federation Shield"
                                },
                                {
                                        "code": "NED2",
                                        "name": "Netherlands Team Photo"
                                },
                                {
                                        "code": "NED3",
                                        "name": "Andries Noppert (Netherlands)"
                                },
                                {
                                        "code": "NED4",
                                        "name": "Denzel Dumfries (Netherlands)"
                                },
                                {
                                        "code": "NED5",
                                        "name": "Jurrien Timber (Netherlands)"
                                },
                                {
                                        "code": "NED6",
                                        "name": "Virgil van Dijk (Netherlands)"
                                },
                                {
                                        "code": "NED7",
                                        "name": "Nathan Ake (Netherlands)"
                                },
                                {
                                        "code": "NED8",
                                        "name": "Daley Blind (Netherlands)"
                                },
                                {
                                        "code": "NED9",
                                        "name": "Frenkie de Jong (Netherlands)"
                                },
                                {
                                        "code": "NED10",
                                        "name": "Marten de Roon (Netherlands)"
                                },
                                {
                                        "code": "NED11",
                                        "name": "Teun Koopmeiners (Netherlands)"
                                },
                                {
                                        "code": "NED12",
                                        "name": "Davy Klaassen (Netherlands)"
                                },
                                {
                                        "code": "NED13",
                                        "name": "Cody Gakpo (Netherlands)"
                                },
                                {
                                        "code": "NED14",
                                        "name": "Memphis Depay (Netherlands)"
                                },
                                {
                                        "code": "NED15",
                                        "name": "Steven Bergwijn (Netherlands)"
                                },
                                {
                                        "code": "NED16",
                                        "name": "Vincent Janssen (Netherlands)"
                                },
                                {
                                        "code": "NED17",
                                        "name": "Wout Weghorst (Netherlands)"
                                },
                                {
                                        "code": "NED18",
                                        "name": "Xavi Simons (Netherlands)"
                                },
                                {
                                        "code": "NED19",
                                        "name": "Justin Bijlow (Netherlands)"
                                },
                                {
                                        "code": "NED20",
                                        "name": "Matthijs de Ligt (Netherlands)"
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
                                        "code": "ENG1",
                                        "name": "England Federation Shield"
                                },
                                {
                                        "code": "ENG2",
                                        "name": "England Team Photo"
                                },
                                {
                                        "code": "ENG3",
                                        "name": "Jordan Pickford (England)"
                                },
                                {
                                        "code": "ENG4",
                                        "name": "Kyle Walker (England)"
                                },
                                {
                                        "code": "ENG5",
                                        "name": "John Stones (England)"
                                },
                                {
                                        "code": "ENG6",
                                        "name": "Harry Maguire (England)"
                                },
                                {
                                        "code": "ENG7",
                                        "name": "Luke Shaw (England)"
                                },
                                {
                                        "code": "ENG8",
                                        "name": "Kieran Trippier (England)"
                                },
                                {
                                        "code": "ENG9",
                                        "name": "Declan Rice (England)"
                                },
                                {
                                        "code": "ENG10",
                                        "name": "Jude Bellingham (England)"
                                },
                                {
                                        "code": "ENG11",
                                        "name": "Mason Mount (England)"
                                },
                                {
                                        "code": "ENG12",
                                        "name": "Bukayo Saka (England)"
                                },
                                {
                                        "code": "ENG13",
                                        "name": "Raheem Sterling (England)"
                                },
                                {
                                        "code": "ENG14",
                                        "name": "Harry Kane (England)"
                                },
                                {
                                        "code": "ENG15",
                                        "name": "Marcus Rashford (England)"
                                },
                                {
                                        "code": "ENG16",
                                        "name": "Phil Foden (England)"
                                },
                                {
                                        "code": "ENG17",
                                        "name": "Jack Grealish (England)"
                                },
                                {
                                        "code": "ENG18",
                                        "name": "Jordan Henderson (England)"
                                },
                                {
                                        "code": "ENG19",
                                        "name": "Nick Pope (England)"
                                },
                                {
                                        "code": "ENG20",
                                        "name": "Eric Dier (England)"
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
                                        "code": "IRN1",
                                        "name": "Iran Federation Shield"
                                },
                                {
                                        "code": "IRN2",
                                        "name": "Iran Team Photo"
                                },
                                {
                                        "code": "IRN3",
                                        "name": "Alireza Beiranvand (Iran)"
                                },
                                {
                                        "code": "IRN4",
                                        "name": "Sadegh Moharrami (Iran)"
                                },
                                {
                                        "code": "IRN5",
                                        "name": "Morteza Pouraliganji (Iran)"
                                },
                                {
                                        "code": "IRN6",
                                        "name": "Majid Hosseini (Iran)"
                                },
                                {
                                        "code": "IRN7",
                                        "name": "Milad Mohammadi (Iran)"
                                },
                                {
                                        "code": "IRN8",
                                        "name": "Ramin Rezaeian (Iran)"
                                },
                                {
                                        "code": "IRN9",
                                        "name": "Saeid Ezatolahi (Iran)"
                                },
                                {
                                        "code": "IRN10",
                                        "name": "Ahmad Nourollahi (Iran)"
                                },
                                {
                                        "code": "IRN11",
                                        "name": "Ehsan Hajsafi (Iran)"
                                },
                                {
                                        "code": "IRN12",
                                        "name": "Ali Gholizadeh (Iran)"
                                },
                                {
                                        "code": "IRN13",
                                        "name": "Alireza Jahanbakhsh (Iran)"
                                },
                                {
                                        "code": "IRN14",
                                        "name": "Mehdi Taremi (Iran)"
                                },
                                {
                                        "code": "IRN15",
                                        "name": "Sardar Azmoun (Iran)"
                                },
                                {
                                        "code": "IRN16",
                                        "name": "Karim Ansarifard (Iran)"
                                },
                                {
                                        "code": "IRN17",
                                        "name": "Saman Ghoddos (Iran)"
                                },
                                {
                                        "code": "IRN18",
                                        "name": "Vahid Amiri (Iran)"
                                },
                                {
                                        "code": "IRN19",
                                        "name": "Hossein Hosseini (Iran)"
                                },
                                {
                                        "code": "IRN20",
                                        "name": "Shojae Khalilzadeh (Iran)"
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
                                        "code": "USA1",
                                        "name": "United States Federation Shield"
                                },
                                {
                                        "code": "USA2",
                                        "name": "United States Team Photo"
                                },
                                {
                                        "code": "USA3",
                                        "name": "Matt Turner (United States)"
                                },
                                {
                                        "code": "USA4",
                                        "name": "Sergino Dest (United States)"
                                },
                                {
                                        "code": "USA5",
                                        "name": "Walker Zimmerman (United States)"
                                },
                                {
                                        "code": "USA6",
                                        "name": "Tim Ream (United States)"
                                },
                                {
                                        "code": "USA7",
                                        "name": "Antonee Robinson (United States)"
                                },
                                {
                                        "code": "USA8",
                                        "name": "Cameron Carter-Vickers (United States)"
                                },
                                {
                                        "code": "USA9",
                                        "name": "Tyler Adams (United States)"
                                },
                                {
                                        "code": "USA10",
                                        "name": "Yunus Musah (United States)"
                                },
                                {
                                        "code": "USA11",
                                        "name": "Weston McKennie (United States)"
                                },
                                {
                                        "code": "USA12",
                                        "name": "Timothy Weah (United States)"
                                },
                                {
                                        "code": "USA13",
                                        "name": "Christian Pulisic (United States)"
                                },
                                {
                                        "code": "USA14",
                                        "name": "Josh Sargent (United States)"
                                },
                                {
                                        "code": "USA15",
                                        "name": "Haji Wright (United States)"
                                },
                                {
                                        "code": "USA16",
                                        "name": "Jesus Ferreira (United States)"
                                },
                                {
                                        "code": "USA17",
                                        "name": "Brenden Aaronson (United States)"
                                },
                                {
                                        "code": "USA18",
                                        "name": "Giovanni Reyna (United States)"
                                },
                                {
                                        "code": "USA19",
                                        "name": "Ethan Horvath (United States)"
                                },
                                {
                                        "code": "USA20",
                                        "name": "Kellyn Acosta (United States)"
                                }
                        ]
                },
                {
                        "code": "WAL",
                        "name": "Wales",
                        "flags": [
                                "gb-wls"
                        ],
                        "stickers": [
                                {
                                        "code": "WAL1",
                                        "name": "Wales Federation Shield"
                                },
                                {
                                        "code": "WAL2",
                                        "name": "Wales Team Photo"
                                },
                                {
                                        "code": "WAL3",
                                        "name": "Wayne Hennessey (Wales)"
                                },
                                {
                                        "code": "WAL4",
                                        "name": "Connor Roberts (Wales)"
                                },
                                {
                                        "code": "WAL5",
                                        "name": "Chris Mepham (Wales)"
                                },
                                {
                                        "code": "WAL6",
                                        "name": "Joe Rodon (Wales)"
                                },
                                {
                                        "code": "WAL7",
                                        "name": "Ben Davies (Wales)"
                                },
                                {
                                        "code": "WAL8",
                                        "name": "Neco Williams (Wales)"
                                },
                                {
                                        "code": "WAL9",
                                        "name": "Ethan Ampadu (Wales)"
                                },
                                {
                                        "code": "WAL10",
                                        "name": "Aaron Ramsey (Wales)"
                                },
                                {
                                        "code": "WAL11",
                                        "name": "Joe Allen (Wales)"
                                },
                                {
                                        "code": "WAL12",
                                        "name": "Harry Wilson (Wales)"
                                },
                                {
                                        "code": "WAL13",
                                        "name": "Gareth Bale (Wales)"
                                },
                                {
                                        "code": "WAL14",
                                        "name": "Kieffer Moore (Wales)"
                                },
                                {
                                        "code": "WAL15",
                                        "name": "Daniel James (Wales)"
                                },
                                {
                                        "code": "WAL16",
                                        "name": "Brennan Johnson (Wales)"
                                },
                                {
                                        "code": "WAL17",
                                        "name": "Joe Morrell (Wales)"
                                },
                                {
                                        "code": "WAL18",
                                        "name": "Chris Gunter (Wales)"
                                },
                                {
                                        "code": "WAL19",
                                        "name": "Danny Ward (Wales)"
                                },
                                {
                                        "code": "WAL20",
                                        "name": "Sorba Thomas (Wales)"
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
                                        "code": "ARG1",
                                        "name": "Argentina Federation Shield"
                                },
                                {
                                        "code": "ARG2",
                                        "name": "Argentina Team Photo"
                                },
                                {
                                        "code": "ARG3",
                                        "name": "Emiliano Martinez (Argentina)"
                                },
                                {
                                        "code": "ARG4",
                                        "name": "Nahuel Molina (Argentina)"
                                },
                                {
                                        "code": "ARG5",
                                        "name": "Cristian Romero (Argentina)"
                                },
                                {
                                        "code": "ARG6",
                                        "name": "Nicolas Otamendi (Argentina)"
                                },
                                {
                                        "code": "ARG7",
                                        "name": "Marcos Acuna (Argentina)"
                                },
                                {
                                        "code": "ARG8",
                                        "name": "Nicolas Tagliafico (Argentina)"
                                },
                                {
                                        "code": "ARG9",
                                        "name": "Rodrigo De Paul (Argentina)"
                                },
                                {
                                        "code": "ARG10",
                                        "name": "Enzo Fernandez (Argentina)"
                                },
                                {
                                        "code": "ARG11",
                                        "name": "Alexis Mac Allister (Argentina)"
                                },
                                {
                                        "code": "ARG12",
                                        "name": "Angel Di Maria (Argentina)"
                                },
                                {
                                        "code": "ARG13",
                                        "name": "Lionel Messi (Argentina)"
                                },
                                {
                                        "code": "ARG14",
                                        "name": "Julian Alvarez (Argentina)"
                                },
                                {
                                        "code": "ARG15",
                                        "name": "Lautaro Martinez (Argentina)"
                                },
                                {
                                        "code": "ARG16",
                                        "name": "Leandro Paredes (Argentina)"
                                },
                                {
                                        "code": "ARG17",
                                        "name": "Papu Gomez (Argentina)"
                                },
                                {
                                        "code": "ARG18",
                                        "name": "Guido Rodriguez (Argentina)"
                                },
                                {
                                        "code": "ARG19",
                                        "name": "Geronimo Rulli (Argentina)"
                                },
                                {
                                        "code": "ARG20",
                                        "name": "Lisandro Martinez (Argentina)"
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
                                        "code": "KSA1",
                                        "name": "Saudi Arabia Federation Shield"
                                },
                                {
                                        "code": "KSA2",
                                        "name": "Saudi Arabia Team Photo"
                                },
                                {
                                        "code": "KSA3",
                                        "name": "Mohammed Al-Owais (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA4",
                                        "name": "Saud Abdulhamid (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA5",
                                        "name": "Hassan Al-Tambakti (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA6",
                                        "name": "Ali Al-Bulaihi (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA7",
                                        "name": "Yasser Al-Shahrani (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA8",
                                        "name": "Sultan Al-Ghannam (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA9",
                                        "name": "Abdulelah Al-Malki (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA10",
                                        "name": "Mohamed Kanno (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA11",
                                        "name": "Salman Al-Faraj (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA12",
                                        "name": "Firas Al-Buraikan (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA13",
                                        "name": "Salem Al-Dawsari (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA14",
                                        "name": "Saleh Al-Shehri (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA15",
                                        "name": "Sami Al-Najei (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA16",
                                        "name": "Hawari Al-Dawsari (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA17",
                                        "name": "Abdullah Madu (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA18",
                                        "name": "Nasser Al-Dawsari (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA19",
                                        "name": "Mohammed Al-Rubaie (Saudi Arabia)"
                                },
                                {
                                        "code": "KSA20",
                                        "name": "Haitham Asiri (Saudi Arabia)"
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
                                        "code": "MEX1",
                                        "name": "Mexico Federation Shield"
                                },
                                {
                                        "code": "MEX2",
                                        "name": "Mexico Team Photo"
                                },
                                {
                                        "code": "MEX3",
                                        "name": "Guillermo Ochoa (Mexico)"
                                },
                                {
                                        "code": "MEX4",
                                        "name": "Jorge Sanchez (Mexico)"
                                },
                                {
                                        "code": "MEX5",
                                        "name": "Cesar Montes (Mexico)"
                                },
                                {
                                        "code": "MEX6",
                                        "name": "Hector Moreno (Mexico)"
                                },
                                {
                                        "code": "MEX7",
                                        "name": "Jesus Gallardo (Mexico)"
                                },
                                {
                                        "code": "MEX8",
                                        "name": "Nestor Araujo (Mexico)"
                                },
                                {
                                        "code": "MEX9",
                                        "name": "Edson Alvarez (Mexico)"
                                },
                                {
                                        "code": "MEX10",
                                        "name": "Hector Herrera (Mexico)"
                                },
                                {
                                        "code": "MEX11",
                                        "name": "Luis Chavez (Mexico)"
                                },
                                {
                                        "code": "MEX12",
                                        "name": "Hirving Lozano (Mexico)"
                                },
                                {
                                        "code": "MEX13",
                                        "name": "Alexis Vega (Mexico)"
                                },
                                {
                                        "code": "MEX14",
                                        "name": "Henry Martin (Mexico)"
                                },
                                {
                                        "code": "MEX15",
                                        "name": "Raul Jimenez (Mexico)"
                                },
                                {
                                        "code": "MEX16",
                                        "name": "Rogelio Funes Mori (Mexico)"
                                },
                                {
                                        "code": "MEX17",
                                        "name": "Orbelin Pineda (Mexico)"
                                },
                                {
                                        "code": "MEX18",
                                        "name": "Carlos Rodriguez (Mexico)"
                                },
                                {
                                        "code": "MEX19",
                                        "name": "Alfredo Talavera (Mexico)"
                                },
                                {
                                        "code": "MEX20",
                                        "name": "Kevin Alvarez (Mexico)"
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
                                        "code": "POL1",
                                        "name": "Poland Federation Shield"
                                },
                                {
                                        "code": "POL2",
                                        "name": "Poland Team Photo"
                                },
                                {
                                        "code": "POL3",
                                        "name": "Wojciech Szczesny (Poland)"
                                },
                                {
                                        "code": "POL4",
                                        "name": "Matty Cash (Poland)"
                                },
                                {
                                        "code": "POL5",
                                        "name": "Kamil Glik (Poland)"
                                },
                                {
                                        "code": "POL6",
                                        "name": "Jakub Kiwior (Poland)"
                                },
                                {
                                        "code": "POL7",
                                        "name": "Bartosz Bereszynski (Poland)"
                                },
                                {
                                        "code": "POL8",
                                        "name": "Jan Bednarek (Poland)"
                                },
                                {
                                        "code": "POL9",
                                        "name": "Grzegorz Krychowiak (Poland)"
                                },
                                {
                                        "code": "POL10",
                                        "name": "Krystian Bielik (Poland)"
                                },
                                {
                                        "code": "POL11",
                                        "name": "Sebastian Szymanski (Poland)"
                                },
                                {
                                        "code": "POL12",
                                        "name": "Piotr Zielinski (Poland)"
                                },
                                {
                                        "code": "POL13",
                                        "name": "Przemyslaw Frankowski (Poland)"
                                },
                                {
                                        "code": "POL14",
                                        "name": "Robert Lewandowski (Poland)"
                                },
                                {
                                        "code": "POL15",
                                        "name": "Arkadiusz Milik (Poland)"
                                },
                                {
                                        "code": "POL16",
                                        "name": "Karol Swiderski (Poland)"
                                },
                                {
                                        "code": "POL17",
                                        "name": "Krzysztof Piatek (Poland)"
                                },
                                {
                                        "code": "POL18",
                                        "name": "Nicola Zalewski (Poland)"
                                },
                                {
                                        "code": "POL19",
                                        "name": "Lukasz Skorupski (Poland)"
                                },
                                {
                                        "code": "POL20",
                                        "name": "Damian Szymanski (Poland)"
                                }
                        ]
                }
        ],
        "Group D": [
                {
                        "code": "FRA",
                        "name": "France",
                        "flags": [
                                "fr"
                        ],
                        "stickers": [
                                {
                                        "code": "FRA1",
                                        "name": "France Federation Shield"
                                },
                                {
                                        "code": "FRA2",
                                        "name": "France Team Photo"
                                },
                                {
                                        "code": "FRA3",
                                        "name": "Hugo Lloris (France)"
                                },
                                {
                                        "code": "FRA4",
                                        "name": "Jules Kounde (France)"
                                },
                                {
                                        "code": "FRA5",
                                        "name": "Raphael Varane (France)"
                                },
                                {
                                        "code": "FRA6",
                                        "name": "Dayot Upamecano (France)"
                                },
                                {
                                        "code": "FRA7",
                                        "name": "Theo Hernandez (France)"
                                },
                                {
                                        "code": "FRA8",
                                        "name": "Ibrahima Konate (France)"
                                },
                                {
                                        "code": "FRA9",
                                        "name": "Aurelien Tchouameni (France)"
                                },
                                {
                                        "code": "FRA10",
                                        "name": "Adrien Rabiot (France)"
                                },
                                {
                                        "code": "FRA11",
                                        "name": "Antoine Griezmann (France)"
                                },
                                {
                                        "code": "FRA12",
                                        "name": "Ousmane Dembele (France)"
                                },
                                {
                                        "code": "FRA13",
                                        "name": "Kylian Mbappe (France)"
                                },
                                {
                                        "code": "FRA14",
                                        "name": "Olivier Giroud (France)"
                                },
                                {
                                        "code": "FRA15",
                                        "name": "Marcus Thuram (France)"
                                },
                                {
                                        "code": "FRA16",
                                        "name": "Randal Kolo Muani (France)"
                                },
                                {
                                        "code": "FRA17",
                                        "name": "Kingsley Coman (France)"
                                },
                                {
                                        "code": "FRA18",
                                        "name": "Eduardo Camavinga (France)"
                                },
                                {
                                        "code": "FRA19",
                                        "name": "Steve Mandanda (France)"
                                },
                                {
                                        "code": "FRA20",
                                        "name": "Benjamin Pavard (France)"
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
                                        "code": "AUS1",
                                        "name": "Australia Federation Shield"
                                },
                                {
                                        "code": "AUS2",
                                        "name": "Australia Team Photo"
                                },
                                {
                                        "code": "AUS3",
                                        "name": "Mathew Ryan (Australia)"
                                },
                                {
                                        "code": "AUS4",
                                        "name": "Fran Karacic (Australia)"
                                },
                                {
                                        "code": "AUS5",
                                        "name": "Harry Souttar (Australia)"
                                },
                                {
                                        "code": "AUS6",
                                        "name": "Kye Rowles (Australia)"
                                },
                                {
                                        "code": "AUS7",
                                        "name": "Aziz Behich (Australia)"
                                },
                                {
                                        "code": "AUS8",
                                        "name": "Milos Degenek (Australia)"
                                },
                                {
                                        "code": "AUS9",
                                        "name": "Aaron Mooy (Australia)"
                                },
                                {
                                        "code": "AUS10",
                                        "name": "Jackson Irvine (Australia)"
                                },
                                {
                                        "code": "AUS11",
                                        "name": "Riley McGree (Australia)"
                                },
                                {
                                        "code": "AUS12",
                                        "name": "Mathew Leckie (Australia)"
                                },
                                {
                                        "code": "AUS13",
                                        "name": "Craig Goodwin (Australia)"
                                },
                                {
                                        "code": "AUS14",
                                        "name": "Mitchell Duke (Australia)"
                                },
                                {
                                        "code": "AUS15",
                                        "name": "Jamie Maclaren (Australia)"
                                },
                                {
                                        "code": "AUS16",
                                        "name": "Awer Mabil (Australia)"
                                },
                                {
                                        "code": "AUS17",
                                        "name": "Keanu Baccus (Australia)"
                                },
                                {
                                        "code": "AUS18",
                                        "name": "Garang Kuol (Australia)"
                                },
                                {
                                        "code": "AUS19",
                                        "name": "Andrew Redmayne (Australia)"
                                },
                                {
                                        "code": "AUS20",
                                        "name": "Bailey Wright (Australia)"
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
                                        "code": "DEN1",
                                        "name": "Denmark Federation Shield"
                                },
                                {
                                        "code": "DEN2",
                                        "name": "Denmark Team Photo"
                                },
                                {
                                        "code": "DEN3",
                                        "name": "Kasper Schmeichel (Denmark)"
                                },
                                {
                                        "code": "DEN4",
                                        "name": "Rasmus Kristensen (Denmark)"
                                },
                                {
                                        "code": "DEN5",
                                        "name": "Joachim Andersen (Denmark)"
                                },
                                {
                                        "code": "DEN6",
                                        "name": "Andreas Christensen (Denmark)"
                                },
                                {
                                        "code": "DEN7",
                                        "name": "Joakim Maehle (Denmark)"
                                },
                                {
                                        "code": "DEN8",
                                        "name": "Simon Kjaer (Denmark)"
                                },
                                {
                                        "code": "DEN9",
                                        "name": "Pierre-Emile Hojbjerg (Denmark)"
                                },
                                {
                                        "code": "DEN10",
                                        "name": "Thomas Delaney (Denmark)"
                                },
                                {
                                        "code": "DEN11",
                                        "name": "Christian Eriksen (Denmark)"
                                },
                                {
                                        "code": "DEN12",
                                        "name": "Mikkel Damsgaard (Denmark)"
                                },
                                {
                                        "code": "DEN13",
                                        "name": "Andreas Skov Olsen (Denmark)"
                                },
                                {
                                        "code": "DEN14",
                                        "name": "Kasper Dolberg (Denmark)"
                                },
                                {
                                        "code": "DEN15",
                                        "name": "Martin Braithwaite (Denmark)"
                                },
                                {
                                        "code": "DEN16",
                                        "name": "Andreas Cornelius (Denmark)"
                                },
                                {
                                        "code": "DEN17",
                                        "name": "Jesper Lindstrom (Denmark)"
                                },
                                {
                                        "code": "DEN18",
                                        "name": "Mathias Jensen (Denmark)"
                                },
                                {
                                        "code": "DEN19",
                                        "name": "Oliver Christensen (Denmark)"
                                },
                                {
                                        "code": "DEN20",
                                        "name": "Victor Nelsson (Denmark)"
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
                                        "code": "TUN1",
                                        "name": "Tunisia Federation Shield"
                                },
                                {
                                        "code": "TUN2",
                                        "name": "Tunisia Team Photo"
                                },
                                {
                                        "code": "TUN3",
                                        "name": "Aymen Dahmen (Tunisia)"
                                },
                                {
                                        "code": "TUN4",
                                        "name": "Mohamed Drager (Tunisia)"
                                },
                                {
                                        "code": "TUN5",
                                        "name": "Montassar Talbi (Tunisia)"
                                },
                                {
                                        "code": "TUN6",
                                        "name": "Yassine Meriah (Tunisia)"
                                },
                                {
                                        "code": "TUN7",
                                        "name": "Ali Abdi (Tunisia)"
                                },
                                {
                                        "code": "TUN8",
                                        "name": "Wajdi Kechrida (Tunisia)"
                                },
                                {
                                        "code": "TUN9",
                                        "name": "Ellyes Skhiri (Tunisia)"
                                },
                                {
                                        "code": "TUN10",
                                        "name": "Aissa Laidouni (Tunisia)"
                                },
                                {
                                        "code": "TUN11",
                                        "name": "Naim Sliti (Tunisia)"
                                },
                                {
                                        "code": "TUN12",
                                        "name": "Youssef Msakni (Tunisia)"
                                },
                                {
                                        "code": "TUN13",
                                        "name": "Wahbi Khazri (Tunisia)"
                                },
                                {
                                        "code": "TUN14",
                                        "name": "Issam Jebali (Tunisia)"
                                },
                                {
                                        "code": "TUN15",
                                        "name": "Taha Yassine Khenissi (Tunisia)"
                                },
                                {
                                        "code": "TUN16",
                                        "name": "Anis Ben Slimane (Tunisia)"
                                },
                                {
                                        "code": "TUN17",
                                        "name": "Ghailene Chaalali (Tunisia)"
                                },
                                {
                                        "code": "TUN18",
                                        "name": "Ferjani Sassi (Tunisia)"
                                },
                                {
                                        "code": "TUN19",
                                        "name": "Bechir Ben Said (Tunisia)"
                                },
                                {
                                        "code": "TUN20",
                                        "name": "Dylan Bronn (Tunisia)"
                                }
                        ]
                }
        ],
        "Group E": [
                {
                        "code": "ESP",
                        "name": "Spain",
                        "flags": [
                                "es"
                        ],
                        "stickers": [
                                {
                                        "code": "ESP1",
                                        "name": "Spain Federation Shield"
                                },
                                {
                                        "code": "ESP2",
                                        "name": "Spain Team Photo"
                                },
                                {
                                        "code": "ESP3",
                                        "name": "Unai Simon (Spain)"
                                },
                                {
                                        "code": "ESP4",
                                        "name": "Dani Carvajal (Spain)"
                                },
                                {
                                        "code": "ESP5",
                                        "name": "Rodri (Spain)"
                                },
                                {
                                        "code": "ESP6",
                                        "name": "Aymeric Laporte (Spain)"
                                },
                                {
                                        "code": "ESP7",
                                        "name": "Jordi Alba (Spain)"
                                },
                                {
                                        "code": "ESP8",
                                        "name": "Cesar Azpilicueta (Spain)"
                                },
                                {
                                        "code": "ESP9",
                                        "name": "Sergio Busquets (Spain)"
                                },
                                {
                                        "code": "ESP10",
                                        "name": "Gavi (Spain)"
                                },
                                {
                                        "code": "ESP11",
                                        "name": "Pedri (Spain)"
                                },
                                {
                                        "code": "ESP12",
                                        "name": "Ferran Torres (Spain)"
                                },
                                {
                                        "code": "ESP13",
                                        "name": "Dani Olmo (Spain)"
                                },
                                {
                                        "code": "ESP14",
                                        "name": "Alvaro Morata (Spain)"
                                },
                                {
                                        "code": "ESP15",
                                        "name": "Marco Asensio (Spain)"
                                },
                                {
                                        "code": "ESP16",
                                        "name": "Nico Williams (Spain)"
                                },
                                {
                                        "code": "ESP17",
                                        "name": "Ansu Fati (Spain)"
                                },
                                {
                                        "code": "ESP18",
                                        "name": "Carlos Soler (Spain)"
                                },
                                {
                                        "code": "ESP19",
                                        "name": "Robert Sanchez (Spain)"
                                },
                                {
                                        "code": "ESP20",
                                        "name": "Pau Torres (Spain)"
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
                                        "code": "CRC1",
                                        "name": "Costa Rica Federation Shield"
                                },
                                {
                                        "code": "CRC2",
                                        "name": "Costa Rica Team Photo"
                                },
                                {
                                        "code": "CRC3",
                                        "name": "Keylor Navas (Costa Rica)"
                                },
                                {
                                        "code": "CRC4",
                                        "name": "Keysher Fuller (Costa Rica)"
                                },
                                {
                                        "code": "CRC5",
                                        "name": "Oscar Duarte (Costa Rica)"
                                },
                                {
                                        "code": "CRC6",
                                        "name": "Francisco Calvo (Costa Rica)"
                                },
                                {
                                        "code": "CRC7",
                                        "name": "Bryan Oviedo (Costa Rica)"
                                },
                                {
                                        "code": "CRC8",
                                        "name": "Kendall Waston (Costa Rica)"
                                },
                                {
                                        "code": "CRC9",
                                        "name": "Celso Borges (Costa Rica)"
                                },
                                {
                                        "code": "CRC10",
                                        "name": "Yeltsin Tejeda (Costa Rica)"
                                },
                                {
                                        "code": "CRC11",
                                        "name": "Jewison Bennette (Costa Rica)"
                                },
                                {
                                        "code": "CRC12",
                                        "name": "Gerson Torres (Costa Rica)"
                                },
                                {
                                        "code": "CRC13",
                                        "name": "Joel Campbell (Costa Rica)"
                                },
                                {
                                        "code": "CRC14",
                                        "name": "Anthony Contreras (Costa Rica)"
                                },
                                {
                                        "code": "CRC15",
                                        "name": "Johan Venegas (Costa Rica)"
                                },
                                {
                                        "code": "CRC16",
                                        "name": "Bryan Ruiz (Costa Rica)"
                                },
                                {
                                        "code": "CRC17",
                                        "name": "Brandon Aguilera (Costa Rica)"
                                },
                                {
                                        "code": "CRC18",
                                        "name": "Roan Wilson (Costa Rica)"
                                },
                                {
                                        "code": "CRC19",
                                        "name": "Esteban Alvarado (Costa Rica)"
                                },
                                {
                                        "code": "CRC20",
                                        "name": "Carlos Martinez (Costa Rica)"
                                }
                        ]
                },
                {
                        "code": "GER",
                        "name": "Germany",
                        "flags": [
                                "de"
                        ],
                        "stickers": [
                                {
                                        "code": "GER1",
                                        "name": "Germany Federation Shield"
                                },
                                {
                                        "code": "GER2",
                                        "name": "Germany Team Photo"
                                },
                                {
                                        "code": "GER3",
                                        "name": "Manuel Neuer (Germany)"
                                },
                                {
                                        "code": "GER4",
                                        "name": "Thilo Kehrer (Germany)"
                                },
                                {
                                        "code": "GER5",
                                        "name": "Niklas Süle (Germany)"
                                },
                                {
                                        "code": "GER6",
                                        "name": "Antonio Rüdiger (Germany)"
                                },
                                {
                                        "code": "GER7",
                                        "name": "David Raum (Germany)"
                                },
                                {
                                        "code": "GER8",
                                        "name": "Nico Schlotterbeck (Germany)"
                                },
                                {
                                        "code": "GER9",
                                        "name": "Joshua Kimmich (Germany)"
                                },
                                {
                                        "code": "GER10",
                                        "name": "Leon Goretzka (Germany)"
                                },
                                {
                                        "code": "GER11",
                                        "name": "Ilkay Gündogan (Germany)"
                                },
                                {
                                        "code": "GER12",
                                        "name": "Serge Gnabry (Germany)"
                                },
                                {
                                        "code": "GER13",
                                        "name": "Jamal Musiala (Germany)"
                                },
                                {
                                        "code": "GER14",
                                        "name": "Thomas Müller (Germany)"
                                },
                                {
                                        "code": "GER15",
                                        "name": "Kai Havertz (Germany)"
                                },
                                {
                                        "code": "GER16",
                                        "name": "Niclas Füllkrug (Germany)"
                                },
                                {
                                        "code": "GER17",
                                        "name": "Leroy Sané (Germany)"
                                },
                                {
                                        "code": "GER18",
                                        "name": "Mario Götze (Germany)"
                                },
                                {
                                        "code": "GER19",
                                        "name": "Marc-André ter Stegen (Germany)"
                                },
                                {
                                        "code": "GER20",
                                        "name": "Christian Günter (Germany)"
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
                                        "code": "JPN1",
                                        "name": "Japan Federation Shield"
                                },
                                {
                                        "code": "JPN2",
                                        "name": "Japan Team Photo"
                                },
                                {
                                        "code": "JPN3",
                                        "name": "Shuichi Gonda (Japan)"
                                },
                                {
                                        "code": "JPN4",
                                        "name": "Miki Yamane (Japan)"
                                },
                                {
                                        "code": "JPN5",
                                        "name": "Maya Yoshida (Japan)"
                                },
                                {
                                        "code": "JPN6",
                                        "name": "Ko Itakura (Japan)"
                                },
                                {
                                        "code": "JPN7",
                                        "name": "Yuto Nagatomo (Japan)"
                                },
                                {
                                        "code": "JPN8",
                                        "name": "Takehiro Tomiyasu (Japan)"
                                },
                                {
                                        "code": "JPN9",
                                        "name": "Wataru Endo (Japan)"
                                },
                                {
                                        "code": "JPN10",
                                        "name": "Hidemasa Morita (Japan)"
                                },
                                {
                                        "code": "JPN11",
                                        "name": "Junya Ito (Japan)"
                                },
                                {
                                        "code": "JPN12",
                                        "name": "Daichi Kamada (Japan)"
                                },
                                {
                                        "code": "JPN13",
                                        "name": "Takefusa Kubo (Japan)"
                                },
                                {
                                        "code": "JPN14",
                                        "name": "Daizen Maeda (Japan)"
                                },
                                {
                                        "code": "JPN15",
                                        "name": "Takuma Asano (Japan)"
                                },
                                {
                                        "code": "JPN16",
                                        "name": "Kaoru Mitoma (Japan)"
                                },
                                {
                                        "code": "JPN17",
                                        "name": "Ritsu Doan (Japan)"
                                },
                                {
                                        "code": "JPN18",
                                        "name": "Ao Tanaka (Japan)"
                                },
                                {
                                        "code": "JPN19",
                                        "name": "Daniel Schmidt (Japan)"
                                },
                                {
                                        "code": "JPN20",
                                        "name": "Hiroki Sakai (Japan)"
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
                                        "code": "BEL1",
                                        "name": "Belgium Federation Shield"
                                },
                                {
                                        "code": "BEL2",
                                        "name": "Belgium Team Photo"
                                },
                                {
                                        "code": "BEL3",
                                        "name": "Thibaut Courtois (Belgium)"
                                },
                                {
                                        "code": "BEL4",
                                        "name": "Timothy Castagne (Belgium)"
                                },
                                {
                                        "code": "BEL5",
                                        "name": "Toby Alderweireld (Belgium)"
                                },
                                {
                                        "code": "BEL6",
                                        "name": "Jan Vertonghen (Belgium)"
                                },
                                {
                                        "code": "BEL7",
                                        "name": "Thomas Meunier (Belgium)"
                                },
                                {
                                        "code": "BEL8",
                                        "name": "Leander Dendoncker (Belgium)"
                                },
                                {
                                        "code": "BEL9",
                                        "name": "Axel Witsel (Belgium)"
                                },
                                {
                                        "code": "BEL10",
                                        "name": "Youri Tielemans (Belgium)"
                                },
                                {
                                        "code": "BEL11",
                                        "name": "Kevin De Bruyne (Belgium)"
                                },
                                {
                                        "code": "BEL12",
                                        "name": "Eden Hazard (Belgium)"
                                },
                                {
                                        "code": "BEL13",
                                        "name": "Yannick Carrasco (Belgium)"
                                },
                                {
                                        "code": "BEL14",
                                        "name": "Michy Batshuayi (Belgium)"
                                },
                                {
                                        "code": "BEL15",
                                        "name": "Romelu Lukaku (Belgium)"
                                },
                                {
                                        "code": "BEL16",
                                        "name": "Leandro Trossard (Belgium)"
                                },
                                {
                                        "code": "BEL17",
                                        "name": "Thorgan Hazard (Belgium)"
                                },
                                {
                                        "code": "BEL18",
                                        "name": "Amadou Onana (Belgium)"
                                },
                                {
                                        "code": "BEL19",
                                        "name": "Simon Mignolet (Belgium)"
                                },
                                {
                                        "code": "BEL20",
                                        "name": "Arthur Theate (Belgium)"
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
                                        "code": "CAN1",
                                        "name": "Canada Federation Shield"
                                },
                                {
                                        "code": "CAN2",
                                        "name": "Canada Team Photo"
                                },
                                {
                                        "code": "CAN3",
                                        "name": "Milan Borjan (Canada)"
                                },
                                {
                                        "code": "CAN4",
                                        "name": "Alistair Johnston (Canada)"
                                },
                                {
                                        "code": "CAN5",
                                        "name": "Steven Vitoria (Canada)"
                                },
                                {
                                        "code": "CAN6",
                                        "name": "Kamal Miller (Canada)"
                                },
                                {
                                        "code": "CAN7",
                                        "name": "Richie Laryea (Canada)"
                                },
                                {
                                        "code": "CAN8",
                                        "name": "Sam Adekugbe (Canada)"
                                },
                                {
                                        "code": "CAN9",
                                        "name": "Atiba Hutchinson (Canada)"
                                },
                                {
                                        "code": "CAN10",
                                        "name": "Stephen Eustaquio (Canada)"
                                },
                                {
                                        "code": "CAN11",
                                        "name": "Tajon Buchanan (Canada)"
                                },
                                {
                                        "code": "CAN12",
                                        "name": "Alphonso Davies (Canada)"
                                },
                                {
                                        "code": "CAN13",
                                        "name": "Junior Hoilett (Canada)"
                                },
                                {
                                        "code": "CAN14",
                                        "name": "Jonathan David (Canada)"
                                },
                                {
                                        "code": "CAN15",
                                        "name": "Cyle Larin (Canada)"
                                },
                                {
                                        "code": "CAN16",
                                        "name": "Jonathan Osorio (Canada)"
                                },
                                {
                                        "code": "CAN17",
                                        "name": "Ismael Kone (Canada)"
                                },
                                {
                                        "code": "CAN18",
                                        "name": "Lucas Cavallini (Canada)"
                                },
                                {
                                        "code": "CAN19",
                                        "name": "Dayne St. Clair (Canada)"
                                },
                                {
                                        "code": "CAN20",
                                        "name": "Liam Millar (Canada)"
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
                                        "code": "MAR1",
                                        "name": "Morocco Federation Shield"
                                },
                                {
                                        "code": "MAR2",
                                        "name": "Morocco Team Photo"
                                },
                                {
                                        "code": "MAR3",
                                        "name": "Yassine Bounou (Morocco)"
                                },
                                {
                                        "code": "MAR4",
                                        "name": "Achraf Hakimi (Morocco)"
                                },
                                {
                                        "code": "MAR5",
                                        "name": "Nayef Aguerd (Morocco)"
                                },
                                {
                                        "code": "MAR6",
                                        "name": "Romain Saiss (Morocco)"
                                },
                                {
                                        "code": "MAR7",
                                        "name": "Noussair Mazraoui (Morocco)"
                                },
                                {
                                        "code": "MAR8",
                                        "name": "Jawad El Yamiq (Morocco)"
                                },
                                {
                                        "code": "MAR9",
                                        "name": "Sofyan Amrabat (Morocco)"
                                },
                                {
                                        "code": "MAR10",
                                        "name": "Azzedine Ounahi (Morocco)"
                                },
                                {
                                        "code": "MAR11",
                                        "name": "Selim Amallah (Morocco)"
                                },
                                {
                                        "code": "MAR12",
                                        "name": "Hakim Ziyech (Morocco)"
                                },
                                {
                                        "code": "MAR13",
                                        "name": "Sofiane Boufal (Morocco)"
                                },
                                {
                                        "code": "MAR14",
                                        "name": "Youssef En-Nesyri (Morocco)"
                                },
                                {
                                        "code": "MAR15",
                                        "name": "Abderrazak Hamdallah (Morocco)"
                                },
                                {
                                        "code": "MAR16",
                                        "name": "Zakaria Aboukhlal (Morocco)"
                                },
                                {
                                        "code": "MAR17",
                                        "name": "Abde Ezzalzouli (Morocco)"
                                },
                                {
                                        "code": "MAR18",
                                        "name": "Yahya Attiat-Allah (Morocco)"
                                },
                                {
                                        "code": "MAR19",
                                        "name": "Munir Mohamedi (Morocco)"
                                },
                                {
                                        "code": "MAR20",
                                        "name": "Bilal El Khannouss (Morocco)"
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
                                        "code": "CRO1",
                                        "name": "Croatia Federation Shield"
                                },
                                {
                                        "code": "CRO2",
                                        "name": "Croatia Team Photo"
                                },
                                {
                                        "code": "CRO3",
                                        "name": "Dominik Livakovic (Croatia)"
                                },
                                {
                                        "code": "CRO4",
                                        "name": "Josip Juranovic (Croatia)"
                                },
                                {
                                        "code": "CRO5",
                                        "name": "Dejan Lovren (Croatia)"
                                },
                                {
                                        "code": "CRO6",
                                        "name": "Josko Gvardiol (Croatia)"
                                },
                                {
                                        "code": "CRO7",
                                        "name": "Borna Sosa (Croatia)"
                                },
                                {
                                        "code": "CRO8",
                                        "name": "Josip Sutalo (Croatia)"
                                },
                                {
                                        "code": "CRO9",
                                        "name": "Marcelo Brozovic (Croatia)"
                                },
                                {
                                        "code": "CRO10",
                                        "name": "Luka Modric (Croatia)"
                                },
                                {
                                        "code": "CRO11",
                                        "name": "Mateo Kovacic (Croatia)"
                                },
                                {
                                        "code": "CRO12",
                                        "name": "Andrej Kramaric (Croatia)"
                                },
                                {
                                        "code": "CRO13",
                                        "name": "Ivan Perisic (Croatia)"
                                },
                                {
                                        "code": "CRO14",
                                        "name": "Marko Livaja (Croatia)"
                                },
                                {
                                        "code": "CRO15",
                                        "name": "Bruno Petkovic (Croatia)"
                                },
                                {
                                        "code": "CRO16",
                                        "name": "Mario Pasalic (Croatia)"
                                },
                                {
                                        "code": "CRO17",
                                        "name": "Nikola Vlasic (Croatia)"
                                },
                                {
                                        "code": "CRO18",
                                        "name": "Mislav Orsic (Croatia)"
                                },
                                {
                                        "code": "CRO19",
                                        "name": "Ivica Ivusic (Croatia)"
                                },
                                {
                                        "code": "CRO20",
                                        "name": "Borna Barisic (Croatia)"
                                }
                        ]
                }
        ],
        "Group G": [
                {
                        "code": "BRA",
                        "name": "Brazil",
                        "flags": [
                                "br"
                        ],
                        "stickers": [
                                {
                                        "code": "BRA1",
                                        "name": "Brazil Federation Shield"
                                },
                                {
                                        "code": "BRA2",
                                        "name": "Brazil Team Photo"
                                },
                                {
                                        "code": "BRA3",
                                        "name": "Alisson Becker (Brazil)"
                                },
                                {
                                        "code": "BRA4",
                                        "name": "Danilo (Brazil)"
                                },
                                {
                                        "code": "BRA5",
                                        "name": "Marquinhos (Brazil)"
                                },
                                {
                                        "code": "BRA6",
                                        "name": "Thiago Silva (Brazil)"
                                },
                                {
                                        "code": "BRA7",
                                        "name": "Alex Sandro (Brazil)"
                                },
                                {
                                        "code": "BRA8",
                                        "name": "Eder Militao (Brazil)"
                                },
                                {
                                        "code": "BRA9",
                                        "name": "Casemiro (Brazil)"
                                },
                                {
                                        "code": "BRA10",
                                        "name": "Lucas Paqueta (Brazil)"
                                },
                                {
                                        "code": "BRA11",
                                        "name": "Fred (Brazil)"
                                },
                                {
                                        "code": "BRA12",
                                        "name": "Raphinha (Brazil)"
                                },
                                {
                                        "code": "BRA13",
                                        "name": "Vinicius Jr (Brazil)"
                                },
                                {
                                        "code": "BRA14",
                                        "name": "Richarlison (Brazil)"
                                },
                                {
                                        "code": "BRA15",
                                        "name": "Neymar Jr (Brazil)"
                                },
                                {
                                        "code": "BRA16",
                                        "name": "Gabriel Jesus (Brazil)"
                                },
                                {
                                        "code": "BRA17",
                                        "name": "Rodrygo (Brazil)"
                                },
                                {
                                        "code": "BRA18",
                                        "name": "Antony (Brazil)"
                                },
                                {
                                        "code": "BRA19",
                                        "name": "Ederson (Brazil)"
                                },
                                {
                                        "code": "BRA20",
                                        "name": "Bruno Guimaraes (Brazil)"
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
                                        "code": "SRB1",
                                        "name": "Serbia Federation Shield"
                                },
                                {
                                        "code": "SRB2",
                                        "name": "Serbia Team Photo"
                                },
                                {
                                        "code": "SRB3",
                                        "name": "Vanja Milinkovic-Savic (Serbia)"
                                },
                                {
                                        "code": "SRB4",
                                        "name": "Nikola Milenkovic (Serbia)"
                                },
                                {
                                        "code": "SRB5",
                                        "name": "Milos Veljkovic (Serbia)"
                                },
                                {
                                        "code": "SRB6",
                                        "name": "Strahinja Pavlovic (Serbia)"
                                },
                                {
                                        "code": "SRB7",
                                        "name": "Andrija Zivkovic (Serbia)"
                                },
                                {
                                        "code": "SRB8",
                                        "name": "Filip Kostic (Serbia)"
                                },
                                {
                                        "code": "SRB9",
                                        "name": "Sasa Lukic (Serbia)"
                                },
                                {
                                        "code": "SRB10",
                                        "name": "Nemanja Gudelj (Serbia)"
                                },
                                {
                                        "code": "SRB11",
                                        "name": "Sergej Milinkovic-Savic (Serbia)"
                                },
                                {
                                        "code": "SRB12",
                                        "name": "Dusan Tadic (Serbia)"
                                },
                                {
                                        "code": "SRB13",
                                        "name": "Aleksandar Mitrovic (Serbia)"
                                },
                                {
                                        "code": "SRB14",
                                        "name": "Dusan Vlahovic (Serbia)"
                                },
                                {
                                        "code": "SRB15",
                                        "name": "Luka Jovic (Serbia)"
                                },
                                {
                                        "code": "SRB16",
                                        "name": "Nemanja Radonjic (Serbia)"
                                },
                                {
                                        "code": "SRB17",
                                        "name": "Darko Lazovic (Serbia)"
                                },
                                {
                                        "code": "SRB18",
                                        "name": "Filip Djuricic (Serbia)"
                                },
                                {
                                        "code": "SRB19",
                                        "name": "Predrag Rajkovic (Serbia)"
                                },
                                {
                                        "code": "SRB20",
                                        "name": "Stefan Mitrovic (Serbia)"
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
                                        "code": "SUI1",
                                        "name": "Switzerland Federation Shield"
                                },
                                {
                                        "code": "SUI2",
                                        "name": "Switzerland Team Photo"
                                },
                                {
                                        "code": "SUI3",
                                        "name": "Yann Sommer (Switzerland)"
                                },
                                {
                                        "code": "SUI4",
                                        "name": "Silvan Widmer (Switzerland)"
                                },
                                {
                                        "code": "SUI5",
                                        "name": "Manuel Akanji (Switzerland)"
                                },
                                {
                                        "code": "SUI6",
                                        "name": "Nico Elvedi (Switzerland)"
                                },
                                {
                                        "code": "SUI7",
                                        "name": "Ricardo Rodriguez (Switzerland)"
                                },
                                {
                                        "code": "SUI8",
                                        "name": "Fabian Schär (Switzerland)"
                                },
                                {
                                        "code": "SUI9",
                                        "name": "Remo Freuler (Switzerland)"
                                },
                                {
                                        "code": "SUI10",
                                        "name": "Granit Xhaka (Switzerland)"
                                },
                                {
                                        "code": "SUI11",
                                        "name": "Djibril Sow (Switzerland)"
                                },
                                {
                                        "code": "SUI12",
                                        "name": "Xherdan Shaqiri (Switzerland)"
                                },
                                {
                                        "code": "SUI13",
                                        "name": "Ruben Vargas (Switzerland)"
                                },
                                {
                                        "code": "SUI14",
                                        "name": "Breel Embolo (Switzerland)"
                                },
                                {
                                        "code": "SUI15",
                                        "name": "Haris Seferovic (Switzerland)"
                                },
                                {
                                        "code": "SUI16",
                                        "name": "Christian Fassnacht (Switzerland)"
                                },
                                {
                                        "code": "SUI17",
                                        "name": "Denis Zakaria (Switzerland)"
                                },
                                {
                                        "code": "SUI18",
                                        "name": "Fabian Frei (Switzerland)"
                                },
                                {
                                        "code": "SUI19",
                                        "name": "Gregor Kobel (Switzerland)"
                                },
                                {
                                        "code": "SUI20",
                                        "name": "Edimilson Fernandes (Switzerland)"
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
                                        "code": "CMR1",
                                        "name": "Cameroon Federation Shield"
                                },
                                {
                                        "code": "CMR2",
                                        "name": "Cameroon Team Photo"
                                },
                                {
                                        "code": "CMR3",
                                        "name": "Devis Epassy (Cameroon)"
                                },
                                {
                                        "code": "CMR4",
                                        "name": "Collins Fai (Cameroon)"
                                },
                                {
                                        "code": "CMR5",
                                        "name": "Jean-Charles Castelletto (Cameroon)"
                                },
                                {
                                        "code": "CMR6",
                                        "name": "Nicolas N'Koulou (Cameroon)"
                                },
                                {
                                        "code": "CMR7",
                                        "name": "Nouhou Tolo (Cameroon)"
                                },
                                {
                                        "code": "CMR8",
                                        "name": "Enzo Ebosse (Cameroon)"
                                },
                                {
                                        "code": "CMR9",
                                        "name": "Andre-Frank Zambo Anguissa (Cameroon)"
                                },
                                {
                                        "code": "CMR10",
                                        "name": "Martin Hongla (Cameroon)"
                                },
                                {
                                        "code": "CMR11",
                                        "name": "Pierre Kunde (Cameroon)"
                                },
                                {
                                        "code": "CMR12",
                                        "name": "Bryan Mbeumo (Cameroon)"
                                },
                                {
                                        "code": "CMR13",
                                        "name": "Karl Toko Ekambi (Cameroon)"
                                },
                                {
                                        "code": "CMR14",
                                        "name": "Eric Maxim Choupo-Moting (Cameroon)"
                                },
                                {
                                        "code": "CMR15",
                                        "name": "Vincent Aboubakar (Cameroon)"
                                },
                                {
                                        "code": "CMR16",
                                        "name": "Georges-Kevin Nkoudou (Cameroon)"
                                },
                                {
                                        "code": "CMR17",
                                        "name": "Christian Bassogog (Cameroon)"
                                },
                                {
                                        "code": "CMR18",
                                        "name": "Samuel Gouet (Cameroon)"
                                },
                                {
                                        "code": "CMR19",
                                        "name": "Simon Ngapandouetnbu (Cameroon)"
                                },
                                {
                                        "code": "CMR20",
                                        "name": "Olivier Ntcham (Cameroon)"
                                }
                        ]
                }
        ],
        "Group H": [
                {
                        "code": "POR",
                        "name": "Portugal",
                        "flags": [
                                "pt"
                        ],
                        "stickers": [
                                {
                                        "code": "POR1",
                                        "name": "Portugal Federation Shield"
                                },
                                {
                                        "code": "POR2",
                                        "name": "Portugal Team Photo"
                                },
                                {
                                        "code": "POR3",
                                        "name": "Diogo Costa (Portugal)"
                                },
                                {
                                        "code": "POR4",
                                        "name": "Diogo Dalot (Portugal)"
                                },
                                {
                                        "code": "POR5",
                                        "name": "Pepe (Portugal)"
                                },
                                {
                                        "code": "POR6",
                                        "name": "Ruben Dias (Portugal)"
                                },
                                {
                                        "code": "POR7",
                                        "name": "Raphael Guerreiro (Portugal)"
                                },
                                {
                                        "code": "POR8",
                                        "name": "Joao Cancelo (Portugal)"
                                },
                                {
                                        "code": "POR9",
                                        "name": "Ruben Neves (Portugal)"
                                },
                                {
                                        "code": "POR10",
                                        "name": "William Carvalho (Portugal)"
                                },
                                {
                                        "code": "POR11",
                                        "name": "Bernardo Silva (Portugal)"
                                },
                                {
                                        "code": "POR12",
                                        "name": "Bruno Fernandes (Portugal)"
                                },
                                {
                                        "code": "POR13",
                                        "name": "Cristiano Ronaldo (Portugal)"
                                },
                                {
                                        "code": "POR14",
                                        "name": "Joao Felix (Portugal)"
                                },
                                {
                                        "code": "POR15",
                                        "name": "Goncalo Ramos (Portugal)"
                                },
                                {
                                        "code": "POR16",
                                        "name": "Rafael Leao (Portugal)"
                                },
                                {
                                        "code": "POR17",
                                        "name": "Otavio (Portugal)"
                                },
                                {
                                        "code": "POR18",
                                        "name": "Vitinha (Portugal)"
                                },
                                {
                                        "code": "POR19",
                                        "name": "Rui Patricio (Portugal)"
                                },
                                {
                                        "code": "POR20",
                                        "name": "Nuno Mendes (Portugal)"
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
                                        "code": "GHA1",
                                        "name": "Ghana Federation Shield"
                                },
                                {
                                        "code": "GHA2",
                                        "name": "Ghana Team Photo"
                                },
                                {
                                        "code": "GHA3",
                                        "name": "Lawrence Ati-Zigi (Ghana)"
                                },
                                {
                                        "code": "GHA4",
                                        "name": "Tariq Lamptey (Ghana)"
                                },
                                {
                                        "code": "GHA5",
                                        "name": "Daniel Amartey (Ghana)"
                                },
                                {
                                        "code": "GHA6",
                                        "name": "Mohammed Salisu (Ghana)"
                                },
                                {
                                        "code": "GHA7",
                                        "name": "Baba Rahman (Ghana)"
                                },
                                {
                                        "code": "GHA8",
                                        "name": "Alidu Seidu (Ghana)"
                                },
                                {
                                        "code": "GHA9",
                                        "name": "Thomas Partey (Ghana)"
                                },
                                {
                                        "code": "GHA10",
                                        "name": "Salis Abdul Samed (Ghana)"
                                },
                                {
                                        "code": "GHA11",
                                        "name": "Mohammed Kudus (Ghana)"
                                },
                                {
                                        "code": "GHA12",
                                        "name": "Andre Ayew (Ghana)"
                                },
                                {
                                        "code": "GHA13",
                                        "name": "Jordan Ayew (Ghana)"
                                },
                                {
                                        "code": "GHA14",
                                        "name": "Inaki Williams (Ghana)"
                                },
                                {
                                        "code": "GHA15",
                                        "name": "Kamaldeen Sulemana (Ghana)"
                                },
                                {
                                        "code": "GHA16",
                                        "name": "Osman Bukari (Ghana)"
                                },
                                {
                                        "code": "GHA17",
                                        "name": "Daniel-Kofi Kyereh (Ghana)"
                                },
                                {
                                        "code": "GHA18",
                                        "name": "Elisha Owusu (Ghana)"
                                },
                                {
                                        "code": "GHA19",
                                        "name": "Abdul Manaf Nurudeen (Ghana)"
                                },
                                {
                                        "code": "GHA20",
                                        "name": "Gideon Mensah (Ghana)"
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
                                        "code": "URU1",
                                        "name": "Uruguay Federation Shield"
                                },
                                {
                                        "code": "URU2",
                                        "name": "Uruguay Team Photo"
                                },
                                {
                                        "code": "URU3",
                                        "name": "Sergio Rochet (Uruguay)"
                                },
                                {
                                        "code": "URU4",
                                        "name": "Guillermo Varela (Uruguay)"
                                },
                                {
                                        "code": "URU5",
                                        "name": "Diego Godin (Uruguay)"
                                },
                                {
                                        "code": "URU6",
                                        "name": "Jose Maria Gimenez (Uruguay)"
                                },
                                {
                                        "code": "URU7",
                                        "name": "Mathias Olivera (Uruguay)"
                                },
                                {
                                        "code": "URU8",
                                        "name": "Sebastian Coates (Uruguay)"
                                },
                                {
                                        "code": "URU9",
                                        "name": "Federico Valverde (Uruguay)"
                                },
                                {
                                        "code": "URU10",
                                        "name": "Rodrigo Bentancur (Uruguay)"
                                },
                                {
                                        "code": "URU11",
                                        "name": "Matias Vecino (Uruguay)"
                                },
                                {
                                        "code": "URU12",
                                        "name": "Giorgian De Arrascaeta (Uruguay)"
                                },
                                {
                                        "code": "URU13",
                                        "name": "Facundo Pellistri (Uruguay)"
                                },
                                {
                                        "code": "URU14",
                                        "name": "Darwin Nunez (Uruguay)"
                                },
                                {
                                        "code": "URU15",
                                        "name": "Luis Suarez (Uruguay)"
                                },
                                {
                                        "code": "URU16",
                                        "name": "Edinson Cavani (Uruguay)"
                                },
                                {
                                        "code": "URU17",
                                        "name": "Maxi Gomez (Uruguay)"
                                },
                                {
                                        "code": "URU18",
                                        "name": "Nicolas De La Cruz (Uruguay)"
                                },
                                {
                                        "code": "URU19",
                                        "name": "Fernando Muslera (Uruguay)"
                                },
                                {
                                        "code": "URU20",
                                        "name": "Matias Vina (Uruguay)"
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
                                        "code": "KOR1",
                                        "name": "South Korea Federation Shield"
                                },
                                {
                                        "code": "KOR2",
                                        "name": "South Korea Team Photo"
                                },
                                {
                                        "code": "KOR3",
                                        "name": "Kim Seung-gyu (South Korea)"
                                },
                                {
                                        "code": "KOR4",
                                        "name": "Kim Moon-hwan (South Korea)"
                                },
                                {
                                        "code": "KOR5",
                                        "name": "Kim Min-jae (South Korea)"
                                },
                                {
                                        "code": "KOR6",
                                        "name": "Kim Young-gwon (South Korea)"
                                },
                                {
                                        "code": "KOR7",
                                        "name": "Kim Jin-su (South Korea)"
                                },
                                {
                                        "code": "KOR8",
                                        "name": "Kwon Kyung-won (South Korea)"
                                },
                                {
                                        "code": "KOR9",
                                        "name": "Jung Woo-young (South Korea)"
                                },
                                {
                                        "code": "KOR10",
                                        "name": "Hwang In-beom (South Korea)"
                                },
                                {
                                        "code": "KOR11",
                                        "name": "Lee Jae-sung (South Korea)"
                                },
                                {
                                        "code": "KOR12",
                                        "name": "Hwang Hee-chan (South Korea)"
                                },
                                {
                                        "code": "KOR13",
                                        "name": "Son Heung-min (South Korea)"
                                },
                                {
                                        "code": "KOR14",
                                        "name": "Cho Gue-sung (South Korea)"
                                },
                                {
                                        "code": "KOR15",
                                        "name": "Hwang Ui-jo (South Korea)"
                                },
                                {
                                        "code": "KOR16",
                                        "name": "Lee Kang-in (South Korea)"
                                },
                                {
                                        "code": "KOR17",
                                        "name": "Na Sang-ho (South Korea)"
                                },
                                {
                                        "code": "KOR18",
                                        "name": "Son Jun-ho (South Korea)"
                                },
                                {
                                        "code": "KOR19",
                                        "name": "Jo Hyeon-woo (South Korea)"
                                },
                                {
                                        "code": "KOR20",
                                        "name": "Kim Tae-hwan (South Korea)"
                                }
                        ]
                }
        ]
}
};

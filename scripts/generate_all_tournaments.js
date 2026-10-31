// scripts/generate_all_tournaments.js
const fs = require('fs');
const path = require('path');

const tournamentsDir = path.join(__dirname, '../data/tournaments');

console.log('Generating remaining Panini World Cup tournaments...');

// Template helper
function createTournamentContent(config) {
    return `// data/tournaments/${config.id}.js
// Official Panini ${config.title} World Cup Collection

TOURNAMENTS_CONFIG.tournaments['${config.id}'] = {
    id: '${config.id}',
    categoryId: 'fifa-world-cup',
    year: ${config.year},
    title: '${config.title}',
    subtitle: '${config.subtitle}',
    dbKey: '${config.dbKey}',
    isSequential: ${config.isSequential},
    totalStickers: ${config.totalStickers},
    status: 'active',
    phase: '${config.phase}',
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
    groups: ${JSON.stringify(config.groups, null, 8)}
};
`;
}

// -----------------------------------------------------------------------------
// 1. WC 1990: Italia 90 (448 stickers)
// -----------------------------------------------------------------------------
function buildWc1990() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-16)
    const specials = [
        "FIFA World Cup Trophy",
        "Official Italia 90 Emblem",
        "Ciao (Official Mascot)",
        "Ciao Action Mascot",
        "Stadio Olimpico (Roma)",
        "Stadio Giuseppe Meazza / San Siro (Milano)",
        "Stadio San Paolo (Napoli)",
        "Stadio delle Alpi (Torino)",
        "Stadio Luigi Ferraris (Genova)",
        "Stadio San Nicola (Bari)",
        "Stadio Renato Dall'Ara (Bologna)",
        "Stadio Marc'Antonio Bentegodi (Verona)",
        "Stadio Artemio Franchi (Firenze)",
        "Stadio Sant'Elia (Cagliari)",
        "Stadio Friuli (Udine)",
        "Stadio La Favorita (Palermo)"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Mascot, Trophy & Stadiums",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    // 24 Teams, 18 stickers each (1 badge, 1 team photo, 16 players)
    const teamsData = [
        // Group A
        { group: "Group A", code: "ITA", name: "Italy", flags: ["it"],
          players: ["Walter Zenga", "Stefano Tacconi", "Franco Baresi", "Giuseppe Bergomi", "Riccardo Ferri", "Paolo Maldini", "Carlo Ancelotti", "Nicola Berti", "Fernando De Napoli", "Giuseppe Giannini", "Giancarlo Marocchi", "Roberto Donadoni", "Andrea Carnevale", "Roberto Mancini", "Salvatore Schillaci", "Gianluca Vialli"] },
        { group: "Group A", code: "AUT", name: "Austria", flags: ["at"],
          players: ["Klaus Lindenberger", "Michael Konsel", "Robert Pecl", "Anton Pfeffer", "Peter Artner", "Ernst Aigner", "Manfred Zsak", "Andreas Herzog", "Michael Baur", "Peter Schöttel", "Manfred Linzmaier", "Gerald Willfurth", "Toni Polster", "Gerhard Rodax", "Andreas Ogris", "Christian Keglevits"] },
        { group: "Group A", code: "USA", name: "United States", flags: ["us"],
          players: ["Tony Meola", "Kasey Keller", "Steve Trittschuh", "John Doyle", "Jimmy Banks", "Marcelo Balboa", "Desmond Armstrong", "John Harkes", "Tab Ramos", "Paul Caligiuri", "Brian Bliss", "Chris Henderson", "Peter Vermes", "Bruce Murray", "Eric Wynalda", "Christopher Sullivan"] },
        { group: "Group A", code: "TCH", name: "Czechoslovakia", flags: ["cz", "sk"],
          players: ["Jan Stejskal", "Ludek Miklosko", "Frantisek Straka", "Miroslav Kadlec", "Jan Kocian", "Jozef Chovanec", "Lubomir Moravcik", "Ivan Hasek", "Michal Bilek", "Vaclav Nemecek", "Vladimir Weiss", "Viliam Hyravy", "Tomas Skuhravy", "Stanislav Griga", "Milan Luhovy", "Ivo Knoflicek"] },

        // Group B
        { group: "Group B", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Nery Pumpido", "Sergio Goycochea", "Jose Serrizuela", "Oscar Ruggeri", "Nestor Fabbri", "Roberto Sensini", "Juan Simon", "Jose Basualdo", "Jorge Burruchaga", "Diego Armando Maradona", "Pedro Troglio", "Sergio Batista", "Ricardo Giusti", "Abel Balbo", "Claudio Caniggia", "Gustavo Dezotti"] },
        { group: "Group B", code: "CMR", name: "Cameroon", flags: ["cm"],
          players: ["Thomas N'Kono", "Joseph-Antoine Bell", "Stephen Tataw", "Emmanuel Kundé", "Victor N'Dip", "Bertin Ebwellé", "Benjamin Massing", "Cyrille Makanaky", "Thomas Libiih", "André Kana-Biyik", "Emile M'Bouh", "Louis-Paul M'Fédé", "Roger Milla", "François Omam-Biyik", "Bonaventure Djonkep", "Eugène Ekéké"] },
        { group: "Group B", code: "URS", name: "Soviet Union", flags: ["ru"],
          players: ["Rinat Dasaev", "Viktor Chanov", "Vladimir Bessonov", "Oleg Kuznetsov", "Anatoliy Demyanenko", "Sergey Gorlukovich", "Akhrik Tsveiba", "Vasiliy Rats", "Aleksey Mikhailichenko", "Gennadiy Litovchenko", "Aleksandr Zavarov", "Sergey Aleynikov", "Igor Dobrovolskiy", "Oleg Protasov", "Aleksandr Borodyuk", "Igor Kolyvanov"] },
        { group: "Group B", code: "ROU", name: "Romania", flags: ["ro"],
          players: ["Silviu Lung", "Bogdan Stelea", "Mircea Rednic", "Stefan Iovan", "Gheorghe Popescu", "Ioan Andone", "Michael Klein", "Gheorghe Hagi", "Ioan Sabau", "Dorin Mateut", "Iosif Rotariu", "Danut Lupu", "Marius Lacatus", "Florin Raducioiu", "Rodion Camataru", "Ilie Dumitrescu"] },

        // Group C
        { group: "Group C", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Taffarel", "Acacio", "Jorginho", "Ricardo Gomes", "Mauro Galvao", "Mozer", "Branco", "Aldair", "Alemao", "Dunga", "Valdo", "Silas", "Bismarck", "Careca", "Muller", "Romario"] },
        { group: "Group C", code: "SWE", name: "Sweden", flags: ["se"],
          players: ["Thomas Ravelli", "Sven Andersson", "Roland Nilsson", "Glenn Hysen", "Peter Larsson", "Roger Ljung", "Dennis Schiller", "Klas Ingesson", "Anders Limpar", "Glenn Stromberg", "Jonas Thern", "Stefan Rehn", "Joakim Nilsson", "Mats Magnusson", "Tomas Brolin", "Johnny Ekstrom"] },
        { group: "Group C", code: "CRC", name: "Costa Rica", flags: ["cr"],
          players: ["Luis Gabelo Conejo", "Hermidio Barrantes", "Roger Flores", "Mauricio Montero", "Hector Marchena", "Ronald Gonzalez", "Vladimir Quesada", "German Chavarria", "Roger Gomez", "Alexandre Guimaraes", "Oscar Ramirez", "Juan Cayasso", "Claudio Jara", "Hernan Medford", "Leoni Flores", "Roy Myers"] },
        { group: "Group C", code: "SCO", name: "Scotland", flags: ["gb-sct"],
          players: ["Jim Leighton", "Andy Goram", "Alex McLeish", "Maurice Malpas", "Richard Gough", "David McPherson", "Craig Levein", "Roy Aitken", "Paul McStay", "Stuart McCall", "Murdo MacLeod", "Jim Bett", "Ally McCoist", "Mo Johnston", "Gordon Durie", "Robert Fleck"] },

        // Group D
        { group: "Group D", code: "FRG", name: "West Germany", flags: ["de"],
          players: ["Bodo Illgner", "Raimond Aumann", "Klaus Augenthaler", "Thomas Berthold", "Andreas Brehme", "Guido Buchwald", "Jurgen Kohler", "Stefan Reuter", "Thomas Hassler", "Pierre Littbarski", "Lothar Matthaus", "Uwe Bein", "Olaf Thon", "Rudi Voller", "Jurgen Klinsmann", "Karl-Heinz Riedle"] },
        { group: "Group D", code: "YUG", name: "Yugoslavia", flags: ["rs"],
          players: ["Tomislav Ivkovic", "Fahrudin Omerovic", "Predrag Spasic", "Zoran Vulic", "Mirsad Baljic", "Faruk Hadzibegic", "Davor Jozic", "Dragan Stojkovic", "Safet Susic", "Robert Prosinecki", "Dejan Savicevic", "Mehmed Bazdarevic", "Srecko Katanec", "Darko Pancev", "Zlatko Vujovic", "Alen Boksic"] },
        { group: "Group D", code: "UAE", name: "United Arab Emirates", flags: ["ae"],
          players: ["Muhsin Musabah", "Abdulqadir Hassan", "Khalil Ghanim", "Mubarak Ghanim", "Eissa Meer", "Ibrahim Meer", "Yousuf Hussain", "Mohamed Salim", "Nasir Khamees", "Ali Thani", "Khalid Ismail", "Fahad Khamees", "Adnan Al Talyani", "Zuhair Bakhit", "Abdulaziz Mohamed", "Hussain Ghuloum"] },
        { group: "Group D", code: "COL", name: "Colombia", flags: ["co"],
          players: ["Rene Higuita", "Eduardo Nino", "Andres Escobar", "Luis Fernando Herrera", "Gildardo Gomez", "Luis Carlos Perea", "Carlos Hoyos", "Leonel Alvarez", "Carlos Valderrama", "Bernardo Redin", "Freddy Rincon", "Gabriel Gomez", "Arnoldo Iguaran", "Faustino Asprilla", "Albeiro Usuriaga", "Ruben Dario Hernandez"] },

        // Group E
        { group: "Group E", code: "BEL", name: "Belgium", flags: ["be"],
          players: ["Michel Preud'homme", "Filip De Wilde", "Eric Gerets", "Georges Grun", "Leo Clijsters", "Stephane Demol", "Michel De Wolf", "Franky Van der Elst", "Enzo Scifo", "Jan Ceulemans", "Bruno Versavel", "Marc Emmers", "Patrick Vervoort", "Marc Degryse", "Luc Nilis", "Marc Van Der Linden"] },
        { group: "Group E", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Kim Poong-joo", "Choi In-young", "Park Kyung-hoon", "Chung Yong-hwan", "Gu Sang-bum", "Choi Kang-hee", "Yoon Deuk-jeo", "Lee Young-jin", "Kim Joo-sung", "Lee Heung-sil", "Noh Soo-jin", "Hwangbo Kwan", "Byun Byung-joo", "Choi Soon-ho", "Hwang Sun-hong", "Seo Jung-won"] },
        { group: "Group E", code: "URU", name: "Uruguay", flags: ["uy"],
          players: ["Fernando Alvez", "Eduardo Pereira", "Nelson Gutierrez", "Hugo De Leon", "Jose Herrera", "Alfonso Dominguez", "Daniel Revelez", "Enzo Francescoli", "Santiago Ostolaza", "Ruben Paz", "Jose Perdomo", "Gabriel Correa", "Ruben Pereira", "Antonio Alzamendi", "Ruben Sosa", "Carlos Aguilera"] },
        { group: "Group E", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Andoni Zubizarreta", "Juan Carlos Ablanedo", "Chendo", "Manuel Sanchis", "Andoni Goikoetxea", "Quique Sanchez Flores", "Rafael Alkorta", "Genar Andrinua", "Michel", "Martin Vazquez", "Roberto Fernandez", "Fernando Hierro", "Jose Mari Bakero", "Emilio Butragueno", "Julio Salinas", "Manolo"] },

        // Group F
        { group: "Group F", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["Peter Shilton", "Chris Woods", "Des Walker", "Terry Butcher", "Stuart Pearce", "Paul Parker", "Gary Stevens", "Bryan Robson", "Chris Waddle", "Paul Gascoigne", "Steve McMahon", "David Platt", "John Barnes", "Gary Lineker", "Peter Beardsley", "Steve Bull"] },
        { group: "Group F", code: "IRL", name: "Republic of Ireland", flags: ["ie"],
          players: ["Pat Bonner", "Gerry Peyton", "Chris Morris", "Mick McCarthy", "Kevin Moran", "Steve Staunton", "Chris Hughton", "Paul McGrath", "Ray Houghton", "Ronnie Whelan", "Kevin Sheedy", "Andy Townsend", "John Sheridan", "John Aldridge", "Frank Stapleton", "Niall Quinn"] },
        { group: "Group F", code: "NED", name: "Netherlands", flags: ["nl"],
          players: ["Hans van Breukelen", "Joop Hiele", "Ronald Koeman", "Adri van Tiggelen", "Berry van Aerle", "Graeme Rutjes", "Danny Blind", "Frank Rijkaard", "Jan Wouters", "Gerald Vanenburg", "Erwin Koeman", "Richard Witschge", "Ruud Gullit", "Marco van Basten", "Wim Kieft", "Hans Gillhaus"] },
        { group: "Group F", code: "EGY", name: "Egypt", flags: ["eg"],
          players: ["Ahmed Shobair", "Thabet El-Batal", "Ibrahim Hassan", "Hesham Yakan", "Rabie Yassin", "Hany Ramzy", "Ashraf Kasem", "Magdi Abdelghani", "Ismail Youssef", "Taher Abouzaid", "Magdy Tolba", "Tarek Soliman", "Hossam Hassan", "Gamal Abdelhamid", "Ayman Shawky", "Ahmed El-Kass"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        stickers.push({ code: String(currentCode++), name: `${t.name} Team Photo` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    return {
        id: 'wc1990',
        year: 1990,
        title: 'Italia 90',
        subtitle: 'Italy • 24 Teams • 448 Stickers',
        dbKey: 'panini1990',
        isSequential: true,
        totalStickers: 448,
        phase: 'Phase 2 (1990–2006)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 2. WC 1994: USA 94 (444 stickers)
// -----------------------------------------------------------------------------
function buildWc1994() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-12)
    const specials = [
        "FIFA World Cup Trophy",
        "Official USA 94 Emblem",
        "Striker the World Cup Pup (Mascot)",
        "Rose Bowl (Pasadena / Los Angeles)",
        "Stanford Stadium (Palo Alto / San Francisco)",
        "Pontiac Silverdome (Detroit)",
        "Giants Stadium (East Rutherford / New York)",
        "Cotton Bowl (Dallas)",
        "Soldier Field (Chicago)",
        "Citrus Bowl (Orlando)",
        "Foxboro Stadium (Boston)",
        "Robert F. Kennedy Memorial Stadium (Washington D.C.)"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Trophy, Mascot & Stadiums",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    const teamsData = [
        // Group A
        { group: "Group A", code: "USA", name: "United States", flags: ["us"],
          players: ["Tony Meola", "Brad Friedel", "Marcelo Balboa", "Alexi Lalas", "Thomas Dooley", "Paul Caligiuri", "Fernando Clavijo", "Tab Ramos", "John Harkes", "Cobi Jones", "Mike Sorber", "Hugo Perez", "Eric Wynalda", "Earnie Stewart", "Roy Wegerle", "Frank Klopas"] },
        { group: "Group A", code: "SUI", name: "Switzerland", flags: ["ch"],
          players: ["Marco Pascolo", "Stephan Lehmann", "Marc Hottiger", "Alain Geiger", "Yvan Quentin", "Dominique Herr", "Jurg Studer", "Ciriaco Sforza", "Georges Bregy", "Thomas Bickel", "Christophe Ohrel", "Alain Sutter", "Stephane Chapuisat", "Kubilay Turkyilmaz", "Adrian Knup", "Nestor Subiat"] },
        { group: "Group A", code: "COL", name: "Colombia", flags: ["co"],
          players: ["Oscar Cordoba", "Farid Mondragon", "Andres Escobar", "Luis Carlos Perea", "Luis Fernando Herrera", "Wilson Perez", "Alexis Mendoza", "Leonel Alvarez", "Gabriel Gomez", "Carlos Valderrama", "Freddy Rincon", "Mauricio Serna", "Faustino Asprilla", "Adolfo Valencia", "Antony de Avila", "Victor Aristizabal"] },
        { group: "Group A", code: "ROU", name: "Romania", flags: ["ro"],
          players: ["Bogdan Stelea", "Florin Prunea", "Dan Petrescu", "Gheorghe Popescu", "Daniel Prodan", "Miodrag Belodedici", "Tibor Selymes", "Gheorghe Hagi", "Dorinel Munteanu", "Ioan Lupescu", "Ilie Dumitrescu", "Basarab Panduru", "Florin Raducioiu", "Ion Vladoiu", "Gheorghe Mihali", "Constantin Galca"] },

        // Group B
        { group: "Group B", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Taffarel", "Zetti", "Jorginho", "Ricardo Rocha", "Aldair", "Marcio Santos", "Branco", "Cafu", "Mauro Silva", "Dunga", "Rai", "Mazinho", "Zinho", "Bebeto", "Romario", "Muller"] },
        { group: "Group B", code: "RUS", name: "Russia", flags: ["ru"],
          players: ["Dmitriy Kharin", "Stanislav Cherchesov", "Viktor Onopko", "Yuriy Nikiforov", "Dmitriy Galiamin", "Sergei Gorlukovich", "Dmitriy Kuznetsov", "Igor Shalimov", "Aleksandr Mostovoy", "Valeriy Karpin", "Igor Dobrovolskiy", "Igor Kolyvanov", "Oleg Salenko", "Sergei Yuran", "Dmitri Radchenko", "Vladimir Beschastnykh"] },
        { group: "Group B", code: "CMR", name: "Cameroon", flags: ["cm"],
          players: ["Joseph-Antoine Bell", "Jacques Songo'o", "Stephen Tataw", "Rigobert Song", "Raymond Kalla", "Victor N'Dip", "Hans Agbo", "Thomas Libiih", "Marc-Vivien Foe", "Andre Kana-Biyik", "Emile M'Bouh", "Louis-Paul M'Fede", "Roger Milla", "Francois Omam-Biyik", "David Embe", "Alphonse Tchami"] },
        { group: "Group B", code: "SWE", name: "Sweden", flags: ["se"],
          players: ["Thomas Ravelli", "Lars Eriksson", "Roland Nilsson", "Patrik Andersson", "Joachim Bjorklund", "Pontus Kamark", "Roger Ljung", "Stefan Schwarz", "Jonas Thern", "Klas Ingesson", "Anders Limpar", "Tomas Brolin", "Martin Dahlin", "Kennet Andersson", "Henrik Larsson", "Mikael Nilsson"] },

        // Group C
        { group: "Group C", code: "GER", name: "Germany", flags: ["de"],
          players: ["Bodo Illgner", "Andreas Kopke", "Lothar Matthaus", "Jurgen Kohler", "Thomas Helmer", "Guido Buchwald", "Andreas Brehme", "Thomas Berthold", "Thomas Hassler", "Stefan Effenberg", "Andreas Moller", "Mario Basler", "Jurgen Klinsmann", "Rudi Voller", "Karl-Heinz Riedle", "Ulf Kirsten"] },
        { group: "Group C", code: "BOL", name: "Bolivia", flags: ["bo"],
          players: ["Carlos Trucco", "Dario Rojas", "Miguel Rimba", "Marco Sandy", "Gustavo Quinteros", "Luis Cristaldo", "Modesto Soruco", "Carlos Borja", "Jose Milton Melgar", "Julio Cesar Baldivieso", "Erwin Sanchez", "Mauricio Ramos", "Marco Etcheverry", "Jaime Moreno", "William Ramallo", "Alvaro Pena"] },
        { group: "Group C", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Andoni Zubizarreta", "Santiago Canizares", "Albert Ferrer", "Rafael Alkorta", "Fernando Hierro", "Miguel Angel Nadal", "Sergi Barjuan", "Jorge Otero", "Pep Guardiola", "Jose Mari Bakero", "Luis Enrique", "Txiki Begiristain", "Julio Salinas", "Jon Andoni Goikoetxea", "Juanele", "Felipe Minambres"] },
        { group: "Group C", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Choi In-young", "Lee Woon-jae", "Hong Myung-bo", "Kim Pan-keun", "Park Jung-bae", "Shin Hong-gi", "Gu Sang-bum", "Lee Young-jin", "Kim Joo-sung", "Ha Seok-ju", "Cho Jin-ho", "Noh Jung-yoon", "Hwang Sun-hong", "Seo Jung-won", "Ko Jeong-woon", "Kim Do-hoon"] },

        // Group D
        { group: "Group D", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Sergio Goycochea", "Luis Islas", "Roberto Sensini", "Oscar Ruggeri", "Fernando Caceres", "Jose Chamot", "Hernan Diaz", "Diego Simeone", "Fernando Redondo", "Diego Armando Maradona", "Ariel Ortega", "Leonardo Rodriguez", "Gabriel Batistuta", "Claudio Caniggia", "Abel Balbo", "Ramon Medina Bello"] },
        { group: "Group D", code: "GRE", name: "Greece", flags: ["gr"],
          players: ["Antonis Minou", "Elias Atmatsidis", "Stratos Apostolakis", "Giannis Kalitzakis", "Stelios Manolas", "Thanasis Kolitsidakis", "Kyriakos Karataidis", "Nikos Nioplias", "Savvas Kofidis", "Panagiotis Tsalouchidis", "Spyros Marangos", "Tasos Mitropoulos", "Dimitris Saravakos", "Nikos Machlas", "Alexis Alexoudis", "Vasilis Dimitriadis"] },
        { group: "Group D", code: "NGA", name: "Nigeria", flags: ["ng"],
          players: ["Peter Rufai", "Alloysius Agu", "Augustine Eguavoen", "Uche Okechukwu", "Chidi Nwanu", "Michael Emenalo", "Stephen Keshi", "Sunday Oliseh", "Finidi George", "Jay-Jay Okocha", "Emmanuel Amunike", "Mutiu Adepoju", "Rashidi Yekini", "Daniel Amokachi", "Samson Siasia", "Victor Ikpeba"] },
        { group: "Group D", code: "BUL", name: "Bulgaria", flags: ["bg"],
          players: ["Borislav Mikhailov", "Plamen Nikolov", "Emil Kremenliev", "Trifon Ivanov", "Petar Hubchev", "Tsanko Tsvetanov", "Ilian Kiriakov", "Zlatko Yankov", "Yordan Letchkov", "Krasimir Balakov", "Daniel Borimirov", "Georgi Georgiev", "Hristo Stoichkov", "Emil Kostadinov", "Nasko Sirakov", "Petar Aleksandrov"] },

        // Group E
        { group: "Group E", code: "ITA", name: "Italy", flags: ["it"],
          players: ["Gianluca Pagliuca", "Luca Marchegiani", "Franco Baresi", "Paolo Maldini", "Antonio Benarrivo", "Alessandro Costacurta", "Roberto Mussi", "Mauro Tassotti", "Dino Baggio", "Demetrio Albertini", "Roberto Donadoni", "Nicola Berti", "Roberto Baggio", "Gianfranco Zola", "Giuseppe Signori", "Daniele Massaro"] },
        { group: "Group E", code: "IRL", name: "Republic of Ireland", flags: ["ie"],
          players: ["Pat Bonner", "Alan Kelly", "Denis Irwin", "Paul McGrath", "Phil Babb", "Terry Phelan", "Gary Kelly", "Roy Keane", "Andy Townsend", "Ray Houghton", "John Sheridan", "Steve Staunton", "John Aldridge", "Tommy Coyne", "Tony Cascarino", "David Kelly"] },
        { group: "Group E", code: "NOR", name: "Norway", flags: ["no"],
          players: ["Erik Thorstvedt", "Frode Grodas", "Henning Berg", "Rune Bratseth", "Alf-Inge Haaland", "Stig Inge Bjornebye", "Tore Pedersen", "Oyvind Leonhardsen", "Kjetil Rekdal", "Erik Mykland", "Lars Bohinen", "Jahn Ivar Jakobsen", "Jostein Flo", "Jan Aage Fjortoft", "Goran Sorloth", "Sigurd Rushfeldt"] },
        { group: "Group E", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Jorge Campos", "Felix Fernandez", "Claudio Suarez", "Juan de Dios Ramirez Perales", "Ignacio Ambriz", "Ramon Ramirez", "Jorge Rodriguez", "Marcelino Bernal", "Alberto Garcia Aspe", "Joaquin del Olmo", "Missael Espinoza", "Luis Roberto Alves Zague", "Hugo Sanchez", "Luis Garcia", "Carlos Hermosillo", "Daniel Guzman"] },

        // Group F
        { group: "Group F", code: "BEL", name: "Belgium", flags: ["be"],
          players: ["Michel Preud'homme", "Filip De Wilde", "Philippe Albert", "Georges Grun", "Michel De Wolf", "Vital Borkelmans", "Rudi Smidts", "Lorenzo Staelens", "Franky Van der Elst", "Enzo Scifo", "Marc Emmers", "Danny Boffin", "Marc Degryse", "Luc Nilis", "Josip Weber", "Alexandre Czerniatynski"] },
        { group: "Group F", code: "MAR", name: "Morocco", flags: ["ma"],
          players: ["Khalil Azmi", "Zakaria Alaoui", "Abdelkrim El Hadrioui", "Noureddine Naybet", "Smahi Triki", "Rachid Neqrouz", "Tahar El Khalej", "Rachid Daoudi", "Mustapha Hadji", "Mustapha El Haddaoui", "Mohammed Chaouch", "Aziz Bouderbala", "Hassan Nader", "Ahmed Bahja", "Abdeslam Laghrissi", "Abdelmajid Bouyboud"] },
        { group: "Group F", code: "NED", name: "Netherlands", flags: ["nl"],
          players: ["Ed de Goey", "Theo Snelders", "Frank de Boer", "Ronald Koeman", "Stan Valckx", "Arthur Numan", "Ulrich van Gobbel", "Wim Jonk", "Frank Rijkaard", "Ronald de Boer", "Jan Wouters", "Marc Overmars", "Dennis Bergkamp", "Bryan Roy", "Peter van Vossen", "John Bosman"] },
        { group: "Group F", code: "KSA", name: "Saudi Arabia", flags: ["sa"],
          players: ["Mohamed Al-Deayea", "Hussein Al-Sadiq", "Mohammed Al-Khilaiwi", "Ahmad Jamil Madani", "Abdullah Zubromawi", "Awad Al-Anazi", "Saleh Al-Dawod", "Fuad Anwar Amin", "Fahad Al-Bishi", "Talal Jebreen", "Hamzah Saleh", "Saeed Al-Owairan", "Majed Abdullah", "Sami Al-Jaber", "Hamzah Idris", "Fahad Al-Mehallel"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        stickers.push({ code: String(currentCode++), name: `${t.name} Team Photo` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    return {
        id: 'wc1994',
        year: 1994,
        title: 'USA 94',
        subtitle: 'United States • 24 Teams • 444 Stickers',
        dbKey: 'panini1994',
        isSequential: true,
        totalStickers: 444,
        phase: 'Phase 2 (1990–2006)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 3. WC 1998: France 98 (561 stickers)
// -----------------------------------------------------------------------------
function buildWc1998() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-17)
    const specials = [
        "FIFA World Cup Trophy",
        "Official France 98 Emblem",
        "Footix (Official Mascot)",
        "Official Match Ball (Tricolore)",
        "Stade de France (Saint-Denis)",
        "Parc des Princes (Paris)",
        "Stade Vélodrome (Marseille)",
        "Stade de Gerland (Lyon)",
        "Stade Félix-Bollaert (Lens)",
        "Stade de la Beaujoire (Nantes)",
        "Stade Chaban-Delmas (Bordeaux)",
        "Stadium de Toulouse",
        "Stade Geoffroy-Guichard (Saint-Étienne)",
        "Stade de la Mosson (Montpellier)",
        "Official Poster France 98",
        "Tournament Roll of Honour (1930-1966)",
        "Tournament Roll of Honour (1970-1994)"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Trophy, Mascot & Stadiums",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    // 32 Teams, 17 stickers each (1 badge + 16 players) = 544 stickers. 17 + 544 = 561.
    const teamsData = [
        // Group A
        { group: "Group A", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Claudio Taffarel", "Cafu", "Aldair", "Junior Baiano", "Roberto Carlos", "Dunga", "Cesar Sampaio", "Leonardo", "Rivaldo", "Ronaldo", "Bebeto", "Denilson", "Ze Roberto", "Giovanni", "Edmundo", "Dida"] },
        { group: "Group A", code: "SCO", name: "Scotland", flags: ["gb-sct"],
          players: ["Jim Leighton", "Colin Hendry", "Tom Boyd", "Christian Dailly", "David Weir", "Craig Burley", "Paul Lambert", "John Collins", "Scot Gemmill", "Darren Jackson", "Kevin Gallacher", "Gordon Durie", "Ally McCoist", "Simon Donnelly", "Neil Sullivan", "Tosh McKinlay"] },
        { group: "Group A", code: "MAR", name: "Morocco", flags: ["ma"],
          players: ["Abdelkader El Brazi", "Abdelilah Saber", "Noureddine Naybet", "Smahi Triki", "Abdelkrim El Hadrioui", "Tahar El Khalej", "Said Chiba", "Mustapha Hadji", "Youssef Chippo", "Salaheddine Bassir", "Abdeljalil Hadda Camacho", "Rachid Daoudi", "Gharib Amzine", "Ali El Khattabi", "Jamal Sellami", "Mustapha Chadili"] },
        { group: "Group A", code: "NOR", name: "Norway", flags: ["no"],
          players: ["Frode Grodas", "Henning Berg", "Ronny Johnsen", "Dan Eggen", "Stig Inge Bjornebye", "Oyvind Leonhardsen", "Kjetil Rekdal", "Erik Mykland", "Roar Strand", "Havard Flo", "Tore Andre Flo", "Ole Gunnar Solskjaer", "Jahn Ivar Jakobsen", "Vidar Riseth", "Egil Ostenstad", "Thomas Myhre"] },

        // Group B
        { group: "Group B", code: "ITA", name: "Italy", flags: ["it"],
          players: ["Gianluca Pagliuca", "Giuseppe Bergomi", "Paolo Maldini", "Fabio Cannavaro", "Alessandro Nesta", "Alessandro Costacurta", "Demetrio Albertini", "Dino Baggio", "Luigi Di Biagio", "Francesco Moriero", "Roberto Baggio", "Alessandro Del Piero", "Christian Vieri", "Filippo Inzaghi", "Enrico Chiesa", "Angelo Peruzzi"] },
        { group: "Group B", code: "CHI", name: "Chile", flags: ["cl"],
          players: ["Nelson Tapia", "Ronald Fuentes", "Pedro Reyes", "Javier Margas", "Moises Villarroel", "Francisco Rojas", "Nelson Parraguez", "Clarence Acuna", "Jose Luis Sierra", "Marcelo Salas", "Ivan Zamorano", "Fabian Estay", "Jose Luis Sanchez", "Marcelo Vega", "Manuel Neira", "Marcelo Ramirez"] },
        { group: "Group B", code: "CMR", name: "Cameroon", flags: ["cm"],
          players: ["Jacques Songo'o", "Rigobert Song", "Raymond Kalla", "Pierre Wome", "Pierre Njanka", "Geremi Njitap", "Salomon Olembe", "Didier Angibeaud", "Augustine Simo", "Joseph-Desire Job", "Francois Omam-Biyik", "Patrick Mboma", "Samuel Eto'o", "Alphonse Tchami", "Marcel Mahouve", "Alioum Boukar"] },
        { group: "Group B", code: "AUT", name: "Austria", flags: ["at"],
          players: ["Michael Konsel", "Peter Schöttel", "Anton Pfeffer", "Wolfgang Feiersinger", "Markus Schopp", "Dietmar Kühbauer", "Andreas Herzog", "Roman Mählich", "Harald Cerny", "Toni Polster", "Ivica Vastic", "Heimo Pfeifenberger", "Peter Wetl", "Hannes Reinmayr", "Mario Haas", "Franz Wohlfahrt"] },

        // Group C
        { group: "Group C", code: "FRA", name: "France", flags: ["fr"],
          players: ["Fabien Barthez", "Lilian Thuram", "Marcel Desailly", "Laurent Blanc", "Bixente Lizarazu", "Didier Deschamps", "Emmanuel Petit", "Christian Karembeu", "Zinedine Zidane", "Youri Djorkaeff", "Stephane Guivarc'h", "Thierry Henry", "David Trezeguet", "Robert Pires", "Christophe Dugarry", "Bernard Lama"] },
        { group: "Group C", code: "RSA", name: "South Africa", flags: ["za"],
          players: ["Hans Vonk", "Mark Fish", "Lucas Radebe", "Pierre Issa", "David Nyathi", "John Moshoeu", "Quinton Fortune", "Helman Mkhalele", "Doctor Khumalo", "Shaun Bartlett", "Benni McCarthy", "Philemon Masinga", "Brendan Augustine", "Delron Buckley", "Alfred Phiri", "Andre Arendse"] },
        { group: "Group C", code: "KSA", name: "Saudi Arabia", flags: ["sa"],
          players: ["Mohamed Al-Deayea", "Mohammed Al-Jahani", "Mohammed Al-Khilaiwi", "Abdullah Zubromawi", "Hussein Abdulghani", "Fuad Anwar Amin", "Khamis Al-Owairan", "Ibrahim Al-Shahrani", "Nawaf Al-Temyat", "Saeed Al-Owairan", "Sami Al-Jaber", "Fahad Al-Mehallel", "Hamzah Saleh", "Yousuf Al-Thunayan", "Obeid Al-Dosari", "Hussein Al-Sadiq"] },
        { group: "Group C", code: "DEN", name: "Denmark", flags: ["dk"],
          players: ["Peter Schmeichel", "Marc Rieper", "Jes Hogh", "Soren Colding", "Jan Heintze", "Thomas Helveg", "Allan Nielsen", "Michael Laudrup", "Brian Laudrup", "Martin Jorgensen", "Ebbe Sand", "Peter Moller", "Miklos Molnar", "Morten Wieghorst", "Stig Tofting", "Mogens Krogh"] },

        // Group D
        { group: "Group D", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Andoni Zubizarreta", "Albert Ferrer", "Rafael Alkorta", "Miguel Angel Nadal", "Sergi Barjuan", "Fernando Hierro", "Luis Enrique", "Guillermo Amor", "Josep Guardiola", "Raul Gonzalez", "Fernando Morientes", "Kiko Narvaez", "Alfonso Perez", "Julen Guerrero", "Joseba Etxeberria", "Santiago Canizares"] },
        { group: "Group D", code: "NGA", name: "Nigeria", flags: ["ng"],
          players: ["Peter Rufai", "Mobi Oparaku", "Taribo West", "Uche Okechukwu", "Celestine Babayaro", "Sunday Oliseh", "Mutiu Adepoju", "Finidi George", "Jay-Jay Okocha", "Nwankwo Kanu", "Victor Ikpeba", "Daniel Amokachi", "Tijani Babangida", "Rashidi Yekini", "Garba Lawal", "Willy Okpara"] },
        { group: "Group D", code: "PAR", name: "Paraguay", flags: ["py"],
          players: ["Jose Luis Chilavert", "Francisco Arce", "Carlos Gamarra", "Celso Ayala", "Pedro Sarabia", "Julio Cesar Enciso", "Roberto Acuna", "Carlos Paredes", "Denis Caniza", "Jose Cardozo", "Miguel Angel Benitez", "Hugo Brizuela", "Cesar Ramirez", "Aristides Rojas", "Julio Cesar Yegros", "Ruben Ruiz Diaz"] },
        { group: "Group D", code: "BUL", name: "Bulgaria", flags: ["bg"],
          players: ["Zdravko Zdravkov", "Radostin Kishishev", "Trifon Ivanov", "Petar Hubchev", "Ivaylo Petkov", "Zlatko Yankov", "Ivaylo Yordanov", "Krasimir Balakov", "Ilian Iliev", "Hristo Stoichkov", "Emil Kostadinov", "Luboslav Penev", "Georgi Ivanov", "Daniel Borimirov", "Marian Hristov", "Borislav Mikhailov"] },

        // Group E
        { group: "Group E", code: "NED", name: "Netherlands", flags: ["nl"],
          players: ["Edwin van der Sar", "Michael Reiziger", "Jaap Stam", "Frank de Boer", "Arthur Numan", "Wim Jonk", "Clarence Seedorf", "Edgar Davids", "Ronald de Boer", "Dennis Bergkamp", "Patrick Kluivert", "Marc Overmars", "Boudewijn Zenden", "Pierre van Hooijdonk", "Phillip Cocu", "Ed de Goey"] },
        { group: "Group E", code: "BEL", name: "Belgium", flags: ["be"],
          players: ["Filip De Wilde", "Bertrand Crasson", "Lorenzo Staelens", "Gordan Vidovic", "Vital Borkelmans", "Franky Van der Elst", "Enzo Scifo", "Marc Wilmots", "Danny Boffin", "Luc Nilis", "Luis Oliveira", "Gert Verheyen", "Mbo Mpenza", "Emile Mpenza", "Philippe Clement", "Dany Verlinden"] },
        { group: "Group E", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Kim Byung-ji", "Choi Sung-yong", "Hong Myung-bo", "Lee Min-sung", "Kim Tae-young", "Yoo Sang-chul", "Ha Seok-ju", "Lee Sang-yoon", "Noh Jung-yoon", "Choi Yong-soo", "Seo Jung-won", "Hwang Sun-hong", "Ko Jeong-woon", "Lee Dong-gook", "Kim Do-hoon", "Seo Dong-myung"] },
        { group: "Group E", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Jorge Campos", "Claudio Suarez", "Duilio Davino", "Pavel Pardo", "Salvador Carmona", "Alberto Garcia Aspe", "Marcelino Bernal", "Ramon Ramirez", "Jaime Ordiales", "Cuauhtemoc Blanco", "Luis Hernandez", "Francisco Palencia", "Ricardo Pelaez", "Jesus Arellano", "German Villa", "Oswaldo Sanchez"] },

        // Group F
        { group: "Group F", code: "GER", name: "Germany", flags: ["de"],
          players: ["Andreas Kopke", "Christian Worns", "Lothar Matthaus", "Jurgen Kohler", "Jorg Heinrich", "Michael Tarnat", "Dietmar Hamann", "Jens Jeremies", "Thomas Hassler", "Andreas Moller", "Jurgen Klinsmann", "Oliver Bierhoff", "Ulf Kirsten", "Olaf Marschall", "Stefan Reuter", "Oliver Kahn"] },
        { group: "Group F", code: "USA", name: "United States", flags: ["us"],
          players: ["Kasey Keller", "Thomas Dooley", "Eddie Pope", "David Regis", "Mike Burns", "Earnie Stewart", "Brian Maisonneuve", "Claudio Reyna", "Cobi Jones", "Eric Wynalda", "Brian McBride", "Roy Wegerle", "Preki Radosavljevic", "Joe-Max Moore", "Tab Ramos", "Brad Friedel"] },
        { group: "Group F", code: "YUG", name: "Yugoslavia", flags: ["rs"],
          players: ["Ivica Kralj", "Zoran Mirkovic", "Goran Djorovic", "Sinisa Mihajlovic", "Slobodan Komljenovic", "Slavisa Jokanovic", "Vladimir Jugovic", "Dragan Stojkovic", "Zeljko Petrovic", "Predrag Mijatovic", "Savo Milosevic", "Darko Kovacevic", "Dejan Savicevic", "Dejan Stankovic", "Perica Ognjenovic", "Dragoje Lekovic"] },
        { group: "Group F", code: "IRN", name: "Iran", flags: ["ir"],
          players: ["Ahmad Reza Abedzadeh", "Mohammad Khakpour", "Nader Mohammadkhani", "Javad Zarincheh", "Mehdi Pashazadeh", "Mehdi Mahdavikia", "Karim Bagheri", "Hamid Estili", "Mehrdad Minavand", "Ali Daei", "Khodadad Azizi", "Alireza Mansourian", "Sirous Dinmohammadi", "Sattar Hamedani", "Ali Latifi", "Nima Nakisa"] },

        // Group G
        { group: "Group G", code: "ROU", name: "Romania", flags: ["ro"],
          players: ["Bogdan Stelea", "Dan Petrescu", "Gheorghe Popescu", "Gheorghe Mihali", "Liviu Ciobotariu", "Dorinel Munteanu", "Constantin Galca", "Gheorghe Hagi", "Iulian Filipescu", "Adrian Ilie", "Viorel Moldovan", "Ilie Dumitrescu", "Gheorghe Craioveanu", "Lucian Marinescu", "Laurentiu Rosu", "Florin Prunea"] },
        { group: "Group G", code: "COL", name: "Colombia", flags: ["co"],
          players: ["Farid Mondragon", "Ivan Cordoba", "Jorge Bermudez", "Wilmer Cabrera", "Jose Fernando Santa", "Mauricio Serna", "Harold Lozano", "Carlos Valderrama", "Freddy Rincon", "Faustino Asprilla", "Adolfo Valencia", "Victor Aristizabal", "Hamilton Ricard", "Antony de Avila", "Leider Preciado", "Oscar Cordoba"] },
        { group: "Group G", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["David Seaman", "Gary Neville", "Tony Adams", "Sol Campbell", "Graeme Le Saux", "David Beckham", "Paul Ince", "David Batty", "Paul Scholes", "Darren Anderton", "Alan Shearer", "Michael Owen", "Teddy Sheringham", "Les Ferdinand", "Robbie Fowler", "Nigel Martyn"] },
        { group: "Group G", code: "TUN", name: "Tunisia", flags: ["tn"],
          players: ["Chokri El Ouaer", "Khaled Badra", "Ferid Chouchane", "Mounir Boukadida", "Tarek Thabet", "Hatem Trabelsi", "Zoubeir Baya", "Sirajeddine Chihi", "Skander Souayah", "Adel Sellimi", "Mehdi Ben Slimane", "Ziad Tlemcani", "Imed Ben Younes", "Kaies Ghodhbane", "Riadh Bouazizi", "Ali Boumnijel"] },

        // Group H
        { group: "Group H", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Carlos Roa", "Roberto Ayala", "Roberto Sensini", "Jose Chamot", "Javier Zanetti", "Matias Almeyda", "Diego Simeone", "Juan Sebastian Veron", "Ariel Ortega", "Gabriel Batistuta", "Claudio Lopez", "Hernan Crespo", "Marcelo Gallardo", "Mauricio Pineda", "Sergio Berti", "German Burgos"] },
        { group: "Group H", code: "JPN", name: "Japan", flags: ["jp"],
          players: ["Yoshikatsu Kawaguchi", "Eisuke Nakanishi", "Masami Ihara", "Norio Omura", "Yutaka Akita", "Naoki Soma", "Motohiro Yamaguchi", "Hiroshi Nanami", "Hidetoshi Nakata", "Shoji Jo", "Masashi Nakayama", "Wagner Lopes", "Shinji Ono", "Takashi Hirano", "Masayuki Okano", "Seigo Narazaki"] },
        { group: "Group H", code: "JAM", name: "Jamaica", flags: ["jm"],
          players: ["Warren Barrett", "Frank Sinclair", "Ian Goodison", "Linval Dixon", "Onandi Lowe", "Fitzroy Simpson", "Peter Cargill", "Theodore Whitmore", "Ricardo Gardner", "Deon Burton", "Paul Hall", "Marcus Gayle", "Robbie Earle", "Walter Boyd", "Andy Williams", "Aaron Lawrence"] },
        { group: "Group H", code: "CRO", name: "Croatia", flags: ["hr"],
          players: ["Drazen Ladic", "Slaven Bilic", "Igor Stimac", "Dario Simic", "Robert Jarni", "Mario Stanic", "Aljosa Asanovic", "Zvonimir Boban", "Robert Prosinecki", "Goran Vlaovic", "Davor Suker", "Krunoslav Jurcic", "Silvio Maric", "Ardian Kozniku", "Igor Tudor", "Marijan Mrmic"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    return {
        id: 'wc1998',
        year: 1998,
        title: 'France 98',
        subtitle: 'France • 32 Teams • 561 Stickers',
        dbKey: 'panini1998',
        isSequential: true,
        totalStickers: 561,
        phase: 'Phase 2 (1990–2006)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 4. WC 2002: Korea/Japan 2002 (576 stickers)
// -----------------------------------------------------------------------------
function buildWc2002() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-32)
    const specials = [
        "FIFA World Cup Trophy",
        "Official Korea/Japan 2002 Emblem",
        "The Spheriks: Kaz, Ato & Nik (Mascots)",
        "Official Match Ball (Fevernova)",
        "Seoul World Cup Stadium (Korea)",
        "Daegu World Cup Stadium (Korea)",
        "Busan Asiad Main Stadium (Korea)",
        "Incheon Munhak Stadium (Korea)",
        "Ulsan Munsu Stadium (Korea)",
        "Suwon World Cup Stadium (Korea)",
        "Gwangju World Cup Stadium (Korea)",
        "Jeonju World Cup Stadium (Korea)",
        "Jeju World Cup Stadium (Korea)",
        "Daejeon World Cup Stadium (Korea)",
        "International Stadium Yokohama (Japan)",
        "Saitama Stadium 2002 (Japan)",
        "Shizuoka Stadium Ecopa (Japan)",
        "Nagai Stadium Osaka (Japan)",
        "Miyagi Stadium (Japan)",
        "Oita Stadium (Japan)",
        "Niigata Stadium Big Swan (Japan)",
        "Kashima Soccer Stadium (Japan)",
        "Kobe Wing Stadium (Japan)",
        "Sapporo Dome (Japan)",
        "Official Poster Korea 2002",
        "Official Poster Japan 2002",
        "Roll of Honour: 1930 Uruguay & 1950 Uruguay",
        "Roll of Honour: 1958, 1962, 1970 & 1994 Brazil",
        "Roll of Honour: 1954, 1974 & 1990 Germany",
        "Roll of Honour: 1934 & 1938 & 1982 Italy",
        "Roll of Honour: 1978 & 1986 Argentina",
        "Roll of Honour: 1966 England & 1998 France"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Trophy, Mascots & 20 Stadiums",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    // 32 Teams, 17 stickers each (1 badge + 16 players) = 544 stickers. 32 + 544 = 576.
    const teamsData = [
        // Group A
        { group: "Group A", code: "FRA", name: "France", flags: ["fr"],
          players: ["Fabien Barthez", "Lilian Thuram", "Marcel Desailly", "Frank Leboeuf", "Bixente Lizarazu", "Patrick Vieira", "Emmanuel Petit", "Zinedine Zidane", "Claude Makelele", "Youri Djorkaeff", "Thierry Henry", "David Trezeguet", "Sylvain Wiltord", "Christophe Dugarry", "Willy Sagnol", "Gregory Coupet"] },
        { group: "Group A", code: "SEN", name: "Senegal", flags: ["sn"],
          players: ["Tony Sylva", "Ferdinand Coly", "Lamine Diatta", "Aliou Cisse", "Omar Daf", "Papa Bouba Diop", "Salif Diao", "Moussa N'Diaye", "Khalilou Fadiga", "El Hadji Diouf", "Henri Camara", "Pape Thiaw", "Souleymane Camara", "Amdy Faye", "Habib Beye", "Oumar Diallo"] },
        { group: "Group A", code: "URU", name: "Uruguay", flags: ["uy"],
          players: ["Fabian Carini", "Alejandro Lembo", "Paolo Montero", "Gonzalo Sorondo", "Gustavo Mendez", "Gianni Guigou", "Pablo Garcia", "Marcelo Romero", "Alvaro Recoba", "Diego Forlan", "Dario Silva", "Sebastian Abreu", "Richard Morales", "Mario Regueiro", "Federico Magallanes", "Gustavo Munua"] },
        { group: "Group A", code: "DEN", name: "Denmark", flags: ["dk"],
          players: ["Thomas Sorensen", "Thomas Helveg", "Martin Laursen", "Rene Henriksen", "Jan Heintze", "Stig Tofting", "Thomas Gravesen", "Christian Poulsen", "Jesper Gronkjaer", "Jon Dahl Tomasson", "Ebbe Sand", "Martin Jorgensen", "Dennis Rommedahl", "Niclas Jensen", "Jan Michaelsen", "Peter Kjaer"] },

        // Group B
        { group: "Group B", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Iker Casillas", "Carles Puyol", "Fernando Hierro", "Miguel Angel Nadal", "Juanfran Garcia", "Ruben Baraja", "David Albelda", "Juan Carlos Valeron", "Javier De Pedro", "Raul Gonzalez", "Fernando Morientes", "Joaquin Sanchez", "Diego Tristan", "Gaizka Mendieta", "Luis Enrique", "Ricardo Lopez"] },
        { group: "Group B", code: "SVN", name: "Slovenia", flags: ["si"],
          players: ["Marko Simeunovic", "Zeljko Milinovic", "Aleksander Knavs", "Marinko Galic", "Dzoni Novak", "Ales Ceh", "Miran Pavlin", "Zlatko Zahovic", "Milenko Acimovic", "Milan Osterc", "Sebastjan Cimirotic", "Sasa Gajser", "Nastja Ceh", "Mladen Rudonja", "Amir Karic", "Mladen Dabanovic"] },
        { group: "Group B", code: "PAR", name: "Paraguay", flags: ["py"],
          players: ["Jose Luis Chilavert", "Francisco Arce", "Carlos Gamarra", "Celso Ayala", "Denis Caniza", "Julio Cesar Caceres", "Roberto Acuna", "Carlos Paredes", "Guido Alvarenga", "Roque Santa Cruz", "Jose Cardozo", "Nelson Cuevas", "Jorge Campos", "Estanislao Struway", "Richart Baez", "Ricardo Tavarelli"] },
        { group: "Group B", code: "RSA", name: "South Africa", flags: ["za"],
          players: ["Andre Arendse", "Cyril Nzama", "Aaron Mokoena", "Lucas Radebe", "Bradley Carnell", "MacBeth Sibaya", "Teboho Mokoena", "Quinton Fortune", "Jabu Pule", "Benni McCarthy", "Sibusiso Zuma", "George Koumantarakis", "Thabo Mngomeni", "Delron Buckley", "Steven Pienaar", "Hans Vonk"] },

        // Group C
        { group: "Group C", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Marcos", "Cafu", "Lucio", "Roque Junior", "Edmilson", "Roberto Carlos", "Gilberto Silva", "Kleberson", "Ronaldinho", "Rivaldo", "Ronaldo", "Kaka", "Denilson", "Vampeta", "Juninho Paulista", "Dida"] },
        { group: "Group C", code: "TUR", name: "Turkey", flags: ["tr"],
          players: ["Rüştü Reçber", "Fatih Akyel", "Alpay Özalan", "Bülent Korkmaz", "Hakan Ünsal", "Ümit Davala", "Tugay Kerimoğlu", "Emre Belözoğlu", "Yıldıray Baştürk", "Hasan Şaş", "Hakan Şükür", "İlhan Mansız", "Nihat Kahveci", "Arif Erdem", "Tayfur Havutçu", "Ömer Çatkıç"] },
        { group: "Group C", code: "CHN", name: "China", flags: ["cn"],
          players: ["Jiang Jin", "Sun Jihai", "Fan Zhiyi", "Li Weifeng", "Wu Chengying", "Li Tie", "Li Xiaopeng", "Ma Mingyu", "Qi Hong", "Hao Haidong", "Yang Chen", "Qu Bo", "Yu Genwei", "Shao Jiayi", "Du Wei", "Ou Chuliang"] },
        { group: "Group C", code: "CRC", name: "Costa Rica", flags: ["cr"],
          players: ["Erick Lonnis", "Luis Marin", "Mauricio Wright", "Gilberto Martinez", "Carlos Castro", "Mauricio Solis", "Walter Centeno", "Wilmer Lopez", "Hernan Medford", "Rolando Fonseca", "Paulo Wanchope", "Ronald Gomez", "Winston Parks", "Steven Bryce", "Jervis Drummond", "Alvaro Mesen"] },

        // Group D
        { group: "Group D", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Lee Woon-jae", "Song Chong-gug", "Hong Myung-bo", "Kim Tae-young", "Lee Young-pyo", "Yoo Sang-chul", "Kim Nam-il", "Park Ji-sung", "Ahn Jung-hwan", "Seol Ki-hyeon", "Hwang Sun-hong", "Cha Du-ri", "Lee Eul-yong", "Choi Yong-soo", "Lee Chun-soo", "Kim Byung-ji"] },
        { group: "Group D", code: "POL", name: "Poland", flags: ["pl"],
          players: ["Jerzy Dudek", "Tomasz Waldoch", "Jacek Bak", "Michal Zewlakow", "Tomasz Hajto", "Radoslaw Kaluzny", "Piotr Swierczewski", "Jacek Krzynowek", "Marek Kozminski", "Emmanuel Olisadebe", "Maciej Zurawski", "Pawel Kryszalowicz", "Marcin Zewlakow", "Cezary Kucharski", "Arkadiusz Bak", "Radoslaw Majdan"] },
        { group: "Group D", code: "USA", name: "United States", flags: ["us"],
          players: ["Brad Friedel", "Tony Sanneh", "Eddie Pope", "Gregg Berhalter", "Frankie Hejduk", "John O'Brien", "Pablo Mastroeni", "Claudio Reyna", "Earnie Stewart", "Landon Donovan", "Brian McBride", "Clint Mathis", "Cobi Jones", "Joe-Max Moore", "DaMarcus Beasley", "Kasey Keller"] },
        { group: "Group D", code: "POR", name: "Portugal", flags: ["pt"],
          players: ["Vitor Baia", "Beto", "Fernando Couto", "Jorge Costa", "Rui Jorge", "Petit", "Armando Petit", "Rui Costa", "Luis Figo", "Sergio Conceicao", "Pauleta", "Joao Pinto", "Nuno Gomes", "Capucho", "Hugo Viana", "Ricardo Pereira"] },

        // Group E
        { group: "Group E", code: "GER", name: "Germany", flags: ["de"],
          players: ["Oliver Kahn", "Thomas Linke", "Carsten Ramelow", "Christoph Metzelder", "Torsten Frings", "Dietmar Hamann", "Michael Ballack", "Bernd Schneider", "Christian Ziege", "Miroslav Klose", "Carsten Jancker", "Oliver Neuville", "Marco Bode", "Gerald Asamoah", "Sebastian Kehl", "Jens Lehmann"] },
        { group: "Group E", code: "KSA", name: "Saudi Arabia", flags: ["sa"],
          players: ["Mohamed Al-Deayea", "Ahmed Dokhi", "Redha Tukar", "Abdullah Zubromawi", "Hussein Abdulghani", "Khamis Al-Dosari", "Ibrahim Al-Shahrani", "Nawaf Al-Temyat", "Mohammed Noor", "Sami Al-Jaber", "Al Hasan Al-Yami", "Abdullah Al-Jamaan", "Obeid Al-Dosari", "Fouzi Al-Shehri", "Mansour Al-Thagafi", "Mabrouk Zaid"] },
        { group: "Group E", code: "IRL", name: "Republic of Ireland", flags: ["ie"],
          players: ["Shay Given", "Gary Kelly", "Gary Breen", "Steve Staunton", "Ian Harte", "Steve Finnan", "Matt Holland", "Mark Kinsella", "Kevin Kilbane", "Damien Duff", "Robbie Keane", "Niall Quinn", "David Connolly", "Jason McAteer", "Lee Carsley", "Dean Kiely"] },
        { group: "Group E", code: "CMR", name: "Cameroon", flags: ["cm"],
          players: ["Alioum Boukar", "Geremi Njitap", "Rigobert Song", "Raymond Kalla", "Pierre Wome", "Bill Tchato", "Lauren Etame Mayer", "Marc-Vivien Foe", "Salomon Olembe", "Samuel Eto'o", "Patrick Mboma", "Pius Ndiefi", "Joseph-Desire Job", "Eric Djemba-Djemba", "Lucien Mettomo", "Jacques Songo'o"] },

        // Group F
        { group: "Group F", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Pablo Cavallero", "Mauricio Pochettino", "Walter Samuel", "Jose Chamot", "Javier Zanetti", "Diego Simeone", "Juan Sebastian Veron", "Kily Gonzalez", "Ariel Ortega", "Gabriel Batistuta", "Claudio Lopez", "Hernan Crespo", "Pablo Aimar", "Marcelo Gallardo", "Gustavo Lopez", "German Burgos"] },
        { group: "Group F", code: "NGA", name: "Nigeria", flags: ["ng"],
          players: ["Vincent Enyeama", "Efe Sodje", "Isaac Okoronkwo", "Taribo West", "Celestine Babayaro", "Joseph Yobo", "Justice Christopher", "Jay-Jay Okocha", "Garba Lawal", "Julius Aghahowa", "Nwankwo Kanu", "Bartholomew Ogbeche", "Pius Ikedia", "Benedict Akwuegbu", "Femi Opabunmi", "Ike Shorunmu"] },
        { group: "Group F", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["David Seaman", "Danny Mills", "Rio Ferdinand", "Sol Campbell", "Ashley Cole", "David Beckham", "Paul Scholes", "Nicky Butt", "Trevor Sinclair", "Michael Owen", "Emile Heskey", "Teddy Sheringham", "Robbie Fowler", "Kieron Dyer", "Joe Cole", "Nigel Martyn"] },
        { group: "Group F", code: "SWE", name: "Sweden", flags: ["se"],
          players: ["Magnus Hedman", "Olof Mellberg", "Patrik Andersson", "Andreas Jakobsson", "Teddy Lucic", "Tobias Linderoth", "Niclas Alexandersson", "Anders Svensson", "Freddie Ljungberg", "Henrik Larsson", "Marcus Allback", "Zlatan Ibrahimovic", "Magnus Svensson", "Mattias Jonson", "Daniel Andersson", "Magnus Kihlstedt"] },

        // Group G
        { group: "Group G", code: "ITA", name: "Italy", flags: ["it"],
          players: ["Gianluigi Buffon", "Christian Panucci", "Alessandro Nesta", "Fabio Cannavaro", "Paolo Maldini", "Gianluca Zambrotta", "Damiano Tommasi", "Cristiano Zanetti", "Francesco Totti", "Christian Vieri", "Alessandro Del Piero", "Filippo Inzaghi", "Gennaro Gattuso", "Vincenzo Montella", "Cristiano Doni", "Francesco Toldo"] },
        { group: "Group G", code: "ECU", name: "Ecuador", flags: ["ec"],
          players: ["Jose Francisco Cevallos", "Ulises de la Cruz", "Ivan Hurtado", "Augusto Poroso", "Raul Guerron", "Edwin Tenorio", "Alfonso Obregon", "Cleber Chala", "Alex Aguinaga", "Agustin Delgado", "Ivan Kaviedes", "Carlos Tenorio", "Marlon Ayovi", "Walter Ayovi", "Angel Fernandez", "Geovanny Ibarra"] },
        { group: "Group G", code: "CRO", name: "Croatia", flags: ["hr"],
          players: ["Stipe Pletikosa", "Dario Simic", "Robert Kovac", "Josip Simunic", "Robert Jarni", "Stjepan Tomas", "Zvonimir Soldo", "Niko Kovac", "Milan Rapaic", "Davor Suker", "Alen Boksic", "Ivica Olic", "Robert Prosinecki", "Goran Vlaovic", "Mario Stanic", "Tomislav Butina"] },
        { group: "Group G", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Oscar Perez", "Salvador Carmona", "Rafael Marquez", "Manuel Vidrio", "Ramon Morales", "Gerardo Torrado", "Johan Rodriguez", "Braulio Luna", "Jesus Arellano", "Jared Borgetti", "Cuauhtemoc Blanco", "Francisco Palencia", "Luis Hernandez", "Alberto Garcia Aspe", "Sigifredo Mercado", "Oswaldo Sanchez"] },

        // Group H
        { group: "Group H", code: "JPN", name: "Japan", flags: ["jp"],
          players: ["Yoshikatsu Kawaguchi", "Naoki Matsuda", "Ryuzo Morioka", "Koji Nakata", "Tsuneyasu Miyamoto", "Tomokazu Myojin", "Kazuyuki Toda", "Junichi Inamoto", "Hidetoshi Nakata", "Shinji Ono", "Takayuki Suzuki", "Atsushi Yanagisawa", "Hiroaki Morishima", "Masashi Nakayama", "Daisuke Ichikawa", "Seigo Narazaki"] },
        { group: "Group H", code: "BEL", name: "Belgium", flags: ["be"],
          players: ["Geert De Vlieger", "Jacky Peeters", "Daniel Van Buyten", "Eric Van Meir", "Nico Van Kerckhoven", "Timmy Simons", "Yves Vanderhaeghe", "Johan Walem", "Bart Goor", "Marc Wilmots", "Gert Verheyen", "Mbo Mpenza", "Wesley Sonck", "Peter Van Der Heyden", "Sven Vermant", "Frederic Herpoel"] },
        { group: "Group H", code: "RUS", name: "Russia", flags: ["ru"],
          players: ["Ruslan Nigmatullin", "Yuri Kovtun", "Viktor Onopko", "Yuri Nikiforov", "Gennady Nizhegorodov", "Alexei Smertin", "Valery Karpin", "Egor Titov", "Marat Izmailov", "Vladimir Beschastnykh", "Ruslan Pimenov", "Dmitri Sychev", "Alexander Kerzhakov", "Dmitri Khokhlov", "Igor Semshov", "Stanislav Cherchesov"] },
        { group: "Group H", code: "TUN", name: "Tunisia", flags: ["tn"],
          players: ["Ali Boumnijel", "Hatem Trabelsi", "Khaled Badra", "Radhi Jaidi", "Raouf Bouzaiene", "Riadh Bouazizi", "Zoubeir Baya", "Kaies Ghodhbane", "Slim Ben Achour", "Ziad Jaziri", "Imed Mhedhebi", "Ali Zitouni", "Adel Sellimi", "Hassen Gabsi", "Mourad Melki", "Chokri El Ouaer"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    return {
        id: 'wc2002',
        year: 2002,
        title: 'Korea/Japan 2002',
        subtitle: 'Korea & Japan • 32 Teams • 576 Stickers',
        dbKey: 'panini2002',
        isSequential: true,
        totalStickers: 576,
        phase: 'Phase 2 (1990–2006)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 5. WC 2006: Germany 2006 (596 stickers)
// -----------------------------------------------------------------------------
function buildWc2006() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-19)
    const specials = [
        "FIFA World Cup Trophy",
        "Official Germany 2006 Emblem",
        "Goleo VI (Official Mascot)",
        "Pille the Talking Ball (Mascot)",
        "Official Match Ball (Teamgeist)",
        "Official Germany 2006 Poster",
        "FIFA Fair Play Emblem",
        "Olympiastadion Berlin",
        "Signal Iduna Park Dortmund",
        "Allianz Arena München",
        "Gottlieb-Daimler-Stadion Stuttgart",
        "Veltins-Arena Gelsenkirchen",
        "AOL Arena Hamburg",
        "Commerzbank-Arena Frankfurt",
        "RheinEnergieStadion Köln",
        "AWD-Arena Hannover",
        "Zentralstadion Leipzig",
        "Fritz-Walter-Stadion Kaiserslautern",
        "easyCredit-Stadion Nürnberg"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Trophy, Mascot & 12 Stadiums",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    // 32 Teams, 18 stickers each (1 badge, 1 team photo, 16 players) = 576 stickers. 19 + 576 = 595.
    const teamsData = [
        // Group A
        { group: "Group A", code: "GER", name: "Germany", flags: ["de"],
          players: ["Jens Lehmann", "Arne Friedrich", "Per Mertesacker", "Christoph Metzelder", "Philipp Lahm", "Bernd Schneider", "Torsten Frings", "Michael Ballack", "Bastian Schweinsteiger", "Miroslav Klose", "Lukas Podolski", "Oliver Neuville", "Gerald Asamoah", "Tim Borowski", "David Odonkor", "Oliver Kahn"] },
        { group: "Group A", code: "CRC", name: "Costa Rica", flags: ["cr"],
          players: ["Jose Porras", "Luis Marin", "Michael Umana", "Gilberto Martinez", "Leonardo Gonzalez", "Mauricio Solis", "Walter Centeno", "Danny Fonseca", "Ronald Gomez", "Paulo Wanchope", "Christian Bolanos", "Alvaro Saborio", "Kurt Bernard", "Randall Azofeifa", "Carlos Johnson", "Wardy Alfaro"] },
        { group: "Group A", code: "POL", name: "Poland", flags: ["pl"],
          players: ["Artur Boruc", "Marcin Baszczynski", "Jacek Bak", "Mariusz Jop", "Michal Zewlakow", "Radoslaw Sobolewski", "Jacek Krzynowek", "Miroslaw Szymkowiak", "Kamil Kosowski", "Maciej Zurawski", "Euzebiusz Smolarek", "Grzegorz Rasiak", "Ireneusz Jelen", "Arkadiusz Radomski", "Dariusz Dudka", "Tomasz Kuszczak"] },
        { group: "Group A", code: "ECU", name: "Ecuador", flags: ["ec"],
          players: ["Cristian Mora", "Ulises de la Cruz", "Ivan Hurtado", "Giovanny Espinoza", "Neicer Reasco", "Edwin Tenorio", "Segundo Castillo", "Edison Mendez", "Luis Antonio Valencia", "Agustin Delgado", "Carlos Tenorio", "Ivan Kaviedes", "Cristian Lara", "Patricio Urrutia", "Paul Ambrosi", "Edwin Villafuerte"] },

        // Group B
        { group: "Group B", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["Paul Robinson", "Gary Neville", "Rio Ferdinand", "John Terry", "Ashley Cole", "David Beckham", "Steven Gerrard", "Frank Lampard", "Joe Cole", "Wayne Rooney", "Michael Owen", "Peter Crouch", "Jamie Carragher", "Owen Hargreaves", "Aaron Lennon", "David James"] },
        { group: "Group B", code: "PAR", name: "Paraguay", flags: ["py"],
          players: ["Justo Villar", "Carlos Gamarra", "Julio Cesar Caceres", "Delio Toledo", "Denis Caniza", "Roberto Acuna", "Carlos Paredes", "Edgar Barreto", "Cristian Riveros", "Roque Santa Cruz", "Nelson Valdez", "Jose Cardozo", "Julio dos Santos", "Nelson Cuevas", "Salvador Cabanas", "Aldo Bobadilla"] },
        { group: "Group B", code: "TRI", name: "Trinidad and Tobago", flags: ["tt"],
          players: ["Shaka Hislop", "Brent Sancho", "Dennis Lawrence", "Cyd Gray", "Avery John", "Carlos Edwards", "Chris Birchall", "Aurtis Whitley", "Dwight Yorke", "Stern John", "Kenwyne Jones", "Russell Latapy", "Cornell Glen", "Silvio Spann", "Densill Theobald", "Kelvin Jack"] },
        { group: "Group B", code: "SWE", name: "Sweden", flags: ["se"],
          players: ["Andreas Isaksson", "Olof Mellberg", "Teddy Lucic", "Erik Edman", "Niclas Alexandersson", "Tobias Linderoth", "Christian Wilhelmsson", "Kim Kallstrom", "Freddie Ljungberg", "Zlatan Ibrahimovic", "Henrik Larsson", "Marcus Allback", "Mattias Jonson", "Anders Svensson", "Daniel Andersson", "John Alvbage"] },

        // Group C
        { group: "Group C", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Roberto Abbondanzieri", "Roberto Ayala", "Gabriel Heinze", "Juan Pablo Sorin", "Fabricio Coloccini", "Javier Mascherano", "Esteban Cambiasso", "Juan Roman Riquelme", "Maxi Rodriguez", "Hernan Crespo", "Javier Saviola", "Lionel Messi", "Carlos Tevez", "Pablo Aimar", "Lucho Gonzalez", "Leo Franco"] },
        { group: "Group C", code: "CIV", name: "Ivory Coast", flags: ["ci"],
          players: ["Jean-Jacques Tizie", "Emmanuel Eboue", "Kolo Toure", "Arthur Boka", "Blaise Kouassi", "Didier Zokora", "Yaya Toure", "Kanga Akale", "Bonaventure Kalou", "Didier Drogba", "Aruna Dindane", "Bakari Kone", "Arouna Kone", "Gilles Yapi Yapo", "Emerse Fae", "Boubacar Barry"] },
        { group: "Group C", code: "SCG", name: "Serbia and Montenegro", flags: ["rs"],
          players: ["Dragoslav Jevric", "Goran Gavrancic", "Nemanja Vidic", "Mladen Krstajic", "Ivica Dragutinovic", "Igor Duljaj", "Predrag Djordjevic", "Dejan Stankovic", "Ognjen Koroman", "Mateja Kezman", "Savo Milosevic", "Nikola Zigic", "Danijel Ljuboja", "Zvonimir Vukic", "Albert Nadj", "Oliver Kovacevic"] },
        { group: "Group C", code: "NED", name: "Netherlands", flags: ["nl"],
          players: ["Edwin van der Sar", "Jan Kromkamp", "Andre Ooijer", "Joris Mathijsen", "Giovanni van Bronckhorst", "Mark van Bommel", "Wesley Sneijder", "Phillip Cocu", "Arjen Robben", "Ruud van Nistelrooy", "Robin van Persie", "Dirk Kuyt", "Rafael van der Vaart", "John Heitinga", "Hedwiges Maduro", "Tim de Cler"] },

        // Group D
        { group: "Group D", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Oswaldo Sanchez", "Carlos Salcido", "Rafael Marquez", "Ricardo Osorio", "Mario Mendez", "Pavel Pardo", "Gerardo Torrado", "Zinha", "Ramon Morales", "Jared Borgetti", "Guillermo Franco", "Omar Bravo", "Francisco Fonseca", "Jesus Arellano", "Jose Antonio Castro", "Jose de Jesus Corona"] },
        { group: "Group D", code: "IRN", name: "Iran", flags: ["ir"],
          players: ["Ebrahim Mirzapour", "Yahya Golmohammadi", "Rahman Rezaei", "Hossein Kaebi", "Mohammad Nosrati", "Javad Nekounam", "Andranik Teymourian", "Mehdi Mahdavikia", "Ali Karimi", "Vahid Hashemian", "Ali Daei", "Ferydoon Zandi", "Arash Borhani", "Rasoul Khatibi", "Masoud Shojaei", "Hassan Roudbarian"] },
        { group: "Group D", code: "ANG", name: "Angola", flags: ["ao"],
          players: ["Joao Ricardo", "Loco", "Jamba", "Kali", "Delgado", "Andre Macanga", "Ze Kalanga", "Figueiredo", "Mendonca", "Akwa", "Mantorras", "Love", "Mateus", "Flavio Amado", "Miloy", "Mario Hipolito"] },
        { group: "Group D", code: "POR", name: "Portugal", flags: ["pt"],
          players: ["Ricardo Pereira", "Miguel Monteiro", "Ricardo Carvalho", "Fernando Meira", "Nuno Valente", "Costinha", "Maniche", "Deco", "Luis Figo", "Cristiano Ronaldo", "Pauleta", "Simao Sabrosa", "Tiago Mendes", "Petit", "Helder Postiga", "Quim Silva"] },

        // Group E
        { group: "Group E", code: "ITA", name: "Italy", flags: ["it"],
          players: ["Gianluigi Buffon", "Gianluca Zambrotta", "Fabio Cannavaro", "Alessandro Nesta", "Fabio Grosso", "Mauro Camoranesi", "Gennaro Gattuso", "Andrea Pirlo", "Simone Perrotta", "Francesco Totti", "Luca Toni", "Alessandro Del Piero", "Filippo Inzaghi", "Alberto Gilardino", "Marco Materazzi", "Angelo Peruzzi"] },
        { group: "Group E", code: "GHA", name: "Ghana", flags: ["gh"],
          players: ["Richard Kingson", "John Paintsil", "Samuel Kuffour", "John Mensah", "Emmanuel Pappoe", "Michael Essien", "Stephen Appiah", "Sulley Muntari", "Haminu Draman", "Asamoah Gyan", "Matthew Amoah", "Razak Pimpong", "Derek Boateng", "Otto Addo", "Alex Tachie-Mensah", "George Owu"] },
        { group: "Group E", code: "USA", name: "United States", flags: ["us"],
          players: ["Kasey Keller", "Steve Cherundolo", "Oguchi Onyewu", "Eddie Pope", "Eddie Lewis", "Pablo Mastroeni", "Claudio Reyna", "John O'Brien", "Bobby Convey", "Landon Donovan", "Brian McBride", "Clint Dempsey", "DaMarcus Beasley", "Eddie Johnson", "Jimmy Conrad", "Tim Howard"] },
        { group: "Group E", code: "CZE", name: "Czech Republic", flags: ["cz"],
          players: ["Petr Cech", "Zdenek Grygera", "Tomas Ujfalusi", "David Rozehnal", "Marek Jankulovski", "Karel Poborsky", "Tomas Rosicky", "Pavel Nedved", "Jan Polak", "Milan Baros", "Jan Koller", "Jiri Stajner", "Vratislav Lokvenc", "Jaroslav Plasil", "Libor Sionko", "Jaromir Blazek"] },

        // Group F
        { group: "Group F", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Dida", "Cafu", "Lucio", "Juan", "Roberto Carlos", "Emerson", "Ze Roberto", "Kaka", "Ronaldinho", "Adriano", "Ronaldo", "Robinho", "Juninho Pernambucano", "Gilberto Silva", "Cicinho", "Rogerio Ceni"] },
        { group: "Group F", code: "CRO", name: "Croatia", flags: ["hr"],
          players: ["Stipe Pletikosa", "Dario Simic", "Robert Kovac", "Josip Simunic", "Darijo Srna", "Igor Tudor", "Niko Kovac", "Marko Babic", "Niko Kranjcar", "Dado Prso", "Ivan Klasnic", "Ivica Olic", "Luka Modric", "Jerko Leko", "Ivan Bosnjak", "Tomislav Butina"] },
        { group: "Group F", code: "AUS", name: "Australia", flags: ["au"],
          players: ["Mark Schwarzer", "Brett Emerton", "Lucas Neill", "Craig Moore", "Scott Chipperfield", "Vince Grella", "Jason Culina", "Marco Bresciano", "Tim Cahill", "Harry Kewell", "Mark Viduka", "John Aloisi", "Archie Thompson", "Mile Sterjovski", "Luke Wilkshire", "Zeljko Kalac"] },
        { group: "Group F", code: "JPN", name: "Japan", flags: ["jp"],
          players: ["Yoshikatsu Kawaguchi", "Akira Kaji", "Tsuneyasu Miyamoto", "Yuji Nakazawa", "Alessandro Santos", "Takashi Fukunishi", "Hidetoshi Nakata", "Shunsuke Nakamura", "Mitsuo Ogasawara", "Naohiro Takahara", "Atsushi Yanagisawa", "Masashi Oguro", "Keisuke Tsuboi", "Shinji Ono", "Koji Nakata", "Seigo Narazaki"] },

        // Group G
        { group: "Group G", code: "FRA", name: "France", flags: ["fr"],
          players: ["Fabien Barthez", "Willy Sagnol", "Lilian Thuram", "William Gallas", "Eric Abidal", "Patrick Vieira", "Claude Makelele", "Zinedine Zidane", "Florent Malouda", "Thierry Henry", "Franck Ribery", "David Trezeguet", "Sylvain Wiltord", "Alou Diarra", "Vikash Dhorasoo", "Gregory Coupet"] },
        { group: "Group G", code: "SUI", name: "Switzerland", flags: ["ch"],
          players: ["Pascal Zuberbühler", "Philipp Degen", "Patrick Müller", "Philippe Senderos", "Ludovic Magnin", "Tranquillo Barnetta", "Johann Vogel", "Raphael Wicky", "Ricardo Cabanas", "Alexander Frei", "Marco Streller", "Johan Vonlanthen", "Valon Behrami", "Hakan Yakin", "David Degen", "Fabio Coltorti"] },
        { group: "Group G", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Lee Woon-jae", "Song Chong-gug", "Choi Jin-cheul", "Kim Young-chul", "Lee Young-pyo", "Lee Ho", "Kim Nam-il", "Park Ji-sung", "Lee Eul-yong", "Lee Chun-soo", "Cho Jae-jin", "Ahn Jung-hwan", "Park Chu-young", "Seol Ki-hyeon", "Kim Do-heon", "Kim Yong-dae"] },
        { group: "Group G", code: "TOG", name: "Togo", flags: ["tg"],
          players: ["Kossi Agassa", "Dare Nibombe", "Jean-Paul Abalo", "Ludovic Assemoassa", "Richmond Forson", "Alaixys Romao", "Kuami Agboh", "Cherif Toure Mamam", "Yao Aziawonou", "Emmanuel Adebayor", "Mohamed Kader", "Junior Senaya", "Thomas Dossevi", "Massamasso Tchangai", "Moustapha Salifou", "Nimini Tchagnirou"] },

        // Group H
        { group: "Group H", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Iker Casillas", "Sergio Ramos", "Carles Puyol", "Pablo Ibanez", "Mariano Pernia", "Marcos Senna", "Xavi Hernandez", "Xabi Alonso", "Cesc Fabregas", "Fernando Torres", "David Villa", "Raul Gonzalez", "Joaquin Sanchez", "Luis Garcia", "Andres Iniesta", "Santiago Canizares"] },
        { group: "Group H", code: "UKR", name: "Ukraine", flags: ["ua"],
          players: ["Oleksandr Shovkovskiy", "Oleg Gusev", "Andriy Rusol", "Vladyslav Vashchuk", "Andriy Nesmachniy", "Anatoliy Tymoshchuk", "Oleg Shelayev", "Serhiy Rebrov", "Maksym Kalynychenko", "Andriy Shevchenko", "Andriy Voronin", "Artem Milevskiy", "Andriy Vorobey", "Ruslan Rotan", "Serhiy Nazarenko", "Bohdan Shust"] },
        { group: "Group H", code: "TUN", name: "Tunisia", flags: ["tn"],
          players: ["Ali Boumnijel", "Hatem Trabelsi", "Radhi Jaidi", "Karim Haggui", "David Jemmali", "Riadh Bouazizi", "Jawhar Mnari", "Adel Chedli", "Kaies Ghodhbane", "Ziad Jaziri", "Francileudo Santos", "Yassine Chikhaoui", "Chaouki Ben Saada", "Hamed Namouchi", "Kais Zouaghi", "Hamdi Kasraoui"] },
        { group: "Group H", code: "KSA", name: "Saudi Arabia", flags: ["sa"],
          players: ["Mabrouk Zaid", "Ahmed Dokhi", "Redha Tukar", "Hamad Al-Montashari", "Hussein Abdulghani", "Saud Khariri", "Omar Al-Ghamdi", "Khaled Aziz", "Nawaf Al-Temyat", "Yasser Al-Qahtani", "Sami Al-Jaber", "Mohammed Noor", "Mohammad Al-Shalhoub", "Malek Mouath", "Abdulaziz Khathran", "Mohammad Khouja"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        stickers.push({ code: String(currentCode++), name: `${t.name} Team Photo` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    groups["Final & Celebration"] = [{
        code: "FINAL",
        name: "World Cup Roll of Honour & Celebration",
        stickers: [{
            code: String(currentCode++),
            name: "World Cup Roll of Honour & Celebration"
        }]
    }];

    return {
        id: 'wc2006',
        year: 2006,
        title: 'Germany 2006',
        subtitle: 'Germany • 32 Teams • 596 Stickers',
        dbKey: 'panini2006',
        isSequential: true,
        totalStickers: 596,
        phase: 'Phase 2 (1990–2006)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 6. WC 2010: South Africa 2010 (640 stickers)
// -----------------------------------------------------------------------------
function buildWc2010() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-32)
    const specials = [
        "FIFA World Cup Trophy",
        "Official 2010 Emblem",
        "Zakumi (Official Mascot)",
        "Jabulani (Official Match Ball)",
        "Soccer City Stadium (Johannesburg)",
        "Moses Mabhida Stadium (Durban)",
        "Cape Town Stadium",
        "Ellis Park Stadium (Johannesburg)",
        "Loftus Versfeld Stadium (Pretoria)",
        "Nelson Mandela Bay Stadium (Port Elizabeth)",
        "Peter Mokaba Stadium (Polokwane)",
        "Mbombela Stadium (Nelspruit)",
        "Free State Stadium (Bloemfontein)",
        "Royal Bafokeng Stadium (Rustenburg)",
        "Host City Poster: Johannesburg",
        "Host City Poster: Cape Town",
        "Host City Poster: Durban",
        "Host City Poster: Pretoria",
        "Host City Poster: Port Elizabeth",
        "Host City Poster: Polokwane",
        "Host City Poster: Nelspruit",
        "Host City Poster: Bloemfontein",
        "Host City Poster: Rustenburg",
        "FIFA Fair Play Emblem",
        "Roll of Honour: Uruguay 1930 & 1950",
        "Roll of Honour: Italy 1934, 1938, 1982, 2006",
        "Roll of Honour: Germany 1954, 1974, 1990",
        "Roll of Honour: Brazil 1958, 1962, 1970, 1994, 2002",
        "Roll of Honour: England 1966",
        "Roll of Honour: Argentina 1978 & 1986",
        "Roll of Honour: France 1998",
        "Panini 2010 Summary & Checklist"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Trophy, Mascot, 10 Stadiums & Posters",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    // 32 Teams, 19 stickers each (1 badge, 1 team photo, 17 players) = 608 stickers. 32 + 608 = 640.
    const teamsData = [
        // Group A
        { group: "Group A", code: "RSA", name: "South Africa", flags: ["za"],
          players: ["Itumeleng Khune", "Siboniso Gaxa", "Aaron Mokoena", "Bongani Khumalo", "Tsepo Masilela", "Kagisho Dikgacoi", "Steven Pienaar", "Siphiwe Tshabalala", "Reneilwe Letsholonyane", "Teko Modise", "Katlego Mphela", "Bernard Parker", "Surprise Moriri", "MacBeth Sibaya", "Anele Ngcongca", "Lucas Thwala", "Moeneeb Josephs"] },
        { group: "Group A", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Guillermo Ochoa", "Carlos Salcido", "Rafael Marquez", "Francisco Rodriguez", "Hector Moreno", "Paul Aguilar", "Gerardo Torrado", "Efrain Juarez", "Andres Guardado", "Giovani dos Santos", "Carlos Vela", "Guillermo Franco", "Javier Hernandez", "Cuauhtemoc Blanco", "Pablo Barrera", "Israel Castro", "Oscar Perez"] },
        { group: "Group A", code: "URU", name: "Uruguay", flags: ["uy"],
          players: ["Fernando Muslera", "Maxi Pereira", "Diego Lugano", "Diego Godin", "Martin Caceres", "Jorge Fucile", "Egidio Arevalo Rios", "Diego Perez", "Walter Gargano", "Alvaro Pereira", "Diego Forlan", "Luis Suarez", "Edinson Cavani", "Sebastian Abreu", "Nicolas Lodeiro", "Sebastian Fernandez", "Juan Castillo"] },
        { group: "Group A", code: "FRA", name: "France", flags: ["fr"],
          players: ["Hugo Lloris", "Bacary Sagna", "William Gallas", "Eric Abidal", "Patrice Evra", "Jeremy Toulalan", "Yoann Gourcuff", "Abou Diaby", "Florent Malouda", "Franck Ribery", "Nicolas Anelka", "Thierry Henry", "Sidney Govou", "Djibril Cisse", "Andre-Pierre Gignac", "Marc Planus", "Steve Mandanda"] },

        // Group B
        { group: "Group B", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Sergio Romero", "Jonas Gutierrez", "Martin Demichelis", "Walter Samuel", "Gabriel Heinze", "Nicolas Burdisso", "Javier Mascherano", "Juan Sebastian Veron", "Angel Di Maria", "Lionel Messi", "Gonzalo Higuain", "Carlos Tevez", "Sergio Aguero", "Diego Milito", "Maxi Rodriguez", "Javier Pastore", "Mariano Andujar"] },
        { group: "Group B", code: "NGA", name: "Nigeria", flags: ["ng"],
          players: ["Vincent Enyeama", "Chidi Odiah", "Joseph Yobo", "Danny Shittu", "Taye Taiwo", "Elderson Echiejile", "Dickson Etuhu", "Lukman Haruna", "Sani Kaita", "John Obi Mikel", "Peter Odemwingie", "Yakubu Aiyegbeni", "Obafemi Martins", "Victor Obinna", "Chinedu Obasi", "Nwankwo Kanu", "Austin Ejide"] },
        { group: "Group B", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Jung Sung-ryong", "Cha Du-ri", "Cho Yong-hyung", "Lee Jung-soo", "Lee Young-pyo", "Kim Jung-woo", "Ki Sung-yueng", "Lee Chung-yong", "Park Ji-sung", "Park Chu-young", "Yeom Ki-hun", "Lee Dong-gook", "Kim Bo-kyung", "Ahn Jung-hwan", "Oh Beom-seok", "Kim Dong-jin", "Lee Woon-jae"] },
        { group: "Group B", code: "GRE", name: "Greece", flags: ["gr"],
          players: ["Alexandros Tzorvas", "Loukas Vyntra", "Sotirios Kyrgiakos", "Vangelis Moras", "Vasilis Torosidis", "Avraam Papadopoulos", "Alexandros Tziolis", "Kostas Katsouranis", "Giorgos Karagounis", "Dimitris Salpingidis", "Theofanis Gekas", "Georgios Samaras", "Angelos Charisteas", "Pantelis Kapetanos", "Sotiris Ninis", "Christos Patsatzoglou", "Michalis Sifakis"] },

        // Group C
        { group: "Group C", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["Robert Green", "Glen Johnson", "John Terry", "Rio Ferdinand", "Ashley Cole", "Jamie Carragher", "Steven Gerrard", "Frank Lampard", "Gareth Barry", "Aaron Lennon", "Wayne Rooney", "Emile Heskey", "Peter Crouch", "Jermain Defoe", "Joe Cole", "James Milner", "David James"] },
        { group: "Group C", code: "USA", name: "United States", flags: ["us"],
          players: ["Tim Howard", "Steve Cherundolo", "Jay DeMerit", "Oguchi Onyewu", "Carlos Bocanegra", "Jonathan Spector", "Michael Bradley", "Ricardo Clark", "Clint Dempsey", "Landon Donovan", "Jozy Altidore", "Robbie Findley", "Edson Buddle", "Herculez Gomez", "Maurice Edu", "Benny Feilhaber", "Brad Guzan"] },
        { group: "Group C", code: "ALG", name: "Algeria", flags: ["dz"],
          players: ["Faouzi Chaouchi", "Madjid Bougherra", "Antar Yahia", "Rafik Halliche", "Nadir Belhadj", "Mehdi Lacen", "Hassan Yebda", "Karim Ziani", "Foued Kadir", "Karim Matmour", "Rafik Djebbour", "Abdelkader Ghezzal", "Djamel Abdoun", "Adlene Guedioura", "Ryad Boudebouz", "Habib Bellaid", "Rais M'Bolhi"] },
        { group: "Group C", code: "SVN", name: "Slovenia", flags: ["si"],
          players: ["Samir Handanovic", "Miso Brecko", "Marko Suler", "Bostjan Cesar", "Bojan Jokic", "Aleksandar Radosavljevic", "Robert Koren", "Valter Birsa", "Andraz Kirm", "Zlatko Dedic", "Milivoje Novakovic", "Tim Matavz", "Zlatan Ljubijankic", "Nejc Pecnik", "Rene Krhin", "Matej Mavric", "Jasmin Handanovic"] },

        // Group D
        { group: "Group D", code: "GER", name: "Germany", flags: ["de"],
          players: ["Manuel Neuer", "Philipp Lahm", "Per Mertesacker", "Arne Friedrich", "Jerome Boateng", "Holger Badstuber", "Sami Khedira", "Bastian Schweinsteiger", "Thomas Müller", "Mesut Özil", "Lukas Podolski", "Miroslav Klose", "Mario Gomez", "Cacau", "Toni Kroos", "Marko Marin", "Hans-Jörg Butt"] },
        { group: "Group D", code: "AUS", name: "Australia", flags: ["au"],
          players: ["Mark Schwarzer", "Luke Wilkshire", "Craig Moore", "Lucas Neill", "Scott Chipperfield", "David Carney", "Vince Grella", "Jason Culina", "Brett Emerton", "Tim Cahill", "Harry Kewell", "Josh Kennedy", "Mark Bresciano", "Brett Holman", "Richard Garcia", "Carl Valeri", "Adam Federici"] },
        { group: "Group D", code: "SRB", name: "Serbia", flags: ["rs"],
          players: ["Vladimir Stojkovic", "Branislav Ivanovic", "Nemanja Vidic", "Neven Subotic", "Aleksandar Kolarov", "Gojko Kacar", "Dejan Stankovic", "Nenad Milijas", "Milos Krasic", "Milan Jovanovic", "Nikola Zigic", "Marko Pantelic", "Danko Lazovic", "Zoran Tosic", "Zdravko Kuzmanovic", "Antonio Rukavina", "Bojan Isailovic"] },
        { group: "Group D", code: "GHA", name: "Ghana", flags: ["gh"],
          players: ["Richard Kingson", "John Paintsil", "John Mensah", "Isaac Vorsah", "Hans Sarpei", "Lee Addy", "Anthony Annan", "Kevin-Prince Boateng", "Kwadwo Asamoah", "Sulley Muntari", "Asamoah Gyan", "Prince Tagoe", "Dominic Adiyiah", "Matthew Amoah", "Stephen Appiah", "Andre Ayew", "Daniel Agyei"] },

        // Group E
        { group: "Group E", code: "NED", name: "Netherlands", flags: ["nl"],
          players: ["Maarten Stekelenburg", "Gregory van der Wiel", "John Heitinga", "Joris Mathijsen", "Giovanni van Bronckhorst", "Khalid Boulahrouz", "Mark van Bommel", "Nigel de Jong", "Wesley Sneijder", "Arjen Robben", "Dirk Kuyt", "Robin van Persie", "Rafael van der Vaart", "Klaas-Jan Huntelaar", "Eljero Elia", "Ibrahim Afellay", "Michel Vorm"] },
        { group: "Group E", code: "DEN", name: "Denmark", flags: ["dk"],
          players: ["Thomas Sorensen", "Lars Jacobsen", "Daniel Agger", "Simon Kjaer", "Simon Poulsen", "Per Kroldrup", "Christian Poulsen", "Daniel Jensen", "Martin Jorgensen", "Dennis Rommedahl", "Jon Dahl Tomasson", "Nicklas Bendtner", "Jesper Gronkjaer", "Christian Eriksen", "Jakob Poulsen", "Thomas Kahlenberg", "Jesper Christiansen"] },
        { group: "Group E", code: "JPN", name: "Japan", flags: ["jp"],
          players: ["Eiji Kawashima", "Yuichi Komano", "Yuji Nakazawa", "Marcus Tulio Tanaka", "Yuto Nagatomo", "Yuki Abe", "Yasuhito Endo", "Makoto Hasebe", "Daisuke Matsui", "Keisuke Honda", "Yoshito Okubo", "Shinji Okazaki", "Kengo Nakamura", "Shunsuke Nakamura", "Kisho Yano", "Atsuto Uchida", "Seigo Narazaki"] },
        { group: "Group E", code: "CMR", name: "Cameroon", flags: ["cm"],
          players: ["Souleymanou Hamidou", "Stephane Mbia", "Nicolas N'Koulou", "Sebastien Bassong", "Benoit Assou-Ekotto", "Rigobert Song", "Alexandre Song", "Eyong Enoh", "Jean Makoun", "Achille Emana", "Samuel Eto'o", "Pierre Webo", "Eric Maxim Choupo-Moting", "Mohammadou Idrissou", "Geremi Njitap", "Joel Matip", "Carlos Kameni"] },

        // Group F
        { group: "Group F", code: "ITA", name: "Italy", flags: ["it"],
          players: ["Gianluigi Buffon", "Gianluca Zambrotta", "Fabio Cannavaro", "Giorgio Chiellini", "Domenico Criscito", "Christian Maggio", "Daniele De Rossi", "Riccardo Montolivo", "Claudio Marchisio", "Andrea Pirlo", "Simone Pepe", "Alberto Gilardino", "Vincenzo Iaquinta", "Antonio Di Natale", "Fabio Quagliarella", "Giampaolo Pazzini", "Federico Marchetti"] },
        { group: "Group F", code: "PAR", name: "Paraguay", flags: ["py"],
          players: ["Justo Villar", "Carlos Bonet", "Paulo da Silva", "Antolin Alcaraz", "Claudio Morel", "Denis Caniza", "Enrique Vera", "Victor Caceres", "Cristian Riveros", "Jonathan Santana", "Nelson Valdez", "Roque Santa Cruz", "Lucas Barrios", "Oscar Cardozo", "Edgar Barreto", "Aureliano Torres", "Diego Barreto"] },
        { group: "Group F", code: "NZL", name: "New Zealand", flags: ["nz"],
          players: ["Mark Paston", "Winston Reid", "Ryan Nelsen", "Tommy Smith", "Tony Lochhead", "Ivan Vicelich", "Simon Elliott", "Leo Bertos", "Chris Killen", "Shane Smeltz", "Rory Fallon", "Chris Wood", "Jeremy Christie", "David Mulligan", "Andy Barron", "Ben Sigmund", "Glen Moss"] },
        { group: "Group F", code: "SVK", name: "Slovakia", flags: ["sk"],
          players: ["Jan Mucha", "Peter Pekarik", "Martin Skrtel", "Jan Durica", "Radoslav Zabavnik", "Zdeno Strba", "Juraj Kucka", "Marek Hamsik", "Vladimir Weiss", "Miroslav Stoch", "Robert Vittek", "Erik Jendrisek", "Stanislav Sestak", "Filip Holosko", "Marek Cech", "Kamil Kopunek", "Dusan Kuciak"] },

        // Group G
        { group: "Group G", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Julio Cesar", "Maicon", "Lucio", "Juan", "Michel Bastos", "Daniel Alves", "Gilberto Silva", "Felipe Melo", "Elano", "Kaka", "Robinho", "Luis Fabiano", "Nilmar", "Grafite", "Ramires", "Josue", "Gomes"] },
        { group: "Group G", code: "PRK", name: "North Korea", flags: ["kp"],
          players: ["Ri Myong-guk", "Cha Jong-hyok", "Pak Chol-jin", "Ri Jun-il", "Ri Kwang-chon", "Ji Yun-nam", "Mun In-guk", "An Yong-hak", "Pak Nam-chol", "Hong Yong-jo", "Jong Tae-se", "Kim Kum-il", "Choe Kum-chol", "Nam Song-chol", "Kim Yong-jun", "An Chol-hyok", "Kim Myong-gil"] },
        { group: "Group G", code: "CIV", name: "Ivory Coast", flags: ["ci"],
          players: ["Boubacar Barry", "Guy Demel", "Kolo Toure", "Didier Zokora", "Siaka Tiene", "Emmanuel Eboue", "Yaya Toure", "Cheick Tiote", "Romaric", "Gervinho", "Didier Drogba", "Salomon Kalou", "Aruna Dindane", "Bakari Kone", "Seydou Doumbia", "Kader Keita", "Daniel Yeboah"] },
        { group: "Group G", code: "POR", name: "Portugal", flags: ["pt"],
          players: ["Eduardo Carvalho", "Paulo Ferreira", "Ricardo Carvalho", "Bruno Alves", "Fabio Coentrao", "Pepe", "Pedro Mendes", "Raul Meireles", "Tiago Mendes", "Deco", "Cristiano Ronaldo", "Simao Sabrosa", "Hugo Almeida", "Liedson", "Danny", "Miguel Veloso", "Beto"] },

        // Group H
        { group: "Group H", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Iker Casillas", "Sergio Ramos", "Gerard Pique", "Carles Puyol", "Joan Capdevila", "Alvaro Arbeloa", "Sergio Busquets", "Xabi Alonso", "Xavi Hernandez", "Andres Iniesta", "David Silva", "David Villa", "Fernando Torres", "Pedro Rodriguez", "Cesc Fabregas", "Jesus Navas", "Pepe Reina"] },
        { group: "Group H", code: "SUI", name: "Switzerland", flags: ["ch"],
          players: ["Diego Benaglio", "Stephan Lichtsteiner", "Steve von Bergen", "Stephane Grichting", "Reto Ziegler", "Philippe Senderos", "Valon Behrami", "Gokhan Inler", "Benjamin Huggel", "Tranquillo Barnetta", "Gelson Fernandes", "Alexander Frei", "Blaise Nkufo", "Eren Derdiyok", "Hakan Yakin", "Xherdan Shaqiri", "Marco Wolfli"] },
        { group: "Group H", code: "HON", name: "Honduras", flags: ["hn"],
          players: ["Noel Valladares", "Sergio Mendoza", "Osman Chavez", "Maynor Figueroa", "Emilio Izaguirre", "Mauricio Sabillon", "Wilson Palacios", "Amado Guevara", "Hendry Thomas", "Ramon Nunez", "Danilo Turcios", "David Suazo", "Carlos Pavon", "Walter Martinez", "Edgard Alvarez", "Jerry Palacios", "Donis Escober"] },
        { group: "Group H", code: "CHI", name: "Chile", flags: ["cl"],
          players: ["Claudio Bravo", "Mauricio Isla", "Gary Medel", "Waldo Ponce", "Gonzalo Jara", "Arturo Vidal", "Carlos Carmona", "Marco Estrada", "Jorge Valdivia", "Matias Fernandez", "Alexis Sanchez", "Humberto Suazo", "Jean Beausejour", "Mark Gonzalez", "Esteban Paredes", "Fabian Orellana", "Miguel Pinto"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        stickers.push({ code: String(currentCode++), name: `${t.name} Team Photo` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    return {
        id: 'wc2010',
        year: 2010,
        title: 'South Africa 2010',
        subtitle: 'South Africa • 32 Teams • 640 Stickers',
        dbKey: 'panini2010',
        isSequential: true,
        totalStickers: 640,
        phase: 'Phase 3 (2010–2022)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 7. WC 2014: Brasil 2014 (640 stickers)
// -----------------------------------------------------------------------------
function buildWc2014() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-32)
    const specials = [
        "FIFA World Cup Trophy",
        "Official Brasil 2014 Emblem",
        "Fuleco (Official Mascot)",
        "Brazuca (Official Match Ball)",
        "Estádio do Maracanã (Rio de Janeiro)",
        "Arena de São Paulo",
        "Estádio Mineirão (Belo Horizonte)",
        "Estádio Nacional Mané Garrincha (Brasília)",
        "Estádio Castelão (Fortaleza)",
        "Arena Fonte Nova (Salvador)",
        "Estádio Beira-Rio (Porto Alegre)",
        "Arena Pernambuco (Recife)",
        "Arena da Amazônia (Manaus)",
        "Arena Pantanal (Cuiabá)",
        "Arena das Dunas (Natal)",
        "Arena da Baixada (Curitiba)",
        "Host City Poster: Rio de Janeiro",
        "Host City Poster: São Paulo",
        "Host City Poster: Belo Horizonte",
        "Host City Poster: Brasília",
        "Host City Poster: Fortaleza",
        "Host City Poster: Salvador",
        "Host City Poster: Porto Alegre",
        "Host City Poster: Recife",
        "Host City Poster: Manaus",
        "Host City Poster: Cuiabá",
        "Host City Poster: Natal",
        "Host City Poster: Curitiba",
        "FIFA Fair Play Emblem",
        "Official Brasil 2014 Poster",
        "Roll of Honour: World Champions (1930-1970)",
        "Roll of Honour: World Champions (1974-2010)"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Trophy, Mascot, 12 Stadiums & Posters",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    // 32 Teams, 19 stickers each (1 badge, 1 team photo, 17 players) = 608 stickers. 32 + 608 = 640.
    const teamsData = [
        // Group A
        { group: "Group A", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Julio Cesar", "Daniel Alves", "Thiago Silva", "David Luiz", "Marcelo", "Dante", "Luiz Gustavo", "Paulinho", "Fernandinho", "Oscar", "Willian", "Neymar Jr", "Hulk", "Fred", "Bernard", "Ramires", "Jefferson"] },
        { group: "Group A", code: "CRO", name: "Croatia", flags: ["hr"],
          players: ["Stipe Pletikosa", "Darijo Srna", "Vedran Corluka", "Dejan Lovren", "Danijel Pranjic", "Sime Vrsaljko", "Ivan Rakitic", "Luka Modric", "Mateo Kovacic", "Ivan Perisic", "Ivica Olic", "Mario Mandzukic", "Eduardo da Silva", "Ante Rebic", "Marcelo Brozovic", "Gordon Schildenfeld", "Danijel Subasic"] },
        { group: "Group A", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Guillermo Ochoa", "Paul Aguilar", "Francisco Rodriguez", "Rafael Marquez", "Hector Moreno", "Miguel Layun", "Jose Juan Vazquez", "Hector Herrera", "Andres Guardado", "Carlos Pena", "Giovani dos Santos", "Oribe Peralta", "Javier Hernandez", "Raul Jimenez", "Marco Fabian", "Carlos Salcido", "Jose de Jesus Corona"] },
        { group: "Group A", code: "CMR", name: "Cameroon", flags: ["cm"],
          players: ["Charles Itandje", "Cedric Djeugoue", "Nicolas N'Koulou", "Aurelien Chedjou", "Henri Bedimo", "Benoit Assou-Ekotto", "Stephane Mbia", "Alexandre Song", "Eyong Enoh", "Joel Matip", "Benjamin Moukandjo", "Samuel Eto'o", "Vincent Aboubakar", "Eric Maxim Choupo-Moting", "Pierre Webo", "Jean Makoun", "Sammy N'Djock"] },

        // Group B
        { group: "Group B", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Iker Casillas", "Cesar Azpilicueta", "Sergio Ramos", "Gerard Pique", "Jordi Alba", "Javi Martinez", "Sergio Busquets", "Xabi Alonso", "Xavi Hernandez", "Andres Iniesta", "David Silva", "Koke", "Pedro Rodriguez", "Diego Costa", "David Villa", "Fernando Torres", "Pepe Reina"] },
        { group: "Group B", code: "NED", name: "Netherlands", flags: ["nl"],
          players: ["Jasper Cillessen", "Daryl Janmaat", "Stefan de Vrij", "Ron Vlaar", "Bruno Martins Indi", "Daley Blind", "Nigel de Jong", "Jonathan de Guzman", "Georginio Wijnaldum", "Wesley Sneijder", "Arjen Robben", "Robin van Persie", "Dirk Kuyt", "Memphis Depay", "Klaas-Jan Huntelaar", "Joel Veltman", "Tim Krul"] },
        { group: "Group B", code: "CHI", name: "Chile", flags: ["cl"],
          players: ["Claudio Bravo", "Mauricio Isla", "Gary Medel", "Gonzalo Jara", "Eugenio Mena", "Charles Aranguiz", "Marcelo Diaz", "Arturo Vidal", "Jorge Valdivia", "Alexis Sanchez", "Eduardo Vargas", "Jean Beausejour", "Felipe Gutierrez", "Mauricio Pinilla", "Carlos Carmona", "Jose Rojas", "Johnny Herrera"] },
        { group: "Group B", code: "AUS", name: "Australia", flags: ["au"],
          players: ["Mathew Ryan", "Ivan Franjic", "Matthew Spiranovic", "Alex Wilkinson", "Jason Davidson", "Mark Milligan", "Mile Jedinak", "Matt McKay", "Mark Bresciano", "Tommy Oar", "Mathew Leckie", "Tim Cahill", "Dario Vidosic", "Ben Halloran", "James Troisi", "Ryan McGowan", "Mitchell Langerak"] },

        // Group C
        { group: "Group C", code: "COL", name: "Colombia", flags: ["co"],
          players: ["David Ospina", "Camilo Zuniga", "Cristian Zapata", "Mario Yepes", "Pablo Armero", "Santiago Arias", "Carlos Sanchez", "Abel Aguilar", "Juan Cuadrado", "James Rodriguez", "Victor Ibarbo", "Teofilo Gutierrez", "Jackson Martinez", "Carlos Bacca", "Fredy Guarin", "Juan Fernando Quintero", "Faryd Mondragon"] },
        { group: "Group C", code: "GRE", name: "Greece", flags: ["gr"],
          players: ["Orestis Karnezis", "Vasilis Torosidis", "Kostas Manolas", "Sokratis Papastathopoulos", "Jose Holebas", "Loukas Vyntra", "Ioannis Maniatis", "Kostas Katsouranis", "Giorgos Karagounis", "Panagiotis Kone", "Lazaros Christodoulopoulos", "Dimitris Salpingidis", "Georgios Samaras", "Kostas Mitroglou", "Theofanis Gekas", "Andreas Samaris", "Panagiotis Glykos"] },
        { group: "Group C", code: "CIV", name: "Ivory Coast", flags: ["ci"],
          players: ["Boubacar Barry", "Serge Aurier", "Kolo Toure", "Souleymane Bamba", "Arthur Boka", "Constant Djakpa", "Didier Zokora", "Cheick Tiote", "Yaya Toure", "Serey Die", "Max Gradel", "Gervinho", "Salomon Kalou", "Didier Drogba", "Wilfried Bony", "Giovanni Sio", "Sayouba Mande"] },
        { group: "Group C", code: "JPN", name: "Japan", flags: ["jp"],
          players: ["Eiji Kawashima", "Atsuto Uchida", "Yuji Nakazawa", "Maya Yoshida", "Yuto Nagatomo", "Yasuyuki Konno", "Hotaru Yamaguchi", "Makoto Hasebe", "Yasuhito Endo", "Shinji Kagawa", "Keisuke Honda", "Shinji Okazaki", "Yoshito Okubo", "Yoichiro Kakitani", "Yuya Osako", "Hiroshi Kiyotake", "Shusaku Nishikawa"] },

        // Group D
        { group: "Group D", code: "URU", name: "Uruguay", flags: ["uy"],
          players: ["Fernando Muslera", "Maxi Pereira", "Diego Lugano", "Diego Godin", "Martin Caceres", "Jose Maria Gimenez", "Egidio Arevalo Rios", "Alvaro Gonzalez", "Cristian Rodriguez", "Nicolas Lodeiro", "Gaston Ramirez", "Luis Suarez", "Edinson Cavani", "Diego Forlan", "Christian Stuani", "Alvaro Pereira", "Martin Silva"] },
        { group: "Group D", code: "CRC", name: "Costa Rica", flags: ["cr"],
          players: ["Keylor Navas", "Cristian Gamboa", "Oscar Duarte", "Giancarlo Gonzalez", "Michael Umana", "Junior Diaz", "Celso Borges", "Yeltsin Tejeda", "Christian Bolanos", "Bryan Ruiz", "Joel Campbell", "Marco Urena", "Randall Brenes", "Roy Miller", "Jose Miguel Cubero", "Diego Calvo", "Patrick Pemberton"] },
        { group: "Group D", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["Joe Hart", "Glen Johnson", "Gary Cahill", "Phil Jagielka", "Leighton Baines", "Phil Jones", "Steven Gerrard", "Jordan Henderson", "Jack Wilshere", "Raheem Sterling", "Wayne Rooney", "Daniel Sturridge", "Danny Welbeck", "Ross Barkley", "Adam Lallana", "Frank Lampard", "Ben Foster"] },
        { group: "Group D", code: "ITA", name: "Italy", flags: ["it"],
          players: ["Gianluigi Buffon", "Matteo Darmian", "Andrea Barzagli", "Giorgio Chiellini", "Mattia De Sciglio", "Leonardo Bonucci", "Daniele De Rossi", "Andrea Pirlo", "Marco Verratti", "Claudio Marchisio", "Antonio Candreva", "Mario Balotelli", "Ciro Immobile", "Lorenzo Insigne", "Alessio Cerci", "Thiago Motta", "Salvatore Sirigu"] },

        // Group E
        { group: "Group E", code: "SUI", name: "Switzerland", flags: ["ch"],
          players: ["Diego Benaglio", "Stephan Lichtsteiner", "Fabian Schär", "Johan Djourou", "Ricardo Rodriguez", "Steve von Bergen", "Valon Behrami", "Gokhan Inler", "Granit Xhaka", "Xherdan Shaqiri", "Admir Mehmedi", "Haris Seferovic", "Josip Drmic", "Blerim Dzemaili", "Gelson Fernandes", "Valentin Stocker", "Yann Sommer"] },
        { group: "Group E", code: "ECU", name: "Ecuador", flags: ["ec"],
          players: ["Alexander Dominguez", "Juan Carlos Paredes", "Jorge Guagua", "Frickson Erazo", "Walter Ayovi", "Gabriel Achilier", "Antonio Valencia", "Segundo Castillo", "Christian Noboa", "Jefferson Montero", "Enner Valencia", "Felipe Caicedo", "Michael Arroyo", "Renato Ibarra", "Oswaldo Minda", "Jaime Ayovi", "Maximo Banguera"] },
        { group: "Group E", code: "FRA", name: "France", flags: ["fr"],
          players: ["Hugo Lloris", "Mathieu Debuchy", "Raphael Varane", "Mamadou Sakho", "Patrice Evra", "Bacary Sagna", "Paul Pogba", "Yohan Cabaye", "Blaise Matuidi", "Mathieu Valbuena", "Moussa Sissoko", "Karim Benzema", "Olivier Giroud", "Antoine Griezmann", "Loic Remy", "Laurent Koscielny", "Stephane Ruffier"] },
        { group: "Group E", code: "HON", name: "Honduras", flags: ["hn"],
          players: ["Noel Valladares", "Brayan Beckeles", "Victor Bernardez", "Maynor Figueroa", "Emilio Izaguirre", "Osman Chavez", "Wilson Palacios", "Luis Garrido", "Boniek Garcia", "Andy Najar", "Roger Espinoza", "Carlo Costly", "Jerry Bengtson", "Marvin Chavez", "Jerry Palacios", "Mario Martinez", "Donis Escober"] },

        // Group F
        { group: "Group F", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Sergio Romero", "Pablo Zabaleta", "Federico Fernandez", "Ezequiel Garay", "Marcos Rojo", "Martin Demichelis", "Javier Mascherano", "Fernando Gago", "Angel Di Maria", "Lionel Messi", "Gonzalo Higuain", "Sergio Aguero", "Ezequiel Lavezzi", "Rodrigo Palacio", "Maxi Rodriguez", "Lucas Biglia", "Mariano Andujar"] },
        { group: "Group F", code: "BIH", name: "Bosnia and Herzegovina", flags: ["ba"],
          players: ["Asmir Begovic", "Mensur Mujdza", "Ermin Bicakcic", "Emir Spahic", "Sead Kolasinac", "Toni Sunjic", "Muhamed Besic", "Miralem Pjanic", "Zvjezdan Misimovic", "Senad Lulic", "Haris Medunjanin", "Edin Dzeko", "Vedad Ibisevic", "Izet Hajrovic", "Edin Visca", "Sejad Salihovic", "Asmir Avdukic"] },
        { group: "Group F", code: "IRN", name: "Iran", flags: ["ir"],
          players: ["Alireza Haghighi", "Pejman Montazeri", "Jalal Hosseini", "Amir Hossein Sadeghi", "Mehrdad Pooladi", "Khosro Heydari", "Andranik Teymourian", "Javad Nekounam", "Ehsan Hajsafi", "Ashkan Dejagah", "Masoud Shojaei", "Reza Ghoochannejhad", "Karim Ansarifard", "Alireza Jahanbakhsh", "Khosro Heydari", "Hashem Beikzadeh", "Rahman Ahmadi"] },
        { group: "Group F", code: "NGA", name: "Nigeria", flags: ["ng"],
          players: ["Vincent Enyeama", "Efe Ambrose", "Joseph Yobo", "Kenneth Omeruo", "Juwon Oshaniwa", "Godfrey Oboabona", "John Obi Mikel", "Ogenyi Onazi", "Michael Babatunde", "Peter Odemwingie", "Ahmed Musa", "Emmanuel Emenike", "Victor Moses", "Shola Ameobi", "Ramon Azeez", "Uche Nwofor", "Austin Ejide"] },

        // Group G
        { group: "Group G", code: "GER", name: "Germany", flags: ["de"],
          players: ["Manuel Neuer", "Philipp Lahm", "Jerome Boateng", "Mats Hummels", "Benedikt Höwedes", "Per Mertesacker", "Sami Khedira", "Bastian Schweinsteiger", "Toni Kroos", "Mesut Özil", "Thomas Müller", "Mario Götze", "Miroslav Klose", "André Schürrle", "Lukas Podolski", "Julian Draxler", "Roman Weidenfeller"] },
        { group: "Group G", code: "POR", name: "Portugal", flags: ["pt"],
          players: ["Rui Patricio", "Joao Pereira", "Pepe", "Bruno Alves", "Fabio Coentrao", "Ricardo Costa", "Miguel Veloso", "Joao Moutinho", "Raul Meireles", "Nani", "Cristiano Ronaldo", "Helder Postiga", "Eder", "Silvestre Varela", "Vieirinha", "William Carvalho", "Beto"] },
        { group: "Group G", code: "GHA", name: "Ghana", flags: ["gh"],
          players: ["Fatau Dauda", "Harrison Afful", "John Boye", "Jonathan Mensah", "Kwadwo Asamoah", "Daniel Opare", "Rabiu Mohammed", "Sulley Muntari", "Christian Atsu", "Kevin-Prince Boateng", "Andre Ayew", "Asamoah Gyan", "Jordan Ayew", "Mubarak Wakaso", "Michael Essien", "Afriyie Acquah", "Adam Kwarasey"] },
        { group: "Group G", code: "USA", name: "United States", flags: ["us"],
          players: ["Tim Howard", "Fabian Johnson", "Geoff Cameron", "Matt Besler", "DaMarcus Beasley", "Omar Gonzalez", "Kyle Beckerman", "Jermaine Jones", "Michael Bradley", "Alejandro Bedoya", "Graham Zusi", "Clint Dempsey", "Jozy Altidore", "Chris Wondolowski", "Aron Johannsson", "Julian Green", "Brad Guzan"] },

        // Group H
        { group: "Group H", code: "BEL", name: "Belgium", flags: ["be"],
          players: ["Thibaut Courtois", "Toby Alderweireld", "Vincent Kompany", "Daniel Van Buyten", "Jan Vertonghen", "Thomas Vermaelen", "Axel Witsel", "Marouane Fellaini", "Kevin De Bruyne", "Eden Hazard", "Dries Mertens", "Romelu Lukaku", "Divock Origi", "Adnan Januzaj", "Nacer Chadli", "Mousa Dembele", "Simon Mignolet"] },
        { group: "Group H", code: "ALG", name: "Algeria", flags: ["dz"],
          players: ["Rais M'Bolhi", "Aissa Mandi", "Madjid Bougherra", "Rafik Halliche", "Faouzi Ghoulam", "Carl Medjani", "Mehdi Mostefa", "Nabil Bentaleb", "Saphir Taider", "Sofiane Feghouli", "Yacine Brahimi", "Islam Slimani", "El Arabi Hillel Soudani", "Nabil Ghilas", "Riyad Mahrez", "Hassan Yebda", "Mohamed Lamine Zemmamouche"] },
        { group: "Group H", code: "RUS", name: "Russia", flags: ["ru"],
          players: ["Igor Akinfeev", "Alexei Kozlov", "Vasili Berezutski", "Sergei Ignashevich", "Dmitri Kombarov", "Andrey Eshchenko", "Denis Glushakov", "Igor Denisov", "Viktor Fayzulin", "Roman Shirokov", "Oleg Shatov", "Alexander Samedov", "Alexander Kokorin", "Alexander Kerzhakov", "Alan Dzagoev", "Maxim Kanunnikov", "Yuri Lodygin"] },
        { group: "Group H", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Jung Sung-ryong", "Lee Yong", "Hong Jeong-ho", "Kim Young-gwon", "Yun Suk-young", "Kim Chang-soo", "Han Kook-young", "Ki Sung-yueng", "Lee Chung-yong", "Koo Ja-cheol", "Son Heung-min", "Park Chu-young", "Kim Shin-wook", "Ji Dong-won", "Kim Bo-kyung", "Ha Dae-sung", "Kim Seung-gyu"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        stickers.push({ code: String(currentCode++), name: `${t.name} Team Photo` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    return {
        id: 'wc2014',
        year: 2014,
        title: 'Brasil 2014',
        subtitle: 'Brazil • 32 Teams • 640 Stickers',
        dbKey: 'panini2014',
        isSequential: true,
        totalStickers: 640,
        phase: 'Phase 3 (2010–2022)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 8. WC 2018: Russia 2018 (682 stickers)
// -----------------------------------------------------------------------------
function buildWc2018() {
    let currentCode = 1;
    const groups = {};

    // Specials (1-32)
    const specials = [
        "FIFA World Cup Trophy",
        "Official Russia 2018 Emblem",
        "Zabivaka the Wolf (Mascot)",
        "Telstar 18 (Official Match Ball)",
        "Luzhniki Stadium (Moscow)",
        "Saint Petersburg Stadium",
        "Fisht Olympic Stadium (Sochi)",
        "Volgograd Arena",
        "Kazan Arena",
        "Samara Arena",
        "Rostov Arena",
        "Nizhny Novgorod Stadium",
        "Mordovia Arena (Saransk)",
        "Ekaterinburg Arena",
        "Kaliningrad Stadium",
        "Spartak Stadium (Moscow)",
        "Host City Poster: Moscow",
        "Host City Poster: Saint Petersburg",
        "Host City Poster: Sochi",
        "Host City Poster: Volgograd",
        "Host City Poster: Kazan",
        "Host City Poster: Samara",
        "Host City Poster: Rostov-on-Don",
        "Host City Poster: Nizhny Novgorod",
        "Host City Poster: Saransk",
        "Host City Poster: Ekaterinburg",
        "Host City Poster: Kaliningrad",
        "Official Russia 2018 Poster",
        "FIFA Fair Play Emblem",
        "Roll of Honour: Uruguay, Italy & Germany",
        "Roll of Honour: Brazil, England & Argentina",
        "Roll of Honour: France & Spain"
    ];
    groups["Special Section"] = [{
        code: "SPECIAL",
        name: "Trophy, Mascot, 12 Stadiums & Posters",
        stickers: specials.map(name => ({ code: String(currentCode++), name }))
    }];

    // 32 Teams x 20 stickers (1 badge, 1 team photo, 18 players) = 640 stickers. 32 + 640 = 672.
    const teamsData = [
        // Group A
        { group: "Group A", code: "RUS", name: "Russia", flags: ["ru"],
          players: ["Igor Akinfeev", "Mario Fernandes", "Ilya Kutepov", "Sergei Ignashevich", "Yuri Zhirkov", "Igor Smolnikov", "Yuri Gazinsky", "Roman Zobnin", "Aleksandr Samedov", "Aleksandr Golovin", "Denis Cheryshev", "Artem Dzyuba", "Fyodor Smolov", "Alan Dzagoev", "Aleksei Miranchuk", "Anton Miranchuk", "Daler Kuzyaev", "Vladimir Gabulov"] },
        { group: "Group A", code: "KSA", name: "Saudi Arabia", flags: ["sa"],
          players: ["Abdullah Al-Mayouf", "Mohammed Al-Breik", "Osama Hawsawi", "Omar Hawsawi", "Yasser Al-Shahrani", "Motaz Hawsawi", "Abdullah Otayf", "Salman Al-Faraj", "Taisir Al-Jassim", "Salem Al-Dawsari", "Yahya Al-Shehri", "Mohammad Al-Sahlawi", "Fahad Al-Muwallad", "Housain Al-Mogahwi", "Hattan Bahebri", "Mansoor Al-Harbi", "Ali Al-Bulaihi", "Yasser Al-Mosailem"] },
        { group: "Group A", code: "EGY", name: "Egypt", flags: ["eg"],
          players: ["Essam El-Hadary", "Ahmed Fathy", "Ali Gabr", "Ahmed Hegazi", "Mohamed Abdel-Shafy", "Ahmed Elmohamady", "Tarek Hamed", "Mohamed Elneny", "Abdallah Said", "Trezeguet", "Mohamed Salah", "Marwan Mohsen", "Ramadan Sobhi", "Amr Warda", "Sam Morsy", "Mahmoud Kahraba", "Ayman Ashraf", "Mohamed El-Shenawy"] },
        { group: "Group A", code: "URU", name: "Uruguay", flags: ["uy"],
          players: ["Fernando Muslera", "Guillermo Varela", "Jose Maria Gimenez", "Diego Godin", "Martin Caceres", "Maxi Pereira", "Nahitan Nandez", "Matias Vecino", "Rodrigo Bentancur", "Giorgian De Arrascaeta", "Lucas Torreira", "Luis Suarez", "Edinson Cavani", "Cristhian Stuani", "Maxi Gomez", "Carlos Sanchez", "Gaston Silva", "Martin Silva"] },

        // Group B
        { group: "Group B", code: "POR", name: "Portugal", flags: ["pt"],
          players: ["Rui Patricio", "Cedric Soares", "Pepe", "Jose Fonte", "Raphael Guerreiro", "Bruno Alves", "William Carvalho", "Joao Moutinho", "Bernardo Silva", "Joao Mario", "Goncalo Guedes", "Cristiano Ronaldo", "Andre Silva", "Ricardo Quaresma", "Gelson Martins", "Adrien Silva", "Ruben Dias", "Anthony Lopes"] },
        { group: "Group B", code: "ESP", name: "Spain", flags: ["es"],
          players: ["David de Gea", "Dani Carvajal", "Gerard Pique", "Sergio Ramos", "Jordi Alba", "Nacho Fernandez", "Sergio Busquets", "Koke", "Andres Iniesta", "David Silva", "Isco", "Diego Costa", "Iago Aspas", "Rodrigo Moreno", "Marco Asensio", "Thiago Alcantara", "Cesar Azpilicueta", "Kepa Arrizabalaga"] },
        { group: "Group B", code: "MAR", name: "Morocco", flags: ["ma"],
          players: ["Munir Mohamedi", "Nabil Dirar", "Medhi Benatia", "Romain Saiss", "Achraf Hakimi", "Manuel da Costa", "Karim El Ahmadi", "M'barek Boussoufa", "Younes Belhanda", "Nordin Amrabat", "Hakim Ziyech", "Ayoub El Kaabi", "Khalid Boutaib", "Youssef En-Nesyri", "Amine Harit", "Sofyan Amrabat", "Hamza Mendyl", "Yassine Bounou"] },
        { group: "Group B", code: "IRN", name: "Iran", flags: ["ir"],
          players: ["Alireza Beiranvand", "Ramin Rezaeian", "Morteza Pouraliganji", "Rouzbeh Cheshmi", "Ehsan Hajsafi", "Milad Mohammadi", "Saeid Ezatolahi", "Omid Ebrahimi", "Vahid Amiri", "Alireza Jahanbakhsh", "Karim Ansarifard", "Sardar Azmoun", "Mehdi Taremi", "Saman Ghoddos", "Ashkan Dejagah", "Pejman Montazeri", "Masoud Shojaei", "Amir Abedzadeh"] },

        // Group C
        { group: "Group C", code: "FRA", name: "France", flags: ["fr"],
          players: ["Hugo Lloris", "Benjamin Pavard", "Raphael Varane", "Samuel Umtiti", "Lucas Hernandez", "Djibril Sidibe", "N'Golo Kante", "Paul Pogba", "Blaise Matuidi", "Corentin Tolisso", "Antoine Griezmann", "Kylian Mbappe", "Olivier Giroud", "Ousmane Dembele", "Nabil Fekir", "Thomas Lemar", "Presnel Kimpembe", "Steve Mandanda"] },
        { group: "Group C", code: "AUS", name: "Australia", flags: ["au"],
          players: ["Mathew Ryan", "Josh Risdon", "Trent Sainsbury", "Mark Milligan", "Aziz Behich", "Milos Degenek", "Mile Jedinak", "Aaron Mooy", "Tom Rogic", "Mathew Leckie", "Robbie Kruse", "Andrew Nabbout", "Tomi Juric", "Daniel Arzani", "Tim Cahill", "Jackson Irvine", "Massimo Luongo", "Danny Vukovic"] },
        { group: "Group C", code: "PER", name: "Peru", flags: ["pe"],
          players: ["Pedro Gallese", "Luis Advincula", "Christian Ramos", "Alberto Rodriguez", "Miguel Trauco", "Aldo Corzo", "Renato Tapia", "Yoshimar Yotun", "Edison Flores", "Christian Cueva", "Andre Carrillo", "Paolo Guerrero", "Jefferson Farfan", "Raul Ruidiaz", "Pedro Aquino", "Paolo Hurtado", "Anderson Santamaria", "Carlos Caceda"] },
        { group: "Group C", code: "DEN", name: "Denmark", flags: ["dk"],
          players: ["Kasper Schmeichel", "Henrik Dalsgaard", "Simon Kjaer", "Andreas Christensen", "Jens Stryger Larsen", "Mathias Jorgensen", "William Kvist", "Thomas Delaney", "Christian Eriksen", "Yussuf Poulsen", "Pione Sisto", "Nicolai Jorgensen", "Andreas Cornelius", "Kasper Dolberg", "Martin Braithwaite", "Lasse Schone", "Michael Krohn-Dehli", "Jonas Lossl"] },

        // Group D
        { group: "Group D", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Willy Caballero", "Gabriel Mercado", "Nicolas Otamendi", "Marcos Rojo", "Nicolas Tagliafico", "Federico Fazio", "Javier Mascherano", "Lucas Biglia", "Ever Banega", "Angel Di Maria", "Maximiliano Meza", "Lionel Messi", "Sergio Aguero", "Gonzalo Higuain", "Paulo Dybala", "Cristian Pavon", "Eduardo Salvio", "Franco Armani"] },
        { group: "Group D", code: "ISL", name: "Iceland", flags: ["is"],
          players: ["Hannes Halldorsson", "Birkir Saevarsson", "Kari Arnason", "Ragnar Sigurdsson", "Hordur Magnusson", "Sverrir Ingason", "Aron Gunnarsson", "Gylfi Sigurdsson", "Birkir Bjarnason", "Johann Berg Gudmundsson", "Emil Hallfredsson", "Alfred Finnbogason", "Bjorn Sigurdarson", "Jon Dadi Bodvarsson", "Rurik Gislason", "Ari Skulason", "Arnor Traustason", "Runar Runarsson"] },
        { group: "Group D", code: "CRO", name: "Croatia", flags: ["hr"],
          players: ["Danijel Subasic", "Sime Vrsaljko", "Dejan Lovren", "Domagoj Vida", "Ivan Strinic", "Vedran Corluka", "Ivan Rakitic", "Luka Modric", "Marcelo Brozovic", "Ante Rebic", "Ivan Perisic", "Mario Mandzukic", "Andrej Kramaric", "Mateo Kovacic", "Milan Badelj", "Marko Pjaca", "Josip Pivaric", "Lovre Kalinic"] },
        { group: "Group D", code: "NGA", name: "Nigeria", flags: ["ng"],
          players: ["Francis Uzoho", "Abdullahi Shehu", "William Troost-Ekong", "Leon Balogun", "Bryan Idowu", "Kenneth Omeruo", "Wilfred Ndidi", "Oghenekaro Etebo", "John Obi Mikel", "Victor Moses", "Alex Iwobi", "Odion Ighalo", "Ahmed Musa", "Kelechi Iheanacho", "Tyronne Ebuehi", "Ogenyi Onazi", "Simy Nwankwo", "Ikechukwu Ezenwa"] },

        // Group E
        { group: "Group E", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Alisson Becker", "Danilo", "Thiago Silva", "Miranda", "Marcelo", "Fagner", "Casemiro", "Paulinho", "Philippe Coutinho", "Willian", "Neymar Jr", "Gabriel Jesus", "Roberto Firmino", "Douglas Costa", "Fernandinho", "Renato Augusto", "Marquinhos", "Ederson"] },
        { group: "Group E", code: "SUI", name: "Switzerland", flags: ["ch"],
          players: ["Yann Sommer", "Stephan Lichtsteiner", "Fabian Schär", "Manuel Akanji", "Ricardo Rodriguez", "Michael Lang", "Valon Behrami", "Granit Xhaka", "Blerim Dzemaili", "Xherdan Shaqiri", "Steven Zuber", "Haris Seferovic", "Mario Gavranovic", "Breel Embolo", "Denis Zakaria", "Remo Freuler", "Gelson Fernandes", "Roman Burki"] },
        { group: "Group E", code: "CRC", name: "Costa Rica", flags: ["cr"],
          players: ["Keylor Navas", "Cristian Gamboa", "Johnny Acosta", "Giancarlo Gonzalez", "Oscar Duarte", "Bryan Oviedo", "David Guzman", "Celso Borges", "Bryan Ruiz", "Christian Bolanos", "Johan Venegas", "Marco Urena", "Joel Campbell", "Yeltsin Tejeda", "Daniel Colindres", "Kendall Waston", "Francisco Calvo", "Patrick Pemberton"] },
        { group: "Group E", code: "SRB", name: "Serbia", flags: ["rs"],
          players: ["Vladimir Stojkovic", "Antonio Rukavina", "Branislav Ivanovic", "Nikola Milenkovic", "Aleksandar Kolarov", "Dusko Tosic", "Nemanja Matic", "Luka Milivojevic", "Sergej Milinkovic-Savic", "Dusan Tadic", "Filip Kostic", "Aleksandar Mitrovic", "Adem Ljajic", "Nemanja Radonjic", "Luka Jovic", "Andrija Zivkovic", "Milos Veljkovic", "Marko Dmitrovic"] },

        // Group F
        { group: "Group F", code: "GER", name: "Germany", flags: ["de"],
          players: ["Manuel Neuer", "Joshua Kimmich", "Jerome Boateng", "Mats Hummels", "Jonas Hector", "Niklas Süle", "Sami Khedira", "Toni Kroos", "Mesut Özil", "Thomas Müller", "Marco Reus", "Timo Werner", "Mario Gomez", "Leon Goretzka", "Julian Draxler", "Ilkay Gündogan", "Julian Brandt", "Marc-André ter Stegen"] },
        { group: "Group F", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Guillermo Ochoa", "Carlos Salcedo", "Hugo Ayala", "Hector Moreno", "Jesus Gallardo", "Miguel Layun", "Hector Herrera", "Andres Guardado", "Carlos Vela", "Hirving Lozano", "Javier Hernandez", "Raul Jimenez", "Oribe Peralta", "Jesus Manuel Corona", "Giovani dos Santos", "Marco Fabian", "Edson Alvarez", "Alfredo Talavera"] },
        { group: "Group F", code: "SWE", name: "Sweden", flags: ["se"],
          players: ["Robin Olsen", "Mikael Lustig", "Victor Lindelof", "Andreas Granqvist", "Ludwig Augustinsson", "Pontus Jansson", "Sebastian Larsson", "Albin Ekdal", "Viktor Claesson", "Emil Forsberg", "Ola Toivonen", "Marcus Berg", "John Guidetti", "Isaac Kiese Thelin", "Gustav Svensson", "Oscar Hiljemark", "Emil Krafth", "Karl-Johan Johnsson"] },
        { group: "Group F", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Cho Hyun-woo", "Lee Yong", "Jang Hyun-soo", "Kim Young-gwon", "Hong Chul", "Kim Min-woo", "Jung Woo-young", "Ki Sung-yueng", "Lee Jae-sung", "Hwang Hee-chan", "Son Heung-min", "Koo Ja-cheol", "Moon Seon-min", "Kim Shin-wook", "Ju Se-jong", "Lee Seung-woo", "Go Yo-han", "Kim Seung-gyu"] },

        // Group G
        { group: "Group G", code: "BEL", name: "Belgium", flags: ["be"],
          players: ["Thibaut Courtois", "Toby Alderweireld", "Vincent Kompany", "Jan Vertonghen", "Thomas Meunier", "Dedryck Boyata", "Axel Witsel", "Kevin De Bruyne", "Yannick Carrasco", "Eden Hazard", "Dries Mertens", "Romelu Lukaku", "Michy Batshuayi", "Adnan Januzaj", "Nacer Chadli", "Marouane Fellaini", "Youri Tielemans", "Simon Mignolet"] },
        { group: "Group G", code: "PAN", name: "Panama", flags: ["pa"],
          players: ["Jaime Penedo", "Michael Amir Murillo", "Roman Torres", "Fidel Escobar", "Eric Davis", "Felipe Baloy", "Gabriel Gomez", "Anibal Godoy", "Armando Cooper", "Edgar Yoel Barcenas", "Blas Perez", "Luis Tejada", "Gabriel Torres", "Abdiel Arroyo", "Ismael Diaz", "Valentin Pimentel", "Adolfo Machado", "Jose Calderon"] },
        { group: "Group G", code: "TUN", name: "Tunisia", flags: ["tn"],
          players: ["Mouez Hassen", "Dylan Bronn", "Syam Ben Youssef", "Yassine Meriah", "Ali Maaloul", "Hamdi Nagguez", "Ellyes Skhiri", "Ferjani Sassi", "Anice Badri", "Wahbi Khazri", "Fakhreddine Ben Youssef", "Naim Sliti", "Saif-Eddine Khaoui", "Bassem Srarfi", "Ghailene Chaalali", "Oussama Haddadi", "Rami Bedoui", "Farouk Ben Mustapha"] },
        { group: "Group G", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["Jordan Pickford", "Kieran Trippier", "Kyle Walker", "John Stones", "Harry Maguire", "Ashley Young", "Jordan Henderson", "Jesse Lingard", "Dele Alli", "Raheem Sterling", "Harry Kane", "Marcus Rashford", "Jamie Vardy", "Ruben Loftus-Cheek", "Danny Rose", "Eric Dier", "Trent Alexander-Arnold", "Jack Butland"] },

        // Group H
        { group: "Group H", code: "POL", name: "Poland", flags: ["pl"],
          players: ["Wojciech Szczesny", "Lukasz Piszczek", "Kamil Glik", "Michal Pazdan", "Maciej Rybus", "Jan Bednarek", "Grzegorz Krychowiak", "Piotr Zielinski", "Jakub Blaszczykowski", "Kamil Grosicki", "Arkadiusz Milik", "Robert Lewandowski", "Lukasz Teodorczyk", "Dawid Kownacki", "Jacek Goralski", "Bartosz Bereszynski", "Karol Linetty", "Lukasz Fabianski"] },
        { group: "Group H", code: "SEN", name: "Senegal", flags: ["sn"],
          players: ["Khadim N'Diaye", "Moussa Wague", "Salif Sane", "Kalidou Koulibaly", "Youssouf Sabaly", "Lamine Gassama", "Idrissa Gueye", "Alfred N'Diaye", "Badou Ndiaye", "Ismaila Sarr", "Sadio Mane", "M'Baye Niang", "Diafra Sakho", "Moussa Sow", "Cheikhou Kouyate", "Keita Balde", "Cheikh N'Doye", "Abdoulaye Diallo"] },
        { group: "Group H", code: "COL", name: "Colombia", flags: ["co"],
          players: ["David Ospina", "Santiago Arias", "Davinson Sanchez", "Yerry Mina", "Johan Mojica", "Cristian Zapata", "Carlos Sanchez", "Mateus Uribe", "Wilmar Barrios", "Juan Cuadrado", "James Rodriguez", "Radamel Falcao", "Luis Muriel", "Carlos Bacca", "Juan Fernando Quintero", "Jefferson Lerma", "Jose Izquierdo", "Camilo Vargas"] },
        { group: "Group H", code: "JPN", name: "Japan", flags: ["jp"],
          players: ["Eiji Kawashima", "Hiroki Sakai", "Maya Yoshida", "Gen Shoji", "Yuto Nagatomo", "Tomoaki Makino", "Makoto Hasebe", "Gaku Shibasaki", "Genki Haraguchi", "Shinji Kagawa", "Takashi Inui", "Yuya Osako", "Shinji Okazaki", "Keisuke Honda", "Yoshinori Muto", "Hotaru Yamaguchi", "Takashi Usami", "Masaaki Higashiguchi"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        stickers.push({ code: String(currentCode++), name: `${t.name} Badge` });
        stickers.push({ code: String(currentCode++), name: `${t.name} Team Photo` });
        t.players.forEach(p => {
            stickers.push({ code: String(currentCode++), name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    // Legends Section (673-682) - 10 Historic World Cup Legends
    const legends = [
        "Pelé (Legend - Brazil)",
        "Diego Armando Maradona (Legend - Argentina)",
        "Zinedine Zidane (Legend - France)",
        "Ronaldo Nazário (Legend - Brazil)",
        "Franz Beckenbauer (Legend - Germany)",
        "Johan Cruyff (Legend - Netherlands)",
        "Miroslav Klose (Legend - Germany)",
        "Paolo Maldini (Legend - Italy)",
        "Lothar Matthäus (Legend - Germany)",
        "Bobby Moore (Legend - England)"
    ];
    groups["Legends Section"] = [{
        code: "LEGENDS",
        name: "World Cup Legends & Heritage",
        stickers: legends.map(name => ({ code: String(currentCode++), name }))
    }];

    return {
        id: 'wc2018',
        year: 2018,
        title: 'Russia 2018',
        subtitle: 'Russia • 32 Teams • 682 Stickers',
        dbKey: 'panini2018',
        isSequential: true,
        totalStickers: 682,
        phase: 'Phase 3 (2010–2022)',
        groups
    };
}

// -----------------------------------------------------------------------------
// 9. WC 2022: Qatar 2022 (670 stickers, Code-Based!)
// -----------------------------------------------------------------------------
function buildWc2022() {
    const groups = {};

    // Specials (00 + FWC1 to FWC29 = 30 stickers)
    const specials = [
        { code: "00", name: "Panini 00 Logo" },
        { code: "FWC1", name: "FIFA World Cup Trophy" },
        { code: "FWC2", name: "Official Qatar 2022 Emblem" },
        { code: "FWC3", name: "La'eeb (Official Mascot)" },
        { code: "FWC4", name: "Al Rihla (Official Match Ball)" },
        { code: "FWC5", name: "Lusail Stadium (Lusail)" },
        { code: "FWC6", name: "Al Bayt Stadium (Al Khor)" },
        { code: "FWC7", name: "Stadium 974 (Doha)" },
        { code: "FWC8", name: "Al Thumama Stadium (Doha)" },
        { code: "FWC9", name: "Khalifa International Stadium (Al Rayyan)" },
        { code: "FWC10", name: "Education City Stadium (Al Rayyan)" },
        { code: "FWC11", name: "Ahmad bin Ali Stadium (Al Rayyan)" },
        { code: "FWC12", name: "Al Janoub Stadium (Al Wakrah)" },
        { code: "FWC13", name: "FIFA Museum: Uruguay 1930" },
        { code: "FWC14", name: "FIFA Museum: Italy 1934" },
        { code: "FWC15", name: "FIFA Museum: Italy 1938" },
        { code: "FWC16", name: "FIFA Museum: Uruguay 1950" },
        { code: "FWC17", name: "FIFA Museum: West Germany 1954" },
        { code: "FWC18", name: "FIFA Museum: Brazil 1958" },
        { code: "FWC19", name: "FIFA Museum: Brazil 1962" },
        { code: "FWC20", name: "FIFA Museum: England 1966" },
        { code: "FWC21", name: "FIFA Museum: Brazil 1970" },
        { code: "FWC22", name: "FIFA Museum: West Germany 1974" },
        { code: "FWC23", name: "FIFA Museum: Argentina 1978" },
        { code: "FWC24", name: "FIFA Museum: Italy 1982" },
        { code: "FWC25", name: "FIFA Museum: Argentina 1986" },
        { code: "FWC26", name: "FIFA Museum: West Germany 1990" },
        { code: "FWC27", name: "FIFA Museum: Brazil 1994" },
        { code: "FWC28", name: "FIFA Museum: France 1998 & Brazil 2002" },
        { code: "FWC29", name: "FIFA Museum: Italy 2006, Spain 2010, Germany 2014 & France 2018" }
    ];
    groups["Special Section"] = [{
        code: "FWC",
        name: "Trophy, Mascot, 8 Stadiums & Museum",
        stickers: specials
    }];

    // 32 Teams x 20 stickers each (1 badge, 1 team photo, 18 players) = 640 stickers.
    // 30 + 640 = 670 stickers!
    const teamsData = [
        // Group A
        { group: "Group A", code: "QAT", name: "Qatar", flags: ["qa"],
          players: ["Saad Al-Sheeb", "Pedro Miguel", "Bassam Al-Rawi", "Tarek Salman", "Abdelkarim Hassan", "Homam Ahmed", "Boualem Khoukhi", "Karim Boudiaf", "Abdulaziz Hatem", "Assim Madibo", "Ali Assadalla", "Hassan Al-Haydos", "Akram Afif", "Almoez Ali", "Mohammed Muntari", "Ismaeel Mohammad", "Meshaal Barsham", "Musab Kheder"] },
        { group: "Group A", code: "ECU", name: "Ecuador", flags: ["ec"],
          players: ["Hernan Galindez", "Angelo Preciado", "Felix Torres", "Piero Hincapie", "Pervis Estupinan", "Robert Arboleda", "Carlos Gruezo", "Jhegson Mendez", "Moises Caicedo", "Gonzalo Plata", "Romario Ibarra", "Enner Valencia", "Michael Estrada", "Angel Mena", "Jeremy Sarmiento", "Jose Cifuentes", "Alexander Dominguez", "Xavier Arreaga"] },
        { group: "Group A", code: "SEN", name: "Senegal", flags: ["sn"],
          players: ["Edouard Mendy", "Youssouf Sabaly", "Kalidou Koulibaly", "Abdou Diallo", "Ismail Jakobs", "Pape Abou Cisse", "Idrissa Gueye", "Nampalys Mendy", "Cheikhou Kouyate", "Krepin Diatta", "Ismaila Sarr", "Boulaye Dia", "Iliman Ndiaye", "Famara Diedhiou", "Bamba Dieng", "Pape Gueye", "Alfred Gomis", "Formose Mendy"] },
        { group: "Group A", code: "NED", name: "Netherlands", flags: ["nl"],
          players: ["Andries Noppert", "Denzel Dumfries", "Jurrien Timber", "Virgil van Dijk", "Nathan Ake", "Daley Blind", "Frenkie de Jong", "Marten de Roon", "Teun Koopmeiners", "Davy Klaassen", "Cody Gakpo", "Memphis Depay", "Steven Bergwijn", "Vincent Janssen", "Wout Weghorst", "Xavi Simons", "Justin Bijlow", "Matthijs de Ligt"] },

        // Group B
        { group: "Group B", code: "ENG", name: "England", flags: ["gb-eng"],
          players: ["Jordan Pickford", "Kyle Walker", "John Stones", "Harry Maguire", "Luke Shaw", "Kieran Trippier", "Declan Rice", "Jude Bellingham", "Mason Mount", "Bukayo Saka", "Raheem Sterling", "Harry Kane", "Marcus Rashford", "Phil Foden", "Jack Grealish", "Jordan Henderson", "Nick Pope", "Eric Dier"] },
        { group: "Group B", code: "IRN", name: "Iran", flags: ["ir"],
          players: ["Alireza Beiranvand", "Sadegh Moharrami", "Morteza Pouraliganji", "Majid Hosseini", "Milad Mohammadi", "Ramin Rezaeian", "Saeid Ezatolahi", "Ahmad Nourollahi", "Ehsan Hajsafi", "Ali Gholizadeh", "Alireza Jahanbakhsh", "Mehdi Taremi", "Sardar Azmoun", "Karim Ansarifard", "Saman Ghoddos", "Vahid Amiri", "Hossein Hosseini", "Shojae Khalilzadeh"] },
        { group: "Group B", code: "USA", name: "United States", flags: ["us"],
          players: ["Matt Turner", "Sergino Dest", "Walker Zimmerman", "Tim Ream", "Antonee Robinson", "Cameron Carter-Vickers", "Tyler Adams", "Yunus Musah", "Weston McKennie", "Timothy Weah", "Christian Pulisic", "Josh Sargent", "Haji Wright", "Jesus Ferreira", "Brenden Aaronson", "Giovanni Reyna", "Ethan Horvath", "Kellyn Acosta"] },
        { group: "Group B", code: "WAL", name: "Wales", flags: ["gb-wls"],
          players: ["Wayne Hennessey", "Connor Roberts", "Chris Mepham", "Joe Rodon", "Ben Davies", "Neco Williams", "Ethan Ampadu", "Aaron Ramsey", "Joe Allen", "Harry Wilson", "Gareth Bale", "Kieffer Moore", "Daniel James", "Brennan Johnson", "Joe Morrell", "Chris Gunter", "Danny Ward", "Sorba Thomas"] },

        // Group C
        { group: "Group C", code: "ARG", name: "Argentina", flags: ["ar"],
          players: ["Emiliano Martinez", "Nahuel Molina", "Cristian Romero", "Nicolas Otamendi", "Marcos Acuna", "Nicolas Tagliafico", "Rodrigo De Paul", "Enzo Fernandez", "Alexis Mac Allister", "Angel Di Maria", "Lionel Messi", "Julian Alvarez", "Lautaro Martinez", "Leandro Paredes", "Papu Gomez", "Guido Rodriguez", "Geronimo Rulli", "Lisandro Martinez"] },
        { group: "Group C", code: "KSA", name: "Saudi Arabia", flags: ["sa"],
          players: ["Mohammed Al-Owais", "Saud Abdulhamid", "Hassan Al-Tambakti", "Ali Al-Bulaihi", "Yasser Al-Shahrani", "Sultan Al-Ghannam", "Abdulelah Al-Malki", "Mohamed Kanno", "Salman Al-Faraj", "Firas Al-Buraikan", "Salem Al-Dawsari", "Saleh Al-Shehri", "Sami Al-Najei", "Hawari Al-Dawsari", "Abdullah Madu", "Nasser Al-Dawsari", "Mohammed Al-Rubaie", "Haitham Asiri"] },
        { group: "Group C", code: "MEX", name: "Mexico", flags: ["mx"],
          players: ["Guillermo Ochoa", "Jorge Sanchez", "Cesar Montes", "Hector Moreno", "Jesus Gallardo", "Nestor Araujo", "Edson Alvarez", "Hector Herrera", "Luis Chavez", "Hirving Lozano", "Alexis Vega", "Henry Martin", "Raul Jimenez", "Rogelio Funes Mori", "Orbelin Pineda", "Carlos Rodriguez", "Alfredo Talavera", "Kevin Alvarez"] },
        { group: "Group C", code: "POL", name: "Poland", flags: ["pl"],
          players: ["Wojciech Szczesny", "Matty Cash", "Kamil Glik", "Jakub Kiwior", "Bartosz Bereszynski", "Jan Bednarek", "Grzegorz Krychowiak", "Krystian Bielik", "Sebastian Szymanski", "Piotr Zielinski", "Przemyslaw Frankowski", "Robert Lewandowski", "Arkadiusz Milik", "Karol Swiderski", "Krzysztof Piatek", "Nicola Zalewski", "Lukasz Skorupski", "Damian Szymanski"] },

        // Group D
        { group: "Group D", code: "FRA", name: "France", flags: ["fr"],
          players: ["Hugo Lloris", "Jules Kounde", "Raphael Varane", "Dayot Upamecano", "Theo Hernandez", "Ibrahima Konate", "Aurelien Tchouameni", "Adrien Rabiot", "Antoine Griezmann", "Ousmane Dembele", "Kylian Mbappe", "Olivier Giroud", "Marcus Thuram", "Randal Kolo Muani", "Kingsley Coman", "Eduardo Camavinga", "Steve Mandanda", "Benjamin Pavard"] },
        { group: "Group D", code: "AUS", name: "Australia", flags: ["au"],
          players: ["Mathew Ryan", "Fran Karacic", "Harry Souttar", "Kye Rowles", "Aziz Behich", "Milos Degenek", "Aaron Mooy", "Jackson Irvine", "Riley McGree", "Mathew Leckie", "Craig Goodwin", "Mitchell Duke", "Jamie Maclaren", "Awer Mabil", "Keanu Baccus", "Garang Kuol", "Andrew Redmayne", "Bailey Wright"] },
        { group: "Group D", code: "DEN", name: "Denmark", flags: ["dk"],
          players: ["Kasper Schmeichel", "Rasmus Kristensen", "Joachim Andersen", "Andreas Christensen", "Joakim Maehle", "Simon Kjaer", "Pierre-Emile Hojbjerg", "Thomas Delaney", "Christian Eriksen", "Mikkel Damsgaard", "Andreas Skov Olsen", "Kasper Dolberg", "Martin Braithwaite", "Andreas Cornelius", "Jesper Lindstrom", "Mathias Jensen", "Oliver Christensen", "Victor Nelsson"] },
        { group: "Group D", code: "TUN", name: "Tunisia", flags: ["tn"],
          players: ["Aymen Dahmen", "Mohamed Drager", "Montassar Talbi", "Yassine Meriah", "Ali Abdi", "Wajdi Kechrida", "Ellyes Skhiri", "Aissa Laidouni", "Naim Sliti", "Youssef Msakni", "Wahbi Khazri", "Issam Jebali", "Taha Yassine Khenissi", "Anis Ben Slimane", "Ghailene Chaalali", "Ferjani Sassi", "Bechir Ben Said", "Dylan Bronn"] },

        // Group E
        { group: "Group E", code: "ESP", name: "Spain", flags: ["es"],
          players: ["Unai Simon", "Dani Carvajal", "Rodri", "Aymeric Laporte", "Jordi Alba", "Cesar Azpilicueta", "Sergio Busquets", "Gavi", "Pedri", "Ferran Torres", "Dani Olmo", "Alvaro Morata", "Marco Asensio", "Nico Williams", "Ansu Fati", "Carlos Soler", "Robert Sanchez", "Pau Torres"] },
        { group: "Group E", code: "CRC", name: "Costa Rica", flags: ["cr"],
          players: ["Keylor Navas", "Keysher Fuller", "Oscar Duarte", "Francisco Calvo", "Bryan Oviedo", "Kendall Waston", "Celso Borges", "Yeltsin Tejeda", "Jewison Bennette", "Gerson Torres", "Joel Campbell", "Anthony Contreras", "Johan Venegas", "Bryan Ruiz", "Brandon Aguilera", "Roan Wilson", "Esteban Alvarado", "Carlos Martinez"] },
        { group: "Group E", code: "GER", name: "Germany", flags: ["de"],
          players: ["Manuel Neuer", "Thilo Kehrer", "Niklas Süle", "Antonio Rüdiger", "David Raum", "Nico Schlotterbeck", "Joshua Kimmich", "Leon Goretzka", "Ilkay Gündogan", "Serge Gnabry", "Jamal Musiala", "Thomas Müller", "Kai Havertz", "Niclas Füllkrug", "Leroy Sané", "Mario Götze", "Marc-André ter Stegen", "Christian Günter"] },
        { group: "Group E", code: "JPN", name: "Japan", flags: ["jp"],
          players: ["Shuichi Gonda", "Miki Yamane", "Maya Yoshida", "Ko Itakura", "Yuto Nagatomo", "Takehiro Tomiyasu", "Wataru Endo", "Hidemasa Morita", "Junya Ito", "Daichi Kamada", "Takefusa Kubo", "Daizen Maeda", "Takuma Asano", "Kaoru Mitoma", "Ritsu Doan", "Ao Tanaka", "Daniel Schmidt", "Hiroki Sakai"] },

        // Group F
        { group: "Group F", code: "BEL", name: "Belgium", flags: ["be"],
          players: ["Thibaut Courtois", "Timothy Castagne", "Toby Alderweireld", "Jan Vertonghen", "Thomas Meunier", "Leander Dendoncker", "Axel Witsel", "Youri Tielemans", "Kevin De Bruyne", "Eden Hazard", "Yannick Carrasco", "Michy Batshuayi", "Romelu Lukaku", "Leandro Trossard", "Thorgan Hazard", "Amadou Onana", "Simon Mignolet", "Arthur Theate"] },
        { group: "Group F", code: "CAN", name: "Canada", flags: ["ca"],
          players: ["Milan Borjan", "Alistair Johnston", "Steven Vitoria", "Kamal Miller", "Richie Laryea", "Sam Adekugbe", "Atiba Hutchinson", "Stephen Eustaquio", "Tajon Buchanan", "Alphonso Davies", "Junior Hoilett", "Jonathan David", "Cyle Larin", "Jonathan Osorio", "Ismael Kone", "Lucas Cavallini", "Dayne St. Clair", "Liam Millar"] },
        { group: "Group F", code: "MAR", name: "Morocco", flags: ["ma"],
          players: ["Yassine Bounou", "Achraf Hakimi", "Nayef Aguerd", "Romain Saiss", "Noussair Mazraoui", "Jawad El Yamiq", "Sofyan Amrabat", "Azzedine Ounahi", "Selim Amallah", "Hakim Ziyech", "Sofiane Boufal", "Youssef En-Nesyri", "Abderrazak Hamdallah", "Zakaria Aboukhlal", "Abde Ezzalzouli", "Yahya Attiat-Allah", "Munir Mohamedi", "Bilal El Khannouss"] },
        { group: "Group F", code: "CRO", name: "Croatia", flags: ["hr"],
          players: ["Dominik Livakovic", "Josip Juranovic", "Dejan Lovren", "Josko Gvardiol", "Borna Sosa", "Josip Sutalo", "Marcelo Brozovic", "Luka Modric", "Mateo Kovacic", "Andrej Kramaric", "Ivan Perisic", "Marko Livaja", "Bruno Petkovic", "Mario Pasalic", "Nikola Vlasic", "Mislav Orsic", "Ivica Ivusic", "Borna Barisic"] },

        // Group G
        { group: "Group G", code: "BRA", name: "Brazil", flags: ["br"],
          players: ["Alisson Becker", "Danilo", "Marquinhos", "Thiago Silva", "Alex Sandro", "Eder Militao", "Casemiro", "Lucas Paqueta", "Fred", "Raphinha", "Vinicius Jr", "Richarlison", "Neymar Jr", "Gabriel Jesus", "Rodrygo", "Antony", "Ederson", "Bruno Guimaraes"] },
        { group: "Group G", code: "SRB", name: "Serbia", flags: ["rs"],
          players: ["Vanja Milinkovic-Savic", "Nikola Milenkovic", "Milos Veljkovic", "Strahinja Pavlovic", "Andrija Zivkovic", "Filip Kostic", "Sasa Lukic", "Nemanja Gudelj", "Sergej Milinkovic-Savic", "Dusan Tadic", "Aleksandar Mitrovic", "Dusan Vlahovic", "Luka Jovic", "Nemanja Radonjic", "Darko Lazovic", "Filip Djuricic", "Predrag Rajkovic", "Stefan Mitrovic"] },
        { group: "Group G", code: "SUI", name: "Switzerland", flags: ["ch"],
          players: ["Yann Sommer", "Silvan Widmer", "Manuel Akanji", "Nico Elvedi", "Ricardo Rodriguez", "Fabian Schär", "Remo Freuler", "Granit Xhaka", "Djibril Sow", "Xherdan Shaqiri", "Ruben Vargas", "Breel Embolo", "Haris Seferovic", "Christian Fassnacht", "Denis Zakaria", "Fabian Frei", "Gregor Kobel", "Edimilson Fernandes"] },
        { group: "Group G", code: "CMR", name: "Cameroon", flags: ["cm"],
          players: ["Devis Epassy", "Collins Fai", "Jean-Charles Castelletto", "Nicolas N'Koulou", "Nouhou Tolo", "Enzo Ebosse", "Andre-Frank Zambo Anguissa", "Martin Hongla", "Pierre Kunde", "Bryan Mbeumo", "Karl Toko Ekambi", "Eric Maxim Choupo-Moting", "Vincent Aboubakar", "Georges-Kevin Nkoudou", "Christian Bassogog", "Samuel Gouet", "Simon Ngapandouetnbu", "Olivier Ntcham"] },

        // Group H
        { group: "Group H", code: "POR", name: "Portugal", flags: ["pt"],
          players: ["Diogo Costa", "Diogo Dalot", "Pepe", "Ruben Dias", "Raphael Guerreiro", "Joao Cancelo", "Ruben Neves", "William Carvalho", "Bernardo Silva", "Bruno Fernandes", "Cristiano Ronaldo", "Joao Felix", "Goncalo Ramos", "Rafael Leao", "Otavio", "Vitinha", "Rui Patricio", "Nuno Mendes"] },
        { group: "Group H", code: "GHA", name: "Ghana", flags: ["gh"],
          players: ["Lawrence Ati-Zigi", "Tariq Lamptey", "Daniel Amartey", "Mohammed Salisu", "Baba Rahman", "Alidu Seidu", "Thomas Partey", "Salis Abdul Samed", "Mohammed Kudus", "Andre Ayew", "Jordan Ayew", "Inaki Williams", "Kamaldeen Sulemana", "Osman Bukari", "Daniel-Kofi Kyereh", "Elisha Owusu", "Abdul Manaf Nurudeen", "Gideon Mensah"] },
        { group: "Group H", code: "URU", name: "Uruguay", flags: ["uy"],
          players: ["Sergio Rochet", "Guillermo Varela", "Diego Godin", "Jose Maria Gimenez", "Mathias Olivera", "Sebastian Coates", "Federico Valverde", "Rodrigo Bentancur", "Matias Vecino", "Giorgian De Arrascaeta", "Facundo Pellistri", "Darwin Nunez", "Luis Suarez", "Edinson Cavani", "Maxi Gomez", "Nicolas De La Cruz", "Fernando Muslera", "Matias Vina"] },
        { group: "Group H", code: "KOR", name: "South Korea", flags: ["kr"],
          players: ["Kim Seung-gyu", "Kim Moon-hwan", "Kim Min-jae", "Kim Young-gwon", "Kim Jin-su", "Kwon Kyung-won", "Jung Woo-young", "Hwang In-beom", "Lee Jae-sung", "Hwang Hee-chan", "Son Heung-min", "Cho Gue-sung", "Hwang Ui-jo", "Lee Kang-in", "Na Sang-ho", "Son Jun-ho", "Jo Hyeon-woo", "Kim Tae-hwan"] }
    ];

    teamsData.forEach(t => {
        if (!groups[t.group]) groups[t.group] = [];
        const stickers = [];
        // Sticker 1: Badge
        stickers.push({ code: `${t.code}1`, name: `${t.name} Federation Shield` });
        // Sticker 2: Team Photo
        stickers.push({ code: `${t.code}2`, name: `${t.name} Team Photo` });
        // Stickers 3-20: 18 Players
        t.players.forEach((p, idx) => {
            stickers.push({ code: `${t.code}${idx + 3}`, name: `${p} (${t.name})` });
        });
        groups[t.group].push({
            code: t.code,
            name: t.name,
            flags: t.flags,
            stickers
        });
    });

    return {
        id: 'wc2022',
        year: 2022,
        title: 'Qatar 2022',
        subtitle: 'Qatar • 32 Teams • 670 Stickers',
        dbKey: 'panini2022',
        isSequential: false,
        totalStickers: 670,
        phase: 'Phase 3 (2010–2022)',
        groups
    };
}

// Generate all 9 files
const configs = [
    buildWc1990(),
    buildWc1994(),
    buildWc1998(),
    buildWc2002(),
    buildWc2006(),
    buildWc2010(),
    buildWc2014(),
    buildWc2018(),
    buildWc2022()
];

configs.forEach(cfg => {
    const filePath = path.join(tournamentsDir, `${cfg.id}.js`);
    const content = createTournamentContent(cfg);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated ${cfg.id}.js (${cfg.totalStickers} stickers)`);
});

console.log('All 9 tournament files generated successfully!');

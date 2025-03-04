export const Pokedex: {[speciesid: string]: SpeciesData} = {
woodite: {
	num: 1.5,
	species: "Woodite",
	types: ["Grass", "Bug"],
	baseStats: {hp: 64, atk: 53, def: 65, spa: 44, spd: 55, spe: 37},
	abilities: {0: "Overgrow", H: "Tinted Lens"},
	weightkg: 4,
	evos: ["manteaf"],
},
manteaf: {
	num: 2.5,
	species: "Manteaf",
	types: ["Grass", "Bug"],
	baseStats: {hp: 68, atk: 85, def: 70, spa: 50, spd: 57, spe: 75},
	abilities: {0: "Overgrow", H: "Tinted Lens"},
	weightkg: 26.4,
	prevo: "Woodite",
	evos: ["fasmiwood"],
},
fasmiwood: {
	num: 3.5,
	species: "Fasmiwood",
	types: ["Grass", "Bug"],
	baseStats: {hp: 84, atk: 92, def: 85, spa: 75, spd: 80, spe: 119},
	abilities: {0: "Overgrow", H: "Tinted Lens"},
	weightkg: 36.6,
	prevo: "manteaf",
},
smice: {
	num: 4.5,
	species: "Smice",
	types: ["Fire", "Dark"],
	baseStats: {hp: 38, atk: 65, def: 34, spa: 65, spd: 46, spe: 60},
	abilities: {0: "Blaze", H: "White Smoke"},
	weightkg: 3.5,
	evos: ["ratevil"],
},
ratevil: {
	num: 5.5,
	species: "Ratevil",
	types: ["Fire", "Dark"],
	baseStats: {hp: 55, atk: 75, def: 53, spa: 70, spd: 57, spe: 95},
	abilities: {0: "Blaze", H: "Run Away"},
	weightkg: 18.5,
	prevo: "smice",
	evos: ["burstrat"],
},
burstrat: {
	num: 6.5,
	species: "Burstrat",
	types: ["Fire", "Dark"],
	baseStats: {hp: 68, atk: 120, def: 72, spa: 94, spd: 78, spe: 103},
	abilities: {0: "Blaze", H: "Hot Knife"},
	weightkg: 79.5,
	prevo: "ratevil",
},
doplash: {
	num: 7.5,
	species: "Doplash",
	types: ["Water"],
	baseStats: {hp: 62, atk: 52, def: 49, spa: 55, spd: 52, spe: 45},
	abilities: {0: "Torrent", H: "Swift Swim"},
	weightkg: 9,
	evos: ["makid"],
},
makid: {
	num: 8.5,
	species: "Makid",
	types: ["Water"],
	baseStats: {hp: 70, atk: 60, def: 55, spa: 80, spd: 85, spe: 55},
	abilities: {0: "Torrent", H: "Swift Swim"},
	weightkg: 28.2,
	prevo: "doplash",
	evos: ["merdolph"],
},
merdolph: {
	num: 9.5,
	species: "Merdolph",
	types: ["Water", "Psychic"],
	baseStats: {hp: 86, atk: 70, def: 78, spa: 120, spd: 95, spe: 86},
	abilities: {0: "Torrent", H: "Swift Swim"},
	weightkg: 44.9,
	prevo: "makid",
},
princeguin: {
	num: 10.5,
	species: "Princeguin",
	types: ["Ice", "Flying"],
	baseStats: {hp: 48, atk: 35, def: 38, spa: 55, spd: 34, spe: 45},
	abilities: {0: "Tangled Feet", 1: "Unaware", H: "Simple"},
	weightkg: 5.2,
	evos: ["kinguin"],
},
kinguin: {
	num: 11.5,
	species: "Kinguin",
	types: ["Ice", "Flying"],
	baseStats: {hp: 76, atk: 45, def: 80, spa: 90, spd: 90, spe: 101},
	abilities: {0: "Tangled Feet", 1: "Unaware", H: "Simple"},
	weightkg: 23,
	prevo: "princeguin",
},
ekidna: {
	num: 12.5,
	species: "Ekidna",
	types: ["Normal"],
	baseStats: {hp: 52, atk: 31, def: 65, spa: 23, spd: 31, spe: 60},
	abilities: {0: "Run Away", 1: "Rattled", H: "Weak Armor"},
	weightkg: 9.4,
	evos: ["porcusquill"],
},
porcusquill: {
	num: 13.5,
	species: "Porcusquill",
	types: ["Normal", "Steel"],
	baseStats: {hp: 82, atk: 83, def: 97, spa: 42, spd: 72, spe: 75},
	abilities: {0: "Iron Barbs", 1: "Protective Pelt", H: "Weak Armor"},
	weightkg: 110.5,
	prevo: "ekidna",
},
mop: {
	num: 14.5,
	species: "Mop",
	types: ["Normal"],
	baseStats: {hp: 60, atk: 48, def: 35, spa: 25, spd: 50, spe: 35},
	abilities: {0: "Water Absorb", 1: "Cute Charm", H: "Fluffy"},
	weightkg: 4.5,
	evos: ["mopper"],
},
mopper: {
	num: 15.5,
	species: "Mopper",
	types: ["Normal", "Water"],
	baseStats: {hp: 100, atk: 70, def: 80, spa: 70, spd: 95, spe: 52},
	abilities: {0: "Water Absorb", 1: "Cute Charm", H: "Fur Coat"},
	weightkg: 60.4,
	prevo: "mop",
},
puppessum: {
	num: 16.5,
	species: "Puppessum",
	types: ["Dark"],
	baseStats: {hp: 51, atk: 32, def: 38, spa: 58, spd: 38, spe: 62},
	abilities: {0: "Stench", 1: "Run Away", H: "Stakeout"},
	weightkg: 2.3,
	evos: ["grimssum"],
},
grimssum: {
	num: 17.5,
	species: "Grimssum",
	types: ["Dark", "Ghost"],
	baseStats: {hp: 65, atk: 84, def: 58, spa: 104, spd: 58, spe: 90},
	abilities: {0: "Stench", 1: "Run Away", H: "Stakeout"},
	weightkg: 1.8,
	prevo: "puppessum",
},
spiball: {
	num: 18.5,
	species: "Spiball",
	types: ["Bug", "Dark"],
	baseStats: {hp: 55, atk: 45, def: 34, spa: 26, spd: 42, spe: 48},
	abilities: {0: "Compound Eyes", 1: "Super Luck", H: "Mold Breaker"},
	weightkg: 8.5,
	evos: ["scopiball"],
},
scopiball: {
	num: 19.5,
	species: "Scopiball",
	types: ["Bug", "Dark"],
	baseStats: {hp: 82, atk: 118, def: 75, spa: 43, spd: 95, spe: 75},
	abilities: {0: "Compound Eyes", 1: "Super Luck", H: "Mold Breaker"},
	weightkg: 39.2,
	prevo: "spiball",
},
navird: {
	num: 20.5,
	species: "Navird",
	types: ["Flying", "Water"],
	baseStats: {hp: 32, atk: 48, def: 28, spa: 48, spd: 28, spe: 85},
	abilities: {0: "Hustle", 1: "Early Bird", H: "Big Pecks"},
	weightkg: 2.5,
	evos: ["peckbeard"],
},
peckbeard: {
	num: 21.5,
	species: "Peckbeard",
	types: ["Flying", "Dark"],
	baseStats: {hp: 72, atk: 105, def: 70, spa: 55, spd: 75, spe: 109},
	abilities: {0: "Hustle", 1: "Pickpocket", H: "Defiant"},
	weightkg: 15.6,
	prevo: "navird",
},
bask: {
	num: 22.5,
	species: "Bask",
	types: ["Dark", "Flying"],
	baseStats: {hp: 32, atk: 45, def: 35, spa: 66, spd: 35, spe: 67},
	abilities: {0: "Intimidate", 1: "No Guard", H: "Bad Dreams"},
	weightkg: 2,
	evos: ["peayes"],
},
peayes: {
	num: 23.5,
	species: "Peayes",
	types: ["Dark", "Flying"],
	baseStats: {hp: 65, atk: 90, def: 75, spa: 100, spd: 60, spe: 96},
	abilities: {0: "Intimidate", 1: "No Guard", H: "Bad Dreams"},
	weightkg: 22.3,
	prevo: "bask",
},
weaworm: {
	num: 24.5,
	species: "Weaworm",
	types: ["Bug"],
	baseStats: {hp: 45, atk: 40, def: 35, spa: 50, spd: 45, spe: 45},
	abilities: {0: "Swarm", 1: "Shield Dust", H: "Tinted Lens"},
	weightkg: 2.9,
	evos: ["lilfly"],
},
lilfly: {
	num: 25.5,
	species: "Lilfly",
	types: ["Bug", "Flying"],
	baseStats: {hp: 50, atk: 50, def: 60, spa: 80, spd: 65, spe: 70},
	abilities: {0: "Swarm", 1: "Shield Dust", H: "Tinted Lens"},
	weightkg: 3.4,
	prevo: "weaworm",
	evos: ["koafly"],
},
koafly: {
	num: 26.5,
	species: "Koafly",
	types: ["Bug", "Fighting"],
	baseStats: {hp: 65, atk: 121, def: 80, spa: 50, spd: 75, spe: 109},
	abilities: {0: "Justified", 1: "Shield Dust", H: "Iron Fist"},
	weightkg: 118.3,
	prevo: "lilfly",
},
puptwin: {
	num: 27.5,
	species: "Puptwin",
	types: ["Normal"],
	baseStats: {hp: 47, atk: 65, def: 34, spa: 30, spd: 36, spe: 60},
	abilities: {0: "Strong Jaw", 1: "Scrappy", H: "Moxie"},
	weightkg: 19.1,
	evos: ["duog"],
},
duog: {
	num: 28.5,
	species: "Duog",
	types: ["Normal"],
	baseStats: {hp: 67, atk: 105, def: 74, spa: 55, spd: 76, spe: 105},
	abilities: {0: "Strong Jaw", 1: "Scrappy", H: "Moxie"},
	weightkg: 115,
	prevo: "puptwin",
},
bureep: {
	num: 29.5,
	species: "Bureep",
	types: ["Fairy", "Fire"],
	baseStats: {hp: 67, atk: 33, def: 62, spa: 33, spd: 78, spe: 42},
	abilities: {0: "Flame Body", 1: "Cute Charm", H: "Fur Coat"},
	weightkg: 18.2,
	evos: ["parllama"],
},
parllama: {
	num: 30.5,
	species: "Parllama",
	types: ["Fairy", "Fire"],
	baseStats: {hp: 85, atk: 74, def: 82, spa: 74, spd: 95, spe: 71},
	abilities: {0: "Flame Body", 1: "Cute Charm", H: "Fur Coat"},
	weightkg: 200.5,
	prevo: "bureep",
},
debi: {
	num: 31.5,
	species: "Debi",
	types: ["Water"],
	baseStats: {hp: 20, atk: 10, def: 45, spa: 30, spd: 15, spe: 80},
	abilities: {0: "Wimp out", H: "Run Away"},
	weightkg: 11.5,
	evos: ["deecrust"],
},
deecrust: {
	num: 32.5,
	species: "Deecrust",
	types: ["Water", "Dragon"],
	baseStats: {hp: 98, atk: 120, def: 88, spa: 90, spd: 84, spe: 60},
	abilities: {0: "Shell Armor", 1: "Rain Dish", H: "Deep Sea"},
	weightkg: 235,
	prevo: "debi",
},
pickynest: {
	num: 33.5,
	species: "Pickynest",
	types: ["Normal"],
	baseStats: {hp: 38, atk: 45, def: 50, spa: 35, spd: 60, spe: 35},
	abilities: {0: "Keen Eye", 1: "Overcoat", H: "Early Bird"},
	weightkg: 2.4,
	evos: ["vulcdor"],
},
vulcdor: {
	num: 34.5,
	species: "Vulcdor",
	types: ["Normal", "Fire"],
	baseStats: {hp: 68, atk: 110, def: 60, spa: 95, spd: 65, spe: 99},
	abilities: {0: "Keen Eye", 1: "Reckless", H: "Rock Head"},
	weightkg: 198.4,
	prevo: "pickynest",
},
buroach: {
	num: 35.5,
	species: "Buroach",
	types: ["Bug", "Psychic"],
	baseStats: {hp: 46, atk: 42, def: 45, spa: 63, spd: 52, spe: 47},
	abilities: {0: "Synchronize", 1: "Unburden", H: "Vital Spirit"},
	weightkg: 9.4,
	evos: ["bugler", "roamai"],
},
bugler: {
	num: 36.5,
	species: "Bugler",
	types: ["Bug", "Psychic"],
	gender: "M",
	baseStats: {hp: 70, atk: 70, def: 70, spa: 110, spd: 90, spe: 90},
	abilities: {0: "Technician", 1: "Unburden", H: "Competitive"},
	weightkg: 54.2,
	prevo: "buroach",
},
roamai: {
	num: 37.5,
	species: "Roamai",
	types: ["Bug", "Psychic"],
	gender: "F",
	baseStats: {hp: 70, atk: 110, def: 90, spa: 70, spd: 70, spe: 90},
	abilities: {0: "Technician", 1: "Unburden", H: "Magic Bounce"},
	weightkg: 54.2,
	prevo: "buroach",
},
rack: {
	num: 38.5,
	species: "Rack",
	types: ["Rock", "Ground"],
	baseStats: {hp: 60, atk: 45, def: 90, spa: 15, spd: 25, spe: 65},
	abilities: {0: "Sand Rush", 1: "Sturdy", H: "Rough Skin"},
	weightkg: 20.5,
	evos: ["mountse"],
},
mountse: {
	num: 39.5,
	species: "Mountse",
	types: ["Rock", "Ground"],
	baseStats: {hp: 90, atk: 110, def: 115, spa: 35, spd: 55, spe: 90},
	abilities: {0: "Sand Rush", 1: "Sturdy", H: "Rough Skin"},
	weightkg: 324,
	prevo: "rack",
},
lacorn: {
	num: 40.5,
	species: "Lacorn",
	types: ["Bug", "Fairy"],
	baseStats: {hp: 70, atk: 31, def: 80, spa: 70, spd: 65, spe: 60},
	abilities: {0: "Unaware", 1: "Prankster", H: "Sweet Veil"},
	weightkg: 9.9,
	evos: ["antney"],
},
antney: {
	num: 41.5,
	species: "Antney",
	types: ["Bug", "Fairy"],
	baseStats: {hp: 85, atk: 31, def: 105, spa: 90, spd: 85, spe: 80},
	abilities: {0: "Unaware", 1: "Prankster", H: "Sweet Veil"},
	weightkg: 38.5,
	prevo: "lacorn",
},
hairpu: {
	num: 42.5,
	species: "Hairpu",
	types: ["Bug", "Poison"],
	baseStats: {hp: 55, atk: 65, def: 50, spa: 40, spd: 70, spe: 65},
	abilities: {0: "Intimidate", 1: "Shed Skin", H: "Infiltrator"},
	weightkg: 2.2,
	evos: ["sockorm"],
},
sockorm: {
	num: 43.5,
	species: "Sockorm",
	types: ["Bug", "Poison"],
	baseStats: {hp: 90, atk: 88, def: 90, spa: 52, spd: 100, spe: 78},
	abilities: {0: "Intimidate", 1: "Shed Skin", H: "Infiltrator"},
	weightkg: 65.2,
	prevo: "hairpu",
},
kibaion: {
	num: 44.5,
	species: "Kibaion",
	types: ["Grass"],
	baseStats: {hp: 45, atk: 25, def: 30, spa: 60, spd: 50, spe: 70},
	abilities: {0: "Chlorophyll", 1: "Water Absorb", H: "Solar Power"},
	weightkg: 2,
	evos: ["kibasol"],
},
kibasol: {
	num: 45.5,
	species: "Kibasol",
	types: ["Grass", "Fire"],
	baseStats: {hp: 62, atk: 75, def: 82, spa: 95, spd: 95, spe: 75},
	abilities: {0: "Chlorophyll", 1: "Water Absorb", H: "Solar Power"},
	weightkg: 20.5,
	prevo: "kibaion",
},
gnodog: {
	num: 46.5,
	species: "Gnodog",
	types: ["Ground", "Fairy"],
	baseStats: {hp: 60, atk: 31, def: 65, spa: 70, spd: 80, spe: 70},
	abilities: {0: "Prankster", 1: "Unaware", H: "Magician"},
	weightkg: 4.3,
	evos: ["dressog"],
},
dressog: {
	num: 47.5,
	species: "Dressog",
	types: ["Ground", "Fairy"],
	baseStats: {hp: 80, atk: 31, def: 85, spa: 90, spd: 105, spe: 85},
	abilities: {0: "Prankster", 1: "Unaware", H: "Magician"},
	weightkg: 29.8,
	prevo: "gnodog",
},
tigle: {
	num: 48.5,
	species: "Tigle",
	types: ["Bug"],
	baseStats: {hp: 55, atk: 25, def: 45, spa: 25, spd: 35, spe: 15},
	abilities: {0: "Shield Dust", 1: "Scrappy", H: "Speed Boost"},
	weightkg: 4.5,
	evos: ["biitora"],
},
biitora: {
	num: 49.5,
	species: "Biitora",
	types: ["Bug", "Normal"],
	baseStats: {hp: 80, atk: 105, def: 85, spa: 60, spd: 85, spe: 125},
	abilities: {0: "Shield Dust", 1: "Scrappy", H: "Speed Boost"},
	weightkg: 172,
	prevo: "tigle",
},
psyguana: {
	num: 50.5,
	species: "Psyguana",
	types: ["Psychic", "Dragon"],
	baseStats: {hp: 35, atk: 35, def: 62, spa: 80, spd: 90, spe: 52},
	abilities: {0: "Forewarn", 1: "Anticipation", H: "Magic Guard"},
	weightkg: 5.2,
	evos: ["forguana"],
},
forguana: {
	num: 51.5,
	species: "Forguana",
	types: ["Psychic", "Dragon"],
	baseStats: {hp: 80, atk: 65, def: 85, spa: 100, spd: 120, spe: 60},
	abilities: {0: "Forewarn", 1: "Anticipation", H: "Magic Guard"},
	weightkg: 80.5,
	prevo: "psyguana",
},
timk: {
	num: 52.5,
	species: "Timk",
	types: ["Bug", "Fire"],
	baseStats: {hp: 65, atk: 35, def: 45, spa: 35, spd: 50, spe: 30},
	abilities: {0: "Flame Body", 1: "Aftermath", H: "Flash Fire"},
	weightkg: 5.5,
	evos: ["dynabite"],
},
dynabite: {
	num: 53.5,
	species: "Dynabite",
	types: ["Bug", "Fire"],
	baseStats: {hp: 105, atk: 95, def: 82, spa: 60, spd: 120, spe: 48},
	abilities: {0: "Flame Body", 1: "Aftermath", H: "Flash Fire"},
	weightkg: 85.4,
	prevo: "timk",
},
positt: {
	num: 54.5,
	species: "Positt",
	types: ["Poison", "Dark"],
	baseStats: {hp: 25, atk: 45, def: 20, spa: 95, spd: 20, spe: 80},
	abilities: {0: "Poison Point", 1: "Sniper", H: "Moxie"},
	weightkg: 2.3,
	evos: ["frogassin"],
},
frogassin: {
	num: 55.5,
	species: "Frogassin",
	types: ["Poison", "Dark"],
	baseStats: {hp: 55, atk: 112, def: 60, spa: 100, spd: 60, spe: 103},
	abilities: {0: "Poison Touch", 1: "Sniper", H: "Moxie"},
	weightkg: 21.8,
	prevo: "positt",
},
jaklove: {
	num: 56.5,
	species: "Jaklove",
	types: ["Normal", "Fairy"],
	baseStats: {hp: 62, atk: 73, def: 60, spa: 80, spd: 60, spe: 121},
	abilities: {0: "Serene Grace", 1: "Friend Guard", H: "Magic Guard"},
	weightkg: 26.2,
},
wospark: {
	num: 57.5,
	species: "Wospark",
	types: ["Bug", "Electric"],
	baseStats: {hp: 60, atk: 55, def: 50, spa: 65, spd: 50, spe: 45},
	abilities: {0: "Download", 1: "Lightning Rod", H: "Air Ionizer"},
	weightkg: 3.1,
	evos: ["ravesp"],
},
ravesp: {
	num: 58.5,
	species: "Ravesp",
	types: ["Bug", "Electric"],
	baseStats: {hp: 64, atk: 60, def: 65, spa: 110, spd: 70, spe: 104},
	abilities: {0: "Download", 1: "Lightning Rod", H: "Air Ionizer"},
	weightkg: 29.5,
	prevo: "wospark",
},
cabbitt: {
	num: 59.5,
	species: "Cabbitt",
	types: ["Grass", "Ground"],
	baseStats: {hp: 60, atk: 45, def: 52, spa: 52, spd: 55, spe: 78},
	abilities: {0: "Water Absorb", 1: "Harvest", H: "Grass Pelt"},
	weightkg: 5.1,
	evos: ["haresprout"],
},
haresprout: {
	num: 60.5,
	species: "Haresprout",
	types: ["Grass", "Ground"],
	baseStats: {hp: 102, atk: 65, def: 80, spa: 65, spd: 80, spe: 124},
	abilities: {0: "Water Absorb", 1: "Harvest", H: "Grassy Surge"},
	weightkg: 38.4,
	prevo: "cabbitt",
},
seerd: {
	num: 61.5,
	species: "Seerd",
	types: ["Grass"],
	baseStats: {hp: 44, atk: 51, def: 45, spa: 55, spd: 50, spe: 65},
	abilities: {0: "Harvest", 1: "Intimidate", H: "Defiant"},
	weightkg: 2.1,
	evos: ["evialden"],
},
evialden: {
	num: 62.5,
	species: "Evialden",
	types: ["Grass", "Dark"],
	baseStats: {hp: 68, atk: 63, def: 53, spa: 67, spd: 63, spe: 91},
	abilities: {0: "Harvest", 1: "Intimidate", H: "Defiant"},
	weightkg: 25.2,
	prevo: "seerd",
	evos: ["ostranch"],
},
ostranch: {
	num: 63.5,
	species: "Ostranch",
	types: ["Grass", "Dark"],
	baseStats: {hp: 95, atk: 90, def: 82, spa: 73, spd: 85, spe: 110},
	abilities: {0: "Harvest", 1: "Intimidate", H: "Defiant"},
	weightkg: 60.5,
	prevo: "evialden",
},
pasuragu: {
	num: 64.5,
	species: "Pasuragu",
	types: ["Water", "Grass"],
	baseStats: {hp: 62, atk: 25, def: 56, spa: 60, spd: 70, spe: 20},
	abilities: {0: "Regenerator", 1: "Sticky Hold", H: "Drizzle"},
	weightkg: 7.3,
	evos: ["grussgu"],
},
grussgu: {
	num: 65.5,
	species: "Grussgu",
	types: ["Water", "Grass"],
	baseStats: {hp: 96, atk: 55, def: 78, spa: 85, spd: 100, spe: 36},
	abilities: {0: "Regenerator", 1: "Sticky Hold", H: "Drizzle"},
	weightkg: 30.9,
	prevo: "pasuragu",
},
orvenom: {
	num: 66.5,
	species: "Orvenom",
	types: ["Poison", "Dark"],
	baseStats: {hp: 68, atk: 95, def: 67, spa: 50, spd: 75, spe: 118},
	abilities: {0: "Pickpocket", 1: "Poison Touch", H: "Unburden"},
	weightkg: 15.1,
},
nerdium: {
	num: 67.5,
	species: "Nerdium",
	types: ["Water"],
	baseStats: {hp: 35, atk: 25, def: 30, spa: 85, spd: 40, spe: 60},
	abilities: {0: "Swift Swim", 1: "Analytic", H: "Telepathy"},
	weightkg: 2.5,
	evos: ["smartish"],
},
smartish: {
	num: 68.5,
	species: "Smartish",
	types: ["Water", "Psychic"],
	baseStats: {hp: 95, atk: 55, def: 65, spa: 130, spd: 75, spe: 70},
	abilities: {0: "Open Mind", 1: "Analytic", H: "Telepathy"},
	weightkg: 80.9,
	prevo: "nerdium",
},
higarden: {
	num: 69.5,
	species: "Higarden",
	types: ["Grass"],
	baseStats: {hp: 95, atk: 65, def: 60, spa: 45, spd: 60, spe: 50},
	abilities: {0: "Thick Fat", 1: "Rain Dish", H: "Huge Power"},
	weightkg: 49.5,
	evos: ["unimount"],
},
unimount: {
	num: 70.5,
	species: "Unimount",
	types: ["Grass", "Ice"],
	baseStats: {hp: 145, atk: 85, def: 80, spa: 85, spd: 80, spe: 25},
	abilities: {0: "Thick Fat", 1: "Snow Warning", H: "Huge Power"},
	weightkg: 650,
	prevo: "higarden",
},
birnal: {
	num: 71.5,
	species: "Birnal",
	types: ["Normal", "Flying"],
	baseStats: {hp: 45, atk: 55, def: 50, spa: 75, spd: 60, spe: 80},
	abilities: {0: "Frisk", 1: "Pressure", H: "Early Bird"},
	weightkg: 10.2,
	evos: ["yeagle"],
},
yeagle: {
	num: 72.5,
	species: "Yeagle",
	types: ["Normal", "Flying"],
	baseStats: {hp: 83, atk: 65, def: 70, spa: 85, spd: 75, spe: 95},
	abilities: {0: "Frisk", 1: "Pressure", H: "Adaptability"},
	weightkg: 55.4,
	prevo: "birnal",
},
flysh: {
	num: 73.5,
	species: "Flysh",
	types: ["Water", "Flying"],
	baseStats: {hp: 40, atk: 45, def: 35, spa: 63, spd: 55, spe: 70},
	abilities: {0: "Water Veil", H: "Swift Swim"},
	weightkg: 1.5,
	evos: ["seaplane"],
},
seaplane: {
	num: 74.5,
	species: "Seaplane",
	types: ["Water", "Flying"],
	baseStats: {hp: 60, atk: 70, def: 55, spa: 80, spd: 55, spe: 85},
	abilities: {0: "Water Veil", H: "Swift Swim"},
	weightkg: 15.8,
	prevo: "flysh",
	evos: ["airpier"],
},
airpier: {
	num: 75.5,
	species: "Airpier",
	types: ["Water", "Flying"],
	baseStats: {hp: 75, atk: 106, def: 75, spa: 73, spd: 75, spe: 130},
	abilities: {0: "Water Veil", 1: "Justified", H: "Hyper Cutter"},
	weightkg: 72.4,
	prevo: "seaplane",
},
likaba: {
	num: 76.5,
	species: "Likaba",
	types: ["Psychic"],
	baseStats: {hp: 60, atk: 50, def: 45, spa: 70, spd: 55, spe: 55},
	abilities: {0: "Berserk", 1: "Infiltrator", H: "Leecher"},
	weightkg: 15.7,
	evos: ["sucabra"],
},
sucabra: {
	num: 77.5,
	species: "Sucabra",
	types: ["Psychic", "Flying"],
	baseStats: {hp: 72, atk: 85, def: 65, spa: 115, spd: 75, spe: 101},
	abilities: {0: "Berserk", 1: "Infiltrator", H: "Leecher"},
	weightkg: 90.2,
	prevo: "likaba",
},
mousse: {
	num: 78.5,
	species: "Mousse",
	types: ["Fairy"],
	baseStats: {hp: 72, atk: 54, def: 60, spa: 50, spd: 70, spe: 42},
	abilities: {0: "Thick Fat", 1: "Sweet Veil", H: "Gluttony"},
	weightkg: 10,
	evos: ["donter"],
},
donter: {
	num: 79.5,
	species: "Donter",
	types: ["Fairy"],
	baseStats: {hp: 100, atk: 84, def: 85, spa: 70, spd: 92, spe: 53},
	abilities: {0: "Thick Fat", 1: "Sweet Veil", H: "Gluttony"},
	weightkg: 80.5,
	prevo: "mousse",
},
melops: {
	num: 80.5,
	species: "Melops",
	types: ["Grass"],
	baseStats: {hp: 65, atk: 60, def: 50, spa: 40, spd: 50, spe: 45},
	abilities: {0: "Battle Armor", 1: "Harvest", H: "Rock Head"},
	weightkg: 10.2,
	evos: ["harvetops"],
},
harvetops: {
	num: 81.5,
	species: "Harvetops",
	types: ["Grass"],
	baseStats: {hp: 90, atk: 75, def: 75, spa: 50, spd: 60, spe: 55},
	abilities: {0: "Battle Armor", 1: "Harvest", H: "Rock Head"},
	weightkg: 97.4,
	prevo: "melops",
	evos: ["pentamelop"],
},
pentamelop: {
	num: 82.5,
	species: "Pentamelop",
	types: ["Grass", "Steel"],
	baseStats: {hp: 118, atk: 105, def: 105, spa: 66, spd: 75, spe: 65},
	abilities: {0: "Battle Armor", 1: "Harvest", H: "Rock Head"},
	weightkg: 340.7,
	prevo: "harvetops",
},
scarferret: {
	num: 83.5,
	species: "Scarferret",
	types: ["Fairy"],
	baseStats: {hp: 45, atk: 60, def: 50, spa: 80, spd: 60, spe: 73},
	abilities: {0: "Cute Charm", 1: "Limber", H: "Misty Surge"},
	weightkg: 1.5,
	evos: ["lovefume"],
},
lovefume: {
	num: 84.5,
	species: "Lovefume",
	types: ["Fairy", "Poison"],
	baseStats: {hp: 74, atk: 70, def: 80, spa: 115, spd: 95, spe: 100},
	abilities: {0: "Aroma Veil", 1: "Magic Bounce", H: "Misty Surge"},
	weightkg: 25.8,
	prevo: "scarferret",
},
smolle: {
	num: 85.5,
	species: "Smolle",
	types: ["Ground", "Ice"],
	baseStats: {hp: 76, atk: 72, def: 65, spa: 45, spd: 65, spe: 60},
	abilities: {0: "Slush Rush", 1: "Sand Veil", H: "Snow Cloak"},
	weightkg: 8.8,
	evos: ["molvel"],
},
molvel: {
	num: 86.5,
	species: "Molvel",
	types: ["Ground", "Ice"],
	baseStats: {hp: 120, atk: 105, def: 74, spa: 60, spd: 74, spe: 75},
	abilities: {0: "Slush Rush", 1: "Sand Veil", H: "Snow Warning"},
	weightkg: 290.5,
	prevo: "smolle",
},
toxtaur: {
	num: 87.5,
	species: "Toxtaur",
	types: ["Poison", "Fighting"],
	gender: "M",
	baseStats: {hp: 75, atk: 85, def: 54, spa: 45, spd: 54, spe: 61},
	abilities: {0: "Rivalry", 1: "Poison Touch", H: "Hyper Cutter"},
	weightkg: 15.7,
	evos: ["venotauro"],
},
venotauro: {
	num: 88.5,
	species: "Venotauro",
	types: ["Poison", "Fighting"],
	gender: "M",
	baseStats: {hp: 105, atk: 120, def: 90, spa: 50, spd: 85, spe: 54},
	abilities: {0: "Moxie", 1: "Poison Touch", H: "Defiant"},
	weightkg: 134.5,
	prevo: "toxtaur",
},
helmdillo: {
	num: 89.5,
	species: "Helmdillo",
	types: ["Ground", "Electric"],
	baseStats: {hp: 67, atk: 54, def: 72, spa: 50, spd: 80, spe: 35},
	abilities: {0: "Battle Armor", 1: "Rock Head", H: "Bulletproof"},
	weightkg: 12.5,
	evos: ["rescurer"],
},
rescurer: {
	num: 90.5,
	species: "Rescurer",
	types: ["Ground", "Electric"],
	baseStats: {hp: 92, atk: 74, def: 95, spa: 70, spd: 115, spe: 40},
	abilities: {0: "Battle Armor", 1: "Rock Head", H: "Bulletproof"},
	weightkg: 30.9,
	prevo: "helmdillo",
},
crimske: {
	num: 91.5,
	species: "Crimske",
	types: ["Fire"],
	baseStats: {hp: 34, atk: 51, def: 45, spa: 65, spd: 50, spe: 60},
	abilities: {0: "Poison Point", 1: "Shed Skin", H: "White Smoke"},
	weightkg: 6.4,
	evos: ["snagant"],
},
snagant: {
	num: 92.5,
	species: "Snagant",
	types: ["Fire"],
	baseStats: {hp: 60, atk: 65, def: 65, spa: 80, spd: 70, spe: 65},
	abilities: {0: "Poison Point", 1: "Shed Skin", H: "Marvel Scale"},
	weightkg: 16.8,
	prevo: "crimske",
	evos: ["zhulong"],
},
zhulong: {
	num: 93.5,
	species: "Zhulong",
	types: ["Fire", "Dragon"],
	baseStats: {hp: 80, atk: 85, def: 76, spa: 105, spd: 100, spe: 88},
	abilities: {0: "Poison Heal", 1: "Shed Skin", H: "Levitate"},
	weightkg: 180.5,
	prevo: "snagant",
},
yufo: {
	num: 94.5,
	species: "Yufo",
	types: ["Psychic", "Steel"],
	gender: "N",
	baseStats: {hp: 55, atk: 34, def: 85, spa: 76, spd: 15, spe: 51},
	abilities: {0: "Filter", 1: "Telepathy", H: "Levitate"},
	weightkg: 60.8,
	evos: ["spavader"],
},
spavader: {
	num: 95.5,
	species: "Spavader",
	types: ["Psychic", "Steel"],
	gender: "N",
	baseStats: {hp: 70, atk: 68, def: 145, spa: 102, spd: 65, spe: 51},
	abilities: {0: "Filter", 1: "Telepathy", H: "Levitate"},
	weightkg: 580.9,
	prevo: "yufo",
},
grichick: {
	num: 96.5,
	species: "Grichick",
	types: ["Fire", "Electric"],
	baseStats: {hp: 54, atk: 76, def: 46, spa: 60, spd: 46, spe: 65},
	abilities: {0: "Reckless", 1: "Keen Eye", H: "Sniper"},
	weightkg: 15.2,
	evos: ["grileo"],
},
grileo: {
	num: 97.5,
	species: "Grileo",
	types: ["Fire", "Electric"],
	baseStats: {hp: 75, atk: 115, def: 65, spa: 92, spd: 70, spe: 92},
	abilities: {0: "Success", 1: "Keen Eye", H: "Sniper"},
	weightkg: 79.8,
	prevo: "grichick",
},
sbusho: {
	num: 98.5,
	species: "Sbusho",
	types: ["Rock", "Grass"],
	baseStats: {hp: 80, atk: 55, def: 65, spa: 55, spd: 65, spe: 35},
	abilities: {0: "Leaf Guard", 1: "Chlorophyll", H: "Multiscale"},
	weightkg: 25.4,
	evos: ["pangearth"],
},
pangearth: {
	num: 99.5,
	species: "Pangearth",
	types: ["Rock", "Grass"],
	baseStats: {hp: 130, atk: 75, def: 100, spa: 65, spd: 80, spe: 45},
	abilities: {0: "Leaf Plates", 1: "Chlorophyll", H: "Multiscale"},
	weightkg: 189.7,
	prevo: "sbusho",
},
ankylonite: {
	num: 100.5,
	species: "Ankylonite",
	types: ["Rock", "Fighting"],
	baseStats: {hp: 70, atk: 95, def: 70, spa: 35, spd: 35, spe: 50},
	abilities: {0: "Guts", 1: "Battle Armor", H: "Intimidate"},
	weightkg: 40.8,
	evos: ["champkylo"],
},
champkylo: {
	num: 101.5,
	species: "Champkylo",
	types: ["Rock", "Fighting"],
	baseStats: {hp: 90, atk: 145, def: 90, spa: 45, spd: 65, spe: 60},
	abilities: {0: "Guts", 1: "Battle Armor", H: "Intimidate"},
	weightkg: 206.9,
	prevo: "ankylonite",
},
slomoss: {
	num: 102.5,
	species: "Slomoss",
	types: ["Rock", "Grass"],
	baseStats: {hp: 95, atk: 85, def: 60, spa: 55, spd: 25, spe: 35},
	abilities: {0: "Truant", H: "Immunity"},
	weightkg: 34.2,
	evos: ["milomoss"],
},
milomoss: {
	num: 103.5,
	species: "Milomoss",
	types: ["Rock", "Grass"],
	baseStats: {hp: 140, atk: 132, def: 74, spa: 62, spd: 52, spe: 35},
	abilities: {0: "Tough Claws", 1: "Gluttony", H: "Immunity"},
	weightkg: 485,
	prevo: "slomoss",
},
rampeck: {
	num: 104.5,
	species: "Rampeck",
	types: ["Rock", "Fighting"],
	baseStats: {hp: 45, atk: 61, def: 48, spa: 61, spd: 45, spe: 95},
	abilities: {0: "Early Bird", 1: "Intimidate", H: "Quick Feet"},
	weightkg: 15.2,
	evos: ["terroccer"],
},
terroccer: {
	num: 105.5,
	species: "Terroccer",
	types: ["Rock", "Fighting"],
	baseStats: {hp: 70, atk: 100, def: 75, spa: 70, spd: 60, spe: 120},
	abilities: {0: "Skill Link", 1: "Intimidate", H: "Quick Feet"},
	weightkg: 98.2,
	prevo: "rampeck",
},
tifrost: {
	num: 106.5,
	species: "Tifrost",
	types: ["Rock", "Ice"],
	baseStats: {hp: 52, atk: 90, def: 54, spa: 25, spd: 54, spe: 80},
	abilities: {0: "Strong Jaw", 1: "Snow Cloak", H: "Refrigerate"},
	weightkg: 12.9,
	evos: ["smilofrost"],
},
smilofrost: {
	num: 107.5,
	species: "Smilofrost",
	types: ["Rock", "Ice"],
	baseStats: {hp: 78, atk: 123, def: 74, spa: 30, spd: 76, spe: 114},
	abilities: {0: "Strong Jaw", 1: "Snow Cloak", H: "Refrigerate"},
	weightkg: 84,
	prevo: "tifrost",
},
vizcachu: {
	num: 108.5,
	species: "Vizcachu",
	types: ["Electric", "Normal"],
	baseStats: {hp: 59, atk: 54, def: 55, spa: 90, spd: 55, spe: 123},
	abilities: {0: "Run Away", 1: "Scrappy", H: "Magnet Pull"},
	weightkg: 8,
},
paramer: {
	num: 109.5,
	species: "Paramer",
	types: ["Steel", "Dragon"],
	baseStats: {hp: 50, atk: 75, def: 75, spa: 35, spd: 45, spe: 60},
	abilities: {0: "Clear Body", 1: "Rock Head", H: "Steely Spirit"},
	weightkg: 45.5,
	evos: ["toolsaur"],
},
toolsaur: {
	num: 110.5,
	species: "Toolsaur",
	types: ["Steel", "Dragon"],
	baseStats: {hp: 84, atk: 95, def: 110, spa: 45, spd: 85, spe: 70},
	abilities: {0: "Mirror Armor", 1: "Sheer Force", H: "Steely Spirit"},
	weightkg: 204.4,
	prevo: "paramer",
},
neuro: {
	num: 111.5,
	species: "Neuro",
	types: ["Psychic", "Electric"],
	baseStats: {hp: 60, atk: 35, def: 45, spa: 70, spd: 75, spe: 55},
	abilities: {0: "Levitate", 1: "Telepathy", H: "Psychic Surge"},
	weightkg: 1.3,
	evos: ["brancell"],
},
brancell: {
	num: 112.5,
	species: "Brancell",
	types: ["Psychic", "Electric"],
	baseStats: {hp: 85, atk: 45, def: 75, spa: 110, spd: 125, spe: 65},
	abilities: {0: "Levitate", 1: "Telepathy", H: "Psychic Surge"},
	weightkg: 74.2,
	prevo: "neuro",
},
freezegon: {
	num: 113.5,
	species: "Freezegon",
	types: ["Dragon", "Ice"],
	baseStats: {hp: 50, atk: 60, def: 50, spa: 55, spd: 50, spe: 35},
	abilities: {0: "Run Away", 1: "Snow Cloak", H: "Slush Rush"},
	weightkg: 38.1,
	evos: ["snoak"],
},
snoak: {
	num: 114.5,
	species: "Snoak",
	types: ["Dragon", "Ice"],
	baseStats: {hp: 80, atk: 70, def: 80, spa: 80, spd: 85, spe: 25},
	abilities: {0: "Fur Coat", 1: "Snow Cloak", H: "Slush Rush"},
	weightkg: 100.4,
	prevo: "freezegon",
	evos: ["coldrake"],
},
coldrake: {
	num: 115.5,
	species: "Coldrake",
	types: ["Dragon", "Ice"],
	baseStats: {hp: 100, atk: 120, def: 90, spa: 110, spd: 95, spe: 85},
	abilities: {0: "Storm", 1: "Snow Cloak", H: "Slush Rush"},
	weightkg: 120.2,
	prevo: "snoak",
},
capowt: {
	num: 116.5,
	species: "Capowt",
	types: ["Fighting", "Fire"],
	baseStats: {hp: 34, atk: 70, def: 40, spa: 65, spd: 45, spe: 85},
	abilities: {0: "Quick Feet", 1: "Dancer", H: "Hustle"},
	weightkg: 2.4,
	evos: ["capoedar"],
},
capoedar: {
	num: 117.5,
	species: "Capoedar",
	types: ["Fighting", "Fire"],
	baseStats: {hp: 64, atk: 90, def: 60, spa: 95, spd: 70, spe: 116},
	abilities: {0: "Quick Feet", 1: "Dancer", H: "Hustle"},
	weightkg: 52.1,
	prevo: "capowt",
},
warcon: {
	num: 118.5,
	species: "Warcon",
	types: ["Normal", "Flying"],
	baseStats: {hp: 60, atk: 80, def: 60, spa: 45, spd: 55, spe: 70},
	abilities: {0: "Scrappy", 1: "Inner Focus", H: "Guts"},
	weightkg: 3.7,
	evos: ["istrebitel"],
},
istrebitel: {
	num: 119.5,
	species: "Istrebitel",
	types: ["Fighting", "Flying"],
	baseStats: {hp: 75, atk: 110, def: 75, spa: 55, spd: 70, spe: 95},
	abilities: {0: "Scrappy", 1: "Inner Focus", H: "Guts"},
	weightkg: 44.6,
	prevo: "warcon",
},
voltcro: {
	num: 120.5,
	species: "Voltcro",
	types: ["Electric", "Dragon"],
	baseStats: {hp: 62, atk: 70, def: 55, spa: 48, spd: 62, spe: 50},
	abilities: {0: "Motor Drive", 1: "Solar Power", H: "Minus"},
	weightkg: 12.3,
	evos: ["wirechomp"],
},
wirechomp: {
	num: 121.5,
	species: "Wirechomp",
	types: ["Electric", "Dragon"],
	baseStats: {hp: 72, atk: 105, def: 75, spa: 64, spd: 62, spe: 65},
	abilities: {0: "Motor Drive", 1: "Solar Power", H: "Plus"},
	weightkg: 26.7,
	prevo: "voltcro",
	evos: ["thungator"],
},
thungator: {
	num: 122.5,
	species: "Thungator",
	types: ["Electric", "Dragon"],
	baseStats: {hp: 82, atk: 124, def: 80, spa: 102, spd: 82, spe: 65},
	abilities: {0: "Motor Drive", 1: "Solar Power", H: "Electric Surge"},
	weightkg: 94.8,
	prevo: "wirechomp",
},
scalpick: {
	num: 123.5,
	species: "Scalpick",
	types: ["Flying", "Dragon"],
	baseStats: {hp: 55, atk: 50, def: 40, spa: 60, spd: 35, spe: 80},
	abilities: {0: "Hustle", 1: "Early Bird", H: "Marvel Scale"},
	weightkg: 4.5,
	evos: ["roostlax"],
},
roostlax: {
	num: 124.5,
	species: "Roostlax",
	types: ["Flying", "Dragon"],
	baseStats: {hp: 72, atk: 80, def: 70, spa: 68, spd: 60, spe: 60},
	abilities: {0: "Truant", 1: "Early Bird", H: "Marvel Scale"},
	weightkg: 80.2,
	prevo: "scalpick",
	evos: ["eagatrice"],
},
eagatrice: {
	num: 125.5,
	species: "Eagatrice",
	types: ["Flying", "Dragon"],
	baseStats: {hp: 101, atk: 116, def: 81, spa: 82, spd: 74, spe: 86},
	abilities: {0: "Intimidate", 1: "Early Bird", H: "Marvel Scale"},
	weightkg: 90.5,
	prevo: "roostlax",
},
theri: {
	num: 126.5,
	species: "Theri",
	types: ["Dark", "Steel"],
	baseStats: {hp: 70, atk: 95, def: 65, spa: 35, spd: 46, spe: 46},
	abilities: {0: "Tough Claws", 1: "Hyper Cutter", H: "Rattled"},
	weightkg: 11.1,
	evos: ["theriscyno"],
},
theriscyno: {
	num: 127.5,
	species: "Theriscyno",
	types: ["Dark", "Steel"],
	baseStats: {hp: 102, atk: 112, def: 84, spa: 63, spd: 88, spe: 66},
	abilities: {0: "Tough Claws", 1: "Contrary", H: "Frightening"},
	weightkg: 102.4,
	prevo: "theri",
},
ghoca: {
	num: 128.5,
	species: "Ghoca",
	types: ["Ghost", "Psychic"],
	baseStats: {hp: 44, atk: 65, def: 35, spa: 105, spd: 96, spe: 124},
	abilities: {0: "Levitate", 1: "Infiltrator", H: "Dazzling"},
	weightkg: 4.5,
},
moclaw: {
	num: 129.5,
	species: "Moclaw",
	types: ["Water"],
	baseStats: {hp: 65, atk: 72, def: 64, spa: 52, spd: 64, spe: 28},
	abilities: {0: "Shell Armor", 1: "Tough Claws", H: "Regenerator"},
	weightkg: 9.1,
	evos: ["jawlusk"],
},
jawlusk: {
	num: 130.5,
	species: "Jawlusk",
	types: ["Water", "Dark"],
	baseStats: {hp: 98, atk: 110, def: 100, spa: 58, spd: 85, spe: 36},
	abilities: {0: "Shell Armor", 1: "Tough Claws", H: "Regenerator"},
	weightkg: 110.4,
	prevo: "moclaw",
},
tumbna: {
	num: 131.5,
	species: "Tumbna",
	types: ["Water", "Ghost"],
	baseStats: {hp: 24, atk: 63, def: 47, spa: 63, spd: 34, spe: 54},
	abilities: {0: "Perish Body", 1: "Cursed Body", H: "Wandering Spirit"},
	weightkg: 1.4,
	evos: ["plesioskul"],
},
plesioskul: {
	num: 132.5,
	species: "Plesioskul",
	types: ["Water", "Ghost"],
	baseStats: {hp: 94, atk: 90, def: 88, spa: 120, spd: 78, spe: 58},
	abilities: {0: "Perish Body", 1: "Cursed Body", H: "Wandering Spirit"},
	weightkg: 72.1,
	prevo: "tumbna",
},
laveel: {
	num: 133.5,
	species: "Laveel",
	types: ["Water", "Fire"],
	baseStats: {hp: 115, atk: 45, def: 73, spa: 95, spd: 110, spe: 60},
	abilities: {0: "Flame Body", 1: "Wonder Skin", H: "Storm Drain"},
	weightkg: 118.6,
},
thermaque: {
	num: 134.5,
	species: "Thermaque",
	types: ["Ice", "Fire"],
	baseStats: {hp: 70, atk: 67, def: 55, spa: 86, spd: 64, spe: 72},
	abilities: {0: "Dry Skin", 1: "Anger Point", H: "Berserk"},
	weightkg: 34.2,
	evos: ["thermandril"],
},
thermandril: {
	num: 135.5,
	species: "Thermandril",
	types: ["Ice", "Fire"],
	baseStats: {hp: 75, atk: 90, def: 65, spa: 125, spd: 70, spe: 93},
	abilities: {0: "Dry Skin", 1: "Anger Point", H: "Berserk"},
	weightkg: 112.8,
	prevo: "thermaque",
},
tamantula: {
	num: 136.5,
	species: "Tamantula",
	types: ["Bug", "Poison"],
	baseStats: {hp: 45, atk: 65, def: 35, spa: 60, spd: 45, spe: 82},
	abilities: {0: "Corrosion", 1: "Compound Eyes", H: "Merciless"},
	weightkg: 2.4,
	evos: ["spideth"],
},
spideth: {
	num: 137.5,
	species: "Spideth",
	types: ["Bug", "Poison"],
	baseStats: {hp: 75, atk: 113, def: 70, spa: 72, spd: 81, spe: 103},
	abilities: {0: "Corrosion", 1: "Compound Eyes", H: "Merciless"},
	weightkg: 65.7,
	prevo: "tamantula",
},
abomigo: {
	num: 138.5,
	species: "Abomigo",
	types: ["Dark", "Ice"],
	baseStats: {hp: 95, atk: 118, def: 74, spa: 65, spd: 74, spe: 74},
	abilities: {0: "Slush Rush", 1: "Insomnia", H: "Sheer Force"},
	weightkg: 82.4,
},
chillma: {
	num: 139.5,
	species: "Chillma",
	types: ["Water", "Ice"],
	baseStats: {hp: 74, atk: 70, def: 42, spa: 60, spd: 40, spe: 24},
	abilities: {0: "Ice Body", 1: "Slush Rush", H: "Cute Charm"},
	weightkg: 10.2,
	evos: ["wintber"],
},
wintber: {
	num: 140.5,
	species: "Wintber",
	types: ["Water", "Ice"],
	baseStats: {hp: 84, atk: 75, def: 60, spa: 65, spd: 61, spe: 60},
	abilities: {0: "Ice Body", 1: "Slush Rush", H: "Cute Charm"},
	weightkg: 64.2,
	prevo: "chillma",
	evos: ["evergrowl"],
},
evergrowl: {
	num: 141.5,
	species: "Evergrowl",
	types: ["Water", "Ice"],
	baseStats: {hp: 94, atk: 142, def: 77, spa: 65, spd: 77, spe: 81},
	abilities: {0: "Ice Body", 1: "Slush Rush", H: "Eternal Ice"},
	weightkg: 125.8,
	prevo: "wintber",
},
stontler: {
	num: 142.5,
	species: "Stontler",
	types: ["Rock"],
	baseStats: {hp: 80, atk: 62, def: 110, spa: 33, spd: 23, spe: 15},
	abilities: {0: "Solid Rock", 1: "Sturdy", H: "Sand Stream"},
	weightkg: 20.8,
	evos: ["balatone"],
},
balatone: {
	num: 143.5,
	species: "Balatone",
	types: ["Rock"],
	baseStats: {hp: 100, atk: 72, def: 200, spa: 64, spd: 34, spe: 15},
	abilities: {0: "Solid Rock", 1: "Sturdy", H: "Sand Stream"},
	weightkg: 280.4,
	prevo: "stontler",
},
coayena: {
	num: 144.5,
	species: "Coayena",
	types: ["Fire", "Poison"],
	baseStats: {hp: 35, atk: 70, def: 35, spa: 55, spd: 35, spe: 55},
	abilities: {0: "White Smoke", 1: "Cute Charm", H: "Moxie"},
	weightkg: 12.5,
	evos: ["pherosmoke"],
},
pherosmoke: {
	num: 145.5,
	species: "Pherosmoke",
	types: ["Fire", "Poison"],
	gender: "F",
	baseStats: {hp: 63, atk: 111, def: 60, spa: 85, spd: 60, spe: 100},
	abilities: {0: "Neutralizing Gas", 1: "Cute Charm", H: "Moxie"},
	weightkg: 64.3,
	prevo: "coayena",
},
octovase: {
	num: 146.5,
	species: "Octovase",
	types: ["Water", "Ground"],
	baseStats: {hp: 55, atk: 38, def: 80, spa: 52, spd: 52, spe: 48},
	abilities: {0: "Weak Armor", 1: "Shell Armor", H: "Regenerator"},
	weightkg: 25.7,
	evos: ["cthulhurn"],
},
cthulhurn: {
	num: 147.5,
	species: "Cthulhurn",
	types: ["Water", "Ground"],
	baseStats: {hp: 75, atk: 45, def: 110, spa: 86, spd: 80, spe: 59},
	abilities: {0: "Weak Armor", 1: "Shell Armor", H: "Regenerator"},
	weightkg: 95.7,
	prevo: "octovase",
},
shahood: {
	num: 148.5,
	species: "Shahood",
	types: ["Ghost", "Dark"],
	baseStats: {hp: 56, atk: 85, def: 56, spa: 65, spd: 65, spe: 70},
	abilities: {0: "Overcoat", 1: "Prankster", H: "Void Body"},
	weightkg: 1.2,
	evos: ["karakasa"],
},
karakasa: {
	num: 149.5,
	species: "Karakasa",
	types: ["Ghost", "Dark"],
	baseStats: {hp: 85, atk: 110, def: 85, spa: 70, spd: 90, spe: 75},
	abilities: {0: "Overcoat", 1: "Prankster", H: "Void Body"},
	weightkg: 1.8,
	prevo: "shahood",
},
grag: {
	num: 150.5,
	species: "Grag",
	types: ["Poison", "Ghost"],
	gender: "F",
	baseStats: {hp: 38, atk: 15, def: 35, spa: 75, spd: 45, spe: 60},
	abilities: {0: "Serene Grace", 1: "Water Absorb", H: "Levitate"},
	weightkg: 1.6,
	evos: ["kimokus"],
},
kimokus: {
	num: 151.5,
	species: "Kimokus",
	types: ["Poison", "Ghost"],
	gender: "F",
	baseStats: {hp: 65, atk: 52, def: 62, spa: 110, spd: 72, spe: 115},
	abilities: {0: "Serene Grace", 1: "Water Absorb", H: "Levitate"},
	weightkg: 12.4,
	prevo: "grag",
},
toknight: {
	num: 152.5,
	species: "Toknight",
	types: ["Ghost", "Steel"],
	gender: "N",
	baseStats: {hp: 62, atk: 45, def: 130, spa: 85, spd: 70, spe: 77},
	abilities: {0: "Prankster", 1: "Battle Armor", H: "Cursed Body"},
	weightkg: 4.7,
},
cowpy: {
	num: 153.5,
	species: "Cowpy",
	types: ["Fire"],
	baseStats: {hp: 70, atk: 60, def: 40, spa: 50, spd: 40, spe: 50},
	abilities: {0: "Reckless", 1: "Stamina", H: "Thick Fat"},
	weightkg: 14.8,
	evos: ["cowork"],
},
cowork: {
	num: 154.5,
	species: "Cowork",
	types: ["Fire"],
	baseStats: {hp: 75, atk: 95, def: 50, spa: 55, spd: 50, spe: 80},
	abilities: {0: "Reckless", 1: "Stamina", H: "Drought"},
	weightkg: 29.7,
	prevo: "cowpy",
	evos: ["barbecow"],
},
barbecow: {
	num: 155.5,
	species: "Barbecow",
	types: ["Fire", "Ground"],
	baseStats: {hp: 90, atk: 115, def: 80, spa: 90, spd: 75, spe: 86},
	abilities: {0: "Sheer Force", 1: "Stamina", H: "Drought"},
	weightkg: 115.7,
	prevo: "cowork",
},
hoorel: {
	num: 156.5,
	species: "Hoorel",
	types: ["Water", "Steel"],
	baseStats: {hp: 60, atk: 95, def: 75, spa: 25, spd: 45, spe: 85},
	abilities: {0: "Battle Armor", 1: "Rough Skin", H: "Lightning Rod"},
	weightkg: 12.4,
	evos: ["baishark"],
},
baishark: {
	num: 157.5,
	species: "Baishark",
	types: ["Water", "Steel"],
	baseStats: {hp: 80, atk: 110, def: 95, spa: 45, spd: 65, spe: 95},
	abilities: {0: "Strong Jaw", 1: "Rough Skin", H: "Lightning Rod"},
	weightkg: 93.9,
	prevo: "hoorel",
},
luviu: {
	num: 158.5,
	species: "Luviu",
	types: ["Water", "Fairy"],
	baseStats: {hp: 73, atk: 50, def: 75, spa: 95, spd: 85, spe: 117},
	abilities: {0: "Swift Swim", 1: "Triage", H: "Pixilate"},
	weightkg: 98.2,
	prevo: "luvdisc",
},
shucklony: {
	num: 159.5,
	species: "Shucklony",
	types: ["Bug", "Rock"],
	baseStats: {hp: 60, atk: 20, def: 200, spa: 50, spd: 200, spe: 5},
	abilities: {0: "Sticky Hold", 1: "Sap Sipper", H: "Contrary"},
	weightkg: 60.5,
	prevo: "shuckle",
},
dreamer: {
	num: 160.5,
	species: "Dreamer",
	types: ["Psychic", "Fighting"],
	baseStats: {hp: 85, atk: 113, def: 80, spa: 73, spd: 120, spe: 77},
	abilities: {0: "Comatose"},
	weightkg: 85.6,
	prevo: "hypno",
},
nohtyp: {
	num: 161.5,
	species: "Nohtyp",
	types: ["Poison", "Ground"],
	baseStats: {hp: 100, atk: 105, def: 99, spa: 65, spd: 89, spe: 80},
	abilities: {0: "Intimidate", 1: "Shed Skin", H: "Mold Breaker"},
	weightkg: 70.5,
	prevo: "arbok",
},
skyradise: {
	num: 162.5,
	species: "Skyradise",
	types: ["Flying"],
	gender: "N",
	baseStats: {hp: 200, atk: 105, def: 90, spa: 145, spd: 90, spe: 50},
	abilities: {0: "Magic Guard", H: "Magic Bounce"},
	weightkg: 999.9,
},
luvdisc: {
		inherit: true,
		evos: ["Luviu"],
	},
arbok: {
		inherit: true,
		evos: ["Nohtyp"],
	},	
hypno: {
		inherit: true,
		evos: ["Dreamer"],
	},	
shuckle: {
		inherit: true,
		evos: ["Shucklony"],
	},	
};

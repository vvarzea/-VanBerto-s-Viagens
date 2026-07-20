// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║              CONFIGURAÇÃO DE VIAGENS — EDITAR AQUI                          ║
// ║  VISITED   → países visitados (id numérico ISO 3166-1)                      ║
// ║  PLACES    → cidades e locais com coordenadas                               ║
// ║  HOMES     → definido dentro de initMap()                                   ║
// ║  UK_DETAIL → sub-nações do Reino Unido                                      ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ─── DATA ───────────────────────────────────────────────────────────────────
const VISITED = {
  276: { name:"Alemanha \uD83C\uDDE9\uD83C\uDDEA",           year:"2019 \u00B7 Ver\u00E3o",       note:"Berlim \u2014 cidade que reinventou a sua hist\u00F3ria. Do Checkpoint Charlie ao Memorial do Holocausto, passando pela arte de rua, o Muro e uma vida noturna que n\u00E3o dorme \uD83C\uDF7A\uD83C\uDFA8\uD83C\uDFDB\uFE0F" },
  40:  { name:"\u00C1ustria \uD83C\uDDE6\uD83C\uDDF9",            year:"2021 \u00B7 Ver\u00E3o",       note:"Viena \u2014 eleg\u00E2ncia imperial com caf\u00E9 da tarde no Sch\u00F6nbrunn, a \u00D3pera de Viena e Mozart em cada esquina. A cidade que inventou o refinamento europeu \u2615\uD83C\uDFB6\uD83C\uDFF0" },
  56:  { name:"B\u00E9lgica \uD83C\uDDE7\uD83C\uDDEA",            year:"2017 \u00B7 Ver\u00E3o",       note:"Bruxelas \u2014 a Grand-Place deslumbrante, capital da Europa, waffles quentes na rua e a melhor cerveja trapista do mundo. Pequena mas absolutamente imperd\u00EDvel \uD83C\uDF6B\uD83C\uDF7A\uD83C\uDFDB\uFE0F" },
  124: { name:"Canad\u00E1 \uD83C\uDDE8\uD83C\uDDE6",             year:"2023 \u00B7 Ver\u00E3o",       note:"Toronto \u2014 metr\u00F3pole multicultural \u00E0s margens do Lago Ontario com a CN Tower. Cataratas do Niágara \u2014 a maior for\u00E7a da natureza que j\u00E1 vi de perto. Nenhuma foto faz justi\u00E7a \uD83C\uDF41\uD83D\uDCA6\uD83C\uDF06" },
  132: { name:"Cabo Verde \uD83C\uDDE8\uD83C\uDDFB",          year:"2024 \u00B7 P\u00E1scoa",      note:"Santiago \u2014 a maior ilha e ber\u00E7o da cultura cabo-verdiana. Praias selvagens, mornas ao vivo, a Cidade Velha Patrim\u00F3nio da Humanidade e a hospitalidade \u00FAnica da morabeza \uD83C\uDFB5\uD83C\uDF0A\uD83C\uDDF5\uD83C\uDDF9" },
  208: { name:"Dinamarca \uD83C\uDDE9\uD83C\uDDF0",           year:"2022 \u00B7 Natal",       note:"Copenhaga \u2014 a capital mais sustent\u00E1vel da Europa. Nyhavn a cores, gastronomia n\u00F3rdica de topo, design que inspira o mundo inteiro e uma cidade onde se vive a pedalar \uD83D\uDEB2\uD83C\uDF08\uD83C\uDF7D\uFE0F" },
  724: { name:"Espanha \uD83C\uDDEA\uD83C\uDDF8",             year:"2007\u20132025",          note:"Loret del Mar + Benidorm (2007 P\u00E1scoa) \u00B7 Lobios/Galiza (2011 Ver\u00E3o) \u00B7 Barcelona (2023 P\u00E1scoa) \u00B7 Madrid (2025 Natal). O vizinho de sempre \u2014 sol, tapas, Gaud\u00ED e o Prado \u2600\uFE0F\uD83E\uDD58\uD83C\uDFDB\uFE0F" },
  840: { name:"EUA \uD83C\uDDFA\uD83C\uDDF8",                year:"2023 \u00B7 Ver\u00E3o",       note:"Nova Iorque \u2014 Central Park ao amanhecer, o Brooklyn Bridge ao p\u00F4r-do-sol, Times Square \u00E0s 3h da manh\u00E3 e a energia de uma cidade que \u00E9 literalmente um universo pr\u00F3prio \uD83D\uDDFD\uD83C\uDF06\uD83C\uDF55" },
  784: { name:"Emirados \u00C1rabes \uD83C\uDDE6\uD83C\uDDEA",     year:"2024 \u00B7 Natal",       note:"Abu Dhabi \u2014 a mesquita Sheikh Zayed em m\u00E1rmore branco deslumbrante, ilhas artificiais e o contraste fascinante entre tradi\u00E7\u00E3o bedu\u00EDna milenar e modernidade futurista \uD83D\uDD4C\u2728\uD83C\uDFDC\uFE0F" },
  231: { name:"Eti\u00F3pia \uD83C\uDDEA\uD83C\uDDF9",             year:"2025 \u00B7 Ver\u00E3o",       note:"Adis Abeba \u2014 a cerim\u00F3nia do caf\u00E9 na sua origem com tr\u00EAs ch\u00E1venas rituais, mercados coloridos de Merkato, a Igreja de S\u00E3o Jorge e a puls\u00E3o de uma \u00C1frica aut\u00EAntica e surpreendente \u2615\uD83C\uDF0D\u271D\uFE0F" },
  250: { name:"Fran\u00E7a \uD83C\uDDEB\uD83C\uDDF7",              year:"2015 \u00B7 2026",        note:"Paris (2015 Ver\u00E3o) \u2014 Torre Eiffel ao anoitecer, Louvre, croissants frescos e a magia da Disneyland Paris. Marselha + Nice (2026 P\u00E1scoa) \u2014 Vieux-Port e a Riviera Francesa \uD83D\uDDFC\uD83C\uDFF0\uD83C\uDF0A\uD83E\uDD50" },
  246: { name:"Finl\u00E2ndia \uD83C\uDDEB\uD83C\uDDEE",           year:"2018 \u00B7 2021",        note:"Hels\u00EDnquia (2018 Ver\u00E3o) \u2014 design n\u00F3rdico e saunas \u00E0 beira do B\u00E1ltico. Rovaniemi / Lap\u00F3nia (2021 Natal) \u2014 a terra do Pai Natal \uD83C\uDF85, ca\u00E7a \u00E0 aurora boreal, paisagens nevadas de renas e o sil\u00EAncio absoluto do \u00C1rtico \uD83C\uDF0C\uD83E\uDD8C\u2744\uFE0F" },
  300: { name:"Gr\u00E9cia \uD83C\uDDEC\uD83C\uDDF7",              year:"2019 \u00B7 Ver\u00E3o",       note:"Atenas \u2014 Partenon ao p\u00F4r-do-sol, Acr\u00F3pole, hist\u00F3ria antiga \u00E0s camadas, gastronomia incr\u00EDvel e o barulho alegre do mercado Monastiraki \uD83E\uDED2\uD83C\uDFDB\uFE0F\uD83C\uDF05" },
  348: { name:"Hungria \uD83C\uDDED\uD83C\uDDFA",             year:"2021 \u00B7 Ver\u00E3o",       note:"Budapeste \u2014 a p\u00E9rola do Dan\u00FAbio. As Termas Sz\u00E9chenyi, o Parlamento iluminado \u00E0 noite, a rua Andr\u00E1ssy e a vista do Basti\u00E3o dos Pescadores \uD83C\uDFF0\uD83D\uDEC1\uD83C\uDF09" },
  380: { name:"It\u00E1lia \uD83C\uDDEE\uD83C\uDDF9",              year:"2016 \u00B7 2019",        note:"Roma (2016 Ver\u00E3o) \u2014 Coliseu, Fontana di Trevi, Vaticano e a melhor pizza da vida. Veneza (2019 Ver\u00E3o) \u2014 g\u00F3ndolas, canais e a magia de uma cidade flutuante \uD83C\uDF55\uD83D\uDEA3\uD83C\uDFDB\uFE0F" },
  372: { name:"Irlanda \uD83C\uDDEE\uD83C\uDDEA",             year:"2025 \u00B7 P\u00E1scoa",      note:"Dublin \u2014 o Temple Bar animado, o Trinity College e o Book of Kells, Guinness na sua origem e as paisagens verdes que n\u00E3o acabam nunca \uD83C\uDF40\uD83C\uDF7A\uD83C\uDFF0" },
  352: { name:"Isl\u00E2ndia \uD83C\uDDEE\uD83C\uDDF8",            year:"2018 \u00B7 Ver\u00E3o",       note:"Anel de Ouro, cascata Sk\u00F3gafoss, geysers a borbulhar, praias de areia negra e o sol da meia-noite \u2014 um planeta dentro de um planeta \uD83C\uDF0B\uD83D\uDCA7\uD83C\uDF0C" },
  504: { name:"Marrocos \uD83C\uDDF2\uD83C\uDDE6",            year:"2023 \u00B7 P\u00E1scoa",      note:"Marrakech \u2014 medina labir\u00EDntica com os souks de especiarias, a Pra\u00E7a Jemaa el-Fna ao anoitecer. Deserto Agafay \u2014 noite sob as estrelas no sil\u00EAncio do Saara \uD83E\uDE94\uD83D\uDC2A\uD83C\uDFDC\uFE0F" },
  462: { name:"Maldivas \uD83C\uDDF2\uD83C\uDDFB",            year:"2024 \u00B7 Ver\u00E3o",       note:"Para\u00EDso na Terra \u2014 Water Villas sobre a \u00E1gua turquesa, snorkeling com tubar\u00F5es-baleia, p\u00F4res-do-sol cor de laranja e sil\u00EAncio absoluto do \u00CDndico \uD83D\uDC20\uD83C\uDF34\uD83C\uDF05" },
  492: { name:"M\u00F3naco \uD83C\uDDF2\uD83C\uDDE8",              year:"2026 \u00B7 P\u00E1scoa",      note:"O principado mais glamoroso do mundo \u2014 o circuito de F1 a p\u00E9, os casinos de Monte Carlo, o Porto H\u00E9rcules cheio de iates e a vista do Rocher \uD83C\uDFCE\uFE0F\u2728\uD83C\uDFB0" },
  578: { name:"Noruega \uD83C\uDDF3\uD83C\uDDF4",             year:"2018 \u00B7 Natal",       note:"Oslo \u2014 museus de vikings, a \u00D3pera com teto caminh\u00E1vel, neve e fiordes no inverno. A beleza austera e majestosa do norte da Europa \uD83C\uDFD4\uFE0F\u2744\uFE0F\uD83D\uDEF6" },
  620: { name:"Portugal \uD83C\uDDF5\uD83C\uDDF9",            year:"sempre",             note:"Casa. O pa\u00EDs mais bonito do mundo \u2014 do Algarve dourado \u00E0s ilhas verdes dos A\u00E7ores, de Lisboa \u00E0s serras \uD83D\uDC9B\uD83C\uDF0A\uD83C\uDFD4\uFE0F" },
  528: { name:"Pa\u00EDses Baixos \uD83C\uDDF3\uD83C\uDDF1",       year:"2017 \u00B7 Ver\u00E3o",       note:"Amesterd\u00E3o \u2014 canais ao p\u00F4r-do-sol, o Rijksmuseum, tulipas, bicicletas em todo o lado e a Anne Frank House que deixa marca para sempre \uD83C\uDF37\uD83D\uDEB2\uD83C\uDFDB\uFE0F" },
  616: { name:"Pol\u00F3nia \uD83C\uDDF5\uD83C\uDDF1",             year:"2023 \u00B7 Natal",       note:"Vars\u00F3via \u2014 cidade reconstru\u00EDda da cinza com o Casco Hist\u00F3rico a brilhar. Crac\u00F3via \u2014 a Pra\u00E7a do Mercado medieval, o Castelo de Wawel e a mem\u00F3ria de Auschwitz \uD83E\uDD5F\uD83C\uDFF0\u2744\uFE0F" },
  634: { name:"Qatar \uD83C\uDDF6\uD83C\uDDE6",               year:"2024 \u00B7 Ver\u00E3o",       note:"Doha \u2014 a Corniche ao amanhecer, o souq Waqif com incenso e especiarias, os museus de arte isl\u00E2mica e os arranha-c\u00E9us futuristas do West Bay \uD83C\uDFD9\uFE0F\uD83D\uDD4C\uD83C\uDF05" },
  203: { name:"Rep. Checa \uD83C\uDDE8\uD83C\uDDFF",          year:"2017 \u00B7 Ver\u00E3o",       note:"Praga \u2014 a cidade das cem torres. A Ponte Carlos ao alvorecer, o Rel\u00F3gio Astron\u00F3mico, o Castelo e o bairro judaico \u2014 hist\u00F3ria em cada pedra \uD83C\uDF7A\uD83C\uDFF0\uD83C\uDF09" },
  756: { name:"Su\u00ED\u00E7a \uD83C\uDDE8\uD83C\uDDED",               year:"2017 \u00B7 Natal",       note:"Zurique \u2014 Alpes nevados na janela, chocolates nas arcadas, mercado de Natal com cheiro a gl\u00FChwein e a precis\u00E3o de um rel\u00F3gio su\u00ED\u00E7o em cada detalhe \u26F0\uFE0F\uD83C\uDF6B\u2744\uFE0F" },
  752: { name:"Su\u00E9cia \uD83C\uDDF8\uD83C\uDDEA",              year:"2019 \u00B7 2022",        note:"Estocolmo (2019 Natal) \u2014 a Gamla Stan medieval, os museus Vasa e ABBA e o design n\u00F3rdico elegante. Malm\u00F6 (2022 Natal) \u2014 a ponte para a Dinamarca e o charme tranquilo \u2744\uFE0F\uD83C\uDF32\uD83C\uDF84" },
  764: { name:"Tail\u00E2ndia \uD83C\uDDF9\uD83C\uDDED",           year:"2024 \u00B7 Natal",       note:"Bangkok \u2014 templos dourados e caos delicioso. Phuket \u2014 praias paradis\u00EDacas. Ilhas Phi Phi \u2014 \u00E1guas cristalinas de tirar o f\u00F4lego. Khao Ping Kan \u2014 a ilha de James Bond \uD83C\uDF5C\uD83C\uDFDD\uFE0F\uD83C\uDF3A" },
  792: { name:"Turquia \uD83C\uDDF9\uD83C\uDDF7",             year:"2022 \u00B7 Ver\u00E3o",       note:"Istambul \u2014 Hagia Sophia, o Grande Bazar e o B\u00F3sforo entre dois mundos. Capad\u00F3cia \u2014 bal\u00F5es ao amanhecer sobre um paisagem lunar de chamin\u00E9s de fada \uD83D\uDD4C\uD83C\uDF88\uD83C\uDF0B" },
  834: { name:"Tanz\u00E2nia \uD83C\uDDF9\uD83C\uDDFF",            year:"2025 \u00B7 Ver\u00E3o",       note:"Zanzibar \u2014 a Stone Town com labirinto de ruelas hist\u00F3ricas, especiarias arom\u00E1ticas, praias infinitas e o p\u00F4r-do-sol mais belo do \u00CDndico \uD83C\uDFDD\uFE0F\uD83C\uDF05\uD83E\uDD81" },
  336: { name:"Vaticano \uD83C\uDDFB\uD83C\uDDE6",            year:"2016 \u00B7 Ver\u00E3o",       note:"O menor estado soberano do mundo \u2014 a Bas\u00EDlica de S\u00E3o Pedro, a Piet\u00E0 de Michelangelo, os Museus Vaticanos e a Capela Sistina que faz calar qualquer um \uD83D\uDD4A\uFE0F\uD83C\uDFA8\u271D\uFE0F" },
  826: { name:"Reino Unido \uD83C\uDDEC\uD83C\uDDE7",         year:"2014/24/25",         note:"Inglaterra (2014 P\u00E1scoa) \u00B7 Esc\u00F3cia (2024 Natal) \u00B7 Irlanda do Norte (2025 P\u00E1scoa)" },
  688: { name:"S\u00E9rvia \uD83C\uDDF7\uD83C\uDDF8",               year:"2026 \u00B7 Ver\u00E3o",       note:"Belgrado \u2014 a cidade que n\u00E3o dorme, fortaleza de Kalemegdan, o Templo de S\u00E3o Sava e uma energia Balc\u00E3 inconfund\u00EDvel \uD83C\uDFDB\uFE0F\uD83C\uDF7A" },
  807: { name:"Maced\u00F3nia do Norte \uD83C\uDDF2\uD83C\uDDF0", year:"2026 \u00B7 Ver\u00E3o",       note:"Esc\u00F3pia \u2014 a capital com o Lago Ohrid e patrim\u00F3nio medieval inesperado \uD83C\uDFD9\uFE0F\uD83C\uDF0A" },
  383: { name:"Kosovo \uD83C\uDDFD\uD83C\uDDF0",               year:"2026 \u00B7 Ver\u00E3o",       note:"Pristina \u2014 um dos pa\u00EDses mais jovens do mundo, energ\u00E9tico e surpreendente \uD83D\uDD4A\uFE0F" },
};

// UK sub-nations for display (share numeric ID 826 in topojson)
const UK_DETAIL = [
  { name:"Inglaterra \uD83C\uDDEC\uD83C\uDDE7", year:"2014 \u00B7 P\u00E1scoa", note:"Londres \u2014 os museus gratuitos e imponentes, o West End, a Tower Bridge, Camden e um fish & chips no pub a fechar \uD83C\uDFAD\uD83C\uDF5F\uD83C\uDFA1" },
  { name:"Esc\u00F3cia \uD83C\uDDEC\uD83C\uDDE7", year:"2024 \u00B7 Natal", note:"Edimburgo \u2014 o Castelo iluminado na rocha, a Royal Mile nevada, o mercado de Natal e o whisky a aquecer a noite escocesa \uD83E\uDD43\uD83C\uDFF0\u2744\uFE0F" },
  { name:"Irlanda do Norte \uD83C\uDDEC\uD83C\uDDE7", year:"2025 \u00B7 P\u00E1scoa", note:"Belfast \u2014 o Titanic Quarter e a hist\u00F3ria do navio. Giant's Causeway \u2014 as colunas de basalto hexagonais no Atl\u00E2ntico, um lugar de outro mundo \u2618\uFE0F\uD83C\uDF0A\uD83D\uDDFF" },
  { name:"Pa\u00EDs de Gales \uD83C\uDDEC\uD83C\uDDE7", year:"\u2014", note:"Ainda por explorar \uD83D\uDD1C" },
];

// Internal UK borders as GeoJSON LineStrings (simplified but geographically accurate)
const UK_INTERNAL_BORDERS = {
  type:"FeatureCollection",
  features:[
    { type:"Feature", properties:{n:"eng-sco"},
      geometry:{ type:"LineString",
        coordinates:[[-5.08,54.95],[-3.06,54.97],[-2.79,55.07],[-2.45,55.37],[-2.17,55.63],[-1.97,55.77]] }},
    { type:"Feature", properties:{n:"eng-wal"},
      geometry:{ type:"LineString",
        coordinates:[[-3.04,53.35],[-3.12,52.97],[-3.0,52.7],[-2.85,52.15],[-2.7,51.78],[-2.68,51.65]] }},
  ]
};

// UK sub-nation label positions [lng, lat, name]
const UK_SUB_LABELS = [
  [-1.5, 52.5, 'Inglaterra'],
  [-4.0, 57.0, 'Esc\u00F3cia'],
  [-3.8, 52.2, 'Pa\u00EDs de Gales'],
  [-6.5, 54.7, 'Irlanda do Norte'],
];

// ─── COUNTRY LABEL POSITIONS (lng, lat) ──────────────────────────────────────
// Manually tuned centroid overrides for better label placement
const COUNTRY_LABEL_POS = {
  276:[10.4,51.2], 40:[14.5,47.5], 56:[4.5,50.5], 124:[-96,60], 132:[-24,16],
  208:[10,56], 724:[-3.7,40.4], 826:[-2.5,54], 840:[-98,39], 784:[54,24],
  231:[36.5,8.5],  // Etiópia — parte oeste do país (mais visível em vistas de África)
  250:[2.5,46.5], 246:[25.7,64], 300:[22,39], 348:[19,47],
  380:[12.5,42.5], 372:[-8,53], 352:[-19,65], 504:[-7,32], 462:[73.51,4.17],
  492:[7.42,43.73], 578:[10,62], 620:[-8,39.5], 528:[5.3,52.3], 616:[19.5,52],
  634:[51.5,25.35], 203:[15.5,49.8], 756:[8.2,46.8], 752:[18,60], 764:[101,13],
  792:[35,39], 834:[33,-6],
  336:[12.10,42.00],   // Vaticano — afastado de Roma para não sobrepor os pins
  191:[16.3,45.3],   // Croácia — o centróide geométrico cai dentro da Bósnia (forma em ferradura)
  // Balcãs — países pequenos que precisam de posição explícita
  688:[21.00,44.00],   // Sérvia — centrado excluindo Kosovo
  499:[19.4,42.7],   // Montenegro
  807:[21.7,41.6],   // Macedónia do Norte
  383:[20.90,42.57],   // Kosovo — centro real do país
  112:[28.0,53.5],   // Bielorrússia
  428:[25.0,56.9],   // Letónia
  // África Central — posições explícitas para países grandes
  148:[18.5,15.5],   // Chade
  728:[31,7.5],      // Sudão do Sul
};

// ─── PLACES VISITED per country [lng, lat, name, isCapital] ──────────────────
const PLACES = [
  // Alemanha
  [13.4, 52.52, 'Berlim', true],
  // Áustria
  [16.37, 48.21, 'Viena', true],
  // Bélgica
  [4.35, 50.85, 'Bruxelas', true],
  // Canadá
  [-79.38, 43.65, 'Toronto', false],
  [-79.07, 43.09, 'Niagara Falls', false],
  // Cabo Verde — todas as ilhas
  [-23.51, 14.93, 'Santiago \uD83C\uDFDD\uFE0F', true, true, true],
  [-25.17, 17.12, 'Santo Ant\u00E3o', false, true, false],
  [-25.00, 16.87, 'S\u00E3o Vicente', false, true, false],
  [-24.27, 16.58, 'S\u00E3o Nicolau', false, true, false],
  [-22.91, 16.73, 'Sal', false, true, false],
  [-22.82, 16.09, 'Boa Vista', false, true, false],
  [-23.17, 15.23, 'Maio', false, true, false],
  [-24.36, 14.93, 'Fogo', false, true, false],
  [-24.72, 14.86, 'Brava', false, true, false],
  // Dinamarca
  [12.57, 55.68, 'Copenhaga', true],
  // Espanha
  [-3.7, 40.42, 'Madrid', true],
  [2.18, 41.38, 'Barcelona', false],
  [2.84, 41.69, 'Loret del Mar', false],
  [-0.13, 38.54, 'Benidorm', false],
  [-8.07, 41.85, 'Lobios', false],
  // França
  [2.35, 48.86, 'Paris', true],
  [2.78, 48.87, '\uD83C\uDFF0 Disneyland Paris', false],
  [5.37, 43.3, 'Marselha', false],
  [7.27, 43.71, 'Nice', false],
  // Finlândia
  [24.94, 60.17, 'Hels\u00EDnquia', true],
  [25.72, 66.50, 'Rovaniemi \uD83C\uDF85', false],
  [26.0, 68.5, 'Lap\u00F3nia \uD83E\uDD8C', false, true, true],
  // Grécia
  [23.72, 37.98, 'Atenas', true],
  // Hungria
  [19.04, 47.5, 'Budapeste', true],
  // Islândia
  [-21.9, 64.13, 'Reiquiavique', true],
  // Irlanda
  [-6.26, 53.33, 'Dublin', true],
  // Irlanda do Norte (UK)
  [-5.93, 54.6, 'Belfast', false],
  // Itália
  [12.5, 41.9, 'Roma', true],
  [12.34, 45.44, 'Veneza', false],
  // Inglaterra (UK)
  [-0.12, 51.5, 'Londres', false],
  // Escócia (UK)
  [-3.19, 55.95, 'Edimburgo', false],
  // Marrocos
  [-7.99, 31.63, 'Marraquexe', false],
  // Maldivas — ilha
  [73.51, 4.17, 'Mal\u00E9', true, true, true],
  // Mónaco
  [7.42, 43.73, 'M\u00F3naco', true],
  // Noruega
  [10.74, 59.91, 'Oslo', true],
  // Portugal
  [-9.14, 38.72, 'Lisboa', true],
  [-8.61, 41.15, 'Porto', false],
  [-8.42, 37.1, 'Faro', false],
  // Açores — todas as ilhas visitadas [lng, lat, nome, isCapital, isIsland, isVisitedIsland]
  [-25.67, 37.74, 'S\u00E3o Miguel \uD83C\uDFDD\uFE0F', true, true, true],
  [-27.22, 38.65, 'Terceira \uD83C\uDFDD\uFE0F', false, true, true],
  [-28.04, 38.53, 'Faial \uD83C\uDFDD\uFE0F', false, true, true],
  [-28.33, 38.47, 'Pico \uD83C\uDFDD\uFE0F', false, true, true],
  [-31.11, 39.45, 'Flores \uD83C\uDFDD\uFE0F', false, true, true],
  [-28.01, 39.06, 'Graciosa \uD83C\uDFDD\uFE0F', false, true, true],
  [-25.17, 36.97, 'Santa Maria \uD83C\uDFDD\uFE0F', false, true, true],
  [-31.13, 39.67, 'Corvo \uD83C\uDFDD\uFE0F', false, true, true],
  [-28.72, 38.65, 'S\u00E3o Jorge \uD83C\uDFDD\uFE0F', false, true, true],
  // Madeira
  [-16.91, 32.65, 'Madeira \uD83C\uDFDD\uFE0F', false, true, true],
  [-16.34, 33.07, 'Porto Santo', false, true],
  [-16.6, 32.2, 'Arquipélago da Madeira', false, true],
  // Ilhas Canárias (Espanha)
  [-15.43, 28.10, 'Gran Canaria', false, true],
  [-16.55, 28.29, 'Tenerife', false, true],
  [-13.60, 28.96, 'Lanzarote', false, true],
  [-14.00, 28.50, 'Fuerteventura', false, true],
  [-17.89, 28.68, 'La Palma', false, true],
  [-17.92, 28.13, 'El Hierro', false, true],
  [-17.10, 28.10, 'La Gomera', false, true],
  // Ilhas Baleares (Espanha)
  [2.65, 39.57, 'Maiorca', false, true],
  [1.43, 38.91, 'Ibiza', false, true],
  [4.00, 39.95, 'Menorca', false, true],
  [1.40, 38.75, 'Formentera', false, true],
  // Sicília e ilhas italianas
  [14.01, 37.60, 'Sic\u00EDlia', false, true],
  [9.06, 40.12, 'Sardenha', false, true],
  [9.15, 42.15, 'C\u00F3rsega', false, true],
  [14.24, 36.05, 'Gozo', false, true],
  // Grécia — ilhas principais
  [25.16, 35.34, 'Creta', false, true],
  [25.43, 36.38, 'Rodes', false, true],
  [23.89, 37.00, 'N\u00E1xos', false, true],
  [22.94, 37.37, 'Hidra', false, true],
  [25.47, 37.45, 'Cos', false, true],
  [26.15, 37.73, 'Samos', false, true],
  [25.38, 37.45, 'Patmos', false, true],
  [26.97, 39.12, 'Lesbos', false, true],
  [24.93, 37.45, 'Paros', false, true],
  [24.44, 36.86, 'Santorini', false, true],
  [25.33, 37.86, 'Mykonos', false, true],
  [23.39, 37.96, 'Egina', false, true],
  // Chipre
  // Ilhas britânicas
  [-2.99, 53.41, 'Anglesey', false, true],
  [-2.20, 60.47, 'Shetland', false, true],
  [-3.10, 59.03, 'Orkney', false, true],
  [-6.37, 57.60, 'Hébridas', false, true],
  // Atlântico Norte
  [-7.61, 62.00, 'Ilhas Faroé', false, true],
  // África — ilhas principais
  [57.55, -20.35, 'Maurícias', false, true],
  [55.47, -4.68, 'Seychelles', false, true],
  [44.33, -12.35, 'Mayotte', false, true],
  [-5.72, -15.95, 'Santa Helena', false, true],
  [-14.42, -7.95, 'Ascensão', false, true],
  [5.63, 0.23, 'São Tomé', false, true],
  [8.67, 1.62, 'Bioko', false, true],
  [-25.66, -16.00, 'Tristão da Cunha', false, true],
  // Atlântico — ilhas
  [-29.36, 37.73, 'Arquipélago dos Açores', false, true],
  // Caraíbas
  [-70.99, 21.50, 'República Dominicana', false, true],
  [-61.37, 15.30, 'Guadalupe', false, true],
  [-61.02, 14.67, 'Martinica', false, true],
  [-61.20, 12.70, 'São Vicente', false, true],
  [-62.19, 16.72, 'Antígua', false, true],
  [-62.58, 17.67, 'São Cristóvão', false, true],
  [-63.06, 18.24, 'Saint-Martin', false, true],
  [-62.97, 17.33, 'Montserrat', false, true],
  [-68.29, 12.18, 'Curaçao', false, true],
  [-69.97, 12.52, 'Aruba', false, true],
  [-68.78, 12.13, 'Bonaire', false, true],
  [-64.64, 18.43, 'Ilhas Virgens (EUA)', false, true],
  [-64.73, 18.43, 'Ilhas Virgens (UK)', false, true],
  [-71.59, 21.77, 'Ilhas Turcas e Caicos', false, true],
  [-74.44, 20.01, 'Ilha da Tortuga', false, true],
  // Oceano Índico
  [73.51, 4.17, 'Malé', true, true],
  [72.89, 7.10, 'Addu', false, true],
  [68.32, 11.71, 'Laquedivas', false, true],
  [72.86, 20.67, 'Mumbai (ilha)', false, true],
  [55.27, -21.12, 'Reunião', false, true],
  [56.17, -49.35, 'Kerguelen', false, true],
  // Pacífico — Indonésia e Oceânia
  [106.82, -6.18, 'Java', false, true],
  [115.19, -8.41, 'Bali', false, true],
  [107.61, -7.62, 'Lombok', false, true],
  [120.00, -8.50, 'Sumbawa', false, true],
  [110.43, -7.62, 'Borneo (Kalimantan)', false, true],
  [120.97, 14.60, 'Luzon', false, true],
  [123.89, 11.68, 'Visayas', false, true],
  [125.61, 8.96, 'Mindanao', false, true],
  [128.19, -3.66, 'Seram', false, true],
  [131.27, -0.87, 'Halmahera', false, true],
  [134.08, -1.84, 'Papua Nova Guiné', false, true],
  [172.13, -1.31, 'Ilhas Salomão', false, true],
  [178.44, -18.15, 'Fiji', false, true],
  [175.20, -21.20, 'Tonga', false, true],
  [-170.70, -14.30, 'Samoa Americana', false, true],
  [-149.47, -17.53, 'Taiti (Fr. Polinésia)', false, true],
  [-138.52, -9.78, 'Marquesas', false, true],
  [-179.22, -8.52, 'Wallis e Futuna', false, true],
  [169.53, -0.53, 'Kiribati', false, true],
  [158.17, 6.88, 'Carolinas', false, true],
  [144.74, 13.46, 'Guam', false, true],
  [145.75, 15.18, 'Ilhas Marianas', false, true],
  // Austrália e Nova Zelândia
  [172.64, -42.93, 'Ilha do Sul (NZ)', false, true],
  [174.76, -36.85, 'Ilha do Norte (NZ)', false, true],
  [147.32, -42.88, 'Tasmânia', false, true],
  // Japão
  [135.50, 34.69, 'Honshu', false, true],
  [130.84, 31.60, 'Kyushu', false, true],
  [133.00, 33.85, 'Shikoku', false, true],
  [141.35, 43.06, 'Hokkaido', false, true],
  [127.68, 26.21, 'Okinawa', false, true],
  // América do Norte — ilhas
  [-52.73, 47.56, 'Terra Nova', false, true],
  [-63.61, 45.94, 'Ilha do Príncipe Eduardo', false, true],
  [-60.99, 46.18, 'Ilha do Cabo Bretão', false, true],
  [-74.02, 45.46, 'Ilha de Montreal', false, true],
  [-68.88, 48.44, 'Anticosti', false, true],
  [-64.35, 63.75, 'Baffin', false, true],
  [-83.04, 62.83, 'Southampton', false, true],
  [-98.00, 68.00, 'Victoria', false, true],
  [-98.52, 73.00, 'Príncipe de Gales', false, true],
  [-110.83, 72.67, 'Ilha Banks', false, true],
  [-114.00, 69.35, 'Ilha Melville', false, true],
  [-76.71, 39.02, 'Chesapeake', false, true],
  [-155.50, 19.57, 'Havaí (Big Island)', false, true],
  [-156.67, 20.80, 'Maui', false, true],
  [-157.97, 21.47, 'Oahu', false, true],
  [-159.50, 22.10, 'Kauai', false, true],
  [-63.07, 32.30, 'Bermudas', false, true],
  // América do Sul — ilhas
  [-81.41, 0.90, 'Galápagos', false, true],
  [-71.98, -33.62, 'Juan Fernández', false, true],
  [-46.34, -23.84, 'Ilhéus (São Paulo)', false, true],
  [-48.50, -27.59, 'Ilha de Santa Catarina', false, true],
  [-51.07, -0.03, 'Ilha de Marajó', false, true],
  [-57.65, -20.45, 'Ilha do Bananal', false, true],
  [-38.50, -13.00, 'Ilha de Itaparica', false, true],
  [-32.43, -3.85, 'Fernando de Noronha', false, true],
  [-29.32, -20.50, 'Trindade', false, true],
  [-67.72, -55.07, 'Tierra del Fuego', false, true],
  // Ártico e Antártida
  [15.60, 78.22, 'Svalbard', false, true],
  [24.07, 71.16, 'Jan Mayen', false, true],
  [-18.68, 65.27, 'Groenlândia', false, true],
  [0.00, -90.00, 'Antártida', false, true],
  [-38.00, -54.28, 'Geórgia do Sul', false, true],
  // Tanzânia — Zanzibar
  [39.2, -6.16, 'Zanzibar \uD83C\uDFDD\uFE0F', true, true, true],
  // Países Baixos
  [4.9, 52.37, 'Amesterd\u00E3o', true],
  // Polónia
  [19.94, 50.06, 'Crac\u00F3via', false],
  [21.01, 52.23, 'Vars\u00F3via', true],
  // Qatar
  [51.53, 25.29, 'Doha', true],
  // Rep. Checa
  [14.42, 50.08, 'Praga', true],
  // Suíça
  [8.55, 47.37, 'Zurique', false],
  // Suécia
  [18.07, 59.33, 'Estocolmo', true],
  [13.0, 55.6, 'Malm\u00F6', false],
  // Tailândia
  [100.52, 13.75, 'Banguecoque', true],
  [98.39, 7.88, 'Phuket \uD83C\uDFDD\uFE0F', false],
  [98.77, 7.74, 'Phi Phi \uD83C\uDFDD\uFE0F', false, true],
  [100.06, 9.54, 'Koh Samui \uD83C\uDFDD\uFE0F', false, true],
  [99.84, 9.87, 'Koh Phangan \uD83C\uDFDD\uFE0F', false, true],
  // Turquia
  [29.05, 40.99, 'Istambul', false],
  [34.83, 38.66, 'Capad\u00F3cia', false],
  // Etiópia
  [38.74, 9.03, 'Adis Abeba', true],
  // Emirados Árabes
  [54.37, 24.47, 'Abu Dhabi', true],
  // EUA — Nova Iorque
  [-74.0, 40.71, 'Nova Iorque', false],
  // Vaticano
  [12.10, 42.00, 'Cidade do Vaticano', true],
  // Sérvia
  [20.46, 44.82, 'Belgrado', true],
  // Macedónia do Norte
  [21.43, 42.00, 'Esc\u00F3pia', true],
  // Kosovo
  [21.17, 42.67, 'Pristina', true],
];

// Países visitados sem a capital como pin — mostram 1 pin "representante" já no zoom inicial,
// do mesmo tamanho visual das capitais (usado tanto no desenho do pin como na visibilidade por zoom)
const PRIORITY_PINS = new Set([
  'Toronto','Nova Iorque','Belfast','Londres','Edimburgo','Istambul','Zurique'
]);

// Territórios tão pequenos que clicar no país no mapa é quase impossível — clicar no pin
// abre a ficha do país diretamente (nome do pin → id numérico do país em VISITED)
const SMALL_TERRITORY_PINS = {
  'Santiago': 132, 'Santo Antão': 132, 'São Vicente': 132, 'São Nicolau': 132,
  'Sal': 132, 'Boa Vista': 132, 'Maio': 132, 'Fogo': 132, 'Brava': 132,
  'Malé': 462
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let pins = [];
let currentMode = 'view'; // view | pin-visited | pin-wish
let pendingCoords = null;
let svgRef = null;
let gRef = null;
let labelsG = null;
let citiesG = null;
let allLabelsG = null;
let projRef = null;
let pathRef = null;
let currentZoomK = 1;
let wishCountriesNumeric = new Set();
let soonCountriesNumeric = new Set(); // países marcados como "a visitar em breve" no mapa

// ─── STORAGE — window.storage (Claude.ai) com fallback automático para localStorage ──
// Detecta qual API está disponível e usa sempre a melhor opção.
const _store = (() => {
  // Testa se window.storage existe e funciona
  const hasCloudStorage = typeof window !== 'undefined' &&
    window.storage && typeof window.storage.set === 'function';

  // Testa se localStorage está disponível (pode estar bloqueado em modo privado)
  let hasLocal = false;
  try { localStorage.setItem('__vb_test', '1'); localStorage.removeItem('__vb_test'); hasLocal = true; } catch(e) {}

  return {
    async set(key, value) {
      if (hasCloudStorage) {
        try { await window.storage.set(key, value); return; } catch(e) {}
      }
      if (hasLocal) {
        try { localStorage.setItem(key, value); return; } catch(e) {}
      }
      // Fallback em memória — persiste enquanto a página estiver aberta
      (_store._mem = _store._mem || {})[key] = value;
    },
    async get(key) {
      if (hasCloudStorage) {
        try {
          const r = await window.storage.get(key);
          if (r && r.value != null) return r.value;
        } catch(e) {}
      }
      if (hasLocal) {
        try {
          const v = localStorage.getItem(key);
          if (v != null) return v;
        } catch(e) {}
      }
      return (_store._mem || {})[key] || null;
    },
    _mem: {}
  };
})();

async function savePins() {
  try { await _store.set('vb-pins', JSON.stringify(pins)); } catch(e) {}
}
async function saveWishCountries() {
  try { await _store.set('vb-wish-countries', JSON.stringify([...wishCountriesNumeric])); } catch(e) {}
}
async function saveSoonCountries() {
  try { await _store.set('vb-soon-countries', JSON.stringify([...soonCountriesNumeric])); } catch(e) {}
}
async function loadState() {
  try {
    const p = await _store.get('vb-pins');
    if (p) pins = JSON.parse(p);
  } catch(e) { pins = []; }
  try {
    const w = await _store.get('vb-wish-countries');
    if (w) wishCountriesNumeric = new Set(JSON.parse(w));
  } catch(e) { wishCountriesNumeric = new Set(); }
  try {
    const s = await _store.get('vb-soon-countries');
    if (s) soonCountriesNumeric = new Set(JSON.parse(s));
  } catch(e) { soonCountriesNumeric = new Set(); }
}

// ─── TABS ────────────────────────────────────────────────────────────────────
let _mapScrollY = 0; // guardar posição de scroll quando saímos do mapa


function getFlagSrc(code, size) {
  if (code === 'azores') return 'images/bandeiras_ilhas_portuguesas/flag_azores.webp';
  if (code === 'madeira') return 'images/bandeiras_ilhas_portuguesas/flag_madeira.webp';
  return `https://flagcdn.com/w${size || 40}/${code}.png`;
}

function switchTab(name) {
  const currentTab = document.querySelector('.tab.active');
  const currentName = currentTab ? currentTab.dataset.tab : null;

  // Guardar scroll do mapa ao sair
  if (currentName === 'map' && name !== 'map') {
    _mapScrollY = window.scrollY;
  }

  document.querySelectorAll('.tab').forEach((t,i) => {
    const names = ['map','pins','guides','list'];
    t.classList.toggle('active', names[i] === name);
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');

  // Gerir classe no body para mostrar/esconder zoom controls
  if (name === 'map') {
    document.body.classList.add('tab-mapa-active');
    // Restaurar scroll do mapa
    requestAnimationFrame(() => window.scrollTo(0, _mapScrollY));
  } else {
    document.body.classList.remove('tab-mapa-active');
    // Outros separadores começam sempre no topo
    window.scrollTo(0, 0);
  }

  if (name === 'pins') { renderPinsList(); renderSoonList();
  renderWishList(); }
  if (name === 'list') { renderWishChips(); renderUserChips(); }
}

// ─── WORLD COUNTRY NAMES (for all-countries labels) ──────────────────────────
const WORLD_NAMES = {
  4:'Afeganist\u00E3o',8:'Alb\u00E2nia',12:'Arg\u00E9lia',20:'Andorra',24:'Angola',
  32:'Argentina',36:'Austr\u00E1lia',40:'\u00C1ustria',31:'Azerbaij\u00E3o',
  44:'Bahamas',48:'Bar\u00E9m',50:'Bangladesh',52:'Barbados',
  56:'B\u00E9lgica',84:'Belize',204:'Benim',64:'But\u00E3o',
  68:'Bol\u00EDvia',70:'B\u00F3snia',72:'Botsuana',76:'Brasil',
  96:'Brunei',100:'Bulg\u00E1ria',854:'Burkina Faso',108:'Burundi',
  116:'Camboja',120:'Camar\u00F5es',124:'Canad\u00E1',140:'Rep. Centro-Africana',
  144:'Sri Lanka',152:'Chile',156:'China',170:'Col\u00F4mbia',
  174:'Comores',178:'Congo',180:'R.D. Congo',188:'Costa Rica',
  191:'Cro\u00E1cia',192:'Cuba',196:'Chipre',203:'Rep. Checa',
  208:'Dinamarca',262:'Djibuti',212:'Dominica',214:'Rep. Dominicana',
  218:'Equador',818:'Egipto',222:'El Salvador',226:'Guin\u00E9 Equatorial',
  232:'Eritreia',233:'Est\u00F3nia',748:'Essuat\u00EDni',231:'Eti\u00F3pia',
  246:'Finl\u00E2ndia',250:'Fran\u00E7a',266:'Gab\u00E3o',270:'G\u00E2mbia',
  268:'Ge\u00F3rgia',276:'Alemanha',288:'Gana',300:'Gr\u00E9cia',
  308:'Granada',320:'Guatemala',324:'Guin\u00E9',624:'Guin\u00E9-Bissau',
  328:'Guiana',332:'Haiti',340:'Honduras',348:'Hungria',
  356:'\u00CDndia',360:'Indon\u00E9sia',364:'Ir\u00E3o',368:'Iraque',
  372:'Irlanda',376:'Israel',380:'It\u00E1lia',384:'Costa do Marfim',
  388:'Jamaica',392:'Jap\u00E3o',400:'Jord\u00E2nia',398:'Cazaquist\u00E3o',
  404:'Qu\u00E9nia',408:'Coreia do Norte',410:'Coreia do Sul',
  414:'Kuweit',417:'Quirguist\u00E3o',418:'Laos',422:'L\u00EDbano',
  426:'Lesoto',430:'Lib\u00E9ria',434:'L\u00EDbia',440:'Litu\u00E2nia',
  442:'Luxemburgo',450:'Madag\u00E1scar',454:'Malawi',458:'Mal\u00E1sia',
  466:'Mali',470:'Malta',478:'Maurit\u00E2nia',484:'M\u00E9xico',
  496:'Mong\u00F3lia',498:'Mold\u00E1via',504:'Marrocos',508:'Mo\u00E7ambique',
  516:'Nam\u00EDbia',524:'Nepal',528:'Pa\u00EDses Baixos',554:'Nova Zel\u00E2ndia',
  558:'Nicar\u00E1gua',562:'N\u00EDger',566:'Nig\u00E9ria',578:'Noruega',
  512:'Om\u00E3',586:'Paquist\u00E3o',591:'Panam\u00E1',598:'Papua Nova Guin\u00E9',
  600:'Paraguai',604:'Peru',608:'Filipinas',616:'Pol\u00F3nia',
  620:'Portugal',634:'Qatar',642:'Rom\u00E9nia',643:'R\u00FAssia',
  646:'Ruanda',682:'Ar\u00E1bia Saudita',686:'Senegal',694:'Serra Leoa',
  703:'Eslov\u00E1quia',705:'Eslov\u00E9nia',706:'Som\u00E1lia',710:'\u00C1frica do Sul',
  724:'Espanha',729:'Sud\u00E3o',740:'Suriname',752:'Su\u00E9cia',
  756:'Su\u00ED\u00E7a',760:'S\u00EDria',158:'Taiwan',762:'Tajiquist\u00E3o',
  834:'Tanz\u00E2nia',764:'Tail\u00E2ndia',626:'Timor-Leste',768:'Togo',
  780:'Trinidad e Tobago',788:'Tun\u00EDsia',792:'Turquia',800:'Uganda',
  804:'Ucr\u00E2nia',784:'Emirados \u00C1rabes Unidos',826:'Reino Unido',840:'EUA',
  858:'Uruguai',860:'Uzbequist\u00E3o',862:'Venezuela',704:'Vietname',
  887:'I\u00E9men',894:'Z\u00E2mbia',716:'Zimbabu\u00E9',
  132:'Cabo Verde',462:'Maldivas',492:'M\u00F3naco',336:'Vaticano',
  352:'Isl\u00E2ndia',
  // Balcãs e Europa de Leste
  688:'S\u00E9rvia',499:'Montenegro',807:'Maced\u00F3nia do Norte',383:'Kosovo',
  112:'Bielorr\u00FAssia',428:'Let\u00F3nia',703:'Eslov\u00E1quia',705:'Eslov\u00E9nia',
  // África Central e Leste — frequentemente em falta
  148:'Chade',728:'Sud\u00E3o do Sul',174:'Comores',678:'S\u00E3o Tom\u00E9 e Pr\u00EDncipe',
  516:'Nam\u00EDbia',426:'Lesoto',748:'Essuat\u00EDni',232:'Eritreia',
  // Outros
  104:'Myanmar',275:'Palestina',418:'Laos',288:'Gana',
  384:'Costa do Marfim',180:'R.D. Congo',178:'Congo',
  706:'Som\u00E1lia',626:'Timor-Leste',682:'Ar\u00E1bia Saudita',
  // Ilhas e micro-estados em falta
  28:'Ant\u00EDgua e Barbuda',242:'Fiji',480:'Maur\u00EDcia',520:'Nauru',
  548:'Vanuatu',583:'Micron\u00E9sia',584:'Ilhas Marshall',585:'Palau',
  659:'S\u00E3o Crist\u00F3v\u00E3o e Neves',662:'Santa L\u00FAcia',670:'S\u00E3o Vicente e Granadinas',
  674:'S\u00E3o Marino',776:'Tonga',795:'Turquemenist\u00E3o',798:'Tuvalu',882:'Samoa',
  90:'Ilhas Salom\u00E3o',
  // Territ\u00f3rios e regi\u00f5es especiais
  304:'Gronelândia',
  166:'Ilhas Cocos',184:'Ilhas Cook',238:'Ilhas Malvinas',
  254:'Guiana Francesa',312:'Guadalupe',446:'Macau',474:'Martinica',
  175:'Maiote',540:'Nova Caled\u00F3nia',258:'Polin\u00E9sia Francesa',
  638:'R\u00E9union',666:'S\u00E3o Pedro e Miquel\u00E3o',
  239:'Ge\u00F3rgia do Sul e Sandwich',260:'Terras Austr. e Ant\u00E1rt. Fr.',
  316:'Guame',580:'Ilhas Marianas do Norte',
  630:'Porto Rico',850:'Ilhas Virgens EUA',
  92:'Ilhas Virgens Brit.',136:'Ilhas Caim\u00E3o',
  796:'Ilhas Turcos e Caicos',660:'Anguila',
  744:'Svalbard',
  832:'Jersey',831:'Guernsey',833:'Ilha de Man',
  499:'Montenegro',
};

// ─── WORLD CAPITALS [iso_numeric, name_pt, lat, lng] ─────────────────────────
const WORLD_CAPITALS = [
  [4,'Cabul',34.52,69.18],[8,'Tirana',41.33,19.82],[12,'Argel',36.74,3.06],
  [20,'Andorra la Velha',42.51,1.52],[24,'Luanda',-8.84,13.23],
  [32,'Buenos Aires',-34.61,-58.38],[36,'Camberra',-35.28,149.13],
  [40,'Viena',48.21,16.37],[31,'Baku',40.41,49.87],[44,'Nassau',25.04,-77.36],
  [48,'Manama',26.22,50.59],[50,'Daca',23.72,90.41],[52,'Bridgetown',13.10,-59.62],
  [56,'Bruxelas',50.85,4.35],[84,'Belmopan',17.25,-88.77],[204,'Porto-Novo',6.37,2.62],
  [64,'Thimphu',27.47,89.64],[68,'Sucre',-19.05,-65.26],[70,'Sarajevo',43.85,18.36],
  [72,'Gaborone',-24.65,25.91],[76,'Bras\u00EDlia',-15.78,-47.93],[96,'Bandar Seri Begawan',4.94,114.95],
  [100,'S\u00F3fia',42.70,23.32],[854,'Ouagadougou',12.37,-1.53],[108,'Gitega',-3.43,29.92],
  [116,'Phnom Penh',11.57,104.92],[120,'Iacund\u00EA',3.87,11.52],[124,'Ottawa',45.42,-75.70],
  [140,'Bangui',4.36,18.55],[144,'Colombo',6.93,79.85],[148,'Ndjam\u00E9na',12.10,15.04],
  [152,'Santiago',-33.46,-70.65],[156,'Pequim',39.91,116.39],[170,'Bogot\u00E1',4.71,-74.07],
  [174,'Moroni',-11.70,43.25],[178,'Brazzaville',-4.27,15.28],[180,'Kinshasa',-4.33,15.32],
  [188,'S\u00E3o Jos\u00E9',9.93,-84.08],[191,'Zagrebe',45.81,16.0],[192,'Havana',23.13,-82.38],
  [196,'Nic\u00F3sia',35.17,33.37],[208,'Copenhaga',55.68,12.57],[262,'Jibuti',11.59,43.15],
  [214,'Santo Domingo',18.48,-69.90],[218,'Quito',-0.22,-78.52],[818,'Cairo',30.06,31.25],
  [222,'S\u00E3o Salvador',13.70,-89.20],[226,'Malabo',3.75,8.78],[232,'Asmara',15.34,38.93],
  [233,'Taline',59.44,24.75],[748,'Mbabane',-26.32,31.14],[231,'Adis Abeba',9.03,38.74],
  [246,'Hels\u00EDnquia',60.17,24.94],[250,'Paris',48.86,2.35],[266,'Libreville',0.39,9.45],
  [270,'Banjul',13.45,-16.58],[268,'Tbilisi',41.69,44.83],[276,'Berlim',52.52,13.40],
  [288,'Acra',5.56,-0.20],[300,'Atenas',37.98,23.73],[320,'Cidade da Guatemala',14.64,-90.51],
  [324,'Conacri',9.54,-13.68],[624,'Bissau',11.86,-15.60],[328,'Georgetown',6.80,-58.17],
  [332,'Porto Pr\u00EDncipe',18.54,-72.34],[340,'Tegucigalpa',14.10,-87.20],
  [348,'Budapeste',47.50,19.04],[352,'Reiquiavique',64.14,-21.94],
  [356,'Nova Deli',28.61,77.21],[360,'Jacarta',-6.21,106.85],[364,'Teer\u00E3o',35.70,51.42],
  [368,'Bagdade',33.33,44.44],[376,'Jerusal\u00E9m',31.77,35.22],[380,'Roma',41.90,12.50],
  [388,'Kingston',17.99,-76.79],[392,'T\u00F3quio',35.69,139.69],[400,'Am\u00E3',31.96,35.95],
  [398,'Astana',51.17,71.45],[404,'Nair\u00F3bi',-1.28,36.82],[408,'Pyongyang',39.02,125.75],
  [410,'Seul',37.57,126.98],[414,'Cidade do Kuwait',29.37,47.98],[417,'Bishkek',42.87,74.59],
  [418,'Vientiane',17.97,102.60],[422,'Beirute',33.87,35.50],[426,'Maseru',-29.32,27.48],
  [430,'Monr\u00F3via',6.30,-10.80],[434,'Tr\u00EDpoli',32.90,13.18],[440,'Vilnius',54.69,25.28],
  [442,'Luxemburgo',49.61,6.13],[450,'Antananarivo',-18.91,47.53],[454,'Lil\u00F4ngue',-13.97,33.79],
  [458,'Kuala Lumpur',3.16,101.71],[466,'Bamako',12.65,-8.00],[470,'Valeta',35.90,14.51],
  [478,'Nouakchott',18.08,-15.97],[484,'Cidade do M\u00E9xico',19.43,-99.13],
  [498,'Chisinau',47.00,28.86],[496,'Ulan Bator',47.91,106.88],
  [508,'Maputo',-25.97,32.59],[516,'Windhoek',-22.56,17.09],[524,'Catmandu',27.71,85.32],
  [528,'Amesterd\u00E3o',52.37,4.89],[554,'Wellington',-41.29,174.78],
  [558,'Man\u00E1gua',12.15,-86.29],[562,'Niamei',13.51,2.11],[566,'Abuja',9.06,7.49],
  [578,'Oslo',59.91,10.75],[512,'Mascate',23.61,58.59],[586,'Islamabade',33.72,73.06],
  [591,'Cidade do Panam\u00E1',8.99,-79.52],[598,'Port Moresby',-9.46,147.19],
  [600,'Assun\u00E7\u00E3o',-25.28,-57.65],[604,'Lima',-12.05,-77.04],[608,'Manila',14.60,120.97],
  [616,'Vars\u00F3via',52.23,21.01],[620,'Lisboa',38.72,-9.14],[634,'Doha',25.29,51.53],
  [642,'Bucareste',44.44,26.10],[643,'Moscovo',55.75,37.62],[646,'Kigali',-1.95,30.06],
  [682,'Riade',24.69,46.72],[686,'Dacar',14.69,-17.44],[694,'Freetown',8.49,-13.23],
  [703,'Bratislava',48.15,17.12],[705,'Liubliana',46.05,14.51],[706,'Mogad\u00EDscio',2.05,45.34],
  [710,'Pret\u00F3ria',-25.74,28.19],[724,'Madrid',40.42,-3.70],[729,'Cartum',15.55,32.53],
  [740,'Paramaribo',5.87,-55.17],[752,'Estocolmo',59.33,18.07],[756,'Berna',46.95,7.45],
  [760,'Damasco',33.51,36.29],[762,'Duchamb\u00E9',38.56,68.77],[834,'Dodoma',-6.17,35.74],
  [764,'Banguecoque',13.75,100.52],[626,'D\u00EDli',-8.56,125.58],[768,'Lom\u00E9',6.14,1.22],
  [780,'Porto de Espanha',10.65,-61.52],[788,'Tunes',36.82,10.18],
  [792,'Ancara',39.93,32.86],[800,'Campala',0.32,32.58],[804,'Kiev',50.43,30.52],
  [784,'Abu Dhabi',24.47,54.37],[826,'Londres',51.51,-0.12],[840,'Washington',38.91,-77.04],
  [858,'Montevideu',-34.86,-56.17],[860,'Tashkente',41.30,69.27],
  [862,'Caracas',10.49,-66.88],[704,'Han\u00F3i',21.03,105.85],[887,'Sanaa',15.35,44.21],
  [894,'Lusaka',-15.42,28.28],[716,'Harare',-17.83,31.05],
  // Capitais em falta para países visitados
  [132,'Praia',14.93,-23.51],[203,'Praga',50.08,14.42],
  [336,'Cidade do Vaticano',41.90,12.45],[372,'Dublin',53.33,-6.26],
  [462,'Mal\u00E9',4.17,73.51],[492,'M\u00F3naco',43.73,7.42],
  [504,'Rabat',34.01,-6.85],
  // Gronelândia
  [304,'Nuque',64.18,-51.73],
];

// ─── ISO numeric → alpha-2 code (para bandeiras) ─────────────────────────────
const NUM_TO_CODE = {
  4:'af',8:'al',12:'dz',20:'ad',24:'ao',32:'ar',36:'au',40:'at',31:'az',
  44:'bs',48:'bh',50:'bd',52:'bb',56:'be',84:'bz',204:'bj',64:'bt',68:'bo',
  70:'ba',72:'bw',76:'br',96:'bn',100:'bg',854:'bf',108:'bi',116:'kh',
  120:'cm',124:'ca',140:'cf',144:'lk',148:'td',152:'cl',156:'cn',170:'co',
  174:'km',178:'cg',180:'cd',188:'cr',191:'hr',192:'cu',196:'cy',203:'cz',
  208:'dk',262:'dj',212:'dm',214:'do',218:'ec',818:'eg',222:'sv',226:'gq',
  232:'er',233:'ee',748:'sz',231:'et',246:'fi',250:'fr',266:'ga',270:'gm',
  268:'ge',276:'de',288:'gh',300:'gr',308:'gd',320:'gt',324:'gn',624:'gw',
  328:'gy',332:'ht',340:'hn',348:'hu',356:'in',360:'id',364:'ir',368:'iq',
  372:'ie',376:'il',380:'it',384:'ci',388:'jm',392:'jp',400:'jo',398:'kz',
  404:'ke',408:'kp',410:'kr',414:'kw',417:'kg',418:'la',422:'lb',426:'ls',
  430:'lr',434:'ly',440:'lt',442:'lu',450:'mg',454:'mw',458:'my',466:'ml',
  470:'mt',478:'mr',484:'mx',498:'md',496:'mn',504:'ma',508:'mz',516:'na',
  524:'np',528:'nl',554:'nz',558:'ni',562:'ne',566:'ng',578:'no',512:'om',
  586:'pk',591:'pa',598:'pg',600:'py',604:'pe',608:'ph',616:'pl',620:'pt',
  634:'qa',642:'ro',643:'ru',646:'rw',682:'sa',686:'sn',694:'sl',703:'sk',
  705:'si',706:'so',710:'za',724:'es',729:'sd',740:'sr',752:'se',756:'ch',
  760:'sy',158:'tw',762:'tj',834:'tz',764:'th',626:'tl',768:'tg',780:'tt',
  688:'rs',807:'mk',383:'xk',
  304:'gl',499:'me',744:'sj',832:'je',831:'gg',833:'im',
  630:'pr',316:'gu',580:'mp',850:'vi',92:'vg',136:'ky',796:'tc',660:'ai',
  238:'fk',254:'gf',312:'gp',474:'mq',175:'yt',540:'nc',258:'pf',638:'re',
  788:'tn',792:'tr',800:'ug',804:'ua',784:'ae',826:'gb',840:'us',858:'uy',
  860:'uz',862:'ve',704:'vn',887:'ye',894:'zm',716:'zw',132:'cv',462:'mv',
  492:'mc',336:'va',352:'is',
  728:'ss',
};

// ─── Posições de capitais por ID (para zoom em países não-visitados) ──────────
const WORLD_CAP_POS = {};
WORLD_CAPITALS.forEach(([id,,lat,lng]) => { WORLD_CAP_POS[id] = [lng, lat]; });

// ─── COUNTRY SIZE TIERS (usado em labels e bandeiras) ────────────────────────
const LARGE_COUNTRIES  = new Set([124,840,643,36,76,356,156,818,12,504,364,792,250,862,484,702,566,288]);
const MEDIUM_COUNTRIES = new Set([276,724,752,578,246,616,380,300,528,203,208,40,756,372,624,348,620,72,800,404,710,144,231,834,764,104,116]);

// ─── Sub-national boundaries: embedded simplified polygons ───────────────────

// ─── MAP TOOLBAR TOGGLE ───────────────────────────────────────────────────────
function toggleMapToolbar() {
  const toolbar = document.getElementById('map-toolbar');
  const chevron = document.getElementById('map-chevron');
  if (!toolbar) return;
  const isCollapsed = toolbar.classList.contains('collapsed');
  toolbar.classList.toggle('collapsed', !isCollapsed);
  if (chevron) chevron.classList.toggle('open', isCollapsed);
}

function setMode(mode) {
  if (currentMode === mode) {
    currentMode = 'view';
    document.getElementById('btn-pin-visited').classList.remove('active');
    document.getElementById('btn-pin-wish').classList.remove('active');
    const btnSoon = document.getElementById('btn-pin-soon');
    if (btnSoon) btnSoon.classList.remove('active');
    document.getElementById('mode-tip').textContent = 'Toca num pa\u00EDs';
    document.getElementById('mode-tip-mini').textContent = '\uD83D\uDCCD \u2B50 Pins';
    return;
  }
  currentMode = mode;
  document.getElementById('btn-pin-visited').classList.toggle('active', mode === 'pin-visited');
  document.getElementById('btn-pin-wish').classList.toggle('active', mode === 'pin-wish');
  const btnSoon = document.getElementById('btn-pin-soon');
  if (btnSoon) btnSoon.classList.toggle('active', mode === 'pin-soon');

  // Keep toolbar open while a mode is active
  const toolbar = document.getElementById('map-toolbar');
  const chevron = document.getElementById('map-chevron');
  if (toolbar) toolbar.classList.remove('collapsed');
  if (chevron) chevron.classList.add('open');

  if (mode === 'pin-visited') {
    document.getElementById('mode-tip').textContent = '\uD83D\uDCCD Toca num pa\u00EDs para marcar';
    document.getElementById('mode-tip-mini').textContent = '\uD83D\uDCCD Ativo';
  } else if (mode === 'pin-soon') {
    document.getElementById('mode-tip').textContent = '\uD83D\uDDD3\uFE0F Toca num pa\u00EDs a visitar em breve';
    document.getElementById('mode-tip-mini').textContent = '\uD83D\uDDD3\uFE0F Ativo';
  } else {
    document.getElementById('mode-tip').textContent = '\u2B50 Toca num pa\u00EDs que queres visitar';
    document.getElementById('mode-tip-mini').textContent = '\u2B50 Ativo';
  }
}

// ─── MAP ─────────────────────────────────────────────────────────────────────
async function initMap() {
  try {
    // Ensure map-wrap has layout before measuring
    const wrap = document.getElementById('map-wrap');
    wrap.style.minHeight = '220px';

    const world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json');
    const el = document.getElementById('map-loading');
    if (el) el.remove();

    const W = wrap.offsetWidth || wrap.clientWidth || 360;
    // On mobile (narrow screens) use more vertical space; on desktop keep 62%
    const isMobile = W < 600;
    const H = Math.round(W * (isMobile ? 0.82 : 0.62));
    wrap.style.height = H + 'px';

    // No mobile o mapa fica maior e centrado na vertical (antes sobrava muito oceano vazio por baixo)
    const scaleMult = isMobile ? 1.6 : 1;
    const translateY = isMobile ? H / 2 : H * 0.36;
    const proj = d3.geoNaturalEarth1().scale((W / 6.28) * scaleMult).translate([W / 2, translateY]);
    const path = d3.geoPath().projection(proj);
    projRef = proj; pathRef = path;

    const svg = d3.select('#map-wrap').append('svg')
      .attr('width', W).attr('height', H)
      .attr('viewBox', `0 0 ${W} ${H}`);
    svgRef = svg;

    svg.append('path').datum({type:'Sphere'}).attr('d', path).attr('fill', '#a8cfe8');
    svg.append('path').datum(d3.geoGraticule()()).attr('class','graticule-line').attr('d', path);

    const g = svg.append('g');
    gRef = g;

    // Countries
    // O Vaticano (336) tem duas representações nos dados do mapa base: um "buraco"
    // dentro do polígono de Itália (para a Itália não ficar colorida por cima dele) e
    // um micro-polígono próprio, com menos de 0.5 km². A tentativa anterior só excluiu
    // o micro-polígono, o que deixou o buraco vazio à vista (daí a manchinha junto a
    // Roma). A correção certa: tapar esse buraco com a mesma cor de Itália (o Vaticano
    // é pequeno demais para fazer diferença visual a qualquer zoom razoável) e manter a
    // exclusão do micro-polígono. O Vaticano continua representado pelo chip com
    // bandeira e pelo pin.
    const worldFeatures = topojson.feature(world, world.objects.countries).features;
    const italyFeature = worldFeatures.find(f => +f.id === 380);
    if (italyFeature && italyFeature.geometry && italyFeature.geometry.type === 'MultiPolygon') {
      italyFeature.geometry.coordinates = italyFeature.geometry.coordinates.map(poly => {
        if (poly.length <= 1) return poly;
        return poly.filter((ring, idx) => {
          if (idx === 0) return true; // anel exterior, manter sempre
          let sx = 0, sy = 0;
          ring.forEach(p => { sx += p[0]; sy += p[1]; });
          const cx = sx / ring.length, cy = sy / ring.length;
          const isVaticanHole = Math.abs(cx - 12.435) < 0.05 && Math.abs(cy - 41.901) < 0.05;
          return !isVaticanHole; // descarta só o buraco do Vaticano; o de São Marino fica intacto
        });
      });
    }
    g.selectAll('.cpath')
      .data(worldFeatures.filter(d => +d.id !== 336))
      .join('path')
      .attr('class', d => {
        const id = +d.id;
        if (VISITED[id]) return 'cpath vis';
        if (wishCountriesNumeric.has(id)) return 'cpath wish';
        return 'cpath no';
      })
      .attr('d', path)
      .attr('data-id', d => d.id)
      .on('click touchend', function(evt, d) {
        // Ignore touchend if the finger dragged (pan gesture).
        // preventDefault aqui evita que o telemóvel dispare, ~300ms depois,
        // um "click" fantasma sobre o país onde o dedo largou o ecrã.
        if (evt.type === 'touchend' && window._touchDragged) { evt.preventDefault(); return; }
        evt.stopPropagation(); evt.preventDefault();
        const id = +d.id;
        const centroid = path.centroid(d);
        const coords = proj.invert(centroid);

        if (currentMode === 'pin-visited') {
          openPinForm(coords[1], coords[0], 'pin-visited', id);
          return;
        }
        if (currentMode === 'pin-soon') {
          soonCountriesNumeric.add(id);
          saveSoonCountries();
          d3.select(this).attr('class', 'cpath soon');
          showNotif('\uD83D\uDDD3\uFE0F Adicionado a visitar em breve!');
          renderSoonList();
          renderGuides();
          return;
        }
        if (currentMode === 'pin-wish') {
          if (VISITED[id]) { showNotif('J\u00E1 visitaste este pa\u00EDs! \uD83C\uDF1F'); return; }
          wishCountriesNumeric.add(id);
          saveWishCountries(); // async, fire-and-forget is fine
          d3.select(this).attr('class', 'cpath wish');
          showNotif('\u2B50 Adicionado \u00E0 wishlist!');
          renderSoonList();
          renderWishList();
          renderWishChips();
          return;
        }
        // view mode
        const info = VISITED[id];
        // Se está marcado como "em breve" e não é um dos 3 Balcãs fixos, permitir remover
        const FIXED_SOON = new Set([688, 807, 383]);
        if (d3.select(this).attr('class') === 'cpath soon' && !FIXED_SOON.has(id)) {
          soonCountriesNumeric.delete(id);
          saveSoonCountries();
          d3.select(this).attr('class', 'cpath no');
          showNotif('\uD83D\uDDD3\uFE0F Removido de a visitar em breve');
          renderSoonList();
          renderGuides();
          return;
        }
        if (info) {
          if (id === 826) {
            openUKSheet();
          } else {
            openSheet(info, id);
          }
        } else if (wishCountriesNumeric.has(id)) {
          const name = WORLD_NAMES[id] || getCountryName(id);
          openSheetWish({ name: name || `Pa\u00EDs ${id}`, id });
        } else {
          // País não visitado e sem wishlist: mostrar bandeira + nome ao
          // clicar/tocar (mesmo tooltip usado no hover), sem aparecer sozinho por zoom.
          const t = evt.changedTouches && evt.changedTouches[0];
          const pointerEvt = (evt.clientX != null) ? evt : { clientX: t ? t.clientX : 0, clientY: t ? t.clientY : 0 };
          showMapTooltip(pointerEvt, id);
        }
      });

    g.append('path')
      .datum(topojson.mesh(world, world.objects.countries, (a,b) => a !== b))
      .attr('class','border-line').attr('d', path);

    // Apply colors based on VISITED + user pins loaded from storage
    updateMapColors();

    // ── Tooltip: hover on any country path ───────────────────────────────────
    g.selectAll('.cpath')
      .on('mousemove.tt', function(evt, d) {
        if (window._touchDragged) return;
        showMapTooltip(evt, +d.id);
      })
      .on('mouseleave.tt', hideMapTooltip);

    // ── Country labels — stored for HTML overlay (SVG labels had z-order issues) ─
    labelsG = g.append('g').attr('class','labels-layer'); // keep as empty placeholder
    window._visitedLabelData = [];

    const visitedFeatures = topojson.feature(world, world.objects.countries).features
      .filter(d => VISITED[+d.id]);

    // Large/medium visited countries for proportional label sizing
    const VISITED_LARGE  = new Set([124, 840, 250, 764, 792]);
    const VISITED_MEDIUM = new Set([276, 724, 380, 300, 246, 372, 352, 504, 578, 616, 528, 203, 208, 40, 756, 752, 834, 231, 132, 826, 56, 348, 688, 807, 620, 784]);

    visitedFeatures.forEach(d => {
      const id = +d.id;
      const geo = COUNTRY_LABEL_POS[id] || null;
      const svgPos = geo ? proj(geo) : path.centroid(d);
      if (!svgPos || isNaN(svgPos[0]) || isNaN(svgPos[1])) return;
      const info = VISITED[id];
      const name = WORLD_NAMES[id] || info.name
        .replace(/[\uD83C][\uDDE0-\uDDFF]/g, '')
        .replace(/[\uD83C][\uDFF4]/g, '')
        .replace(/[\uFE0F]/g, '')
        .trim();
      const tier = VISITED_LARGE.has(id) ? 'large' : VISITED_MEDIUM.has(id) ? 'medium' : 'small';
      // Store geo coords for dynamic reprojection at any zoom level
      const geoPos = geo ? geo : Array.from(proj.invert(svgPos));
      window._visitedLabelData.push({ id, svgPos, geo: geoPos, name, tier });
    });

    // Kosovo, Macedónia e Sérvia têm posições incorrectas em alguns topojson
    // (o topojson inclui Kosovo dentro da Sérvia, deslocando o centróide)
    window._visitedLabelData = window._visitedLabelData.filter(d => d.id !== 383 && d.id !== 807 && d.id !== 688);

    // Micro-state fallbacks — store geo coords for accurate dynamic reprojection
    const MICRO_STATES = [
      { id:492, geo:[7.42,43.73], name:'M\u00F3naco' },
      { id:336, geo:[12.10,42.00], name:'Vaticano' },
      { id:462, geo:[73.51,4.17], name:'Maldivas' },
      { id:634, geo:[51.5,25.35], name:'Qatar' },
      { id:383, geo:[20.92,42.60], name:'Kosovo' },
      { id:807, geo:[21.72,41.60], name:'Maced\u00F3nia do Norte' },
      { id:688, geo:[21.00,44.00], name:'S\u00E9rvia' },
    ];
    MICRO_STATES.forEach(({id, geo: geoPos, name}) => {
      if (!VISITED[id]) return;
      if (window._visitedLabelData.some(d => d.id === id)) return;
      const svgPos = proj(geoPos);
      if (!svgPos || isNaN(svgPos[0])) return;
      window._visitedLabelData.push({ id, svgPos, geo: geoPos, name });
    });

    // ── Passagem final: garantir que TODOS os países do VISITED têm entrada ──
    Object.keys(VISITED).forEach(idStr => {
      const id = +idStr;
      if (window._visitedLabelData.some(d => d.id === id)) return;
      const geoPos = COUNTRY_LABEL_POS[id] || WORLD_CAP_POS[id] || null;
      if (!geoPos) return;
      const svgPos = proj(geoPos);
      if (!svgPos || isNaN(svgPos[0])) return;
      const info = VISITED[id];
      const name = WORLD_NAMES[id] || info.name
        .replace(/[\uD83C][\uDDE0-\uDDFF]/g, '')
        .replace(/[\uD83C][\uDFF4]/g, '')
        .replace(/[\uFE0F]/g, '')
        .trim();
      const tier = VISITED_LARGE.has(id) ? 'large' : VISITED_MEDIUM.has(id) ? 'medium' : 'small';
      window._visitedLabelData.push({ id, svgPos, geo: geoPos, name, tier });
    });
    allLabelsG = g.append('g').attr('class','all-labels-layer');

    // Store non-visited country label data for HTML overlay (same system as visited)
    window._allCountryLabelData = [];
    topojson.feature(world, world.objects.countries).features
      .filter(d => !VISITED[+d.id])
      .forEach(d => {
        const id = +d.id;
        const name = WORLD_NAMES[id];
        if (!name) return;
        const geoOverride = COUNTRY_LABEL_POS[id] || null;
        const pos = geoOverride ? proj(geoOverride) : path.centroid(d);
        if (!pos || isNaN(pos[0]) || isNaN(pos[1])) return;
        const geoPos = geoOverride ? geoOverride : Array.from(proj.invert(pos));
        const tier = LARGE_COUNTRIES.has(id) ? 'large' : MEDIUM_COUNTRIES.has(id) ? 'medium' : 'small';
        const code = NUM_TO_CODE[id] || '';
        window._allCountryLabelData.push({ id, svgPos: pos, geo: geoPos, name, tier, code });
      });
    // Add Guiana Francesa (not in topojson as own feature)
    (() => {
      const fgGeo = [-53.2, 3.9];
      const fgPos = proj(fgGeo);
      if (fgPos && !isNaN(fgPos[0])) {
        window._allCountryLabelData.push({ id:'fg', svgPos:fgPos, geo:fgGeo, name:'Guiana Francesa', tier:'small', code:'fr' });
      }
    })();

    // ── Kosovo: polygon overlay (not present as separate feature in countries-50m) ──
    // Border polygon in [lng, lat] order — fonte: dataset dedicado de fronteiras do Kosovo
    // (a versão anterior, mais grosseira, não chegava à fronteira real a oeste/sudoeste,
    // deixando uma faixa de território da Sérvia por identificar entre o Kosovo e o Montenegro/Albânia)
    const kosovoCoords = [
      [20.76216,42.05186],[20.71731,41.84711],[20.59023,41.85541],[20.52295,42.21787],
      [20.28374,42.32025],[20.0707,42.58863],[20.25758,42.81275],[20.49679,42.88469],
      [20.63508,43.21671],[20.81448,43.27205],[20.95651,43.13094],[21.143395,43.068685],
      [21.27421,42.90959],[21.43866,42.86255],[21.63302,42.67717],[21.77505,42.6827],
      [21.66292,42.43922],[21.54332,42.32025],[21.576636,42.245224],[21.3527,42.2068],
      [20.76216,42.05186]
    ];
    const kosovoFeature = {
      type:'Feature', geometry:{ type:'Polygon', coordinates:[kosovoCoords] }
    };
    // Insert before .labels-layer
    const kosovoGroup = g.insert('g', '.labels-layer').attr('class','kosovo-overlay');
    kosovoGroup.append('path')
      .datum(kosovoFeature).attr('d', path)
      .attr('fill', VISITED[383] ? 'var(--gold)' : '#c8dbe8')
      .attr('stroke', 'rgba(255,255,255,0.8)')
      .attr('stroke-width', 0.35)
      .attr('class', 'cpath' + (VISITED[383] ? ' vis' : ' no'))
      .attr('data-id', '383')
      .style('cursor', VISITED[383] ? 'pointer' : 'crosshair')
      .on('click touchend', function(evt, d) {
        if (evt.type === 'touchend' && window._touchDragged) { evt.preventDefault(); return; }
        evt.stopPropagation(); evt.preventDefault();
        const id = 383;
        const info = VISITED[id];
        if (currentMode === 'pin-visited') {
          const centroid = path.centroid(kosovoFeature);
          const coords = proj.invert(centroid);
          openPinForm(coords[1], coords[0], 'pin-visited', id);
        } else if (info) {
          openSheet(info, id);
        }
      })
      .on('mousemove.tt', function(evt) { showMapTooltip(evt, 383); })
      .on('mouseleave.tt', hideMapTooltip);
    window._kosovoGroup = kosovoGroup;

    // Reaplicar cores agora que o Kosovo já existe no DOM — a 1ª chamada a updateMapColors()
    // (mais acima) corre antes deste polígono ser criado, por isso nunca o apanhava e ele
    // ficava sempre "visitado" (dourado) em vez de "a visitar em breve" (rosa), como a Sérvia.
    updateMapColors();

    // ── French Guiana: accurate border polygon (not a rectangle) ─────────────
    const fgCoords = [
      [-54.6,5.95],[-54.0,5.9],[-53.5,5.8],[-52.9,5.65],
      [-52.3,5.4],[-51.8,5.0],[-51.6,4.5],[-51.65,4.0],
      [-51.8,3.5],[-52.0,2.9],[-52.3,2.3],[-52.7,2.1],
      [-53.5,2.0],[-54.1,2.1],[-54.45,2.7],[-54.5,3.5],
      [-54.5,4.5],[-54.55,5.2],[-54.6,5.95]
    ];
    const fgFeature = {
      type:'Feature', geometry:{ type:'Polygon', coordinates:[fgCoords] }
    };
    // Insert before .labels-layer so it sits on top of country fills but under labels
    const fgGroup = g.insert('g', '.labels-layer').attr('class','fg-overlay');
    fgGroup.append('path')
      .datum(fgFeature).attr('d', path)
      .attr('fill', 'hsl(210,35%,82%)')
      .attr('stroke', 'white')
      .attr('stroke-width', 0.6)
      .attr('pointer-events', 'none');

    // Guiana Francesa label is handled via _allCountryLabelData HTML overlay

    // ── Corvo, Graciosa e Porto Santo: ilhas pequenas demais para o dataset de países ──
    // do mapa base (countries-50m) — o pin e o nome já existem, faltava só o "terreno".
    // Preenchimento manual com o contorno real de cada ilha, na cor de "visitado" (douradO),
    // igual ao resto de Portugal.
    const SMALL_ISLAND_OVERLAYS = [
      { name: 'Corvo', coords: [[-31.116911169111688,39.727714481510134],[-31.080910809108076,39.72264874970048],[-31.080910809108076,39.69394293611248],[-31.098910989109896,39.6635485452546],[-31.131311313113116,39.65848281344495],[-31.131311313113116,39.66523712252447],[-31.149311493114936,39.69563151338237],[-31.152911529115272,39.70069724519202],[-31.149311493114936,39.710828708811306],[-31.14211142111421,39.72096017243061],[-31.127711277112752,39.727714481510134],[-31.116911169111688,39.727714481510134]] },
      { name: 'Graciosa', coords: [[-27.98487984879847,39.015134873619644],[-28.00288002880029,39.015134873619644],[-28.024480244802447,39.01851202815941],[-28.046080460804603,39.02526633723893],[-28.06048060480603,39.03708637812811],[-28.071280712807123,39.05228357355706],[-28.071280712807123,39.067480768986],[-28.05328053280533,39.097875159843895],[-28.046080460804603,39.10294089165353],[-28.03528035280351,39.10462946892342],[-28.024480244802447,39.10294089165353],[-28.013680136801355,39.097875159843895],[-28.006480064800655,39.10462946892342],[-27.9920799207992,39.08774369622459],[-27.95967959679595,39.06579219171611],[-27.94167941679416,39.05228357355706],[-27.93447934479343,39.035397800858235],[-27.948879488794887,39.023577759969044],[-27.96687966879668,39.01682345088952],[-27.98487984879847,39.015134873619644]] },
      { name: 'Porto Santo', coords: [[-16.33876338763386,33.057834265473474],[-16.353163531635317,33.04432564731441],[-16.36396363963638,33.03419418369512],[-16.378363783637838,33.03250560642523],[-16.399963999639994,33.03925991550477],[-16.399963999639994,33.0460142245843],[-16.3891638916389,33.047702801854186],[-16.378363783637838,33.05107995639395],[-16.374763747637473,33.057834265473474],[-16.360363603636017,33.08991723360124],[-16.342363423634225,33.105114429030195],[-16.317163171631705,33.110180160839846],[-16.29556295562955,33.10173727449043],[-16.28836288362882,33.10849158356996],[-16.28836288362882,33.07978576998195],[-16.284762847628457,33.067965729092776],[-16.273962739627393,33.05952284274336],[-16.309963099630977,33.06627715182289],[-16.324363243632433,33.06627715182289],[-16.33876338763386,33.057834265473474]] },
    ];
    const smallIslandsGroup = g.insert('g', '.labels-layer').attr('class','small-island-overlays');
    SMALL_ISLAND_OVERLAYS.forEach(({ coords }) => {
      const feature = { type:'Feature', geometry:{ type:'Polygon', coordinates:[coords] } };
      smallIslandsGroup.append('path')
        .datum(feature).attr('d', path)
        .attr('fill', 'var(--gold)')
        .attr('stroke', 'rgba(255,255,255,0.8)')
        .attr('stroke-width', 0.35)
        .attr('pointer-events', 'none');
    });

    // ── World Capitals layer (subtle dots + names) ────────────────────────────
    let capsG = g.append('g').attr('class','caps-layer');
    const visitedCapNames = new Set(
      (window._placesLoaded || PLACES).map(([,,name]) => name.replace(/\s*\uD83C\uDFDD\uFE0F/,'').trim())
    );
    WORLD_CAPITALS.forEach(([id, capName, lat, lng]) => {
      // Skip if visited countries already have a teardrop pin for this capital
      if (VISITED[id] && visitedCapNames.has(capName)) return;
      const pos = proj([lng, lat]);
      if (!pos || isNaN(pos[0])) return;
      const cg = capsG.append('g')
        .attr('class','cap-dot')
        .attr('data-x', pos[0]).attr('data-y', pos[1])
        .attr('transform', `translate(${pos[0]},${pos[1]})`);
      cg.append('text')
        .attr('y', -2.5)
        .style('font-family', "'Outfit',sans-serif")
        .style('font-size', '4px')
        .style('font-weight', '600')
        .style('fill', VISITED[id] ? '#3a1000' : 'rgba(50,30,0,0.75)')
        .style('stroke', 'rgba(255,255,255,0.9)')
        .style('stroke-width', '1.8px')
        .style('stroke-linejoin', 'round')
        .style('paint-order', 'stroke')
        .style('text-anchor', 'middle')
        .style('pointer-events', 'none')
        .text(capName);
    });
    window._capsG = capsG;
    capsG.lower();


    // ── City / place pin layer ────────────────────────────────────────────────
    citiesG = g.append('g').attr('class','cities-layer');
    PLACES.forEach(([lng, lat, name, isCap, isIsland, isVisitedIsland]) => {
      const pos = proj([lng, lat]);
      if (!pos || isNaN(pos[0])) return;
      const displayName = name.replace('\uD83C\uDFDD\uFE0F', '').trim();
      const isPriorityPin = PRIORITY_PINS.has(name);
      const baseR = isIsland ? 3.8 : ((isCap || isPriorityPin) ? 3.8 : 2.8);
      const isLaponia = isIsland && name.includes('Lap\u00F3nia');
      const fillColor = '#8B2500';
      const haloFill = isLaponia ? 'rgba(107,63,160,0.15)' : 'rgba(14,127,168,0.15)';
      const haloStroke = isLaponia ? 'rgba(107,63,160,0.45)' : 'rgba(14,127,168,0.45)';
      const dropShadow = isLaponia ? 'drop-shadow(0 1px 4px rgba(107,63,160,0.6))' : 'drop-shadow(0 1px 4px rgba(14,127,168,0.6))';
      // For islands: show pin only if visited (6th field); always show name label
      const showPin = !isIsland || !!isVisitedIsland;
      const cg = citiesG.append('g')
        .attr('class', `city-pin${isCap ? ' capital' : ''}${isIsland ? ' island' : ''}`)
        .attr('transform', `translate(${pos[0]},${pos[1]})`)
        .attr('data-x', pos[0])
        .attr('data-y', pos[1])
        .attr('data-baser', baseR)
        .attr('data-always', isIsland ? '1' : '0')
        .attr('data-showpin', showPin ? '1' : '0')
        .style('filter', (isIsland && showPin) ? dropShadow : null)
        .on('click', (evt) => {
          evt.stopPropagation();
          // Cabo Verde / Maldivas: território minúsculo, quase impossível de clicar no mapa —
          // clicar no pin abre a ficha do país diretamente (só em modo de visualização normal)
          if (currentMode !== 'view') return;
          const countryId = SMALL_TERRITORY_PINS[displayName];
          const info = countryId && VISITED[countryId];
          if (info) openSheet(info, countryId);
        });

      // Halo ring — only for visited islands
      if (isIsland && showPin) {
        cg.append('circle')
          .attr('class', 'island-halo')
          .attr('cx', 0)
          .attr('cy', -baseR * 2.5)
          .attr('r', baseR * 1.1)
          .attr('fill', haloFill)
          .attr('stroke', haloStroke)
          .attr('stroke-width', 0.5);
      }

      // Pin body (teardrop) — only for visited islands
      cg.append('path')
        .attr('class', 'pin-body')
        .attr('d', makeTeardrop(baseR))
        .attr('fill', fillColor)
        .attr('stroke', 'white')
        .attr('stroke-width', isIsland ? 1.2 : 0.8)
        .style('display', showPin ? null : 'none');

      // Inner white dot on head — only for visited islands
      cg.append('circle')
        .attr('class', 'pin-dot')
        .attr('cx', 0)
        .attr('cy', -baseR * 2.5)
        .attr('r', baseR * 0.38)
        .attr('fill', 'white')
        .attr('opacity', 0.9)
        .style('display', showPin ? null : 'none');

      // Store display name on the group; label is rendered as a sibling (not inside scaled group)
      // Mónaco e Vaticano já têm o nome mostrado pelo chip do país exatamente no mesmo ponto
      // (o "pin de cidade" e a "capital" são o mesmo sítio) — suprimir o label duplicado aqui.
      const REDUNDANT_WITH_COUNTRY_CHIP = new Set(['Mónaco', 'Cidade do Vaticano']);
      const labelToShow = REDUNDANT_WITH_COUNTRY_CHIP.has(displayName) ? '' : displayName;
      cg.attr('data-label', labelToShow)
        .attr('data-iscap', isCap ? '1' : '0')
        .attr('data-isisland', isIsland ? '1' : '0');
    });

    // ── City labels layer — sibling to pin groups, NOT inside scaled groups ──
    window._cityLabelsG = g.append('g').attr('class', 'city-labels-layer');
    citiesG.selectAll('.city-pin').each(function() {
      const d = d3.select(this);
      const lbl = d.attr('data-label');
      if (!lbl) return;
      const isCap = d.attr('data-iscap') === '1';
      const isIsl = d.attr('data-isisland') === '1';
      window._cityLabelsG.append('text')
        .attr('class', `city-label${isCap ? ' capital-lbl' : ''}${isIsl ? ' island-lbl' : ''}`)
        .attr('data-pinx', d.attr('data-x'))
        .attr('data-piny', d.attr('data-y'))
        .attr('data-baser', d.attr('data-baser'))
        .attr('data-iscap', d.attr('data-iscap'))
        .attr('data-isisland', d.attr('data-isisland'))
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'text-after-edge')
        .style('display', 'none')
        .text(lbl);
    });
    // window._cityLabelsG already set above

    // ── 🏠 Nossas Casas — pins especiais ─────────────────────────────────────
    const HOMES = [
      { lng: -27.22, lat: 38.65, name: 'Angra do Hero\u00EDsmo\n\uD83C\uDFE0 Nossa Casa', sub: 'Ilha Terceira \u00B7 A\u00E7ores' },
      { lng: -9.33,  lat: 39.36, name: 'Baleal / Peniche\n\uD83C\uDFE0 Nossa Casa',  sub: 'Leiria \u00B7 Portugal Continental' },
    ];
    const homesG = g.append('g').attr('class','homes-layer');
    HOMES.forEach(({ lng, lat, name, sub }) => {
      const pos = proj([lng, lat]);
      if (!pos || isNaN(pos[0])) return;
      const R = 5.5;
      const hg = homesG.append('g')
        .attr('class','home-pin')
        .attr('transform', `translate(${pos[0]},${pos[1]})`)
        .attr('data-x', pos[0]).attr('data-y', pos[1])
        .attr('data-always','1')
        .style('cursor','pointer')
        .on('click', (evt) => {
          evt.stopPropagation();
          const modal = document.getElementById('home-modal');
          document.getElementById('home-modal-title').textContent = name.replace('\n\uD83C\uDFE0 Nossa Casa','');
          document.getElementById('home-modal-sub').textContent = sub;
          modal.style.display = 'flex';
        });
      // Pulsing halo
      hg.append('circle')
        .attr('cx',0).attr('cy', -R*2.5).attr('r', R*1.9)
        .attr('fill','rgba(192,57,43,0.12)')
        .attr('stroke','rgba(192,57,43,0.35)')
        .attr('stroke-width',0.8)
        .attr('pointer-events','none');
      // Pin body — red teardrop
      hg.append('path')
        .attr('d', makeTeardrop(R))
        .attr('fill','#c0392b')
        .attr('stroke','white')
        .attr('stroke-width',1.2);
      // House emoji inside pin head
      hg.append('text')
        .attr('x',0).attr('y', -(R*2.5 - R*0.38))
        .attr('text-anchor','middle')
        .attr('dominant-baseline','middle')
        .style('font-size', R*1.1 + 'px')
        .style('pointer-events','none')
        .text('\uD83C\uDFE0');
      // Label — pequeno e escondido, aparece com zoom
      const displayName = name.split('\n')[0];
      hg.append('text')
        .attr('class','city-label home-lbl')
        .attr('x',0)
        .attr('y', -(R*2.5 + R + 2.5))
        .style('fill','#7a0000')
        .style('stroke','rgba(255,255,255,0.98)')
        .style('stroke-width','4px')
        .style('font-size','7px')
        .style('display','none')
        .text(displayName);
    });
    window._homesG = homesG;

    // ── Açores region label — shown at low zoom on the ocean ──────────────────
    const azoresRegionG = g.append('g').attr('class','azores-region-label');
    window._azoresRegionG = azoresRegionG;
    const azoresLabelPos = proj([-29.5, 38.2]);
    if (azoresLabelPos && !isNaN(azoresLabelPos[0])) {
      azoresRegionG.append('text')
        .attr('x', azoresLabelPos[0])
        .attr('y', azoresLabelPos[1])
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .style('font-family', "'Outfit', sans-serif")
        .style('font-size', '6px')
        .style('font-weight', '700')
        .style('fill', 'rgba(0,60,100,0.70)')
        .style('letter-spacing', '2px')
        .style('text-transform', 'uppercase')
        .style('paint-order', 'stroke')
        .style('stroke', 'rgba(168,207,232,0.9)')
        .style('stroke-width', '2.5px')
        .style('pointer-events', 'none')
        .text('A\u00C7ORES');
    }
    (function initVisitedLabelOverlay() {
      const existing = document.getElementById('visited-label-overlay');
      if (existing) existing.remove();
      const mapWrap = document.getElementById('map-wrap');
      const overlay = document.createElement('div');
      overlay.id = 'visited-label-overlay';
      mapWrap.style.position = 'relative';
      mapWrap.appendChild(overlay);
      window._vclOverlay = overlay;

      // Build divs for each visited country label — bandeira standalone + label com bandeira+nome
      (window._visitedLabelData || []).forEach(({ id, name, tier }) => {
        const code = FLAG_CODES[id] || NUM_TO_CODE[id] || '';

        // Para micro-estados com pin de cidade proeminente, a bandeira flutuante
        // seria redundante — o pin já marca o local. Só criar label, não flag standalone.
        const isMicroState = [492, 336, 462, 634].includes(id);
        if (code && !isMicroState) {
          const flagEl = document.createElement('img');
          flagEl.className = 'vcl-flag';
          flagEl.dataset.id = id;
          flagEl.src = `https://flagcdn.com/w40/${code}.png`;
          flagEl.alt = name;
          overlay.appendChild(flagEl);
        }

        // 2. Label com bandeira inline + nome (zoom alto)
        const div = document.createElement('div');
        div.className = 'vcl';
        div.dataset.id = id;
        div.dataset.tier = tier || 'small';
        if (code) {
          const flagImg = document.createElement('img');
          flagImg.className = 'vcl-flag-inline';
          flagImg.src = `https://flagcdn.com/w40/${code}.png`;
          flagImg.alt = '';
          div.appendChild(flagImg);
        }
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;
        div.appendChild(nameSpan);
        // Click no label abre o sheet (essencial para micro-estados sem path SVG)
        div.addEventListener('click', function(evt) {
          evt.stopPropagation();
          if (id === 826) { openUKSheet(); return; }
          const info = VISITED[id];
          if (info) openSheet(info, id);
        });
        div.style.cursor = 'pointer';
        overlay.appendChild(div);
      });

      // Also add UK sub-nation labels
      const UK_LABELS = [
        { name:'Inglaterra', code:'gb-eng', svgGeo:[-1.5,52.5] },
        { name:'Esc\u00F3cia',    code:'gb-sct', svgGeo:[-4.0,57.0] },
        { name:'Pa\u00EDs de Gales', code:'gb-wls', svgGeo:[-3.8,52.2] },
        { name:'Irlanda do Norte', code:'gb-nir', svgGeo:[-6.5,54.7] },
      ];
      UK_LABELS.forEach(({ name, code, svgGeo }) => {
        const svgPos = projRef ? projRef(svgGeo) : null;
        if (!svgPos) return;

        // Bandeira flutuante UK
        if (code) {
          const flagEl = document.createElement('img');
          flagEl.className = 'vcl-flag vcl-flag-uk';
          flagEl.dataset.geo = JSON.stringify(svgGeo);
          flagEl.src = `https://flagcdn.com/w40/${code}.png`;
          flagEl.alt = name;
          overlay.appendChild(flagEl);
        }

        // Label UK
        const div = document.createElement('div');
        div.className = 'vcl vcl-uk';
        div.dataset.geo = JSON.stringify(svgGeo);
        if (code) {
          const flagImg = document.createElement('img');
          flagImg.className = 'vcl-flag-inline';
          flagImg.src = `https://flagcdn.com/w40/${code}.png`;
          flagImg.alt = '';
          div.appendChild(flagImg);
        }
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;
        div.appendChild(nameSpan);
        div.style.display = 'none';
        overlay.appendChild(div);
      });

      // ── Ilhas Portuguesas e Cabo Verde são cobertas pelos SVG labels do PLACES ──
      // (vcl-island overlay usado apenas para ilhas de referência não presentes no PLACES)
    })();

    // ── HTML overlay for ALL countries (flag + name, same system as visited) ──
    (function initAllCountryLabelOverlay() {
      const overlay = window._vclOverlay;
      if (!overlay) return;
      (window._allCountryLabelData || []).forEach(({ id, name, tier, code }) => {
        // Small flag-only marker for intermediate zoom
        if (code) {
          const flagEl = document.createElement('img');
          flagEl.className = 'vcl-flag vcl-flag-all';
          flagEl.dataset.allId = id;
          flagEl.src = `https://flagcdn.com/w40/${code}.png`;
          flagEl.alt = name;
          overlay.appendChild(flagEl);
        }
        // Flag + name label for high zoom
        const div = document.createElement('div');
        div.className = 'vcl vcl-all';
        div.dataset.allId = id;
        div.dataset.tier = tier || 'small';
        if (code) {
          const flagImg = document.createElement('img');
          flagImg.className = 'vcl-flag-inline';
          flagImg.src = `https://flagcdn.com/w40/${code}.png`;
          flagImg.alt = '';
          div.appendChild(flagImg);
        }
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;
        div.appendChild(nameSpan);
        div.style.display = 'none';
        overlay.appendChild(div);
      });
    })();

    // Cache DOM references for all-country label overlay (perf: avoid repeated querySelectorAll)
    window._allFlagEls  = Array.from(document.querySelectorAll('#visited-label-overlay .vcl-flag-all'));
    window._allLabelEls = Array.from(document.querySelectorAll('#visited-label-overlay .vcl-all'));

    window._updateVCL = function(transform) {
      const overlay = window._vclOverlay;
      if (!overlay || !projRef) return;
      const { k, x, y } = transform;

      const svgEl  = document.querySelector('#map-wrap svg');
      const wrapEl = document.getElementById('map-wrap');
      if (!svgEl || !wrapEl) return;

      const sr = svgEl.getBoundingClientRect();
      const wr = wrapEl.getBoundingClientRect();
      const offX = sr.left - wr.left;
      const offY = sr.top  - wr.top;

      // SVG has width:100% CSS but width=W attribute with viewBox="0 0 W H"
      // So there's a scaling factor between SVG internal coords and CSS pixels
      const svgAttrW = svgEl.viewBox.baseVal.width  || svgEl.getAttribute('width')  || sr.width;
      const svgAttrH = svgEl.viewBox.baseVal.height || svgEl.getAttribute('height') || sr.height;
      const scX = sr.width  / svgAttrW;
      const scY = sr.height / svgAttrH;

      // Convert SVG-internal coordinates to CSS pixels relative to the overlay.
      // D3 zoom transform (k, x, y) is in SVG-internal space, then viewBox scales to CSS.
      // CSS_x = (svgPx * k + x) * scX + offX
      function toCSS(svgPos) {
        return [
          (svgPos[0] * k + x) * scX + offX,
          (svgPos[1] * k + y) * scY + offY
        ];
      }

      // Reproject geo coords through the live projection to get accurate SVG position
      // This ensures labels stay centred on their country at any zoom level
      function geotoCSS(geoPos) {
        const sp = projRef(geoPos);
        if (!sp || isNaN(sp[0])) return null;
        return toCSS(sp);
      }

      // Zoom thresholds
      const SHOW_FLAG_ONLY = k >= 1.4;   // só bandeira, sem texto
      const SHOW_LABEL     = k >= 2.8;   // bandeira + nome

      // ── Bandeiras flutuantes (só bandeira, zoom intermédio) ─────────────────
      overlay.querySelectorAll('.vcl-flag:not(.vcl-flag-uk)').forEach(flagEl => {
        const id = flagEl.dataset.id;
        const entry = (window._visitedLabelData || []).find(d => String(d.id) === String(id));
        if (!entry) { flagEl.style.display = 'none'; return; }
        const cssPos = entry.geo ? geotoCSS(entry.geo) : toCSS(entry.svgPos);
        if (!cssPos) { flagEl.style.display = 'none'; return; }
        const [sx, sy] = cssPos;

        // Hide when out of viewport
        if (sx < -30 || sy < -30 || sx > wr.width + 30 || sy > wr.height + 30) {
          flagEl.style.display = 'none'; return;
        }

        if (!SHOW_FLAG_ONLY || SHOW_LABEL) { flagEl.style.display = 'none'; return; }

        // Size scales with zoom: 14px at k=1.4 → 22px at k=2.8
        const flagW = Math.round(Math.min(26, Math.max(12, 10 * k)));
        const flagH = Math.round(flagW * 0.67);
        flagEl.style.left   = sx + 'px';
        flagEl.style.top    = sy + 'px';
        flagEl.style.width  = flagW + 'px';
        flagEl.style.height = flagH + 'px';
        flagEl.style.display = 'block';
      });

      // ── Labels (bandeira inline + nome, zoom alto) ───────────────────────────
      (window._visitedLabelData || []).forEach(({ id, svgPos, geo: geoPos }) => {
        const div = overlay.querySelector(`.vcl:not(.vcl-uk)[data-id="${id}"]`);
        if (!div) return;
        const cssPos = geoPos ? geotoCSS(geoPos) : toCSS(svgPos);
        if (!cssPos) { div.style.display = 'none'; return; }
        const [sx, sy] = cssPos;
        div.style.left = sx + 'px';
        div.style.top  = sy + 'px';

        // vcl-island: usar só texto SVG, não label HTML
        if (div.classList.contains('vcl-island')) { div.style.display = 'none'; return; }
        if (!SHOW_LABEL) { div.style.display = 'none'; return; }
        if (sx < -40 || sy < -40 || sx > wr.width + 40 || sy > wr.height + 40) {
          div.style.display = 'none'; return;
        }

        const tier = div.dataset.tier || 'small';
        const base = tier === 'large' ? 9 : tier === 'medium' ? 7 : 5.5;
        const fs = Math.min(base * 1.6, Math.max(base * 0.8, base * Math.pow(k / 2.8, 0.5)));
        div.style.fontSize = fs + 'px';
        div.style.padding = k < 4 ? '2px 4px 2px 2px' : '2px 5px 2px 3px';
        div.style.borderRadius = k < 4 ? '3px' : '5px';
        div.style.display = 'flex';

        // Scale the inline flag proportionally
        const flagImg = div.querySelector('.vcl-flag-inline');
        if (flagImg) {
          const flagW = Math.round(Math.min(20, Math.max(10, fs * 1.5)));
          const flagH = Math.round(flagW * 0.67);
          flagImg.style.width  = flagW + 'px';
          flagImg.style.height = flagH + 'px';
        }
      });

      // ── UK flags flutuantes ─────────────────────────────────────────────────
      overlay.querySelectorAll('.vcl-flag.vcl-flag-uk').forEach(flagEl => {
        const geo = JSON.parse(flagEl.dataset.geo || 'null');
        if (!geo) return;
        const sp = projRef(geo);
        if (!sp || isNaN(sp[0])) return;
        const [sx, sy] = toCSS(sp);

        if (!SHOW_FLAG_ONLY || SHOW_LABEL) { flagEl.style.display = 'none'; return; }
        if (sx < -30 || sy < -30 || sx > wr.width + 30 || sy > wr.height + 30) {
          flagEl.style.display = 'none'; return;
        }
        const flagW = Math.round(Math.min(22, Math.max(11, 9 * k)));
        const flagH = Math.round(flagW * 0.67);
        flagEl.style.left   = sx + 'px';
        flagEl.style.top    = sy + 'px';
        flagEl.style.width  = flagW + 'px';
        flagEl.style.height = flagH + 'px';
        flagEl.style.display = 'block';
      });

      // ── UK sub-nation labels ─────────────────────────────────────────────────
      overlay.querySelectorAll('.vcl.vcl-uk').forEach(div => {
        const geo = JSON.parse(div.dataset.geo || 'null');
        if (!geo) return;
        const sp = projRef(geo);
        if (!sp || isNaN(sp[0])) return;
        const [sx, sy] = toCSS(sp);
        div.style.left = sx + 'px';
        div.style.top  = sy + 'px';
        if (!SHOW_LABEL) { div.style.display = 'none'; return; }
        if (sx < -40 || sy < -40 || sx > wr.width + 40 || sy > wr.height + 40) {
          div.style.display = 'none'; return;
        }
        div.style.display = 'flex';
        const fs = Math.min(12, Math.max(5, 2.8 * Math.pow(k, 0.65)));
        div.style.fontSize = fs + 'px';
        div.style.padding = k < 4 ? '1px 4px 1px 2px' : '2px 5px 2px 3px';
        const flagImg = div.querySelector('.vcl-flag-inline');
        if (flagImg) {
          const flagW = Math.round(Math.min(18, Math.max(9, fs * 1.5)));
          flagImg.style.width  = flagW + 'px';
          flagImg.style.height = Math.round(flagW * 0.67) + 'px';
        }
      });

      // ── Ilhas Portuguesas — bandeiras flutuantes e labels ───────────────────────
      overlay.querySelectorAll('.vcl-flag.vcl-flag-island').forEach(flagEl => {
        const geo = JSON.parse(flagEl.dataset.geo || 'null');
        if (!geo) return;
        const sp = projRef(geo);
        if (!sp || isNaN(sp[0])) return;
        const [sx, sy] = toCSS(sp);
        if (!SHOW_FLAG_ONLY || SHOW_LABEL) { flagEl.style.display = 'none'; return; }
        if (sx < -30 || sy < -30 || sx > wr.width + 30 || sy > wr.height + 30) { flagEl.style.display = 'none'; return; }
        const flagW = Math.round(Math.min(22, Math.max(11, 9 * k)));
        const flagH = Math.round(flagW * 0.67);
        flagEl.style.left   = sx + 'px';
        flagEl.style.top    = sy + 'px';
        flagEl.style.width  = flagW + 'px';
        flagEl.style.height = flagH + 'px';
        flagEl.style.display = 'block';
      });

      overlay.querySelectorAll('.vcl.vcl-island').forEach(div => {
        const geo = JSON.parse(div.dataset.geo || 'null');
        if (!geo) { div.style.display = 'none'; return; }
        const sp = projRef(geo);
        if (!sp || isNaN(sp[0])) { div.style.display = 'none'; return; }
        const [sx, sy] = toCSS(sp);
        div.style.left = sx + 'px';
        div.style.top  = sy + 'px';
        if (!SHOW_LABEL) { div.style.display = 'none'; return; }
        if (sx < -40 || sy < -40 || sx > wr.width + 40 || sy > wr.height + 40) { div.style.display = 'none'; return; }
        div.style.display = 'flex';
        const fs = Math.min(10, Math.max(4.5, 2.2 * Math.pow(k, 0.65)));
        div.style.fontSize = fs + 'px';
        div.style.padding = '1px 4px 1px 4px';
        div.style.borderRadius = '3px';
      });

      // ── Países NÃO visitados: já não aparecem automaticamente por zoom. ──────
      // O nome/bandeira só é mostrado ao clicar/tocar no país (ver showMapTooltip
      // no handler de click do .cpath). Os elementos .vcl-flag-all / .vcl-all
      // ficam sempre ocultos (display:none por CSS) — mantemos os dados em
      // window._allCountryLabelData caso venham a ser úteis noutra funcionalidade.
    };

    // ── Zoom with smooth momentum on wheel ──────────────────────────────────
    let _wheelTarget = 1, _wheelCx = null, _wheelCy = null, _wheelRaf = null;
    function _momentumStep(svgEl, zoomBeh) {
      const cur = d3.zoomTransform(svgEl);
      const ratio = _wheelTarget / cur.k;
      if (Math.abs(ratio - 1) < 0.0008) { _wheelRaf = null; return; }
      const newK = cur.k * Math.pow(ratio, 0.16);
      const cx = _wheelCx != null ? _wheelCx : (svgEl.clientWidth  || 360) / 2;
      const cy = _wheelCy != null ? _wheelCy : (svgEl.clientHeight || 200) / 2;
      const tx = cx - newK * (cx - cur.x) / cur.k;
      const ty = cy - newK * (cy - cur.y) / cur.k;
      d3.select(svgEl).call(zoomBeh.transform, d3.zoomIdentity.translate(tx, ty).scale(newK));
      _wheelRaf = requestAnimationFrame(() => _momentumStep(svgEl, zoomBeh));
    }

    const zoom = d3.zoom()
      .scaleExtent([1, 30])
      .filter(evt => {
        if (evt.type === 'wheel') {
          if (evt.ctrlKey) return false; // deixar Ctrl+scroll para o browser (zoom da página)
          evt.preventDefault();  // impede scroll da página
          return true;
        }
        // Allow single-finger pan AND two-finger pinch-zoom on mobile
        if (evt.type === 'touchstart') return true;
        return !evt.button;
      })
      .wheelDelta(evt => {
        const svgEl = document.querySelector('#map-wrap svg');
        if (!svgEl) return 0;
        const cur = d3.zoomTransform(svgEl);
        const raw = evt.deltaMode === 1 ? evt.deltaY * 33 : evt.deltaMode === 2 ? evt.deltaY * 800 : evt.deltaY;
        const factor = Math.pow(0.997, raw);
        _wheelTarget = Math.min(30, Math.max(1, (_wheelTarget || cur.k) * factor));
        const rect = svgEl.getBoundingClientRect();
        _wheelCx = evt.clientX - rect.left;
        _wheelCy = evt.clientY - rect.top;
        if (!_wheelRaf) _wheelRaf = requestAnimationFrame(() => _momentumStep(svgEl, zoom));
        return 0;
      })
      .on('zoom', ({transform}) => {
        g.attr('transform', transform);
        currentZoomK = transform.k;
        _wheelTarget = transform.k;
        updateLabelsVisibility(transform.k);
        if (window._updateVCL) window._updateVCL(transform);
        const zl = document.getElementById('zoom-level-indicator');
        if (zl) zl.textContent = (transform.k < 10 ? transform.k.toFixed(1) : Math.round(transform.k)) + '\u00D7';
        const sl = document.getElementById('zoom-slider');
        if (sl) sl.value = Math.log2(transform.k);
      });
    svg.call(zoom);
    window._mapZoom = zoom;

    // ── Track touch drag distance to distinguish tap vs pan ─────────────────
    let _touchStartX = 0, _touchStartY = 0;
    window._touchDragged = false;
    svg.on('touchstart.dragtrack', function(evt) {
      if (evt.touches.length === 1) {
        _touchStartX = evt.touches[0].clientX;
        _touchStartY = evt.touches[0].clientY;
        window._touchDragged = false;
      } else if (evt.touches.length > 1) {
        // 2º dedo a tocar = gesto de pinça (zoom), nunca um toque simples —
        // marcar já como "arrastado" para o touchend de cada dedo não disparar
        // o clique do país onde esse dedo pousou.
        window._touchDragged = true;
      }
    }, { passive: true });
    svg.on('touchmove.dragtrack', function(evt) {
      if (evt.touches.length === 1) {
        const dx = evt.touches[0].clientX - _touchStartX;
        const dy = evt.touches[0].clientY - _touchStartY;
        if (Math.sqrt(dx*dx + dy*dy) > 6) window._touchDragged = true;
      }
    }, { passive: true });

    // ── Helper: zoom centred on a screen point ───────────────────────────────
    function _zoomAtPoint(mx, my, factor) {
      const svgEl = document.querySelector('#map-wrap svg');
      const cur = d3.zoomTransform(svgEl);
      const newK = Math.min(30, Math.max(1, cur.k * factor));
      const tx = mx - newK * (mx - cur.x) / cur.k;
      const ty = my - newK * (my - cur.y) / cur.k;
      _wheelTarget = newK;
      d3.select(svgEl).transition().duration(280).ease(d3.easeCubicOut)
        .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(newK));
    }
    window._zoomAtPoint = _zoomAtPoint;

    // ── Double-tap (mobile): zoom 2.5× at touch point ───────────────────────
    let _lastTap = 0;
    svg.on('touchend.doubletap', function(evt) {
      const now = Date.now();
      const gap = now - _lastTap;
      if (gap < 280 && gap > 0 && evt.changedTouches.length === 1) {
        evt.preventDefault();
        const t = evt.changedTouches[0];
        const rect = this.getBoundingClientRect();
        _zoomAtPoint(t.clientX - rect.left, t.clientY - rect.top, 2.5);
      }
      _lastTap = now;
    });

    // ── Double-click (desktop): zoom 2.5×; Shift+dblclick: zoom out ─────────
    svg.on('dblclick.zoom', null);
    svg.on('dblclick', function(evt) {
      if (evt.target.tagName === 'svg' || evt.target.classList.contains('cpath')) {
        const [mx, my] = d3.pointer(evt);
        _zoomAtPoint(mx, my, evt.shiftKey ? 1 / 2.5 : 2.5);
      }
    });

    // Click on ocean to close / place pin
    svg.on('click', (evt) => {
      if (evt.target.tagName === 'svg' || (evt.target.tagName === 'path' && !evt.target.classList.contains('cpath'))) {
        hideMapTooltip();
        if (currentMode === 'pin-visited' || currentMode === 'pin-wish') {
          const [mx, my] = d3.pointer(evt);
          const coords = proj.invert([mx, my]);
          if (currentMode === 'pin-visited') {
            openPinForm(coords[1], coords[0], 'pin-visited');
          }
        }
      }
    });

    renderMapPins();

    // ── UK internal borders (England/Scotland/Wales/N.Ireland divisions) ───────
    let ukBordersG = null, ukSubLabelsG = null;
    if (VISITED[826]) {
      ukBordersG = g.append('g').attr('class','uk-borders');
      UK_INTERNAL_BORDERS.features.forEach(f => {
        ukBordersG.append('path')
          .datum(f)
          .attr('d', path)
          .attr('fill', 'none')
          .attr('stroke', 'rgba(255,255,255,0.7)')
          .attr('stroke-width', 0.7)
          .attr('stroke-dasharray', '2.5,2')
          .attr('pointer-events', 'none');
      });

      ukSubLabelsG = g.append('g').attr('class','uk-sublabels');
      UK_SUB_LABELS.forEach(([lng, lat, name]) => {
        const pos = proj([lng, lat]);
        if (!pos || isNaN(pos[0])) return;
        ukSubLabelsG.append('text')
          .attr('x', pos[0]).attr('y', pos[1])
          .attr('data-lng', lng).attr('data-lat', lat)
          .style('font-family', "'Outfit', sans-serif")
          .style('font-size', '5px')
          .style('font-weight', '700')
          .style('fill', 'rgba(255,255,255,0.88)')
          .style('stroke', 'rgba(30,10,0,0.6)')
          .style('stroke-width', '2px')
          .style('stroke-linejoin', 'round')
          .style('paint-order', 'stroke')
          .style('text-anchor', 'middle')
          .style('dominant-baseline', 'middle')
          .style('pointer-events', 'none')
          .text(name);
      });
    }

    // Store references for updateLabelsVisibility
    window._ukBordersG = ukBordersG;
    window._ukSubLabelsG = ukSubLabelsG;

    // ── Raise visited-country labels to TOP of z-order (above cities + all-labels) ──
    labelsG.raise();
    updateLabelsVisibility(1);
    // Defer VCL initial positions until after DOM renders fully
    requestAnimationFrame(() => {
      if (window._updateVCL) window._updateVCL({k:1,x:0,y:0});
    });

  } catch(err) {
    const el = document.getElementById('map-loading');
    if (el) el.textContent = '\u26A0\uFE0F Erro ao carregar o mapa. Verifica a liga\u00E7\u00E3o.';
    console.error(err);
  }
}

function pinPath(r) {
  // Teardrop SVG path centered at (0,0), tip pointing down at (0, r*2.2)
  // r = radius of the head circle
  const tipY = r * 2.2;
  return `M 0,${-tipY} C ${-r*1.1},${-tipY} ${-r},${-tipY+r*0.3} ${-r},${-tipY+r*1.0} A ${r},${r} 0 1,0 ${r},${-tipY+r*1.0} C ${r},${-tipY+r*0.3} ${r*1.1},${-tipY} 0,${-tipY}`;
}

// Better: use a clean teardrop path defined from scratch
function makeTeardrop(r) {
  // Pin shape: circle on top, pointed bottom. Tip at (0,0), body going UP.
  // Using a simple path that looks like a map marker
  const h = r * 2.5; // total height of pin above tip
  const cx = 0, cy = -h; // center of circle head
  return `M 0 0 C ${-r*0.6} ${-h*0.3} ${-r} ${-h*0.55} ${-r} ${cy} A ${r} ${r} 0 1 1 ${r} ${cy} C ${r} ${-h*0.55} ${r*0.6} ${-h*0.3} 0 0 Z`;
}

function updateLabelsVisibility(k) {
  if (!labelsG || !citiesG) return;

  // ── All-country labels now handled by HTML overlay (_updateAllCountryLabels) ──
  // (SVG text labels replaced by HTML flag+name divs for consistency with visited labels)

  // ── World capitals: show at zoom ≥ 2.5 to reduce clutter ────────────────
  const capsLayer = window._capsG;
  if (capsLayer) {
    const showCaps = k >= 2.5;
    capsLayer.selectAll('.cap-dot').each(function() {
      const sel = d3.select(this);
      sel.style('display', showCaps ? null : 'none');
      if (!showCaps) return;
      const px = +sel.attr('data-x');
      const py = +sel.attr('data-y');
      sel.attr('transform', `translate(${px},${py}) scale(${1/k})`);
    });
  }

  // ── City pins: inverse scale for constant screen size ───────────────────────
  const showAllCities = k >= 2.0;
  const showIslandFull = k >= 1.0;
  // Text labels only visible when sufficiently zoomed in
  const showCityText   = k >= 3.5;
  const showIslandText = k >= 5.0;
  const showCapText    = k >= 2.5;

  // Ilhas dos Açores secundárias (exceto S. Miguel) e Lapónia — só zoom ≥ 2.0
  const SECONDARY_PINS = new Set([
    'Terceira','Faial','Pico','Flores','Graciosa','Santa Maria','Corvo','São Jorge',
    'Lapónia'
  ]);
  // PRIORITY_PINS (Toronto, Nova Iorque, Belfast, Londres, Edimburgo, Istambul, Zurique) é partilhada — definida junto ao PLACES

  citiesG.selectAll('.city-pin').each(function() {
    const isCap = this.classList.contains('capital');
    const isIsland = this.classList.contains('island');
    const sel = d3.select(this);
    // Remove qualquer emoji (e não só 🏝️) do fim do nome antes de comparar, para apanhar casos como 'Lapónia 🦌'
    const label = (sel.attr('data-label') || '').replace(/\s*[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]+\s*$/u,'').trim();
    const isSecondary = SECONDARY_PINS.has(label);
    const isPriority = PRIORITY_PINS.has(label);
    const visible = isSecondary ? k >= 2.0 : (isIsland || isCap || isPriority || showAllCities);
    sel.style('display', visible ? null : 'none');
    if (!visible) return;

    const px = +sel.attr('data-x');
    const py = +sel.attr('data-y');

    // Pin size: read from data-baser set during initial render (consistent with pin shape)
    const baseR = +sel.attr('data-baser') || (isIsland ? 3.8 : (isCap ? 3.8 : 2.8));

    const showPin = sel.attr('data-showpin') !== '0';
    if (isIsland && !showIslandFull) {
      sel.attr('transform', `translate(${px},${py})`);
      // Only show halo dot for visited islands at low zoom
      if (showPin) {
        sel.select('circle.island-halo')
          .style('display', null)
          .attr('fill', '#0e7fa8').attr('stroke', 'rgba(255,255,255,0.9)')
          .attr('stroke-width', 0.5).attr('r', 1.8).attr('cy', 0);
      } else {
        sel.select('circle.island-halo').style('display', 'none');
      }
      sel.select('path.pin-body').style('display', 'none');
      sel.select('circle.pin-dot').attr('r', 0);
      sel.select('text').style('display', 'none');
    } else {
      sel.attr('transform', `translate(${px},${py}) scale(${1 / k})`);
      if (isIsland) {
        // Only show halo for visited islands
        sel.select('circle.island-halo')
          .style('display', showPin ? null : 'none')
          .attr('stroke-width', 0.5).attr('r', baseR * 1.1).attr('cy', -baseR * 2.5);
      }
      sel.select('path.pin-body').style('display', showPin ? null : 'none').attr('d', makeTeardrop(baseR));
      sel.select('circle.pin-dot').style('display', showPin ? null : 'none')
        .attr('r', showPin ? baseR * 0.38 : 0).attr('cy', -baseR * 2.5);

    }
  });

  // ── Position city labels (separate layer, not inside scaled groups) ────────
  if (window._cityLabelsG) {
    const showCityText2   = k >= 3.5;
    const showIslandText2 = k >= 5.0;
    const showCapText2    = k >= 2.5;
    window._cityLabelsG.selectAll('text').each(function() {
      const sel = d3.select(this);
      const isIsl = sel.attr('data-isisland') === '1';
      const isCp  = sel.attr('data-iscap')    === '1';
      const show  = isIsl ? showIslandText2 : (isCp ? showCapText2 : showCityText2);
      sel.style('display', show ? null : 'none');
      if (!show) return;
      const pinX = +sel.attr('data-pinx');
      const pinY = +sel.attr('data-piny');
      const br   = +sel.attr('data-baser') || 3.8;
      // pin tip is at (pinX, pinY); pin head centre is at pinY - br*2.5 (in SVG coords)
      // after scale(1/k) the pin head is at screen y = (pinY - br*2.5/k)*k ≈ pinY*k - br*2.5
      // But we're in SVG map coords (no extra scale), so label sits at:
      // label in unscaled SVG coords → divide all px values by k
      const fontSize = (isIsl ? 11 : (isCp ? 12 : 10)) / k;
      const strokeW  = (isIsl ? 4 : 4.5) / k;
      const labelY   = pinY - (br * 2.5 + br + 2) / k;
      sel.attr('x', pinX)
         .attr('y', labelY)
         .style('font-size',   fontSize + 'px')
         .style('stroke-width', strokeW + 'px');
    });
  }


  // ── Home pins: sempre visíveis, label aparece ao zoom ≥ 3 ───────────────────
  if (window._homesG) {
    const showHomeText = k >= 3.0;
    window._homesG.selectAll('.home-pin').each(function() {
      const sel = d3.select(this);
      const px = +sel.attr('data-x');
      const py = +sel.attr('data-y');
      sel.attr('transform', `translate(${px},${py}) scale(${1 / k})`);
      sel.select('text.home-lbl').style('display', showHomeText ? null : 'none');
    });
  }

  if (gRef) {
    gRef.selectAll('.map-pin').each(function() {
      const sel = d3.select(this);
      const px = +sel.attr('data-x');
      const py = +sel.attr('data-y');
      if (!isNaN(px) && !isNaN(py)) {
        sel.attr('transform', `translate(${px},${py}) scale(${1 / k})`);
      }
    });
  }

  // ── UK sub-nation SVG labels — hidden (replaced by vcl-uk HTML overlay) ──────
  const ukSubG = window._ukSubLabelsG;
  if (ukSubG) ukSubG.style('display', 'none');

  // ── UK internal borders: scale stroke-width inversely ─────────────────────
  const ukBrdG = window._ukBordersG;
  if (ukBrdG) {
    ukBrdG.selectAll('path')
      .attr('stroke-width', 0.7 / k)
      .attr('stroke-dasharray', `${2.5 / k},${2 / k}`);
  }

  // ── Açores region label: visible at low zoom (< 3), hidden when zoomed in ──
  const azRG = window._azoresRegionG;
  if (azRG) {
    azRG.style('display', k < 3 ? null : 'none');
    azRG.select('text')
      .style('font-size', (6 / k) + 'px')
      .style('letter-spacing', (2 / k) + 'px')
      .style('stroke-width', (2.5 / k) + 'px');
  }
}

// ─── MAP TOOLTIP ─────────────────────────────────────────────────────────────
// Build capital name lookup from WORLD_CAPITALS: [id, name, lat, lng]
const CAPITAL_NAMES = {};
if (typeof WORLD_CAPITALS !== 'undefined') {
  WORLD_CAPITALS.forEach(([id, name]) => { CAPITAL_NAMES[id] = name; });
}

let _ttHideTimer = null;

function showMapTooltip(evt, id) {
  const tt = document.getElementById('map-tooltip');
  if (!tt) return;

  // Don't show tooltip if a sheet/modal is open
  if (document.getElementById('sheet')?.classList.contains('open')) return;

  const isVisited = !!VISITED[id];
  const isWish    = typeof wishCountriesNumeric !== 'undefined' && wishCountriesNumeric.has(id);

  // Country name (clean, no flag emoji)
  const rawName = (isVisited ? VISITED[id]?.name : null)
    || (typeof WORLD_NAMES !== 'undefined' ? WORLD_NAMES[id] : null)
    || (typeof getCountryName === 'function' ? getCountryName(id)?.replace(/[\uD83C][\uDDE0-\uDDFF]{2}/g,'').trim() : null)
    || null;
  // Se não há nome reconhecido (território sem dados), não mostra tooltip
  if (!rawName) return;
  const name = (rawName || '')
    .replace(/[\uD83C][\uDDE0-\uDDFF]{2}/g, '')
    .replace(/[\uD83C][\uDFF4]/g, '')
    .replace(/[\uFE0F]/g, '')
    .trim();

  const capital = CAPITAL_NAMES[id] || '';
  const code    = (typeof FLAG_CODES !== 'undefined' ? FLAG_CODES[id] : null)
               || (typeof NUM_TO_CODE !== 'undefined' ? NUM_TO_CODE[id] : null)
               || '';
  const year    = isVisited ? (VISITED[id]?.year || '') : '';

  // Fill content
  const flagImg = document.getElementById('tt-flag-img');
  if (code) {
    flagImg.src = `https://flagcdn.com/w40/${code}.png`;
    flagImg.style.display = 'block';
  } else {
    flagImg.style.display = 'none';
  }
  document.getElementById('tt-name').textContent = name;
  document.getElementById('tt-capital').textContent = capital ? `🏛 ${capital}` : '';

  const badgeWrap = document.getElementById('tt-badge-wrap');
  const ttCutoff = new Date('2026-08-25');
  const ttToday = new Date();
  const SOON_TT = new Set([688, 807, 383]);
  const isSoon = SOON_TT.has(id) && ttToday < ttCutoff;
  if (isSoon) {
    badgeWrap.innerHTML = `<span class="tt-badge" style="background:#fde8f2;color:#e0457b;border:1px solid #e0457b;">🗓️ a visitar em breve</span>`;
  } else if (isVisited) {
    badgeWrap.innerHTML = `<span class="tt-badge visited">✓ visitado${year ? `<span class="tt-year">${year}</span>` : ''}</span>`;
  } else if (isWish) {
    badgeWrap.innerHTML = `<span class="tt-badge wish">⭐ wishlist</span>`;
  } else {
    badgeWrap.innerHTML = `<span class="tt-badge explore">🌍 por explorar</span>`;
  }

  // Position tooltip above cursor, clamped to viewport
  const margin = 12;
  const wrap   = document.getElementById('map-wrap');
  const wr     = wrap ? wrap.getBoundingClientRect() : { left:0, top:0, width: window.innerWidth, height: window.innerHeight };
  const ttW    = tt.offsetWidth  || 200;
  const ttH    = tt.offsetHeight || 90;

  let left = evt.clientX - wr.left - ttW / 2;
  let top  = evt.clientY - wr.top  - ttH - 16;

  // Clamp horizontally
  left = Math.max(margin, Math.min(left, wr.width - ttW - margin));
  // If not enough room above, show below cursor
  if (top < margin) top = evt.clientY - wr.top + 20;

  tt.style.left = left + 'px';
  tt.style.top  = top  + 'px';
  tt.style.position = 'absolute';

  // Show
  if (_ttHideTimer) { clearTimeout(_ttHideTimer); _ttHideTimer = null; }
  tt.classList.add('visible');
}

function hideMapTooltip() {
  const tt = document.getElementById('map-tooltip');
  if (!tt) return;
  tt.classList.remove('visible');
}

function getCountryName(numericId) {
  // Rough lookup table for wishlist display
  const names = {
    392:'Jap\u00E3o \uD83C\uDDEF\uD83C\uDDF5', 356:'\u00CDndia \uD83C\uDDEE\uD83C\uDDF3', 76:'Brasil \uD83C\uDDE7\uD83C\uDDF7', 36:'Austr\u00E1lia \uD83C\uDDE6\uD83C\uDDFA',
    554:'Nova Zel\u00E2ndia \uD83C\uDDF3\uD83C\uDDFF', 710:'\u00C1frica do Sul \uD83C\uDDFF\uD83C\uDDE6', 818:'Egito \uD83C\uDDEA\uD83C\uDDEC',
    760:'S\u00EDria \uD83C\uDDF8\uD83C\uDDFE', 702:'Singapura \uD83C\uDDF8\uD83C\uDDEC', 410:'Coreia do Sul \uD83C\uDDF0\uD83C\uDDF7',
    156:'China \uD83C\uDDE8\uD83C\uDDF3', 840:'EUA \uD83C\uDDFA\uD83C\uDDF8', 484:'M\u00E9xico \uD83C\uDDF2\uD83C\uDDFD', 152:'Chile \uD83C\uDDE8\uD83C\uDDF1',
    32:'Argentina \uD83C\uDDE6\uD83C\uDDF7', 604:'Peru \uD83C\uDDF5\uD83C\uDDEA', 170:'Col\u00F4mbia \uD83C\uDDE8\uD83C\uDDF4',
    566:'Nig\u00E9ria \uD83C\uDDF3\uD83C\uDDEC', 404:'Qu\u00E9nia \uD83C\uDDF0\uD83C\uDDEA', 288:'Ghana \uD83C\uDDEC\uD83C\uDDED',
    682:'Ar\u00E1bia Saudita \uD83C\uDDF8\uD83C\uDDE6', 364:'Ir\u00E3o \uD83C\uDDEE\uD83C\uDDF7', 586:'Paquist\u00E3o \uD83C\uDDF5\uD83C\uDDF0',
    50:'Bangladesh \uD83C\uDDE7\uD83C\uDDE9', 144:'Sri Lanka \uD83C\uDDF1\uD83C\uDDF0', 104:'Myanmar \uD83C\uDDF2\uD83C\uDDF2',
    116:'Camboja \uD83C\uDDF0\uD83C\uDDED', 418:'Laos \uD83C\uDDF1\uD83C\uDDE6', 704:'Vietnam \uD83C\uDDFB\uD83C\uDDF3',
    458:'Mal\u00E1sia \uD83C\uDDF2\uD83C\uDDFE', 360:'Indon\u00E9sia \uD83C\uDDEE\uD83C\uDDE9', 608:'Filipinas \uD83C\uDDF5\uD83C\uDDED',
  };
  return names[numericId] || null;
}

// ─── SHEETS ───────────────────────────────────────────────────────────────────
function openSheet(info, numericId) {
  document.getElementById('s-name').textContent = info.name;
  const yr = document.getElementById('s-year');
  yr.textContent = '\uD83D\uDCC5 ' + info.year;
  yr.className = '';
  // Photo (if available for this country)
  const photoSrc = (typeof COUNTRY_PHOTOS !== 'undefined') ? COUNTRY_PHOTOS[numericId] : null;
  const noteEl = document.getElementById('s-note');
  const galleryPhotos = (typeof COUNTRY_GALLERY !== 'undefined') ? COUNTRY_GALLERY[numericId] : null;
  // Photo focus position per country (for panoramic images)
  const PHOTO_POS = { 462: '60%', 834: '75%' };
  const photoPos = PHOTO_POS[numericId] || '60%';
  if (galleryPhotos && galleryPhotos.length > 0) {
    // Galeria com múltiplas fotos
    const allPhotos = photoSrc ? [photoSrc].concat(galleryPhotos) : galleryPhotos;
    var items = '';
    for (var gi = 0; gi < allPhotos.length; gi++) {
      items += '<div class="sh-gallery-item"><img src="' + allPhotos[gi] + '" alt="' + info.name + ' ' + (gi+1) + '" loading="lazy"></div>';
    }
    var dots = '';
    if (allPhotos.length > 1) {
      dots = '<div class="sh-gallery-dots">';
      for (var di = 0; di < allPhotos.length; di++) {
        dots += '<div class="sh-gallery-dot' + (di===0 ? ' active' : '') + '" data-idx="' + di + '"></div>';
      }
      dots += '</div>';
    }
    noteEl.innerHTML = '<div class="sh-gallery" id="sh-gallery-' + numericId + '">' + items + '</div>' + dots + '<span style="font-style:italic;color:#666;font-size:13px;line-height:1.55;">' + (info.note || '') + '</span>';
    // Scroll dots sync
    var gallery = document.getElementById('sh-gallery-' + numericId);
    if (gallery && allPhotos.length > 1) {
      gallery.addEventListener('scroll', function() {
        var scrollIdx = Math.round(gallery.scrollLeft / (gallery.offsetWidth || 1));
        noteEl.querySelectorAll('.sh-gallery-dot').forEach(function(d, i) { d.classList.toggle('active', i === scrollIdx); });
      });
    }
  } else if (photoSrc) {
    noteEl.innerHTML = '<div class="sh-photo-wrap"><img class="sh-photo" src="' + photoSrc + '" alt="' + info.name + '" loading="lazy" style="object-position:center ' + photoPos + '"></div><span style="font-style:italic;color:#666;font-size:13px;line-height:1.55;">' + (info.note || '') + '</span>';
  } else {
    noteEl.textContent = info.note || '';
  }
  const actions = document.getElementById('sh-actions');
  const guideBtn = GUIDES_DATA.filter(g => g.countryId === numericId).map(g =>
    `<button class="sh-btn guide-btn" onclick="openGuideFromSheet('${g.id}')">\uD83D\uDCD6 Ver guia: ${g.name}</button>`
  ).join('');
  actions.innerHTML = `<button class="sh-btn gold" onclick="openPinFormFromSheet(${numericId})">\uD83D\uDCCD Adicionar pin de local</button>${guideBtn}`;
  document.getElementById('sheet').classList.add('on');
  document.getElementById('backdrop').classList.add('on');
}

function openUKSheet() {
  document.getElementById('s-name').textContent = 'Reino Unido \uD83C\uDDEC\uD83C\uDDE7';
  const yr = document.getElementById('s-year');
  yr.textContent = '\uD83D\uDCC5 2014 / 2024 / 2025';
  yr.className = '';
  document.getElementById('s-note').textContent = UK_DETAIL.map(u => `${u.name} (${u.year}) \u2014 ${u.note}`).join('\n');
  const actions = document.getElementById('sh-actions');
  const guideBtn = GUIDES_DATA.filter(g => g.countryId === 826).map(g =>
    `<button class="sh-btn guide-btn" onclick="openGuideFromSheet('${g.id}')">\uD83D\uDCD6 Ver guia: ${g.name}</button>`
  ).join('');
  actions.innerHTML = `<button class="sh-btn gold" onclick="openPinForm(null,null,'pin-visited')">\uD83D\uDCCD Adicionar pin</button>${guideBtn}`;
  document.getElementById('sheet').classList.add('on');
  document.getElementById('backdrop').classList.add('on');
}

function openSheetWish(info) {
  document.getElementById('s-name').textContent = info.name;
  const yr = document.getElementById('s-year');
  yr.textContent = '\u2B50 Wishlist';
  yr.className = 'wish-tag';
  document.getElementById('s-note').textContent = 'Ainda n\u00E3o visitado \u2014 est\u00E1 na lista de sonhos!';
  const actions = document.getElementById('sh-actions');
  actions.innerHTML = `
    <button class="sh-btn red" onclick="removeWishCountry(${info.id})">\uD83D\uDDD1\uFE0F Remover</button>
  `;
  document.getElementById('sheet').classList.add('on');
  document.getElementById('backdrop').classList.add('on');
}

function openPinFormFromSheet(numericId) {
  closeAll();
  setTimeout(() => openPinForm(null, null, 'pin-visited'), 100);
}

async function removeWishCountry(id) {
  wishCountriesNumeric.delete(id);
  await saveWishCountries();
  d3.selectAll('.cpath').filter(d => +d.id === id).attr('class', 'cpath no');
  closeAll();
  showNotif('Removido da wishlist');
  renderWishList();
  renderWishChips();
}

function closeAll() {
  document.getElementById('sheet').classList.remove('on');
  document.getElementById('backdrop').classList.remove('on');
  document.getElementById('pin-form').classList.remove('on');
}

// ─── PIN FORM ─────────────────────────────────────────────────────────────────
let currentPinType = 'pin-visited';

// ─── UPDATE MAP COUNTRY COLORS ────────────────────────────────────────────────
function updateMapColors() {
  // Build set of numeric IDs from user visited pins
  const userVisitedIds = new Set();
  pins.filter(p => p.type === 'pin-visited').forEach(p => {
    // Match by countryId if available
    if (p.countryId) { userVisitedIds.add(+p.countryId); return; }
    // Otherwise match by name against WORLD_NAMES
    const nameNorm = (p.name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
    Object.entries(WORLD_NAMES).forEach(([id, wname]) => {
      const wnorm = wname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      if (wnorm === nameNorm || nameNorm.includes(wnorm) || wnorm.includes(nameNorm)) {
        userVisitedIds.add(+id);
      }
    });
  });

  const mapCutoff = new Date('2026-08-25');
  const mapToday = new Date();
  const SOON_IDS = new Set([688, 807, 383]);

  // Mostrar/esconder legenda e botão "A visitar em breve"
  const legendSoon = document.getElementById('legend-soon');
  if (legendSoon) legendSoon.style.display = mapToday < mapCutoff ? '' : 'none';
  const btnSoon = document.getElementById('btn-pin-soon');
  if (btnSoon) btnSoon.style.display = mapToday < mapCutoff ? '' : 'none';

  d3.selectAll('.cpath').each(function() {
    const id = +this.getAttribute('data-id');
    if (!id) return;
    if (SOON_IDS.has(id) && mapToday < mapCutoff) {
      this.setAttribute('class', 'cpath soon');
    } else if (VISITED[id] || userVisitedIds.has(id)) {
      this.setAttribute('class', 'cpath vis');
    } else if (wishCountriesNumeric.has(id)) {
      this.setAttribute('class', 'cpath wish');
    } else {
      this.setAttribute('class', 'cpath no');
    }
  });
}


function updateStats() {
  // Countries: VISITED entries + UK counts as 3 (England, Scotland, N.Ireland)
  // Base: Object.keys(VISITED) has 826 (UK) as 1, but we visited 3 nations
  const baseCountries = Object.keys(VISITED).length; // e.g. 33
  // UK = +2 extra (Scotland + N.Ireland on top of England)
  // User pins: only count distinct countryIds NOT already in VISITED
  const visitedBaseIds = new Set(Object.keys(VISITED).map(Number));
  const userNewCountryIds = new Set(
    pins
      .filter(p => p.type === 'pin-visited' && p.countryId && !visitedBaseIds.has(+p.countryId))
      .map(p => +p.countryId)
  );
  // Cutoff date for future trips (Balcãs)
  const cutoff = new Date('2026-08-25');
  const today = new Date();

  // Exclude Sérvia (688), Macedónia do Norte (807), Kosovo (383) until 25 Aug 2026
  const FUTURE_COUNTRIES = new Set([688, 807, 383]);
  const futureExclusion = today < cutoff ? [...FUTURE_COUNTRIES].filter(id => visitedBaseIds.has(id)).length : 0;
  const numPaises = baseCountries + 2 + userNewCountryIds.size - futureExclusion;

  // Continents visited
  const VISITED_CONTINENTS = {
    276:'Europa',40:'Europa',56:'Europa',208:'Europa',724:'Europa',246:'Europa',
    250:'Europa',300:'Europa',348:'Europa',380:'Europa',372:'Europa',352:'Europa',
    492:'Europa',578:'Europa',620:'Europa',528:'Europa',616:'Europa',203:'Europa',
    752:'Europa',756:'Europa',826:'Europa',336:'Europa',792:'Europa',
    688:'Europa',807:'Europa',383:'Europa',
    132:'\u00C1frica',231:'\u00C1frica',504:'\u00C1frica',834:'\u00C1frica',
    764:'\u00C1sia',462:'\u00C1sia',
    784:'M\u00E9dio Oriente',634:'M\u00E9dio Oriente',
    124:'Am\u00E9rica do Norte',840:'Am\u00E9rica do Norte',
  };
  const conts = new Set(Object.keys(VISITED).map(id => {
    const c = VISITED_CONTINENTS[+id];
    if (!c) return null;
    return (c === 'M\u00E9dio Oriente') ? '\u00C1sia' : c;
  }).filter(Boolean));
  const numConts = conts.size;

  // 19 anos de viagens em conjunto
  const TRAVEL_YEARS = new Set([
    2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,
    2017,2018,2019,2021,2022,2023,2024,2025,2026
  ]); // 19 anos (sem 2020 — pandemia)
  // Add years from user pins
  pins.filter(p => p.type === 'pin-visited').forEach(p => {
    const matches = (p.year || '').match(/\d{4}/g) || [];
    matches.forEach(y => { const n = +y; if (n >= 2000 && n <= new Date().getFullYear()) TRAVEL_YEARS.add(n); });
  });
  const numAnos = TRAVEL_YEARS.size;

  // Destinations: total guides excluding future trips (Belgrado, Macedónia do Norte, Pristina — a partir de 25 ago 2026)
  const FUTURE_GUIDES = new Set(['belgrado', 'macedonia', 'pristina']);
  const numDestinos = GUIDES_DATA.filter(g => today >= cutoff || !FUTURE_GUIDES.has(g.id)).length;

  // Update DOM
  const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  el('stat-paises', numPaises);
  el('stat-conts', numConts);
  el('stat-anos', numAnos);
  el('stat-destinos', numDestinos);

  // Dynamic header badges
  const badge = document.getElementById('hbadge-paises');
  if (badge) badge.textContent = `\uD83C\uDF0D ${numPaises} Pa\u00EDses`;
  const badgeConts = document.getElementById('hbadge-conts');
  if (badgeConts) badgeConts.textContent = `${numConts} Continentes`;

  // Count Portuguese islands from PLACES (Açores + Madeira only)
  const PT_ISLAND_NAMES = ['S\u00E3o Miguel','Terceira','Faial','Pico','Flores','Graciosa','Santa Maria','Corvo','S\u00E3o Jorge','Madeira'];
  const ptIslands = PLACES.filter(([,,name,,isIsland]) => isIsland &&
    PT_ISLAND_NAMES.some(n => name.includes(n))).length;
  const badgeIlhas = document.getElementById('hbadge-ilhas');
  if (badgeIlhas) badgeIlhas.textContent = `${Math.min(ptIslands, 10)} Ilhas Portuguesas`;
}



// Country → continent mapping
const COUNTRY_CONTINENT = {
  // Europa
  276:'Europa',40:'Europa',56:'Europa',208:'Europa',724:'Europa',246:'Europa',
  250:'Europa',300:'Europa',348:'Europa',380:'Europa',372:'Europa',352:'Europa',
  492:'Europa',578:'Europa',620:'Europa',528:'Europa',616:'Europa',203:'Europa',
  642:'Europa',643:'Europa',752:'Europa',756:'Europa',826:'Europa',
  688:'Europa',499:'Europa',807:'Europa',703:'Europa',705:'Europa',383:'Europa',
  440:'Europa',428:'Europa',233:'Europa',112:'Europa',804:'Europa',498:'Europa',
  336:'Europa',674:'Europa',20:'Europa',442:'Europa',470:'Europa',191:'Europa',
  196:'Europa',
  // África
  12:'\u00C1frica',24:'\u00C1frica',204:'\u00C1frica',72:'\u00C1frica',854:'\u00C1frica',108:'\u00C1frica',
  120:'\u00C1frica',132:'\u00C1frica',140:'\u00C1frica',148:'\u00C1frica',174:'\u00C1frica',178:'\u00C1frica',
  180:'\u00C1frica',262:'\u00C1frica',232:'\u00C1frica',231:'\u00C1frica',266:'\u00C1frica',270:'\u00C1frica',
  288:'Afrika',324:'\u00C1frica',624:'\u00C1frica',384:'\u00C1frica',404:'\u00C1frica',426:'\u00C1frica',
  430:'\u00C1frica',434:'\u00C1frica',450:'\u00C1frica',454:'\u00C1frica',466:'\u00C1frica',478:'\u00C1frica',
  480:'\u00C1frica',504:'\u00C1frica',508:'\u00C1frica',516:'\u00C1frica',562:'\u00C1frica',566:'\u00C1frica',
  646:'\u00C1frica',678:'\u00C1frica',686:'\u00C1frica',694:'\u00C1frica',706:'\u00C1frica',710:'\u00C1frica',
  729:'\u00C1frica',728:'\u00C1frica',768:'\u00C1frica',788:'\u00C1frica',800:'\u00C1frica',834:'\u00C1frica',
  716:'\u00C1frica',894:'\u00C1frica',748:'\u00C1frica',
  // Ásia
  4:'\u00C1sia',50:'\u00C1sia',64:'\u00C1sia',96:'\u00C1sia',116:'\u00C1sia',156:'\u00C1sia',
  356:'\u00C1sia',360:'\u00C1sia',364:'\u00C1sia',368:'\u00C1sia',376:'\u00C1sia',392:'\u00C1sia',
  398:'\u00C1sia',408:'\u00C1sia',410:'\u00C1sia',417:'\u00C1sia',418:'\u00C1sia',422:'\u00C1sia',
  458:'\u00C1sia',462:'\u00C1sia',104:'\u00C1sia',524:'\u00C1sia',408:'\u00C1sia',586:'\u00C1sia',
  608:'\u00C1sia',144:'\u00C1sia',762:'\u00C1sia',764:'\u00C1sia',626:'\u00C1sia',704:'\u00C1sia',
  860:'\u00C1sia',795:'\u00C1sia',158:'\u00C1sia',496:'\u00C1sia',
  // Médio Oriente
  48:'M\u00E9dio Oriente',31:'M\u00E9dio Oriente',400:'M\u00E9dio Oriente',414:'M\u00E9dio Oriente',
  512:'M\u00E9dio Oriente',634:'M\u00E9dio Oriente',682:'M\u00E9dio Oriente',760:'M\u00E9dio Oriente',
  784:'M\u00E9dio Oriente',887:'M\u00E9dio Oriente',792:'M\u00E9dio Oriente',275:'M\u00E9dio Oriente',
  // América do Norte
  124:'Am\u00E9rica do Norte',484:'Am\u00E9rica do Norte',840:'Am\u00E9rica do Norte',
  192:'Am\u00E9rica do Norte',214:'Am\u00E9rica do Norte',222:'Am\u00E9rica do Norte',
  320:'Am\u00E9rica do Norte',332:'Am\u00E9rica do Norte',340:'Am\u00E9rica do Norte',
  388:'Am\u00E9rica do Norte',558:'Am\u00E9rica do Norte',591:'Am\u00E9rica do Norte',
  630:'Am\u00E9rica do Norte',780:'Am\u00E9rica do Norte',
  // América do Sul
  32:'Am\u00E9rica do Sul',68:'Am\u00E9rica do Sul',76:'Am\u00E9rica do Sul',152:'Am\u00E9rica do Sul',
  170:'Am\u00E9rica do Sul',218:'Am\u00E9rica do Sul',328:'Am\u00E9rica do Sul',600:'Am\u00E9rica do Sul',
  604:'Am\u00E9rica do Sul',740:'Am\u00E9rica do Sul',858:'Am\u00E9rica do Sul',862:'Am\u00E9rica do Sul',
  // Oceânia
  36:'Oce\u00E2nia',554:'Oce\u00E2nia',598:'Oce\u00E2nia',242:'Oce\u00E2nia',90:'Oce\u00E2nia',
  548:'Oce\u00E2nia',520:'Oce\u00E2nia',585:'Oce\u00E2nia',583:'Oce\u00E2nia',584:'Oce\u00E2nia',
  798:'Oce\u00E2nia',776:'Oce\u00E2nia',882:'Oce\u00E2nia',
};

// Build year selector — past years (2000→now) + future years (now+1→now+10)
function buildYearSelect(isWish) {
  const sel = document.getElementById('pf-year');
  if (!sel) return;
  const now = new Date().getFullYear();
  sel.innerHTML = '<option value="">\u2014 ano \u2014</option>';
  if (isWish) {
    // Future: current year + 10 years ahead
    for (let y = now; y <= now + 10; y++) {
      const opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      if (y === now + 1) opt.selected = true;
      sel.appendChild(opt);
    }
  } else {
    // Past: 2000 → current year (descending, default = current)
    for (let y = now; y >= 2000; y--) {
      const opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      if (y === now) opt.selected = true;
      sel.appendChild(opt);
    }
  }
}

// Autocomplete search in form
function pfSearch(q) {
  const sug = document.getElementById('pf-suggestions');
  if (!q || q.length < 2) { sug.style.display = 'none'; return; }
  const norm = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const matches = Object.entries(WORLD_NAMES)
    .filter(([,name]) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(norm))
    .slice(0, 8);
  if (!matches.length) { sug.style.display = 'none'; return; }
  sug.style.display = 'block';
  sug.innerHTML = matches.map(([id, name]) => {
    const code = FLAG_CODES[+id] || '';
    const flag = code ? `<img src="https://flagcdn.com/w20/${code}.png" style="width:18px;height:12px;border-radius:2px;margin-right:6px;vertical-align:middle;">` : '\uD83C\uDF0D ';
    return `<div onclick="pfSelect(${id},'${name.replace(/'/g,"\\'")}')"
      style="padding:8px 14px;cursor:pointer;display:flex;align-items:center;font-size:13px;border-bottom:1px solid #f1f5f9;"
      onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''"
    >${flag}${name}</div>`;
  }).join('');
}

function pfSelect(id, name) {
  document.getElementById('pf-name').value = name;
  document.getElementById('pf-suggestions').style.display = 'none';
  document.getElementById('pf-country-id').value = id;
  // Auto-fill continent
  const continent = COUNTRY_CONTINENT[+id] || '';
  const contSel = document.getElementById('pf-continent');
  if (contSel && continent) contSel.value = continent;
  // Auto-fill flag code — FLAG_CODES has visited countries, NUM_TO_CODE has all countries
  const code = FLAG_CODES[+id] || NUM_TO_CODE[+id] || '';
  document.getElementById('pf-emoji').value = code;
}

function openPinForm(lat, lng, type, numericId) {
  currentPinType = type || 'pin-visited';
  document.getElementById('pf-lat').value = lat || '';
  document.getElementById('pf-lng').value = lng || '';
  document.getElementById('pf-edit-id').value = '';
  document.getElementById('pf-note').value = '';
  document.getElementById('pf-suggestions').style.display = 'none';
  const seasonSel = document.getElementById('pf-season');
  if (seasonSel) seasonSel.value = '';

  // Auto-fill from numericId if a country was clicked on the map
  if (numericId) {
    const id = +numericId;
    // Use WORLD_NAMES first (clean names without emoji),
    // fall back to VISITED name with emoji stripped
    let rawName = WORLD_NAMES[id] || '';
    if (!rawName && VISITED[id]) {
      // Strip surrogate-pair emoji from name
      // \uD83C\uDDE0-\uD83C\uDDFF = flag letter indicators (surrogate pairs)
      rawName = VISITED[id].name
        .replace(/[\uD83C][\uDDE0-\uDDFF]/g, '')  // flag letter sequences
        .replace(/[\uD83C][\uDFF4]/g, '')          // black flag
        .replace(/[\uFE0F]/g, '')                  // variation selectors
        .trim();
    }
    document.getElementById('pf-name').value = rawName;
    document.getElementById('pf-country-id').value = id;
    // Continent
    const continent = COUNTRY_CONTINENT[id] || '';
    const contSel = document.getElementById('pf-continent');
    if (contSel) contSel.value = continent;
    // Flag code — FLAG_CODES for visited, NUM_TO_CODE for all countries
    const code = FLAG_CODES[id] || NUM_TO_CODE[id] || '';
    document.getElementById('pf-emoji').value = code;
  } else {
    document.getElementById('pf-name').value = '';
    document.getElementById('pf-emoji').value = '';
    const contSel = document.getElementById('pf-continent');
    if (contSel) contSel.value = '';
    const countryIdEl = document.getElementById('pf-country-id');
    if (countryIdEl) countryIdEl.value = '';
  }

  buildYearSelect(currentPinType === 'pin-wish');
  // Sync type buttons
  document.getElementById('type-vis').className = 'type-opt' + (currentPinType === 'pin-visited' ? ' sel-visited' : '');
  document.getElementById('type-wish').className = 'type-opt' + (currentPinType === 'pin-wish' ? ' sel-wish' : '');
  document.getElementById('pf-submit').className = 'submit-btn ' + (currentPinType === 'pin-wish' ? 'wish' : 'visited');
  document.getElementById('pin-form').classList.add('on');
}

function closePinForm() {
  document.getElementById('pin-form').classList.remove('on');
  document.getElementById('backdrop').classList.remove('on');
  const sug = document.getElementById('pf-suggestions');
  if (sug) sug.style.display = 'none';
}

function setPinType(type) {
  currentPinType = type;
  document.getElementById('type-vis').className = 'type-opt' + (type === 'pin-visited' ? ' sel-visited' : '');
  document.getElementById('type-wish').className = 'type-opt' + (type === 'pin-wish' ? ' sel-wish' : '');
  const btn = document.getElementById('pf-submit');
  btn.className = 'submit-btn ' + (type === 'pin-visited' ? 'visited' : 'wish');
  btn.textContent = type === 'pin-visited' ? '\uD83D\uDCCD Guardar Pin Visitado' : '\u2B50 Guardar na Wishlist';
  buildYearSelect(type === 'pin-wish');
}

function submitPin() {
  const name = document.getElementById('pf-name').value.trim();
  if (!name) { document.getElementById('pf-name').focus(); return; }
  const editId = document.getElementById('pf-edit-id').value;
  const year = document.getElementById('pf-year').value;
  const season = document.getElementById('pf-season')?.value || '';
  const continent = document.getElementById('pf-continent')?.value || '';
  const yearLabel = [year, season].filter(Boolean).join(' ');
  const pin = {
    id: editId || Date.now().toString(),
    name,
    year: yearLabel,
    continent,
    countryId: document.getElementById('pf-country-id')?.value || null,
    emoji: document.getElementById('pf-emoji').value.trim() || (currentPinType === 'pin-visited' ? '\uD83D\uDCCD' : '\u2B50'),
    note: document.getElementById('pf-note').value.trim(),
    lat: parseFloat(document.getElementById('pf-lat').value) || null,
    lng: parseFloat(document.getElementById('pf-lng').value) || null,
    type: currentPinType,
  };
  if (editId) {
    const idx = pins.findIndex(p => p.id === editId);
    if (idx > -1) pins[idx] = pin;
  } else {
    pins.push(pin);
  }
  savePins(); // async fire-and-forget
  closePinForm();
  renderMapPins();
  renderPinsList();   // também chama renderUserChips → renderFlagStrip
  renderWishList();
  updateMapColors();
  updateStats();

  // Bandeira no mapa + flag strip em tempo real
  if (currentPinType === 'pin-visited' && pin.countryId) {
    addFlagToMap(pin);
  }

  showNotif(currentPinType === 'pin-visited' ? '\uD83D\uDCCD Pin guardado!' : '\u2B50 Adicionado \u00E0 wishlist!');
}

// ─── ADICIONAR BANDEIRA AO MAPA EM TEMPO REAL ────────────────────────────────
// Chamado depois de guardar um pin visitado — injeta a bandeira no overlay
// sem precisar de recarregar o mapa inteiro.
function addFlagToMap(pin) {
  if (!projRef || !window._vclOverlay) return;
  const id = +pin.countryId;
  if (!id) return;

  // Já existe no overlay? Não duplicar
  if (window._vclOverlay.querySelector(`.vcl[data-id="${id}"]`)) return;

  // Calcular posição SVG: usar COUNTRY_LABEL_POS se existir, senão WORLD_CAP_POS
  let geoPos = COUNTRY_LABEL_POS[id] || null;
  if (!geoPos && WORLD_CAP_POS[id]) geoPos = WORLD_CAP_POS[id];
  if (!geoPos) return;

  const svgPos = projRef(geoPos);
  if (!svgPos || isNaN(svgPos[0])) return;

  const code = FLAG_CODES[id] || NUM_TO_CODE[id] || '';
  const name = WORLD_NAMES[id] || pin.name
    .replace(/[\uD83C][\uDDE0-\uDDFF]/g, '')
    .replace(/[\uD83C][\uDFF4]/g, '')
    .replace(/[\uFE0F]/g, '')
    .trim();
  const tier = 'small';

  // Guardar nos dados para _updateVCL posicionar correctamente
  window._visitedLabelData = window._visitedLabelData || [];
  window._visitedLabelData.push({ id, svgPos, name, tier });

  // Bandeira flutuante (zoom baixo)
  if (code) {
    const flagEl = document.createElement('img');
    flagEl.className = 'vcl-flag';
    flagEl.dataset.id = id;
    flagEl.src = `https://flagcdn.com/w40/${code}.png`;
    flagEl.alt = name;
    window._vclOverlay.appendChild(flagEl);
  }

  // Label bandeira + nome (zoom alto)
  const div = document.createElement('div');
  div.className = 'vcl';
  div.dataset.id = id;
  div.dataset.tier = tier;
  if (code) {
    const flagImg = document.createElement('img');
    flagImg.className = 'vcl-flag-inline';
    flagImg.src = `https://flagcdn.com/w40/${code}.png`;
    flagImg.alt = '';
    div.appendChild(flagImg);
  }
  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  div.appendChild(nameSpan);
  // Click no label abre o sheet
  div.addEventListener('click', function(evt) {
    evt.stopPropagation();
    if (id === 826) { openUKSheet(); return; }
    const info = VISITED[id];
    if (info) openSheet(info, id);
  });
  div.style.cursor = 'pointer';
  window._vclOverlay.appendChild(div);

  // Forçar reposicionamento imediato com o zoom atual
  if (window._updateVCL) {
    const svgEl = document.querySelector('#map-wrap svg');
    if (svgEl) window._updateVCL(d3.zoomTransform(svgEl));
  }
}
function renderMapPins() {
  if (!gRef || !projRef) return;
  gRef.selectAll('.map-pin').remove();
  const pinsWithCoords = pins.filter(p => p.lat != null && p.lng != null);
  pinsWithCoords.forEach(pin => {
    const [x, y] = projRef([pin.lng, pin.lat]);
    if (isNaN(x) || isNaN(y)) return;
    const col = pin.type === 'pin-visited' ? '#1a6bb5' : '#2d7a4f';
    const r = 4.5;
    const pg = gRef.append('g')
      .attr('class', 'map-pin')
      .attr('transform', `translate(${x},${y}) scale(${1/currentZoomK})`)
      .attr('data-x', x)
      .attr('data-y', y)
      .style('filter', 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))')
      .on('click', (evt) => {
        evt.stopPropagation();
        openPinDetail(pin);
      });

    // Teardrop pin body
    pg.append('path')
      .attr('d', makeTeardrop(r))
      .attr('fill', col)
      .attr('stroke', 'white')
      .attr('stroke-width', 1);

    // Inner dot
    pg.append('circle')
      .attr('cx', 0).attr('cy', -r * 2.5)
      .attr('r', r * 0.38)
      .attr('fill', 'white').attr('opacity', 0.9);

    // Label above pin
    pg.append('text')
      .attr('x', 0).attr('y', -(r * 2.5 + r + 2))
      .attr('text-anchor', 'middle')
      .attr('font-size', '6px')
      .attr('font-family', 'Outfit, sans-serif')
      .attr('font-weight', '600')
      .attr('fill', col)
      .attr('paint-order', 'stroke')
      .attr('stroke', 'rgba(255,255,255,0.95)')
      .attr('stroke-width', '2.5px')
      .attr('stroke-linejoin', 'round')
      .text(pin.name.length > 16 ? pin.name.slice(0,14)+'\u2026' : pin.name);
  });
}

// ─── PIN DETAIL ───────────────────────────────────────────────────────────────
function openPinDetail(pin) {
  document.getElementById('s-name').textContent = `${pin.emoji} ${pin.name}`;
  const yr = document.getElementById('s-year');
  yr.textContent = pin.type === 'pin-visited' ? (pin.year ? `\uD83D\uDCC5 ${pin.year}` : '\uD83D\uDCC5 \u2014') : '\u2B50 Wishlist';
  yr.className = pin.type === 'pin-wish' ? 'wish-tag' : '';
  document.getElementById('s-note').textContent = pin.note || '';
  const actions = document.getElementById('sh-actions');
  actions.innerHTML = `
    <button class="sh-btn gold" onclick="editPin('${pin.id}')">\u270F\uFE0F Editar</button>
    <button class="sh-btn red" onclick="deletePin('${pin.id}')">\uD83D\uDDD1\uFE0F Apagar</button>
  `;
  document.getElementById('sheet').classList.add('on');
  document.getElementById('backdrop').classList.add('on');
}

function editPin(id) {
  const pin = pins.find(p => p.id === id);
  if (!pin) return;
  closeAll();
  setTimeout(() => {
    document.getElementById('pf-name').value = pin.name;
    document.getElementById('pf-year').value = pin.year || '';
    document.getElementById('pf-emoji').value = pin.emoji || '';
    document.getElementById('pf-note').value = pin.note || '';
    document.getElementById('pf-lat').value = pin.lat || '';
    document.getElementById('pf-lng').value = pin.lng || '';
    document.getElementById('pf-edit-id').value = pin.id;
    setPinType(pin.type);
    document.getElementById('pin-form').classList.add('on');
    document.getElementById('backdrop').classList.add('on');
  }, 120);
}

async function deletePin(id) {
  pins = pins.filter(p => p.id !== id);
  await savePins();
  closeAll();
  renderMapPins();
  renderPinsList();
  renderSoonList();
  renderWishList();
  renderWishChips();
  updateMapColors();
  updateStats();
  showNotif('Pin removido');
}

// ─── PINS LIST RENDER ─────────────────────────────────────────────────────────
// Countries to display specially in pins tab
const VISITED_PINS_LIST = [
  // Portugal — sempre em primeiro
  { name:'Portugal \uD83C\uDDF5\uD83C\uDDF9', year:'', note:'Casa \u2014 o pa\u00EDs mais bonito do mundo', code:'pt' },
  // Restantes por ordem alfabética
  { name:'Alemanha \uD83C\uDDE9\uD83C\uDDEA', year:'2019', note:'Berlim \u2014 cidade que reinventou a sua hist\u00F3ria. Arte de rua, o Muro, Checkpoint Charlie e uma vida nocturna inigual\u00E1vel', code:'de' },
  { name:'\u00C1ustria \uD83C\uDDE6\uD83C\uDDF9', year:'2021', note:'Viena \u2014 elegância imperial, caf\u00E9 da tarde no Sch\u00F6nbrunn, a \u00D3pera e Mozart em cada esquina', code:'at' },
  { name:'B\u00E9lgica \uD83C\uDDE7\uD83C\uDDEA', year:'2017', note:'Bruxelas \u2014 a Grand-Place deslumbrante, capital da Europa, waffles quentes na rua e a melhor cerveja trapista do mundo', code:'be' },
  { name:'Cabo Verde \uD83C\uDDE8\uD83C\uDDFB', year:'2024', note:'Ilhas atl\u00E2nticas de l\u00EDngua portuguesa', code:'cv' },
  { name:'Canad\u00E1 \uD83C\uDDE8\uD83C\uDDE6', year:'2023', note:'Toronto \u2014 metr\u00F3pole multicultural \u00E0s margens do Lago Ontario e Cataratas do Ni\u00E1gara', code:'ca' },
  { name:'Dinamarca \uD83C\uDDE9\uD83C\uDDF0', year:'2022', note:'Copenhaga \u2014 design n\u00F3rdico e bicicletas', code:'dk' },
  { name:'Emirados \u00C1rabes Unidos \uD83C\uDDE6\uD83C\uDDEA', year:'2024', note:'Abu Dhabi \u2014 a mesquita Sheikh Zayed em m\u00E1rmore branco e o contraste entre tradi\u00E7\u00E3o bedu\u00EDna e modernidade futurista', code:'ae' },
  { name:'Esc\u00F3cia \uD83C\uDDEC\uD83C\uDDE7', year:'2024', note:'Glasgow e Edimburgo \u2014 o Castelo iluminado na rocha, a Royal Mile e o whisky a aquecer a noite escocesa', code:'gb-sct' },
  { name:'Espanha \uD83C\uDDEA\uD83C\uDDF8', year:'2023/25', note:'Vizinho sempre presente \u2014 sol, tapas e cultura', code:'es' },
  { name:'Estados Unidos da Am\u00E9rica \uD83C\uDDFA\uD83C\uDDF8', year:'2023', note:'Nova Iorque \u2014 Est\u00E1tua da Liberdade, Empire State Building, Central Park ao amanhecer, Times Square com a sua energia inigual\u00E1vel e museus de classe mundial numa cidade que \u00E9 literalmente um universo pr\u00F3prio', code:'us' },
  { name:'Eti\u00F3pia \uD83C\uDDEA\uD83C\uDDF9', year:'2025', note:'\u00C1frica oriental \u2014 cultura milenar e caf\u00E9', code:'et' },
  { name:'Finl\u00E2ndia \uD83C\uDDEB\uD83C\uDDEE', year:'2021', note:'Hels\u00EDnquia \u2014 design n\u00F3rdico \u00E0 beira do B\u00E1ltico. Lap\u00F3nia \u2014 terra do Pai Natal, ca\u00E7a \u00E0 aurora boreal e renas na neve', code:'fi' },
  { name:'Fran\u00E7a \uD83C\uDDEB\uD83C\uDDF7', year:'2015/26', note:'Paris \u2014 Torre Eiffel ao anoitecer e a magia da Disneyland (2015). C\u00F4te d\'Azur \u2014 Marselha e Nice na Riviera Francesa (2026)', code:'fr' },
  { name:'Gr\u00E9cia \uD83C\uDDEC\uD83C\uDDF7', year:'2019', note:'Atenas \u2014 Acr\u00F3pole e Partenon ao p\u00F4r-do-sol, hist\u00F3ria antiga \u00E0s camadas e gastronomia incr\u00EDvel no Monastiraki', code:'gr' },
  { name:'Hungria \uD83C\uDDED\uD83C\uDDFA', year:'2021', note:'Budapeste \u2014 a p\u00E9rola do Dan\u00FAbio', code:'hu' },
  { name:'Inglaterra \uD83C\uDDEC\uD83C\uDDE7', year:'2014', note:'Londres \u2014 museus, teatros e fish & chips', code:'gb-eng' },
  { name:'Irlanda \uD83C\uDDEE\uD83C\uDDEA', year:'2025', note:'Dublin \u2014 o Temple Bar animado, o Trinity College e o Book of Kells, Guinness na sua origem e a energia contagiante de uma cidade sempre viva', code:'ie' },
  { name:'Irlanda do Norte \uD83C\uDDEC\uD83C\uDDE7', year:'2025', note:'Belfast \u2014 o Titanic Quarter e a hist\u00F3ria do navio mais famoso do mundo. Giant\'s Causeway \u2014 as colunas de basalto hexagonais no Atl\u00E2ntico, um lugar de outro mundo', code:'gb-nir' },
  { name:'Isl\u00E2ndia \uD83C\uDDEE\uD83C\uDDF8', year:'2018', note:'Vulc\u00F5es, cascatas e aurora boreal', code:'is' },
  { name:'It\u00E1lia \uD83C\uDDEE\uD83C\uDDF9', year:'2016/19', note:'Roma (2016) \u2014 Coliseu, arte e pizza. Veneza (2019) \u2014 g\u00F4ndolas, canais e a magia de uma cidade flutuante', code:'it' },
  { name:'Maldivas \uD83C\uDDF2\uD83C\uDDFB', year:'2024', note:'Para\u00EDso na Terra \u2014 Water Villas sobre a \u00E1gua turquesa, snorkel com tubar\u00F5es-baleia, p\u00F4res-do-sol cor de laranja e o sil\u00EAncio absoluto do \u00CDndico', code:'mv' },
  { name:'Marrocos \uD83C\uDDF2\uD83C\uDDE6', year:'2023', note:'Marraquexe \u2014 a medina labirintica e a Pra\u00E7a Jemaa el-Fna ao anoitecer. Deserto de Agafay \u2014 noite sob as estrelas no sil\u00EAncio do deserto', code:'ma' },
  { name:'M\u00F3naco \uD83C\uDDF2\uD83C\uDDE8', year:'2026', note:'O principado mais glamoroso \u2014 o circuito de F1 a p\u00E9, o Casino de Monte Carlo e iates no Porto H\u00E9rcules', code:'mc' },
  { name:'Noruega \uD83C\uDDF3\uD83C\uDDF4', year:'2018', note:'Fiordes majestosos e natureza \u00E9pica do norte', code:'no' },
  { name:'Pa\u00EDses Baixos \uD83C\uDDF3\uD83C\uDDF1', year:'2017', note:'Amesterd\u00E3o \u2014 canais ao p\u00F4r-do-sol, o Rijksmuseum, a Anne Frank House e bicicletas em todo o lado', code:'nl' },
  { name:'Pol\u00F3nia \uD83C\uDDF5\uD83C\uDDF1', year:'2023', note:'Vars\u00F3via \u2014 cidade reconstru\u00EDda das cinzas. Crac\u00F3via \u2014 a Pra\u00E7a do Mercado medieval e o Castelo de Wawel', code:'pl' },
  { name:'Qatar \uD83C\uDDF6\uD83C\uDDE6', year:'2024', note:'Doha \u2014 modernidade \u00E1rabe e surpreendente', code:'qa' },
  { name:'Rep. Checa \uD83C\uDDE8\uD83C\uDDFF', year:'2017', note:'Praga \u2014 a cidade das cem torres', code:'cz' },
  { name:'Su\u00E9cia \uD83C\uDDF8\uD83C\uDDEA', year:'2019', note:'Estocolmo e o charme escandinavo', code:'se' },
  { name:'Su\u00ED\u00E7a \uD83C\uDDE8\uD83C\uDDED', year:'2017', note:'Alpes, chocolate, rel\u00F3gios e precis\u00E3o su\u00ED\u00E7a', code:'ch' },
  { name:'Tail\u00E2ndia \uD83C\uDDF9\uD83C\uDDED', year:'2024', note:'Bangkok \u2014 templos dourados e caos delicioso. Phuket \u2014 parasailing na Patong Beach, a ic\u00F3nica Ilha de James Bond e Ilhas Phi Phi com a Maya Bay', code:'th' },
  { name:'Tanz\u00E2nia \uD83C\uDDF9\uD83C\uDDFF', year:'2025', note:'Zanzibar \u2014 Kendwa Beach com o p\u00F4r-do-sol mais belo do \u00CDndico, snorkel, nadar com golfinhos e mota de \u00E1gua nas \u00E1guas cristalinas', code:'tz' },
  { name:'Turquia \uD83C\uDDF9\uD83C\uDDF7', year:'2022', note:'Istambul \u2014 Hagia Sophia e o B\u00F3sforo entre dois mundos. Capad\u00F3cia \u2014 bal\u00F5es ao amanhecer sobre uma paisagem lunar', code:'tr' },
  { name:'Vaticano \uD83C\uDDFB\uD83C\uDDE6', year:'2016', note:'O menor estado soberano do mundo', code:'va' },
];

const SOON_PINS_LIST = [
  { name:'Kosovo \uD83C\uDDFD\uD83C\uDDF0', year:'Agosto 2026', note:'Pristina \u2014 um dos pa\u00EDses mais jovens do mundo, energ\u00E9tico e surpreendente', code:'xk' },
  { name:'Maced\u00F3nia do Norte \uD83C\uDDF2\uD83C\uDDF0', year:'Agosto 2026', note:'Esc\u00F3pia \u2014 a capital com o Lago Ohrid e patrim\u00F3nio medieval inesperado', code:'mk' },
  { name:'S\u00E9rvia \uD83C\uDDF7\uD83C\uDDF8', year:'Agosto 2026', note:'Belgrado \u2014 a cidade que n\u00E3o dorme, fortaleza de Kalemegdan, o Templo de S\u00E3o Sava e uma energia balc\u00E3 inconfund\u00EDvel', code:'rs' },
];

function renderSoonList() {
  const soonList = document.getElementById('pins-soon-list');
  if (!soonList) return;

  const pinItemHtml = p => `
    <div class="pin-item">
      <img src="https://flagcdn.com/w40/${p.code}.png"
           style="width:28px;height:19px;border-radius:3px;object-fit:cover;border:1px solid rgba(0,0,0,0.1);flex-shrink:0;"
           onerror="this.style.display='none'" alt="">
      <div class="pin-info">
        <div class="pin-name">${p.name}</div>
        <div class="pin-meta">${p.year ? p.year + ' \u00B7 ' : ''}${p.note}</div>
      </div>
      <div style="font-size:10px;color:#e0457b;font-weight:600;flex-shrink:0;">\uD83D\uDDD3\uFE0F</div>
    </div>`;

  // Países dinâmicos adicionados no mapa
  const dynamicItems = [...soonCountriesNumeric].map(id => {
    id = +id;
    const name = WORLD_NAMES[id] || `Pa\u00EDs ${id}`;
    const code = FLAG_CODES[id] || NUM_TO_CODE[id] || '';
    return pinItemHtml({ name, code, year: 'Em breve', note: '' });
  });

  soonList.innerHTML = SOON_PINS_LIST.map(pinItemHtml).join('') + dynamicItems.join('');
}

// ─── RENDER WISH LIST ────────────────────────────────────────────────────────
function renderWishList() {
  const wishList = document.getElementById('pins-wish-list');
  if (!wishList) return;
  const wishPins = pins.filter(p => p.type === 'pin-wish');

  if (wishCountriesNumeric.size === 0 && wishPins.length === 0) {
    wishList.innerHTML = `<div class="empty-state" style="padding:20px 0;">
      <span class="empty-icon">\u2B50</span>
      <div>Sem destinos na wishlist.<br><small style="color:#aaa">Toca em "Quero ir" no mapa ou usa o bot\u00E3o + Adicionar</small></div>
    </div>`;
    return;
  }

  const countryItems = [...wishCountriesNumeric].map(id => {
    id = +id; // garantir que é número
    const name = WORLD_NAMES[id] || getCountryName(id) || `Pa\u00EDs ${id}`;
    const code = FLAG_CODES[id] || NUM_TO_CODE[id] || '';
    const flagImg = code
      ? `<img src="https://flagcdn.com/w40/${code}.png" style="width:28px;height:19px;border-radius:3px;object-fit:cover;border:1px solid rgba(0,0,0,0.1);flex-shrink:0;">`
      : `<div class="pin-dot wish">\u2B50</div>`;
    return `<div class="pin-item">
      ${flagImg}
      <div class="pin-info">
        <div class="pin-name">${name}</div>
        <div class="pin-meta">\u2B50 Quero visitar</div>
      </div>
      <div class="pin-delete" onclick="removeWishCountry(${id})" title="Remover">\u2715</div>
    </div>`;
  });

  const pinItems = wishPins.map(p => `
    <div class="pin-item">
      <div class="pin-dot wish">${p.emoji || '\u2B50'}</div>
      <div class="pin-info">
        <div class="pin-name">${p.name}</div>
        <div class="pin-meta">${p.note || 'Quero visitar!'}</div>
      </div>
      <div class="pin-delete" onclick="deletePin('${p.id}')" title="Remover">\u2715</div>
    </div>
  `);

  wishList.innerHTML = [...countryItems, ...pinItems].join('');
}

function renderPinsList() {
  const userVisited = pins.filter(p => p.type === 'pin-visited');
  const visList = document.getElementById('pins-visited-list');
  if (!visList) return;

  const countryPinsHTML = VISITED_PINS_LIST.map(p => `
    <div class="pin-item">
      <img src="https://flagcdn.com/w40/${p.code}.png" 
           style="width:28px;height:19px;border-radius:3px;object-fit:cover;border:1px solid rgba(0,0,0,0.1);flex-shrink:0;" 
           onerror="this.style.display='none'" alt="">
      <div class="pin-info">
        <div class="pin-name">${p.name}</div>
        <div class="pin-meta">${p.year ? p.year + ' \u00B7 ' : ''}${p.note}</div>
      </div>
      <div style="font-size:10px;color:var(--gold);font-weight:600;flex-shrink:0;">\u2713</div>
    </div>
  `).join('');

  const userPinsHTML = userVisited.length > 0 ? `
    <div class="cont-lbl" style="margin-top:14px;margin-bottom:8px;">\uD83D\uDCCD Pins personalizados</div>
    ${userVisited.map(p => {
      const code = (p.emoji && p.emoji.length <= 3) ? p.emoji : (FLAG_CODES[+p.countryId] || NUM_TO_CODE[+p.countryId] || '');
      const flagEl = code
        ? `<img src="https://flagcdn.com/w40/${code}.png" style="width:28px;height:19px;border-radius:3px;object-fit:cover;border:1px solid rgba(0,0,0,0.1);flex-shrink:0;" onerror="this.style.display='none'" alt="">`
        : `<div class="pin-dot vis">\uD83D\uDCCD</div>`;
      return `
      <div class="pin-item">
        ${flagEl}
        <div class="pin-info">
          <div class="pin-name">${p.name}</div>
          <div class="pin-meta">${[p.continent, p.year].filter(Boolean).join(' \u00B7 ') || 'Sem nota'}</div>
        </div>
        <div class="pin-delete" onclick="deletePin('${p.id}')">\u2715</div>
      </div>`;
    }).join('')}
  ` : '';

  visList.innerHTML = countryPinsHTML + userPinsHTML;

  // Also update the chips in the list tab and the flag strip
  renderUserChips();
}

// ─── RENDER USER PINS INTO LIST TAB CHIPS + FLAG STRIP ───────────────────────
// Baseline counts per continent group (from the hardcoded VISITED data)
const BASE_CONT_COUNTS = {
  'Europa': 25, '\u00C1frica': 4, 'Am\u00E9rica': 2,
  '\u00C1sia': 4, 'Oceania': 0,
};
// Maps continent value → chip container id + label id
const CONT_TO_IDS = {
  'Europa':               { chips: 'chips-europa',   lbl: 'lbl-europa'   },
  '\u00C1frica':               { chips: 'chips-africa',   lbl: 'lbl-africa'   },
  'Am\u00E9rica do Norte':     { chips: 'chips-americas', lbl: 'lbl-americas' },
  'Am\u00E9rica do Sul':       { chips: 'chips-americas', lbl: 'lbl-americas' },
  '\u00C1sia':                 { chips: 'chips-asia',     lbl: 'lbl-asia'     },
  'M\u00E9dio Oriente':        { chips: 'chips-asia',     lbl: 'lbl-asia'     },
  'Oce\u00E2nia':              { chips: 'oceania-chips',  lbl: 'lbl-oceania'  },
};

function renderUserChips() {
  const userVisited = pins.filter(p => p.type === 'pin-visited');

  // Remove previously injected user chips from all continent containers
  document.querySelectorAll('.chip.user-pin-chip').forEach(el => el.remove());
  // Remove the placeholder if there are user Oceania pins
  document.querySelectorAll('.chip.user-placeholder').forEach(el => {
    const hasOceania = userVisited.some(p => p.continent === 'Oce\u00E2nia');
    if (hasOceania) el.remove();
  });

  // Track how many user chips per display group
  const userCountPerGroup = {};

  userVisited.forEach(p => {
    const ids = CONT_TO_IDS[p.continent];
    if (!ids) return; // no continent set — skip

    const container = document.getElementById(ids.chips);
    if (!container) return;

    // Avoid duplicate: if a chip with same name already exists (e.g. user added same country twice), skip
    const existing = [...container.querySelectorAll('.chip.user-pin-chip')];
    if (existing.some(el => el.dataset.name === p.name)) return;

    const code = (p.emoji && p.emoji.length <= 3) ? p.emoji
      : (FLAG_CODES[+p.countryId] || NUM_TO_CODE[+p.countryId] || '');
    const flagImg = code
      ? `<img src="https://flagcdn.com/w20/${code}.png" style="width:16px;height:11px;border-radius:2px;object-fit:cover;margin-right:3px;vertical-align:middle;" onerror="this.style.display='none'">`
      : '';
    const chip = document.createElement('div');
    chip.className = 'chip user-pin-chip';
    chip.dataset.name = p.name;
    chip.style.borderColor = 'rgba(201,149,26,0.4)';
    chip.style.background = 'var(--gold-pale)';
    chip.innerHTML = `${flagImg}${p.name} <span class="cy">${p.year || '\u2014'}</span>`;
    container.appendChild(chip);

    userCountPerGroup[ids.chips] = (userCountPerGroup[ids.chips] || 0) + 1;
  });

  // Update continent label counts
  const groupCounts = {
    'chips-europa':   { lbl: 'lbl-europa',   base: 25, label: 'Europa' },
    'chips-africa':   { lbl: 'lbl-africa',   base: 4,  label: '\u00C1frica' },
    'chips-americas': { lbl: 'lbl-americas', base: 2,  label: 'Am\u00E9rica' },
    'chips-asia':     { lbl: 'lbl-asia',     base: 4,  label: '\u00C1sia' },
    'oceania-chips':  { lbl: 'lbl-oceania',  base: 0,  label: 'Oceania' },
  };
  Object.entries(groupCounts).forEach(([chipsId, { lbl, base, label }]) => {
    const extra = userCountPerGroup[chipsId] || 0;
    const total = base + extra;
    const lblEl = document.getElementById(lbl);
    if (lblEl) {
      const suffix = total === 1 ? 'pa\u00EDs' : 'pa\u00EDses';
      lblEl.textContent = `${label} \u00B7 ${total} ${suffix}`;
    }
  });

  // Also refresh the flag strip with any new user-added countries
  renderFlagStrip();
}

// ─── WISH CHIPS IN LIST TAB ───────────────────────────────────────────────────
function renderWishChips() {
  const section = document.getElementById('wish-countries-section');
  const container = document.getElementById('wish-chips');
  if (!section || !container) return;
  const wishPins = pins.filter(p => p.type === 'pin-wish');

  if (wishCountriesNumeric.size === 0 && wishPins.length === 0) {
    section.style.display = 'none'; return;
  }
  section.style.display = 'block';
  const countryNames = [...wishCountriesNumeric].map(id => {
    id = +id; // garantir número
    const n = WORLD_NAMES[id] || getCountryName(id);
    const code = FLAG_CODES[id] || NUM_TO_CODE[id] || '';
    const flagHtml = code
      ? `<img src="https://flagcdn.com/w40/${code}.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;border:1px solid rgba(0,0,0,0.1);flex-shrink:0;vertical-align:middle;margin-right:5px;" onerror="this.style.display='none'">`
      : '';
    return n ? `<div class="chip wish-chip" style="display:flex;align-items:center;gap:4px;">${flagHtml}${n}</div>` : '';
  }).filter(Boolean);

  const pinChips = wishPins.map(p =>
    `<div class="chip wish-chip">${p.emoji || '\u2B50'} ${p.name}</div>`
  );
  container.innerHTML = [...countryNames, ...pinChips].join('');
}

// ─── COUNTRY PHOTOS (base64 embedded) ─────────────────────────────────────

// ─── COUNTRY PHOTO GALLERIES — múltiplas fotos por país ──────────────────────
const COUNTRY_GALLERY = {
  826: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ,
'',
'',
'',
''],
};


const COUNTRY_PHOTOS = {
  634: '',
  764: '',
};

// ─── COUNTRY FLAG CODES (ISO 3166-1 alpha-2 for flagcdn.com) ─────────────────
const FLAG_CODES = {
  276:'de', 40:'at', 56:'be', 124:'ca', 132:'cv', 208:'dk', 724:'es',
  826:'gb', 840:'us', 784:'ae', 231:'et', 250:'fr', 246:'fi', 300:'gr',
  348:'hu', 380:'it', 372:'ie', 352:'is', 504:'ma', 462:'mv', 492:'mc',
  578:'no', 620:'pt', 528:'nl', 616:'pl', 634:'qa', 203:'cz', 756:'ch',
  752:'se', 764:'th', 792:'tr', 834:'tz', 336:'va',
  643:'ru', 156:'cn', 410:'kr', 702:'sg', 554:'nz', 36:'au', 710:'za', 818:'eg',
  484:'mx', 604:'pe', 32:'ar', 152:'cl', 170:'co', 566:'ng', 404:'ke', 586:'pk',
  104:'mm', 116:'kh', 704:'vn', 458:'my', 360:'id', 608:'ph', 50:'bd', 144:'lk',
  364:'ir', 682:'sa', 840:'us', 356:'in',
  688:'rs', 807:'mk', 383:'xk',
};

// Scotland / England / N.Ireland use GB flag
const SUB_FLAGS = { 'Scotland':'gb-sct', 'England':'gb-eng', 'Northern Ireland':'gb' };

function flagUrl(code) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
}

// ─── SEARCH DATA ─────────────────────────────────────────────────────────────
const SEARCH_DATA = [
  // Visited countries — numeric ID for zoom
  {name:'Portugal \uD83C\uDDF5\uD83C\uDDF9', year:'sempre', id:620, type:'visited', code:'pt'},
  {name:'Alemanha \uD83C\uDDE9\uD83C\uDDEA', year:'2019', id:276, type:'visited', code:'de'},
  {name:'\u00C1ustria \uD83C\uDDE6\uD83C\uDDF9', year:'2021', id:40, type:'visited', code:'at'},
  {name:'B\u00E9lgica \uD83C\uDDE7\uD83C\uDDEA', year:'2017', id:56, type:'visited', code:'be'},
  {name:'Canad\u00E1 \uD83C\uDDE8\uD83C\uDDE6', year:'2023', id:124, type:'visited', code:'ca'},
  {name:'Cabo Verde \uD83C\uDDE8\uD83C\uDDFB', year:'2024', id:132, type:'visited', code:'cv'},
  {name:'Dinamarca \uD83C\uDDE9\uD83C\uDDF0', year:'2022', id:208, type:'visited', code:'dk'},
  {name:'Espanha \uD83C\uDDEA\uD83C\uDDF8', year:'2023/25', id:724, type:'visited', code:'es'},
  {name:'Esc\u00F3cia \uD83C\uDDEC\uD83C\uDDE7', year:'2024', id:826, type:'visited', code:'gb-sct'},
  {name:'Inglaterra \uD83C\uDDEC\uD83C\uDDE7', year:'2014', id:826, type:'visited', code:'gb-eng'},
  {name:'Irlanda do Norte \uD83C\uDDEC\uD83C\uDDE7', year:'2025', id:826, type:'visited', code:'gb-nir'},
  {name:'EUA \uD83C\uDDFA\uD83C\uDDF8', year:'2023', id:840, type:'visited', code:'us'},
  {name:'Emirados \u00C1rabes \uD83C\uDDE6\uD83C\uDDEA', year:'2024', id:784, type:'visited', code:'ae'},
  {name:'Eti\u00F3pia \uD83C\uDDEA\uD83C\uDDF9', year:'2025', id:231, type:'visited', code:'et'},
  {name:'Fran\u00E7a \uD83C\uDDEB\uD83C\uDDF7', year:'2015/26', id:250, type:'visited', code:'fr'},
  {name:'Finl\u00E2ndia \uD83C\uDDEB\uD83C\uDDEE', year:'2021', id:246, type:'visited', code:'fi'},
  {name:'Gr\u00E9cia \uD83C\uDDEC\uD83C\uDDF7', year:'2019', id:300, type:'visited', code:'gr'},
  {name:'Hungria \uD83C\uDDED\uD83C\uDDFA', year:'2021', id:348, type:'visited', code:'hu'},
  {name:'It\u00E1lia \uD83C\uDDEE\uD83C\uDDF9', year:'2016/19', id:380, type:'visited', code:'it'},
  {name:'Irlanda \uD83C\uDDEE\uD83C\uDDEA', year:'2025', id:372, type:'visited', code:'ie'},
  {name:'Isl\u00E2ndia \uD83C\uDDEE\uD83C\uDDF8', year:'2018', id:352, type:'visited', code:'is'},
  {name:'Marrocos \uD83C\uDDF2\uD83C\uDDE6', year:'2023', id:504, type:'visited', code:'ma'},
  {name:'Maldivas \uD83C\uDDF2\uD83C\uDDFB', year:'2024', id:462, type:'visited', code:'mv'},
  {name:'M\u00F3naco \uD83C\uDDF2\uD83C\uDDE8', year:'2026', id:492, type:'visited', code:'mc'},
  {name:'Noruega \uD83C\uDDF3\uD83C\uDDF4', year:'2018', id:578, type:'visited', code:'no'},
  {name:'Pa\u00EDses Baixos \uD83C\uDDF3\uD83C\uDDF1', year:'2017', id:528, type:'visited', code:'nl'},
  {name:'Pol\u00F3nia \uD83C\uDDF5\uD83C\uDDF1', year:'2023', id:616, type:'visited', code:'pl'},
  {name:'Qatar \uD83C\uDDF6\uD83C\uDDE6', year:'2024', id:634, type:'visited', code:'qa'},
  {name:'Rep. Checa \uD83C\uDDE8\uD83C\uDDFF', year:'2017', id:203, type:'visited', code:'cz'},
  {name:'Su\u00ED\u00E7a \uD83C\uDDE8\uD83C\uDDED', year:'2017', id:756, type:'visited', code:'ch'},
  {name:'Su\u00E9cia \uD83C\uDDF8\uD83C\uDDEA', year:'2019', id:752, type:'visited', code:'se'},
  {name:'Tail\u00E2ndia \uD83C\uDDF9\uD83C\uDDED', year:'2024', id:764, type:'visited', code:'th'},
  {name:'Turquia \uD83C\uDDF9\uD83C\uDDF7', year:'2022', id:792, type:'visited', code:'tr'},
  {name:'Tanz\u00E2nia \uD83C\uDDF9\uD83C\uDDFF', year:'2025', id:834, type:'visited', code:'tz'},
  {name:'Vaticano \uD83C\uDDFB\uD83C\uDDE6', year:'2016', id:336, type:'visited', code:'va'},
  {name:'S\u00E9rvia \uD83C\uDDF7\uD83C\uDDF8', year:'2026', id:688, type:'visited', code:'rs'},
  {name:'Maced\u00F3nia do Norte \uD83C\uDDF2\uD83C\uDDF0', year:'2026', id:807, type:'visited', code:'mk'},
  {name:'Kosovo \uD83C\uDDFD\uD83C\uDDF0', year:'2026', id:383, type:'visited', code:'xk'},
  {name:'Belgrado', year:'S\u00E9rvia \u00B7 2026', id:688, lat:44.82, lng:20.46, type:'city', code:'rs'},
  {name:'Esc\u00F3pia', year:'Maced\u00F3nia do Norte \u00B7 2026', id:807, lat:42.00, lng:21.43, type:'city', code:'mk'},
  {name:'Pristina', year:'Kosovo \u00B7 2026', id:383, lat:42.67, lng:21.17, type:'city', code:'xk'},
  // Cities
  {name:'Lisboa', year:'capital \u00B7 sempre', id:620, lat:38.72, lng:-9.14, type:'city', code:'pt'},
  {name:'Porto', year:'Portugal \u00B7 sempre', id:620, lat:41.15, lng:-8.61, type:'city', code:'pt'},
  {name:'Berlim', year:'Alemanha \u00B7 Ver\u00E3o 2019 Ver\u00E3o', id:276, lat:52.52, lng:13.4, type:'city', code:'de'},
  {name:'Viena', year:'\u00C1ustria \u00B7 2021 Ver\u00E3o', id:40, lat:48.21, lng:16.37, type:'city', code:'at'},
  {name:'Bruxelas', year:'B\u00E9lgica \u00B7 2017 Ver\u00E3o', id:56, lat:50.85, lng:4.35, type:'city', code:'be'},
  {name:'Toronto', year:'Canad\u00E1 \u00B7 Ver\u00E3o 2023 Ver\u00E3o', id:124, lat:43.65, lng:-79.38, type:'city', code:'ca'},
  {name:'Niagara Falls', year:'Canad\u00E1 \u00B7 2023 Ver\u00E3o', id:124, lat:43.09, lng:-79.07, type:'city', code:'ca'},
  {name:'Copenhaga', year:'Dinamarca \u00B7 2022 Natal', id:208, lat:55.68, lng:12.57, type:'city', code:'dk'},
  {name:'Madrid', year:'Espanha \u00B7 2025 Natal', id:724, lat:40.42, lng:-3.7, type:'city', code:'es'},
  {name:'Barcelona', year:'Espanha \u00B7 2023 P\u00E1scoa', id:724, lat:41.38, lng:2.18, type:'city', code:'es'},
  {name:'Loret del Mar', year:'Espanha \u00B7 2000 P\u00E1scoa', id:724, lat:41.69, lng:2.84, type:'city', code:'es'},
  {name:'Benidorm', year:'Espanha \u00B7 2007 P\u00E1scoa', id:724, lat:38.54, lng:-0.13, type:'city', code:'es'},
  {name:'Lobios', year:'Espanha \u00B7 Galiza \u00B7 2011 Ver\u00E3o', id:724, lat:41.85, lng:-8.07, type:'city', code:'es'},
  {name:'Edimburgo', year:'Esc\u00F3cia \u00B7 2024 Natal', id:826, lat:55.95, lng:-3.19, type:'city', code:'gb-sct'},
  {name:'Londres', year:'Inglaterra \u00B7 2014 P\u00E1scoa', id:826, lat:51.5, lng:-0.12, type:'city', code:'gb-eng'},
  {name:'Belfast', year:'Irlanda do Norte \u00B7 2025 P\u00E1scoa', id:826, lat:54.6, lng:-5.93, type:'city', code:'gb-nir'},
  {name:'Nova Iorque', year:'EUA \u00B7 2023 Ver\u00E3o', id:840, lat:40.71, lng:-74.0, type:'city', code:'us'},
  {name:'Abu Dhabi', year:'Emirados \u00C1rabes \u00B7 2024 Natal', id:784, lat:24.47, lng:54.37, type:'city', code:'ae'},
  {name:'Adis Abeba', year:'Eti\u00F3pia \u00B7 2025 Ver\u00E3o', id:231, lat:9.03, lng:38.74, type:'city', code:'et'},
  {name:'Paris', year:'Fran\u00E7a \u00B7 2015 Ver\u00E3o', id:250, lat:48.86, lng:2.35, type:'city', code:'fr'},
  {name:'Disneyland Paris', year:'Fran\u00E7a \u00B7 2015 Ver\u00E3o', id:250, lat:48.87, lng:2.78, type:'city', code:'fr'},
  {name:'Marselha', year:'Fran\u00E7a \u00B7 2026 P\u00E1scoa', id:250, lat:43.3, lng:5.37, type:'city', code:'fr'},
  {name:'Nice', year:'Fran\u00E7a \u00B7 2026 P\u00E1scoa', id:250, lat:43.71, lng:7.27, type:'city', code:'fr'},
  {name:'Hels\u00EDnquia', year:'Finl\u00E2ndia \u00B7 2018 Ver\u00E3o \u00B7 2021 Natal', id:246, lat:60.17, lng:24.94, type:'city', code:'fi'},
  {name:'Rovaniemi \uD83C\uDF85', year:'Finl\u00E2ndia \u00B7 Lap\u00F3nia \u00B7 2021 Natal', id:246, lat:66.50, lng:25.72, type:'city', code:'fi'},
  {name:'Lap\u00F3nia \uD83E\uDD8C', year:'Finl\u00E2ndia \u00B7 2021 Natal', id:246, lat:68.5, lng:26.0, type:'city', code:'fi'},
  {name:'Atenas', year:'Gr\u00E9cia \u00B7 Ver\u00E3o 2019 Ver\u00E3o', id:300, lat:37.98, lng:23.72, type:'city', code:'gr'},
  {name:'Budapeste', year:'Hungria \u00B7 2021 Ver\u00E3o', id:348, lat:47.5, lng:19.04, type:'city', code:'hu'},
  {name:'Roma', year:'It\u00E1lia \u00B7 Ver\u00E3o 2016 Ver\u00E3o', id:380, lat:41.9, lng:12.5, type:'city', code:'it'},
  {name:'Veneza', year:'It\u00E1lia \u00B7 Ver\u00E3o 2019 Ver\u00E3o', id:380, lat:45.44, lng:12.34, type:'city', code:'it'},
  {name:'Dublin', year:'Irlanda \u00B7 2025 P\u00E1scoa', id:372, lat:53.33, lng:-6.26, type:'city', code:'ie'},
  {name:'Peniche', year:'Portugal \u00B7 2025 Ver\u00E3o', id:620, lat:39.36, lng:-9.38, type:'city', code:'pt'},
  {name:'Reykjavik', year:'Isl\u00E2ndia \u00B7 2018 Ver\u00E3o', id:352, lat:64.13, lng:-21.9, type:'city', code:'is'},
  {name:'Marraquexe', year:'Marrocos \u00B7 2023 P\u00E1scoa', id:504, lat:31.63, lng:-7.99, type:'city', code:'ma'},
  {name:'Mal\u00E9', year:'Maldivas \u00B7 2024 Ver\u00E3o', id:462, lat:4.17, lng:73.51, type:'city', code:'mv'},
  {name:'Oslo', year:'Noruega \u00B7 2018 Natal', id:578, lat:59.91, lng:10.74, type:'city', code:'no'},
  {name:'Amesterd\u00E3o', year:'Pa\u00EDses Baixos \u00B7 2017 Ver\u00E3o', id:528, lat:52.37, lng:4.9, type:'city', code:'nl'},
  {name:'Crac\u00F3via', year:'Pol\u00F3nia \u00B7 2023 Natal', id:616, lat:50.06, lng:19.94, type:'city', code:'pl'},
  {name:'Vars\u00F3via', year:'Pol\u00F3nia \u00B7 2023 Natal', id:616, lat:52.23, lng:21.01, type:'city', code:'pl'},
  {name:'Doha', year:'Qatar \u00B7 2024 Ver\u00E3o', id:634, lat:25.29, lng:51.53, type:'city', code:'qa'},
  {name:'Praga', year:'Rep. Checa \u00B7 2017 Ver\u00E3o', id:203, lat:50.08, lng:14.42, type:'city', code:'cz'},
  {name:'Zurique', year:'Su\u00ED\u00E7a \u00B7 2017 Natal', id:756, lat:47.37, lng:8.55, type:'city', code:'ch'},
  {name:'Estocolmo', year:'Su\u00E9cia \u00B7 2019 Natal', id:752, lat:59.33, lng:18.07, type:'city', code:'se'},
  {name:'Malm\u00F6', year:'Su\u00E9cia \u00B7 2022 Natal', id:752, lat:55.6, lng:13.0, type:'city', code:'se'},
  {name:'Banguecoque', year:'Tail\u00E2ndia \u00B7 2024 Natal', id:764, lat:13.75, lng:100.52, type:'city', code:'th'},
  {name:'Phuket', year:'Tail\u00E2ndia \u00B7 2024 Natal', id:764, lat:7.88, lng:98.39, type:'city', code:'th'},
  {name:'Phi Phi', year:'Tail\u00E2ndia \u00B7 2024 Natal', id:764, lat:7.74, lng:98.77, type:'city', code:'th'},
  {name:'Istambul', year:'Turquia \u00B7 2022 Ver\u00E3o', id:792, lat:40.99, lng:29.05, type:'city', code:'tr'},
  {name:'Capad\u00F3cia', year:'Turquia \u00B7 2022 Ver\u00E3o', id:792, lat:38.66, lng:34.83, type:'city', code:'tr'},
  {name:'Zanzibar', year:'Tanz\u00E2nia \u00B7 2025 Ver\u00E3o', id:834, lat:-6.16, lng:39.2, type:'city', code:'tz'},
  {name:'Funchal', year:'Madeira \u00B7 2023', id:620, lat:32.65, lng:-16.91, type:'city', code:'pt'},
  {name:'Ponta Delgada', year:'S\u00E3o Miguel \u00B7 A\u00E7ores', id:620, lat:37.74, lng:-25.67, type:'city', code:'pt'},
  {name:'S\u00E3o Miguel', year:'A\u00E7ores \u00B7 2013 \u00B7 2014 \u00B7 2015 \u00B7 2024', id:620, lat:37.77, lng:-25.5, type:'city', code:'pt'},
  {name:'Terceira', year:'A\u00E7ores \u00B7 2007 Ver\u00E3o', id:620, lat:38.65, lng:-27.22, type:'city', code:'pt'},
  {name:'Faial', year:'A\u00E7ores \u00B7 2023', id:620, lat:38.53, lng:-28.7, type:'city', code:'pt'},
  {name:'Pico', year:'A\u00E7ores \u00B7 2017', id:620, lat:38.47, lng:-28.33, type:'city', code:'pt'},
  {name:'Flores', year:'A\u00E7ores \u00B7 2017', id:620, lat:39.45, lng:-31.11, type:'city', code:'pt'},
  {name:'Graciosa', year:'A\u00E7ores \u00B7 2019', id:620, lat:39.05, lng:-28.01, type:'city', code:'pt'},
  {name:'Santa Maria', year:'A\u00E7ores \u00B7 2018', id:620, lat:36.97, lng:-25.17, type:'city', code:'pt'},
  {name:'Corvo', year:'A\u00E7ores \u00B7 2023 Carnaval', id:620, lat:39.67, lng:-31.13, type:'city', code:'pt'},
  {name:'S\u00E3o Jorge', year:'A\u00E7ores \u00B7 2014', id:620, lat:38.65, lng:-28.07, type:'city', code:'pt'},
  {name:'Santiago (Cabo Verde)', year:'Cabo Verde \u00B7 2024 P\u00E1scoa', id:132, lat:14.93, lng:-23.51, type:'city', code:'cv'},
];

// ─── ZOOM CONTROLS ───────────────────────────────────────────────────────────
function _zoomCentre(factor) {
  if (!window._mapZoom) return;
  const svgEl = document.querySelector('#map-wrap svg');
  const W = (svgEl.clientWidth  || 360) / 2;
  const H = (svgEl.clientHeight || 200) / 2;
  if (window._zoomAtPoint) window._zoomAtPoint(W, H, factor);
}
function mapZoomIn()  { _zoomCentre(2.2); }
function mapZoomOut() { _zoomCentre(1 / 2.2); }
function mapZoomReset() {
  if (!window._mapZoom) return;
  d3.select('#map-wrap svg').transition().duration(380).ease(d3.easeCubicInOut)
    .call(window._mapZoom.transform, d3.zoomIdentity);
}
function mapZoomSlider(val) {
  if (!window._mapZoom) return;
  const svgEl = document.querySelector('#map-wrap svg');
  const cur = d3.zoomTransform(svgEl);
  const newK = Math.pow(2, parseFloat(val));
  const W = (svgEl.clientWidth  || 360) / 2;
  const H = (svgEl.clientHeight || 200) / 2;
  const tx = W - newK * (W - cur.x) / cur.k;
  const ty = H - newK * (H - cur.y) / cur.k;
  d3.select(svgEl).call(window._mapZoom.transform, d3.zoomIdentity.translate(tx, ty).scale(newK));
}

// Long-press on zoom buttons for continuous zoom
(function() {
  let _interval = null;
  function _start(factor) {
    _zoomCentre(factor);
    _interval = setInterval(() => _zoomCentre(factor), 160);
  }
  function _stop() { clearInterval(_interval); _interval = null; }
  function _attach(id, factor) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('mousedown',  () => _start(factor));
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); _start(factor); }, { passive: false });
    ['mouseup','mouseleave','touchend','touchcancel'].forEach(ev => btn.addEventListener(ev, _stop));
    // Prevent single-click firing twice (already handled by mousedown)
    btn.onclick = e => e.preventDefault();
  }
  document.addEventListener('DOMContentLoaded', () => {
    _attach('zbtn-in',  2.2);
    _attach('zbtn-out', 1 / 2.2);
  });
})();

// ─── ZOOM TO COUNTRY ─────────────────────────────────────────────────────────
function zoomToCountry(numericId, lat, lng) {
  if (!svgRef || !projRef || !gRef || !window._mapZoom) return;
  numericId = +numericId; // garantir número para lookups em objetos

  const svgEl = document.querySelector('#map-wrap svg');
  if (!svgEl) return;
  const rect = svgEl.getBoundingClientRect();
  const W = rect.width  || 360;
  const H = rect.height || 220;

  // Determine target point
  let targetPos;
  if (lat != null && lng != null) {
    targetPos = projRef([lng, lat]);
  } else if (COUNTRY_LABEL_POS[numericId]) {
    targetPos = projRef(COUNTRY_LABEL_POS[numericId]);
  } else if (WORLD_CAP_POS[numericId]) {
    targetPos = projRef(WORLD_CAP_POS[numericId]);
  }
  if (!targetPos || isNaN(targetPos[0])) return;

  // Pick zoom scale based on country/city size
  const LARGE_SCALE  = new Set([124,840,643,036,076,356,156]); // Canada, USA, Russia, Australia, Brazil, India, China
  const MEDIUM_SCALE = new Set([276,724,250,380,752,578,246,616,504,764,792,834,231,372,352]); // Germany, Spain, France etc.
  const MICRO_SCALE  = new Set([492,336,462,634]);              // Monaco, Vatican, Maldives, Qatar

  let scale;
  if (lat != null && lng != null) {
    // City/specific point — zoom in closely
    scale = 9;
  } else if (LARGE_SCALE.has(numericId)) {
    scale = 2.5;
  } else if (MICRO_SCALE.has(numericId)) {
    scale = 12;
  } else if (MEDIUM_SCALE.has(numericId)) {
    scale = 4;
  } else {
    scale = 5;
  }

  // Clamp to zoom extent [1, 30]
  scale = Math.min(30, Math.max(1, scale));

  // Calculate translate so targetPos lands exactly in the center of the viewport
  const tx = W / 2 - scale * targetPos[0];
  const ty = H / 2 - scale * targetPos[1];

  d3.select('#map-wrap svg')
    .transition().duration(750).ease(d3.easeCubicInOut)
    .call(window._mapZoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
}

// ─── SEARCH UI ───────────────────────────────────────────────────────────────
function initSearch() {
  const input = document.getElementById('map-search');
  const results = document.getElementById('search-results');
  const clearBtn = document.getElementById('search-clear');

  // Build comprehensive search index: visited + all countries + all capitals
  const visitedIds = new Set(SEARCH_DATA.map(d => d.id));
  const extraCountries = Object.entries(WORLD_NAMES)
    .filter(([id]) => !visitedIds.has(+id))
    .map(([id, name]) => ({
      name, year: '\u2014', id: +id, type: 'country',
      code: NUM_TO_CODE[+id] || 'un',
      lat: WORLD_CAP_POS[+id] ? WORLD_CAP_POS[+id][1] : null,
      lng: WORLD_CAP_POS[+id] ? WORLD_CAP_POS[+id][0] : null,
    }));
  const extraCaps = WORLD_CAPITALS
    .filter(([id]) => !SEARCH_DATA.some(d => d.type === 'city' && d.id === id))
    .map(([id, name, lat, lng]) => ({
      name, year: WORLD_NAMES[id] || '\u2014', id, type: 'city',
      code: NUM_TO_CODE[id] || 'un', lat, lng,
    }));
  const ALL_SEARCH = [...SEARCH_DATA, ...extraCountries, ...extraCaps];

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,''); // strip accents for comparison
    clearBtn.style.display = q ? 'block' : 'none';
    if (!q || q.length < 2) { results.classList.remove('open'); return; }

    // Aliases: common alternative spellings → canonical name
    const ALIASES = {
      'egipto':'egipto','egito':'egipto','egypt':'egipto',
      'eua':'eua','usa':'eua','estados unidos':'eua','america':'eua',
      'uk':'reino unido','inglaterra':'reino unido','gr\u00E3-bretanha':'reino unido',
      'escocia':'esc\u00F3cia','escocoa':'esc\u00F3cia',
      'mocambique':'mo\u00E7ambique','mozambique':'mo\u00E7ambique',
      'tailandia':'tail\u00E2ndia','thailand':'tail\u00E2ndia',
      'malasia':'mal\u00E1sia','malaysia':'mal\u00E1sia',
      'hungria':'hungria','budapest':'budapeste',
      'alemanha':'alemanha','germany':'alemanha',
      'franca':'fran\u00E7a','france':'fran\u00E7a',
      'espana':'espanha','spain':'espanha',
      'italia':'it\u00E1lia','italy':'it\u00E1lia',
      'belgica':'b\u00E9lgica','belgium':'b\u00E9lgica',
      'suecia':'su\u00E9cia','sweden':'su\u00E9cia',
      'suica':'su\u00ED\u00E7a','switzerland':'su\u00ED\u00E7a',
      'turquia':'turquia','turkey':'turquia',
      'grecia':'gr\u00E9cia','greece':'gr\u00E9cia',
      'polonia':'pol\u00F3nia','poland':'pol\u00F3nia',
      'romenia':'rom\u00E9nia','romania':'rom\u00E9nia',
      'croacia':'cro\u00E1cia','croatia':'cro\u00E1cia',
      'servia':'s\u00E9rvia','serbia':'s\u00E9rvia',
      'eslovenia':'eslov\u00E9nia','slovakia':'eslov\u00E1quia',
      'noruega':'noruega','norway':'noruega',
      'dinamarca':'dinamarca','denmark':'dinamarca',
      'finlandia':'finl\u00E2ndia','finland':'finl\u00E2ndia',
      'islandia':'isl\u00E2ndia','iceland':'isl\u00E2ndia',
      'marrocos':'marrocos','morocco':'marrocos','marraquexe':'marraquexe',
      'canada':'canad\u00E1','toronto':'toronto',
      'russia':'r\u00FAssia','russia':'r\u00FAssia',
      'austria':'\u00E1ustria','vienna':'viena','wien':'viena',
      'emirados':'emirados \u00E1rabes','abu dhabi':'abu dhabi','dubai':'abu dhabi',
      'cabo verde':'cabo verde','cape verde':'cabo verde',
      'tanzania':'tanz\u00E2nia','zanzibar':'zanzibar',
      'tailandia':'tail\u00E2ndia','bangkok':'banguecoque','phuket':'phuket',
      'maldivas':'maldivas','maldives':'maldivas',
    };

    const normalizedQ = q.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const aliasMatch = Object.entries(ALIASES).find(([k]) => k.startsWith(normalizedQ) || normalizedQ.startsWith(k));

    const matches = ALL_SEARCH.filter(d => {
      const name = d.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      const yr = (d.year || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      return name.includes(normalizedQ) || yr.includes(normalizedQ) ||
             (aliasMatch && name.includes(aliasMatch[1].normalize('NFD').replace(/[\u0300-\u036f]/g,'')));
    }).slice(0, 10);

    if (matches.length === 0) { results.classList.remove('open'); return; }

    results.innerHTML = matches.map(m => `
      <div class="search-result-item" onclick="selectSearchResult(${JSON.stringify(m).replace(/"/g,'&quot;')})">
        <img class="sri-flag" src="https://flagcdn.com/w40/${m.code.toLowerCase()}.png" onerror="this.style.display='none'" alt="">
        <div class="sri-name">${m.name}</div>
        <div class="sri-year">${m.year}</div>
        <div class="sri-badge ${m.type === 'city' ? (VISITED[m.id] ? 'visited' : 'explore') : m.type === 'visited' ? 'visited' : m.type === 'wishlist' ? 'wishlist' : 'explore'}">
          ${m.type === 'city' ? '\uD83D\uDCCD' : m.type === 'visited' ? '\u2713 visitado' : m.type === 'wishlist' ? '\u2B50 wishlist' : '\uD83C\uDF0D explorar'}
        </div>
      </div>
    `).join('');
    results.classList.add('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) results.classList.remove('open');
  });
}

function selectSearchResult(item) {
  const input = document.getElementById('map-search');
  const results = document.getElementById('search-results');
  input.value = (WORLD_NAMES[+item.id] || item.name)
    .replace(/[\uD83C][\uDDE0-\uDDFF]/g, '')
    .replace(/[\uD83C][\uDFF4]/g, '')
    .replace(/[\uFE0F]/g, '')
    .trim();
  results.classList.remove('open');

  switchTab('map');
  zoomToCountry(item.id, item.lat || null, item.lng || null);

  // Highlight the country with a pulse effect
  const paths = d3.selectAll('.cpath').filter(d => +d.id === item.id);
  if (!paths.empty()) {
    const originalClass = paths.attr('class');
    paths.classed('search-highlight', true);
    // Remove highlight after 2.5s
    setTimeout(() => paths.classed('search-highlight', false), 2500);
  }

  setTimeout(() => {
    if (item.type !== 'city') {
      const info = VISITED[item.id];
      if (info) {
        if (item.id === 826) openUKSheet();
        else openSheet(info, item.id);
      }
    }
  }, 800);
}

function clearSearch() {
  document.getElementById('map-search').value = '';
  document.getElementById('search-clear').style.display = 'none';
  document.getElementById('search-results').classList.remove('open');
}

// ─── FLAG STRIP RENDERER ─────────────────────────────────────────────────────
function renderFlagStrip() {
  const strip = document.getElementById('flag-strip-row');
  if (!strip) return;

  // 1. Base visited countries (exclude UK catch-all)
  const baseEntries = SEARCH_DATA
    .filter(d => d.type === 'visited' && !['Esc\u00F3cia \uD83C\uDDEC\uD83C\uDDE7','Inglaterra \uD83C\uDDEC\uD83C\uDDE7','Irlanda do Norte \uD83C\uDDEC\uD83C\uDDE7'].includes(d.name))
    .map(c => {
      const cleanName = c.name
        .replace(/[\uD83C][\uDDE0-\uDDFF]/g, '')
        .replace(/[\uD83C][\uDFF4]/g, '')
        .replace(/[\uFE0F]/g, '')
        .trim();
      return { name: cleanName, code: c.code, id: c.id, year: c.year };
    });

  // 2. UK sub-nations
  const ukEntries = [
    { name:'Esc\u00F3cia',       code:'gb-sct', id:826, year:'2024' },
    { name:'Inglaterra',          code:'gb-eng', id:826, year:'2014' },
    { name:'Irlanda do Norte',    code:'gb-nir', id:826, year:'2025' },
  ];

  // 3. User-added countries not already in SEARCH_DATA
  const existingIds = new Set(SEARCH_DATA.filter(d => d.type === 'visited').map(d => d.id));
  const userEntries = pins
    .filter(p => p.type === 'pin-visited' && p.countryId && !existingIds.has(+p.countryId))
    .reduce((acc, p) => {
      if (!acc.some(x => x.id === +p.countryId)) {
        const code = (p.emoji && p.emoji.length <= 3) ? p.emoji
          : (FLAG_CODES[+p.countryId] || NUM_TO_CODE[+p.countryId] || '');
        if (code) acc.push({ name: p.name, code, id: +p.countryId, year: p.year || '\u2014' });
      }
      return acc;
    }, []);

  // 4. Merge + sort alphabetically (Portuguese locale, accent-insensitive)
  // Exclude Sérvia, Kosovo, Macedónia do Norte until 25 Aug 2026
  const flagCutoff = new Date('2026-08-25');
  const flagToday = new Date();
  const FUTURE_CODES = new Set(['rs', 'xk', 'mk']);
  const allEntries = [...baseEntries, ...ukEntries, ...userEntries];
  const all = allEntries
    .filter(e => flagToday >= flagCutoff || !FUTURE_CODES.has(e.code))
    .sort((a, b) => a.name.localeCompare(b.name, 'pt', { sensitivity: 'base' }));

  // 5. Abreviações para nomes compridos na flag strip
  const ABBR_MAP = {
    'Emirados Árabes': 'EAU',
    'Países Baixos': 'P. Baixos',
    'Irlanda do Norte': 'Irl. Norte',
    'Macedónia do Norte': 'Mac. Norte',
    'Cabo Verde': 'C. Verde',
  };
  function abbrevName(name) {
    for (const [key, val] of Object.entries(ABBR_MAP)) {
      if (name.includes(key)) return val;
    }
    return name;
  }

  // 6. Render
  strip.innerHTML = all.map(e => {
    const displayName = abbrevName(e.name);
    return `<div class="flag-item" onclick="flagStripClick(${e.id}, ${JSON.stringify(e.code)})" title="${e.name} \u00B7 ${e.year}">
      <img class="flag-img" src="https://flagcdn.com/w40/${e.code}.png" alt="${e.name}" loading="lazy">
      <div class="flag-name">${displayName}</div>
    </div>`;
  }).join('');
}

function flagStripClick(numericId, code) {
  const id = +numericId;

  // 1. Mudar para tab do mapa e fazer scroll
  switchTab('map');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 2. Esperar que o browser renderize o tab antes de tentar zoom
  // requestAnimationFrame garante que o DOM foi pintado
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!svgRef || !projRef || !window._mapZoom) return;
      zoomToCountry(id, null, null);
      // Abrir sheet depois do zoom completar
      setTimeout(() => {
        if (id === 826) {
          openUKSheet();
        } else {
          const info = VISITED[id];
          if (info) openSheet(info, id);
        }
      }, 850);
    });
  });
}

// ─── NOTIFICATION ─────────────────────────────────────────────────────────────
function showNotif(msg) {
  const el = document.getElementById('notif');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}

// ─── EXPORT / IMPORT ─────────────────────────────────────────────────────────
function exportData() {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    pins: pins,
    wishCountries: [...wishCountriesNumeric],
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'vanbertos-passaporte-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showNotif('\u2B07 Dados exportados com sucesso!');
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.pins || !Array.isArray(data.pins)) throw new Error('Formato inv\u00E1lido');
      pins = data.pins;
      if (Array.isArray(data.wishCountries)) {
        wishCountriesNumeric = new Set(data.wishCountries);
      }
      await savePins();
      await saveWishCountries();
      renderMapPins();
      renderPinsList();
      renderSoonList();
      renderWishList();
      renderWishChips();
      updateMapColors();
      updateStats();
      showNotif('\u2B06 ' + pins.length + ' pins importados!');
    } catch(err) {
      showNotif('\u26A0\uFE0F Erro ao importar \u2014 verifica o ficheiro');
    }
    input.value = ''; // reset file input
  };
  reader.readAsText(file);
}

// ─── GUIDES DATA ──────────────────────────────────────────────────────────────
const GUIDES_DATA = [
    {
    id: 'terceira', name: 'Ilha Terceira', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · desde 2007',
    photoFolder: 'images/Ilha_Terceira/Ilha_Terceira',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Cidade de Angra do Heroísmo',
        'Monte Brasil',
        'Jardim Duque de Bragança',
        'Miradouro Alto da Memória',
        'Cidade da Praia da Vitória',
        'Impérios do Divino Espírito Santo',
        'Algar do Carvão',
        'Gruta do Natal',
        'Furnas do Enxofre',
        'Lagoa das Patas',
        'Miradouro da Serra do Cume',
        'Piscinas Naturais dos Biscoitos',
        'Serra de Santa Bárbara',
      ]},
      { title: '🍴 Restaurantes', items: [
        'QB',
        'Mercatto di Osteria',
        'Taberna do Roberto',
        'Beira Mar',
        'O Caneta',
        'Quinta dos Açores',
        'Rocha',
        'Ti Chôa',
        'O Pescador',
      ]},
    ]
  },
  {
    id: 'murcia-benidorm-alicante', name: 'Múrcia · Benidorm · Alicante', country: 'Espanha', flagCode: 'es', countryId: 724,
    sub: 'Espanha · Páscoa 2008, 2011',
    photoFolder: 'images/Murcia_Benidorm_Alicante/Murcia_Benidorm_Alicante',
    sections: [
      { title: '🗺️ Múrcia — Locais visitados', items: [
        'Catedral de Múrcia',
        'Real Casino de Murcia',
        'Plaza de las Flores',
        'Santuario de Nuestra Señora de la Fuensanta',
        'Plaza del Cardenal Belluga',
      ]},
      { title: '🏖️ Benidorm — Locais visitados', items: [
        'Playa de Levante',
        'Playa de Poniente',
        'Balcón del Mediterráneo',
      ]},
      { title: '🗺️ Alicante — Locais visitados', items: [
        'Castillo de Santa Bárbara',
        'Barrio de Santa Cruz',
        'Passeig Esplanada d\'Espanya',
        'Playa del Postiguet',
      ]},
      { title: '🍴 Restaurantes', items: [
        'El Pasaje de Zabalburu',
        'Los Zagales',
        'La Taberna del Gourmet',
        'D\'Tablas',
        'D-Vora',
        'La Mejillonera',
      ]},
    ]
  },
  {
    id: 'peneda-geres', name: 'Parque Nacional da Peneda-Gerês', country: 'Portugal', flagCode: 'pt', countryId: 620,
    sub: 'Portugal · 2011',
    photoFolder: 'images/Parque_Nacional_da_Peneda_Geres/Parque_Nacional_da_Peneda_Geres',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Cascata do Arado',
        'Cascata da Portela do Homem',
        '7 Lagoas',
        'Cascata de Pincães',
        'Miradouro da Pedra Bela',
        'Miradouro do Fojo',
        'Soajo (Espigueiros)',
        'Lindoso (Castelo e Espigueiros)',
        'Castro Laboreiro',
        'As Termas de Lobios (Lobios - Espanha)',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Lurdes Capela',
        'O Abocanhado',
        'Saber ao Borralho',
      ]},
    ]
  },
  {
    id: 'londres', name: 'Londres', country: 'Reino Unido', flagCode: 'gb', countryId: 826,
    sub: 'Inglaterra \u00B7 Reino Unido \u00B7 P\u00E1scoa 2014',
    photoFolder: 'images/Londres/Londres',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Palácio de Westminster e Big Ben',
        'Abadia de Westminster',
        'Ponte de Westminster',
        'London Eye',
        'Palácio de Buckingham',
        'British Museum',
        'Natural History Museum',
        'National Gallery',
        'London Bridge',
        'Torre de Londres',
        'Tower Bridge',
        'St. Paul\'s Cathedral',
        'Hyde Park',
        'St. James\'s Park',
        'Piccadilly Circus',
        'Leicester Square',
        'Chinatown',
        'Trafalgar Square',
        'Borough Market',
        'Madame Tussauds London',
        'Churchill War Rooms',
        'The London Dungeon',
        'Tour no Rio Tamisa',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Novotel London Wembley',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Flat Iron',
        'Honest Burgers',
        'Franco Manca',
        'Roti King',
        'Padella',
        'Ben\'s Traditional Fish & Chips',
      ]},
    ]
  },
  {
    id: 'sao-miguel', name: 'Ilha de S\u00E3o Miguel', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'A\u00E7ores \u00B7 2014, 2021, 2018, 2024',
    photoFolder: 'images/Ilha_de_Sao_Miguel/Ilha_de_Sao_Miguel',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Lagoa das Sete Cidades',
        'Lagoa do Fogo',
        'Parque Terra Nostra',
        'Ch\u00E1 Gorreana \u2014 F\u00E1brica',
        'Miradouro da Vista do Rei',
        'Miradouro da Grota do Inferno',
        'Centro de Interpreta\u00E7\u00E3o Ambiental da Caldeira Velha',
        'Lagoa das Furnas',
        'Po\u00E7a da Dona Beija',
        'Miradouro do Tanque (vista ilh\u00E9u Vila Franca do Campo)',
        'Portas da Cidade',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Hotel Lince',
        'NEAT Hotel Avenida',
        'Azoris Royal Garden',
        'Casa das Arcadas',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Parque Atl\u00E2ntico',
        'A Tasca',
        'Supl\u00E9xio',
        'Quinta dos A\u00E7ores',
        'Restaurante Associa\u00E7\u00E3o Agr\u00EDcola de S\u00E3o Miguel',
      ]},
    ]
  },
  {
    id: 'sao-jorge', name: 'Ilha de São Jorge', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · 2014-2018',
    photoFolder: 'images/Ilha_de_Sao_Jorge/Ilha_de_Sao_Jorge',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Fajã da Caldeira de Santo Cristo',
        'Fajã dos Cubres',
        'Fajã de São João',
        'Fajã dos Vimes',
        'Pico da Esperança',
        'Miradouro da Fajã do Ouvidor',
        'Poça Simão Dias (Fajã do Ouvidor)',
        'Velas',
        'Calheta',
        'Cooperativa do Queijo de São Jorge (Beira)',
        'Ponta dos Rosais (e Farol)',
        'Parque Florestal das Sete Fontes',
      ]},
      { title: '🍴 Restaurantes', items: [
        'O Forninho',
        'Restaurante Amaro',
        'Sabores da Fajã',
      ]},
    ]
  },
  {
    id: 'paris', name: 'Paris', country: 'Fran\u00E7a', flagCode: 'fr', countryId: 250,
    sub: 'Fran\u00E7a \u00B7 Ver\u00E3o 2015',
    photoFolder: 'images/Paris/Paris',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Torre Eiffel',
        'Museu do Louvre',
        'Disneyland Paris',
        'Arco do Triunfo',
        'Avenida dos Campos Elísios (Champs-Élysées)',
        'Rio Sena',
        'Catedral de Notre-Dame',
        'Sainte-Chapelle',
        'Basílica do Sacré-Cœur',
        'Centro Pompidou',
        'Palácio de Versalhes',
        'Panteão',
        'Jardins do Luxemburgo',
        'Ponte Alexandre III',
        'Pont Neuf',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Ibis Styles Paris Massena Olympiades',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Bouillon Chartier',
        'Les Philosophes',
        'L\'As du Fallafel',
        'Pizzeria Popolare',
        'Higuma',
        'Le Relais de l\'Entrecôte',
        'Le Comptoir de La Relais',
        'Frenchie Bar à Vins',
      ]},
    ]
  },
  {
    id: 'roma', name: 'Roma', country: 'It\u00E1lia', flagCode: 'it', countryId: 380,
    sub: 'It\u00E1lia \u00B7 Ver\u00E3o 2016',
    photoFolder: 'images/Roma/Roma',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Piazza del Popolo',
        'Piazza di Spagna',
        'Fontana di Trevi',
        'Coliseu',
        'Fórum Romano',
        'Bocca della Verità',
        'Ponte Sant\'Angelo',
        'Piazza Navona',
        'Panteão',
      ]},
      { title: '🏨 Hoteis', items: [
        'Hotel San Paolo Roma',
        'Hotel Varese',
        'Hotel Argentina',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Ristorante Luigi, Cantina e Cucina',
        'Pane e Salame (paninis)',
        'Sfizio Pizzeria (pizzaria)',
        'La Nuova Piazzetta',
        'Cantina e Cucina (italiano), próximo da Piazza Navona',
      ]},
    ]
  },
  {
    id: 'vaticano', name: 'Vaticano', country: 'Vaticano', flagCode: 'va', countryId: 336,
    sub: 'Vaticano \u00B7 Ver\u00E3o 2016',
    photoFolder: 'images/Vaticano/Vaticano',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Museus do Vaticano',
        'Capela Sistina',
        'Praça de São Pedro',
        'Basílica de São Pedro',
      ]},
    ]
  },
  {
    id: 'bruxelas', name: 'Bruxelas', country: 'B\u00E9lgica', flagCode: 'be', countryId: 56,
    sub: 'B\u00E9lgica \u00B7 Ver\u00E3o 2017',
    photoFolder: 'images/Bruxelas/Bruxelas',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Atomium',
        'Parque do Cinquentenário',
        'European Parliament',
        'Palácio Real de Bruxelas',
        'Catedral de São Miguel e Santa Gudula',
        'Manneken Pis',
        'Mont des Arts',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Hotel Ibis Brussels Centre Gare Midi',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Mammouth',
        'Bia Mara',
        'Exki',
        'L\'Express',
        'Tonton Garby',
      ]},
    ]
  },
  {
    id: 'praga', name: 'Praga', country: 'Rep. Checa', flagCode: 'cz', countryId: 203,
    sub: 'Rep. Checa \u00B7 Ver\u00E3o 2017',
    photoFolder: 'images/Praga/Praga',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Peace Square',
        'Wenceslas Square (Museu Nacional de Praga e Wenceslas Statue)',
        'Centro Comercial Palladium',
        'Cemitério Judeu de Praga',
        'Clementinum',
        'St. Nicholas\' Church',
        'Orloj',
        'Old Town Square',
        'Igreja da Nossa Senhora em frente de Týn',
        'Chapeau Rouge',
        'Torre da Pólvora',
        'Ponte de St Charles',
        'Casa Dançante',
        'Catedral de Sao Vito',
        'Ilha de kampa + Muro de John Jennon',
        'Castelo de Praga',
        'Torre Petřín',
        'Teatro Nacional de Praga',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Hotel Noir',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Etnosvět',
        'Centro Comercial Palladium',
        'Green Stove Cafe Kafe U zelených kamen',
        'U Magistra Kelly',
        'Vegan\'s Prague',
      ]},
    ]
  },
  {
    id: 'amesterdao', name: 'Amesterd\u00E3o', country: 'Pa\u00EDses Baixos', flagCode: 'nl', countryId: 528,
    sub: 'Pa\u00EDses Baixos \u00B7 Ver\u00E3o 2017',
    photoFolder: 'images/Amesterdao/Amesterdao',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Canais de Amesterdão (tour de barco)',
        'Amsterdam Centraal',
        'National Monument',
        'Madame Tussauds',
        'Palácio Real de Amesterdão',
        'Nieuwe Kerk',
        'Westerkerk',
        'Casa de Anne Frank',
        'Amsterdam Dungeon',
        'Amsterdam Museum',
        'Leidseplein',
        'Heineken Experience',
        'Vondelpark',
        'Rijksmuseum',
        'Concertgebouw',
        'Stedelijk Museum',
        'Museu Van Gogh',
        'I amsterdam',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Novotel Amsterdam Schiphol Airport, Hoofddorp',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'PIQNIQ',
        'Broodje Bert',
        'Piadina Bar',
        'Bagels & Beans',
        'LEON',
      ]},
    ]
  },
  {
    id: 'zurique', name: 'Zurique', country: 'Su\u00ED\u00E7a', flagCode: 'ch', countryId: 756,
    sub: 'Su\u00ED\u00E7a \u00B7 Natal 2017',
    photoFolder: 'images/Zurique/Zurique',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Altstadt (Cidade Velha)',
        'Grossmünster (catedral)',
        'Fraumünster (igreja)',
        'Lindenhof (colina)',
        'Lago de Zurique (Zürichsee)',
        'Uetliberg (montanha)',
        'Bahnhofstrasse (avenida comercial)',
        'Museu Nacional Suíço',
        'Zürich West (Distrito Industrial)',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Holiday Inn Express Zürich Airport',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Sternen Grill',
        'Zeughauskeller',
        'Rheinfelder Bierhalle',
        'Holy Cow! Gourmet Burger',
        'Swiss Chuchi',
      ]},
    ]
  },
  {
    id: 'pico', name: 'Ilha do Pico', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · 2017',
    photoFolder: 'images/Ilha_do_Pico/Ilha_do_Pico',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Montanha do Pico',
        'Zona balnear da Madalena',
        'Piscinas naturais em Criação Velha',
        'Museu do Vinho do Pico',
        'Vinhas do Pico',
        'Gruta das Torres',
        'Lagoa do Capitão',
        'Caldeira',
        'Farol Ponta da Ilha',
        'Madalena (costa)',
        'Museu dos Baleeiros',
        'São Mateus Farol',
      ]},
      { title: '🍴 Restaurantes', items: [
        'O Ancoradouro',
        'Cella Bar',
        'O Tasca',
      ]},
    ]
  },
  {
    id: 'flores', name: 'Ilha das Flores', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · 2017',
    photoFolder: 'images/Ilha_das_Flores/Ilha_das_Flores',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Poço da Alagoinha (Poço da Ribeira do Ferreiro)',
        'Cascata do Poço do Bacalhau',
        'Rocha dos Bordões',
        'Sete Lagoas (Lagoa Negra, Comprida, Branca, Seca, Funda, Rasa e Lomba)',
        'Miradouro de Craveiro Lopes',
        'Santa Cruz das Flores',
        'Fajã Grande',
        'Fábrica da Baleia do Boqueirão',
        'Ilhéu de Monchique',
      ]},
      { title: '🏨 Hotel', items: [
        'Residencia Mateus',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Restaurante Casa do Rei',
        'Papadias',
        'Restaurante Sereia',
      ]},
    ]
  },
  {
    id: 'islandia', name: 'Isl\u00E2ndia', country: 'Isl\u00E2ndia', flagCode: 'is', countryId: 352,
    sub: 'Isl\u00E2ndia \u00B7 Ver\u00E3o 2018',
    photoFolder: 'images/Islandia/Islandia',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Reykjavik (Perlan, Hallgrímskirkja, Solfar Sun Vojager, Harpa Auditório e Centro de Conferência, Tjörnin, Cathedral of Christ the King)',
        'Lagoa Azul',
        'Seljalandsfoss (cascata)',
        'Gljúfrabúi (cascata)',
        'Skógafoss (queda de água)',
        'Sólheimajökull (geleira)',
        'Reynisfjara Beach (black-sand beach)',
        'Fjaðrárgljúfur (massive canyon)',
        'Svartifoss waterfall',
        'Diamond Beach',
        'Jökulsárlón (glacier lagoon)',
        'Dettifoss + Selfoss Waterfall',
        'Krafla (sistema vulcânico)',
        'Hverir (área geotermica)',
        'Grjótagjá Cave (gruta com água)',
        'Lake Mývatn View Point (lago)',
        'Godafoss (catarata)',
        'Akureyri (cidade)',
        'Thingvellir National Park',
        'Öxarárfoss',
        'Laugarvatn (lago ponto de passagem)',
        'Bruarfoss Waterfall (queda água)',
        'Geysir (nascente eruptiva)',
        'Gullfoss (queda de água)',
        'Kerid (lago em cratera vulcânica)',
      ]},
      { title: '\uD83C\uDFE8 Hoteis', items: [
        'T10 Hotel Iceland',
        'Neskaupstaður',
        'North Star Hotel Staðarflöt',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Hlölli',
        'Reykjavik Chips',
        'Hafnarbudin',
        'Mia\'s Country Van',
        'DJ Grill',
      ]},
    ]
  },
  {
    id: 'oslo', name: 'Oslo', country: 'Noruega', flagCode: 'no', countryId: 578,
    sub: 'Noruega \u00B7 Natal 2018',
    photoFolder: 'images/Oslo/Oslo',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Ópera de Oslo (Operahuset)',
        'Museu Munch (MUNCH)',
        'Bairro de Aker Brygge e Tjuvholmen',
        'Fortaleza de Akershus (Akershus Festning)',
        'Palácio Real (Det Kongelige Slott)',
        'Câmara Municipal de Oslo (Rådhuset)',
        'Museu do Barco Fram (Frammuseet)',
        'National Museum',
        'Museu de História Cultural (Norsk Folkemuseum)',
        'Vikingskipshuset',
        'Centro Nobel da Paz',
        'Trampolim de Esqui de Holmenkollen',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Clarion Collection Hotel Savoy',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Oslo Street Food',
        'Mamma Pizza',
        'Illegal Burger',
        'Haralds Vaffel',
        'Lofoten Fiskerestaurant',
      ]},
    ]
  },
  {
    id: 'atenas', name: 'Atenas', country: 'Gr\u00E9cia', flagCode: 'gr', countryId: 300,
    sub: 'Gr\u00E9cia \u00B7 Ver\u00E3o 2019',
    photoFolder: 'images/Atenas/Atenas',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Monte Licabeto',
        'Acr\u00F3pole \u2014 Partenon, Erecteion, Teatro de Dion\u00EDsio, Ode\u00E3o de Herodes \u00C1tico',
        '\u00C1gora Romana',
        '\u00C1gora de Atenas + Templo de Hefesto',
        'Biblioteca de Adriano',
        'Pra\u00E7a Sintagma',
        'National Garden + Zappeion + Parlamento',
        'Est\u00E1dio Panatenaico',
        'Templo de Zeus Ol\u00EDmpico',
        'Arco de Adriano',
        'Plaka',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Airotel Alexandros',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Karamanlidika',
        'Tavern Klimataria',
        'Atitamos',
      ]},
    ]
  },
  {
    id: 'veneza', name: 'Veneza', country: 'It\u00E1lia', flagCode: 'it', countryId: 380,
    sub: 'It\u00E1lia \u00B7 Ver\u00E3o 2019',
    photoFolder: 'images/Veneza/Veneza',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Grande Canal de Veneza de Barco',
        'Passeio de Gondola',
        'Ponte da Constituição',
        'Ponte dos descalços',
        'Palácio Ca\' Pesaro',
        'Palácio Ca\' d\'Oro + Ca\' Sagredo Hotel',
        'Mercado de Rialto + Ponte de Rialto + Riva degli Vin (zona) + Fondaco dei Tedeschi',
        'Igreja de Santa Maria dos Milagres',
        'Basílica de São João e São Paulo',
        'Libreria Acqua Alta (livraria)',
        'Arsenal de Veneza',
        'Igreja de São Zacarias',
        'Palácio Ducal',
        'Basílica de São Marcos',
        'Praça de São Marcos + Campanário de São Marcos + Torre do relógio de São Marcos',
        'Ponte da Academia',
        'Basílica de Santa Maria della Salute + Punta della Dogana',
        'Academia de Belas Artes de Veneza (museu)',
        'Ca\' Rezzonico + Palazzo Grassi',
        'Basílica de Santa Maria Gloriosa dei Frari + Scuola Grande di San Rocco',
        'Ilhas de Murano e Burano',
      ]},
      { title: '🏨 Hotel', items: [
        'Antony Hotel - Venice Airport',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Ristorante Due Fratelli',
        'Bacaro Quebrado',
        'Ostaria dai Zemei',
        'Hostaria Osottoosopra',
        'Ristorante Caffè Saraceno',
        'Trattoria Al Gazzettino',
        'La Bottiglia (paninis)',
        'Osteria Al Squero',
        'Bacaro Risorto Castello',
      ]},
    ]
  },
  {
    id: 'berlim', name: 'Berlim', country: 'Alemanha', flagCode: 'de', countryId: 276,
    sub: 'Alemanha \u00B7 Ver\u00E3o 2019',
    photoFolder: 'images/Berlim/Berlim',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Palácio do Reichstag',
        'Portão de Brandemburgo',
        'Madame Tussaud Berlim',
        'Memorial aos Judeus Mortos da Europa',
        'Potsdamer Platz',
        'Topografia do Terror (Museu histórico de Berlim)',
        'Checkpoint Charlie',
        'Gendarmenmarkt',
        'Ilha dos Museus (Museu De Pergamón, Catedral de Berlim)',
        'Siegessäule (Monumento em Berlim)',
        'Großer Tiergarten',
        'Berliner Fernsehturm (Torre de TV de Berlim)',
        'Alexanderplatz',
      ]},
      { title: '🏨 Hoteis', items: [
        'H4 Hotel',
        'H+ Hotel Berlin Mitte',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Zur Gerichtslaube',
        'Dicke Wirtin',
        'Max und Moritz',
      ]},
    ]
  },
  {
    id: 'estocolmo', name: 'Estocolmo', country: 'Su\u00E9cia', flagCode: 'se', countryId: 752,
    sub: 'Su\u00E9cia \u00B7 Natal 2019',
    photoFolder: 'images/Estocolmo/Estocolmo',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Gamla Stan (Cidade Velha)',
        'Palácio Real de Estocolmo (Kungliga Slottet)',
        'Catedral de Estocolmo (Storkyrkan)',
        'Museu Vasa (Vasamuseet)',
        'Skansen (Museu)',
        'Câmara Municipal de Estocolmo (Stadshuset)',
        'Miradouro de Monteliusvägen',
        'Estações de Metro de Estocolmo (Tunnelbana)',
        'Kungsträdgården',
        'Fotografiska Museum Stockholm',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Scandic Klara',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Östermalms Food Hall',
        'Kajsas Fisk',
        'Meatballs for the People',
        'Mom\'s Kitchen',
        'Hermans',
        'Pelikan',
      ]},
    ]
  },
  {
    id: 'graciosa', name: 'Ilha Graciosa', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · 2019',
    photoFolder: 'images/Ilha_da_Graciosa/Ilha_da_Graciosa',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Furna do Enxofre',
        'Termas do Carapacho (e Piscinas Naturais)',
        'Caldeira da Graciosa',
        'Santa Cruz da Graciosa',
        'Miradouro da Praia (Monte de Nossa Senhora da Ajuda)',
        'Ilhéu da Praia',
        'Ilhéu de Baixo (Carapacho)',
        'Fábrica das Queijadas da Graciosa',
        'Moinhos de Vento de Redondos',
        'Ponta da Barca (e Farol)',
        'Baía da Folga',
      ]},
      { title: '🏨 Hotel', items: [
        'Graciosa Hotel',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Costa do Sol',
        'O Estrela',
        'O Telheiro',
      ]},
    ]
  },
  {
    id: 'santa-maria', name: 'Ilha de Santa Maria', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · 2019',
    photoFolder: 'images/Ilha_de_Santa_Maria/Ilha_de_Santa_Maria',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Praia Formosa',
        'Deserto Vermelho (Barreiro da Faneca)',
        'Cascata do Aveiro',
        'Baía de São Lourenço (e Miradouro)',
        'Vila do Porto (Centro Histórico)',
        'Miradouro de Santa Bárbara',
        'Baía dos Anjos (e Estátua de Cristóvão Colombo)',
        'Poço da Rocha',
        'Pico Alto',
        'Forte de São Brás',
      ]},
      { title: '🏨 Hotel', items: [
        'Hotel Santa Maria',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Central Pub',
        'Restaurante Garrafão',
        'O Forno',
      ]},
    ]
  },
  {
    id: 'budapeste', name: 'Budapeste', country: 'Hungria', flagCode: 'hu', countryId: 348,
    sub: 'Hungria \u00B7 Ver\u00E3o 2021',
    photoFolder: 'images/Budapeste/Budapeste',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Parque Városliget',
        'Praça dos Heróis',
        'Castelo de Vajdahunyad',
        'Termas de Széchenyi',
        'Praça Vorosmarty',
        'Elizabeth Square',
        'Basílica de Santo Estêvão',
        'Liberty Square',
        'Sapatos a Beira do Danúbio',
        'Kossuth Lajos Square',
        'Parlamento de Budapeste',
        'Sinagoga de Budapeste',
        'Great Market Hall',
        'Liberty Statue',
        'Citadella',
        'Castle Garden Bazaar',
        'Castelo de Buda',
        'Matthias Church',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Impulso Hotel by Mellow Mood Hotels',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Frici Papa',
        'Bors Gastro Bar',
        'Király 100 Gasztro Degustation (Antigo Drum Cafe)',
        'Belvárosi Disznótoros',
        'Gettó Gulyás',
        'padthai wokbar',
      ]},
    ]
  },
  {
    id: 'viena', name: 'Viena', country: '\u00C1ustria', flagCode: 'at', countryId: 40,
    sub: '\u00C1ustria \u00B7 Ver\u00E3o 2021',
    photoFolder: 'images/Viena/Viena',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Palácio Belvedere',
        'Stadtpark',
        'Catedral de Santo Estêvão',
        'Graben',
        'Kohlmarkt',
        'Michaelerplatz',
        'Biblioteca Nacional Austríaca',
        'Hofburg',
        'Heldenplatz',
        'Jardim do povo',
        'Rathausplatz (Rathaus)',
        'Maria Theresien Platz (Naturhistorisches Museum, Kunsthistorisches Museum, Museumsquartier)',
        'Palácio de Schönbrunn',
        'Naschmarkt',
        'Karlsplatz',
      ]},
      { title: '\uD83C\uDFE8 Hoteis', items: [
        'Premier Inn Wien City Hauptbahnhof',
        'AZIMUT Hotel Vienna',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Bitzinger Würstelstand Albertina',
        'Schnitzelwirt',
        'Centimeter I (Gerstnerstraße)',
        'Plachuttas Gasthaus zur Oper',
        'Le Burger',
        'Swing Kitchen',
      ]},
    ]
  },
  {
    id: 'helsinquia', name: 'Hels\u00EDnquia', country: 'Finl\u00E2ndia', flagCode: 'fi', countryId: 246,
    sub: 'Finl\u00E2ndia \u00B7 2018, Natal 2021',
    photoFolder: 'images/Helsinquia/Helsinquia',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Kamppi Chapel of Silence (Igreja)',
        'Helsingin päärautatieasema (Torre de relógio, art nouveau e arquitetura) Rautatieasema',
        'Ice Park Helsinki',
        'Ateneum (Museu)',
        'Stockmann Helsingin Keskusta (centro comercial decoração natal)',
        'Aleksanterinkatu 13 (decoração Natal)',
        'Praça do Senado + (Mercado do Natal + Edifícios neoclássicos numa praça)',
        'Catedral de Helsínquia',
        'Catedral de Uspenski',
        'SkyWheel Helsinki',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Hotel Helka',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Restaurant Caverna',
        'Ravintola Factory Kamppi',
        'Soppakeittiö',
        'Vanha Kauppahalli',
        'Unicafe Kaivopiha',
        'Friends & Brgrs',
      ]},
    ]
  },
  {
    id: 'laponia', name: 'Lap\u00F3nia', country: 'Finl\u00E2ndia', flagCode: 'fi', countryId: 246,
    sub: 'Finl\u00E2ndia \u00B7 Natal 2021',
    photoFolder: 'images/Laponia/Laponia',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Santa Claus Village',
        'Santa Claus Office',
        'Posto De Correios Do Papai Noel',
        'Santa Claus Reindeer',
        'Santa\'s House of Snowmobiles',
        'Mrs. Santa Claus Christmas Cottage',
        'Linha do Círculo Polar Ártico',
        'Snowmobile Safari',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Santa\'s Salmon Place',
        'Christmas House Restaurant',
        'Napatapuli',
        'Shell HelmiSimpukka (Estação de Serviço)',
      ]},
    ]
  },
  {
    id: 'istambul', name: 'Istambul', country: 'Turquia', flagCode: 'tr', countryId: 792,
    sub: 'Turquia \u00B7 Ver\u00E3o 2022',
    photoFolder: 'images/Istambul/Istambul',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Parque Gülhane + Palácio de Topkapı',
        'Santa Sofia + Igreja de Santa Irene',
        'Mesquita Azul + Hipódromo de Constantinopla (Praça do Hipódromo)',
        'Coluna de Constantino',
        'Mesquita de Nuruosmaniye',
        'Grande Bazar',
        'Beyazit Square + Mesquita de Beyazid',
        'Mesquita de Laleli',
        'Fatih Mosque',
        'Mesquita Süleymaniye',
        'Mesquita de Rüstem Paxá + Bazar das Especiarias + Mesquita Yeni',
        'Ponte de Gálata + Torre de Gálata',
        'Rua Istklal',
        'Taksim Square + Parque Taksim Gezi',
        'Palácio Dolmabahçe',
        'Yıldız Park',
        'Ortaköy Square + Mesquita de Ortaköy',
        'Ponte do Bósforo + Palácio de Beylerbeyi',
        'Shemsi Pasha Mosque',
        'Uskudar Coast Walkway',
        'Torre de Leandro',
      ]},
      { title: '🏨 Hoteis', items: [
        'Hotel Black Tulip',
        'Villa Siesta Hotel Istanbul Airport',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Ziya Baba Türk',
        'Ortaklar Kebap',
        'Münhani Istanbul',
        'Old Ottoman Cafe & Restaurant',
      ]},
    ]
  },
  {
    id: 'capadocia', name: 'Capad\u00F3cia', country: 'Turquia', flagCode: 'tr', countryId: 792,
    sub: 'Turquia \u00B7 Ver\u00E3o 2022',
    photoFolder: 'images/Capadocia/Capadocia',
    sections: [
      { title: '\uD83C\uDF0B Locais visitados', items: [
        'Cappadocia Hot Air Balloon',
        'Pigeon Valley',
        'Zelve Open Air Museum',
        'Goreme Historical National Park',
        'Uchisar Castle',
        'Goreme Open Air Museum',
        'Fairy Chimneys',
        'Rose Valley',
        'Ortahisar Castle',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Termessos Hotel',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Rocks Terrace Restaurant',
        'Sedef',
        'Kapadokya Kebapzade',
      ]},
    ]
  },
  {
    id: 'copenhaga', name: 'Copenhaga', country: 'Dinamarca', flagCode: 'dk', countryId: 208,
    sub: 'Dinamarca \u00B7 Natal 2022',
    photoFolder: 'images/Copenhaga/Copenhaga',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Jardins de Tivoli',
        'City Hall Square',
        'Copenhagen City Hall',
        'Museu Gliptoteca Ny Carlsberg',
        'Palácio de Christiansborg',
        'Nyhavn (Área popular junto aos canais) + Casa de Ópera de Copenhague (vista)',
        'Kongens Nytorv (praça calcetada pública no centro de Copenhaga)',
        'Strøget (Maior rua comercial do mundo)',
        'Torre Rundetarn',
        'TorvehallerneKBH',
        'Castelo Rosenborg + The King\'s Garden',
        'Igreja de Mármore',
        'Palácio de Amalienborg',
        'Pequena Sereia + Fonte de Gefion + Langelinie',
        'Noma (restaurante)',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Gasoline Grill',
        'Torvehallerne KBH',
        'Restaurant Karla',
        'Hanzo',
        'Reffen (Copenhagen Street Food)',
      ]},
    ]
  },
  {
    id: 'malmo', name: 'Malm\u00F6', country: 'Su\u00E9cia', flagCode: 'se', countryId: 752,
    sub: 'Su\u00E9cia \u00B7 Natal 2022',
    photoFolder: 'images/Malmo/Malmo',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Igreja de S\u00E3o Pedro',
        'Lilla Torg \u2013 Pra\u00E7a',
        'Gustav Adolfs Torg Square (Pra\u00E7a e Mercado de Natal)',
        'Kungsparken - Parque mais antigo da cidade com trilhos',
        'Malm\u00F6 Castle + Malmo Museum',
        'Slottstr\u00E4dg\u00E5rden + Castle Mill (parque + moinho)',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Spoonery',
        '\u00D6stergatan No. 25',
        'Masala & More',
        'Dagens Lunch (Muitos restaurantes com o prato do dia)',
        'Malm\u00F6 foodhall',
      ]},
    ]
  },
  {
    id: 'faial', name: 'Ilha do Faial', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · 2023',
    photoFolder: 'images/Ilha_do_Faial/Ilha_do_Faial',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Vulcão dos Capelinhos',
        'Caldeira do Faial',
        'Marina da Horta',
        'Peter Café Sport',
        'Piscinas naturais de Castelo Branco + Ponta do Morro',
        'Praia da Fajã + Miradouro da Ribeira das Cabras',
        'Praia de Porto Pim',
        'Piscinas Naturais do Varadouro',
        'Miradouro de Nossa Senhora da Conceição',
        'Caldeira',
        'Jardim Botânico do Faial',
      ]},
      { title: '🏨 Hotel', items: [
        'Azoris Faial Garden - Resort Hotel',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Atlético',
        'Ah! Boca Santa',
        'Peter Café Sport',
        'Pasquinha',
        'Aldina Restaurant and Bar',
      ]},
    ]
  },
  {
    id: 'corvo', name: 'Ilha do Corvo', country: 'Portugal', flagCode: 'azores', countryId: 620,
    sub: 'Açores · 2023',
    photoFolder: 'images/Ilha_do_Corvo/Ilha_do_Corvo',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Miradouro Caldeirão + Caldeirão + Lagoa do Caldeirão',
        'Miradouro do Morro dos Homens',
        'Miradouro Cabeça do Indio',
        'Praia da Areia',
        'Moinhos do Corvo + Farol da Ponta Negra',
        'Miradouro do Portão',
        'Ecomuseu',
      ]},
      { title: '🏨 Hotel', items: [
        "Joe & Vera's Vintage Place",
      ]},
      { title: '🍴 Restaurantes', items: [
        'Caldeirão',
        'BBC',
      ]},
    ]
  },
  {
    id: 'barcelona', name: 'Barcelona', country: 'Espanha', flagCode: 'es', countryId: 724,
    sub: 'Espanha \u00B7 P\u00E1scoa 2023',
    photoFolder: 'images/Barcelona/Barcelona',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Plaça d\'Espanya',
        'Praça da Catalunha',
        'La Rambla',
        'Catedral de Barcelona',
        'La Boqueria',
        'Monumento a Colón',
        'Sagrada Família',
        'Igreja de Santa Maria do Mar',
        'Parc de la Ciutadella',
        'Arco do Triunfo de Barcelona',
        'Casa Milá',
        'Casa Batló',
        'Fonte Mágica de Montjuïc',
        'Plaça d’Espanya',
      ]},
      { title: '🏨 Hotel', items: [
        'B Hotel',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Colom Restaurant',
        'Honest Greens Rambla Catalunya',
        'La Gastronomica Burgers&Beers',
        'El Desván Barcelona',
        'Micu Maku',
      ]},
    ]
  },
  {
    id: 'marraquexe', name: 'Marraquexe', country: 'Marrocos', flagCode: 'ma', countryId: 504,
    sub: 'Marrocos \u00B7 P\u00E1scoa 2023',
    photoFolder: 'images/Marraquexe/Marraquexe',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Jemaa el-Fnaa',
        'Souk Semmarine (Mercado)',
        'Rahba Lakdima (Pra\u00E7a)',
        'Madrasa Ben Youssef',
        'Souk des teinturiers',
        'Place des Ferblantiers',
        'Mosqu\u00E9e de la Koutoubia',
        'Tour deserto Agafay',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'BnB Medina',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Nomad',
        'Medina Burger',
        'Caf\u00E9 Babouche Medina',
        'Naranj Libanese',
        'La Cantine des Gazelles',
      ]},
    ]
  },
  {
    id: 'madeira', name: 'Ilha da Madeira', country: 'Portugal', flagCode: 'madeira', countryId: 620,
    sub: 'Madeira \u00B7 Maio 2023',
    photoFolder: 'images/Ilha_da_Madeira/Ilha_da_Madeira',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Miradouro Cristo Rei',
        'Mercado dos Lavradores',
        'Associação dos Carreiros do Monte',
        'Centro da Cidade do Funchal',
        'Marina do Funchal',
        'CR7 Museu',
        'Miradouro Pico do Barcelos',
        'Cabo Girão Skywalk',
        'Cascata dos Anjos',
        'Miradouro Eira do Serrado',
        'Miradouros do Paredão',
        'Miradouro do Pico do Areeiro',
        'Levada dos Balcões + Miradouro',
        'Miradouro do Guindaste',
        'Casas Típicas de Santana',
        'Pico Ruivo',
        'Miradouro da Beira da Quinta',
        'Miradouro do Véu da Noiva',
        'Praia do Porto do Seixal',
        'Miradouro da Eira da Achada',
        'Piscinas Naturais – Porto Moniz',
        'Ponta de São Lourenço',
        'Praia de Machico',
        'Madeira Cablecar',
      ]},
      { title: '🏨 Hotel', items: [
        'Eira do Serrado - Hotel & Spa',
      ]},
      { title: '🍴 Restaurantes', items: [
        'La Vaca Negra – Funchal',
        'Rei da Poncha - Funchal',
        'Restaurante Alta Vista – Funchal',
        'Hamburgueria do Mercado - Funchal',
        'O.Giro Churros & Paninis - Funchal',
        'Restaurante Santo António - Câmara de Lobos',
        'Sea View Restaurante – Porto Moniz',
      ]},
    ]
  },
  {
    id: 'nova-iorque', name: 'Nova Iorque', country: 'EUA', flagCode: 'us', countryId: 840,
    sub: 'EUA \u00B7 Ver\u00E3o 2023',
    photoFolder: 'images/Nova_Iorque/Nova_Iorque',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Times Square',
        'Statue of Liberty',
        'Touro de Wall Street',
        'Trinity Church',
        'Brooklyn Bridge',
        'Central Park',
        'Broadway (Radio City Music Hall)',
        'Empire state Building',
        'St. Patrick\'s Cathedral',
        'Museum of Modern Art (MoMA)',
        'American Museum of Natural History',
        'Madame Tussauds',
        'Top of the Rock – Rockefeller Center',
        'Chrysler Building',
        'Estação Grand Central',
        'Biblioteca Pública de Nova Iorque',
        'Madison Square Park',
        'Chinatown',
        'Little Italy',
        'Cruzeiro Harbor Lights da Circle Line',
        '1 day Hop-on Hop-Off',
      ]},
      { title: '🏨 Hotel', items: [
        'Cambria Hotel New York - Chelsea',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Poke Bowl',
        'Joe\'s Pizza',
        'Fried Dumpling 106 Mosco St',
        'John\'s of Bleecker Street',
        'Bleecker Street Pizza',
        'Wasabi Sushi & Bento',
        'Five Guys',
        'Ben & Jerry\'s',
      ]},
    ]
  },
  {
    id: 'toronto', name: 'Toronto & Ni\u00E1gara', country: 'Canad\u00E1', flagCode: 'ca', countryId: 124,
    sub: 'Canad\u00E1 \u00B7 Ver\u00E3o 2023',
    photoFolder: 'images/Toronto_&_Niagara/Toronto_&_Niagara',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Niagara Falls',
        'Ripley\'s Aquarium of Canada',
        'Roundhouse Park',
        'Toronto Islands',
        'Torre CN',
        'Berczy Park',
        'Gooderham Building',
        'St. Lawrence Market',
        'Distillery District',
        'Nathan Phillips Square',
        'Toronto Eaton Centre',
        'Dundas Square',
        'Toronto Public Library',
      ]},
      { title: '🏨 Hotel', items: [
        'The Rex Hotel Jazz and Blues Bar',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Queen Street Warehouse',
        'Poke Guys',
        'Chick-fil-A',
        'Five Guys',
        'Niagara Fallsview Casino Resort',
      ]},
    ]
  },
  {
    id: 'varsovia', name: 'Vars\u00F3via', country: 'Pol\u00F3nia', flagCode: 'pl', countryId: 616,
    sub: 'Pol\u00F3nia \u00B7 Natal 2023',
    photoFolder: 'images/Varsovia/Varsovia',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Warsaw Uprising Museum',
        'plac Zamkowy (Castle Square) + Coluna de Zygmunt',
        'Praça do Mercado da Cidade Velha de Varsóvia',
        'Museum of Warsaw',
        'Warsaw Barbican',
        'Vistula Boulevards',
        'Palácio da Cultura e Ciência',
        'Centro comercial Złote Tarasy',
        'Parque Łazienki',
        'Nowy Swiat (Rua)',
        'Museum of Fryderyk Chopin in Warsaw',
        'Palácio Presidencial',
        'Igreja de Santa Ana',
        'Castelo Real de Varsóvia',
      ]},
      { title: '🏨 Hotel', items: [
        'Hotel NYX',
      ]},
      { title: '🍴 Restaurantes', items: [
        '"Sushi Złota" Złote Tarasy',
        'Chocolate Cafe E.Wedel',
        'Barn Burger',
        'Gościniec Polskie Pierogi',
        'Manekin',
      ]},
    ]
  },
  {
    id: 'cracovia', name: 'Crac\u00F3via', country: 'Pol\u00F3nia', flagCode: 'pl', countryId: 616,
    sub: 'Pol\u00F3nia \u00B7 Natal 2023',
    photoFolder: 'images/Cracovia/Cracovia',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Galeria Krakowska',
        'Planty',
        'Old Kleparz',
        'Florian\'s Gate',
        'Floriańska Street',
        'Rynek Główny',
        'Basílica de Santa Maria',
        'Museu MNK Sukiennice',
        'Rua Grodzka',
        'Igreja de São Pedro e São Paulo',
        'Castelo Real de Wawel',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Chimney Cake Bakery',
        'Moaburger',
        'GOGO Burger',
      ]},
    ]
  },
  {
    id: 'cabo-verde', name: 'Ilha de Santiago', country: 'Cabo Verde', flagCode: 'cv', countryId: 132,
    sub: 'Cabo Verde \u00B7 P\u00E1scoa 2024',
    photoFolder: 'images/Santiago_Cabo_Verde/Santiago_Cabo_Verde',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Rock of Praia',
        'Praça Alexandre Albuquerque',
        'Praia de São Francisco',
        'Cruz de Papa – Miradouro',
        'Quebra Canela (Praia)',
        'Katchás',
        'Praia dos Amores',
        'Tarrafal',
        'Parque Natural Serra Malagueta',
        'Cidade Velha',
      ]},
      { title: '🏨 Hoteis', items: [
        'Hotel Cesaria',
        'Hotel Vista Mar',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Quintal da Música',
        'Linha d\'Água',
        'Alto Mira',
        'Hamburgueria B. Burguer',
      ]},
    ]
  },
  {
    id: 'maldivas', name: 'Maldivas', country: 'Maldivas', flagCode: 'mv', countryId: 462,
    sub: 'Maldivas \u00B7 Ver\u00E3o 2024',
    photoFolder: 'images/Maldivas/Maldivas',
    sections: [
      { title: '\uD83C\uDFDD\uFE0F Locais visitados', items: [
        'Male',
        'Ilha Akirifushi',
        'Ilha One Banyan',
        'Praia da Ilha de Sangeli (Akirifushi)',
        'Recife de franja (House reef)',
        'Pesca ao p\u00F4r do sol',
        'Mergulho com snorkel e desportos aqu\u00E1ticos',
        'SPA',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Oblu Select Sangeli',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'The Courtyard',
        'Justwok',
        'Just Grill',
      ]},
    ]
  },
  {
    id: 'catar', name: 'Catar', country: 'Catar', flagCode: 'qa', countryId: 634,
    sub: 'Catar \u00B7 Ver\u00E3o 2024',
    photoFolder: 'images/Qatar/Qatar',
    sections: [
      { title: '\uD83C\uDFD9\uFE0F Locais visitados', items: [
        'Villagio Mall',
        'Saf\u00E1ri no deserto com sandboard, passeio de camelo e mar interior',
        'Souq Waqif',
        'Doha Corniche',
        'The Pearl Monument',
        'Doha Skyline Viewpoint',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Shake Shack',
        'The Cheesecake Factory',
        'Outback Steakhouse',
      ]},
    ]
  },
  {
    id: 'bangkok', name: 'Bangkok', country: 'Tail\u00E2ndia', flagCode: 'th', countryId: 764,
    sub: 'Tail\u00E2ndia \u00B7 Natal 2024',
    photoFolder: 'images/Bangkok/Bangkok',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'The Grand Palace',
        'Wat Arun',
        'Wat Pho',
        'Wat Mangkon Kamalawat',
        'Chinatown (Yaowarat Rd)',
        'Buda de Ouro',
        'Centro comercial ICONSIAM',
        'King Power Mahanakhon',
        'centralwOrld',
        'Siam Paragon',
      ]},
      { title: '🏨 Hoteis', items: [
        'Hotel Eastin Grand Hotel Phayathai',
        'The Park Nine Hotel Suvarnabhumi',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Pop A Bowl',
        'Rongros',
        'Centro comercial ICONSIAM',
        'Hua Seng Hong Restaurant',
        'Odean Noodle',
        'The Cheesecake Factory',
        'Siam Paragon Food Court',
      ]},
    ]
  },
  {
    id: 'phuket', name: 'Phuket', country: 'Tail\u00E2ndia', flagCode: 'th', countryId: 764,
    sub: 'Tail\u00E2ndia \u00B7 Natal 2024',
    photoFolder: 'images/Phuket/Phuket',
    sections: [
      { title: '\uD83C\uDFD6\uFE0F Locais visitados', items: [
        'Patong',
        'Bangla Road',
        'Praia de Patong (Parasailing)',
        'Tour ilhas Phi Phi',
        'Tour Santu\u00E1rio de Elefantes',
        'Tour ilha James Bond',
      ]},
      { title: '\uD83C\uDFE8 Hoteis', items: [
        'Hotel Clover Patong Phuket \u2013 SHA Plus',
        'Panphuree Residence \u2013 SHA Extra Plus',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'GlowBloom',
        'Siam Thai Restaurant',
        'SIAM Phuket \u2013 Seafood Restaurant',
        'Da Mario Patong Bangla Rd',
        'Eurothai Restaurant',
        'Medusa Patong Restaurant',
      ]},
    ]
  },
  {
    id: 'abu-dhabi', name: 'Abu Dhabi', country: 'Emirados \u00C1rabes', flagCode: 'ae', countryId: 784,
    sub: 'Emirados \u00C1rabes Unidos \u00B7 Natal 2024',
    photoFolder: 'images/Abu_Dhabi/Abu_Dhabi',
    sections: [
      { title: '\uD83C\uDFD9\uFE0F Locais visitados', items: [
        'Louvre Abu Dhabi',
        'Corniche Street',
        'Corniche Beach',
        'Emirates Palace Mandarin Oriental',
        'Mesquita do Sheikh Zayed',
        'Yas Mall',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Yas Mall',
      ]},
    ]
  },
  {
    id: 'edimburgo', name: 'Edimburgo', country: 'Esc\u00F3cia', flagCode: 'gb-sct', countryId: 826,
    sub: 'Esc\u00F3cia \u00B7 Reino Unido \u00B7 Natal 2024',
    photoFolder: 'images/Edimburgo/Edimburgo',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Museum of Edinburgh',
        'George St, Castle St, Cockburn St, Victoria St',
        'Royal Mile',
        'Edinburgh Christmas Market',
        'Catedral de Santo Eg\u00EDdio',
        'Grassmarket',
        'National Museum of Scotland',
        'Castelo de Edimburgo',
        'National Galleries of Scotland',
        'Scott Monument',
        'The Balmoral',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Hotel hub by Premier Inn Edinburgh Royal Mile Hotel',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Oink Victoria Street',
        'KauKau Poke',
        'Minami',
        'Waverley Market',
        'Five Guys',
      ]},
    ]
  },
  {
    id: 'glasgow', name: 'Glasgow', country: 'Esc\u00F3cia', flagCode: 'gb-sct', countryId: 826,
    sub: 'Esc\u00F3cia \u00B7 Reino Unido \u00B7 Natal 2024',
    photoFolder: 'images/Glasgow/Glasgow',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'George Square',
        'Gallery of Modern Art',
        'Singl-end Merchant City',
        'Fellow Glasgow Residents Mural Street Art',
        'Argyle St, St Enoch Sq, Buchanan St, Sauchiehall St',
        'Kelvingrove Park, Stewart Memorial Fountain',
        'Museu e Galeria de Arte de Kelvingrove',
        'Riverside Museum',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Paesano Pizza',
        'Rice Time',
        'Akiko (vegan)',
        'Five Guys',
      ]},
    ]
  },
  {
    id: 'irlanda-dublin', name: 'Dublin', country: 'Irlanda', flagCode: 'ie', countryId: 372,
    sub: 'Irlanda \u00B7 P\u00E1scoa 2025',
    photoFolder: 'images/Dublin/Dublin',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'The Church Caf\u00E9 & Restaurant',
        'GPO Witness History Visitor Centre',
        'Monumento O\u2019Connell',
        'Trinity College',
        'Galeria Nacional da Irlanda',
        'Museu Nacional da Irlanda',
        'Grafton St, George\u2019s St',
        'Molly Malone Statue',
        'The Temple Bar',
        'Ha\u2019penny Bridge',
        'Destilaria de Old Jameson',
        'Dublinia',
        'Christ Church Cathedral',
        'Catedral St. Patrick\u2019s',
        'Castelo de Dublin',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Ruby Molly Hotel Dublin by IHG',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Temple Bar',
        'Five Guys',
        'Bunsen',
        'Wok In',
        'Japanese Kitchen by J2 Sushi',
      ]},
    ]
  },
  {
    id: 'irlanda-do-norte', name: 'Irlanda do Norte', country: 'Reino Unido', flagCode: 'gb-nir', countryId: 826,
    sub: 'Reino Unido \u00B7 P\u00E1scoa 2025',
    photoFolder: 'images/Irlanda_do_Norte/Irlanda_do_Norte',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Castelo de Dunluce',
        'Giant\u2019s Causeway',
        'Museu do Titanic',
        'Black Taxi Tour',
        'Catedral de Santa Ana',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'The Nook',
      ]},
    ]
  },
  {
    id: 'peniche', name: 'Peniche', country: 'Portugal', flagCode: 'pt', countryId: 620,
    sub: 'Portugal \u00B7 Ver\u00E3o 2025',
    photoFolder: 'images/Peniche/Peniche',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Ilha do Baleal',
        'Berlengas',
        'Museu Nacional Resistência e Liberdade (Fortaleza)',
        'Farol do Cabo Carvoeiro + Miradouro',
        'Praia do Baleal – Norte e Sul',
        'Praia da Gamboa',
        'Praia dos Supertubos',
        'Praia da Consolação',
        'Praia de Peniche de Cima',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Tasca do Joel',
        'Taberna do Ganhão',
        'Italiano O Outro',
        'Mundano Baleal',
        'Maresia',
        'Marisqueira Mirandum',
      ]},
    ]
  },
  {
    id: 'zanzibar', name: 'Zanzibar', country: 'Tanz\u00E2nia', flagCode: 'tz', countryId: 834,
    sub: 'Tanz\u00E2nia \u00B7 Ver\u00E3o 2025',
    photoFolder: 'images/Zanzibar/Zanzibar',
    sections: [
      { title: '🏝️ Locais visitados', items: [
        'Hotel Riu Jambo',
        'Kendwa Beach (Moto de água)',
        'The Lagoons Zanzibar (tartarugas)',
        'Mnemba (Sandbank + Snorkeling zone + golfinhos)',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Hotel Riu Jambo',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Maisha',
        'Il Panzotto (Italiano)',
        'Kulinarium (Gourmet / Fusão)',
        'Yunnan (Asiático)',
      ]},
    ]
  },
  {
    id: 'adis-abeba', name: 'Adis Abeba', country: 'Eti\u00F3pia', flagCode: 'et', countryId: 231,
    sub: 'Eti\u00F3pia \u00B7 Ver\u00E3o 2025',
    photoFolder: 'images/Adis_Abeba/Adis_Abeba',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Museu Nacional da Etiópia',
        'Catedral da Santíssima Trindade (Holy Trinity Cathedral)',
        'Addis Mercato (Mercato)',
        'Monte Entoto',
        'Bole Airport Roundabout',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Ethiopian Skylight Hotel',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'ADD Restaurant',
        'TinyTalian',
        'Jegol',
        'Ta\'em Cultural Restaurant',
        'Asian Bay',
      ]},
    ]
  },
  {
    id: 'porto', name: 'Porto', country: 'Portugal', flagCode: 'pt', countryId: 620,
    sub: 'Portugal \u00B7 Ver\u00E3o 2025',
    photoFolder: 'images/Porto/Porto',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Roteiro', items: [
        'Mercado do Bolh\u00E3o (seg 08h\u201320h)',
        'C\u00E2mara Municipal do Porto',
        'Avenida dos Aliados',
        'McDonald\u2019s Imperial (imperd\u00EDvel!)',
        'Esta\u00E7\u00E3o de S\u00E3o Bento',
        'S\u00E9 do Porto (catedral)',
        'Ponte Lu\u00EDs I',
        'Ribeira do Porto',
        'Igreja dos Cl\u00E9rigos + Torre dos Cl\u00E9rigos (10\u20AC, ap\u00F3s 19h s\u00E3o 5\u20AC)',
        'Livraria Lello (10\u20AC)',
        'Rua de Santa Catarina',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Yotel Porto',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Inova Trindade',
        'Bras\u00E3o Coliseu \u2014 francesinhas',
        'Casa Guedes Rooftop',
        'Cana Verde',
        'A Despensa',
        'Pizzeria Bella Mia!',
      ]},
    ]
  },
  {
    id: 'madrid', name: 'Madrid', country: 'Espanha', flagCode: 'es', countryId: 724,
    sub: 'Espanha \u00B7 Natal 2025',
    photoFolder: 'images/Madrid/Madrid',
    sections: [
      { title: '🗺️ Locais visitados', items: [
        'Templo de Debod',
        'Gran Vía',
        'Plaza del Callao',
        'C. de Preciados',
        'Puerta del Sol',
        'Plaza Mayor',
        'Catedral de Santa María a Real de la Almudena',
        'Palácio Real',
        'Mercado de São Miguel',
        'Edifício Metrópolis',
        'Parque do Retiro',
        'Estádio Santiago Bernabéu',
        'Museu do Prado',
      ]},
      { title: '🏨 Hotel', items: [
        'Hotel Riu Plaza España',
      ]},
      { title: '🍴 Restaurantes', items: [
        'Tapa Tapa Montera',
        'Grosso Napoletano',
        'Casa Garcia',
        'Chocolateria San Ginés',
        'New York Burger',
        'Scarlett Atocha',
      ]},
    ]
  },
  {
    id: 'marselha', name: 'Marselha', country: 'Fran\u00E7a', flagCode: 'fr', countryId: 250,
    sub: 'Fran\u00E7a \u00B7 P\u00E1scoa 2026',
    photoFolder: 'images/Marselha/Marselha',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Centre de la Vieille Charit\u00E9',
        'Le Panier',
        'Catedral de Marselha',
        'Landmark \u201CMarseille\u201D',
        'Le Vieux Port',
        'Pal\u00E1cio Longchamp',
        'Notre-Dame de la Garde',
        'Plage des Catalans',
        'Palais du Pharo',
        'Parc \u00C9mile Duclaux',
        'A \u201CEscadaria\u201D Art\u00EDstica: Escaliers du Cours Julien',
        'Avenida La Canebière',
      ]},
      { title: '\uD83C\uDFE8 Hotel', items: [
        'Residhome Marseille',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Splendido',
        'Black \u0026 White Burger Marseille Terrasses du Port',
        'POKAWA Poke Bowls',
        'Lunicco \u2013 Bourse',
        'Yaki\u0026Soba \u2013 Restaurant Joliette',
      ]},
    ]
  },
  {
    id: 'monaco', name: 'M\u00F3naco', country: 'M\u00F3naco', flagCode: 'mc', countryId: 492,
    sub: 'M\u00F3naco \u00B7 P\u00E1scoa 2026',
    photoFolder: 'images/Monaco/Monaco',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Pal\u00E1cio do Pr\u00EDncipe de M\u00F3naco',
        'Catedral de S\u00E3o Nicolau',
        'Vista panor\u00E2mica do M\u00F3naco, 32 Rue des Remparts',
        'Private Cars Collection of HSH Prince of Monaco',
        'Casino de Monte Carlo',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Steak \'n Shake',
        'Smash Club Monaco',
      ]},
    ]
  },
  {
    id: 'nice', name: 'Nice', country: 'Fran\u00E7a', flagCode: 'fr', countryId: 250,
    sub: 'Fran\u00E7a \u00B7 P\u00E1scoa 2026',
    photoFolder: 'images/Nice/Nice',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [
        'Avenue Jean M\u00E9decin',
        'Bas\u00EDlica Notre-Dame de l\u2019Assomption',
        'Place Mass\u00E9na',
        'Fonte do Sol',
        'Promenade du Paillon',
        'Letreiro #ILoveNICE',
      ]},
      { title: '\uD83C\uDF74 Restaurantes', items: [
        'Pitaya Tha\u00EF Street Food Nice Jean M\u00E9decin',
        'Mas Sushi \u0026 Poke Bowl',
        'Casa Leya',
      ]},
    ]
  },
  {
    id: 'belgrado', name: 'Belgrado', country: 'S\u00E9rvia', flagCode: 'rs', countryId: 688,
    sub: 'S\u00E9rvia \u00B7 Ver\u00E3o 2026',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [] },
      { title: '\uD83C\uDFE8 Hotel', items: [] },
      { title: '\uD83C\uDF74 Restaurantes', items: [] },
    ]
  },
  {
    id: 'macedonia', name: 'Maced\u00F3nia do Norte', country: 'Maced\u00F3nia do Norte', flagCode: 'mk', countryId: 807,
    sub: 'Maced\u00F3nia do Norte \u00B7 Ver\u00E3o 2026',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [] },
      { title: '\uD83C\uDFE8 Hotel', items: [] },
      { title: '\uD83C\uDF74 Restaurantes', items: [] },
    ]
  },
  {
    id: 'pristina', name: 'Pristina', country: 'Kosovo', flagCode: 'xk', countryId: 383,
    sub: 'Kosovo \u00B7 Ver\u00E3o 2026',
    sections: [
      { title: '\uD83D\uDDFA\uFE0F Locais visitados', items: [] },
      { title: '\uD83C\uDFE8 Hotel', items: [] },
      { title: '\uD83C\uDF74 Restaurantes', items: [] },
    ]
  }






];

// ─── GUIDES FUNCTIONS ─────────────────────────────────────────────────────────
function renderGuides(filter) {
  const grid = document.getElementById('guides-grid');
  if (!grid) return;
  const q = (filter || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const SOON_IDS = new Set(['belgrado', 'macedonia', 'pristina']);
  const cardHtml = g => {
    const flagHtml = g.flagCodes && g.flagCodes.length > 1
      ? g.flagCodes.map(c => `<img class="guide-card-flag" src="${getFlagSrc(c, 40)}" alt="${g.country}" onerror="this.style.display='none'" style="display:inline-block;">`).join('<span style="margin:0 3px;color:#bbb;font-size:14px;">|</span>')
      : `<img class="guide-card-flag" src="${getFlagSrc(g.flagCode, 40)}" alt="${g.country}" onerror="this.style.display='none'">`;
    return `<div class="guide-card" onclick="openGuideModal('${g.id}')">
      <div style="display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:6px;">${flagHtml}</div>
      <div class="guide-card-name">${g.name}</div>
      <div class="guide-card-sub">${g.sub}</div>
    </div>`;
  };
  // Guias principais (excluir os 3 Balcãs)
  const filtered = GUIDES_DATA.filter(g => {
    if (SOON_IDS.has(g.id)) return false;
    if (!q) return true;
    const hay = (g.name + g.country + g.sub).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return hay.includes(q);
  });
  grid.innerHTML = filtered.map(cardHtml).join('') || `<div style="padding:30px;text-align:center;color:var(--muted);font-size:13px;grid-column:1/-1">\uD83D\uDD0D Nenhum guia encontrado</div>`;
  // Secção "Em breve" — apenas os 3 Balcãs, filtrada pela pesquisa
  const soonGrid = document.getElementById('guides-soon-grid');
  const soonSection = document.getElementById('guides-soon-section');
  if (soonGrid && soonSection) {
    const soonFiltered = GUIDES_DATA.filter(g => {
      if (!SOON_IDS.has(g.id)) return false;
      if (!q) return true;
      const hay = (g.name + g.country + g.sub).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return hay.includes(q);
    });
    // Países dinâmicos sem guia
    const dynamicSoonCards = [...soonCountriesNumeric].map(id => {
      id = +id;
      const name = WORLD_NAMES[id] || `Pa\u00EDs ${id}`;
      const code = FLAG_CODES[id] || NUM_TO_CODE[id] || '';
      if (!q || name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(q)) {
        const flagUrl = code ? `https://flagcdn.com/w40/${code}.png` : '';
        return `<div class="guide-card" style="opacity:0.7">
          <img class="guide-card-flag" src="${flagUrl}" alt="${name}" onerror="this.style.display='none'">
          <div class="guide-card-name">${name}</div>
          <div class="guide-card-sub">Guia em prepara\u00E7\u00E3o...</div>
        </div>`;
      }
      return '';
    }).filter(Boolean);
    soonGrid.innerHTML = soonFiltered.map(cardHtml).join('') + dynamicSoonCards.join('');
    soonSection.style.display = (soonFiltered.length || dynamicSoonCards.length) ? '' : 'none';
  }
}

function filterGuides(q) { renderGuides(q); }

// ─── AUTO-DETECTAR FOTOS DE UM GUIA (convenção de nomes, máx 50) ─────────────
function loadGuidePhotosBackground(guide, onComplete) {
  // Carregar fotos em background uma a uma — sem bloquear a abertura do guia
  if (!guide.photoFolder) return;
  guide.photos = [];
  guide._photosLoading = true;

  let errors = 0;
  const MAX = 50;

  const checkNext = (i) => {
    if (i > MAX) { guide._photosLoading = false; if (onComplete) onComplete(guide.photos.slice()); return; }
    const src = `${guide.photoFolder}_${String(i).padStart(3, '0')}.jpg`;
    const img = new Image();
    img.onload = () => {
      guide.photos.push(src);
      errors = 0;
      if (onComplete) onComplete(guide.photos.slice()); // progressivo — notifica a cada foto
      checkNext(i + 1);
    };
    img.onerror = () => {
      errors++;
      if (errors >= 3) {
        guide._photosLoading = false;
        return;
      }
      checkNext(i + 1);
    };
    img.src = src;
  };
  checkNext(1);
}

async function loadGuidePhotos(guide) {
  if (guide.photos !== undefined) return guide.photos; // já carregadas ou a carregar
  guide.photos = [];
  return guide.photos;
}

async function openGuideModal(guideId) {
  const guide = GUIDES_DATA.find(g => g.id === guideId);
  if (!guide) return;
  // Abrir o modal imediatamente — sem esperar pelas fotos
  document.getElementById('guide-modal-title').textContent = guide.name;
  const flagEl = document.getElementById('guide-modal-flag');
  if (guide.flagCodes && guide.flagCodes.length > 1) {
    flagEl.style.display = 'none';
    let multiFlags = document.getElementById('guide-modal-flags-extra');
    if (!multiFlags) {
      multiFlags = document.createElement('span');
      multiFlags.id = 'guide-modal-flags-extra';
      flagEl.parentNode.insertBefore(multiFlags, flagEl);
    }
    multiFlags.innerHTML = guide.flagCodes.map(c =>
      `<img src="${getFlagSrc(c, 40)}" alt="${guide.country}" style="height:20px;border-radius:2px;vertical-align:middle;">`
    ).join('<span style="margin:0 3px;color:#bbb;font-size:18px;line-height:20px;vertical-align:middle;">|</span>');
  } else {
    flagEl.style.display = '';
    const extra = document.getElementById('guide-modal-flags-extra');
    if (extra) extra.innerHTML = '';
    flagEl.src = getFlagSrc(guide.flagCode, 40);
    flagEl.alt = guide.country;
  }

  const body = document.getElementById('guide-modal-body');

  // Função para gerar HTML das miniaturas
  const buildThumbsHtml = (photos) => {
    if (!photos || photos.length === 0) return '';
    const thumbs = photos.map((src, i) =>
      `<img src="${src}" alt="${guide.name} ${i+1}" loading="lazy"
        onclick="openGuidePhotoFull('${guide.id}',${i})"
        style="width:144px;height:120px;object-fit:cover;border-radius:8px;cursor:zoom-in;flex-shrink:0;transition:opacity .15s;"
        onmouseover="this.style.opacity='.75'" onmouseout="this.style.opacity='1'">`
    ).join('');
    const hasSetas = photos.length > 4;
    return `
      <div style="position:relative;margin-bottom:16px;display:flex;align-items:center;gap:4px;">
        ${hasSetas ? `<button onclick="guideThumbScroll('guide-thumbs-${guide.id}',-1)" style="background:rgba(0,0,0,0.12);border:none;border-radius:50%;width:26px;height:26px;font-size:16px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#555;">‹</button>` : ''}
        <div id="guide-thumbs-${guide.id}" style="display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;flex:1;">${thumbs}</div>
        ${hasSetas ? `<button onclick="guideThumbScroll('guide-thumbs-${guide.id}',1)" style="background:rgba(0,0,0,0.12);border:none;border-radius:50%;width:26px;height:26px;font-size:16px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#555;">›</button>` : ''}
      </div>`;
  };

  const renderBody = (photos) => {
    const photosHtml = buildThumbsHtml(photos);
    body.innerHTML = `
      ${photosHtml}
      <div style="font-size:11px;color:var(--muted);margin-bottom:12px;">${guide.sub}</div>
      ${guide.sections.map(s => `
        <div class="guide-all-section">
          <div class="guide-all-section-title">${s.title}</div>
          ${s.items.map(item => `<div class="guide-item"><span class="guide-item-num">\u2022</span><span>${item}</span></div>`).join('')}
        </div>
      `).join('')}
    `;
    body.scrollTop = 0;
  };

  // Renderizar imediatamente (sem fotos ou com fotos já em cache)
  renderBody(guide.photos || []);
  const modal = document.getElementById('guide-modal');
  modal.dataset.activeGuide = guide.id;
  modal.classList.add('on');
  document.getElementById('backdrop').classList.add('on');

  // Se tem pasta de fotos e ainda não foram carregadas, carregar em background
  if (guide.photoFolder && (!guide.photos || guide.photos.length === 0)) {
    loadGuidePhotosBackground(guide, (photos) => {
      // Cancelar se o modal foi fechado OU se já abriu outro guia entretanto
      if (!modal.classList.contains('on') || modal.dataset.activeGuide !== guide.id) return;
      // Actualizar o bloco de thumbs — substituir no lugar sem duplicar
      const thumbsWrap = document.getElementById('guide-thumbs-' + guide.id);
      if (thumbsWrap) {
        // Já existe — actualizar as imgs dentro
        const newThumbsHtml = buildThumbsHtml(photos);
        const container = thumbsWrap.closest('div[style*="position:relative"]');
        if (container) container.outerHTML = newThumbsHtml;
      } else {
        // Ainda não existe — inserir no topo do body
        const newThumbsHtml = buildThumbsHtml(photos);
        if (newThumbsHtml) body.insertAdjacentHTML('afterbegin', newThumbsHtml);
      }
    });
  }

}

function closeGuideModal(evt) {
  if (evt && evt.target !== document.getElementById('guide-modal')) return;
  document.getElementById('guide-modal').classList.remove('on');
  document.getElementById('backdrop').classList.remove('on');
}

document.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape') return;
  // Só fechar o guide-modal se o slideshow (vb-overlay) não estiver aberto
  if (document.querySelector('.vb-overlay')) return;
  const modal = document.getElementById('guide-modal');
  if (modal && modal.classList.contains('on')) {
    modal.classList.remove('on');
    document.getElementById('backdrop').classList.remove('on');
  }
});

function guideThumbScroll(id, dir) {
  const el = document.getElementById(id);
  if (el) el.scrollBy({ left: dir * 160, behavior: 'smooth' });
}

function openGuidePhotoFull(guideId, startIdx) {
  const guide = GUIDES_DATA.find(g => g.id === guideId);
  if (!guide || !guide.photos || guide.photos.length === 0) return;
  const photos = guide.photos;
  let cur = startIdx;
  let animating = false;

  if (!document.getElementById('vb-slider-style')) {
    const st = document.createElement('style');
    st.id = 'vb-slider-style';
    st.textContent = `
      .vb-overlay {
        position:fixed;inset:0;z-index:9999;
        background:rgba(8,6,3,0.97);
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        font-family:'Outfit',sans-serif;
      }
      .vb-viewport {
        position:relative;
        width:88vw;
        height:80vh;
        overflow:hidden;
      }
      .vb-track {
        position:absolute;top:0;left:0;
        display:flex;
        height:100%;
        will-change:transform;
      }
      .vb-track.animating {
        transition:transform .9s cubic-bezier(.4,0,.2,1);
      }
      .vb-slide {
        flex:0 0 88vw;
        height:100%;
        display:flex;align-items:center;justify-content:center;
      }
      .vb-slide img {
        max-width:100%;
        max-height:100%;
        object-fit:contain;
        border-radius:6px;
        display:block;
        box-shadow:0 24px 60px rgba(0,0,0,0.75);
        user-select:none;
        pointer-events:none;
        -webkit-user-drag:none;
      }
      .vb-dots { display:flex;gap:7px;margin-top:20px;align-items:center;justify-content:center; }
      .vb-dot  { width:14px;height:14px;border-radius:50%;cursor:pointer;transition:background .32s; }
      .vb-arr {
        position:absolute;top:50%;transform:translateY(-50%);
        background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);
        border-radius:50%;width:46px;height:46px;color:white;
        font-size:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;
        transition:background .15s;z-index:10;user-select:none;
      }
      .vb-arr:hover { background:rgba(255,255,255,0.2); }
    `;
    document.head.appendChild(st);
  }

  const overlay = document.createElement('div');
  overlay.className = 'vb-overlay';

  // Barra top
  const topBar = document.createElement('div');
  topBar.style.cssText = 'position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:14px 22px;z-index:30;background:linear-gradient(to bottom,rgba(0,0,0,0.5),transparent);';
  const titleEl = document.createElement('div');
  titleEl.style.cssText = 'color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:500;';
  titleEl.textContent = guide.name;
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&#x2715;';
  closeBtn.style.cssText = 'background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.16);border-radius:50%;width:34px;height:34px;color:white;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s;';
  closeBtn.onmouseover = () => closeBtn.style.background = 'rgba(255,255,255,0.24)';
  closeBtn.onmouseout  = () => closeBtn.style.background = 'rgba(255,255,255,0.1)';
  topBar.append(titleEl, closeBtn);

  // Viewport
  const viewport = document.createElement('div');
  viewport.className = 'vb-viewport';

  const track = document.createElement('div');
  track.className = 'vb-track';

  // Construir 3 slides: prev | cur | next
  const buildSlides = () => {
    track.innerHTML = '';
    const idxs = [
      (cur - 1 + photos.length) % photos.length,
      cur,
      (cur + 1) % photos.length,
    ];
    idxs.forEach(i => {
      const slide = document.createElement('div');
      slide.className = 'vb-slide';
      const img = document.createElement('img');
      img.src = photos[i];
      slide.appendChild(img);
      track.appendChild(slide);
    });
    // Posicionar no slide central (índice 1), SEM transição
    track.classList.remove('animating');
    track.style.transform = `translateX(-88vw)`;
  };

  buildSlides();
  viewport.appendChild(track);

  // Setas
  const prevBtn = document.createElement('button');
  prevBtn.className = 'vb-arr';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.style.left = '10px';
  const nextBtn = document.createElement('button');
  nextBtn.className = 'vb-arr';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.style.right = '10px';
  viewport.append(prevBtn, nextBtn);

  // Dots
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'vb-dots';
  const updateDots = () => {
    dotsWrap.innerHTML = '';
    photos.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'vb-dot';
      d.style.background = i === cur ? 'var(--gold,#c9951a)' : 'rgba(255,255,255,0.25)';
      d.onclick = () => { if (!animating && i !== cur) goTo(i); };
      dotsWrap.appendChild(d);
    });
  };
  updateDots();

  const go = (dir) => {
    if (animating || photos.length <= 1) return;
    animating = true;

    // Deslizar para o slide anterior (dir=-1) ou seguinte (dir=1)
    const targetX = dir > 0 ? '-176vw' : '0vw';
    track.classList.add('animating');
    track.style.transform = `translateX(${targetX})`;

    setTimeout(() => {
      cur = (cur + dir + photos.length) % photos.length;
      buildSlides();  // reposicionar sem animação
      updateDots();
      animating = false;
    }, 920);
  };

  // Saltar diretamente para qualquer foto sem animação de slide
  const goTo = (idx) => {
    if (animating || idx === cur || photos.length <= 1) return;
    cur = ((idx % photos.length) + photos.length) % photos.length;
    buildSlides();
    updateDots();
  };

  prevBtn.onclick = () => go(-1);
  nextBtn.onclick = () => go(1);

  // Teclado
  const onKey = e => {
    if (e.key === 'ArrowLeft')  go(-1);
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'Escape')     destroy();
  };
  document.addEventListener('keydown', onKey);

  // Swipe
  let _tx = null;
  overlay.addEventListener('touchstart', e => { _tx = e.touches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', e => {
    if (_tx === null) return;
    const dx = e.changedTouches[0].clientX - _tx;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    _tx = null;
  });

  const destroy = () => { overlay.remove(); document.removeEventListener('keydown', onKey); };
  closeBtn.onclick = destroy;
  overlay.addEventListener('click', e => { if (e.target === overlay) destroy(); });

  overlay.append(topBar, viewport, dotsWrap);
  document.body.appendChild(overlay);
}





function openGuideFromSheet(guideId) {
  closeAll();
  setTimeout(() => openGuideModal(guideId), 80);
}
async function _init() {
  await loadState();

  // Show storage indicator
  const ind = document.getElementById('storage-indicator');
  if (ind) {
    const hasCloud = typeof window !== 'undefined' && window.storage && typeof window.storage.set === 'function';
    let hasLocal = false;
    try { localStorage.setItem('__vb_t','1'); localStorage.removeItem('__vb_t'); hasLocal = true; } catch(e) {}
    if (hasCloud) ind.textContent = '\u2601\uFE0F guardado na nuvem';
    else if (hasLocal) ind.textContent = '\uD83D\uDCBE guardado neste browser';
    else ind.textContent = '\u26A0\uFE0F sem armazenamento persistente';
  }

  updateStats();
  await initMap();  // aguarda mapa pronto antes de injetar bandeiras
  renderPinsList();
  initSearch();
  renderFlagStrip();
  renderGuides();
  renderWishChips();  // garantir que wishlist aparece no tab países por continente
  document.body.classList.add('tab-mapa-active'); // mapa é o tab inicial
  window.scrollTo(0, 0); // garantir que o mapa começa no topo

  // Injetar bandeiras no mapa para pins guardados anteriormente
  // (addFlagToMap só funciona após initMap, por isso fazemos aqui)
  requestAnimationFrame(() => {
    pins.filter(p => p.type === 'pin-visited' && p.countryId).forEach(pin => {
      addFlagToMap(pin);
    });
  });
}

// Mostrar chips futuros apenas após a data de disponibilidade
(function() {
  const today = new Date();
  document.querySelectorAll('.future-chip').forEach(function(chip) {
    const available = new Date(chip.dataset.available);
    if (today < available) {
      chip.style.display = 'none';
    }
  });
  document.querySelectorAll('.tl-future').forEach(function(el) {
    const available = new Date(el.dataset.available);
    if (today < available) {
      el.style.display = 'none';
    }
  });
  // Actualizar contagem Europa dinamicamente
  const cutoff = new Date('2026-08-25');
  const lblEuropa = document.getElementById('lbl-europa');
  if (lblEuropa) {
    const count = today >= cutoff ? 28 : 25;
    lblEuropa.textContent = 'Europa \u00B7 ' + count + ' pa\u00EDses/territ\u00F3rios';
  }
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _init);
} else {
  _init();
}

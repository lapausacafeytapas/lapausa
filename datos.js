// 📋 ARCHIVO DE GESTIÓN DE PRODUCTOS Y CONFIGURACIÓN - EDITA FÁCILMENTE AQUÍ
// ============================================================

// ⚙️ CONFIGURACIÓN GENERAL DEL RESTAURANTE
const CONFIG = {
  nombre: "La PAUsa",
  ubicacion: "Avenida Real de Madrid 57, 46017 Valencia, España",
  coordenadas: {
    lat: 39.4327179748581,
    lng: -0.3915065557790821
  },
  telefono: "34666840005",
  instagram: "https://www.instagram.com/la_pausa_cafe_y_tapas?igsh=ZXNxNm5uNjl4MDl5",
  facebook: "https://www.facebook.com/share/1KVNyzWesu/"
};

const PRODUCTOS = {
  cafes: [
    { nombre: "Espresso", descripcion: "", precio: "1,30", alergenos: "", por_unidad: false },
    { nombre: "Cortado", descripcion: "", precio: "1,50", alergenos: "L", por_unidad: false },
    { nombre: "Café con leche", descripcion: "", precio: "1,70", alergenos: "L", por_unidad: false },
    {
      nombre: "Infusión",
      descripcion: "Manzanilla, Poleo, Frutos rojos, Rooibos, Té rojo, Té verde, Té earl grey y Té english breakfast",
      precio: "1,70",
      alergenos: "",
      por_unidad: false
    },
    { nombre: "Carajillo", descripcion: "", precio: "1,80", alergenos: "SU", por_unidad: false },
    { nombre: "Capuccino", descripcion: "", precio: "2,00", alergenos: "L", por_unidad: false },
    { nombre: "Nesquik", descripcion: "", precio: "1,80", alergenos: "L", por_unidad: false },
    { nombre: "Suplemento del tiempo", descripcion: "", precio: "0,20", alergenos: "", por_unidad: false }
  ],

  desayunos: [
    {
      nombre: "Tostada tradicional",
      descripcion: "Aceite, tomate o mantequilla y mermelada.",
      precio: "2,80",
      alergenos: "G,L",
      por_unidad: false
    },
    {
      nombre: "Tostada especial",
      descripcion: "Tomate con atún, tomate con jamón, queso crema y salmón ahumado.",
      precio: "3,80",
      alergenos: "G,L,P",
      por_unidad: false
    },
    { nombre: "Desayuno dulce", descripcion: "Una pieza de bollería dulce.", precio: "2,80", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Desayuno salado", descripcion: "Una pieza de bollería salada.", precio: "3,20", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Suplemento zumo de naranja natural", descripcion: "Producto de temporada.", precio: "1,50", alergenos: "", por_unidad: false }
  ],

  almuerzos: [
    { nombre: "Bocadillo del día", descripcion: "Nuestra propuesta de hoy.", precio: "6,50", alergenos: "G", por_unidad: false },
    { nombre: "Bocadillo de carta", descripcion: "Elige uno de la lista.", precio: "7,50", alergenos: "G", por_unidad: false },
    { nombre: "Suplemento Tercio de cerveza", descripcion: "Amstel, Mahou o Cruzcampo.", precio: "0,50", alergenos: "G", por_unidad: false },
    { nombre: "Suplemento Cremaet", descripcion: "", precio: "1,00", alergenos: "SU", por_unidad: false }
  ],

  bocadillosdecarta: [
    { nombre: "Pau", descripcion: "Lomo, queso, bacon y huevo frito.", precio: "", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Chivito", descripcion: "Lomo/pechuga, bacon, queso, tomate, lechuga, huevo y mayonesa.", precio: "", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Brascada", descripcion: "Ternera, jamón y cebolla caramelizada.", precio: "", alergenos: "G", por_unidad: false },
    { nombre: "Vegetal", descripcion: "Lechuga, tomate, mahonesa, atún, aceitunas y huevo duro.", precio: "", alergenos: "G,H,P", por_unidad: false },
    { nombre: "Almussafes", descripcion: "Sobrasada, queso y cebolla caramelizada.", precio: "", alergenos: "G,L", por_unidad: false },
    { nombre: "El pecador", descripcion: "Chistorra con patatas y huevo frito.", precio: "", alergenos: "G,H", por_unidad: false },
    { nombre: "Clásico", descripcion: "Tortilla de patata con mahonesa/ajoaceite.", precio: "", alergenos: "G,H", por_unidad: false },
    { nombre: "El de la Terreta", descripcion: "Longanizas con patatas.", precio: "", alergenos: "G", por_unidad: false },
    { nombre: "Manchego", descripcion: "Oreja a la plancha con salsa mery.", precio: "", alergenos: "G,MO", por_unidad: false },
    { nombre: "Pastor", descripcion: "Bacon, queso de cabra y pimientos verdes.", precio: "", alergenos: "G,L", por_unidad: false },
    { nombre: "Blanc i negre", descripcion: "Longaniza con morcilla.", precio: "", alergenos: "G", por_unidad: false },
    { nombre: "Francés", descripcion: "Tomate, tortilla francesa y jamón.", precio: "", alergenos: "G,H", por_unidad: false },
    { nombre: "Sándwich mixto", descripcion: "", precio: "", alergenos: "G,L", por_unidad: false },
    { nombre: "Sándwich vegetal", descripcion: "Lechuga, tomate, mahonesa, atún, aceitunas y huevo duro.", precio: "", alergenos: "G,H,P", por_unidad: false }
  ],

  menudeldia: [
    { nombre: "Menú completo", descripcion: "Incluye, primero, segundo, bebida, postre y café", precio: "13,00", alergenos: "", por_unidad: false },
    { nombre: "Medio menú", descripcion: "Incluye un primero/segundo, bebida, postre y café", precio: "11,00", alergenos: "", por_unidad: false },
    { nombre: "Plato único", descripcion: "Incluye un primero / segundo, bebida y café", precio: "10,00", alergenos: "", por_unidad: false },
    { nombre: "Suplemento Tercio de cerveza (Amstel, Cruzcampo)", descripcion: "", precio: "0,50", alergenos: "", por_unidad: false },
    { nombre: "Suplemento Cremaet", descripcion: "", precio: "1,00", alergenos: "", por_unidad: false }
  ],

  tardes: [
    { nombre: "Tostada tradicional", descripcion: "Merienda.", precio: "1,80", alergenos: "G", por_unidad: false },
    { nombre: "Bollería dulce", descripcion: "Merienda.", precio: "1,50", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Bollería salada", descripcion: "Merienda.", precio: "1,80", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Gofre con Nutella", descripcion: "Merienda.", precio: "4,00", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Gofre con Nutella y helado", descripcion: "Merienda.", precio: "5,50", alergenos: "G,L,H", por_unidad: false },
    { nombre: "Helado de 1 bola", descripcion: "Merienda.", precio: "2,80", alergenos: "L", por_unidad: false }
  ],

  viernesysabado: [
    { nombre: "Mix de lechugas con queso de cabra, bacon, nueces, pipas y manzana", descripcion: "", precio: "9,00", alergenos: "L,FC,SE", por_unidad: false },
    { nombre: "Melón, crujiente de jamón, lechuga, aceitunas negras y semillas", descripcion: "", precio: "9,50", alergenos: "SE", por_unidad: false },
    { nombre: "Bravas", descripcion: "", precio: "6,00", alergenos: "H,MO", por_unidad: false },
    { nombre: "Revuelto de trilogía de setas.", descripcion: "", precio: "5,50", alergenos: "H,L", por_unidad: false },
    { nombre: "Alcachofas confitadas con crujiente de jamón (2 ud)", descripcion: "", precio: "6,00", alergenos: "", por_unidad: false },
    { nombre: "Torrezno", descripcion: "", precio: "7,00", alergenos: "", por_unidad: false },
    { nombre: "Croquetas", descripcion: "Jamón. Manzana y queso gorgonzola. Guarra y miel.", precio: "2,20", alergenos: "G,L,H", por_unidad: true },
    { nombre: "Calamar a la andaluza", descripcion: "", precio: "12,50", alergenos: "G,M", por_unidad: false },
    { nombre: "Sepia a la plancha con salsa mery", descripcion: "", precio: "12,00", alergenos: "M,MO", por_unidad: false },
    { nombre: "Huevos rotos con sobrasada y miel", descripcion: "", precio: "7,50", alergenos: "H", por_unidad: false },
    { nombre: "Huevos rotos con crujiente de jamón", descripcion: "", precio: "7,50", alergenos: "H", por_unidad: false },
    { nombre: "Choricitos a la sidra", descripcion: "", precio: "7,75", alergenos: "SU", por_unidad: false },
    { nombre: "Dados de solomillo de cerdo con reducción de Pedro Ximénez", descripcion: "", precio: "9,00", alergenos: "SU", por_unidad: false },
    { nombre: "Tellinas", descripcion: "", precio: "13,00", alergenos: "M", por_unidad: false },
    { nombre: "Fritura de boquerones", descripcion: "", precio: "6,50", alergenos: "G,P", por_unidad: false },
    { nombre: "Pechuga rebozada con guarnición de patatas fritas", descripcion: "", precio: "7,00", alergenos: "G,H", por_unidad: false },
    {
      nombre: "Trío de creps",
      descripcion: "Crep de espinacas relleno de queso de cabra, nueces y miel. Crep de zanahoria relleno de jamón y queso emmental. Crep de remolacha relleno de pollo al curry.",
      precio: "12,75",
      alergenos: "G,L,H,FC,MO",
      por_unidad: false
    },
    {
      nombre: "Pan en aceite de oliva virgen extra",
      descripcion: "",
      precio: "0,75",
      alergenos: "G",
      por_unidad: true,
      tipo_precio: "pax"
    }
  ],

  bebidas: {
    refrescos: [
      { nombre: "Agua pequeña", descripcion: "", precio: "1,00", alergenos: "", por_unidad: false },
      { nombre: "Agua grande", descripcion: "", precio: "1,50", alergenos: "", por_unidad: false },
      { nombre: "Agua de cristal 0,5 L", descripcion: "", precio: "1,50", alergenos: "", por_unidad: false },
      { nombre: "Agua de cristal 1L", descripcion: "", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Coca Cola", descripcion: "Original, Zero y Zero Zero", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Fanta", descripcion: "Limón y Naranja", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Aquarius", descripcion: "Limón, Naranja y Melocotón", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Fuze Tea", descripcion: "Limón, Té verde con maracuya y Mango con piña", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Tónica", descripcion: "", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Sprite", descripcion: "", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Bitter", descripcion: "", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "AppLetiser", descripcion: "", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Ironic Lemon", descripcion: "", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Zumo Pago", descripcion: "Melocotón, Piña y Tomate", precio: "2,00", alergenos: "", por_unidad: false },
      { nombre: "Zumo Naranja natural", descripcion: "Producto de temporada", precio: "3,75", alergenos: "", por_unidad: false }
    ],

    cervezas: [
      { nombre: "Caña Aguila Dorada", descripcion: "", precio: "1,50", alergenos: "G", por_unidad: false },
      { nombre: "Doble Águila Dorada", descripcion: "", precio: "2,00", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Amstel", descripcion: "", precio: "2,20", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Cruzcampo Radler", descripcion: "", precio: "2,20", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Cruzcampo Especial", descripcion: "", precio: "2,20", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Aguila sin filtrar", descripcion: "", precio: "2,50", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Aguila Dorada", descripcion: "", precio: "2,30", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Heineken", descripcion: "", precio: "2,20", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Heineken 0'0", descripcion: "", precio: "2,20", alergenos: "G", por_unidad: false },
      { nombre: "1/5 Estrella Galicia", descripcion: "", precio: "1,50", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Estrella Galicia", descripcion: "", precio: "2,20", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Estrella Galicia 0'0", descripcion: "", precio: "2,20", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Estrella Galicia 0'0 tostada", descripcion: "", precio: "2,30", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Estrella Galicia sin gluten", descripcion: "", precio: "2,30", alergenos: "", por_unidad: false },
      { nombre: "1/3 Amstel Oro", descripcion: "", precio: "2,50", alergenos: "G", por_unidad: false },
      { nombre: "1/3 El Alcazar", descripcion: "", precio: "2,80", alergenos: "G", por_unidad: false },
      { nombre: "1/3 Alhambra 1925", descripcion: "", precio: "2,80", alergenos: "G", por_unidad: false },
      { nombre: "Ladrón de verano", descripcion: "", precio: "2,00", alergenos: "", por_unidad: false }
    ],

    tintos: [
      { nombre: "Copas de vino", descripcion: "", precio: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Copa vino tinto Bocabadat D.O Valencia", descripcion: "Tempranillo", precio: "3,00", alergenos: "SU", por_unidad: false },
      { nombre: "Copa vino blanco Bocabadat D.O Alicante", descripcion: "Macabeo", precio: "3,00", alergenos: "SU", por_unidad: false },
      { nombre: "Vino Tinto", descripcion: "", precio: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Bocabadat", descripcion: "D.O. Valencia (Tempranillo)", precio: "13,00", alergenos: "SU", por_unidad: false },
      { nombre: "Nebral", descripcion: "D.O. Ribera del Duero (Tinta fina)", precio: "15,00", alergenos: "SU", por_unidad: false },
      { nombre: "Azpilicueta Crianza", descripcion: "D.O. Rioja (Tempranillo)", precio: "15,50", alergenos: "SU", por_unidad: false },
      { nombre: "Vino Blanco", descripcion: "", precio: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Bocabadat", descripcion: "D.O. Alicante (Macabeo)", precio: "13,00", alergenos: "SU", por_unidad: false },
      { nombre: "Marqués de Vizhoja", descripcion: "D.O. Rias Baixas (Albariño, Teixadura y Loureiro)", precio: "14,00", alergenos: "SU", por_unidad: false },
      { nombre: "Rey Santo", descripcion: "D.O.Rueda (Verdejo)", precio: "15,00", alergenos: "SU", por_unidad: false },
      { nombre: "Vino Rosado", descripcion: "", precio: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Alquézar aguja natural", descripcion: "D.O.Somontano (Tempranillo y garnacha)", precio: "15,00", alergenos: "SU", por_unidad: false }
    ],

    copas: [
      { nombre: "Licores", descripcion: "", precio_chupito: "", precio_copa: "", precio_combinado: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Terry", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "", por_unidad: false },
      { nombre: "Cazalla", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "", por_unidad: false },
      { nombre: "Mistela", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "SU", por_unidad: false },
      { nombre: "Limoncello", descripcion: "", precio_chupito: "2,00", precio_copa: "3,50", precio_combinado: "", alergenos: "", por_unidad: false },
      { nombre: "Bayleis", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "L", por_unidad: false },
      { nombre: "Crema de arroz con leche", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "L", por_unidad: false },
      { nombre: "Crema de fresa con Tequila", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "L", por_unidad: false },
      { nombre: "Tequila", descripcion: "", precio_chupito: "1,50", precio_copa: "4,00", precio_combinado: "6,00", alergenos: "", por_unidad: false },
      { nombre: "Crema de orujo", descripcion: "", precio_chupito: "2,00", precio_copa: "4,00", precio_combinado: "", alergenos: "L", por_unidad: false },
      { nombre: "Orujo de hierbas", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "", por_unidad: false },
      { nombre: "Anís", descripcion: "", precio_chupito: "1,50", precio_copa: "3,50", precio_combinado: "", alergenos: "", por_unidad: false },
      { nombre: "Licor de Mora sin alcohol", descripcion: "", precio_chupito: "1,50", precio_copa: "3,00", precio_combinado: "", alergenos: "", por_unidad: false },
      { nombre: "Ginebra", descripcion: "", precio_chupito: "", precio_copa: "", precio_combinado: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Seagrams", descripcion: "", precio_chupito: "2,50", precio_copa: "6,00", precio_combinado: "8,50", alergenos: "", por_unidad: false },
      { nombre: "Seagrams 0,0 sin alcohol", descripcion: "", precio_chupito: "2,50", precio_copa: "6,00", precio_combinado: "8,50", alergenos: "", por_unidad: false },
      { nombre: "Tanqueray", descripcion: "", precio_chupito: "2,50", precio_copa: "6,00", precio_combinado: "8,50", alergenos: "", por_unidad: false },
      { nombre: "Puerto de Indias", descripcion: "", precio_chupito: "2,50", precio_copa: "6,00", precio_combinado: "8,50", alergenos: "", por_unidad: false },
      { nombre: "Nordes", descripcion: "", precio_chupito: "3,00", precio_copa: "7,50", precio_combinado: "11,00", alergenos: "", por_unidad: false },
      { nombre: "Botanical", descripcion: "", precio_chupito: "3,50", precio_copa: "9,00", precio_combinado: "11,00", alergenos: "", por_unidad: false },
      { nombre: "Ron", descripcion: "", precio_chupito: "", precio_copa: "", precio_combinado: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Negrita", descripcion: "", precio_chupito: "1,50", precio_copa: "3,50", precio_combinado: "7,00", alergenos: "", por_unidad: false },
      { nombre: "Negrita blanco", descripcion: "", precio_chupito: "1,50", precio_copa: "3,50", precio_combinado: "7,00", alergenos: "", por_unidad: false },
      { nombre: "Barceló", descripcion: "", precio_chupito: "2,50", precio_copa: "6,00", precio_combinado: "8,50", alergenos: "", por_unidad: false },
      { nombre: "Vodka", descripcion: "", precio_chupito: "", precio_copa: "", precio_combinado: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Absolut", descripcion: "", precio_chupito: "2,50", precio_copa: "6,00", precio_combinado: "8,50", alergenos: "", por_unidad: false },
      { nombre: "Whisky", descripcion: "", precio_chupito: "", precio_copa: "", precio_combinado: "", alergenos: "", por_unidad: false, es_tipo: true },
      { nombre: "Cutty Shark", descripcion: "", precio_chupito: "2,00", precio_copa: "4,00", precio_combinado: "7,00", alergenos: "", por_unidad: false },
      { nombre: "Johnnie Walker Red Label", descripcion: "", precio_chupito: "2,50", precio_copa: "6,00", precio_combinado: "9,00", alergenos: "", por_unidad: false },
      { nombre: "Johnnie Walker Black Label", descripcion: "", precio_chupito: "3,50", precio_copa: "7,50", precio_combinado: "11,00", alergenos: "", por_unidad: false }
    ],

    combinados: []
  }
};

// CÓDIGOS DE ALÉRGENOS
const ALERGENOS = {
  G: "🌾 Gluten",
  H: "🥚 Huevo",
  L: "🥛 Leche",
  FC: "🥜 Frutos de cáscara",
  C: "🥜 Cacahuetes",
  S: "🌱 Soja",
  P: "🐟 Pescado",
  CR: "🦐 Crustáceos",
  M: "🦑 Moluscos",
  MO: "🌭 Mostaza",
  SE: "🌾 Sésamo",
  A: "🥬 Apio",
  SU: "🧂 Sulfitos",
  AL: "🌾 Altramuces"
};

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
    {
      nombre: "Espresso",
      descripcion: "",
      precio: "1,30",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Cortado",
      descripcion: "",
      precio: "1,50",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Café con leche",
      descripcion: "",
      precio: "1,70",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Capuccino",
      descripcion: "",
      precio: "2,00",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Carajillo",
      descripcion: "",
      precio: "1,80",
      alergenos: "SU",
      por_unidad: false
    },
    {
      nombre: "Cremaet",
      descripcion: "",
      precio: "2,20",
      alergenos: "SU",
      por_unidad: false
    },
    {
      nombre: "Infusión",
      descripcion: "",
      precio: "1,70",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Suplemento del tiempo",
      descripcion: "",
      precio: "0,20",
      alergenos: "",
      por_unidad: false
    }
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
      descripcion: "Tomate con atún, tomate con jamón, tomate con queso fresco y anchoas, queso crema y salmón ahumado.",
      precio: "3,80",
      alergenos: "G,L,P",
      por_unidad: false
    },
    {
      nombre: "Desayuno dulce",
      descripcion: "Una pieza de bollería dulce.",
      precio: "2,80",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Desayuno salado",
      descripcion: "Una pieza de bollería salada.",
      precio: "3,20",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Suplemento zumo de naranja natural",
      descripcion: "Complemento para desayuno.",
      precio: "1,50",
      alergenos: "",
      por_unidad: false
    }
  ],

  almuerzos: [
    {
      nombre: "Bocadillo del día",
      descripcion: "Nuestra propuesta de hoy.",
      precio: "7,00",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Bocadillo de carta",
      descripcion: "Elige uno de la lista.",
      precio: "8,00",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Suplemento Tercio de cerveza",
      descripcion: "Amstel, Heineken o Estrella Galicia.",
      precio: "0,50",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Suplemento Cremaet",
      descripcion: "Complemento para almuerzo.",
      precio: "1,00",
      alergenos: "SU",
      por_unidad: false
    },
    {
      nombre: "Gasto",
      descripcion: "Si estás trabajando, trae tu bocadillo. Incluye una bebida y café.",
      precio: "3,00",
      alergenos: "",
      por_unidad: false
    }
  ],

  bocadillosdecarta: [
    {
      nombre: "Pau",
      descripcion: "Lomo, queso, bacon y huevo frito.",
      precio: "",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Chivito",
      descripcion: "Lomo/pechuga, bacon, queso, tomate, lechuga, huevo y mayonesa.",
      precio: "",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Brascada",
      descripcion: "Ternera, jamón y cebolla caramelizada.",
      precio: "",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Vegetal",
      descripcion: "Lechuga, tomate, mahonesa, atún, aceitunas y huevo duro.",
      precio: "",
      alergenos: "G,H,P",
      por_unidad: false
    },
    {
      nombre: "Almussafes",
      descripcion: "Sobrasada, queso y cebolla caramelizada.",
      precio: "",
      alergenos: "G,L",
      por_unidad: false
    },
    {
      nombre: "El pecador",
      descripcion: "Chistorra con patatas y huevo frito.",
      precio: "",
      alergenos: "G,H",
      por_unidad: false
    },
    {
      nombre: "Clásico",
      descripcion: "Tortilla de patata con mahonesa/ajoaceite.",
      precio: "",
      alergenos: "G,H",
      por_unidad: false
    },
    {
      nombre: "El de la Terreta",
      descripcion: "Longanizas con patatas.",
      precio: "",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Manchego",
      descripcion: "Oreja a la plancha con salsa mery.",
      precio: "",
      alergenos: "G,MO",
      por_unidad: false
    },
    {
      nombre: "Pastor",
      descripcion: "Bacon, queso de cabra y pimientos verdes.",
      precio: "",
      alergenos: "G,L",
      por_unidad: false
    },
    {
      nombre: "Blanc i negre",
      descripcion: "Longaniza con morcilla.",
      precio: "",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Francés",
      descripcion: "Tomate, tortilla francesa y jamón.",
      precio: "",
      alergenos: "G,H",
      por_unidad: false
    }
  ],

  menudeldia: [
    {
      nombre: "1 primero y 1 segundo",
      descripcion: "Menú del día.",
      precio: "13,00",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "2 segundos",
      descripcion: "Menú del día.",
      precio: "14,00",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Plato único",
      descripcion: "Menú del día.",
      precio: "10,00",
      alergenos: "",
      por_unidad: false
    }
  ],

  tardes: [
    {
      nombre: "Tostada tradicional",
      descripcion: "Merienda.",
      precio: "1,80",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Bollería dulce",
      descripcion: "Merienda.",
      precio: "1,50",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Bollería salada",
      descripcion: "Merienda.",
      precio: "1,80",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Gofre con Nutella",
      descripcion: "Merienda.",
      precio: "4,00",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Gofre con Nutella y helado",
      descripcion: "Merienda.",
      precio: "5,50",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Helado cono",
      descripcion: "Merienda.",
      precio: "",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Helado tarrina",
      descripcion: "Merienda.",
      precio: "",
      alergenos: "L",
      por_unidad: false
    }
  ],

  viernesysabado: [],

  bebidas: {
    refrescos: [
      {
        nombre: "Agua pequeña",
        descripcion: "",
        precio: "1,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Agua grande",
        descripcion: "",
        precio: "1,50",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Agua con gas",
        descripcion: "",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Coca-Cola",
        descripcion: "Original, Zero y Zero-Zero.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Fanta",
        descripcion: "Naranja o limón.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Aquarius",
        descripcion: "Naranja, limón o melocotón.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Fuze Tea",
        descripcion: "",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Tónica",
        descripcion: "",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Sprite",
        descripcion: "",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Bitter",
        descripcion: "",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Zumo Pago",
        descripcion: "",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Zumo de naranja natural",
        descripcion: "Zumo natural.",
        precio: "3,50",
        alergenos: "",
        por_unidad: false
      }
    ],
    cervezas: [
      {
        nombre: "Doble Águila Dorada",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/5 Amstel",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Amstel",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Radler",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "Cerveza sin gluten",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "1/3 Amstel Oro",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Amstel Oro sin alcohol",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Águila sin filtrar",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Heineken",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Heineken sin alcohol",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "Desperados",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "Ladrón de manzanas",
        descripcion: "Sidra.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Lagunitas IPA",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/5 Estrella Galicia",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Estrella Galicia",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      },
      {
        nombre: "1/3 Estrella Galicia sin alcohol",
        descripcion: "Cerveza.",
        precio: "",
        alergenos: "G",
        por_unidad: false
      }
    ],
    blancos: [
      {
        nombre: "Copa Verdejo",
        descripcion: "Vino blanco.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      },
      {
        nombre: "Botella Verdejo",
        descripcion: "Vino blanco.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      },
      {
        nombre: "Botella Godello",
        descripcion: "Vino blanco.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      }
    ],
    tintos: [
      {
        nombre: "Copa Rioja",
        descripcion: "Vino tinto.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      },
      {
        nombre: "Botella Rioja",
        descripcion: "Vino tinto.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      },
      {
        nombre: "Botella Ribera del Duero",
        descripcion: "Vino tinto.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      },
      {
        nombre: "Sangría",
        descripcion: "Vino tinto.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      },
      {
        nombre: "Tinto de verano",
        descripcion: "Vino tinto.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      }
    ],
    copas: [
      {
        nombre: "Vermut",
        descripcion: "Copa.",
        precio: "",
        alergenos: "SU",
        por_unidad: false
      },
      {
        nombre: "Coñac",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa Orujo de hierbas",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa crema de orujo",
        descripcion: "Copa.",
        precio: "",
        alergenos: "L",
        por_unidad: false
      },
      {
        nombre: "Copa Orujo blanco",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa limoncello",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa licor de arroz",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa Baileys",
        descripcion: "Copa.",
        precio: "",
        alergenos: "L",
        por_unidad: false
      },
      {
        nombre: "Copa Whisky",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa Ron",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa Vodka",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Copa Ginebra",
        descripcion: "Copa.",
        precio: "",
        alergenos: "",
        por_unidad: false
      }
    ],
    combinados: [
      {
        nombre: "Whisky",
        descripcion: "Combinado.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Ron",
        descripcion: "Combinado.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Vodka",
        descripcion: "Combinado.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Ginebra",
        descripcion: "Combinado.",
        precio: "",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Ginebra premium",
        descripcion: "Combinado.",
        precio: "",
        alergenos: "",
        por_unidad: false
      }
    ]
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

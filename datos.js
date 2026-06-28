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
      nombre: "Solo",
      descripcion: "Café.",
      precio: "1,30",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Cortado",
      descripcion: "Café con leche.",
      precio: "1,50",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Café con leche",
      descripcion: "Clásico.",
      precio: "1,70",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Capuchino",
      descripcion: "Con espuma y cacao.",
      precio: "2,00",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Carajillo",
      descripcion: "Con licor.",
      precio: "1,80",
      alergenos: "SU",
      por_unidad: false
    },
    {
      nombre: "Cremaet",
      descripcion: "Café con licor.",
      precio: "2,20",
      alergenos: "SU",
      por_unidad: false
    },
    {
      nombre: "Infusión",
      descripcion: "Té o manzanilla.",
      precio: "1,70",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Suplemento del tiempo",
      descripcion: "Suplemento adicional.",
      precio: "0,20",
      alergenos: "",
      por_unidad: false
    }
  ],

  desayunos: [
    {
      nombre: "Tostada tradicional",
      descripcion: "Desayuno.",
      precio: "2,80",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Tostada especial",
      descripcion: "Desayuno.",
      precio: "3,80",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Desayuno dulce",
      descripcion: "Desayuno.",
      precio: "2,80",
      alergenos: "G,L",
      por_unidad: false
    },
    {
      nombre: "Desayuno salado",
      descripcion: "Desayuno.",
      precio: "3,00",
      alergenos: "G",
      por_unidad: false
    }
  ],

  almuerzos: [
    {
      nombre: "Bocadillo del día",
      descripcion: "Almuerzo.",
      precio: "6,50",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Bocadillo de carta",
      descripcion: "Almuerzo.",
      precio: "8,00",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Gasto",
      descripcion: "Suplemento.",
      precio: "",
      alergenos: "",
      por_unidad: false
    }
  ],

  menudeldia: [
    {
      nombre: "1 Primero + 1 Segundo",
      descripcion: "Menú del día.",
      precio: "12,50",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "2 Segundos",
      descripcion: "Menú del día.",
      precio: "13,50",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Plato único",
      descripcion: "Menú del día.",
      precio: "11,00",
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
        descripcion: "Bebida.",
        precio: "1,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Agua grande",
        descripcion: "Bebida.",
        precio: "1,50",
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
        descripcion: "Bebida refrescante.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Fuze Tea",
        descripcion: "Té refrescante.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Tónica",
        descripcion: "Refresco.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Sprite",
        descripcion: "Refresco.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Bitter",
        descripcion: "Refresco.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Sweps",
        descripcion: "Refresco.",
        precio: "2,00",
        alergenos: "",
        por_unidad: false
      },
      {
        nombre: "Zumo Pago",
        descripcion: "Zumo.",
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

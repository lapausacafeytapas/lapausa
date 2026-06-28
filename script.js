// ==========================================
// NAVEGACIÓN ENTRE SECCIONES
// ==========================================
const inicio = document.getElementById('inicio');
const carta = document.getElementById('carta');
const tituloCarta = document.getElementById('titulo-carta');
const categoriasMenu = document.getElementById('categorias-menu');

let vistaCarta = 'categorias';
let categoriaActual = null;

const titulosCategoria = {
  mananas: 'La PAUsa de las mañanas',
  tardes: 'La PAUsa de las tardes',
  viernesysabado: 'La PAUsa de las noches',
  cafes: 'Cafés',
  bebidas: 'Bebidas'
};

const subcategoriasPorCategoria = {
  mananas: ['desayunos', 'almuerzos', 'menudeldia'],
  bebidas: ['refrescos', 'cervezas', 'blancos', 'tintos', 'copas', 'combinados']
};

function mostrarCarta() {
  inicio.classList.remove('active');
  carta.classList.add('active');
  volverACategorias();
  window.scrollTo(0, 0);
}

function mostrarInicio() {
  carta.classList.remove('active');
  inicio.classList.add('active');
  window.scrollTo(0, 0);
}

function volverCarta() {
  if (vistaCarta === 'productos') {
    mostrarSubcategorias(categoriaActual);
    return;
  }

  if (vistaCarta === 'subcategorias') {
    volverACategorias();
    return;
  }

  mostrarInicio();
}

function volverACategorias() {
  vistaCarta = 'categorias';
  categoriaActual = null;
  tituloCarta.textContent = 'Nuestra Carta';
  categoriasMenu.classList.remove('oculto');

  document.querySelectorAll('.categorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias').forEach(menu => {
    menu.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  document.querySelectorAll('.categorias button').forEach(b => {
    b.classList.remove('active-cat');
  });
}

// ==========================================
// CAMBIO DE CATEGORÍAS
// ==========================================
function cat(id, btn) {
  document.querySelectorAll('.categorias button').forEach(b => {
    b.classList.remove('active-cat');
  });
  if (btn) btn.classList.add('active-cat');

  categoriaActual = id;

  if (subcategoriasPorCategoria[id]) {
    mostrarSubcategorias(id);
    return;
  }

  mostrarProductosDirectos(id);
}

function mostrarSubcategorias(id) {
  vistaCarta = 'subcategorias';
  categoriaActual = id;
  tituloCarta.textContent = titulosCategoria[id] || 'Nuestra Carta';
  categoriasMenu.classList.add('oculto');

  document.querySelectorAll('.categorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias').forEach(menu => {
    menu.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  const container = document.getElementById(id + '-container');
  if (container) {
    container.classList.remove('oculto');
    const menu = container.querySelector('.subcategorias');
    if (menu) menu.classList.remove('oculto');
  }

  const primeraSubcategoria = subcategoriasPorCategoria[id]?.[0];
  if (primeraSubcategoria) {
    const primerBoton = container?.querySelector('.subcategorias button');
    document.querySelectorAll('.subcategorias button').forEach(b => {
      b.classList.remove('active-subcat');
    });
    if (primerBoton) primerBoton.classList.add('active-subcat');
  }

  window.scrollTo(0, 0);
}

function mostrarProductosDirectos(id) {
  vistaCarta = 'productos';
  categoriaActual = id;
  tituloCarta.textContent = titulosCategoria[id] || 'Nuestra Carta';
  categoriasMenu.classList.add('oculto');

  document.querySelectorAll('.categorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias').forEach(menu => {
    menu.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  const container = document.getElementById(id + '-container');
  if (container) {
    container.classList.remove('oculto');
  }

  window.scrollTo(0, 0);
}

// ==========================================
// CAMBIO DE SUBCATEGORÍAS
// ==========================================
function subcat(id, btn) {
  vistaCarta = 'productos';

  document.querySelectorAll('.subcategorias button').forEach(b => {
    b.classList.remove('active-subcat');
  });
  if (btn) btn.classList.add('active-subcat');

  document.querySelectorAll('.categorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias').forEach(menu => {
    menu.classList.add('oculto');
  });

  document.querySelectorAll('.subcategorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  const contenedorSubcategoria = document.getElementById(id + '-subcont');
  if (contenedorSubcategoria) {
    contenedorSubcategoria.classList.remove('oculto');
  }

  tituloCarta.textContent = btn ? btn.textContent : 'Nuestra Carta';
  window.scrollTo(0, 0);
}

// ==========================================
// GENERAR PRODUCTOS DESDE DATOS
// ==========================================
function generarProductos() {
  const categorias = ['cafes', 'desayunos', 'almuerzos', 'menudeldia', 'tardes', 'viernesysabado'];

  categorias.forEach(categoria => {
    const container = document.getElementById(categoria + '-container') || document.getElementById(categoria + '-subcont');
    const productos = PRODUCTOS[categoria];

    if (container && productos) {
      container.innerHTML = '';

      if (categoria === 'desayunos') {
        const leyenda = document.createElement('div');
        leyenda.className = 'leyenda-subcategoria';
        leyenda.textContent = 'Incluye tostada o bollería y café';
        container.appendChild(leyenda);
      }

      if (categoria === 'almuerzos') {
        const leyenda = document.createElement('div');
        leyenda.className = 'leyenda-subcategoria';
        leyenda.textContent = 'Incluye bocadillo, bebida y café';
        container.appendChild(leyenda);
      }

      if (categoria === 'menudeldia') {
        const leyenda = document.createElement('div');
        leyenda.className = 'leyenda-subcategoria';
        leyenda.textContent = 'Incluye una bebida, pan y postre o café';
        container.appendChild(leyenda);
      }

      productos.forEach(producto => {
        const productoHTML = document.createElement('div');
        productoHTML.className = 'producto';

        let alergenosText = '';
        if (producto.alergenos) {
          const codigosAlergenos = producto.alergenos.split(',').map(c => c.trim());
          alergenosText = codigosAlergenos
            .map(codigo => ALERGENOS[codigo] || codigo)
            .join(' · ');
        }

        let precioText = '';
        if (producto.precio) {
          const sufijo = producto.por_unidad ? '€/u' : '€';
          precioText = producto.precio + ' ' + sufijo;
        }

        productoHTML.innerHTML = `
          <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            ${alergenosText ? `<small>${alergenosText}</small>` : ''}
          </div>
          <strong>${precioText}</strong>
        `;

        container.appendChild(productoHTML);
      });
    }
  });

  generarBebidas();
}

// ==========================================
// GENERAR BEBIDAS CON SUBMENÚS
// ==========================================
function generarBebidas() {
  const subcategorias = ['refrescos', 'cervezas', 'blancos', 'tintos', 'copas', 'combinados'];

  subcategorias.forEach(subcategoria => {
    const container = document.getElementById(subcategoria + '-subcont');
    const productos = PRODUCTOS.bebidas[subcategoria];

    if (container && productos) {
      container.innerHTML = '';

      productos.forEach(producto => {
        const productoHTML = document.createElement('div');
        productoHTML.className = 'producto';

        let alergenosText = '';
        if (producto.alergenos) {
          const codigosAlergenos = producto.alergenos.split(',').map(c => c.trim());
          alergenosText = codigosAlergenos
            .map(codigo => ALERGENOS[codigo] || codigo)
            .join(' · ');
        }

        let precioHTML = '';
        if (producto.precio_copa && producto.precio_botella) {
          precioHTML = `
            <div class="producto-precios">
              <div>
                <strong>${producto.precio_copa}€</strong>
                <small>Copa</small>
              </div>
              <div>
                <strong>${producto.precio_botella}€</strong>
                <small>Botella</small>
              </div>
            </div>
          `;
        } else if (producto.precio) {
          const sufijo = producto.por_unidad ? '€/u' : '€';
          precioHTML = `<strong>${producto.precio} ${sufijo}</strong>`;
        }

        productoHTML.innerHTML = `
          <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            ${alergenosText ? `<small>${alergenosText}</small>` : ''}
          </div>
          ${precioHTML}
        `;

        container.appendChild(productoHTML);
      });
    }
  });
}

// Generar productos cuando carga la página
generarProductos();
volverACategorias();

// ==========================================
// CONFIGURACIÓN DE ENLACES
// ==========================================

document.getElementById('mapsIcon').href = `https://maps.google.com/?q=${CONFIG.coordenadas.lat},${CONFIG.coordenadas.lng}`;
document.getElementById('instagramIcon').href = CONFIG.instagram;
document.getElementById('facebookIcon').href = CONFIG.facebook;
document.getElementById('whatsappIcon').href = `https://wa.me/${CONFIG.telefono}`;

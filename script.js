// ==========================================
// NAVEGACIÓN ENTRE SECCIONES
// ==========================================
const inicio = document.getElementById('inicio');
const carta = document.getElementById('carta');
const tituloCarta = document.getElementById('titulo-carta');
const categoriasMenu = document.getElementById('categorias-menu');
const subcategoriasMenu = document.getElementById('subcategorias-menu');
const productosView = document.getElementById('productos-view');

const ESTRUCTURA_CARTA = {
  mananas: {
    titulo: 'La PAUsa de las mañanas',
    subcategorias: [
      { id: 'desayunos', titulo: 'Desayunos' },
      { id: 'almuerzos', titulo: 'Almuerzos' },
      { id: 'menudeldia', titulo: 'Menú del día' }
    ]
  },
  tardes: {
    titulo: 'La PAUsa de las tardes',
    productos: 'tardes'
  },
  viernesysabado: {
    titulo: 'La PAUsa de las noches',
    productos: 'viernesysabado'
  },
  cafes: {
    titulo: 'Cafés',
    productos: 'cafes'
  },
  bebidas: {
    titulo: 'Bebidas',
    subcategorias: [
      { id: 'refrescos', titulo: 'Refrescos' },
      { id: 'cervezas', titulo: 'Cervezas' },
      { id: 'blancos', titulo: 'Vino blanco' },
      { id: 'tintos', titulo: 'Vino tinto' },
      { id: 'copas', titulo: 'Copas' },
      { id: 'combinados', titulo: 'Combinados' }
    ]
  }
};

let vistaActual = 'inicio';
let categoriaActual = null;

function mostrarCarta() {
  inicio.classList.remove('active');
  carta.classList.add('active');
  renderCategorias();
  window.scrollTo(0, 0);
}

function mostrarInicio() {
  carta.classList.remove('active');
  inicio.classList.add('active');
  vistaActual = 'inicio';
  categoriaActual = null;
  window.scrollTo(0, 0);
}

function volverCarta() {
  if (vistaActual === 'productos') {
    if (categoriaActual && ESTRUCTURA_CARTA[categoriaActual]?.subcategorias) {
      renderSubcategorias(categoriaActual);
    } else {
      renderCategorias();
    }
    return;
  }

  if (vistaActual === 'subcategorias') {
    renderCategorias();
    return;
  }

  mostrarInicio();
}

function limpiarVistaCarta() {
  categoriasMenu.classList.add('oculto');
  subcategoriasMenu.classList.add('oculto');
  productosView.classList.add('oculto');
  categoriasMenu.innerHTML = '';
  subcategoriasMenu.innerHTML = '';
  productosView.innerHTML = '';
}

function renderCategorias() {
  vistaActual = 'categorias';
  categoriaActual = null;
  tituloCarta.textContent = 'Nuestra Carta';
  limpiarVistaCarta();
  categoriasMenu.classList.remove('oculto');

  Object.entries(ESTRUCTURA_CARTA).forEach(([id, categoria]) => {
    const button = document.createElement('button');
    button.textContent = categoria.titulo;
    button.onclick = () => abrirCategoria(id);
    categoriasMenu.appendChild(button);
  });
}

function abrirCategoria(id) {
  categoriaActual = id;
  const categoria = ESTRUCTURA_CARTA[id];

  if (categoria.subcategorias) {
    renderSubcategorias(id);
    return;
  }

  renderProductos(categoria.titulo, PRODUCTOS[categoria.productos] || []);
}

function renderSubcategorias(id) {
  vistaActual = 'subcategorias';
  categoriaActual = id;
  const categoria = ESTRUCTURA_CARTA[id];
  tituloCarta.textContent = categoria.titulo;
  limpiarVistaCarta();
  subcategoriasMenu.classList.remove('oculto');

  categoria.subcategorias.forEach(subcategoria => {
    const button = document.createElement('button');
    button.textContent = subcategoria.titulo;
    button.onclick = () => abrirSubcategoria(id, subcategoria.id, subcategoria.titulo);
    subcategoriasMenu.appendChild(button);
  });
}

function abrirSubcategoria(categoriaId, subcategoriaId, titulo) {
  if (categoriaId === 'bebidas') {
    renderProductos(titulo, PRODUCTOS.bebidas[subcategoriaId] || []);
    return;
  }

  renderProductos(titulo, PRODUCTOS[subcategoriaId] || []);
}

function renderProductos(titulo, productos, claveLeyenda = null) {
  vistaActual = 'productos';
  tituloCarta.textContent = titulo;
  limpiarVistaCarta();
  productosView.classList.remove('oculto');

  if (claveLeyenda === 'desayunos') {
    productosView.appendChild(crearLeyenda('Incluye tostada o bollería y café'));
  }

  if (claveLeyenda === 'almuerzos') {
    productosView.appendChild(crearLeyenda('Incluye bocadillo, bebida y café'));
  }

  if (claveLeyenda === 'menudeldia') {
    productosView.appendChild(crearLeyenda('Incluye una bebida, pan y postre o café'));
  }

  if (!productos.length) {
    const vacio = document.createElement('p');
    vacio.style.padding = '15px';
    vacio.textContent = 'Próximamente.';
    productosView.appendChild(vacio);
    return;
  }

  productos.forEach(producto => {
    productosView.appendChild(crearProducto(producto));
  });
}

function crearLeyenda(texto) {
  const leyenda = document.createElement('div');
  leyenda.className = 'leyenda-subcategoria';
  leyenda.textContent = texto;
  return leyenda;
}

function crearProducto(producto) {
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
  } else {
    precioHTML = '<strong></strong>';
  }

  productoHTML.innerHTML = `
    <div>
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      ${alergenosText ? `<small>${alergenosText}</small>` : ''}
    </div>
    ${precioHTML}
  `;

  return productoHTML;
}

// ==========================================
// CONFIGURACIÓN DE ENLACES
// ==========================================
document.getElementById('mapsIcon').href = `https://maps.google.com/?q=${CONFIG.coordenadas.lat},${CONFIG.coordenadas.lng}`;
document.getElementById('instagramIcon').href = CONFIG.instagram;
document.getElementById('facebookIcon').href = CONFIG.facebook;
document.getElementById('whatsappIcon').href = `https://wa.me/${CONFIG.telefono}`;

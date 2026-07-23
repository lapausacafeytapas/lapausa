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
     // { id: 'bocadillosdecarta', titulo: 'Bocadillos de carta' },
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
      { id: 'tintos', titulo: 'Vinos' },
      { id: 'copas', titulo: 'Copas' },
      { id: 'combinados', titulo: 'Combinados' }
    ]
  }
};

const SUBCATEGORIAS_OCULTAS_BEBIDAS = new Set(['blancos', 'combinados']);

let vistaActual = 'inicio';
let categoriaActual = null;
let _enPopstate = false;

function pushEstado(estado) {
  if (!_enPopstate) {
    history.pushState(estado, '');
  }
}

function mostrarCarta() {
  inicio.classList.remove('active');
  carta.classList.add('active');
  pushEstado({ nivel: 'categorias' });
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

  pushEstado({ nivel: 'productos', tipo: 'categoria', categoria: id });
  const productos = obtenerProductosCategoria(id);
  renderProductos(categoria.titulo, productos, categoria.productos);
}

function obtenerProductosCategoria(categoriaId) {
  const categoria = ESTRUCTURA_CARTA[categoriaId];
  if (!categoria || !categoria.productos) return [];
  const lista = PRODUCTOS[categoria.productos];
  return Array.isArray(lista) ? lista : [];
}

function renderSubcategorias(id) {
  pushEstado({ nivel: 'subcategorias', categoria: id });
  vistaActual = 'subcategorias';
  categoriaActual = id;
  const categoria = ESTRUCTURA_CARTA[id];
  tituloCarta.textContent = categoria.titulo;
  limpiarVistaCarta();
  subcategoriasMenu.classList.remove('oculto');

  const subcategoriasVisibles = id === 'bebidas'
    ? categoria.subcategorias.filter(subcategoria => !SUBCATEGORIAS_OCULTAS_BEBIDAS.has(subcategoria.id))
    : categoria.subcategorias;

  subcategoriasVisibles.forEach(subcategoria => {
    const button = document.createElement('button');
    button.textContent = subcategoria.titulo;
    button.onclick = () => abrirSubcategoria(id, subcategoria.id, subcategoria.titulo);
    subcategoriasMenu.appendChild(button);
  });
}

function obtenerProductosSubcategoria(categoriaId, subcategoriaId) {
  if (categoriaId === 'bebidas') {
    // Estructura preferida: PRODUCTOS.bebidas.refrescos
    if (PRODUCTOS && PRODUCTOS.bebidas && !Array.isArray(PRODUCTOS.bebidas)) {
      const desdeBebidas = PRODUCTOS.bebidas[subcategoriaId];
      if (Array.isArray(desdeBebidas)) return desdeBebidas;
    }

    // Compatibilidad: PRODUCTOS.refrescos en raíz
    const desdeRaiz = PRODUCTOS[subcategoriaId];
    if (Array.isArray(desdeRaiz)) return desdeRaiz;

    return [];
  }

  const desdeRaiz = PRODUCTOS[subcategoriaId];
  return Array.isArray(desdeRaiz) ? desdeRaiz : [];
}

function abrirSubcategoria(categoriaId, subcategoriaId, titulo) {
  pushEstado({ nivel: 'productos', tipo: 'subcategoria', categoria: categoriaId, subcategoria: subcategoriaId, titulo: titulo });
  const productos = obtenerProductosSubcategoria(categoriaId, subcategoriaId);
  renderProductos(titulo, productos, subcategoriaId);
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

  if (claveLeyenda === 'cafes') {
    productosView.appendChild(crearLeyenda('Suplemento del tiempo 0,20€'));
  }

  if (claveLeyenda === 'menudeldia') {
    productosView.appendChild(crearLeyenda('Incluye una bebida, pan y postre o café'));
  }

  if (!productos || !productos.length) {
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
  if (producto.es_tipo) {
    const tipoHTML = document.createElement('div');
    tipoHTML.className = 'producto producto-tipo';
    tipoHTML.innerHTML = `<h3>${producto.nombre}</h3>`;
    return tipoHTML;
  }

  const productoHTML = document.createElement('div');
  productoHTML.className = 'producto';

  let alergenosText = '';
  if (producto.alergenos) {
    const codigosAlergenos = producto.alergenos.split(',').map(c => c.trim());
    alergenosText = codigosAlergenos
      .map(codigo => (typeof ALERGENOS !== 'undefined' && ALERGENOS[codigo]) || codigo)
      .join(' · ');
  }

  let precioHTML = '';

  // Producto con precios de chupito / copa / combinado
  if ('precio_chupito' in producto || 'precio_combinado' in producto) {
    const columnas = [
      { etiqueta: 'Chupito', valor: producto.precio_chupito || '' },
      { etiqueta: 'Copa', valor: producto.precio_copa || '' },
      { etiqueta: 'Combinado', valor: producto.precio_combinado || '' }
    ].filter(columna => columna.valor);

    if (columnas.length) {
      precioHTML = `
        <div class="producto-precios">
          ${columnas.map(columna => `
            <div>
              <strong>${columna.valor}€</strong>
              <small>${columna.etiqueta}</small>
            </div>
          `).join('')}
        </div>
      `;
    }
  // Producto con precio de copa y botella (vinos)
  } else if (producto.precio_copa && producto.precio_botella) {
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
  // Producto con precio simple
  } else if (producto.precio) {
    const sufijo = producto.tipo_precio === 'pax' ? '€/pax.' : (producto.por_unidad ? '€/ud.' : '€');
    precioHTML = `<strong>${producto.precio}${sufijo}</strong>`;
  } else {
    precioHTML = '';
  }

  const descripcion = producto.descripcion || '';

  productoHTML.innerHTML = `
    <div>
      <h3>${producto.nombre}</h3>
      ${descripcion ? `<p>${descripcion}</p>` : ''}
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

// ==========================================
// HISTORIAL DEL NAVEGADOR (botón atrás)
// ==========================================
history.replaceState({ nivel: 'inicio' }, '');

window.addEventListener('popstate', function(e) {
  _enPopstate = true;
  const estado = e.state;

  if (!estado || estado.nivel === 'inicio') {
    mostrarInicio();
  } else if (estado.nivel === 'categorias') {
    inicio.classList.remove('active');
    carta.classList.add('active');
    renderCategorias();
  } else if (estado.nivel === 'subcategorias') {
    inicio.classList.remove('active');
    carta.classList.add('active');
    renderSubcategorias(estado.categoria);
  } else if (estado.nivel === 'productos') {
    inicio.classList.remove('active');
    carta.classList.add('active');
    if (estado.tipo === 'subcategoria') {
      abrirSubcategoria(estado.categoria, estado.subcategoria, estado.titulo);
    } else {
      abrirCategoria(estado.categoria);
    }
  }

  _enPopstate = false;
  window.scrollTo(0, 0);
});

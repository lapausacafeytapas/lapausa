// ==========================================
// NAVEGACIÓN ENTRE SECCIONES
// ==========================================
const inicio = document.getElementById('inicio');
const carta = document.getElementById('carta');

function mostrarCarta() {
  inicio.classList.remove('active');
  carta.classList.add('active');
  window.scrollTo(0, 0);
}

function mostrarInicio() {
  carta.classList.remove('active');
  inicio.classList.add('active');
  window.scrollTo(0, 0);
}

// ==========================================
// CAMBIO DE CATEGORÍAS
// ==========================================
function cat(id, btn) {
  document.querySelectorAll('.categorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  const container = document.getElementById(id + '-container');
  if (container) {
    container.classList.remove('oculto');
  }

  document.querySelectorAll('.categorias button').forEach(b => {
    b.classList.remove('active-cat');
  });
  if (btn) btn.classList.add('active-cat');
}

// ==========================================
// CAMBIO DE SUBCATEGORÍAS
// ==========================================
function subcat(id, btn) {
  document.querySelectorAll('.subcategorias-container').forEach(container => {
    container.classList.add('oculto');
  });

  const container = document.getElementById(id + '-subcont');
  if (container) {
    container.classList.remove('oculto');
  }

  document.querySelectorAll('.subcategorias button').forEach(b => {
    b.classList.remove('active-subcat');
  });
  if (btn) btn.classList.add('active-subcat');
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

      if (categoria === 'almuerzos') {
        const leyenda = document.createElement('div');
        leyenda.className = 'producto';
        leyenda.innerHTML = `
          <div>
            <h3>Incluye bocadillo, bebida y café</h3>
          </div>
          <strong></strong>
        `;
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

// ==========================================
// CONFIGURACIÓN DE ENLACES
// ==========================================

document.getElementById('mapsIcon').href = `https://maps.google.com/?q=${CONFIG.coordenadas.lat},${CONFIG.coordenadas.lng}`;
document.getElementById('instagramIcon').href = CONFIG.instagram;
document.getElementById('facebookIcon').href = CONFIG.facebook;
document.getElementById('whatsappIcon').href = `https://wa.me/${CONFIG.telefono}`;

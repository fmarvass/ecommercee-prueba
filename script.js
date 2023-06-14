let carrito = [];
let total = 0;

function restarCantidad(id) {
  let cantidadInput = document.getElementById(`cantidad${id}`);
  let cantidad = parseInt(cantidadInput.value);

  if (cantidad > 0) {
    cantidad--;
    cantidadInput.value = cantidad;
  }
}

function sumarCantidad(id) {
  let cantidadInput = document.getElementById(`cantidad${id}`);
  let cantidad = parseInt(cantidadInput.value);

  cantidad++;
  cantidadInput.value = cantidad;
}

function agregarAlCarrito(id) {
  let cantidadInput = document.getElementById(`cantidad${id}`);
  let cantidad = parseInt(cantidadInput.value);

  if (cantidad > 0) {
    let producto = {
      id: id,
      nombre: `Producto ${id}`,
      precio: id === 1 ? 10 : 15,
      cantidad: cantidad
    };

    carrito.push(producto);
    total += producto.precio * producto.cantidad;

    actualizarCarrito();
    cantidadInput.value = 0;
  }
}

function actualizarCarrito() {
  let carritoLista = document.getElementById("carrito-lista");
  carritoLista.innerHTML = "";

  carrito.forEach(function(producto) {
    let item = document.createElement("li");
    item.innerText = `${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}`;
    carritoLista.appendChild(item);
  });

  document.getElementById("carrito-total").innerText = `$${total}`;

  let carritoElement = document.getElementById("carrito");
  if (carrito.length > 0) {
    carritoElement.classList.remove("carrito-hidden");
  } else {
    carritoElement.classList.add("carrito-hidden");
  }
}

function realizarPedido() {
  let mensaje = "¡Hola! Me gustaría realizar el siguiente pedido:%0A";
  carrito.forEach(function(producto) {
    mensaje += `-${producto.nombre} x ${producto.cantidad} ($${producto.precio * producto.cantidad})%0A`;
  });

  mensaje += `%0ATotal: $${total}%0A%0AGracias!`;

  let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`;
  window.open(url);
}


function mostrarDescripcion(id) {
    let descripcion = document.getElementById(`descripcion${id}`);
    descripcion.classList.remove("descripcion-hidden");
  }
  
  function ocultarDescripcion(id) {
    let descripcion = document.getElementById(`descripcion${id}`);
    descripcion.classList.add("descripcion-hidden");
  }
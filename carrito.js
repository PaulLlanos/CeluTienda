document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContenido = document.getElementById('contenedor-carrito');
    const totalDiv = document.getElementById('total');
    const comprarBtn = document.getElementById('comprar-btn');

    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>El carrito está vacío.</p>';
        totalDiv.innerHTML = '';
        comprarBtn.style.display = 'none';
        return;
    }

    let total = 0;

    carrito.forEach(producto => {
        const precio = Number(producto.precio);
        const subtotal = precio * producto.cantidad;

        total += subtotal;

        carritoContenido.innerHTML += `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${precio.toFixed(2)}</p>
                <p>Subtotal: $${subtotal.toFixed(2)}</p>
                <button onclick="editarCantidad('${producto.nombre}')">Editar Cantidad</button>
                <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
            </div>
        `;
    });

    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    comprarBtn.style.display = 'block'; 

    comprarBtn.addEventListener('click', () => {
        alert('Gracias por su compra!');
        localStorage.removeItem('carrito');
        location.reload();
    });
});

function editarCantidad(nombre) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito.find(p => p.nombre === nombre);
    
    const nuevaCantidad = prompt("Ingrese la nueva cantidad:", producto.cantidad);
    
    if (nuevaCantidad !== null && !isNaN(nuevaCantidad) && nuevaCantidad > 0) {
        producto.cantidad = Number(nuevaCantidad);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        location.reload();
    }
}

function eliminarProducto(nombre) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.nombre !== nombre);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}

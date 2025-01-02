function cargarProductos() {
    fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los productos');
            }
            return response.json();
        })
        .then(productos => {
            mostrarProductos(productos);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('contenedor-productos');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('tarjeta-producto');
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(productoDiv);
    });
}

function agregarAlCarrito(nombre, precio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    document.getElementById('carrito-count').innerText = totalProductos;
}

cargarProductos();
actualizarContadorCarrito();


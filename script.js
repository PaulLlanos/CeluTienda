function cargarProductos() {
    const productos = [
        {
            nombre: "iPhone 14 Pro",
            descripcion: "Cámara: Triple cámara de 48MP. Pantalla: 6.1 pulgadas Super Retina XDR. Procesador: A16 Bionic. Batería: Hasta 29 horas de tiempo de conversación.",
            precio: 450000,
            imagen: "img/14pro.jpg"
        },
        {
            nombre: "iPhone 14",
            descripcion: "Cámara: Doble cámara de 12MP. Pantalla: 6.1 pulgadas. Procesador: A15 Bionic. Batería: Hasta 20 horas de tiempo de conversación.",
            precio: 350000,
            imagen: "img/14.jpg"
        },
        {
            nombre: "iPhone 13 Pro",
            descripcion: "Cámara: Triple cámara de 12MP. Pantalla: 6.1 pulgadas ProMotion. Procesador: A15 Bionic. Batería: Hasta 22 horas de tiempo de conversación.",
            precio: 400000,
            imagen: "img/13 pro.jpg"
        },
        {
            nombre: "iPhone 13",
            descripcion: "Cámara: Doble cámara de 12MP. Pantalla: 6.1 pulgadas. Procesador: A15 Bionic. Batería: Hasta 19 horas de tiempo de conversación.",
            precio: 300000,
            imagen: "img/iphone 13.jpg"
        },
        {
            nombre: "Samsung Galaxy S23 Ultra",
            descripcion: "Cámara: Cuádruple cámara de 200MP. Pantalla: 6.8 pulgadas Dynamic AMOLED 2X. Procesador: Snapdragon 8 Gen 2. Batería: 5000 mAh.",
            precio: 500000,
            imagen: "img/galaxy s23 ultra.jpg"
        },
        {
            nombre: "Samsung Galaxy S23",
            descripcion: "Cámara: Triple cámara de 50MP. Pantalla: 6.1 pulgadas Dynamic AMOLED 2X. Procesador: Snapdragon 8 Gen 2. Batería: 3900 mAh.",
            precio: 400000,
            imagen: "img/galaxy s23.jpg"
        },
        {
            nombre: "Samsung Galaxy Z Flip 4",
            descripcion: "Cámara: Doble cámara de 12MP. Pantalla: 6.7 pulgadas AMOLED plegable. Procesador: Snapdragon 8+ Gen 1. Batería: 3700 mAh.",
            precio: 450000,
            imagen: "img/z flip4.webp"
        },
        {
            nombre: "Samsung Galaxy A54",
            descripcion: "Cámara: Triple cámara de 50MP. Pantalla: 6.4 pulgadas Super AMOLED. Procesador: Exynos 1380. Batería: 5000 mAh.",
            precio: 200000,
            imagen: "img/Galaxy A54.jpg"
        },
        {
            nombre: "Motorola Edge 40 Pro",
            descripcion: "Cámara: Triple cámara de 50MP. Pantalla: 6.67 pulgadas OLED. Procesador: Snapdragon 8 Gen 1. Batería: 4600 mAh.",
            precio: 350000,
            imagen: "img/edge 40rpo.webp"
        },
        {
            nombre: "Motorola Moto G73",
            descripcion: "Cámara: Doble cámara de 50MP. Pantalla: 6.5 pulgadas IPS LCD. Procesador: MediaTek Dimensity 930. Batería: 5000 mAh.",
            precio: 150000,
            imagen: "img/moto g73.jpg"
        },
        {
            nombre: "Motorola Edge 30",
            descripcion: "Cámara: Triple cámara de 50MP. Pantalla: 6.5 pulgadas OLED. Procesador: Snapdragon 778G+. Batería: 4400 mAh.",
            precio: 300000,
            imagen: "img/edge 30.png"
        },
        {
            nombre: "Motorola Moto G62",
            descripcion: "Cámara: Triple cámara de 50MP. Pantalla: 6.5 pulgadas IPS LCD. Procesador: Snapdragon 695. Batería: 5000 mAh.",
            precio: 120000,
            imagen: "img/moto g62.jpg"
        }
    ];

    mostrarProductos(productos);
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



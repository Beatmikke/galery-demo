function cambiarImagen(ruta) {
    document.getElementById('imagen-principal').src = ruta;
}

const imagenesCarrusel = [
    'imagenes/fondo1.webp',
    'imagenes/2.webp',
    'imagenes/3.webp',
    'imagenes/4.jfif',
    'imagenes/5.jfif',
    'imagenes/6.jfif',
    'imagenes/7.jfif',
    'imagenes/8.jfif',
    'imagenes/9.jfif',
    'imagenes/10.jfif',
    'imagenes/11.jfif'
];
let indiceCarrusel = 0;
let intervaloCarrusel = null;

function mostrarImagenCarrusel() {
    const img = document.getElementById('carrusel-img');
    img.classList.add('fade');
    setTimeout(() => {
        img.src = imagenesCarrusel[indiceCarrusel];
        img.onload = () => {
            img.classList.remove('fade');
        };
    }, 400); // La mitad del tiempo de transición
}

function cambiarCarrusel(direccion) {
    indiceCarrusel += direccion;
    if (indiceCarrusel < 0) indiceCarrusel = imagenesCarrusel.length - 1;
    if (indiceCarrusel >= imagenesCarrusel.length) indiceCarrusel = 0;
    mostrarImagenCarrusel();
    reiniciarIntervaloCarrusel();
}

function avanzarCarruselAutomatico() {
    indiceCarrusel = (indiceCarrusel + 1) % imagenesCarrusel.length;
    mostrarImagenCarrusel();
}

function reiniciarIntervaloCarrusel() {
    clearInterval(intervaloCarrusel);
    intervaloCarrusel = setInterval(avanzarCarruselAutomatico, 10000); // 10 segundos
}

window.onload = function() {
    mostrarImagenCarrusel();
    intervaloCarrusel = setInterval(avanzarCarruselAutomatico, 10000); // 10 segundos
};

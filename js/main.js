const encabezado = document.querySelector('.encabezado');
const botonMenu = document.querySelector('#boton-menu');
const navegacion = document.querySelector('#navegacion');
const linksNavegacion = document.querySelectorAll('.navegacion a');

if (window.scrollY > 10) {
    encabezado.classList.add('encabezado--scroll');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        encabezado.classList.add('encabezado--scroll');
    } else {
        encabezado.classList.remove('encabezado--scroll');
    }
});

if (botonMenu && navegacion) {
    botonMenu.addEventListener('click', () => {
        const menuAbierto = navegacion.classList.toggle('activa');
        botonMenu.classList.toggle('activo');
        botonMenu.setAttribute('aria-expanded', menuAbierto);
    });
}

linksNavegacion.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navegacion.classList.contains('activa')) {
            navegacion.classList.remove('activa');
            botonMenu.classList.remove('activo');
            botonMenu.setAttribute('aria-expanded', 'false');
        }
    });
});

const elementosAnimados = document.querySelectorAll('.animacion-aparicion');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
});
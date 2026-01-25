const imgIzquierda = document.querySelectorAll('.ocultarIzquierda');
const imgDerecha = document.querySelectorAll('.ocultarDerecha');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85; // 85% de la altura visible

    imgIzquierda.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
    section.classList.add('aparecerIzquierda');
    }
    });
});

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85; // 85% de la altura visible

    imgDerecha.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
    section.classList.add('aparecerDerecha');
    }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu');
    const navMenu = document.querySelector('header nav');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            console.log("Click detectado. Clases actuales:", navMenu.className);
        });
    } else {
        console.error("Error: No se encontró el botón o el menú en el HTML");
    }
});
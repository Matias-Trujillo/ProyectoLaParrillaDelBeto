// Función para abrir la imagen en tamaño completo
function openFullImg(src) {
    var fullImgBox = document.getElementById("fulImgBox");
    var fullImg = document.getElementById("fulImg");
    fullImgBox.style.display = "flex";
    fullImg.src = src;
}

// Función para cerrar el modal de imagen completa
function closeImg() {
    var fullImgBox = document.getElementById("fulImgBox");
    fullImgBox.style.display = "none";
}

// Mostrar el botón cuando el usuario se desplace hacia abajo
window.onscroll = function() {
    let button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";  // Mostrar el botón
    } else {
        button.style.display = "none";  // Ocultar el botón
    }
};

// Funcionalidad para hacer scroll hacia arriba con desplazamiento suave
document.getElementById("scrollToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Desplazamiento suave hacia arriba
    });
});


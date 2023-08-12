document.addEventListener("DOMContentLoaded", function () {
    const botonActriz = document.querySelector("#boton-actriz");
    const botonActor = document.querySelector("#boton-actor");
    const botonPromotor = document.querySelector("#boton-promotor");
    const botonPromotora = document.querySelector("#boton-promotora");
    const botonVerTodos = document.querySelector("#boton-ver-todos");
    const contenedorTalentos = document.querySelector("#lista-talentos");

    function filtrarTalentos(palabraClave) {
        const regex = new RegExp(`\\b${palabraClave}\\b`, "i");

        contenedorTalentos.querySelectorAll(".contenedor-talento").forEach(function (elemento) {
            if (regex.test(elemento.textContent)) {
                elemento.style.display = "flex";
            } else {
                elemento.style.display = "none";
            }
        });
    }

    botonActriz.addEventListener("click", function () {

        filtrarTalentos("actriz");
    });

    botonActor.addEventListener("click", function () {
        filtrarTalentos("actor");
    });

    botonPromotor.addEventListener("click", function () {
        filtrarTalentos("promotor");
    });

    botonPromotora.addEventListener("click", function () {
        filtrarTalentos("promotora");
    });

    botonVerTodos.addEventListener("click", function () {
        contenedorTalentos.querySelectorAll(".contenedor-talento").forEach(function (elemento) {
            elemento.style.display = "flex";
        });
    });
});

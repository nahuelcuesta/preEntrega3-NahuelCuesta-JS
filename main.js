const talentos = [];

const listaTalentos = document.querySelector("#lista-talentos");


//LeerBotones

const botonActriz = document.querySelector("#boton-actriz");

const botonActor = document.querySelector("#boton-actor");

const botonPromotor = document.querySelector("#boton-promotor");

const botonPromotora = document.querySelector("#boton-promotora");

//escucharEventos

botonActriz.addEventListener('click', mostrarActrices);
botonActor.addEventListener('click', mostrarActores);
botonPromotor.addEventListener('click', mostrarPromotores);
botonPromotora.addEventListener('click', mostrarPromotoras);

//dibujar

const contenedorTalentosSeleccionados = document.querySelector("#contenedor-talentos-seleccionados");

//funciones

function mostrarActrices( evt){
    console.log(evt);
}
function mostrarActores ( evt){
    console.log(evt);
}

function mostrarPromotores( evt){
    console.log(evt);
}

function mostrarPromotoras( evt){
    console.log(evt);
}


const btnSeleccion = document.querySelector("#carro-talentos-btn");
const btnCerrar = document.querySelector("#contenedor-carrito-talentos div button");
const contenedorCarritoTalentos = document.querySelector("#contenedor-carrito-talentos");
const navCarroTalentos = document.querySelector("#nav-carro-talentos");

btnSeleccion.addEventListener("click",()=>{

if(contenedorCarritoTalentos.style.display === "none"){

    contenedorCarritoTalentos.style.display = "flex" ;
    navCarroTalentos.classList.add ("invertir-color");

}else {
    contenedorCarritoTalentos.style.display = "none"
    navCarroTalentos.classList.remove ("invertir-color");
}
})

btnCerrar.addEventListener("click",()=>{
    contenedorCarritoTalentos.style.display = "none";
    navCarroTalentos.classList.remove ("invertir-color");
    })

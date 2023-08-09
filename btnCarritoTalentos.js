const btnSeleccion = document.querySelector("#carro-talentos-btn");
const btnCerrar = document.querySelector("#contenedor-carrito-talentos div button");
const contenedorCarritoTalentos = document.querySelector("#contenedor-carrito-talentos");
const navCarroTalentos = document.querySelector("#nav-carro-talentos");

btnSeleccion.addEventListener("click",()=>{

if(contenedorCarritoTalentos.style.display === "none"){

    contenedorCarritoTalentos.style.display = "flex" ;
    navCarroTalentos.classList.add ("invertir-color");
    listaTalentos.style.margin = "0px 0px 350px 0px";

}else {
    contenedorCarritoTalentos.style.display = "none"
    navCarroTalentos.classList.remove ("invertir-color");
    listaTalentos.style.margin = "0px 0px 70px 0px";
}
})

btnCerrar.addEventListener("click",()=>{
    contenedorCarritoTalentos.style.display = "none";
    navCarroTalentos.classList.remove ("invertir-color");
    listaTalentos.style.margin = "0px 0px 70px 0px";
    })

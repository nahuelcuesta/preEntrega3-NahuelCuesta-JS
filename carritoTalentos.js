const talentosSeleccionados = [];

// console.log(listaTalentos);
// console.log(contenedorCarritoTalentos);

const borrarLista = document.querySelector('#borrar-lista');
const contenedorTalentos = document.querySelector('#contenedor-carrito-talentos tbody');

listaTalentos.addEventListener('click', agregarTalento);
borrarLista.addEventListener('click', borrarTalentos);

function agregarTalento(evt){
    evt.preventDefault();
    if (evt.target.classList.contains('contratar-talento')){
        const talento = evt.target.parentElement;
        // console.log(talento);
        datosTalento(talento);
    }
}
function datosTalento(dato){
    const infoTalento = {
        imagen : dato.querySelector('img').src,
        nombre : dato.querySelector('.nombre-datos').innerText,
        id: dato.querySelector('a').getAttribute('data-id'),
    }
talentosSeleccionados.push(infoTalento);
console.log(talentosSeleccionados);
agregarHTML();
}

function agregarHTML() {
    borrarTalentos();
    talentosSeleccionados.forEach( talento => {
        const fila = document.createElement ('tr');
        fila.innerHTML = `
        <td><img src="${talento.imagen}"></td>
        <td>${talento.nombre}</td>
        <td><button class="btn-X" data-id =${talento.id}>X</button></td>
        `;
        contenedorTalentos.appendChild (fila);
    })
    
}

function borrarTalentos (){
   while(contenedorTalentos.firstChild){
    contenedorTalentos.removeChild(contenedorTalentos.firstChild)
   }
}
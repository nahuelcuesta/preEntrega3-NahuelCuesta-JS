let talentosSeleccionados = [];

const talentosLocalStorage = 'talentosSeleccionados';

window.addEventListener('load', () => {
    const talentosSeleccionadosLS = localStorage.getItem(talentosLocalStorage);
    if (talentosSeleccionadosLS) {
        talentosSeleccionados = JSON.parse(talentosSeleccionadosLS);
        agregarHTML();
    }
    const contadorCarrito = document.querySelector('#contador-seleccion');
    contadorCarrito.textContent = talentosSeleccionados.length;
});

const borrarLista = document.querySelector('#borrar-lista');
const contenedorTalentos = document.querySelector('#contenedor-carrito-talentos tbody');

listaTalentos.addEventListener('click', agregarTalento);
borrarLista.addEventListener('click', vaciarLista);
contenedorTalentos.addEventListener('click', borrarTalento);

function borrarTalento(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('btn-X')) {
        const talento = evt.target.parentElement.parentElement;
        const talentoID = talento.querySelector('button').getAttribute('data-id');
        talentosSeleccionados = talentosSeleccionados.filter(talento => talento.id !== talentoID);

        localStorage.setItem(talentosLocalStorage, JSON.stringify(talentosSeleccionados));
        agregarHTML();
    }
}

function vaciarLista(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('borrar-lista-btn')) {
        talentosSeleccionados = [];
        agregarHTML();
        localStorage.removeItem(talentosLocalStorage);
    }
}

function agregarTalento(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('contratar-talento')) {
        const talento = evt.target.parentElement;
        datosTalento(talento);
        localStorage.setItem(talentosLocalStorage, JSON.stringify(talentosSeleccionados));
    }
}

function datosTalento(dato) {
    const infoTalento = {
        imagen: dato.querySelector('img').src,
        nombre: dato.querySelector('.nombre-datos').innerText,
        id: dato.querySelector('a').getAttribute('data-id'),
    }

    if (talentosSeleccionados.some(item => item.id === infoTalento.id)) {
    }
    else {
        talentosSeleccionados.push(infoTalento);
    }

    agregarHTML();
}

function agregarHTML() {
    borrarTalentos();
    talentosSeleccionados.forEach(talento => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td><img src="${talento.imagen}"></td>
        <td>${talento.nombre}</td>
        <td><button class="btn-X btn-x2" data-id =${talento.id}>X</button></td>
        `;
        contenedorTalentos.appendChild(fila);
    })
    const contadorCarrito = document.querySelector('#contador-seleccion');
    contadorCarrito.textContent = talentosSeleccionados.length;
}

function borrarTalentos() {
    while (contenedorTalentos.firstChild) {
        contenedorTalentos.removeChild(contenedorTalentos.firstChild)
    }
}









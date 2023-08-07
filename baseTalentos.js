const listaTalentos = document.querySelector("#lista-talentos");

const talentos = [
    { imagen: "../assets/talentos/talento1.jpg", altImagen : "JUAN SOLIS actor", nombre: "JUAN SOLIS", profesion: "Actor", altura : "1,70", genero : "Hombre", ciudad : "Buenos Aires"},
    { imagen: "../assets/talentos/talento2.jpg", altImagen : "Esteban Rimo actor y musico", nombre: "Esteban rimo", profesion: "Actor, Musico", altura : "1,92", genero : "Hombre", ciudad : "Buenos Aires"},
    { imagen: "../assets/talentos/talento3.jpg", altImagen : "JULIA SEGANCHA Actriz, Clown", nombre: "JULIA SEGANCHA", profesion: "Actriz, Clown", altura : "1,85", genero : "Mujer", ciudad : "Rosario"},
    { imagen: "../assets/talentos/talento4.jpg", altImagen : "DIMITRI CORSA Actor, Bailarin, Promotor", nombre: "DIMITRI CORSA", profesion: "Actor, Bailarin, Promotor", altura : "1,68", genero : "Hombre", ciudad : "Cordoba"},    
    { imagen: "../assets/talentos/talento5.png", altImagen : "ANDREA DEMODO Actriz, Promotora", nombre: "ANDREA DEMODO", profesion: "Actriz, Promotora", altura : "1,73", genero : "Mujer", ciudad : "Buenos Aires"},
    { imagen: "../assets/talentos/talento6.jpg", altImagen : "JOSEFINO KUL Actor, Mimo", nombre: "JOSEFINO KUL", profesion: "Actor, Mimo", altura : "1,89", genero : "Hombre", ciudad : "Rosario"},
    { imagen: "../assets/talentos/talento7.jpg", altImagen : "SOFIA BERA Promotora", nombre: "SOFIA BERA", profesion: "Promotora", altura : "1,78", genero : "Mujer", ciudad : "Rosario"},
    { imagen: "../assets/talentos/talento8.jpg", altImagen : "SUSANA LOZA Actriz, Promotora", nombre: "SUSANA LOZA", profesion: "Actriz, Promotora", altura : "1,64", genero : "Mujer", ciudad : "Buenos Aires"},
    { imagen: "../assets/talentos/talento9.jpg", altImagen : "RODRIGO LASARNA Actor, Mimo", nombre: "RODRIGO LASARNA", profesion: "Actor, Mimo", altura : "1,74", genero : "Hombre", ciudad : "Cordoba"},
    { imagen: "../assets/talentos/talento10.jpg", altImagen : "GUILLERMINA DAS Actriz, Promotora", nombre: "GUILLERMINA DAS", profesion: "Actriz, Promotora", altura : "1,79", genero : "Mujer", ciudad : "Rosario"},
    { imagen: "../assets/talentos/talento11.jpg", altImagen : "LUCAS ARTO Actor, Promotor", nombre: "LUCAS ARTO", profesion: "Actor, Promotor", altura : "1,63", genero : "Hombre", ciudad : "Buenos Aires"},
    { imagen: "../assets/talentos/talento12.jpg", altImagen : "CAMILA HILO Actriz", nombre: "CAMILA HILO", profesion: "Actriz", altura : "1,85", genero : "Mujer", ciudad : "Rosario"},
    
]

for(const talento of talentos ){
    const contenedor = document.createElement ("div");
    contenedor.className = "contenedor-talento";
    contenedor.innerHTML = `
        <img src="${talento.imagen}" alt="${talento.altImagen}">
        <p class="nombre-datos">${talento.nombre}</p>
        <p>${talento.profesion}</p>
        <p>Altura: <span>${talento.altura}</span></p>
        <p>${talento.genero}</p>
        <p>${talento.ciudad}</p>
        <a href="#" class="contratar-talento" data-id="1">SOLICITAR CASTING</a>`;
    listaTalentos.appendChild(contenedor);
}


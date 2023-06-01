// Eventos de DOM explicados en clase 

// Avisar de que cargo el DOM en la consola
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM CARGADO")
})

// otra manera de hacerlo:

window.onload = () => {
    console.log("DOM CARGADO 1")
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM CARGADO 2")    
})

// Selecionar un selector desde la consola, agregarle un evento: que salga en la consola cuando arrastras el mouse por el nav

const nav = document.querySelector(">Selector copiado aca<")
nav.addEventListener("mouseenter", () => {
    console.log("Entrando en el nav")
    // modificar el nav:
    nav.style = "font-size: 20px; background: red"
})

// otro evento seria el mouseout: se ejecuta en la consola un log cuando el mouse sale del nav y tambien podemos ponerle color al salir del nav

nav.addEventListener("mouseout", () => {
    console.log("Saliendo del nav")
    nav.style = "background: blue"
})

// podemos agregar un evento mediante un click :

nav.addEventListener("click", () => {
    console.log("entrando al nav");
}
)

// se puede generar las funciones por fuera, ejemplo:

nav.addEventListener("click", modificarEstilos);

function modificarEstilos() {
    console.log("entrando al nav");
    nav.style = "background: blue";
}


// podemos hacer scroll en la pagina indicando por cual pixel pasamos o a cual queremos llegar
// ejemplo de scroll y ( de arriba hacia abajo)
window.addEventListener("scroll", () => {
    console.log(scrollY)
})

// capturar el scroll segun el movimiento dentro de la web
window.addEventListener("scroll", () => {
    const scrollY = windows.scrollY;
    console.log(scrollY);
    // hacemos un if / else para indicar a la web a que scroll queremos llegar
    if (scrollY >= 1500){
        console.log(scrollY);
    }
})


// capturar un punto de visivilidad cuando hacemos scroll

const premium = document.querySelector(".premium");
const ubicacion = premium.getBoundingClientRect();
console.log(ubicacion.top);
if (ubicacion.top < 760) {
    console.log("elemento visible");
} else {
    console.log("elemento no visible")
}


// caputar un input y modificarlo copiando el selector de JS por la pagina. despues hacer un evento "blur" = perder el foco

const input = document.querySelector(".busqueda");
console.log(input);
input.addEventListener("blur", (e) => {
    console.log(e)
    // podemos modificar el navegador de la web cuando lo marcamos con el queryselector
    e.target.placeholder = "Nuevas modificaciones del placeholder";
    e.target.style.background = "red";
})

// podemos crear un evento donde activamos la funcion cuando hacemos foco con el mouse y tambien devolver el color al buscador 
input.addEventListener("focus", (e) => {
    e.target.style.background = "";
    e.target.placeholder = "Nuevas modifcaciones con focus"
})

// e = event, se marca para aplicar las funciones

// Hacemos un mapa de codigos para que se entienda como darle multiples funciones al navegador sin aplicar muchos codigos y hacer una buena practica
//primero seleccionamos el selector
const inputs /*aca es input*/ = input.querySelector(".busqueda");
// agregamos los eventos y los llamados para aplicar funciones
input.addEventListener ("blur", desenfocar);

input.addEventListener("focus", enfocar);

// funciones que se aplican cuando enfocamos en el navegador
function enfocar (e) {
    // editar el background
    e.target.style.background = "";
    // editar el chat de fondo que aparece en el navegardor
    e.target.placeholder = "New York, Londres, Buenos aires";
    // cambiar el nombre de la clase del selector
    e.target.className = "";
}
// funciones que se aplican cuando desenfocamos el navegador
function desenfocar (e) {
    // modificamos el placeholder
    e.target.placeholder = "Nuevas Modificaciones del placeholder";
    // modificamos el background
    e.style.background = "red"; 
    // modificamos nombre del contenedor "div > class"
    e.target.className = "contenedor";
    // modificamos el chat escrito
    e.target.disabled = true;
}

// capturar lo que escribimos en el navegador mediante evento
const hola /*aca va input*/ = document.querySelector(".busqueda");
input.addEventListener("input", (e) => {
    console.log(e.target.value);
}) 

// el "value" es para capturar lo que se escribe dentro del navegador


// indicar al usuario que debe llenar el campo del navegador

const chau /*aca va input*/ = document.querySelector(".busqueda");
// hacemos el evento en comentario porque esta todo el archivo modificado y tira error
//input.addEventListener("input", (e) => {
//     if (e.target.value === "") {
//      alert("Debe llenar el campo")
//})

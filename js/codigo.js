const botonCargar = document.getElementById("cargar");
botonCargar.addEventListener("click", cargarProyectos);

function cargarProyectos() {
    fetch("js/datos.json")
    .then(respuesta => respuesta.json())
    .then(proyectos => {
        const contenedor = document.querySelector("section");
contenedor.innerHTML = "";
for (const proyecto of proyectos) {
    contenedor.innerHTML += `
        <div>
            <h2>${proyecto.titulo}</h2>
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <p>${proyecto.descripcion}</p>
            <p>${proyecto.detalles}</p>
        </div>
    `;
}

    });
   }
    const botonTema = document.getElementById("tema");
const cuerpo = document.querySelector("body");

botonTema.addEventListener("click", cambiarTema);

function cambiarTema() {
    cuerpo.classList.toggle("dark");
  

}
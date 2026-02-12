'use strict'

const container = document.getElementById("container");
const titulo = document.createElement("h1");
titulo.textContent = "EJERCICIO DOM "

container.appendChild(titulo);

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Hola mundo" ;


const students = ['Diego','Pedro','Luis','Carla','Paola','Alexandra'];

const list= document.createElement("ol");

//
students.forEach((student) => 
    {
        const item = document.createElement("li");
        item.textContent = student;
        list.appendChild(item);
    }
)


container.appendChild(list)
container.appendChild(nuevoParrafo);

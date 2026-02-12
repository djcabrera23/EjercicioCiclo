'use strict'

const container = document.getElementById("container");

const list = [
    {
        id:1,
        fullname:"Diego Cabrera",
        url:"https://www.shutterstock.com/shutterstock/photos/2551033277/display_1500/stock-photo-man-png-mockup-in-brown-hoodie-street-fashion-full-body-2551033277.jpg"
    },
    {
        id:2,
        fullname:"Juan Pérez",
        url:"https://www.shutterstock.com/shutterstock/photos/2333089669/display_1500/stock-photo-portrait-of-confident-man-with-arms-crossed-and-serious-face-isolated-on-transparent-png-background-2333089669.jpg"
    },
    {
        id:3,
        fullname:"Luis Guamán",
        url:"https://www.shutterstock.com/shutterstock/photos/2676507311/display_1500/stock-photo-isolated-doctor-man-arms-crossed-and-portrait-with-smile-for-health-by-transparent-png-background-2676507311.jpg"
    },
    {
        id:4,
        fullname:"Carlos Crespo",
        url:"https://www.shutterstock.com/shutterstock/photos/2672934261/display_1500/stock-photo-excited-man-points-up-in-a-bright-place-isolated-png-2672934261.jpg"
    },
    {
        id:5,
        fullname:"Maria Torres",
        url:"https://www.shutterstock.com/shutterstock/photos/2450485669/display_1500/stock-photo-png-a-girl-in-a-hat-and-a-scarf-with-a-cup-in-her-hands-isolated-on-a-white-background-2450485669.jpg"
    },
    {
        id:6,
        fullname:"Carla López",
        url:"https://www.shutterstock.com/shutterstock/photos/2660212615/display_1500/stock-photo-cheerful-girl-with-curly-hair-gesturing-cheerfully-isolated-png-2660212615.jpg"
    },
    {
        id:7,
        fullname:"Alexandra Toral",
        url:"https://www.shutterstock.com/shutterstock/photos/2683831923/display_1500/stock-photo-cheerful-person-with-gold-black-friday-cart-isolated-png-2683831923.jpg"
    },
    {
        id:8,
        fullname:"Daniela Chavez",
        url:"https://images.icon-icons.com/1161/PNG/512/1487716857-user_81635.png"
    },
    {
        id:9,
        fullname:"Samuel Cabrera",
        url:"https://images.icon-icons.com/1161/PNG/512/1487716857-user_81635.png"
    },
    {
        id:10,
        fullname:"Steven Contento",
        url:"https://images.icon-icons.com/1161/PNG/512/1487716857-user_81635.png"
    },
    {
        id:11,
        fullname:"Belen Quito",
        url:"https://images.icon-icons.com/1161/PNG/512/1487716857-user_81635.png"
    }
]
const titulo = document.createElement("h1");
titulo.textContent = "Listado Estudiantes "

container.appendChild(titulo);

list.forEach((student) => 
    {
        const div = document.createElement("div");
        div.id ="estudiante"
        const image = document.createElement("img");
        image.src= student.url;
        image.width = 100;
        image.height= 150;
        console.log(student.image)
        const fullname= document.createElement("p");
        fullname.textContent = student.fullname;
        div.appendChild(image);
        div.appendChild(fullname)
        container.appendChild(div)
        
    }
)



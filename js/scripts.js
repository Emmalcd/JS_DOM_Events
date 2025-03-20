// console.log(`Funciona correctamente`);


// querySelector ->Selecciona uno o cero elementos
// tag element
// .clase
// #id
// const header = document.querySelector('.header__texto h2');
// header.textContent="Esto se escribio desde JS";
// console.log(header);


//querySelectorAll -> Selecciona de 0 a todos los elementos
// tag element
// .clase
// #id
const enlaces= document.querySelectorAll('.navegacion a');
// console.log(enlaces);
// console.log(enlaces[0]);
enlaces[0].textContent="Texto X"
enlaces[0].href="https://x.com/?lang=es";
enlaces[0].classList.add('nueva__clase1');
enlaces[0].classList.add('nueva__clase2');
enlaces[0].classList.remove('nueva__clase1')


// getElementById
// Tambien funciona con class, name, etc

const heading = document.getElementById('heading');

heading.textContent="Esto se escribio con un getElementById";

// Crear elementos con JS
// Generando un nuevo enlace
const nuevoEnlace=document.createElement('A'); //Se prefiere que las etiquetas HTML se pongan en mayusculas 
// Agregar el href
nuevoEnlace.href='nueva-url';
// Agregar el texto 
nuevoEnlace.textContent='nuevo texto'
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');



// Agregarlo al HTML
const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(navegacion);
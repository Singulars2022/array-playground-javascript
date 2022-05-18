// Implementa en este fichero la solución
// Escribe antes todos los pasos que hay que realizar con lenguaje natural

// Estas palabras prohibidas vienen de la base de datos. Úsa la variable palabrasProhibidas, porque sus valores podrían cambiar en función de las necesidades del censor 

let palabrasProhibidas = ["Bugatti", "yummy", "booty"];

console.log("Es hora de censurar!");

// Tengo que recuperar todos los <span> y recorrerlos

let allSpans = document.querySelectorAll("span");

for (let i = 0; i < allSpans.length; i++) {
    // Si el contenido de cada uno de los span esta en el array palabrasProhibidas, entonces tengo que substuir el contenido del span por unos *****

    console.log(allSpans[i].textContent);
};




// Resultado esperado: tras cargar la aplicación Web, las palabras contenidas en el array 'palabrasProhibidas' han sido substituidas por **** en el documento Web ya renderizado.

// Pista: Fíjate que todas las palabras candidatas a ser prohibidas estan dentro de un <span>
// Pista: REcuerda que existe un método de array muy interesante para saber si un elemento esta dentro de un array: https://www.w3schools.com/jsref/jsref_includes_array.asp
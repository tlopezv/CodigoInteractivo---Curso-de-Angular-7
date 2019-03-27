// NOTA: Para transpilar este archivo a JavaScript utilizamos el comando:
// tsc .\app.ts
// Generando el archivo app.ts

// NOTA: Si yo utilizo el siguiente comando:
// tsc -w *.ts
// Pongo a escuchar los cambios que puedan surgir en mis archivos .ts

// Utilizo la consola para mostrar información
console.log('hola mundo typescript');

// Mostramos un mensaje con una ventana de advertencia
alert('pasamos por aquí');

// Let / avr / Const

// En JavaScript hay dos formas de declarar variables: var y let, var no tiene ámbito
// de bloque mientras que let sí

// var
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); // 456

// let
let foo2 = 123;
if (true) {
    let foo2 = 456;
}
console.log(foo2); // 123

// Ha sido añadido en ES6 / TypeScript permitiéndonos añadir variables inmutables también
// conocidas como constantes. El uso de const es una buena práctica de mantenimiento y 
// legibilidad. Las constantes deben ser declaradas y asignadas siempre.

const foo3 = 123;
//foo3 = 456; // NO permitido

// Las constantes también admiten objetos literales como por ejemplo:

const foo4 = { bar: 123 };
//foo4 = { bar: 456 }; // ERROR no se premite la modificación de objeto

// Pero si se puede modificar el contenido de las variables que contiene el objeto literal,
// ejemplo:

const foo5 = { bar: 123 };
foo5.bar = 456; // Permitido
console.log(foo5); // { bar: 456 }
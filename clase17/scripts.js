//accedemos al body y obtenemos el body
const bodyElement= document.getElementsByTagName("body");

//cantidad de nodos hijos
// cantidad de elementos

bodyElement.length;

//acceder al primer elemento hijo del body(el main)
const bodytag=bodyElement[0].firstChild;

const MainTag= bodyElement[0].getElementsByTagName("main")
console.log('mainTag',MainTag)

// accedo con id

const h1Tag= document.getElementById('titulo')

console.log(h1Tag)

//acceder al padre desde el hijo

const padreDeH1= h1Tag.parentNode;
console.log(padreDeH1);

// determino si un element tiene hijos

const haschild= h1Tag.hasChildNodes; // devuelve tru o 9false
console.log('h1tag',haschild ? 'tiene hijos':'no tiene')
//el textoi se considera hijo

// ir al ultmo elemento
const main=MainTag[0];
const firschild=main.firschild;
const lastchild=main.lastchild;
console.log(firschild)
console.log(lastchild)
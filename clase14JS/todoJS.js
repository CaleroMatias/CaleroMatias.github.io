let variableLocal;
var variableGlobal;
const VariableNoCambia=1;



console.log(VariableNoCambia);

variableLocal="matias";
console.log(variableLocal)

const nombres=[];//array de string vacio

const materias=['lengua','matematica','Fisica']
console.log(materias[0])

// creo un objeto//
let persona={
    edad:36,
    Argentina:true,
    nombre: 'matias',
    apellido:'calero',
    idiomas:['español','ingles']
}
console.log(persona,typeof persona)

let nacionalidad='    argentina    '
//sacar espacio
nacionalidad=nacionalidad.trim()
console.log(nacionalidad)
//pasar a mayuscula
nacionalidad=nacionalidad.toUpperCase();
console.log(nacionalidad);
//pasar a minusculas
nacionalidad=nacionalidad.toLocaleLowerCase();
console.log(nacionalidad)
//cantidad de caracteres
console.log(nacionalidad.length);
//cambiar variable ejemplo string a int
let valorstring='100'
valorstring=parseInt(valorstring);
valorstring=Number(valorstring);
valorstring=+valorstring


//par o impara simepre es 0 o 1 
anio=2022 
let resto =anio %2
console.log(resto)

//switch
 let edad=1

 switch(edad){
     case 1:
         alert('soy 1');
         break;
     case 2:
         alert('soy 2') 
         break;
     default:
         alert('soy otro');
 }

 // estructura de iteracion

 let alumnos=['cristian','alejandro','javier','pepe']

 let tamanio= alumnos.length;

 for(let i=0;i< tamanio;i++)
 {
     console.log(i,alumnos[i],typeof alumnos[i])
 }

 // foreach

 for(let nombre of alumnos){
     console.log(nombre);
 }

 // while = hasta que
let i=0
 while(alumnos[i]!='javier')
 {
     console.log(i,alumnos[i]);
     i++;
 }

 i=0
 while(i<tamanio)
 {
     if(alumnos[i]==='javier'){
         console.log(i,'javier');
         break;
     }    
     i++;
 }

// con objet
let alumnosObj=[
    {
        nombre:'matt',
        edad: 35
    },
    {
        nombre:'pepe',
        edad: 36
    }, {
        nombre:'juan',
        edad: 29
    }    
]
//detectar el menor de los alumnos
//en un objeto

let primero=true;
let masChico;
for(const alumnoObj of alumnosObj){
    if(primero)
    {
        masChico=alumnoObj;
        primero=false;
    }   
    if(masChico.edad>alumnoObj.edad)
    {
     masChico=alumnoObj
    }
}
console.log('el alumo mas chico es',masChico)


// metodo del los arrays
// ver posisiones donde se repitan los valores
// para eso  hago un push en un array y voy guardadno el valor

const vector = [1,2,3,3,3,2,1,1,1]
let contador=0;
let posiciones=[];

for(let i=0;i< vector.length; i++)
{
    if(vector[i]===3)
    {
       contador++;
       posiciones.push(i);
    }
}
console.log('cantidad de 3',contador)
console.log('posiciones',posiciones)

let mayoresA1=[];
for(let i of vector)
{
    if(i>1){
        mayoresA1.push(i)
    }
}
console.log(mayoresA1);

// filter
let mayoresA2confilter =vector.filter(num => num>2);
console.log(mayoresA2confilter);

// clase 16
// atentciona la comilla!!!!!!!!!!!!
const cantiadpersonas =prompt('ingrese un valor');
alert(`se van a cargar ${cantiadpersonas} presonas`);

let personas =[];
for (let i=0; i<cantiadpersonas;i++)
{
    const Nombre = prompt('ingrese se Nombre');
    const Apellido = prompt('ingrese se Apellido')
    // creo un objeto persona con 2 variables con una funcion
    const persona = construirPersona(Nombre,Apellido)
    personas.push(persona)
    
}
// recorro para mostrar quienes estan en el vector

for( const persona of personas)
{
    console.log(persona)
}


function construirPersona(pNombre,pApellido){
    const persona={
        Nombre:pNombre,
        Apellid:pApellido
    };
    return persona
}



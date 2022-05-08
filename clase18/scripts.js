//capturo el elemento html
   //1.const btnAdd= document.getElementById('btnAdd');
   //2. en vez de escribir varias veces la opcion uno creo una funcion q captura los id
const btnAdd= getId('btnAdd');

/////////////
// lo siguiente se usa para guardar los valores en el sesion storege y al actulizar mantenga los mismos
const articulos=localStorage.getItem('articulos');

///////////

//asocio al boton un evento click y creo una funcion
//btnAdd.addEventListener('click',()=>{
 //   alert()
//})

btnAdd.addEventListener('click',function(){
    //capturo el input
    const inputTitulo=getId('titulo');
    //para caputar el valor de los h1/label utilizamos innerhtml, segun l aetiqueta el cual captura el texto
    //para un input value etc.
    //debugger
   
    //capturo
    const valor=inputTitulo.value;
    // valido que no sea vacio

    if(valor!=='')
    {        
   
    //AHORA AGREGO EL VALOR DEL INPUT A LA LISTA  ENTONCS

    //TOMO EL UL
    const ul =getId('listado')
    //CREO UN ELEMTNO <li> para agregar una elemento a mi lista
    //creo el elemnto
    const li= document.createElement('li');

    // puedo agregar  dinamicamente una clase y un id
    li.id= Math.random(); // me da valor random entre 0 1
    li.className='liEstilo'

    //ahora le agrego el valor del input capturado
    // li.nodeValue=valor;
    li.innerHTML=valor; 
    //ahora agrego el elemto li al UL
    ul.appendChild(li);
    //limpio el input
    inputTitulo.value='';
    //vuelvo a poner el focus dentro del input
    inputTitulo.focus();

    articulos.push(valor);
    //localStorage.setItem('articulos',articulos) solo para strings
    // pero si tuviera algun clave :valor usaria lo siguiente

    localStorage.setItem('articulos',JSON.stringify(articulos))//me lo guarda como un array

}
})

//Hago una funcion para capturar los id
function getId(id){
    return document.getElementById(id)
}
// al body le asociamos un evento load

const body=document.getElementById('body')[0];
body.addEventListener('load',()=>{
//1 tomamos del localstorag la clave --> articulos
    const articulos=localStorage.getItem(articulos)//me lo guarda como un array

    //2 convertimos el texto planto a objeto con JSON.parse()

    const arrayArticulos=JSON.parse(articulos);
    
    //3 invocar un funcion que dibuje otra vez los li dentro del ul
    for(const texto of arrayArticulos)
    {
        agregarLi();
    }   
    
});function agregarLi(){
     //TOMO EL UL
     const ul =getId('listado')
     //CREO UN ELEMTNO <li> para agregar una elemento a mi lista
     //creo el elemnto
     const li= document.createElement('li');
 
     // puedo agregar  dinamicamente una clase y un id
     li.id= Math.random(); // me da valor random entre 0 1
     li.className='liEstilo'
 
     //ahora le agrego el valor del input capturado
     // li.nodeValue=valor;
     li.innerHTML=valor; 
     //ahora agrego el elemto li al UL
     ul.appendChild(li);
}

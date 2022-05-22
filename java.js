

const btnResumen=document.getElementById('btnResumen');
const cantidad=document.getElementById('inputCantidad');
const categoria =document.getElementById('inputCategoria')
const nombre=document.getElementById('inputNombre');
const apellido=document.getElementById('inputApellido');
const email=document.getElementById('inputEmail');
const btnBrorrar=document.getElementById('btnBorrar')

let descuento=0;

btnResumen.addEventListener('click',()=>{
debugger
    let validado='';
    validado=validar();
    if(validado==='ok'){
    const total =calcularTotal()
    mostrarResulado(total) 
   
    }
    else{
        alert('Debe completar todos los campos')
    }
});

btnBrorrar.addEventListener('click',()=>{
    borrar();
})

function calcularTotal(){

    const cant= parseInt(cantidad.value);
    const categ=categoria.value   
    const entrada=200;
    
    switch(categ){
        case '1' :
            descuento=parseFloat(0.8);
        break;
        case '2':
            descuento=parseFloat(0.5);
        break;
        case '3':
           descuento=parseFloat(0.15);
        break;
        default:
            alert('categoria no valida')          
    }
    const total= cant*(entrada-(entrada*descuento))
    return total;
}

function mostrarResulado(total){
    const divResultado = document.getElementById('inputTotal');
    divResultado.placeholder='Total a Pagar: $'+total;
}
function validar(){

    if(nombre.value!=""&& apellido.value!=""&& email.value!=""&& cantidad.value!=""){
        return 'ok';
        }
       

    

}
function borrar(){
    nombre.value="";
    email.value=""
    apellido.value="";
    cantidad.value=""

}




    

    
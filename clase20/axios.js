async function getUserData(pagina){
 const response=  await axios.get(`https://reqres.in/api/users?page=${pagina}`)
 return response;
 // le paso la variable con comilla inclinada +signo peso
}
const btn = document.getElementById('btnGetData');

btn.addEventListener('click', async()=>{
    //capturo la pagina del input
    const paginainput=document.getElementById('pagina');
    if(!paginainput.value){
        alert('ingrese pagina a buscar')
        return;
    }
    
    
    // llamo a la funcion
    
    const response= await getUserData(paginainput.value);
    
    //axios retorna obj.data y dentro del data el _Json
    const jsonData=response.data// ojo no es el
    // o solo tomo del objeto lo que me interesa 
    const jsonDataMapped= jsonData.data.map((x)=>{
        return {
            id: x.id,
            email: x.email
        }
    })
    //puedoactualizar el div con jsonData
    //pero primero lo convierto en texto al json
   // const jsonDataAsText = JSON.stringify(jsonData);
   const jsonDataAsText = JSON.stringify(jsonDataMapped);

    

    // ahora actualizao el valor del div
    //capturo el div por su id
    const divEnHtml = document.getElementById('content');
    divEnHtml.innerHTML=jsonDataAsText;
})
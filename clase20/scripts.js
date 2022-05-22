/*map*/

const personas=[
    {
        id:1,// Math.random(),
        nombre:'matias',
        edad: 15,
        apellido: 'calero',
        drieccion:{
            calle:'larrazabal',
            altura:123
        },
        sueldo:55000
    },
    {
        id:2, //Math.random(),
        nombre:'juan',
        edad: 25,
        apellido: 'perez',
        drieccion:{
            calle:'alberdo',
            altura:5747
        },
        sueldo:9000
    },
]

//la funcion map permite tomar algo y convertilo en otr cosa

//ej si quiero solo los id
const filtrados = personas.filter(x=>x.edad>15) // solo filtra pero devuelve todo el objeto
console.log(filtrados)
// pero la funcion map
const mapeados=personas.map((x)=>{
   const nuevo = {
       id:x.id,
       sueldo:x.sueldo
   }
});
console.log(mapeados)

// para hacer peticiones y queremos levantar informacion
//reqres.in

const apiResult=
{
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
      },
      {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg"
      },
      {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg"
      }
    ],
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// queiro filtrar la lista por id
// con id>7
// solo necesito id y email

// entonces aplico filtro sobre apiresul.data
const filtrado= apiResult.data.filter(x=>x.id>7)
const mapeo=filtrado.map((aux=>{
    const objConvertido={
        id:aux.id,
        email: aux.email
    }
    return objConvertido;
}));
console.log('obj completo',apiResult);
console.log('filtrado',filtrado);
console.log('convertido',mapeo)
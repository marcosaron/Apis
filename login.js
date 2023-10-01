const botonLogin = document.getElementById("BotonForm");
const URL =  "https://jsonplaceholder.typicode.com/users."




botonLogin.addEventListener("click", () => { 

const nombre = document.getElementById("name").value
const apellido = document.getElementById("Apellido").value
const bornDate = document.getElementById("Borndate").value
console.log(nombre)
console.log(apellido)
console.log(bornDate)

const datos = {
    Name: {}, 
    Apellido: {}, 
    Fecha: {}
}
datos.Name = nombre
datos.Apellido = apellido
datos.Fecha = bornDate
console.log(datos)
fetch(URL, {
    method: "POST",
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
})
    .then(response => {
    if (!response.ok) {
        throw new Error("Error en la respuesta");
    }
    return response.json();
    })
    .catch(error => {
     
    console.error("Error ha ocurrido:", error);
    });
})

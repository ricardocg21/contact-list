/* crear una lista de contactos que contenga:
1. ID
2.Nombre
3.Apellidos
4.Teléfono
5.ubicaciones-> - ciudad -dirección
-> ajustar funciones que permitan crear y eliminar un contacto */

// Lista de Contactos



 let listaContactos = [
    
    {

    id: 3456 , 
    "nombre": "Raul Fernando" , 
    "apellidos" : "Jimenez Prieto" , 
    "telefono" : 3102810847 , 
    "ubicacion": [["Bogotá"], ["Cra 17# 146-62"]]
    

},

    {

    id: 2579 , 
    "nombre": "Jaime Andrés" , 
    "apellidos" : "Gonzalez Burbano" , 
    "telefono" : 3112310444 , 
    "ubicacion": [["Bucaramanga"], ["Cra 23# 12-64"]] 

},

   {

    "id": 4816 , 
    "nombre": "Sandra Patricia" , 
    "apellidos" : "Gomez Jaimes" , 
    "telefono" : 3204817867 , 
    "ubicacion": [["Cali"], ["Cra 40# 63-2"]]  

}
]

// En este apartado se trabajarán las funciones de agregar contacto y eliminar contacto

//-> Agreando un contacto nuevo a la lista de contactos
arr= {
    "id": 5516 , 
    "nombre": "Camila Andrea", 
    "apellidos" : "Cabrera Garcia" , 
    "telefono" : 3184827867 , 
    "ubicacion": [["Mosquera"], ["Cra 67# 21-15"]]
}


function crearContacto(arr){
listaContactos.push(arr);
}

// Eliminando un contacto por medio de una funcion que recibe su codigo y al detectarlo en el arreglo elimina todo el objeto
function eliminarContacto(id){

    for( i=0; i<listaContactos.length;i++ ) {

        if (listaContactos[i].id===id){

 listaContactos.splice(i,1);
            
        }

    }
return listaContactos
}

crearContacto(arr);

eliminarContacto(4816);

console.log(listaContactos);




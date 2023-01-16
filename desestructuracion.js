
//ANCHOR ---> Desestructuracion de Objetos

let usuario = {
    nombre: "Pepito",
    edad: 22,
    esCasado: true
}

// usuario.nombre
// usuario.edad
// usuario.esCasado

// console.log( usuario.nombre )
// console.log( usuario.edad )
// console.log( usuario.esCasado )

// ANCHOR NO IMPORTA EL ORDEN PERO SI EL NOMBRE DE LA PROPIEDAD
let { edad, esCasado, nombre } = usuario

console.log( edad )
console.log( nombre )
console.log( esCasado )

console.log("---------")
console.log("---------")
console.log("---------")
//ANCHOR ---> Desestructuracion de Arrays

let nombres = ["fulanito", "maria", "juancito"]

// console.log( nombres[0] )
// console.log( nombres[1] )
// console.log( nombres[2] )

// NO IMPORTA EL NOMBRE PERO SI EL ORDEN
let [ personaDelUltimo, persona1, persona2 ] = nombres

console.log(personaDelUltimo)
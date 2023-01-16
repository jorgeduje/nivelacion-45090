
// LINK METODOS PARA ARREGLOS 

// ANCHOR ---> Metodo map
// SIEMPRE DEVUELVE UN NUEVO ARREGLO DE LA MISMA LONGITUD
// CON LO QUE NOSOTROS LE INDIQUEMOS TENIENDO ACCESO A CADA ELEMENTO DEL ARRAY

let numeros = [ 1, 2, 3, 4, 5 ] // [0, 2, 6, 12, 20]
// let nuevoArr = []

// for (let i = 0; i < numeros.length; i++) {
//     nuevoArr.push( numeros[i] * 10 )
// }

let productos = [
    {
        nombre: "televisor",
        precio: 222
    },
    {
        nombre: "celular",
        precio: 900
    },
    {
        nombre: "zapatilla",
        precio: 21
    },
]

// let numeros = [ 1, 2, 3, 4, 5 ]
let nuevoArr = numeros.map(  (elemento, indice) =>  elemento * 10)

console.log(nuevoArr)


// ANCHOR ---> Metodo filter
// DEVUELVE TAMBIEN UN ARREGLO SOLO CON LOS ELEMENTOS QUE CUMPLAN LA CONDICION

let arrFiltrado = productos.filter( ( elemento )=> elemento.precio < 5000 )
console.log(arrFiltrado)


// ANCHOR ---> Metodo find
// DEVUELVE EL PRIMER ELEMENTO QUE CUMPLA LA CONDICION ( LO DEVUELVE TAL CUAL ES )


let elementoEncontrado = productos.find( (elemento)=> elemento.precio < 5000 )
console.log(elementoEncontrado)

// ANCHOR ---> Metodo some
// DEVUELVE UN BOOLEANO ( TRUE / FALSE ) DEPENDIENDO
// SI POR LO MENOS UNO DE LOS ELEMENTOS CUMPLE LA CONDICION

let hayProductosCaros = productos.some( (elemento)=> elemento.precio > 1000)

console.log(hayProductosCaros)
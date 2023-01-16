
// ANCHOR ---> SPREAD OPERATOR
// ANCHOR ---> COPIA POR VALOR VS COPIA POR REFERENCIA

let a = 5
let b = a

a += 1

console.log(a)
console.log(b)

let numeros = [1, 2, 3]

let copiaNumeros = [...numeros]

copiaNumeros.push( 22 )

console.log( numeros )
console.log( copiaNumeros )


let auto = {
    modelo: 2015,
    color: "rojo"
}

let autoNuevo = {...auto} 

autoNuevo.color = "amarillo"

console.log(auto)
console.log(autoNuevo)


console.log("---------")
// ANCHOR ---> REST OPERATOR

const sumar = (...props)=>{

    console.log(props)

}

sumar(1, 3, 2, 5, 15)


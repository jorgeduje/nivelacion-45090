
// ANCHOR ---> operador ternario y operador AND (&&)

let clima = "Lluvioso"

const llevoParagua = ( tipoClima )=>{

    // if( tipoClima === "Lluvioso"){
    //     return "si llevalo"
    // }else{
    //     return "No, no hace falta"
    // }

    // condicion ? "verdadero" : "falso"
    // return tipoClima === "Lluvioso" ? "si llevalo" : "No, no hace falta"
    return tipoClima === "Lluvioso" && "si llevalo"

}

let condicionFinal = llevoParagua(clima)
console.log( condicionFinal )
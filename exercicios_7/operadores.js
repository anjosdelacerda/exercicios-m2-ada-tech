
 const verificarNumber = (num1,num2)=>{
    const arr = [num1, num2]
    const arrVerify = arr.every((num) => typeof num === 'number')

    return arrVerify

 }

 const verificaString = (srt) =>{
    const strValid = typeof srt === 'string'

    return strValid
 }

 const adicao = (num1, num2) =>{

    return num1 + num2

 }

 const subtracao = (num1, num2) =>{
    return num1 - num2
 }

 const multiplicacao = (num1, num2) =>{
    return num1 * num2
 }

 const divisao = (num1, num2) =>{
    return num1 / num2
 }

const calculoMatematico = (num1,num2, operador) =>{

    const arrVerify = verificarNumber(num1,num2)

    if(!arrVerify){
        return "num1 e num2 precisam ser do tipo number"
    }

    const operadorVerify = verificaString(operador)

    if(!operadorVerify){
        return "o operador deve ser passado como uma string"
    }

    let resultado

    switch (operador) {
        case "+":
            resultado = adicao(num1,num2)
            break;
        case "-":
            resultado = subtracao(num1,num2)
            break;
        case "*":
            resultado = multiplicacao(num1,num2)
            break;
        case "/":
            resultado = divisao(num1,num2)
            break;
        default:
            resultado = "Operador invalido, escolha entre adição (+), subtração (-), multiplicação (*) ou divisão(/)"
            break;
    }

    return resultado
}

console.log(calculoMatematico(10,5,"+"))
console.log(calculoMatematico(10,5,"-"))
console.log(calculoMatematico(10,5,"*"))
console.log(calculoMatematico(10,5, "/"))
console.log(calculoMatematico(10,5,"**"))
console.log(calculoMatematico("10", 5, "+"))

//1 

const number1 = 5
const number2 = 4

const listaDeEquações = () =>{ 
    const soma = number1 + number2 
    const subtracao = number1 - number2 
    const mulplicacao = number1 * number2 
    const divisao = number1 / number2

    const lista = []

    lista.push(soma)
    lista.push(subtracao)
    lista.push(mulplicacao)
    lista.push(divisao)

    return lista
}

//2

const notas = [9 , 10, 2]

const calcularMediaDeNotas = (lista) =>{

    const listaVerificada = Array.isArray(lista)

    if(!listaVerificada){
        return "este campo aceita apenas vetores"
    }

    const tiposVerificados = lista.every((item) => typeof item === 'number')

    if(!tiposVerificados){
        return "todos os itens do vetor devem ser do tipo number"
    }

    const somaDasNotas = lista.reduce((acc, currentValue) => {
        return acc + currentValue
    }, 0)

    const mediaDasNotas = somaDasNotas / lista.length 

    return mediaDasNotas
    
}

// console.log(calcularMediaDeNotas(notas))

//3 

const matriz = [
    [2, 4],
    [8, 2]
]

const calculoDeMatriz = (matriz) =>{

    const verificacaoUmDaMatriz = Array.isArray(matriz)

    if(!verificacaoUmDaMatriz){
        return "toda matriz é necessáriamente um array"
    }

    const verificacaoDoisDaMtriz = matriz.every((lista) => Array.isArray(lista))

    if(!verificacaoDoisDaMtriz){
        return "toda matriz necessáriamente é composta apenas por arrays"
    }

    const verificacaoDeTipos = matriz.every((lista) =>{
        const saoTodosNumericos = lista.every((coluna) => typeof coluna === 'number')

        if(!saoTodosNumericos){
            return false
        }

        return true
    })

    if(!verificacaoDeTipos){
        return "todas as cédulas da matriz devem ser do tipo numérico"
    }

    const diagonal1 = matriz[0][0] * matriz[1][1]
    const diagonal2 = matriz[0][1] * matriz[1][0]

    const resultado = diagonal1 - diagonal2

    return resultado
}

// console.log(calculoDeMatriz(matriz))

const listaX = [500, 1000, 800]
const listaY = [600, 400, 700]

const produtoEscalar = (listaX, listaY) => {

    const listaXVerificada = Array.isArray(listaX)
    const listaYVerificada = Array.isArray(listaY)

    if(! listaXVerificada || !listaYVerificada){
        return "ambos campos precisam ser um array"
    }

    const verificaTiposX = listaX.every((num) => typeof num === 'number')
    const verificaTiposY = listaY.every((num) => typeof num === 'number')

    if(!verificaTiposX || !verificaTiposY){
        return "os campos dos vetores precisam ser do tipo number"
    }

    return  listaX[0] * listaY[0] + listaX[1] * listaY[1] + listaX[2] * listaY[2]

}

// console.log(produtoEscalar(listaX, listaY))

const listaDeNumeros = [1,2,3,4,5,6,7,8,9]

const filtraPares = (lista) => {

    const listaVerificada = Array.isArray(lista)

    if(!listaVerificada){
        return "o campo espera um array"
    }

    const listaDePares = lista.filter((num) => typeof num === 'number' && number % 2 === 0)

    return listaDePares
}

const listaDosNomes = ['ana', 'maria', 'lia', 'elisa', 'marisa','mia']


const filtraNomes = (lista) => {

    const listaVerificada = Array.isArray(lista)

    if(!listaVerificada){
        return "o campo espera um array"
    }

    const listaDeNomes = lista.filter((name) => typeof name === 'string' && name.length > 4)

    return listaDeNomes
}

const idades = [10, 12, 17, 18, 20, 22]

const encontrarIdade = (lista) =>{

    const listaVerificada = Array.isArray(lista)

    if(!listaVerificada){
        return "este campo aceita apenas vetores"
    }

    const tiposVerificados = lista.every((item) => typeof item === 'number')

    if(!tiposVerificados){
        return "todos os itens do vetor devem ser do tipo number"
    }

    const primeiraMaiorIdade = lista.findIndex((idade) => idade >= 18)

    return primeiraMaiorIdade

}

const calcularMediaDeNotas2 = (lista) =>{

    const listaVerificada = Array.isArray(lista)

    if(!listaVerificada){
        return "este campo aceita apenas vetores"
    }

    const tiposVerificados = lista.every((item) => typeof item === 'number')

    if(!tiposVerificados){
        return "todos os itens do vetor devem ser do tipo number"
    }

    const listaEmModoCrescente = lista.sort((a,b) =>{
        if(a > b){
            return 1
        }

        if(a < b){
            return -1
        }

        return 0
    })

    listaEmModoCrescente.shift()
    listaEmModoCrescente.pop()

    const somaDasNotas = listaEmModoCrescente.reduce((acc, currentValue) => {
        return acc + currentValue
    }, 0)

    const mediaDasNotas = somaDasNotas / listaEmModoCrescente.length 

    return mediaDasNotas
    
}

const formaFrases = (lista) => {

    const listaVerificada = Array.isArray(lista)

    if(!listaVerificada){
        return "o campo espera um array"
    }

    const tiposVerificados = lista.filter((name) => typeof name === 'string')

    if(!tiposVerificados){
        return "todos os itens do array devem ser strings"
    }

    const frase = lista.join(" ")

    return frase

}
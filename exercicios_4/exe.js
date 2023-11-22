const parOuImpar = (num) =>{

    return num % 2 === 0 ? "par" : "ímpar"
}

const verificaNota = (num) =>{

    let message 

     if(num >= 90){

        message = "Aprovado com mérito"
    }

    if(num >= 70 && num < 90){

        message = "Aprovado"
    }
    
    if(num < 70){

        message = "Reprovado"
    }

    return message
}


const maiorNumero = (num1, num2, num3) => {

    const lista = [num1, num2, num3]

    const listaOrdenada = lista.sort((a,b)=>{
        if(a > b){
            return 1
        }

        if(a < b){
            return -1
        }

        return 0
    })

    const maiorNumero = listaOrdenada.pop()

    return maiorNumero

}

const tipoDeTriangulo = (num1, num2, num3) => {

    if(num1 === num2 && num2 === num3){
        return "equilátero"
    }

    if(num1 === num2 && num2 !== num3){
        return "isóceles"
    }

    if(num1 !== num2 && num2 === num3){
        return "isóceles"
    }

    return "escaleno"

}

const verificarBisexto = (ano) =>{

    if(ano % 4 === 0){
        if(ano % 100 !== 0){
            if(ano % 400 === 0){
                return "é bisexto"
            }

            return "é normal"
        }
        return "é bisexto"
    }

    return "é normal"
}

const verificaIdade = (idade) =>{

    const podeComprar = idade >= 18

    if(!podeComprar){
        return "não pode comprar"
    }

    return "pode comprar"
}

const switchParOuImpar = (num) =>{

    switch (num) {
        case num % 2 === 0:
            numero = "par"
            break;
        default:
            numero = "ímpar"
            break;
    }

    return numero
}

const verificaVogal = (letra) => {

    const letraTratada = letra.toLowerCase()

    switch (letraTratada) {
        case "a":
            resultado = "vogal"
            break;
        case "e":
            resultado = "vogal"
            break;
        case "i":
            resultado = "vogal"
            break;
        case "o":
            resultado = "vogal"
            break;
        case "u":
            resultado = "vogal"
            break;
    
        default:
            resultado = "consoante"
            break;
    }

    return resultado
}

function determinarEstacaoDoAno(mes) {
    switch (mes.toLowerCase()) {
      case 'dezembro':
      case 'janeiro':
      case 'fevereiro':
        return 'Inverno';
      case 'março':
      case 'abril':
      case 'maio':
        return 'Primavera';
      case 'junho':
      case 'julho':
      case 'agosto':
        return 'Verão';
      case 'setembro':
      case 'outubro':
      case 'novembro':
        return 'Outono';
      default:
        return 'Mês inválido';
    }
  }

  
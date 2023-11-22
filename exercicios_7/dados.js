

const validarTiposNumericos = (num1, num2, num3)=>{

    const arr = [num1, num2, num3]

    const arrVerificado = arr.every((num) => typeof num === 'number')

    return arrVerificado
}

const rolarDado = (lados) =>{
    const dado = Math.floor(Math.random() * lados)

    if(dado < 1){
        return 1
    }

    return dado
}

const rolagemDeDados = (dados, lados) =>{

    const rolagens = []

    for(let i = 0; i < dados; i++){
        let contador = i + 1
        const dado = rolarDado(lados)
        const rolagem = `Dado ${contador}: ${dado}`
        rolagens.push(rolagem)
    }

    const tentativa = rolagens.join("\n")
    return tentativa
}

const jogadaCompleta = (dados, lados, tentativas) => {

    const tiposVerificados = validarTiposNumericos(dados, lados, tentativas)

    if(!tiposVerificados){
        return "todos os parâmetros devem ser do tipo numérico"
    }

    const rolagens = []

    for(let i = 0; i < tentativas; i++){
        let contador = i + 1
        const rolagensDosDados = rolagemDeDados(dados, lados)
        const tentativa = `Tentativa ${contador}: \n${rolagensDosDados}`
        rolagens.push(tentativa)
    }

    const jogadaCompleta = rolagens.join("\n")
    return jogadaCompleta
}


// console.log(jogadaCompleta(12, 12, 12))
const criarEscada = (num) =>{

    if(typeof num !== "number"){
        return "o parâmetro num deve ser obrigatóriamente do tipo number"
    }

    let hash =  num
    let espaco = 0

    const list = []

    for(let i = 0; i < num; i++){
        const espacos = " ".repeat(espaco)
        const hashs = "#".repeat(hash)
        const degrau = espacos + hashs
        list.push(degrau)
        hash -=1
        espaco += 1
    }

    const listaEscada = list.reverse()
    const escada = listaEscada.join("\n")

    return escada

}

console.log(criarEscada(5))
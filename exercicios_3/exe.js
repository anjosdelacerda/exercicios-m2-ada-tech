let listaDeCompras = new Map()

listaDeCompras.set("Maçãs", 5)
listaDeCompras.set("Bananas", 3)
listaDeCompras.set("Leite", 2)
listaDeCompras.set("Pão", 1)

// console.log(listaDeCompras)
listaDeCompras.get("Maçãs")
listaDeCompras.set("Maçãs", 10)
listaDeCompras.delete("Bananas")
// console.log(Object.fromEntries(listaDeCompras.entries()))
// console.log(listaDeCompras.get("Maçãs") + listaDeCompras.get("Leite") + listaDeCompras.get("Pão"))

const agenda = []

const cadastrarContato = (nome, telefone, email) =>{

    const contato = {}

    contato.nome = nome
    contato.telefone = telefone 
    contato.email = email

    agenda.push(contato)

    return agenda
}

const dicionarioDeSinonimos = {
    feliz: ["alegre", "contente", "satisfeito"],
    triste: ["melancolico", "abatido", "deprimido"],
    bom: ["excelente", "ótimo", "maravilhoso"]
}

const listaDeSinonimos = dicionarioDeSinonimos.feliz.concat(dicionarioDeSinonimos.triste, dicionarioDeSinonimos.bom)

// console.log(listaDeSinonimos)

const criarDicionarioDeSinonimos = (lista) =>{

    const dicionarioDeSinonimos2 = {
        feliz: [],
        triste: [],
        bom: []
    }

    lista.map((palavra) => {
        if(palavra === "alegre" || palavra === "contente" || palavra === "satisfeito"){
            dicionarioDeSinonimos2.feliz.push(palavra)
        }
        if(palavra === "melancolico" || palavra === "abatido" || palavra === "deprimido"){
            dicionarioDeSinonimos2.triste.push(palavra)
        }
        if(palavra === "excelente" || palavra === "ótimo" || palavra === "maravilhoso"){
            dicionarioDeSinonimos2.bom.push(palavra)
        }
    })

    return dicionarioDeSinonimos2

}

// console.log(criarDicionarioDeSinonimos(listaDeSinonimos))

const pessoa = new Map()

pessoa.nome = "Abelarda"
pessoa.idade = 19
pessoa.cidade = "São Paulo"

const verificaIdade = pessoa.idade >=18 
const verificaCidade = pessoa.cidade === "São Paulo"

// console.log(verificaCidade, verificaIdade)

const aluno = new Map()

aluno.nome = "Yago"
aluno.nota1 = 10
aluno.nota2 = 5 

const notaAlta = (aluno.nota1 + aluno.nota2) /2 >= 7 
// console.log(notaAlta)

const frutas = new Map()

frutas.maça = 15 
frutas.pera = 5 
frutas.uva = 5 
frutas.banana = 2

const verificaPreco1 = frutas.maça > frutas.banana 
const verificaPreco2 = frutas.pera === frutas.uva 

// console.log(verificaPreco1, verificaPreco2)
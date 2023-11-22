class Account{
    constructor(nome,idade,email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.saldo = 0;
        this.entradas = [];
        this.saidas = [];
    }

    mostrarInfos(){
        return `Nome: ${this.nome} \n
                Idade: ${this.idade} \n
                E-mail: ${this.email} \n
                Saldo: ${this.saldo}`
    }

    deposito(valor){
        
        if(valor <= 0 || typeof valor !== 'number'){
            return "não é possível efetuar um depósito vazio"
        }

        const entrada = {
            tipo: "entrada",
            valor
        }

        this.entradas.push(entrada)

        this.saldo += valor * 100

        return `Depósito de ${valor} feito com sucesso. O seu saldo atual é ${this.saldo / 100} reais.`

    }

    saque(valor){

        if(valor <= 0 || typeof valor !== 'number'){
            return "não é possível sacar um valor vazio"
        }

        if(valor * 100 > this.saldo){
            return "saldo insuficiente"
        }

        const saida = {
            tipo: "saída",
            valor
        }

        this.saidas.push(saida)

        this.saldo -= valor * 100

        return `Saque de ${valor} feito com sucesso. O seu saldo agora é de ${this.saldo / 100} reais`

    }

    extrato(){
        return this.entradas.concat(this.saidas)
    }

    mostrarSaldo(){
        return this.saldo / 100
    }

    mostrarEntradas(){
        return this.entradas
    }

    mostrarSaidas(){
        return this.saidas
    }
}

const nando = new Account("fernando", 28, "anjosdelacerda@gmail.com")

console.log(nando.mostrarInfos())
console.log(nando.mostrarSaldo())
console.log(nando.deposito(555))
console.log(nando.mostrarSaldo())
console.log(nando.saque(5555))
console.log(nando.saque(125))
console.log(nando.mostrarSaldo())
console.log(nando.mostrarEntradas())
console.log(nando.mostrarSaidas())
console.log(nando.extrato())
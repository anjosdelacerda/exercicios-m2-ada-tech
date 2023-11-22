
const contagemRegressiva = () => {

    let contador = 10

    while(contador >= 0){
        console.log(contador)
        contador -= contador 
    }

    return "fim"
}

const verificaPrimos = (num) => {
    let primo = true;
    let contador = 2;

    while (contador < num) {
        if (num % contador == 0) {
            primo = false;
            break;
        }
        contador++;
    }

    if (primo) {
        console.log(num + " é um número primo.");
    } else {
        console.log(num + " não é um número primo.");
    }
}

const lerNumero = () => {
    return parseInt(prompt("Insira um número inteiro: "));
  };
  
  const calcularSomaNumerosPares = () => {
    let numero = lerNumero();
    let soma = 0;
  
    while (numero !== 0) {
      if (numero % 2 === 0) {
        soma += numero;
      }
  
      numero = lerNumero();
    }
  
    return soma;
  };
  


  const gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  
  const adivinharNumero = () => {
    const numeroAleatorio = gerarNumeroAleatorio();
    let numeroUsuario = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
    let tentativas = 1;
  
    while (numeroUsuario !== numeroAleatorio) {
      if (numeroUsuario > numeroAleatorio) {
        numeroUsuario = parseInt(prompt("O número é menor. Tente novamente: "));
      } else {
        numeroUsuario = parseInt(prompt("O número é maior. Tente novamente: "));
      }
  
      tentativas++;
    }
  
    return `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
  };
  
  const adivinharNumero2 = () => {
    const numeroAleatorio = gerarNumeroAleatorio();
    let numeroUsuario = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
    let tentativas = 1;
  
    while (numeroUsuario !== numeroAleatorio) {

        if(tentativas > 4){
            return "Você excedeu o número de tentativas"
        }

      if (numeroUsuario > numeroAleatorio) {
        numeroUsuario = parseInt(prompt("O número é menor. Tente novamente: "));
      } else {
        numeroUsuario = parseInt(prompt("O número é maior. Tente novamente: "));
      }
  
      tentativas++;
    }
  
    return `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
  };
  
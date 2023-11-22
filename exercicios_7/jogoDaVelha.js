const grade = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const promptEstilizado = (num) => {
    const numVerificado = typeof num === 'number' && (num === 0 || num === 1);

    if (!numVerificado) {
        return "erro interno, o parâmetro *** deveria ser numérico. Nosso suporte resolverá o problema em instantes";
    }

    const frase1 = "Sua vez, Jogador 1: ";
    const frase2 = "Sua vez, Jogador 2: ";

    return num === 0 ? prompt(frase1) : prompt(frase2);
};

const posicoes = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
};

const tabuleiro = (jogador, casa) => {
    casa = Number(casa);

    const [linha, coluna] = posicoes[casa];

    if (grade[linha][coluna] !== null) {
        return "essa casa já foi escolhida";
    }

    grade[linha][coluna] = jogador === 0 ? 'x' : 'o';

    const jogadorDaVez = jogador === 0 ? "Jogador 1" : "Jogador 2"

    const frase = `${jogadorDaVez} escolheu a casa ${casa}`;
    console.log(grade);

    return frase;
};

const verificarVencedor = () => {
    const linhas = [
        [grade[0][0], grade[0][1], grade[0][2]],
        [grade[1][0], grade[1][1], grade[1][2]],
        [grade[2][0], grade[2][1], grade[2][2]],
        [grade[0][0], grade[1][0], grade[2][0]],
        [grade[0][1], grade[1][1], grade[2][1]],
        [grade[0][2], grade[1][2], grade[2][2]],
        [grade[0][0], grade[1][1], grade[2][2]],
        [grade[0][2], grade[1][1], grade[2][0]],
    ];

    for (const linha of linhas) {
        if (linha.every((elem) => elem === 'x')) {
            return 'Jogador 1 venceu!';
        } else if (linha.every((elem) => elem === 'o')) {
            return 'Jogador 2 venceu!';
        }
    }

    return null;
};

const jogoDaVelha = () => {
    let num = 0;

    while (num < 9) {
        const suaVez = promptEstilizado(num % 2);
        console.log(suaVez);
        const jogadaAtual = tabuleiro(num % 2, suaVez);

        if (jogadaAtual === "essa casa já foi escolhida") {
            console.log(jogadaAtual);
            continue;
        }

        const vencedor = verificarVencedor();
        if (vencedor) {
            console.log(vencedor);
            break;
        }

        num++;
    }

    if (num === 9) {
        console.log("Empate!");
    }
};

jogoDaVelha();

//Exercicio 16 - Calculadora de Desconto
function exercicio16() {
    const preco = Number(prompt("Digite o preço do produto:"));
    const porcentagem = Number(prompt("Digite a porcentagem de desconto:"));

    const valorDesconto = preco * (porcentagem / 100);
    const precoFinal = preco - valorDesconto;

    console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(1)}`);
    console.log(`Preço final: R$ ${precoFinal.toFixed(1)}`);
}
exercicio16()
//Exercicio 17 -  Conversor de Temperatura
function exercicio17() {
    const celsius = Number(prompt("Digite a temperatura em Celsius:"));

    if (celsius) {
        alert("Digite um número válido.");
        return;
    }
    const fahrenheit = celsius * 1.8 + 32;

    alert(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(1)}°F`);
}
exercicio17()
//Exercicio 18 - Aluguel de Carro
function exercicio18() {
    const Dias = Number(prompt("Digite a quantidade de dias de aluguel: "))
    const KMRodado = Number(prompt("Digite a quantidade de KM's rodados: "))
    const valorDia = 60
    const valorKM = 0.15
    const resultado = (Dias * valorDia) + (KMRodado * valorKM)

    alert(`O preço total a pagar é: ${resultado}`)
}
exercicio18()
//Exercicio 19 - Situação de Votação
function exercicio19() {
    const idade = Number(prompt("digite sua idade"))

    if (idade < 16) {
        alert("não votante")
    } else if (idade >= 16 && idade < 18) {
        alert("voto opcional")
    } else {
        alert("voto obrigatório")
    }
}
exercicio19()
//Exercicio 20 - IMC com Classificação
function exercicio20() {
    const altura = Number(prompt("insira sua altura"))
    const peso = parseFloat(prompt("insira seu peso"))
    const resultado = peso / (altura * altura)

    if (resultado < 18.5) {
        alert(`${resultado}abaixo do peso`)
    } else if (resultado >= 18.5 && resultado < 24.9) {
        alert(`${resultado} peso normal`)
    } else if (resultado >= 25 && resultado < 29.9) {
        alert(`${resultado} sobrepeso`)
    } else {
        alert(`${resultado} obesidade`)
    }
}
exercicio20()

//Exercicio 21 - Formas de Pagamento
function exercicio21() {
    const preco = Number(prompt("digite o valor a vista"))
    const quantidade = Number(prompt("digite a quantidade de vezes"))
    if (quantidade === 1) {
        const avista = preco - (preco * 0.10)
        alert(`valor final com 10% de desconto ${avista}`)
    } else if (quantidade === 2) {
        alert(`valor final sem desconto ${preco}`)
    } else if (quantidade >= 3) {
        const juros = preco + (preco * 0.20)
        alert(`preco final 20% de juros ${juros}`)
    }
}
exercicio21()
//Exercicio 22 - É um Triângulo?
function exercicio22() {
    const primeiroLado = Number(prompt("Informe o primeiro lado:"));
    const segundoLado = Number(prompt("Informe o segundo lado:"));
    const terceiroLado = Number(prompt("Informe o terceiro lado:"));

    if (primeiroLado + segundoLado > terceiroLado) {
        console.log("É possível fazer um triângulo.");
    }
    else {
        console.log("Não é possível fazer um triângulo.")
    }
}
exercicio22()

//Exercicio 23 - Maior de Três
function exercicio23() {
    const primeiroValor = Number(prompt("Digite o primeiro valor: "))
    const segundoValor = Number(prompt("Digite o segundo valor: "))
    const terceiroValor = Number(prompt("Digite o terceiro valor: "))

    if (primeiroValor > segundoValor && primeiroValor > terceiroValor) {
        alert(`Entre os 3 números informados, o ${primeiroValor} é o maior!`)
    } else if (segundoValor > primeiroValor && segundoValor > terceiroValor) {
        alert(`Entre os 3 números informados, o ${segundoValor} é o maior!`)
    } else {
        alert(`Entre os 3 números informados, o ${terceiroValor} é o maior!`)
    }
}
exercicio23()
//Exercicio 24 - Ordem Crescente
function exercicio24() {
    const numero1 = Number(prompt("Digite o seu primeiro numero"));
    const numero2 = Number(prompt("Digite o seu segundo numero"));

    if (numero1 > numero2) {
        console.log("O primeiro numero " + numero2 + " e o segundo numero " + numero1);
    } else if (numero1 === numero2) {
        console.log("O primeiro numero " + numero1 + " e o segundo numero " + numero2 + " sao iguais");
    } else {
        console.log("O primeiro numero " + numero1 + " e o segundo numero " + numero2);
    }
}
exercicio24()
//Exercicio 25 - Ano Bissexto
function exercicio25() {
    const ano = Number(prompt("Digite um ano:"));

    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) ||
        (ano % 400 === 0);

    if (ehBissexto) {
        alert(`O ano ${ano} é bissexto.`);
    } else {
        alert(`O ano ${ano} não é bissexto.`);
    }
}
exercicio25()
//Exercicio 26 - Alistamento Militar
function exercicio26() {
    const anoAtual = 2025;
    const anoNascimento = Number(prompt("Digite seu ano de nascimento:"));

    const idade = anoAtual - anoNascimento;

    alert(`Você tem ${idade} anos em ${anoAtual}.`);

    if (idade < 18) {
        const faltam = 18 - idade;
        alert(`Ainda vai se alistar. Faltam ${faltam} anos.`);
    } else if (idade === 18) {
        alert("Está na hora de se alistar!");
    } else {
        const passou = idade - 18;
        alert(`Já passou do tempo de alistamento. Passaram ${passou} anos.`);
    }
}
exercicio26()
//Exercicio 27 - Média com Status
function exercicio27() {
    const nota1 = Number(prompt("Digite a primeira nota: "));
    const nota2 = Number(prompt("Digite a segunda nota: "));

    const media = (nota1 + nota2) / 2;

    alert(`Sua média é: ${media.toFixed(1)}`);

    if (media < 5) {
        alert("Status: Reprovado");
    } else if (media < 7) {
        alert("Status: Recuperação");
    } else {
        alert("Status: Aprovado!");
    }
}
exercicio27()
//Exercicio 28 - Pedra, Papel e Tesoura
function exercicio28() {
    const jogador1 = Number(prompt("Jogador 1 - Digite 1 para Pedra , 2 para Papel ou 3 para Tesoura:"));
    const jogador2 = Number(prompt("Jogador 2 - Digite 1 para Pedra , 2 para Papel ou 3 para Tesoura:"));

    if (jogador1 === jogador2) {
        alert("Empate!");
    }
    else if (
        (jogador1 === 1 && jogador2 === 3) || // Pedra ganha de Tesoura
        (jogador1 === 3 && jogador2 === 2) || // Tesoura ganha de Papel
        (jogador1 === 2 && jogador2 === 1)    // Papel ganha de Pedra
    ) {
        alert("Jogador 1 Ganhou!");
    }
    else {
        alert("Jogador 2 Ganhou!");
    }
}
exercicio28()
//Exercicio 29 - Preço da Passagem
function exercicio29() {
    const distancia = Number(prompt("Digite a distância em Km:"));
    let preco;

    if (distancia <= 200) {
        preco = distancia * 0.50;
    } else {
        preco = distancia * 0.45;
    }

    alert(`O preço da passagem é: R$ ${preco.toFixed(1)}`);
}
exercicio29()
//Exercicio 30 - Empréstimo Bancário
function exercicio30() {
    const valorCasa = Number(prompt("Digite o valor da casa:"));
    const salario = Number(prompt("Digite seu salário:"));
    const anos = Number(prompt("Em quantos anos vai pagar?"));

    const meses = anos * 12;
    const prestacao = valorCasa / meses;
    const limite = salario * 0.30;

    alert(`A prestação mensal será de: R$ ${prestacao.toFixed(1)}`);

    if (prestacao <= limite) {
        alert("Empréstimo APROVADO!");
    } else {
        alert("Empréstimo NEGADO!");
    }
}
exercicio30()

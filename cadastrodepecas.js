var CadastroDePecas = ["AB", "Peça 2", "Peça 3", "Peça 4", "Peça 5", "Peça 6", "Peça 7", "Peça 8", "Peça 9", "Peça 10", "Peça 11"];
console.log("Quantidade de Peças");

if (CadastroDePecas.length > 10) {
    console.log("Capacidade Insuficiente");
} else {
    console.log("Capacidade Suficiente!");
}

console.log("Quantidade de caracteres");

for (contador = 0; contador < CadastroDePecas.length; contador++) {
    var PecaAtual = CadastroDePecas[contador];

    if (PecaAtual.length < 3) {
        console.log(PecaAtual + ": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada!")
    } else {
        console.log(PecaAtual + ": a peça pode ser cadastrada!")
    }
}

console.log("Peso da peça");

var  PesoDaPecaEmGramas = 450;

if(PesoDaPecaEmGramas >= 100) {
    console.log("Peso Suficiente!");
} else {
    console.log("Peso Insuficiente!");
}


console.log(apresentar())
function apresentar() {
    return "ola!";
}
 // codigo 2.
console.log(soma(1, 1))
const soma = function (num1, num2) { return num1 + num2 }

// hoisting: a primeira coisa que o javascript faz eh listar as funcoes e (var) no topo do codigo, o segundo caso eh uma expressao de funcao, nao funciona o hoisting
//arrow function
const apresentarArrow = nome => `meu nome eh ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow function com + de 1 linha de instrucao

const somaNumerosPequenos = (num1, num2) => {
    if ( num1 > 10 || num2 > 10 ) {
        return "somente numeros de 1 a 9";
    } else {
      return num1 + num2;  
    }
}
console.log(somaNumerosPequenos(11, 3))

//arrow function se comporta igual expressao de funcao
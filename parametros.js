//parametros de funcao

// function soma(num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2, 2))


function nome(nome1, sobrenome2) {
    return nome1 + sobrenome2;
}

//console.log(nome("Bruno" , "Rombi"))

// function minco(minco, minco2) {
//     return `meu nome eh ${minco}, e tenho ${minco2} anos de idade`;
// }

// //console.log(minco("bruno", 19))

// function multiplica(numero1 , numero2) {
//     return numero1 * numero2;
// }

// function soma(num1, num2) {
//         return num1 + num2;
// }

// console.log(multiplica(soma(4, 5), soma(3, 3)))
function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
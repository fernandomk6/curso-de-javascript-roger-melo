/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

const invert = aString => aString
  .split('')
  .reverse()
  .join('')



const invert2 = aString => {
  let reversedString = ''
  for (let index = aString.length -1; index >= 0; index-- ) {
    reversedString += aString[index]
  }

  return reversedString
}

const invert3 = aString => aString
  .split('')
  .reduce((accumulator, char) => 
    char + accumulator, '')


/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
const foundNumber = numbers.some(number => number === 15)
const foundNumber2 = numbers.includes(15)
const foundNumber3 = !!numbers.find(number => number === 15)
// const foundNumber3 = Boolean(numbers.find(number => number === 15))

// Abstração: é expor o excencial e ocultar o menos importante.
// Abstração: é uma forma de reduzir a complexidade.

// console.log(foundNumber)

// let foundNumber = false

// numbers.forEach(number => {
//   if (number === 15) {
//     foundNumber = true
//   }
// })

// console.log(foundNumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/

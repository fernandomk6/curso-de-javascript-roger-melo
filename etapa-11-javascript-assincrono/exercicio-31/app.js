/*
  01

  - Utilizando a fetch API, implemente uma função assíncrona que busca dados do 
    seu perfil de usuário no GitHub, através do seguinte endpoint:
    - https://api.github.com/users/SEU_NOME_DE_USUARIO_NO_GITHUB
  - Implemente uma segunda função que exibe, no console, seus dados de usuário 
    do GitHub.
*/

const logGitHubUser = async username => 
  console.log(await getGitHubUser(username))

const getGitHubUser = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  return await response.json()
}

logGitHubUser('fernandomk6')

// const getGitHubUser = (username) => {
//   const URL = `https://api.github.com/users/${username}`

//   fetch(URL)
//     .then(response => {
//       return response.json()
//     })
//     .then(user => {
//       console.log(user)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// getGitHubUser('fernandomk6')

/*
  02

  - A partir do array numbers (abaixo), crie um novo array que contém somente 
    os números do array numbers que são divisíveis por 2 ou 3;
  - Exiba esse novo array no console.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const isDivisibleBy2Or3 = number => number % 2 === 0 || number % 3 === 0
const getDivisibleBy2Or3 = numbers => numbers.filter(isDivisibleBy2Or3)
const divisibleBy2Or3 = getDivisibleBy2Or3(numbers)

console.log(divisibleBy2Or3)

/*
  03

  - Declare um array no qual cada item desse array seja uma sílaba do seu nome.
  - A partir desse array, gere o seu nome usando a "língua do 'P'";
  - A língua do "P" é uma brincadeira onde você coloca a letra "P" antes de 
    cada sílaba de uma palavra falada, como se você estivesse falando em 
    código;
  - Exemplos de nomes na "língua do 'P'":
    - Roger => "PRoPger";
    - Natália => "PNaPtáPlia";
    - Rafaela => "PRaPfaPePla".
*/

const syllablesOfMyName = ['fer', 'nan', 'do']

const encryptPLanguageReducer = (accumulator, syllable) => 
  `${accumulator}P${syllable}`

const encryptPLanguage = syllables => 
  syllables.reduce(encryptPLanguageReducer, '')

const myNameInPLanguage = encryptPLanguage(syllablesOfMyName)
console.log(myNameInPLanguage)

/*
  04

  - Declare uma constante que receba seu primeiro nome;
  - Exiba no console todas as letras do seu nome separadas, com a seguinte
    mensagem: '"LETRA" é a POSIÇÃOª letra do meu nome.';
  - Por exemplo, se o nome é "Roger", as mensagens exibidas no console devem 
    ser:
      - "R" é a 1ª letra do meu nome;
      - "o" é a 2ª letra do meu nome;
      - E assim por diante, até a última letra.

  Dica: pesquise pelo método split.
*/

const myName = 'Fernando'

const logLetterAndPosition = (letter, index) => 
  console.log(`"${letter}" é a ${index + 1}ª letra do meu nome.`)

const logLettersAndPosition = letters => 
  letters
    .split('')
    .forEach(logLetterAndPosition)

logLettersAndPosition(myName)



/*
  05

  - Crie um objeto com as seguintes propriedades e tipos de valores:
    - name: String
    - lastname: String
    - age: Number
  - Exiba no console, em um array, todas as propriedades do objeto acima;
  - Não use nenhuma estrutura de repetição, nem crie o array manualmente.

  Dica: pesquise pelo método Object.keys().
*/

const person = {
  name: 'fernando',
  lastname: 'pereira',
  age: 23
}

const logProperty = property => console.log(property)

const logProperties = aObject => 
  Object
    .keys(aObject)
    .forEach(logProperty)


logProperties(person)

/*
  06

  - Implemente uma função que retorna as ocorrências de um determinado valor em 
    um array;
  - A função deve receber um array como 1º argumento e o valor a ser buscado no 
    array como 2º argumento;
  - Exemplo: se na invocação da função o array [1, 2, 3, 1] é passado como 1º 
    argumento e o número 1 é passado como 2º argumento, a função deve retornar 
    2, pois há duas ocorrências do número 1 no array;
  - Utilize o array abaixo para testar a função.
*/

const scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60]

const getOccurrences = (array, valueToBeFound) => 
  array.reduce((accumulator, value) => 
    valueToBeFound === value 
      ? ++accumulator 
      : accumulator
  , 0)

const occurrences = getOccurrences(scores, 85)
console.log(occurrences)

/*
  07

  - Já implementamos o método some e o método map, do zero;
  - Neste exercício, seu desafio será criar o método filter, do zero;
  - Implemente uma função "filter" que possui a mesma funcionalidade do método  
    filter original;
  - Você não poderá utilizar o método filter original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - filter([1, 2, 3], item => item) // [1, 2, 3];
    - filter([0, 1, 2], item => item) // [1, 2];
    - filter([1, 2, 3], item => item < 2) // [1];
    - filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];
    - filter([1, 2, 3, 2, 1, 5], (item, index, array) =>
        index === array.indexOf(item)) // [1, 2, 3, 5];
  - Utilize os casos acima para testar sua função;
  - Se você não se lembra como o método filter funciona, há 2 opções:
    1) Reassistir à aula "O método filter" - Aula 01-03 da etapa 08;
    2) Pesquisar no MDN.
  
  Dica: lembre-se que o método filter inclui o item em questão no novo array 
  que está sendo gerado **apenas** se a função retorna um valor truthy.
*/

const filter = (array, callback) => {
  const newArray = []

  for (let index = 0; index < array.length; index++) {
    const item = array[index]
    const wasFiltered = callback(item, index, array)

    if (!wasFiltered) {
      continue
    }

    newArray.push(item)
  }

  return newArray
}

console.log(filter([0, 1, 2], item => item))


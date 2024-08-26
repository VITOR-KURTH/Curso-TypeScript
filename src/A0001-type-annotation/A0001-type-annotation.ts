// Tipos básicos (aqui ocorre inferência de tipos)

// Type annotation: é a forma como definimos explicitamente o tipo de uma variável, função ou parâmetro.
// Aqui, estamos definindo que a variável 'nome' é do tipo string.
const nome: string = 'Vitor'; // Qualquer tipo de strings: '' "" ´´ ``

// Aqui, estamos definindo que a variável 'idade' é do tipo number.
const idade: number = 17; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744

// Aqui, estamos definindo que a variável 'adulto' é do tipo boolean.
const adulto: boolean = false; // true ou false

// Aqui, estamos definindo que a variável 'simbolo' é do tipo symbol.
const simbolo: symbol = Symbol('qualquer-symbol'); // symbol

// let big: bigint = 10n; // bigint

// Arrays

// Aqui, estamos definindo que a variável 'ArrayDeNumeros' é um array de números.
// A type annotation 'Array<number>' indica que o array contém apenas números.
let ArrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];

// Aqui, estamos definindo que a variável 'ArrayDeNumeros2' é um array de números.
// A type annotation 'number[]' é uma forma mais concisa de definir um array de números.
let ArrayDeNumeros2: number[] = [1, 2, 3, 4, 5];

// Aqui, estamos definindo que a variável 'ArrayDeStrings' é um array de strings.
// A type annotation 'Array<string>' indica que o array contém apenas strings.
let ArrayDeStrings: Array<string> = ['a', 'b', 'c', 'd', 'e'];

// Aqui, estamos definindo que a variável 'ArrayDeStrings2' é um array de strings.
// A type annotation 'string[]' é uma forma mais concisa de definir um array de strings.
let ArrayDeStrings2: string[] = ['a', 'b', 'c', 'd', 'e'];

// Objetos

// Aqui, estamos definindo que a variável 'pessoa' é um objeto com propriedades 'nome', 'idade' e 'adulto' (opcional).
// A type annotation '{nome: string, idade: number, adulto?: boolean}' indica que o objeto tem essas propriedades com esses tipos.
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 17,
  nome: 'Vitor',
};

// Funções

// Aqui, estamos definindo uma função 'soma' que recebe dois parâmetros 'x' e 'y' do tipo number e retorna um número.
// A type annotation '(x: number, y: number) => number' indica que a função tem esses parâmetros e retorna um número.
function soma(x: number, y: number): number {
  return x + y;
}

// Aqui, estamos definindo uma função 'soma2' que recebe dois parâmetros 'x' e 'y' do tipo number e retorna um número.
// A type annotation '(x: number, y: number) => number' é uma forma mais concisa de definir a função.
const soma2: (x: number, y: number) => number = (x, y) => x + y;

// Tipos básicos (aqui ocorre inferência de tipos)
const nome: string = 'Vitor'; // Qualquer tipo de strings: '' "" ´´ ``
const idade: number = 17; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
const adulto: boolean = false; // true ou false
const simbolo: symbol = Symbol('qualquer-symbol'); //symbol
//let big: bigint = 10n; // bigingt

//Arrays
let ArrayDeNumeros: Array<number>  = [1, 2, 3, 4, 5];
let ArrayDeNumeros2: number[] = [1, 2, 3, 4, 5];
let ArrayDeStrings: Array<string>  = ['a', 'b', 'c', 'd', 'e'];
let ArrayDeStrings2: string[]  = ['a', 'b', 'c', 'd', 'e'];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 17,
    nome: 'Vitor',
};
// ?: opicional

// Funções   Tipagem dos parâmetros Tipagem da função
function soma(x: number, y: number): number {
    return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;


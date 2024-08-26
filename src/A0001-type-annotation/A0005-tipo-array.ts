// Tipo array: é um tipo que representa uma coleção de valores do mesmo tipo.
// Ele pode ser representado de duas formas: `Array<T>` ou `T[]`.

// Neste exemplo, estamos criando uma função que multiplica os argumentos passados.
// O tipo dos argumentos é `Array<number>`, que é equivalente a `number[]`.
export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

// Neste exemplo, estamos criando uma função que concatena strings.
// O tipo dos argumentos é `string[]`, que é equivalente a `Array<string>`.
export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

// Neste exemplo, estamos criando uma função que converte strings para maiúsculas.
// O tipo dos argumentos é `string[]`, que é equivalente a `Array<string>`.
// O tipo de retorno é também `string[]`, que é equivalente a `Array<string>`.
export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

// Chamando as funções e imprimindo os resultados.
const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result); // 6
console.log(concatenacao); // 'abc'
console.log(upper); // ['A', 'B', 'C']

// Tipo array com tipo de elemento genérico.
export function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
    return array.filter(predicate);
}

// Chamando a função filterArray com um array de números.
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Chamando a função filterArray com um array de strings.
const strings = ['a', 'b', 'c', 'd', 'e'];
const longStrings = filterArray(strings, (x) => x.length > 1);
console.log(longStrings); // []

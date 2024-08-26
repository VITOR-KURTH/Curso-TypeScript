const dadosCliente1: [number, string] = [1, 'Vitor'];
const dadosCliente2: [number, string, string] = [1, 'Vitor', 'Kurth'];
const dadosCliente3: [number, string, string?] = [1, 'Vitor'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Vitor', 'Kurth'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Pedro';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

const array1 : readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio']

console.log(array1);
console.log(array2);

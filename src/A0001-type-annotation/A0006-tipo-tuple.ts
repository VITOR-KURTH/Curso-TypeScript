// Tipo tuple: é um tipo que representa uma coleção de valores de tipos diferentes.
// Ele é representado por uma lista de tipos entre colchetes `[]`.

// Neste exemplo, estamos criando um tuple que representa os dados de um cliente.
// O tipo do tuple é `[number, string]`, que significa que o primeiro elemento é um número e o segundo elemento é uma string.
const dadosCliente1: [number, string] = [1, 'Vitor'];

// Neste exemplo, estamos criando um tuple que representa os dados de um cliente com mais informações.
// O tipo do tuple é `[number, string, string]`, que significa que o primeiro elemento é um número, o segundo elemento é uma string e o terceiro elemento é outra string.
const dadosCliente2: [number, string, string] = [1, 'Vitor', 'Kurth'];

// Neste exemplo, estamos criando um tuple que representa os dados de um cliente com informações opcionais.
// O tipo do tuple é `[number, string, string?]`, que significa que o primeiro elemento é um número, o segundo elemento é uma string e o terceiro elemento é uma string opcional.
const dadosCliente3: [number, string, string?] = [1, 'Vitor'];

// Neste exemplo, estamos criando um tuple que representa os dados de um cliente com informações variáveis.
// O tipo do tuple é `[number, string, ...string[]]`, que significa que o primeiro elemento é um número, o segundo elemento é uma string e os demais elementos são strings variáveis.
const dadosCliente4: [number, string, ...string[]] = [1, 'Vitor', 'Kurth'];

// Tentando alterar o valor do primeiro elemento do tuple.
// Isso é permitido, pois o tipo do tuple não é readonly.
// dadosCliente1[0] = 100;

// Tentando alterar o valor do segundo elemento do tuple.
// Isso é permitido, pois o tipo do tuple não é readonly.
// dadosCliente1[1] = 'Pedro';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Tipo readonly array: é um tipo que representa uma coleção de valores de tipos diferentes que não pode ser alterada.
// Ele é representado por uma lista de tipos entre colchetes `[]` com a palavra-chave `readonly`.

// Neste exemplo, estamos criando um readonly array que representa uma lista de strings.
// O tipo do array é `readonly string[]`, que significa que o array é uma lista de strings que não pode ser alterada.
const array1: readonly string[] = ['Luiz', 'Otávio'];

// Neste exemplo, estamos criando um readonly array que representa uma lista de strings.
// O tipo do array é `ReadonlyArray<string>`, que é equivalente a `readonly string[]`.
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);

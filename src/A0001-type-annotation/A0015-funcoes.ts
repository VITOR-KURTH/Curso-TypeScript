// Definimos um tipo de alias chamado MapStringsCallback, que representa uma função que recebe uma string como entrada e retorna uma string como saída.
type MapStringsCallback = (item: string) => string;

// Exportamos a função mapStrings, que recebe dois parâmetros: um array de strings e uma função de callback que atende ao tipo MapStringsCallback.
export function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
    // Criamos um novo array vazio para armazenar os resultados.
    const newArray: string[] = [];
    // Percorremos o array de entrada usando um loop for.
    for (let i = 0; i < array.length; i++) {
        // Obtemos o item atual do array de entrada.
        const item = array[i];
        // Chamamos a função de callback passando o item atual como parâmetro e adicionamos o resultado ao novo array.
        newArray.push(callbackfn(item));
    }
    // Retornamos o novo array com os resultados.
    return newArray;
}

// Criamos um array de strings chamado abc.
const abc = ['a', 'b', 'c'];
// Chamamos a função mapStrings passando o array abc e uma função anônima como parâmetro.
// A função anônima recebe um item como parâmetro e retorna sua versão em maiúscula usando o método toUpperCase().
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
// Imprimimos o array original abc e o array transformado abcMapped no console.
console.log(abc);
console.log(abcMapped);

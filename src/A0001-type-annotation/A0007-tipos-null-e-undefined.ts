// Variável x é declarada sem valor inicial
let x;
// Verificamos se x é undefined
if (typeof x === 'undefined') {
    // Se x é undefined, atribuímos o valor 20 a x
    x = 20;
}
// Imprimimos o valor de x multiplicado por 2
console.log(x * 2);

// Função createPerson que cria um objeto com firstName e lastName opcionais
export function createPerson(
    firstName: string,
    lastName?: string,
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

// Função squareOf que calcula o quadrado de um número
export function squareOf(x: any) {
    // Verificamos se x é um número
    if (typeof x === 'number') {
        // Se x é um número, retornamos o quadrado de x
        return x * x;
    }
    // Se x não é um número, retornamos null
    return null;
}

// Chamamos a função squareOf com um número
const squareOfTwoNumber = squareOf(2);
// Chamamos a função squareOf com uma string
const squareOfTwoString = squareOf('2');

// Checagem se é null
if (squareOfTwoNumber === null) {
    // Se é null, imprimimos uma mensagem de erro
    console.log('Conta inválida');
} else {
    // Se não é null, imprimimos o resultado
    console.log(squareOfTwoNumber);
}

if (squareOfTwoString === null) {
    // Se é null, imprimimos uma mensagem de erro
    console.log('Conta inválida');
} else {
    // Se não é null, imprimimos o resultado
    console.log(squareOfTwoString);
}

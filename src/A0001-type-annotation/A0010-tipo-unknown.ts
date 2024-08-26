// Acima na hierarquia, mais seguro que any
let x: unknown;

// Podemos atribuir qualquer valor a x, incluindo números e strings
x = 100;
x = 'Vitor';
x = 900;
x = '10';

const y = 800;

// unknown vai pedir para fazer a checagem do tipo
// Se não fizermos a checagem de tipo, o TypeScript irá gerar um erro
// Isso ocorre porque o tipo de x é unknown, e não sabemos se é um número ou não
if (typeof x === 'number') {
    // Se x for um número, podemos usar x em uma operação aritmética com y
    console.log(x + y);
} else {
    // Se x não for um número, podemos lidar com o erro de alguma forma
    console.log('x não é um número');
}

// Explicação sobre o uso de unknown em TypeScript
// O tipo unknown é um tipo que representa um valor que pode ser qualquer coisa
// É mais seguro que o tipo any, pois exige que façamos uma checagem de tipo antes de usar a variável
// Isso ajuda a prevenir erros em tempo de execução e torna o código mais seguro

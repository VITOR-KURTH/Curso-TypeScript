// Definimos um enum chamado Cores
enum Cores {
    // O valor de VERMELHO é 0, pois é o primeiro valor do enum
    VERMELHO, // 0
    // O valor de AZUL é 1, pois é o segundo valor do enum
    AZUL, // 1
    // O valor de AMARELO é 2, pois é o terceiro valor do enum
    AMARELO, // 2
}

// Definimos outro enum chamado Cores, mas com valores diferentes
enum Cores {
    // O valor de ROXO é 'ROXO', pois é uma string
    ROXO = 'ROXO',
    // O valor de VERDE é 10, pois é um número
    VERDE = 10,
    // O valor de ROSA é 11, pois é o próximo valor após VERDE
    ROSA,
}

// Imprimimos o objeto Cores
console.log(Cores);
// Imprimimos o valor de VERMELHO, que é 0
console.log(Cores.VERMELHO); // 0
// Imprimimos o valor de 0, que é VERMELHO
console.log(Cores[0]); // VERMELHO
// Imprimimos o valor de ROXO, que é 'ROXO'
console.log(Cores.ROXO); // ROXO

// Definimos uma função que recebe um parâmetro do tipo Cores
function escolhaACor(cor: Cores): void {
    // Imprimimos o valor de cor, que é um valor do enum Cores
    console.log(Cores[cor]);
}

// Chamamos a função escolhaACor com um valor inválido (123456)
// Isso irá imprimir undefined, pois 123456 não é um valor válido do enum Cores
// ecolhaACor(123456); // undefined

// Explicação sobre o uso de enum em TypeScript
// O enum é uma forma de definir um conjunto de valores nomeados
// Os valores do enum podem ser números ou strings
// É possível acessar os valores do enum usando o nome do valor ou o valor em si
// É importante notar que os valores do enum são estáticos e não podem ser alterados em tempo de execução

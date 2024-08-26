// Função criaErro que lança um erro
export function criaErro(): never {
    // Lançamos um erro com uma mensagem
    throw new Error('Erro qualquer');
}

// Chamamos a função criaErro
// Note que essa chamada não irá retornar nada, pois a função lança um erro
criaErro();

// Explicação sobre o tipo never
// O tipo never é um tipo especial em TypeScript que representa um valor que nunca é alcançado
// Em outras palavras, uma função que retorna never é uma função que sempre lança um erro ou entra em loop infinito
// Isso significa que o código após a chamada de criaErro() nunca será executado

// Exemplo de uso de never em uma função que entra em loop infinito
export function loopInfinito(): never {
    while (true) {
        // Fazemos algo aqui, mas nunca saímos do loop
    }
}

// Chamamos a função loopInfinito
loopInfinito();

// Explicação sobre a diferença entre never e void
// O tipo void é usado para funções que não retornam nada, mas podem ser executadas com sucesso
// Já o tipo never é usado para funções que nunca retornam, pois sempre lançam um erro ou entram em loop infinito

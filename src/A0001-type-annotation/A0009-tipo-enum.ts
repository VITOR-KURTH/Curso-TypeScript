enum Cores {
    VERMELHO, // 0
    AZUL, // 1
    AMARELO, // 2
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 10,
    ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);  // 0
console.log(Cores[0]); //VERMELHO
console.log(Cores.ROXO); //ROXO

function ecolhaACor(cor: Cores): void {
    console.log(Cores[cor]);
}

// ecolhaACor(123456); // undefined

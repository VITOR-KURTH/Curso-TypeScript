// Alias de tipo para número, representando a idade de uma pessoa
type Idade = number;

// Tipo para uma pessoa, com propriedades:
// - nome: uma string representando o nome da pessoa
// - idade: uma Idade (número) representando a idade da pessoa
// - salario: um número representando o salário da pessoa
// - corpreferida: uma string opcional representando a cor preferida da pessoa
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corpreferida?: string;
};

// Tipo para cores RGB, uma união de três valores possíveis
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';

// Tipo para cores CMYK, uma união de quatro valores possíveis
type CorCMYK = 'Ciano' | 'Mangenta' | 'Amarelo' | 'Preto';

// Tipo para cor preferida, uma união de CorRGB e CorCMYK
type corpreferida = CorRGB | CorCMYK;

// Crie um objeto pessoa com alguns dados de exemplo
const pessoa: Pessoa = {
    idade: 17,
    nome: 'Vitor',
    salario: 50_000, // 50000
};

// Função para definir a cor preferida de uma pessoa
export function setCorPreferida(pessoa: Pessoa, cor: corpreferida): Pessoa {
    // Retorne um novo objeto com as mesmas propriedades que pessoa, mas com corpreferida definida como cor
    return { ...pessoa, corpreferida: cor };
}

// Chame a função para definir a cor preferida da pessoa como 'Preto' (Preto)
console.log(setCorPreferida(pessoa, 'Preto'));

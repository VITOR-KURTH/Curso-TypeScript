// | = OU (ou) - usado para criar tipos de união
// & = AND (e) - usado para criar tipos de interseção

// Definição de tipos que representam objetos com propriedades específicas
type TemNome = { nome: string }; // tipo que tem uma propriedade "nome" do tipo string
type TemSobrenome = { sobrenome: string }; // tipo que tem uma propriedade "sobrenome" do tipo string
type TemIdade = { idade: number }; // tipo que tem uma propriedade "idade" do tipo number

// Intersection type: combinação de tipos que resulta em um novo tipo que tem todas as propriedades dos tipos originais
type Pessoa = TemNome & TemSobrenome & TemIdade;
// O tipo Pessoa é um tipo de interseção que combina os tipos TemNome, TemSobrenome e TemIdade,
// resultando em um tipo que tem as propriedades "nome", "sobrenome" e "idade".

// Definição de tipos de união
type AB = 'A' | 'B'; // tipo que pode ser 'A' ou 'B'
type AC = 'A' | 'C'; // tipo que pode ser 'A' ou 'C'
type AD = 'A' | 'D'; // tipo que pode ser 'A' ou 'D'

// Intersection type: combinação de tipos de união que resulta em um novo tipo que tem apenas os valores comuns
type Intersecao = AB & AC & AD;
// O tipo Intersecao é um tipo de interseção que combina os tipos AB, AC e AD,
// resultando em um tipo que apenas pode ser 'A', pois é o único valor comum entre os três tipos.

// Criação de uma variável do tipo Pessoa
const pessoa: Pessoa = {
    nome: 'Vitor',
    sobrenome: 'Kurth',
    idade: 17,
};

// Log da variável pessoa no console
console.log(pessoa);

// Exportação da variável pessoa em modo de módulo
export { pessoa };

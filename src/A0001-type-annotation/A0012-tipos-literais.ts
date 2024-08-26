// Valores como tipo
// Podemos usar valores literais como tipos em TypeScript
let x = 10;
x = 0b1010; // x pode ser um número decimal ou binário

// Subtipo de number
// Podemos usar valores literais como subtipos de number
const y = 10;
const a = 100;

const pessoa = {
    // Podemos usar valores literais como tipos para propriedades de objeto
    nome: 'Vitor' as const, // o tipo de nome é exatamente a string 'Vitor'
    sobrenome: 'Kurth',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}

console.log(escolhaCor('Vermelho')); // imprime 'Vermelho'

// Modo de módulo, senão fica no escopo global
export default 1; // o tipo de export default é exatamente o número 1

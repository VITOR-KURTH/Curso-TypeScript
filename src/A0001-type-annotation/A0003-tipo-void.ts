// Tipo void: é um tipo que indica que uma função não retorna nenhum valor.
// Em outras palavras, uma função com tipo de retorno void não tem um valor de retorno explícito.

// Nesta função, o tipo de retorno é void, o que significa que ela não retorna nenhum valor.
// A função apenas imprime os argumentos no console, mas não retorna nada.
function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

// Aqui, estamos definindo um objeto pessoa com uma propriedade nome, sobrenome e um método exibirNome.
// O método exibirNome tem um tipo de retorno void, o que significa que ele não retorna nenhum valor.
const pessoa = {
    nome: 'Vítor',
    sobrenome: 'Kurth',
    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

// Chamando a função semRetorno e passando dois argumentos.
// A função imprime os argumentos no console, mas não retorna nada.
semRetorno('Vítor', 'Kurth');

// Chamando o método exibirNome do objeto pessoa.
// O método imprime o nome e sobrenome no console, mas não retorna nada.
pessoa.exibirNome();

// Exportando o objeto pessoa para que possa ser usado em outros arquivos.
export { pessoa };

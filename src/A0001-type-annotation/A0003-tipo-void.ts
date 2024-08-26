//void não retorna nada
function semRetorno(...args: string[]): void{
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Vítor',
    sobrenome: 'Kurth',
    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Vítor', 'Kurth');
pessoa.exibirNome();

export {pessoa};

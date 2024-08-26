//Caso precise adicionar mais, mas não é pratico
const objetoA: {
    readonly chaveA: string; //Readonly não pode alterar
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B'
}

// objetoA.chaveA = 'Outro valor';
//Não consegue fazer porque chaveC não foi inferido no tipo
objetoA.ChaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

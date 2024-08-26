//Tipo any retorna e significa qualquer coisa, pode occorer problemas //Utilize apenas em ultimo caso
function showMessage(msg) {
    return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(123));

//Aqui ele não reclama porque está implicito
function showMessage2(msg: any) {
    return msg;
}

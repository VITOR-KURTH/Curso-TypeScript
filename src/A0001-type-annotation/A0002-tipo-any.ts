// Tipo any: é um tipo que pode representar qualquer valor, incluindo números, strings, arrays, objetos, etc.
// É importante notar que o uso excessivo do tipo any pode levar a problemas de segurança e manutenção do código.

// Nesta função, o parâmetro msg não tem um tipo explícito definido.
// Isso significa que o TypeScript não pode inferir o tipo de msg e, portanto, não pode verificar se o código está correto.
function showMessage(msg) {
    return msg;
}

// Como o tipo de msg não é explícito, podemos passar qualquer valor para a função sem que o TypeScript reclame.
console.log(showMessage([1, 2, 3])); // Array
console.log(showMessage('Olá')); // String
console.log(showMessage(123)); // Número

// Aqui, estamos definindo explicitamente o tipo de msg como any.
// Isso significa que o TypeScript não vai reclamar se passarmos qualquer valor para a função.
function showMessage2(msg: any) {
    return msg;
}

// Embora o uso do tipo any possa parecer conveniente, é importante evitar seu uso excessivo.
// Isso porque o tipo any pode esconder erros de tipo e tornar o código mais difícil de manter.
// Em vez disso, é recomendável usar tipos mais específicos e explícitos para garantir a segurança e a manutenção do código.

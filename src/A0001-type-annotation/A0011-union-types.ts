// Podemos usar tipos de união para especificar múltiplos tipos para uma única variável ou parâmetro de função
// Neste caso, estamos usando o tipo de união `number | string` para indicar que os parâmetros da função podem ser números ou strings
function adicionarOuConcatenar(a: number | string, b: number | string) {
    // Usamos o operador typeof para verificar o tipo dos parâmetros
    if (typeof a === 'number' && typeof b === 'number') {
      // Se ambos os parâmetros forem números, podemos adicioná-los
      return a + b;
    } else {
      // Se um ou ambos os parâmetros forem strings, concatenamos eles
      return `${a}${b}`;
    }
  }

  // Vamos testar a função com diferentes tipos de entrada
  console.log(adicionarOuConcatenar(10, 20)); // Saída: 30
  console.log(adicionarOuConcatenar('10', '20')); // Saída: "1020"
  console.log(adicionarOuConcatenar(10, '20')); // Saída: "1020"
  console.log(adicionarOuConcatenar('10', 20)); // Saída: "1020"

  // Os tipos de união permitem que especifiquemos múltiplos tipos para uma única variável ou parâmetro de função
  // Isso torna nosso código mais flexível e capaz de lidar com diferentes tipos de entrada

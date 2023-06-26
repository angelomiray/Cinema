function checkName(name) {
  var regex = /^[a-zA-Z]+$/;

  return regex.test(name);
}



//validaçao do no de cartao com node
// // Importar a biblioteca credit-card-validator
// const CreditCardValidator = require('credit-card-validator');

// // Função para verificar a validade e a bandeira do número do cartão de crédito
// function verificarCartaoCredito(numero) {
//   const validador = new CreditCardValidator();

//   // Verificar a validade do número do cartão
//   const isValido = validador.validateCardNumber(numero);

//   if (isValido) {
//     // Obter a bandeira do cartão
//     const bandeira = validador.determineCardType(numero);

//     return {
//       valido: true,
//       bandeira: bandeira
//     };
//   } else {
//     return {
//       valido: false,
//       bandeira: null
//     };
//   }
// }
// 




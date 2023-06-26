const app = require('./app');
const dotenv = require('dotenv').config;

/*O servidor é inicializado na porta definida na variável de ambiente
    Por padrão, caso ela não esteja disponível, o servidor escuta na porta 3333.
*/
const PORT = process.env.PORT || 3333;

//Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
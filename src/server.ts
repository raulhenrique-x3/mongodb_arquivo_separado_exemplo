import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db';

// Definindo a interface do documento
interface IUser {
  name: string;
  email: string;
}

// Restante do código...

// Configurando o servidor Express
const app = express();
app.use(bodyParser.json());

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
  // Restante do código...
});

// Chamando a função connectDB para conectar ao banco de dados
connectDB().then(() => {
  // Iniciando o servidor após a conexão bem-sucedida
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});

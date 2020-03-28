const express = require('express'); //importando o modulo do express
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors()); //api de segurança
app.use(express.json());
app.use(routes);

app.listen(3333);

/** Rota / Recurso */

/** METODOS HTTP:
 * 
 * GET: Busca uma informação do backend, então sempre que quiser o retorno de alguma info, usar o get
 * POST: Sempre que quero criar uma informação no backend, por exemplo, criar um novo usuario, usar o get
 * PUT: Sempre que precisar alterar uma info no backend
 * DELETE: deleta info do backend
 */

/** 
 * TIPOS DE PARAMETROS
 * Query: parametros nomeados enviados na rota apos o simbolo de '?', exemplos: filtros, páginação
 * Route params: parametros utilizados para identificar recursos 
 * Request body: corpo da requisição, utilizado para criar o usuario, por exemplo
 */

 /**
  * SQL: SQLServer, PostgreSQL, SQLite
  * No-SQL: MongoDB
  */

/**
 * Driver: Select * from users;
 * Query builder: table('users').select(*).where();
 */
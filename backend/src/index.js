const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());    // Controlador de acesso
app.use(express.json());

// Define as rotas / recursos
/*
app.get('/', (request, response) => {
    //return response.send('Hello World');
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Cleverson Funaki'
    })
*/
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/*
app.get('/users', (request, response) => {
    //return response.send('Hello World');
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Cleverson Funaki'
    })
*/

 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados na rota após "?" (Filtros, paginação)
  *     app.get('/users?name=Cleverson&idade=40', (request, response) => {
  *         const params = request.query;
  * Route Params: Parâmetros utilizados para identificar recursos
  *     app.get('/users/:id', (request, response) => {
  *         const params = request.params;
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  *     app.use(express.json());    // Transforma as requisições em objeto json do JS
  *     app.post('/users', (request, response) => {
  *         const body = request.body;
  * 
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Instalação/configuração:
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.use(routes);

app.listen(3333);
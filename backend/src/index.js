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
 * M�todos HTTP:
 * 
 * GET: Buscar/listar uma informa��o do back-end
 * POST: Criar uma informa��o no back-end
 * PUT: Alterar uma informa��o no back-end
 * DELETE: Deletar uma informa��o no back-end
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
  * Tipos de par�metros:
  * 
  * Query: Par�metros nomeados na rota ap�s "?" (Filtros, pagina��o)
  *     app.get('/users?name=Cleverson&idade=40', (request, response) => {
  *         const params = request.query;
  * Route Params: Par�metros utilizados para identificar recursos
  *     app.get('/users/:id', (request, response) => {
  *         const params = request.params;
  * Request Body: Corpo da requisi��o, utilizado para criar ou alterar recursos
  *     app.use(express.json());    // Transforma as requisi��es em objeto json do JS
  *     app.post('/users', (request, response) => {
  *         const body = request.body;
  * 
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Instala��o/configura��o:
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.use(routes);

app.listen(3333);
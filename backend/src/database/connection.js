const knex = require('knex'); //importando o knex
const configuration = require('../../knexfile'); //volta as pastas e pega os dados do arquivo do knex

const connection = knex(configuration.development);
module.exports = connection;//exporta a conexao com o db, pra que seja possivel eu importar em qlqr arquivo
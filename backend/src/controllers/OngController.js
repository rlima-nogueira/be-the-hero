
const connection = require('../database/connection');//importa a conexao com o bd
const crypto = require('crypto');

module.exports={
    async index (request, response){
        const ongs = await connection('ongs').select('*')
        return response.json(ongs);
    },

    async create(request, response){ //cria ong
            const {name, email, whatsapp, city, uf} = request.body;
            const id = crypto.randomBytes(4).toString('HEX'); //gera nosso id
        
            await connection('ongs').insert({//await aguarda a resposta
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })
            return response.json({ id });
        }
};
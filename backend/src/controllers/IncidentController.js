const connection = require('../database/connection'); //conexao com o banco 

//sempre pra poder usar em outras classes
module.exports={
    async index(request, response){
        const {page = 1} = request.query; //iniciando a página
        
        const [count] = await connection('incidents').count(); //conta a quatidade de incidentes registrados

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//relaciona dados de duas tabelas
        .limit(5) //vai pegar os 5 primeiros registros
        .offset((page - 1) * 5) //começa a contar no 0, entao diminui um 
        .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);//mostra no header de resposta o total de numero de registros 

        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;//requisição do corpo do problema da ong
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        
        return response.json({id});
    },

    async delete(request, response){
        const { id } = request.params; //deleta a ong pelo id
        const ong_id = request.headers.authorization; //busca o id da ong

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

            //testa se id que eu to recebendo é igual ao id da ong
            if (incident.ong_id !== ong_id){ 
                return response.status(401).json({ error: 'Operation not permitted.'});
                //esse 401 é http status, só pesquisar pra saber mais
            }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};
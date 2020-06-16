const connection = require('../database/connection');
const { create } = require('./OngController');
const { where } = require('../database/connection');

module.exports={
    async create(req,res){
        const { id } = req.body;

        const ong = await connection('ong')
            .where('id', id)
            .select('name')
            .first();
        
            if(!ong){
                return res.status(400).json({error: 'No ONG fund'})
            }
    
            return res.json(ong);
        }
}
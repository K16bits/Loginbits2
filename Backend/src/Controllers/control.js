const conection = require('../Data/conection');

module.exports = {
    async data(req,res){
        const {nome,idade,empresa,funcao} = req.body;
        const query = conection("users");
        
        try {
            await query.insert({
                nome,
                idade,
                empresa,
                funcao,
            })
            res.json(nome);
        }catch(erro){
            console.log(erro);
        }

    },
    
    async receber(req,res){
        try{
            const data = await conection("users").select('*')
            res.json(data)
        }catch(erro){
            console.log(erro);
        }

    }

}

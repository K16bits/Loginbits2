const conection = require('../Data/conection');

module.exports = {
    async data(req,res){
        const {nome,idade,empresa,funcao} = req.body;
        
        try{
            await conection('user').insert({
                nome,
                idade,
                empresa,
                funcao,
                })

        }catch(erro){ 
            console.log(erro)
        }
        res.json(nome);
    },
    
    async receber(req,res){
        res.json({"Aa":"aaaa"})
    }

}

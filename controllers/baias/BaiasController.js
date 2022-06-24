const BaiasModels = require('../../models/baias/BaiasModels');

class BaiasController{

    async handleGetBaias(request, response){

        const baiasModels = new BaiasModels();

        const nomes = await baiasModels.getFilas();

        return response.json(nomes);
    }

    async handlePostFila(request, response){
        // const fila = request.body;
        console.log(request);
        // const baiasModels = new BaiasModels();

        // await baiasModels.setFilas(fila);

        return response.json("Dados Cadastrados com Sucesso");
    }
}

module.exports = BaiasController;
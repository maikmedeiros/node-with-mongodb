const BaiasController = require("../controllers/baias/BaiasController");

const baiasController = new BaiasController();

module.exports = (app) => {

  app.get("/baias", baiasController.handleGetBaias);
  app.post("/baias/filas", baiasController.handlePostFila);
  
}



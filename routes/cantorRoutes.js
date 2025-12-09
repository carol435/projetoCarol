const express =require("express");
const routes = express.Router();

const CantorController = require("../controllers/cantorController");

const auth = require("../middlewares/usuarioAuth");

routes.get("/Cantor", auth, CantorController.relatorio);

routes.get("/Cantor/cadastrar",auth, CantorController.cadastrarGet);

routes.get("/Cantor/excluir/:cpf",auth, CantorController.excluir);

routes.get("/Cantor/atualizar/:cpf",auth, CantorController.atualizar);

routes.post("/Cantor",auth, CantorController.cadastrar);

routes.post("/Cantor/editar",auth, CantorController.atualizarPost);

routes.get("/Cantor/:cpf",auth, CantorController.detalhar);

module.exports = routes;
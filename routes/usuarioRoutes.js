const express =require("express");
const routes = express.Router();

const usuarioController = require("../controllers/usuarioController");

const auth = require("../middlewares/usuarioAuth");

routes.get("/usuario",auth, usuarioController.relatorio);

routes.get("/usuario/cadastrar",usuarioController.cadastrarGet);

routes.get("/usuario/excluir/:email",auth, usuarioController.excluir);

routes.get("/usuario/atualizar/:email",auth, usuarioController.atualizar);

routes.post("/usuario", usuarioController.cadastrar);

routes.post("/usuario/editar",auth, usuarioController.atualizarPost);

routes.get("/usuario/login", usuarioController.loginGet);

routes.post("/usuario/login", usuarioController.loginPost);

routes.post("/usuario/email",auth, usuarioController.atualizarPost);

routes.get("/usuario/:email",auth, usuarioController.detalhar);



module.exports = routes;
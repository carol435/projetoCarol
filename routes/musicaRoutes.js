const express =require("express");
const routes = express.Router();

const musicaController = require("../controllers/musicaController");

const auth = require("../middlewares/usuarioAuth");

routes.get("/musicas",auth, musicaController.relatorio);

routes.get("/musicas/cadastrar",auth, musicaController.cadastrarGet);

routes.get("/musicas/excluir/:nome",auth, musicaController.excluir);

routes.get("/musicas/atualizar/:nome",auth, musicaController.atualizar);

routes.post("/musicas",auth, musicaController.cadastrar);

routes.post("/musicas/editar",auth, musicaController.atualizarPost);

routes.get("/musicas/:nome",auth, musicaController.detalhar);


module.exports = routes;
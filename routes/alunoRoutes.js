const express =require("express");
const routes = express.Router();

const alunoController = require("../controllers/alunoController");


routes.get("/alunos", alunoController.relatorio);

routes.get("/alunos/cadastrar",alunoController.cadastrarGet);

routes.get("/alunos/:mat", alunoController.detalhar);

routes.get("/alunos/excluir/:mat", alunoController.excluir);

routes.get("/alunos/atualizar/:mat", alunoController.atualizar);

routes.post("/alunos", alunoController.cadastrar);

routes.post("/alunos/editar", alunoController.atualizarPost);





module.exports = routes;
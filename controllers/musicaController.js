const Musica = require("../models/musica");
const bcryptjs = require("bcryptjs");

class musicaController {

    static async relatorio(req, res) {
        const status = req.query.s;
        const musicas = await Musica.find();
        res.render("musica/relatorio", { musicas, status });
    }

    static async detalhar(req, res) {
        const musica = await Musica.findOne({ nome: req.params.nome });
        console.log(musica);
        res.render("musica/detalhar", { musica });
    }

    static async excluir(req, res) {
        await Musica.deleteOne({ nome: req.params.nome });
        res.redirect("/musicas?s=2");
    }

    static async atualizar(req, res) {
        const musica = await Musica.findOne({ nome: req.params.nome });
        res.render("musica/cadastrar", { musica });
    }

    static async cadastrar(req, res) {
        const musica = req.body;
        const novaMusica = new Musica({
            autoria: musica.autoria,
            nome: musica.nome,
            produtora: musica.produtora   
        });

        await novaMusica.save();
        res.redirect("/musicas?s=1");
    }

    static cadastrarGet(req, res) {
        const musica = {};
        res.render("musica/cadastrar", { musica });
    }

    static async atualizarPost(req, res) {
        const musica = req.body;

        await Musica.updateOne({ _id: musica._id }, {
            autoria: musica.autoria,
            nome: musica.nome,
            produtora: musica.produtora
        });

        res.redirect("/musicas?s=3");
    }
}

module.exports = musicaController;

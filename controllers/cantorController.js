const Cantor = require("../models/cantor");


class   cantorController{
    static async relatorio (req, res) {
        const status= req.query.s;
        const cantor = await Cantor.find();
        res.render("cantor/relatorio", {cantor, status})
    }


     static async detalhar (req, res) {
        const cantor =await Cantor.findOne({cpf:req.params.cpf})
        console.log(cantor)
            res.render("cantor/detalhar", {cantor});
       
    }

    static async loginPost(req,res){
        const cantor =await Cantor.findOne({cpf:req.body.cpf});
        if (cantor != null)
            if (cantor.nome == req.body.nome){
                req.session.cantor = cantor.cpf;
                res.redirect("/");

             } else {
                res.redirect ("/Cantor/login?s=1");
            }

        else{
            res.redirect ("/Cantor/login?s=1");
        }
        }


    static async excluir (req,res){
        await Cantor.deleteOne({cpf:req.params.cpf})
        res.redirect("/Cantor?s=2");
    }

    static async atualizar (req, res) {
        const cantor =await Cantor.findOne({cpf:req.params.cpf})
            res.render("cantor/cadastrar", {cantor});
       
    } 

    static async cadastrar (req, res) {
        const cantor = req.body;
        const novoCantor = new Cantor({
            nome: cantor.nome,
            genero: cantor.genero,
            cpf: cantor.cpf
        });

        await novoCantor.save();
        res.redirect("/Cantor?s=1");
    }
        static cadastrarGet (req, res){
            const cantor = {};
            res.render("cantor/cadastrar",{cantor} );
        }

        static loginGet (req, res){
            const status = req.query.s;
            res.render("cantor/login", {status});
        }
       
        static async atualizarPost (req, res) {
            const cantor = req.body;
            const salt = bcryptjs.genSaltSync();
            const hash = bcryptjs.hashSync( cantor.cpf, salt);
            await Cantor.updateOne({_id: cantor._id},{
            genero: cantor.genero,
            nome: cantor.nome,
            cpf: hash

           });

          
            res.redirect("/Cantor?s=3");
        }
    }


module.exports =  cantorController;
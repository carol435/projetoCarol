const bcryptjs = require("bcryptjs");
const Usuario = require ("../models/usuario");
class usuarioController{


    static async relatorio (req, res) {
        const status= req.query.s;
        const usuario = await Usuario.find();
        res.render("usuario/relatorio", {usuario, status});
    }

    static cadastrarGet (req, res) {
        const usuario ={};
        res.render("usuario/cadastrar", {usuario});
    }

    static loginGet (req, res) {
        const status= req.query.s;
        res.render("usuario/login",{status});
    }

     static async loginPost (req, res) {
        const usuario =await Usuario.findOne({email:req.body.email})
            if (usuario != null){//e-mail confere
                if (bcryptjs.compareSync(req.body.senha, usuario.senha)){// senha confere
                    req.session.usuario = usuario.email;
                    res.redirect("/");


                }else{//senha não confere
                    res.redirect("/usuario/login?s=1")
                
                }

            }else {//email não existe
                res.redirect("/usuario/login?s=1")
                }
       
    }

    static async detalhar (req, res) {
        const usuario =await Usuario.findOne({email:req.params.email})
            res.render("usuario/detalhar", {usuario}); 
       
    }

    static async atualizar (req, res) {
        const usuario =await Usuario.findOne({email:req.params.email})
            res.render("usuario/cadastrar", {usuario}); 
       
    }


   
    static async excluir(req , res){
        const usuario= await Usuario.deleteOne({email:req.params.email})
        res.redirect("/usuario?s=2");
    }

    
   

     static async cadastrar (req, res) {
        const usuario = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
        const novoUsuario = new Usuario ({
            email:usuario.email,
            nome:usuario.nome,
            senha:hash

            });

        await novoUsuario.save();
        res.redirect("/usuario?s=1");
    }

    static async atualizarPost (req, res) {
        const usuario = req.body;
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(senha, salt);
        console.log(usuario)
        await Usuario.updateOne({_id:usuario._id},{
            email:usuario.email,
            nome:usuario.nome,
            senha:usuario.senha
        
    });
    res.redirect("/usuario?s=3");
   
}
}

module.exports = usuarioController;
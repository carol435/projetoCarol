const Aluno = require ("../models/aluno");
class alunoController{


    static async relatorio (req, res) {
        const status= req.query.s;
        const alunos = await Aluno.find();
        res.render("aluno/relatorio", {alunos, status});
    }

    static cadastrarGet (req, res) {
        const aluno ={};
        res.render("aluno/cadastrar", {aluno});
    }

     static async detalhar (req, res) {
        const aluno =await Aluno.findOne({mat:req.params.mat})
            res.render("aluno/detalhar", {aluno}); 
       
    }

    static async atualizar (req, res) {
        const aluno =await Aluno.findOne({mat:req.params.mat})
            res.render("aluno/cadastrar", {aluno}); 
       
    }


   
    static async excluir(req , res){
        const aluno= await Aluno.deleteOne({mat:req.params.mat})
        res.redirect("/alunos?s=2");
    }

    
   

     static async cadastrar (req, res) {
        const aluno = req.body;
        const novoAluno = new Aluno ({
            mat:aluno.mat,
            nome:aluno.nome,
            curso:aluno.curso
            });

        await novoAluno.save();
        res.redirect("/alunos?s=1");
    }

    static async atualizarPost (req, res) {
        const aluno = req.body;
        console.log(aluno)
        await Aluno.updateOne({_id:aluno._id},{
            mat:aluno.mat,
            nome:aluno.nome,
            curso:aluno.curso

        
    });
    res.redirect("/alunos?s=3");
   
}
}

module.exports = alunoController;
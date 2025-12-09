const mongoose =require ("mongoose");
const Schema = mongoose.Schema;

const cantorSchema = Schema({
    genero : String,
    nome: String,
    cpf: String
});

module.exports=mongoose.model("Cantor", cantorSchema);
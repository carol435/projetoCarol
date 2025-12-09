const mongoose =require ("mongoose");
const Schema = mongoose.Schema;

const musicaSchema = Schema({
    autoria : String,
    nome: String,
    produtora: String
});

module.exports=mongoose.model("Musica", musicaSchema);
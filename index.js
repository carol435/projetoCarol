const express = require('express');
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
require("dotenv/config");

const session = require("express-session");

app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
    }));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);


const usuarioRoutes= require("./routes/usuarioRoutes");
app.use(usuarioRoutes);

const cantorRoutes= require("./routes/cantorRoutes");
app.use(cantorRoutes);

const musicaRoutes= require("./routes/musicaRoutes");
app.use(musicaRoutes);

app.get("/", function (req, res) {
    if(req.session.usuario){
        res.render("index");
    } else
        res.redirect("/usuario/login")
    
});


app.use(function(req,res){
    res.status(404).render("404");
});




app.listen(process.env.PORT, function () {
    console.log("Rodando");
});
const express = require("express");
const tarefasController = require("../controllers/tarefas.controllers.js");
const router = express.Router();

router.get("/",tarefasController.mostrarTarefas );

router.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' }); 
});


module.exports = router; 

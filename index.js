const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const app = express();

//importação de rotas
const tarefasRoutes = require("./routes/tarefas.routes");

// configurações iniciais
require('dotenv').config() 
app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public")); 

const porta = Number(process.env.PORTA);



app.get('/api/carros', async (req, res) => {
  try {
    const tarefaModel = require('./models/tarefa.model');
    const carros = await tarefaModel.readAllTarefa();
    res.json(carros);
  } catch (error) {
    console.error('API /api/carros error:', error);
    res.status(500).json({error: 'Erro ao buscar carros'});
  }
});

app.use("/", tarefasRoutes); 

app.use((req, res) => {
  res.status(404).render("erro404", {title: "Erro 404" });
});

// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});

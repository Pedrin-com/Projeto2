const db = require ("./dbConnect");

class Tarefa {
    //Read
    static async readAllTarefa() {
        console.log('tarefa.model.js', 'readAllTarefa()')
        const query = "select * from tarefas"
        return db.executarQuery(query)
    }
}

Tarefa.readAllTarefa().then((dados) => {
    console.log(dados);
})

module.exports = Tarefa
//Rotas da aplicação
if (url === "/") {
  res.end("Rota raiz");
} else if (url === "/contato") {
  res.end("Pagina de contato");
} else if (url === "/sobre") {
  res.end("Pagina sobre");
} else {
  res.writeHead(404); //rota nao cadastrada
  res.end("Rota nao cadastrada");
}


aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
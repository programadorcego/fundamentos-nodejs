import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Olá, mundo");
});

server.listen(3333, "localhost", () => {
    console.log("Servidor rodando");
});
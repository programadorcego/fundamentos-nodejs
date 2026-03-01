import http from "node:http";

/*
 Métodos

 GET: Buscar alguma coisa
 POST: Criar alguma coisa
 PUT: Atualizar completamente
 PATCH: Atualizar parcialmente
 DELETE: Remover completamente
*/

const server = http.createServer((req, res) => {
    if (req.url === "/users" && req.method === "GET") {
        return res.end("Listar usuários");
    }

    if (req.url === "/users" && req.method === "POST") {
        return res.end("Criar usuário");
    }
});

server.listen(3333, "localhost", () => {
    console.log("Servidor rodando");
});
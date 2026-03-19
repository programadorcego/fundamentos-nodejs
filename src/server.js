import http from "node:http";

/*
 Métodos

 GET: Buscar alguma coisa
 POST: Criar alguma coisa
 PUT: Atualizar completamente
 PATCH: Atualizar parcialmente
 DELETE: Remover completamente
*/

/*
 * stateful: Os dados sempre são gravados em memória.
stateless: os dados são gravados em dispositivos externos.
*/

/**
 * 100-199: Informativos
 * 200-299: Sucesso
 * 300-399: Redirect
 * 400-499: Client error responses
 * 500-599: Server error responses
*/

const users = [];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/users" && req.method === "GET") {
        return res.end(JSON.stringify(users));
    }

    if (req.url === "/users" && req.method === "POST") {
        users.push({name: "Willian", email: "programadorcego@gmail.com"})
        return res.writeHead(201).end();
    }

    return res.writeHead(404).end();
});

server.listen(3333, "localhost", () => {
    console.log("Servidor rodando");
});
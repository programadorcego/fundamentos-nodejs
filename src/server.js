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

const users = [];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/users" && req.method === "GET") {
        return res.end(JSON.stringify(users));
    }

    if (req.url === "/users" && req.method === "POST") {
        users.push({name: "Willian", email: "programadorcego@gmail.com"})
        return res.end();
    }
});

server.listen(3333, "localhost", () => {
    console.log("Servidor rodando");
});
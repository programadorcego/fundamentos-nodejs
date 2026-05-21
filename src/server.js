import http from "node:http";
import { json } from "./middlewares/json.js";
import { Database } from "./database.js";

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

const database = new Database();

const server = http.createServer(async (req, res) => {
    await json(req, res);

    if (req.url === "/users" && req.method === "GET") {
        const users = database.select("users");
        return res.end(JSON.stringify(users));
    }

    if (req.url === "/users" && req.method === "POST") {
        const { name, email } = req.body;
        
        const users = database.insert("users", {
            id: 1,
            name,
            email,
        })
        return res.writeHead(201).end();
    }

    return res.writeHead(404).end();
});

server.listen(3333, "localhost", () => {
    console.log("Servidor rodando");
});
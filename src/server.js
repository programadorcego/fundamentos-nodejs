import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

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

const server = http.createServer(async (req, res) => {
    await json(req, res);

    const { method, url } = req;

    const route = routes.find(route => {
return route.method === method && url === route.path;
    });

    if (route) {
        return route.handler(req, res);
    }

    return res.writeHead(404).end();
});

server.listen(3333, "localhost", () => {
    console.log("Servidor rodando");
});
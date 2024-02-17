const A = require("@fastify/autoload")
const { join } = require("node:path");
async function app(fastify,opts){
    await fastify.register(A,{
        dir:join(__dirname,"plugins"),
        opt:opts
    })
    await fastify.register(A,{
        dir:join(__dirname,"routes"),
        opt:opts
    })
}

module.exports = app;
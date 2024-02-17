const fp = require("fastify-plugin");
const { join } = require("node:path");
async function static(fastify, opts) {
  fastify.register(require("@fastify/static"), {
    root: join(process.cwd(),"..","client")
  });
}
module.exports = fp(static);

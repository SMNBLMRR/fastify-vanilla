const fastify = require("fastify")({
  logger: true,
});
const app = require("./app");
async function start() {
  try {
    await fastify.register(app);
    await fastify.listen({
      port: 3002,
      host: "0.0.0.0",
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();

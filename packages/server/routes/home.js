async function home(fastify,opts){
    fastify.get("/", async (req,res) => {
        return res.sendFile("/public/index.html");
    })
}

module.exports = home;
async function about(fastify,opts){
    fastify.get("/about", async (req,res) => {
        return res.sendFile("/public/about.html");
    })
}

module.exports = about;
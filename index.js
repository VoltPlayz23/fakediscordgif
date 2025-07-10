const app = require('fastify')({ logger: process.env.NODE_ENV !== "prod" });
const fs = require("fs");

const image = fs.readFileSync("./image.gif");

app.all("/gif.gif", async (req, res) => {
    if (req.headers["user-agent"].includes("bot") || req.headers["user-agent"] === "Mozilla/5.0 (Macintosh; Intel Mac OS X 11.6; rv:92.0) Gecko/20100101 Firefox/92.0") {
        res.header("Content-Type", "image/gif").send(image);
    }
    else {
        res.redirect("https://voltplayz23.github.io/CatGif-MiddleClick/");
    }
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT || 3000
}).then(() => {
    console.log(`Listening on port ${app.server.address().port}`);
})

const express = require("express")
const { config } = require("./config/index")

const app = express()

const authors = require("./routes/authors.js")
app.use("/authors", authors)

app.get("/", (req, res) => {
    res.json({ msg: "Hello World" })
})

app.listen(config.server.port, () => {
    console.log(`Server running on port ${config.server.port}`)
})
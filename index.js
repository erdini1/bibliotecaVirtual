const express = require("express")
const { config } = require("./config/index")

const app = express()
app.use(express.json())

const authors = require("./routes/authors.js")
app.use("/authors", authors)

app.listen(config.server.port, () => {
    console.log(`Server running on port ${config.server.port}`)
})
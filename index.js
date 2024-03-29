const ExpressConfig = require("./src/config/express.config.js")
const { config } = require("./src/config/env.config.js")

const app = ExpressConfig()

const authors = require("./src/routes/authors.js")
app.use("/authors", authors)

const books = require("./src/routes/books.js")
app.use("/authors", books)

app.listen(config.server.port, () => {
    console.log(`Server running on port ${config.server.port}`)
})
let { writers } = require("../constants/index")

exports.validateWriterData = (req, res, next) => {
    const { name, username, birthYear } = req.body
    if (req.method === "POST" && (!name || !username || !birthYear)) {
        return res.status(400).json({ error: "The fields cannot be empty" })
    }
    // Forma 1
    // if ([name, username, birthYear].includes(""))
    // Forma 2
    if ([name, username, birthYear].some(field => field === "")) {
        return res.status(400).json({ error: "The fields cannot be empty" })
    }
    next()
}

exports.validateWriterId = (req, res, next) => {
    const id = +req.params.id
    const author = writers.find(element => element.id === id)
    if (!author) {
        return res.status(404).json({ error: "Writer doesn't exist" })
    }
    req.author = author
    next()
}

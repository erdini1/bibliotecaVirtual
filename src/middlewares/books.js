let { writers } = require("../constants")

exports.validateBookData = (req, res, next) => {
    const { title, description, publicationYear } = req.body
    // ningun campo puede faltar
    if (req.method === "POST" && (!title || !description || !publicationYear)) {
        return res.status(400).json({ error: "The fields cannot be empty" })
    }
    // Puede faltar alguno pero ninguno de los que estan puede estar vacio
    if ([title, description, publicationYear].some(field => field === "")) {
        return res.status(400).json({ error: "The fields cannot be empty" })
    }
    next()
}

exports.validateBookId = (req, res, next) => {
    const idLibro = +req.params.idLibro
    const author = req.author
    const book = author.books.find(element => element.id === idLibro)
    if (!book) {
        return res.status(404).json({ error: "Book doesn't exist" })
    }
    const indexBook = author.books.findIndex(element => element.id === book.id)

    req.book = book
    req.indexBook = indexBook

    next()
}
let { writers } = require("../constants/index")

exports.allBooks = (req, res) => {
    const author = req.author
    return res.status(200).json(author.books)
}

exports.addBook = (req, res) => {
    const author = req.author
    const { title, description, publicationYear } = req.body

    const indexAuthor = writers.findIndex(element => element.id === author.id)
    const booksOfAuthor = writers[indexAuthor].books
    const lastIndexBook = booksOfAuthor.length > 0 ? booksOfAuthor[booksOfAuthor.length - 1].id : -1

    writers[indexAuthor].books.push({
        id: lastIndexBook + 1,
        title,
        description,
        publicationYear
    })

    return res.status(201).json({ msg: "Book added" })
}

exports.oneBook = (req, res) => {
    const book = req.book
    return res.status(200).json(book)
}

exports.deleteBook = (req, res) => {
    const author = req.author
    const book = req.book
    const indexAuthor = writers.findIndex(element => element.id === author.id)
    const indexBook = author.books.findIndex(element => element.id === book.id)

    writers[indexAuthor].books.splice(indexBook, 1)
    return res.status(200).json({ msg: "Book deleted succesfully" })
}

exports.updateBook = (req, res) => {
    return res.status(200).json({ msg: "Book modified succesfully" })
}
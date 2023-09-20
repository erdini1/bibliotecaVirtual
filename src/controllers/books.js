let { writers } = require("../constants/index")

exports.allBooks = (req, res) => {
    const author = req.author
    return res.status(200).json(author.books)
}

exports.addBook = (req, res) => {
    const indexAuthor = req.indexAuthor
    const { title, description, publicationYear } = req.body

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
    const indexAuthor = req.indexAuthor
    const indexBook = req.indexBook

    writers[indexAuthor].books.splice(indexBook, 1)
    return res.status(200).json({ msg: "Book deleted succesfully" })
}

exports.updateBook = (req, res) => {
    return res.status(200).json({ msg: "Book modified succesfully" })
}
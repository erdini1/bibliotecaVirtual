let { writers } = require("../constants/index")

exports.allBooks = (req, res) => {
    const author = req.author
    return res.status(200).json(author.books)
}

exports.addBook = (req, res) => {
    return res.status(201).json({ msg: "Book added" })
}
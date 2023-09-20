let { writers } = require("../constants/index")

exports.allBooks = (req, res) => {
    const author = req.author
    return res.status(200).json(author.books)
}
let { writers } = require("../constants/index")

exports.allWriters = (req, res) => {
    return res.status(200).json(writers)
}

exports.addWriter = (req, res) => {
    const { name, username, birthYear } = req.body
    writers.push({
        id: writers.length == 0 ? 0 : writers.length,
        name,
        username,
        birthYear,
        books: []
    })
    return res.status(201).json({ msg: "Writer added" })
}

exports.oneWriter = (req, res) => {
    const author = req.author
    return res.status(200).json(author)
}

exports.deleteWriter = (req, res) => {
    const author = req.author
    const authorIndex = writers.findIndex(element => element.id == author.id);
    writers.splice(authorIndex, 1)
    return res.status(200).json({ msg: "Writer deleted succesfully" })
}
let { writers } = require("../constants/index")

exports.allWriters = (req, res) => {
    return res.status(200).json(writers)
}

exports.addWriter = (req, res) => {
    const { name, username, birthYear } = req.body
    const lastAuthorID = writers[writers.length - 1].id
    writers.push({
        id: lastAuthorID + 1,
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

exports.updateWriter = (req, res) => {
    const id = +req.params.id
    const { name, username, birthYear } = req.body
    writers.forEach(element => (
        element.id === id ? (
            element.name = name || element.name,
            element.username = username || element.username,
            element.birthYear = birthYear || element.birthYear
        ) : ""
    ))
    return res.status(200).json({ msg: "Writer modified succesfully" })
}
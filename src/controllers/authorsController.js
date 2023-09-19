const { writers } = require("../constants/index")

exports.allWriters = (req, res) => {
    return res.status(200).json(writers)
}

exports.addWriter = (req, res) => {
    return res.status(201).json({ msg: "Writer added" })
}

exports.oneWriter = (req, res) => {
    const id = +req.params.id
    const author = writers.find(element => element.id == id)
    if (!author) {
        return res.status(404).json({ error: "Author doesn't exists" })
    }
    return res.status(200).json(author)
}
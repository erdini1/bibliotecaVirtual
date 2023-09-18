const writers = require("../constants/index")

exports.allWriters = (req, res) => {
    res.status(200).json(writers)
}

exports.addWriter = (req, res) => {
    res.status(201).json({ msg: "Writer added" })
}
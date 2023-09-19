function validateExistingWriter(req, res, next) {
    // console.log("validateExistingWriter")
    next()
}

function validateWriterData(req, res, next) {
    const { name, username, birthYear } = req.body
    if ([name, username, birthYear].includes("")) {
        res.status(400).json({ error: "The fields cannot be empty" })
    }
    next()
}

module.exports = {
    validateExistingWriter,
    validateWriterData
}
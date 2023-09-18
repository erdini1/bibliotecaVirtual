function validateExistingWriter(req, res, next) {
    console.log("Paso por middle")
    next()
}

module.exports = {
    validateExistingWriter
}
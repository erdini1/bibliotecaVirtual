exports.validateBookData = (req, res, next) => {
    const { title, description, publicationYear } = req.body
    if ([title, description, publicationYear].includes("")) {
        return res.status(400).json({ error: "The fields cannot be empty" })
    }
    next()
}
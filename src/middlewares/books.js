exports.validateBookData = (req, res, next) => {
    const { title, description, publicationYear } = req.body
    // ningun campo puede faltar
    if (req.method === "POST" && (!title || !description || !publicationYear)) {
        return res.status(400).json({ error: "The fields cannot be empty" })
    }
    // Puede faltar alguno pero ninguno de los que estan puede estar vacio
    if ([title, description, publicationYear].some(field => field === "")) {
        return res.status(400).json({ error: "The fields cannot be empty" })
    }
    next()
}
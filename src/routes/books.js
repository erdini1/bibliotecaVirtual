const express = require("express")
const router = express.Router()

const { allBooks, addBook } = require("../controllers/books.js")
const { validateWriterId } = require("../middlewares/authors.js")
const { validateBookData } = require("../middlewares/books.js")

router
    .get("/:id/books", validateWriterId, allBooks)
    .post("/:id/books", validateWriterId, validateBookData, addBook)

// router
//     .get("/:id/books/:idLibro", validateWriterId, )
module.exports = router
const express = require("express")
const router = express.Router()

const { allBooks, addBook, oneBook, updateBook, deleteBook } = require("../controllers/books.js")
const { validateWriterId } = require("../middlewares/authors.js")
const { validateBookData, validateBookId } = require("../middlewares/books.js")

router
    .get("/:id/books", validateWriterId, allBooks)
    .post("/:id/books", validateWriterId, validateBookData, addBook)

router
    .get("/:id/books/:idLibro", validateWriterId, validateBookId, oneBook)
    .delete("/:id/books/:idLibro", validateWriterId, validateBookId, deleteBook)
    .put("/:id/books/:idLibro", validateWriterId, validateBookId, validateBookData, updateBook)

module.exports = router
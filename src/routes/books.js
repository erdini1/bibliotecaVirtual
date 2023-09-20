const express = require("express")
const router = express.Router()

const { allBooks, addBook } = require("../controllers/booksController.js")
const { validateWriterId } = require("../middlewares/authorsMiddleware.js")
const { validateBookData } = require("../middlewares/booksMiddleware.js")

router
    .get("/:id/books", validateWriterId, allBooks)
    .post("/:id/books", validateWriterId, validateBookData, addBook)

module.exports = router
const express = require("express")
const router = express.Router()

const { allBooks } = require("../controllers/booksController.js")
const { validateWriterId } = require("../middlewares/authorsMiddleware.js")

router
    .get("/:id/books", validateWriterId, allBooks)

module.exports = router
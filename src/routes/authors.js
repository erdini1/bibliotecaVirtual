const express = require("express");
const router = express.Router()
const { allWriters, addWriter, oneWriter } = require("../controllers/authorsController.js")
const { validateExistingWriter, validateWriterData, validateWriterId } = require("../middlewares/authorsMiddleware.js")

router.get("/", allWriters)
    .post("/", validateExistingWriter, validateWriterData, addWriter)

router.get("/:id", validateWriterId, oneWriter)

module.exports = router
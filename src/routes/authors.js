const express = require("express");
const router = express.Router()
const { allWriters, addWriter } = require("../controllers/authorsController.js")
const { validateExistingWriter, validateWriterData } = require("../middlewares/authorsMiddleware.js")

router.get("/", allWriters)
    .post("/", validateExistingWriter, validateWriterData, addWriter)

module.exports = router
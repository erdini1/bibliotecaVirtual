const express = require("express");
const router = express.Router()
const { allWriters, addWriter, oneWriter } = require("../controllers/authorsController.js")
const { validateExistingWriter, validateWriterData } = require("../middlewares/authorsMiddleware.js")

router.get("/", allWriters)
    .post("/", validateExistingWriter, validateWriterData, addWriter)

router.get("/:id", oneWriter)

module.exports = router
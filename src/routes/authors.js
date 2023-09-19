const express = require("express");
const router = express.Router()
const { allWriters, addWriter, oneWriter, deleteWriter } = require("../controllers/authorsController.js")
const { validateWriterData, validateWriterId } = require("../middlewares/authorsMiddleware.js")

router
    .get("/", allWriters)
    .post("/", validateWriterData, addWriter)

router
    .get("/:id", validateWriterId, oneWriter)
    .delete("/:id", validateWriterId, deleteWriter)


module.exports = router
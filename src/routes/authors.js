const express = require("express");
const router = express.Router()
const { allWriters, addWriter, oneWriter, deleteWriter, updateWriter } = require("../controllers/authors.js")
const { validateWriterData, validateWriterId } = require("../middlewares/authors.js")

router
    .get("/", allWriters)
    .post("/", validateWriterData, addWriter)

router
    .get("/:id", validateWriterId, oneWriter)
    .delete("/:id", validateWriterId, deleteWriter)
    .put("/:id", validateWriterId, validateWriterData, updateWriter)


module.exports = router
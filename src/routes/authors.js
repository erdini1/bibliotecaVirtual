const express = require("express");
const router = express.Router()
const { allWriters, addWriter } = require("../controllers/authorsController.js")
const { validateExistingWriter } = require("../middlewares/authorsMiddleware.js")

router.get("/", allWriters)
    .post("/", validateExistingWriter, addWriter)

module.exports = router
const express = require("express");
const router = express.Router()
const { allWriters, addWriter } = require("../controllers/authorsController.js")

router.get("/", allWriters)
    .post("/", addWriter)

module.exports = router
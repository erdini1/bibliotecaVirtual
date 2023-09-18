const express = require("express");
const router = express.Router()
const writers = require("../constants/index")

router.get("/", (req, res) => {
    res.status(200).json(writers)
})

module.exports = router
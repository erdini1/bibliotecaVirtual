import express from "express"
import "dotenv/config"

const app = express()

app.get("/", (req, res) => {
    res.json({ msg: "Hello World" })
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
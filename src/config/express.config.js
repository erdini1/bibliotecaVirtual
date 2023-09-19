const express = require("express")

const ExpressConfig = () => {

    const app = express()
    app.use(express.json())

    return app
}

module.exports = ExpressConfig
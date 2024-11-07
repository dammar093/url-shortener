const express = require("express")
const urlRouter = require("./routes/url")
const cors = require("cors")
var bodyParser = require('body-parser')
const app = express()

 app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())
app.use(express(express.urlencoded()))
app.use("/api/urls",urlRouter)

module.exports = app
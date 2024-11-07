const express = require("express");
const {createUrl, getUrl} = require("../controller/url")
const router = express.Router()

router.post("/",createUrl).get("/:id",getUrl)

module.exports =  router
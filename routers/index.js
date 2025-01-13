const express = require("express");
const router = express.Router()
const service = require("./comment.routers")

router.use("/comment",service)


module.exports = router
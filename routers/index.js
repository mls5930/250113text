const express = require("express");
const router = express.Router()
const service = require("./comment.routers")

router.use("/comment",service)
router.use("/board",service)


module.exports = router
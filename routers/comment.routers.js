const express = require("express");
const router = express.Router()
const comments = require('../controllers/comment.controllers')
const middeware_log = require("../middeware/logmiddeware")

router.get('/list',middeware_log,comments.getdataList)
router.get('/update/:id',comments.getUpdate)
router.post('/write',comments.postdataWrite)
router.post('/update/:id',comments.postUpdate)
router.post('/delete/:id',comments.postSlice)


module.exports = router

const express = require("express");
const router = express.Router()
const comments = require('../controllers/comment.controllers')
const WrireErrorMiddeware = require("../middeware/WrireErrorMiddeware")

router.get('/list',comments.getdataList)
router.get('/update/:id',comments.getUpdate)
router.post('/write',WrireErrorMiddeware,comments.postdataWrite)
router.post('/update/:id',comments.postUpdate)
router.post('/delete/:id',comments.postSlice)


module.exports = router

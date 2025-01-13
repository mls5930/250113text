const express = require("express");
const router = express.Router()
const comments = require('../controllers/controllers')


router.get('/list',comments.getdatalist)
router.get('/update/:id',comments.getUpdate)
router.post('/write',comments.postdatawrite)
router.post('/update/:id',comments.postUpdate)
router.post('/delete/:id',comments.postslice)


module.exports = router

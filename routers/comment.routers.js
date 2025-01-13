const express = require("express");
const router = express.Router()
const comments = require('../controllers/controllers')


router.get('/list',comments.getdatalist)

router.post('/write',comments.postdatwrite)

router.post('/update/:id',comments.postUpdate)

router.post('/delete/:id',comments.postslice)


module.exports = router

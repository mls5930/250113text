const express = require("express");
const router = express.Router()
const comments = require("")


router.get('/list', comments.getList)

router.get('/write/:id',(req,res)=>{

})

router.post('/write',db)

router.get('/update',(req,res)=>{
    const id = parseInt(req.params.id)
    res.render(`write.html/${id}`)
})
router.get('/update',(req,res)=>{
    const id = parseInt(req.params.id)
    res.render(`write.html/${id}`)
})
router.post('/delete',(req,res)=>{
    const id = parseInt(req.params.id)
    res.redirect(`/list`)
})

module.exports = router

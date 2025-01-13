const commetrepository = require('../service/service')

const getdatalist = async (req,res)=>{
    const boardList = await commetrepository.datalist()
    res.render('list.html',{
        boardList
    })
}

const postdatwrite =async (req,res)=>{
    console.log(req.body);
    
    const {insertId} = await commetrepository.datawrite(req.body)
    
    res.redirect('/list')
}

const postUpdate = async (req,res)=>{
    const id = parseInt(req.params.id)
    await commetrepository.dataupdate(id)
    res.render('write.html')
}

const postslice = async (req,res)=>{
    const id = parseInt(req.params.id)
    await commetrepository.dataslice(id)
    res.redirect('/list')
}

module.exports={
    getdatalist,
    postdatwrite,
    postUpdate,
    postslice
}
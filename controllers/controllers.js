const commetrepository = require('../service/service')

const getdatalist =async (req,res)=>{
    const boardList = await commetrepository.datalist()
    res.render('list.html',
        boardList
    )
}

const getdatwrite =async (req,res)=>{
    const {insertId} = await commetrepository.datawrite()
    res.render('list.html',
    )
}

const postUpdate = async (req,res)=>{
    const id = parseInt(req.params.id)
    await commetrepository.dataupdate(id)
    res.render('write.html')
}

const postslice = async (req,res)=>{
    const id = parseInt(req.params.id)
    await commetrepository.dataslice(id)
    res.render('list.html')
}

module.exports={
    getdatalist,
    getdatwrite,
    postUpdate,
    postslice

}
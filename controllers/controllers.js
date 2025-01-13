const commetrepository = require('../service/service')

const getdatalist = async (req,res)=>{
    const boardList = await commetrepository.datalist()
    res.render('list.html',{
        boardList
    })
}
const getUpdate = async (req,res)=>{
    const id = parseInt(req.params.id)
    const [comment] = await commetrepository.dateview(id)
    console.log(comment);
    res.render('write.html',{
        comment
    })

}
const postdatawrite =async (req,res)=>{
   
    await commetrepository.datawrite(req.body)
    res.redirect('/comment/list')
}

const postUpdate = async (req,res)=>{
    const id = parseInt(req.params.id)
    await commetrepository.dataupdate(id,req.body)
    res.redirect('/comment/list')
}

const postslice = async (req,res)=>{
    const id = parseInt(req.params.id)
    await commetrepository.dataslice(id)
    res.redirect('/comment/list')
}

module.exports={
    getdatalist,
    postdatawrite,
    postUpdate,
    postslice,
    getUpdate
}
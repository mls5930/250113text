const commetrepository = require('../service/service')

const getdataList = async (req,res)=>{
    try{
    const boardList = await commetrepository.dataList()
    res.render('list.html',{
        boardList
    })
    }catch{
        res.status(404).send("리스트 페이지 조회를 실패였습니다.")
    }
}
const getUpdate = async (req,res)=>{
    try{
        const id = parseInt(req.params.id)
        const [comment] = await commetrepository.dateView(id)
        console.log(comment);
        res.render('write.html',{
            comment
        })
    }catch{
        res.status(404).send("업데이트 페이지 조회를 실패였습니다.")
    }
}
const postdataWrite =async (req,res)=>{
    try{
    await commetrepository.dataWrite(req.body)
    res.redirect('/comment/list')
    }catch{
        res.status(404).send("글쓰기를 실패였습니다.")
    }
}

const postUpdate = async (req,res)=>{
    try{
        const id = parseInt(req.params.id)
        await commetrepository.dataUpdate(id,req.body)
        res.redirect('/comment/list')
    }catch{
        res.status(404).send("글수정을 실패였습니다.")
    }
}

const postSlice = async (req,res)=>{
    try{
        const id = parseInt(req.params.id)
        await commetrepository.dataSlice(id)
        res.redirect('/comment/list')
    }catch{
        res.status(404).send("글삭제를 실패였습니다.")
    }
}

module.exports={
    getdataList,
    postdataWrite,
    postUpdate,
    postSlice,
    getUpdate
}
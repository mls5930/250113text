const log = (req,res,next) => {
    const undefind = req.body.content
    console.log(undefind);
    if (undefind !== ''){
        console.log("미들웨어 확인");
        next()
    }else {
        res.redirect('/comment/list')
        throw Error("에러 빈값입니다")
    }
}

module.exports = log
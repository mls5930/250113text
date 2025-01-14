const log = (req,res,next) => {
    console.log("미들웨어 확인");
    next()
}

module.exports = log
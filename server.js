const express = require("express")
const nunjucks = require("nunjucks");
const app = express()
const comment = require('./routers')

app.set('view engine','html');

nunjucks.configure("views", {
    express: app
})
app.use(express.urlencoded({extended: true}));
app.use (express.static("views"));

app.use (comment)

app.listen(3000,()=>{
    console.log("서버가 열리는지 확인");
})

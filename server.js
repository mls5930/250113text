const express = require("express")
const app = express()
const router = express.Ruter()
const comment = require('./routers')

app.set('view engine', 'html');
nunjucks.configure("views", {
    express: app
})
app.use (express.static("views"));

app.listen(3000,()=>{
    console.log("서버가 열리는지 확인");
})

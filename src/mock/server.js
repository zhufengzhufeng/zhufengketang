let express = require('express');
let app = express();
app.listen(3000);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
//輪播圖
let sliders = require('./slider')
app.get('/api/getSliders',function (req,res) {
    res.send(sliders);
});
//課程列表
let lessonList = require('./lessionList');
app.get('/api/getLessons',function (req,res) {
    res.send(lessonList);
});

app.get('/api/getLessons/:type',function (req,res) {
    console.log(req.params.type);
    res.send(lessonList);
});
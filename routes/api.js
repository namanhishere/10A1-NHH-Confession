var express = require('express');
var router = express.Router();
const superagent = require("superagent")
var database = require("../function/database").mysql

router.post('/post', async function(req, res, next) {
    database.query("SELECT * FROM thong_tin_he_thong WHERE rootchar = 1", function (er,d) {
        if(er) return res.json(er)
        let confess_num = parseInt(d[0].confession_hien_tai) + 1
        console.log(d[0].access_token_hien_tai)
        let confession_content = req.query.content
        database.query(`UPDATE thong_tin_he_thong SET confession_hien_tai = ${confess_num} WHERE rootchar = 1`)
        let content = `#Confession_số_${confess_num}:\n${confession_content}\n\n\n//Đăng tải confession của bạn tại:http://nhh10a1.xyz/\n\n#10a1 #confession #chuyen_tuoi_hong`
        superagent.post("https://graph.facebook.com/225864295529972/feed").send({
            message:content,
            access_token: d[0].access_token_hien_tai
        }).end((err,data) =>{
            let prase = JSON.parse(data.text)
            res.json({
                id : prase.id
            })
        })
    })
   
    


});

module.exports = router;

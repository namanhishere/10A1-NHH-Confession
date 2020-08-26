var express = require('express');
var router = express.Router();
const superagent = require("superagent")
var database = require("../function/database").mysql

router.post('/post', async function(req, res, next) {
    da
    let confession_content = req.query.content
    let content = `Confession số 1:\n${confession_content}\n\n\n//Đăng tải confession tại:https://nhh-10a1-confession.herokuapp.com/`
    superagent.post("https://graph.facebook.com/1378190169043603/feed").send({
        message:content,
        access_token: "EAAkgNv6skioBAGJcsx7HhHJmqIA6oZBEZBw0DUW2R3WCBAIf1b9GVGDVyWpQZBChKeQUSf6s8EjI0kHeH41n9y0UuPN6DBLe6NZCKFAVmetZB76uP0TYpec7mFZAuBcPIpTs4OGCLxMWjYiOXQQMi8y1gVkvgrrM5XEG9NcUytbV9mRXE9ZC6th"
    }).end((err,data) =>{
        let prase = JSON.parse(data.text)
        res.json({
            id : prase.id
        })
    })
    


});

module.exports = router;

var express = require('express');
var router = express.Router();
const superagent = require("superagent")
var database = require("../function/database").mysql

router.post('/', async function(req, res, next) {
    res.send("Hello")
});

module.exports = router;

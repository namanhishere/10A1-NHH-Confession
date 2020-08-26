let setting = "mysql://bb41c5d3290ea1:4a8dbcab@us-cdbr-east-02.cleardb.com/heroku_aaa38844b60d5b7?reconnect=true"
const mysql = require("mysql")
const databse = mysql.createConnection(setting)
setInterval(() => {
    databse.ping()
}, 1000);
module.exports.mysql = databse
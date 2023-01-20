const mysql=require("mysql2")

const connection = mysql.createConnection({
    host : 'localhost',
    user:"root",
    password:"1146",
    database:'dairy_management_system'
})


module.exports=connection;
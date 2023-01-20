const express = require('express')

const app = express()
const connection = require("./database")




app.use(express.json());
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/project.html')
  let sql = "SELECT * FROM LOGIN";
  connection.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

app.post("/LR",(req,res)=>{
    connection.query()
})


app.listen(3000, () => {
  console.log('server is running at 3000')
  
connection.connect((err)=>{
  if(err) throw err ;
  console.log("database is connected");
})
})

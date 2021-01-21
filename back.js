const express = require ("express");
const path = require("path")
const app = express();
let port = process.env.PORT||8080
app.use(express.static("public",{}))
app.get("/api/:id",(req,res)=>{res.sendFile(path.join(__dirname,`${req.params.id}.html`))})
app.get('*', function(req, res){
    res.status(404).sendFile(path.join(__dirname,`404.html`))
  });
app.listen(port,()=>console.log("working"));
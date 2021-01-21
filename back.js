const express = require ("express");
const path = require("path")
const app = express();
let port = process.env.port||5000
app.use(express.static("public",{}))
app.get("/api/:id",(req,res)=>{res.sendFile(path.join(__dirname,`${req.params.id}.html`))})
app.listen(port,()=>console.log("aaa"));
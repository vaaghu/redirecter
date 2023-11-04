const express = require("express")
const app = express()
const PORT = 3000

const {youtube,linkedin} = require("./controllers/main.js")
const {checkAndroid, page} = require("./controllers/others.js")
app.get("/",(req,res)=>{
  res.send("by vaaghu")
})

app.get("/youtube",checkAndroid,youtube,page);
app.get("/linkedin",checkAndroid,linkedin, page);

app.listen(PORT,()=>{
  console.log("http://localhost:"+PORT)
  console.log("http://ec2-52-66-235-34.ap-south-1.compute.amazonaws.com:"+PORT)
  console.log("https://redirecter.vaaghu.repl.co")
})
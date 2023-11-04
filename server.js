const express = require("express")
const app = express()
const PORT = 443

const {youtube,linkedin} = require("./controllers/main.js")
const {checkAndroid, page} = require("./controllers/others.js")
app.get("/",(req,res)=>{
  res.send("by vaaghu")
})

app.get("/youtube",checkAndroid,youtube,page);
app.get("/linkedin",checkAndroid,linkedin, page);

app.listen(PORT,()=>{
  console.log("http://localhost:"+PORT)
})
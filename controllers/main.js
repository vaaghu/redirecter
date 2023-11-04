const basicPage = require("../utils/basicPage.js") 

const youtube = (req,res,next) => {
  console.log(req.query)
  console.log(req.baseURL,req.buttonTitle)
  let id = req.query.id
  id ??= "Y_ydbeCSMeI"

  req.buttonTitle = "Open Youtube"
  if(req.isAndroid){
    req.baseURL = `"intent://youtu.be/${id}#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=https://www.youtube.com/watch?v=${id};end"`
  }else{
    req.baseURL = `"https://www.youtube.com/watch?v=${id}"`
  }
  next()
}

const linkedin = (req,res,next) => {
  console.log(req.query)
  let id = req.query.id
  id ??= "7122621782804611072"
  req.buttonTitle = "Open Linkedin"
  if(req.isAndroid){
    req.baseURL = `"intent://linkedin.com/feed/update/urn:li:activity:${id}/#Intent;scheme=https;package=com.linkedin.android;S.browser_fallback_url=https://www.linkedin.com/feed/update/urn:li:activity:${id}/;end"`
  }else{
    req.baseURL = `"https://www.linkedin.com/feed/update/urn:li:activity:${id}/"`
  }
  next()
}
module.exports = {youtube,linkedin}
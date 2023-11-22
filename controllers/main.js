const youtube = (req,res,next) => {
  console.log(req.query)
  console.log(req.baseURL,req.buttonTitle)
  let id = req.query.id
  let time = req.query.time
  id ??= "Y_ydbeCSMeI"
  time ??= 0 
  req.buttonTitle = "Youtube"
  if(req.isAndroid){
    req.baseURL = `"intent://youtu.be/${id}&t=${time}#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=https://www.youtube.com/watch?v=${id}&t=${time};end"`
    next()
  }else{
    res.redirect(`https://www.youtube.com/watch?v=${id}&t=${time}`);
    res.end()
  }
  // next()
}

const linkedin = (req,res,next) => {
  console.log(req.query)
  let id = req.query.id
  id ??= "7122621782804611072"
  req.buttonTitle = "Linkedin"
  if(req.isAndroid){
    req.baseURL = `"intent://linkedin.com/feed/update/urn:li:activity:${id}/#Intent;scheme=https;package=com.linkedin.android;S.browser_fallback_url=https://www.linkedin.com/feed/update/urn:li:activity:${id}/;end"`
    next()
  }else{
    res.redirect(`https://www.linkedin.com/feed/update/urn:li:activity:${id}/`)
    res.end()  
  }
}

const shorts = (req,res,next) => {
  console.log(req.query)
  let id = req.query.id
  let time = req.query.time
  time ??= 0
  id ??= "zvSPF6cWxXI?si=bTB1avVpf2zZWYQo"
  // https://youtube.com/shorts/zvSPF6cWxXI?si=bTB1avVpf2zZWYQo
  req.buttonTitle = "Shorts"
  if(req.isAndroid){
    req.baseURL = `"intent://youtu.be/${id}&t=${time}#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=https://youtube.com/shorts/${id}&t=${time};end"`
    next()
  }else{
    res.redirect(`https://youtube.com/shorts/${id}&t=${time}`)
    res.end()  
  }
}
module.exports = {youtube, linkedin, shorts}
const basicPage = (title,link)=>{
  title ??= "continue"
  link ??= "intent://youtu.be/Y_ydbeCSMeI#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=https://www.youtube.com/watch?v=Y_ydbeCSMeI;end"
  return (`<html>
    <head><title>don quix</title></head>
    <body>
    <button id="openYouTubeButton" onClick="openYouTube()">${title}</button>
    <script>
    setTimeout(()=>{
      var button = document.getElementById('openYouTubeButton');
      button.click();
    },100)

    function openYouTube() {
      window.open(${link});
    }
    </script>
    </body>
    </html>
    `)
}

module.exports = basicPage
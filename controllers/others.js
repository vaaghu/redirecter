const path  = require("path")
const checkAndroid = (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  const isAndroid = userAgent.match(/Android/i);
  if (isAndroid) {
    // User is using an Android device
    req.isAndroid = true;
  } else {
    // User is not using an Android device
    req.isAndroid = false;
  }
  console.log("isAndrois = ",req.isAndroid)
  next();
};
const page = (req,res,next)=>{
  const imgPath = "../images/logo.png";
  req.buttonTitle ??= "continue"
  req.baseURL ??= ""
  res.sendFile(path.join(__dirname, "../images/logo.png"));
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>don Quix</title>
    <style>
      body{
        width:100dvw;
        height: 100dvh;
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: black;
        /* overflow: hidden; */
      }
      #card{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        background-color: transparent;
        border-radius: 15px;
        /* box-shadow: 11px 11px 20px rgba(255, 255, 255, 0.24); */
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        /* max-height: 100dvh; */
        margin: 10px 2px;
      }
      #openYouTubeButton{
        /* width: 70%; */
        padding: 15px 5px;
        font-size: 1.2rem;
        color: rgb(255, 197, 197);
        background-color:#be0000;
        border: none;
        border-radius: 15px;
      } 
      #logo{
        margin: 20px 5px;
        background: #ffdada;
        border-radius: 50%;
        width: 8rem;
        height: 8rem;
        /* width: 300px;
        height: 300px; */
      }
    </style>
  </head>
  <body>
    <div id="card">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" id="logo"
      width="756.000000pt" height="753.000000pt" viewBox="0 0 756.000000 753.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,753.000000) scale(0.100000,-0.100000)"
      fill="#be0000" stroke="none">
      <path d="M0 3765 l0 -3765 3780 0 3780 0 0 3765 0 3765 -3780 0 -3780 0 0
      -3765z m4975 1864 c728 -964 1175 -1560 1175 -1567 0 -28 -140 -101 -256 -134
      -67 -19 -102 -22 -229 -22 -130 1 -163 4 -249 27 -127 34 -316 127 -426 211
      -170 128 -343 333 -435 516 -42 84 -99 246 -121 347 -26 117 -24 372 4 475 27
      100 61 184 103 255 42 69 171 207 190 201 8 -2 118 -141 244 -309z m-2510
      -163 c395 -73 712 -288 856 -581 56 -115 77 -187 86 -299 l6 -79 -179 7 c-98
      4 -182 10 -186 12 -5 3 -8 24 -8 47 0 59 -24 140 -62 217 -41 81 -177 221
      -264 272 -243 142 -542 173 -810 83 -237 -79 -402 -230 -469 -428 -14 -42 -25
      -89 -25 -106 0 -18 -5 -31 -12 -32 -45 -3 -333 4 -345 8 -20 8 -8 93 28 208
      92 291 360 528 716 634 85 25 141 36 278 55 58 8 311 -3 390 -18z m-2250
      -1396 c64 -109 201 -312 252 -373 13 -16 23 -32 23 -35 0 -4 -17 -25 -38 -47
      -20 -22 -84 -92 -142 -155 -57 -63 -109 -116 -115 -118 -7 -2 -31 39 -54 90
      -41 91 -42 96 -47 233 -6 126 7 409 23 508 7 48 10 46 98 -103z m397 -553 c87
      -102 266 -283 366 -369 l53 -45 -108 -194 c-60 -107 -133 -238 -163 -291 -29
      -54 -57 -98 -62 -98 -10 0 -123 152 -205 275 -117 176 -273 455 -273 487 0 7
      55 73 123 147 67 74 132 147 145 162 13 16 26 29 30 29 4 0 46 -46 94 -103z
      m565 -526 c161 -118 299 -202 483 -293 91 -44 167 -83 169 -85 3 -2 -7 -58
      -22 -126 -14 -67 -49 -228 -77 -357 -77 -359 -91 -420 -98 -420 -4 0 -52 27
      -108 61 -221 133 -491 359 -676 565 -56 63 -106 120 -110 127 -4 8 60 132 159
      310 91 163 167 297 169 297 2 0 52 -36 111 -79z m948 -477 c137 -42 292 -77
      460 -104 71 -12 131 -23 133 -24 4 -4 -67 -1028 -72 -1033 -2 -2 -68 10 -147
      28 -162 35 -399 109 -545 170 -98 41 -274 126 -274 133 0 8 191 892 195 903 3
      9 23 5 72 -14 37 -14 118 -41 178 -59z m2190 -94 c119 -11 262 -30 363 -51
      l52 -10 0 -42 c1 -52 -62 -991 -66 -995 -1 -2 -78 2 -171 9 -143 10 -446 8
      -668 -4 l-30 -2 0 545 0 545 70 6 c122 10 326 9 450 -1z m-567 -557 l2 -543
      -27 -7 c-16 -5 -194 -8 -398 -8 -300 0 -393 4 -494 18 -68 10 -127 19 -130 22
      -4 2 -3 50 1 107 13 177 58 882 58 903 0 20 7 20 372 21 277 1 399 5 473 17
      55 8 109 14 120 13 20 -1 20 -9 23 -543z m1134 451 c180 -56 355 -141 510
      -246 128 -87 179 -135 173 -161 -41 -183 -185 -770 -189 -774 -3 -3 -41 8 -83
      25 -154 60 -460 141 -538 142 -47 1 -46 -6 -20 391 14 206 30 433 35 504 6 72
      10 133 10 138 0 11 13 9 102 -19z m819 -511 c178 -191 338 -446 449 -721 26
      -64 32 -87 24 -100 -12 -19 -254 -211 -267 -212 -4 0 -44 32 -89 71 -96 82
      -234 176 -330 225 -37 19 -68 36 -68 38 0 2 34 145 76 317 41 173 82 347 91
      387 10 41 22 72 29 72 7 0 45 -35 85 -77z"/>
      </g>
      </svg>
      <button id="openYouTubeButton" onClick="openYouTube()">${req.buttonTitle}</button>
    </div>
    <script>
    function openYouTube() {
      window.open(${req.baseURL});
    }
    </script>
    </body>
    </html>
    `)
}

module.exports = {checkAndroid, page}
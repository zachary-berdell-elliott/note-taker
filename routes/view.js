const path = require("path");
const router = require("express").Router();

//Function for sending pages of the website
function getReq(webDir, fileDir){
    router.get(webDir, (req, res) => {
        res.sendFile(path.join(__dirname, fileDir));
      });
}

//Sends index
getReq('/', '../public/index.html');

//Sends notes
getReq('/notes', '../public/notes.html');

module.exports = router;
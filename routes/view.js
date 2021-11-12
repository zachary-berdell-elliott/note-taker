const path = require("path");
const router = require("express").Router();

//Function for sending pages of the website

    router.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

/*      //Sends index
getReq('/', 'public/index.html');

//Sends notes
getReq('/notes', 'public/notes.html');
*/
module.exports = router;
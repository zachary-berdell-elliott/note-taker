//Required modules
const express = require("express");
const path = require("path");
//Variable declaration
const app = express();
const db = require("./db/db.json");
const port = process.env.PORT || 3000;

//Function for sending pages of the website
function getReq(webDir, fileDir){
  app.get(webDir, (req, res) => {
    res.sendFile(path.join(__dirname, fileDir));
  });
}

app.use(express.static(__dirname + '/public'));

//Sends index
getReq('/', 'public/index.html');

//Sends notes
getReq('/notes', 'public/notes.html');

//Sends the saved notes
app.get('/api/notes', (req, res) => {
    res.json(db);
});

//Creates server
app.listen(port, ()=> {
  console.log("The server is running.")
})
const express = require("express");
const path = require("path");

const app = express();
const db = require("./db/db.json");
const PORT = process.env.pot || 3000;

//Function for sending pages of the website
function getReq(webDir, fileDir){
  app.get(webDir, (req, res) => {
    res.sendFile(path.join(__dirname, fileDir));
  });
}

//Sends index
getReq('/', 'public/index.html');

//Sends notes
getReq('/notes', 'public/notes.html');

app.get('/api/notes', (req, res) => {
    res.json(db);
});

app.listen(PORT, ()=> {
  console.log("The server is running.")
})
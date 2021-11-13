//Required modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const controller = require("./routes/controller");
const view = require("./routes/view");
//Variable declaration
const app = express();
const db = require("./db/db.json");
const port = process.env.PORT || 3000;

//Use functions
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/api", controller)
app.use("/", view)

//Creates server
app.listen(port, ()=> {
  console.log("The server is running.")
})
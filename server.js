const express = require("express");
const path = require("path");

const app = express();
const db = require("./db/db.json");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.get('/api/db', (req, res) => {
    res.json(db);
});
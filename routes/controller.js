const router = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");

router.get('/notes', (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
  res.json(db);
});

router.post('/notes', (req, res) => {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: Math.floor(Math.random() * 5000)
    }

    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
  })

router.delete("/notes/:id", (req, res) => {
  let keepNotes = [];
  for(let i=0; i < db.length ; i++){
    if (db[i].id != req.params.id){
      keepNotes.push(db[i]);
    }
  }
  db = keepNotes;
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err){
    if(err) throw err;
  });
  res.json(db);
})



module.exports = router;
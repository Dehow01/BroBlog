module.exports = function(app, db) {
  app.post("/notes", (req, res) => {
   const note = {id: 1};
   db.collection("notes").insert(note, (err, result) => {
     if (err) {
       res.send({"error": "An error has occurred"});
     } else {
       res.send(result.ops[0]);
     }
   });
  });
};

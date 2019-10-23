const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
const port = 8000;
const mongoClient = new MongoClient(db.url, {useNewUrlParser: true});
let dbClient;
let clientDb;
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoClient.connect(function (err, client) {
  if (err) {
    return console.log(err);
  }
  clientDb = client;
  dbClient = client.db("broblog");
  app.listen(port, () => {
    console.log("listen 8000");
  });
});

app.get("/api/category/:category", function (req, res) {
  const collection = dbClient.collection("notes");
  collection.find({category: req.params.category}).toArray((function (err, notes) {
    if (err) {
      return console.log(err);
    }
    res.send(notes);
  }));
});
app.get("/api/post/:id", function (req, res) {
  const idPost = +req.params.id;
  const collection = dbClient.collection("notes");
  collection.findOne({idPost: idPost}, function (err, notes) {
    if (err) {
      return console.log(err);
    }
    if (!notes) {
      res.status(404).send("Not Found");
    } else {
      res.send(notes);
    }
  });

});
app.get("/api/getHeaderLink", function (req, res) {
  const collection = dbClient.collection("category");
  collection.find().toArray((function (err, notes) {
    if (err) {
      return console.log(err);
    }
    res.send(notes);
  }));

});

app.post("/api/getRecommendation", function(req, res) {
  let category = req.param("category");
  const collection = dbClient.collection("notes");
  collection.find({"category": category.toString()}).sort({idPost: -1}).limit(3).toArray(function(err, notes) {
    if (err) {
      return console.log(err);
    }
    res.send(notes);
  });
});

process.on("SIGINT", () => {
  clientDb.close();
  process.exit();
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:4000";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
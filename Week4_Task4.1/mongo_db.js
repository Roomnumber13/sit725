var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mike:229049@cluster0.qr9ei.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mike:229049@cluster0.qr9ei.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
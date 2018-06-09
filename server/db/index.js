var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/l2dex';

module.exports = function (callback) {
  MongoClient.connect(url, function (err, db) {
    console.log("Connected successfully to server");

    var dbo = db.db("l2dex");
    console.log(dbo);

    callback(dbo);
  });
}

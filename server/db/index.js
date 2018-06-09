var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/l2dex';

module.exports = function (callback) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("l2dex");

    callback(dbo);

    db.close();
  });
}

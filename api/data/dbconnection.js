var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://35.200.205.217:27017/hoteldata';

var _connection = null;

var open = function() {
  MongoClient.connect(dburl, function(err, db){
    if(err) {
      console.log("DB connection failed");
      return;
    }
    _connection = db;
    console.log("DB connection open", db);

  });
  //set _connection

};

var get = function() {
  return _connection;
};

module.exports = {
  open : open,
  get : get
};

var mongoose = require('mongoose');
var dburl = 'mongodb://35.200.205.217:27017/hoteldata'

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
  console.log('Mongose connected to ' + dburl);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongose disconnected ');
});
mongoose.connection.on('error', function(err) {
  console.log('Mongose connection error:' + err);
});

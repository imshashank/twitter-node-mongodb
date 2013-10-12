// app.js
var databaseUrl = "mydb"; 
var collections = ["keywords", "tweets"]
var db = require("mongojs").connect(databaseUrl, collections);

db.keywords.find(function(err, keywords) {
  if( err || !keywords) console.log("No tweets");
  else keywords.forEach( function(tweet) {
    console.log(tweet);
  } );
});

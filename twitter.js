var twitter = require('ntwitter');
var credentials = require('./credentials.js');

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});
// app.js
var databaseUrl = "mydb"; 
var collections = ["keywords", "tweets"]
var db = require("mongojs").connect(databaseUrl, collections);


t.stream(
    'statuses/filter',
    { track: ['obama', 'USA'] },
    function(stream) {
        stream.on('data', function(tweet) {
// app.js
db.keywords.save({tweet: tweet.text ,keyword: "obama+USA"}, function(err, saved) {
  if( err || !saved ) console.log("Tweet not saved");
  else console.log("Tweet saved");
console.log(tweet.text);
});

            console.log(tweet.text);
        });
    }
);

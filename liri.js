var request = require('request');
var twitter = require ('twitter');
var twitterKeys = require('./keys.js');

console.log(twitterKeys);

/* Must take in the following arguments:
`my-tweets`
`spotify-this-song`
`movie-this`
`do-what-it-says`*/

var command = process.argv[2];

switch (command) {
  case "my-tweets":
  	//Unsure if this is correct
    var params = {screen_name: 'JfLiri'};
	twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    console.log(tweets);
	  };
	});
    break;

  case "spotify-this-song":
    spotifySong();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doSays();
    break;
};

// request()

// function spotifySong()

// function movieThis()

// function doSays()
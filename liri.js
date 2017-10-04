var request = require('request');
var fs = require('fs');
var twitter = require ('twitter');
var twitterKeys = require('./keys.js');

var client = new twitter(twitterKeys);

/* Must take in the following arguments:
`my-tweets`
`spotify-this-song`
`movie-this`
`do-what-it-says`*/

var command = process.argv[2];

switch (command) {

  case "my-tweets":
    var params = {screen_name: 'JfLiri'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    for (var i = 0; i < tweets.length; i++) {
	    	console.log(tweets[i].text);
	    	console.log(tweets[i].created_at);
	    };
	  };
	});
    break;

  case "spotify-this-song":
  	var song = "";
  	var nodeArgs = process.argv;
	for (var i = 3; i < nodeArgs.length; i++) {
		if (i > 3 && i < nodeArgs.length) {
			song = song + "+" + nodeArgs[i];
			console.log(song);
		} else {
			song += nodeArgs[i]
			console.log(song);
		}
  	};

  	if (process.argv[3] === undefined) {
  		song = "The Sign";
  		console.log(song);
  	}

    break;

  case "movie-this":
  	var movie = "";
  	var nodeArgs = process.argv;
  	for (var i = 3; i < nodeArgs.length; i++) {
  		if (i > 3 && i < nodeArgs.length) {
  			movie = movie + "+" + nodeArgs[i];
  		} else {
  			movie += nodeArgs[i]
  		}
  	};
  	var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
    request(queryURL, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(response);
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
			console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		};
	});		
    break;

  case "do-what-it-says":
    break;

};
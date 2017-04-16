var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var urlparse = require('url-parse');
var fs = require('fs');

var app = express();
app.set('port', (process.env.PORT || 5000));
var payload = [];

app.get('/', function (req, res) {

    pageURL = 'http://www.archanaskitchen.com/';

    request(pageURL, function (error, response, html) {

        if (error) {
            console.log("Error: " + error);
        }

        if (response.statusCode === 200) {
            // Parse the document body
            var $ = cheerio.load(html);
            $('.media-list li').each(function () {
                var current = $(this);

                var crawledData = {
                    recipe: current.text().replace(/\s+/g, ''),
                    url: 'http://www.archanaskitchen.com/' + current.find('a').attr('href')
                }

                payload.push(crawledData);

            });
            res.send(payload);
        }
    })
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

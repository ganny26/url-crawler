var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var urlparse = require('url-parse');
var fs = require('fs');

var app = express();

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


app.listen('8086')

console.log('http://localhost:8086');

exports = module.exports = app;

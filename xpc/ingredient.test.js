var assert = require('assert'),
    should = require('should'),
    expect = require('chai').expect;
const Main = require('./main');
const CRAWL_URL = "http://food.ndtv.com/recipe-quinoa-pancakes-868999";
const cheerio = require('cheerio');
const request = require('request');




describe('Test Suite 2', function() {

    before(function() {
        
        request(CRAWL_URL, (err, res, body,call) => {
            var $ = cheerio.load(body);
            let tags = ['a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'b', 'u', 'span', 'strong', 'td', 'li', 'center'];
            let ingredientkeywords = ['ingredients used', 'ingredients for', 'ingredients in', 'ingredients of', 'ingredients to', 'ingredients'];
            let methodkeywords = ['directions for', 'directions'];
            x= Main.getElementByXpath(body, tags, ingredientkeywords);
        })  
    });

    describe('Scenario 1', function() {

        it('Equals Check', function() {
            expect(x).to.have.lengthOf(3);
        })

      
    });
});


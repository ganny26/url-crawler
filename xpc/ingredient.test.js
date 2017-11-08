var assert = require('assert'),
    should = require('should'),
    expect = require('chai').expect;
const Index = require('./index');
const CRAWL_URL = "https://www.archanaskitchen.com/sweet-lime-soda-recipe";
const cheerio = require('cheerio');
const request = require('request');


describe('Archana Kitchen', function () {
    it('length check', function () {
        var x = "";
        var t = [];
        return Index.crawlbyurl(CRAWL_URL).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(1);
        })
    })
    it('ingredient tag check', function () {
        return Index.crawlbyurl(CRAWL_URL).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients');
           })

    })
    it('method tag check', function () {
        return Index.crawlbyurl(CRAWL_URL).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('Directions for Sweet Lime Soda Recipe ');
        })

    })
});



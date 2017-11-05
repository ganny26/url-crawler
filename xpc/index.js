const request = require('request');
const cheerio = require('cheerio');

const Main = require('./main');
const CRAWL_URL = "http://food.ndtv.com/recipe-quinoa-pancakes-868999";


    var ingredientTags;
    request(CRAWL_URL, function(err, res, body)  {
        var $ = cheerio.load(body);
        let tags = ['a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'b', 'u', 'span', 'strong', 'td', 'li', 'center'];
        let ingredientkeywords = ['ingredients used', 'ingredients for', 'ingredients in', 'ingredients of', 'ingredients to', 'ingredients'];
        let methodkeywords = ['directions for', 'directions'];
        ingredientTags = Main.getElementByXpath(body, tags, ingredientkeywords);
        console.log(ingredientTags);
    })

    console.log(Main.addNumbers(2,4));

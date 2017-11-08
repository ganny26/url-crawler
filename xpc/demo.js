const Index = require('./index');
const CRAWL_URL = "https://www.archanaskitchen.com/sweet-lime-soda-recipe";

var methodTags;
var ingredientTags;
var t = [];
Index.crawlbyurl(CRAWL_URL).then(function(data) {
    console.log("Ing...",data.ingredients[0].text);
    console.log("Method...",data.method[0].text);
})
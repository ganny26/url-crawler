const request = require('request');
const cheerio = require('cheerio');

const Main = require('./main');
// const CRAWL_URL = ["https://www.archanaskitchen.com/sweet-lime-soda-recipe",
//     "http://recipes.timesofindia.com/recipes/ice-cream-cake-with-oreo-cookies/rs53665434.cms",
//     "http://www.sanjeevkapoor.com/Recipe/Eggless-Mawa-Elaichi-Doughnuts-Sanjeev-Kapoor-Kitchen-FoodFood.html",
// ];

const CRAWL_URL = "https://www.archanaskitchen.com/sweet-lime-soda-recipe";



module.exports = {
    crawlbyurl:function(crawl_url){
        return new Promise(function(resolve, reject) {
            request(crawl_url, function(err, res, body) {
                var $ = cheerio.load(body);
                let tags = ['a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'b', 'u', 'span', 'strong', 'td', 'li', 'center'];
                let ingredientkeywords = ['ingredients used', 'ingredients for', 'ingredients in', 'ingredients of', 'ingredients to', 'ingredients'];
                let methodkeywords = ['directions for','directions'];
                ingredientTags = Main.getElementByXpath(body, tags, ingredientkeywords);
                methodTags = Main.getElementByXpath(body, tags, methodkeywords);
    
                var obj = {
                    "ingredients": ingredientTags,
                    "method": methodTags
                }
                resolve(obj);
    
            })
        })
    }
}


// then((data)=>{
//     console.log("Length",data);
// });
// module.exports = {
//     crawlbyurl:crawlbyurl
// }d


// });




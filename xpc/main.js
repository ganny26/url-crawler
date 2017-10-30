const xpathjs = require('xpath');
const dom = require('xmldom').DOMParser;
const request = require('request');

module.exports = {
    getElementByXpath: function (htmlContent, tagsList, strList) {
        let tags = tagsList;
        var doc = new dom().parseFromString(htmlContent)
        let results = [];
        let preferredStrings = strList;
        for (i = 0; i < preferredStrings.length; i++) {
            for (j = 0; j < tags.length; j++) {
                let pattern = "//" + tags[j] + "[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + preferredStrings[i] + "')" + " and starts-with(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + preferredStrings[preferredStrings.length - 1] + "')" + "]";
                var result = xpathjs.evaluate(
                    pattern,
                    doc,
                    null,
                    xpathjs.XPathResult.ANY_TYPE,
                    null
                )
                node = result.iterateNext();
                while (node) {
                    results.push(node.toString());
                    node = result.iterateNext();
                }
            }
        }
        console.log(result);
        return result;
    },
    addNumbers: function (x, y) {
        return x + y;
    }
}




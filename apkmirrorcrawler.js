var avis = [];
var downloadArea = jQuery('.listWidget')[0];
var tablerows = jQuery(downloadArea).find('div.table-row');

/**crawl result**/
/** only for apkmirror **/

tablerows.map((q)=>{
	var cells = q.find('div.table-cell');
	var result = {};
    result.scrape_src  = cells[0].find('a')['href'];
    result.arch = cells[1].text();
	result.push(result);
})

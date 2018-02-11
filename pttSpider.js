/**
 *  @file pttSpider.js
 *  @author aaaddress1@chroot.org
 *  @date 2018/2/11
**/
var request = require('request');
var cheerio = require('cheerio');

var httpGet = (url) => new Promise((resolve, reject) => {
  request(url, (e, r, b) => { resolve(b); });
});

var listHotTopic = (groupUrl) => (async()=>{
  src = await httpGet(groupUrl);
  var $ = cheerio.load(src);
  var list = $('div[class="r-ent"]');

  for (var i = 0; i < list.length; i++) {
    raw = $(list[i]);
    title = $(raw.find('.title')).text().replace(/[\n\r\x20\t]+/g, '');
    nrec = $(raw.find('.nrec')).text();
    link = $($(raw.find('.title')).find('a')).attr('href');

    if (nrec.indexOf('爆') > -1)
      console.log(`${title}\nhttps://www.ptt.cc${link}\n`);
  }
})();

(async() => {
  src = await httpGet('https://www.ptt.cc/bbs/index.html');
  var $ = cheerio.load(src);
  var list = $('a.board');

  for (var i = 0; i < 10; i++)
    listHotTopic('https://www.ptt.cc' + $(list[i]).attr('href'));
})();

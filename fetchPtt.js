/**
 *  @file fetchPtt.js
 *  @author aaaddress1@chroot.org
 *  @date 2018/2/11
**/
var request = require('request');
var cheerio = require('cheerio');

request('https://www.ptt.cc/bbs/index.html', (e, r, b) => {
  var $ = cheerio.load(b);
  boardArr = $('a.board');

  for (var i = 0; i < boardArr.length; i++) {
    boardName = $($(boardArr[i]).find('.board-name')).text();
    boardLink = 'https://www.ptt.cc' + $(boardArr[i]).attr('href');
    console.log(`${boardName}\n>> ${boardLink}\n`);
  }
});

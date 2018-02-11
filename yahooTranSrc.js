/**
 *  @file yahooTranSrc.js
 *  @author aaaddress1@chroot.org
 *  @date 2018/2/11
**/
var request = require('request');

var url = 'https://tw.dictionary.yahoo.com/dictionary?p=' + 'apple'
request(url, (e, r, b) => {
  console.log(b);
});

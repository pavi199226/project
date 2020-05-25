(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){



//137612 PUE
//638242
//23424757 Belgium
//23424900 MEXICO
//753692 BCN
//766273 Madrid


t.get('trends/place', { id: '23424757', exclude: 'hashtags' }, function (err, response) {
  if (err)
    return console.error('trends/place.err', err);
  console.log(response);
  //var tweets = reply;
  console.log("HERE");
  // var ogTenTrends = response[0].trends;
  // var tenTrends = ogTenTrends.slice(0, 10);
  // var tenTrendsString = JSON.stringify(tenTrends);
  // console.log(tenTrendsString);

  const trends = response[0].trends;
  options.series[0].data = trends.map(t => t.tweet_volume);
  options.xaxis.categories = trends.map(t => t.name);
  chart = new ApexCharts(document.querySelector('#chart'), options);
  chart.render();
})


},{}]},{},[1]);

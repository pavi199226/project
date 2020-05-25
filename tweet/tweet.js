


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


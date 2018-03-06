var express = require('express');
var axios = require('axios');

var app = express();

var apiRoutes = express.Router()

apiRoutes.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.use('/api', apiRoutes);

var server = app.listen(4000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(host);
	console.log('listening at http://%s:%s',host,port);
})
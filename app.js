/**
 * Created by autoc on 10/05/2017.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
app.use(express.static(__dirname + '/web-root/'));
app.get('/', function(req, res,next) {
	res.sendFile(__dirname + '/web-root/index.html');
});
app.get('/api',function(req,res){
	res.json({hello:'world'});
})
server.listen(8081);

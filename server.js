var express = require('express');
var app = express();
var NewsData = require("./NewsData.json");
app.get('/news', function(req, res){
   res.json(NewsData);
});

app.listen(5000);
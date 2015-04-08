var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/', function(req, res){

  // ejs render automatically looks in views folder for 'index.ejs'
  res.render('index');
});

app.get('/name', function(req, res){
  // the variable "name" will be available in the template
  res.render('name', {name: 'Cory'});
});

app.get('/loops', function(req, res){
  var kardashians = [
    'Robert',
    'Khloé',
    'Rob',
    'Kendall',
    'Kylie',
    'Brody',
    'Brandon',
    'Kim'
  ];

  // There will be a variable named "kardashians" available
  // in the loops.ejs template
  res.render('loops', {kardashians: kardashians});
});

app.get('/loops-louder', function(req, res){
  var kardashians = [
    'Robert',
    'Khloé',
    'Rob',
    'Kendall',
    'Kylie',
    'Brody',
    'Brandon',
    'Kim'
  ];

  // There will be a variable named "kardashians" and another named
  // "louder" available
  // in the loops.ejs template
  res.render('loops-with-volume', {kardashians: kardashians, louder: true});
});

app.get('/loops-quieter', function(req, res){
  var kardashians = [
    'Robert',
    'Khloé',
    'Rob',
    'Kendall',
    'Kylie',
    'Brody',
    'Brandon',
    'Kim'
  ];

  // There will be a variable named "kardashians" and another named
  // "louder" available
  // in the loops.ejs template
  res.render('loops-with-volume', {kardashians: kardashians, louder: false});
});

app.listen(port, function(){
  console.log('listening on ',port);
});

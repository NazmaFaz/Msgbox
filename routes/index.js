var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/submit', function(req,res,next){
  console.log(req.body)
var sendername = req.body.sname;
var message = req.body.msg;
var content = `sent by ${sendername} message:${message}\n`;
fs.appendFile(path.join(__dirname, '../message.txt'), content, function(){
  res.render('submitted')
})

})
module.exports = router;

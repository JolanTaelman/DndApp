var express = require('express');
let mongoose = require('mongoose');
let Charsheet = mongoose.model('Charsheet');

var router = express.Router();

router.get('/API/charsheets/', function(req, res, next) {
Charsheet.find(function(err, charsheets){
  if(err){
    return next(err);}
    res.json(charsheets); 
});
});

router.post('/API/charsheets/', function(req, res, next){
  let charsheet = new Charsheet(req.body);
  recipe.save(function(err, rec){
    if (err){
      return next(err);    }
    res.json(rec);
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});

module.exports = router;

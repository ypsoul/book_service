var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mongooseTest',function(req,res,next){
  mongoose.connect('mongodb://localhost/pets',{ useNewUrlParser: true});
  mongoose.Promise = global.Promise;

const CatSchema = new mongoose.Schema({

  name:String
})


  const Cat = mongoose.model('Cat',CatSchema)
  var tom = new Cat({name:'Tom2'});
  tom.save(function(err){
    if(err){
      console.log(err)
    }else{
      console.log("success insert")
    }
  });
  res.send("连接数据库成功")
})

module.exports = router;

const mongoose = require('../common/db');

const movie = new mongoose.Schema({
    movieName: String,
    movieImg: String,
    movieVideo: String,
    movieDownload: String,
    movieTime: String,
    movieNumSuppose: Number,
    movieNumDownload: Number,
    movieMainPage: Boolean,
})

movie.statics.findById = function(id,cb){
    this.findOne({_id:id},cb);
};
movie.statics.findAll = function(cb){
    this.find({},cb);
};
var movieModel = mongoose.model('movie',movie);
module.exports = movieModel;
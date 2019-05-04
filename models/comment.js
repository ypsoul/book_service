const mongoose = require('../common/db')

const comment = new mongoose.Schema({
    movie_id:String,
    username:String,
    context:String,
    check:Boolean
})
comment.statics.findByMovieId = function(m_id,cb){
    this.find({movie_id:m_id,check:true},cb)
}
comment.statics.findAll = function(cb){
    this.find({},cb)
}
const commentModel = mongoose.model('comment',comment)

module.exports = commentModel
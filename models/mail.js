const mongoose = require('../common/db')

const mail = new mongoose.Schema({
    FromUser:String,
    toUser:String,
    title:String,
    context:String
})

mail.statics.findByToUserId = function(user_id,cb){
    this.find({toUser:user_id},cb)
}
mail.statics.findByFromUserId = function(user_id,cb){
    this.find({fromUser:user_id},cb)
}

var mailModel = mongoose.model('mail',mail)

module.exports = mailModel
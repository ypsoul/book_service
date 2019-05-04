const mongoose = require ('../common/db')

const user = new mongoose.Schema({
    username:String,
    password:String,
    userMail:String,
    userPhone:String,
    userAdmin:String,
    userPower:Number,
    userStop:Boolean
})

//用户的查找方法
user.statics.findAll = function(cb){
    this.find({},cb)
}
//用户的查找方法
user.statics.findByUsername = function(name,cb){
    this.find({
        username:name
    },cb)
}
//登入匹配是不是拥有相同的用户名和密码并且没有处于封停状态
user.statics.findUserLogin = function(name,password,cb){
    this.find({
        username:name,
        password:password,
        userStop:false
    },cb)
}
//验证邮箱、电话和用户名找到用户
user.statics.findUserPassword = function(name,mail,phone,cb){
    this.find({
        username:name,
        userMail:mail,
        userPhone:phone
    },cb)
}

const userModel = mongoose.model('user',user)

module.exports = userModel
//this module will define the structure or the scehma of the databse's collection;

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String,
    isActivated:Boolean
})
//user schema can be any number of key value pairs which are require to sign up or login in the web site with any type of data;

mongoose.model('User',UserSchema);
//model will make a collection name as "User" whose style is like UserSchema 

module.exports = mongoose.model('User');
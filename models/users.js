const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
     name: {
         type: String,
    require: true},
    contact: {
        type: String,
   require: true},


});


module.exports = mongoose.model('users', userschema)
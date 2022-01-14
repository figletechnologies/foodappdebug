const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    //  title: {
    //      type: String,
    // require: true},

});
//name: {
    //type: String,
  //  required: true
//},
//})

module.exports = mongoose.model('articles', articleSchema)
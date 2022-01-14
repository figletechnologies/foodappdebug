const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
     name: {
         type: String,
    require: true},
    contact: {
        type: String,
   require: true},
   vendoraddress: {
    type: String,
require: true},



});


module.exports = mongoose.model('vendors', articleSchema)
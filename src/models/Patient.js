const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Patient = new Schema({
    full_name:String,
    birth_date:String,
    phone:String,
    Gender:String,
    Code:String
})

module.exports = mongoose.model('Patient', Patient)
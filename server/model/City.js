const mongoose = require('mongoose')
const Schema = mongoose.Schema

let citySchema = new Schema({
    name: String,
    updatedAt: Date,
    temp: Number,
    condition: String,
    icon: String,
})


const City = mongoose.model("City", citySchema)
module.exports = City
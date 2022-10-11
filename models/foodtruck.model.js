const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodTruckSchema = new Schema({
    name : { type : String, required : true, unique: true , max : [255, "Max Length is 255 characters"] }
}, 
{ collection: 'foodtruck' });

module.exports = mongoose.model('foodtruck', foodTruckSchema);
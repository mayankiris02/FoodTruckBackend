const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name : { type : String, required : true, max : [255, "Max Length is 255 characters"] },
    price: { type : Number, required : true },
    foodTruckId : { type: Schema.Types.ObjectId, ref: 'foodtruck', required: true }
}
,{ collection: 'menu' });

module.exports = mongoose.model('menu', menuSchema);
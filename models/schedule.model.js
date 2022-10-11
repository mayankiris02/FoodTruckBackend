const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
        
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    data: [
        {
            foodTruckId: { type: Schema.Types.ObjectId, ref: 'foodtruck', required: true },
            scheduledDate: { type: String, required: true }
        }]
},
    { collection: 'schedule' });


scheduleSchema.index({ year: 1, month: 1 }, { unique: true });

module.exports = mongoose.model('schedule', scheduleSchema);
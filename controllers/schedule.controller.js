const catchAsync = require('../utils/catchAsync');
const services  = require('../services')

const saveFoodTruckSchedule = catchAsync(async (req, res) => {
    const result  = await services.scheduleService.saveFoodTruckSchedule(req);
    res.send(result);
});

const getFoodTruckSchedule = catchAsync(async (req, res) => {
    const result  = await services.scheduleService.getFoodTruckSchedule(req);
    res.send(result);
});

const getFoodTruckScheduleForToday = catchAsync(async (req, res) => {
    const result  = await services.scheduleService.getFoodTruckScheduleForToday();
    res.send(result);
});

module.exports = {
    saveFoodTruckSchedule,
    getFoodTruckSchedule,
    getFoodTruckScheduleForToday
}
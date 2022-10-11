const { model } = require('mongoose');
const scheduleModel = require('../models').scheduleModel;
const menuModel = require('../models').menuModel;
var moment = require('moment');

function saveFoodTruckSchedule(req) {
    var promisesArr = [];
    var currentYear = req.body.year;
    var currentMonth = req.body.month;


    var dataObj = req.body.data.map((item) => {
        return {
            scheduledDate: item.scheduledDate,
            foodTruckId: item.foodTruckId
        }
    })
    
    if (dataObj.length == 0) {

        return promisscheduleModel.findOneAndDelete({ year: currentYear, month: currentMonth });
    }
    else {
        var options = { new: true, upsert: true };
        return scheduleModel.findOneAndUpdate({ year: currentYear, month: currentMonth }, { data: dataObj }, options);
    }
}

function getFoodTruckSchedule(req) {
    var year = req.query.year;
    var month = req.query.month;

    return scheduleModel.findOne({ year: Number(year), month: Number(month) })
        .populate([{ path: "data.foodTruckId" }])

}

function getFoodTruckScheduleForToday() {

    var year = moment().year();
    var month = moment().month() + 1;
    var currentDate = moment().format('YYYY-MM-DD');
    var response = [];

    return scheduleModel.findOne({ year: Number(year), month: Number(month) })
        .populate([{ path: "data.foodTruckId" }])
        .then((result) => {
            
            var foodTrucksForToday = result.data.filter((x) => {
                return moment(x.scheduledDate).format('YYYY-MM-DD') == currentDate
            });

            var promiseArr = [];
            foodTrucksForToday.forEach((item) => {
                var foodTruckId = item.foodTruckId._id;
                var foodTruckName = item.name;

                promiseArr.push(menuModel.find({ foodTruckId: foodTruckId }).populate([{ path: "foodTruckId" }]))
            })

            return Promise.all(promiseArr)
                .then((result) => {

                    result.forEach((item) => {
                        item.forEach((element) => {
                            var obj = {
                                foodTruckName: element.foodTruckId.name,
                                menuItemName: element.name,
                                menuItemPrice: element.price
                            }
                            response.push(obj);
                        })
                    })

                    return response;

                })
        })


}



module.exports = {
    saveFoodTruckSchedule,
    getFoodTruckSchedule,
    getFoodTruckScheduleForToday
}
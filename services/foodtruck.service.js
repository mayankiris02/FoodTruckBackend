const { model } = require('mongoose');
const foodTruckModel = require('../models').foodTruckModel;
const menuModel = require('../models').menuModel;

function addFoodTruck(req) {

    const foodTruck = new foodTruckModel(
        {
            name: req.body.name
        }
    );

    return foodTruck.save()
        .then((result) => {
            
            result;

            const menuModelObj = new menuModel(
                {
                    name: "Item 1",
                    price: 25,
                    foodTruckId :result._id
                

                }
            );        
            menuModelObj.save();

            const menuModelObj2= new menuModel(
                {
                    name: "Item 2",
                    price: 25,
                    foodTruckId :result._id
                

                }
            );        
            menuModelObj2.save();


            const menuModelObj3 = new menuModel(
                {
                    name: "Item 3",
                    price: 25,
                    foodTruckId :result._id
                

                }
            );        
            menuModelObj3.save();
            /*var arr = [];

            arr.push({ foodTruckId: result._id });
            var dt = new Date()
            dt.setHours(0, 0, 0, 0);
            const scheduleModelObj = new scheduleModel(
                {
                    scheduleDate: dt,
                    foodTrucks: arr
                }
            );

            scheduleModelObj.save();*/
            /*var dt = new Date()
            dt.setHours(0, 0, 0, 0);

            const scheduleModelObj = new scheduleModel(
                {
                    scheduleDate: dt,
                    foodTruckId: result._id
                }
            );

            scheduleModelObj.save()
            .then((t)=>{
                scheduleModelObj.save();
            })*/

        });
}

function updateFoodTruck(req) {
    //return foodTruckModel.findByIdAndUpdate(req.body.id, { name: req.body.name });
    var query = { _id: req.body._id };
    var update = { name: req.body.name };
    var options = { new: true  };
    return foodTruckModel.findOneAndUpdate(query, update, options);
}

function deleteFoodTruck(req) {
    return foodTruckModel.deleteOne({ name: req.body._id });
}

function getAllFoodTrucks() {
    return foodTruckModel.find({});
}

module.exports = {
    addFoodTruck,
    updateFoodTruck,
    deleteFoodTruck,
    getAllFoodTrucks,
}
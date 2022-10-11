const { model } = require('mongoose');
const foodTruckModel = require('../models').foodTruckModel;
const menuModel = require('../models').menuModel;

function addFoodTruck(req) {

    const foodTruck = new foodTruckModel(
        {
            name: req.body.name
        }
    );

    return foodTruck.save();
}

function updateFoodTruck(req) {

    var query = { _id: req.body._id };
    var update = { name: req.body.name };
    var options = { new: true };
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
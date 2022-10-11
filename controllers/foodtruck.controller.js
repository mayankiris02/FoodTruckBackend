const catchAsync = require('../utils/catchAsync');
const  services  = require('../services')

const addFoodTruck = catchAsync(async (req, res) => {
    const result  = await services.foodTruckService.addFoodTruck(req);
    res.send(result);
});

const updateFoodTruck = catchAsync(async (req, res) => {
    const result  = await services.foodTruckService.updateFoodTruck(req);
    res.send(result);
});

const deleteFoodTruck = catchAsync(async (req, res) => {
    const result  = await services.foodTruckService.deleteFoodTruck(req);
    res.send(result);
});

const getAllFoodTrucks = catchAsync(async (req, res) => {
    const result  = await services.foodTruckService.getAllFoodTrucks(req);
    res.send(result);
});

module.exports = {
    addFoodTruck,
    updateFoodTruck,
    deleteFoodTruck,
    getAllFoodTrucks
}
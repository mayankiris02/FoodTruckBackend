const { model } = require('mongoose');
const menuModel = require('../models').menuModel;

function addMenu(req) {

    const menu = new menuModel(
        {
            name: req.body.name,
            price: req.body.price,
            foodTruckId : req.body.foodTruckId
        }
    );

    return menu.save();
}

function updateMenu(req) {
    return menuModel.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        price: req.body.price,
        foodTruckId : req.body.foodTruckId
    });
}

function deleteMenu(req) {
    return menuModel.deleteOne({ _id: req.body.id });
}

module.exports = {
    addMenu,
    updateMenu,
    deleteMenu
}
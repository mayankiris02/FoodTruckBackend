const express = require('express');
const app = express();
const router = express.Router();
const  controllers = require('../../../controllers');

//foodtruck functionality
router.post('/addfoodtruck', controllers.foodTruckController.addFoodTruck);
router.post('/updatefoodTruck', controllers.foodTruckController.updateFoodTruck);
router.post('/deletefoodTruck', controllers.foodTruckController.deleteFoodTruck);
router.get('/getallfoodtrucks', controllers.foodTruckController.getAllFoodTrucks);


module.exports = router;
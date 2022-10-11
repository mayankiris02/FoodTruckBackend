const express = require('express');
const app = express();
const router = express.Router();
const routefoodTruck = require('./foodtruck');
const routeSchedule = require('./schedule');
const routeMenu =require('./menu');

//foodtruck functionality
router.use('/foodtruck', routefoodTruck.foodTruckRoute);

//menu functionality
router.use('/menu', routeMenu.menuRoute);

//foodtruck functionality
router.use('/schedule', routeSchedule.scheduleRoute);

//TO DO routes for admin other crud operation


module.exports = router;
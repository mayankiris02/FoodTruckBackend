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

//schedule functionality
router.use('/schedule', routeSchedule.scheduleRoute);




module.exports = router;
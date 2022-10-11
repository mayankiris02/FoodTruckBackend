const express = require('express');
const app = express();
const router = express.Router();
const foodTruckController = require('../../controllers/foodtruck.controller')
//const routefoodTruck =require('./foodtruck');

//foodtruck functionality
//router.use('/foodtruck', routefoodTruck);

module.exports = router;
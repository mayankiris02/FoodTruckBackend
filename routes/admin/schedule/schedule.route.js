const express = require('express');
const app = express();
const router = express.Router();
const  controllers = require('../../../controllers');

//foodtruck functionality
router.post('/saveFoodTruckSchedule', controllers.scheduleController.saveFoodTruckSchedule);
router.get('/getFoodTruckSchedule', controllers.scheduleController.getFoodTruckSchedule);
router.get('/getFoodTruckScheduleForToday', controllers.scheduleController.getFoodTruckScheduleForToday);



module.exports = router;
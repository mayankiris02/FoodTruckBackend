const express = require('express');
const app = express();
const router = express.Router();
const routeUser =require('./user');
const routeAdmin =require('./admin');

//admin functionality
router.use('/admin', routeAdmin.adminRoute);

//user functionality
router.use('/user', routeUser.userRoute);

module.exports = router;


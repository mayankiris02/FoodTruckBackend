const express = require('express');
const app = express();
const router = express.Router();
const controllers = require('../../../controllers')


//menu functionality
router.post('/addMenu', controllers.menuController.addMenu);
router.post('/updateMenu', controllers.menuController.updateMenu);
router.post('/deleteMenu', controllers.menuController.deleteMenu);
//router.get('/getMenu', controllers.MenuController.getMenu);


module.exports = router;
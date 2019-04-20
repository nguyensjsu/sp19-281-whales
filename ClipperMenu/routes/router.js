
const express = require('express');
const controller = require('../controller/controller');


const router = express.Router();

router.get('/', controller.rootPage);

router.get('/addMenu', controller.addMenu);

router.get('/getmenu', controller.getMenu);

module.exports = router;

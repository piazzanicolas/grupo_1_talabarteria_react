// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiController = require('../controllers/apiController');

/* GET - Images*/
router.get('/images/:name', apiController.showImage);

/* GET - Colors*/
router.get('/colors', apiController.showColors);

/* GET - Brands*/
router.get('/brands', apiController.showBrands);

/* GET - Categories*/
router.get('/categories', apiController.showCategories);

/* GET - Buscador */
router.get('/search', apiController.search);

module.exports = router;
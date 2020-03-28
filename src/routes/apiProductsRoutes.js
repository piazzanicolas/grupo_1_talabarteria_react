// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiProductController = require('../controllers/apiProductController');

/* GET - All Products */
router.get('/', apiProductController.showAllProducts);

/* GET - Product detail*/
router.get('/:id', apiProductController.showOneProduct);

module.exports = router;
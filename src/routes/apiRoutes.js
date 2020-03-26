// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiUserController = require('../controllers/apiUserController');
const apiProductController = require('../controllers/apiProductController');

/* GET - All Users */
router.get('/users', apiUserController.showAllUsers);

/* GET - User detail by ID */
router.get('/users/:id', apiUserController.showOneUser);

/* GET - User detail by Email */
router.get('/users/email/:email', apiUserController.userByEmail);

/* GET - User cart */
router.get('/cart/:id', apiUserController.cartView);

/* GET - All Products */
router.get('/products', apiProductController.showAllProducts);

/* GET - Product detail*/
router.get('/products/:id', apiProductController.showOneProduct);

/* GET - Images*/
router.get('/images/:name', apiProductController.showImage);

module.exports = router;
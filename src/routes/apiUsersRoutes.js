// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiUserController = require('../controllers/apiUserController');

//  *********** Middlewares ***********
const upload = require('../middlewares/upload');
const registerValidation = require('../middlewares/registerValidatorMiddleware')

/* GET - All Users */
router.get('/', apiUserController.showAllUsers);

/* GET - User detail by ID */
router.get('/:id', apiUserController.showOneUser);

/* GET - User detail by Email */
router.get('/email/:email', apiUserController.userByEmail);

/* GET - User cart */
router.get('/cart/:id', apiUserController.cartView);

/* POST - New user */
router.post('/registro', upload.single('avatar'), registerValidation, apiUserController.saveUser);

module.exports = router;
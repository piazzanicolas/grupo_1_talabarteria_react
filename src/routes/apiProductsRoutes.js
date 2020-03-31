// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiProductController = require('../controllers/apiProductController');

//  *********** Middlewares ***********
const upload = require('../middlewares/upload');
const editValidation = require('../middlewares/editValidatorMiddleware')
const cargaValidation = require('../middlewares/cargaValidatorMiddleware')

/* GET - All Products */
router.get('/', apiProductController.showAllProducts);

/* GET - Product detail */
router.get('/:id', apiProductController.showOneProduct);

/* POST - New product */
router.post('/carga', upload.single('image'), cargaValidation, apiProductController.guardar);

/* PUT - Edit product */
router.put('/:id/edit',  upload.single('image'), editValidation, apiProductController.editarCambios);

/* DELETE - Delete product */
router.delete('/:id/delete', apiProductController.borrar);

module.exports = router;
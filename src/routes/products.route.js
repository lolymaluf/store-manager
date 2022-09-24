const express = require('express');
const productsController = require('../controllers/products.controller');
const getValidation = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductsById);
router.post('/', productsController.registerProducts);
router.post('/', getValidation.nameValidation, productsController.registerProducts);

module.exports = router;
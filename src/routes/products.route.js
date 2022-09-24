const express = require('express');
const productsController = require('../controllers/products.controller');
const getValidation = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductsById);
router.post('/', getValidation.nameValidation, productsController.registerProducts);
router.post('/', productsController.registerProducts);

module.exports = router;
const express = require('express');
const productsController = require('../controllers/products.controller');
const getValidation = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/search', productsController.searchProduct);
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', getValidation.nameValidation, productsController.registerProducts);
router.post('/', productsController.registerProducts);
router.put('/:id', getValidation.nameValidation, productsController.updateProduct);
router.delete('/:id', productsController.deleteThisProduct);

module.exports = router;
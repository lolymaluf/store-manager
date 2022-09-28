const express = require('express');
const salesController = require('../controllers/sales.controller');
/* const getValidation = require('../middlewares/nameValidation'); */

const router = express.Router();

router.get('/', salesController.salesList);
router.get('/:id', salesController.salesId);
router.delete('/:id', salesController.deleteSale);
/* router.put('/:id', getValidation.nameValidation, salesController.updateSale); */

module.exports = router;
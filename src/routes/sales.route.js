const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', salesController.salesList);
router.get('/:id', salesController.salesId);
router.delete('/:id', salesController.deleteSale);

module.exports = router;
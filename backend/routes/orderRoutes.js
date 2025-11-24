const express = require('express');
const { placeOrder, getUserOrders, verifyToken } = require('../controllers/orderController');
const router = express.Router();

router.post('/', verifyToken, placeOrder);      // Place new order
router.get('/', verifyToken, getUserOrders);    // Get user's orders

module.exports = router;


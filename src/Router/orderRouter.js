const express = require('express');
const { userOrder } = require('../Controllers/orderControllers');
const orderRouter = express.Router();

orderRouter.get('/user-order', userOrder);


module.exports = orderRouter;
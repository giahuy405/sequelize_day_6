const express = require('express');
const { addNewRate, listRate } = require('../Controllers/rateController');
const rateRouter = express.Router();

rateRouter.post('/add-new-rate', addNewRate);
rateRouter.get('/list-rating', listRate);

module.exports = rateRouter;
const express = require('express');
const { addNewRate, listRate, listRateRes, listRateUser } = require('../Controllers/rateController');
const rateRouter = express.Router();

rateRouter.post('/add-new-rate', addNewRate);
rateRouter.get('/list-rating', listRate);
rateRouter.get('/list-rate-res', listRateRes);
rateRouter.get('/list-rate-user', listRateUser);

module.exports = rateRouter;
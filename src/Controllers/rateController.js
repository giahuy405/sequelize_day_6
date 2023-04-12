const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../utils/response');
const Op = Sequelize.Op;

const initalModel = require('../Models/init-models');
const sequelize = require('../Models/index')
const models = initalModel(sequelize);

const addNewRate = async (req, res) => {
    try {
        const { user_id, amount, res_id } = req.body;

        // kiểm tra xem id có tồn tại ko 
        const userIsExist = await models.user.findByPk(user_id);
        const resIsExist = await models.restaurant.findByPk(res_id);
        if (!userIsExist || !resIsExist) {
            return failCode(res, 'Id is not exist', "");
        }
        // thêm đánh giá
        const newRate = await models.rate_res.create({ user_id, res_id, amount });
        successCode(res, "add new rate", newRate);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
const listRate = async (req, res) => {
    try {
        // danh sách đánh giá
        const listRating = await models.rate_res.findAll({

            include: ['user', 're']
        });
        successCode(res, "list rate all", listRating);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
const listRateRes = async (req, res) => {
    try {
        // danh sách đánh giá
        const listRating = await models.rate_res.findAll({
            include: ['re']
        });
        successCode(res, "list rate of res ", listRating);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
const listRateUser = async (req, res) => {
    try {
        // danh sách đánh giá
        const listRating = await models.rate_res.findAll({
            include: ['user']
        });
        successCode(res, "list rate of user ", listRating);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
module.exports = {
    addNewRate, listRate,listRateRes,listRateUser
}
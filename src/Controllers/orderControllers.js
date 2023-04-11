const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../utils/response');
const Op = Sequelize.Op;

const initalModel = require('../Models/init-models');
const sequelize = require('../Models/index')
const models = initalModel(sequelize);

const userOrder = async (req, res) => {
    try {

        const { user_id, food_id, amount, code, arr_sub_id } = req.body;
        // phải encode array hoặc object
        const str_sub_id = JSON.stringify(arr_sub_id);
        // kiểm tra id hợp lệ
        const userIsExist = await models.user.findByPk(user_id);
        const foodIsExist = await models.food.findByPk(food_id);
        if (!userIsExist || !foodIsExist) {
            return failCode(res, 'Id is not exist', "");
        }
        console.log(user_id, food_id, amount, code, arr_sub_id,'2')
        // tạo 
        const order = await models.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id:str_sub_id
        })
        successCode(res, "user order successfully ", order);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
module.exports = {
    userOrder
}
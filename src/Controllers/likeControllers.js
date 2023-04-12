const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../utils/response');
const Op = Sequelize.Op;

const initalModel = require('../Models/init-models');
const sequelize = require('../Models/index')
const models = initalModel(sequelize)
// like và unlike 
const likeRes = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;
        console.log(user_id, res_id);
        // kiểm tra xem user_id và res_id có hợp lệ hay ko 
        const userIsExist = await models.user.findByPk(user_id);
        const resIsExist = await models.restaurant.findByPk(res_id);
        if (!userIsExist || !resIsExist) {
            return failCode(res, 'Id is not exist', "");
        }

        // kiểm tra xem user đã like res chưa 
        const existingLike = await models.like_res.findOne({
            where: {
                user_id,
                res_id
            }
        });
        if (existingLike) {
            // nếu đã like rồi thì unlike
            await existingLike.destroy();
            // successCode(res, 'Unlike success', existingLike);
            if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
                successCode(res, 'successfully Unlike restaurant', '')
            }
        } else {
            // nếu chưa like thì like
            const newLike = await models.like_res.create({
                user_id,
                res_id,
                date_like: new Date()
            });
            // successCode(res, 'Like success', newLike);
            if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
                successCode(res, 'successfully like restaurant', newLike)
            }
        }
    } catch (err) {
        errorCode(res, 'lỗi BE');
        console.log(err);
    }
}
// lấy danh sách like theo nhà hàng và user
const listLikeResAndUser = async (req, res) => {
    try {
        const likes = await models.like_res.findAll({
            include: ['user', 're']
        });
        successCode(res, "get list res and user successflly ", likes);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
// lấy danh sách like theo nhà hàng
const listLikeRes = async (req, res) => {
    try {
        const likes = await models.like_res.findAll({
            include: ['re']
        });
        successCode(res, "get list res  successflly ", likes);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
// lấy danh sách like theo user
const listLikeUser = async (req, res) => {
    try {
        const likes = await models.like_res.findAll({
            include: ['user']
        });
        successCode(res, "get list user successflly ", likes);
    } catch (err) {
        errorCode(res, 'lỗi BE')
    }
}
module.exports = {
    likeRes, listLikeResAndUser, listLikeRes, listLikeUser
}
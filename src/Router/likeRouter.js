const express = require('express');
const { likeRes, listLikeResAndUser, listLikeRes, listLikeUser } = require('../Controllers/likeControllers');
const likeRouter = express.Router();

likeRouter.post('/like-res/:user_id/:res_id', likeRes);
likeRouter.get('/list-like-user-and-res', listLikeResAndUser);
likeRouter.get('/list-like-res', listLikeRes);
likeRouter.get('/list-like-user', listLikeUser);

module.exports = likeRouter;
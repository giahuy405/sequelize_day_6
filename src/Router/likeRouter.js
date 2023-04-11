const express = require('express');
const { likeRes, listLikeResAndUser, listLikeRes } = require('../Controllers/likeControllers');
const likeRouter = express.Router();

likeRouter.post('/like-res/:user_id/:res_id', likeRes);
likeRouter.get('/list-like-user-and-res', listLikeResAndUser);



likeRouter.get('/list-like-res/:res_id', listLikeRes);
// likeRouter.get('/list-like-user', getAllLike);
module.exports = likeRouter;
/**
 * @swagger
 *  /api/like/like-res/{user_id}/{res_id}
 *  post:
 *      description: responses
 *      tags: [Like]
 *      parameters:
 *      - in: path
 *        name: user_id
 *       - in: path
 *        name: res_id
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/like/list-like-res/{res_id}
 *  get:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: page
 *      - in: path
 *        name: pageSize
 *      responses:
 *          200: 
 *              description: success   
 */


/**
*
 * /api/user/get-user-pagination/{page}/{pageSize}
 *  get:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */
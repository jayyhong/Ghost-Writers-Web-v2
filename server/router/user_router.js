const express = require('express');
const userRouter = express.Router();

const UserController = require('../controllers/user_ctrl.js');

userRouter.get('/', UserController.index);
userRouter.post('/', UserController.create);
userRouter.post('/login', UserController.loginUser);
userRouter.get('/:id', UserController.show);
userRouter.get('/email/:email', UserController.show_email);
userRouter.put('/:id', UserController.update_user);
userRouter.delete('/:id', UserController.delete_user);
userRouter.get('/created/:id', UserController.getCreatedArt)

module.exports = userRouter;

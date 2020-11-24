//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

import multer from 'multer';
import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController'
import UserAvatarController from '../controllers/UserAvatarController'

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRouter
.post('/', usersController.create)

.patch(
    '/avatar', 
ensureAuthenticated, 
upload.single('avatar'), 
userAvatarController.update,
)

export default usersRouter
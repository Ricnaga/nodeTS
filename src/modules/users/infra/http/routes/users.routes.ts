//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import multer from 'multer';
import uploadConfig from '@config/upload';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

const usersRouter = Router();
const upload = multer(uploadConfig);


usersRouter
.post('/', async(request, response) => {
        const {name, email, password} = request.body
        const usersRepository = new UsersRepository()
        const createUser = new CreateUserService(usersRepository)
 
        const user = await createUser.execute({
            name,
            email,
            password,
        })

        const userWithoutPassword = {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.create_at,
            updated_at: user.update_at,
          };

        return response.json(userWithoutPassword)
})

.patch(
    '/avatar', 
ensureAuthenticated, 
upload.single('avatar'), 
async (request, response) =>{
        const usersRepository = new UsersRepository()
        const updateUserAvatar = new UpdateUserAvatarService(usersRepository);
        
        const user = await updateUserAvatar.execute({
            user_id: request.user.id,
            avatarFileName:request.file.filename,
        })


        const userWithoutPassword = {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.create_at,
            updated_at: user.update_at,
            avatar: user.avatar,
          };
          
        return response.json(userWithoutPassword)
})

export default usersRouter
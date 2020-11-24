//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';
import {container} from 'tsyringe'

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter
.post('/', async(request, response) => {
        const {email, password} = request.body;

        const authenticateUser = container.resolve(AuthenticateUserService)

        const {user, token} = await authenticateUser.execute({
            email,
            password
        })

        const userWithoutPassword = {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.create_at,
            updated_at: user.update_at,
          };


        return response.json({userWithoutPassword, token})
})

export default sessionsRouter
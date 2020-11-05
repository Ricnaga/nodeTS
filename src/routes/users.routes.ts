//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter
.post('/', async(request, response) => {
    try{
        const {name, email, password} = request.body

        const createUser = new CreateUserService()
 
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
    }catch(err){
        return response.status(400).json({error: err.message})
    }
})

export default usersRouter
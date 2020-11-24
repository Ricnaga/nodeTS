import {Request, Response} from 'express';
import {container} from 'tsyringe'
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController{
    public async create(request: Request, response:Response ): Promise<Response>{
        const {name, email, password} = request.body
        
        const createUser = container.resolve(CreateUserService)
 
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
    }
}
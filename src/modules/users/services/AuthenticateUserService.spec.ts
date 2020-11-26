import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import AuthenticateUserService from './AuthenticateUserService'
import CreateUserService from './CreateUserService'

describe('AuthenticateUser', () => {
    it('should be able to authenticate', async() =>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider
        );

        const authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider
            );

            const user = await createUser.execute({
                name:"Jack the Ripper",
                email: "jack@theripper.com",
                password:'123456'
            })

            const response = await authenticateUser.execute({
                email: "jack@theripper.com",
                password:'123456'
            })

            expect(response).toHaveProperty('token')
            expect(response.user).toEqual(user)
    });

    it('should not be to authenticate with non existing user', async() =>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider
            );

            expect(
                authenticateUser.execute({
                email: "jack@theripper.com",
                password:'123456'
            }),
            ).rejects.toBeInstanceOf(AppError)
    });

    it('should not be able toauthenticate with wrong password', async() =>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider
        );

        const authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider
            );

                await createUser.execute({
                name:"Jack the Ripper",
                email: "jack@theripper.com",
                password:'123456'
            })

            expect(authenticateUser.execute({
                email: "jack@theripper.com",
                password:'wrong-password'
            })).rejects.toBeInstanceOf(AppError)
    });

})
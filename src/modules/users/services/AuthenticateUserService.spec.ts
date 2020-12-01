import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import AuthenticateUserService from './AuthenticateUserService'

let fakeUsersRepository:FakeUsersRepository
let fakeHashProvider:FakeHashProvider
let authenticateUser:AuthenticateUserService

describe('AuthenticateUser', () => {
    beforeEach(()=>{
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();

        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();

        authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider
            );
    })

    it('should be able to authenticate', async() =>{
            const user = await fakeUsersRepository.create({
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
            await expect(
                authenticateUser.execute({
                email: "jack@theripper.com",
                password:'123456'
            }),
            ).rejects.toBeInstanceOf(AppError)
    });

    it('should not be able toauthenticate with wrong password', async() =>{
            await fakeUsersRepository.create({
                name:"Jack the Ripper",
                email: "jack@theripper.com",
                password:'123456'
            })

            await expect(
                authenticateUser.execute({
                email: "jack@theripper.com",
                password:'wrong-password'
            })).rejects.toBeInstanceOf(AppError)
    });

})
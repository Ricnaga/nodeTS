import AppError from '@shared/errors/AppError'

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import UpdateProfileService from './UpdateProfileService'

let fakeUsersRepository:FakeUsersRepository;
let fakeHashProvider:FakeHashProvider;
let updateProfile:UpdateProfileService;

describe('UpdateProfile', () => {
    beforeEach(()=>{
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
        
        updateProfile = new UpdateProfileService(
            fakeUsersRepository,
            fakeHashProvider
            );
    })
    it('should be able to update profile', async() =>{
            const user = await fakeUsersRepository.create({
                name: "Jack the ripper",
                email: "jack@theripper.com",
                password:'123456'
            })

            const updatedUser = await updateProfile.execute({
                user_id: user.id,
                name: 'Teddy Bear',
                email:'teddy@bear.com.br'
            })

            expect(updatedUser.name).toBe('Teddy Bear')
            expect(updatedUser.email).toBe('teddy@bear.com.br')
    });
    
    it('should not be able to change the another user email', async() =>{
            await fakeUsersRepository.create({
                name: "Jack the ripper",
                email: "jack@theripper.com",
                password:'123456'
            })

            const user = await fakeUsersRepository.create({
                name: "superman the hero",
                email: "superman@thehero.com",
                password:'123456'
            })

            await expect(
                updateProfile.execute({
                user_id: user.id,
                name: 'Jack the ripper',
                email:'jack@theripper.com'
            })
            ).rejects.toBeInstanceOf(AppError)

    });

    it('should be able to update the password', async() =>{
        const user = await fakeUsersRepository.create({
            name: "Jack the ripper",
            email: "jack@theripper.com",
            password:'123456'
        })

        const updatedUser = await updateProfile.execute({
            user_id: user.id,
            name: 'Teddy Bear',
            email:'teddy@bear.com.br',
            old_password:'123456',
            password:'123123'
        })

        expect(updatedUser.password).toBe('123123')
    });

    it('should not be able to update the password without old password', async() =>{
        const user = await fakeUsersRepository.create({
            name: "Jack the ripper",
            email: "jack@theripper.com",
            password:'123456'
        })

        await expect(
            updateProfile.execute({
            user_id: user.id,
            name: 'Teddy Bear',
            email:'teddy@bear.com.br',
            password:'123123'
        })
        ).rejects.toBeInstanceOf(AppError)

    });

    it('should not be able to update the password with wrong old password', async() =>{
        const user = await fakeUsersRepository.create({
            name: "Jack the ripper",
            email: "jack@theripper.com",
            password:'123456'
        })

        await expect(
            updateProfile.execute({
            user_id: user.id,
            name: 'Teddy Bear',
            email:'teddy@bear.com.br',
            old_password:'wrong-old-password',
            password:'123123'
        })
        ).rejects.toBeInstanceOf(AppError)

    });


})
import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider'
import ListProviderService from './ListProvidersService'

let fakeUsersRepository:FakeUsersRepository;
let listProviders:ListProviderService;
let fakeCacheProvider:FakeCacheProvider

describe('ListProviders', () => {
    beforeEach(()=>{
        fakeUsersRepository = new FakeUsersRepository();
        fakeCacheProvider = new FakeCacheProvider()
        
        listProviders = new ListProviderService(
            fakeUsersRepository,
            fakeCacheProvider
            );
    })

    it('should be able to list the providers', async() =>{
            const users1 = await fakeUsersRepository.create({
                name: "Jack the ripper",
                email: "jack@theripper.com",
                password:'123456'
            })

            const users2 = await fakeUsersRepository.create({
                name: "Teddy Bear",
                email: "teddy@theBear.com",
                password:'123456'
            })

            const loggedUser = await fakeUsersRepository.create({
                name: "superman the hero",
                email: "superman@thehero.com",
                password:'123456'
            })

            const providers = await listProviders.execute({
                user_id: loggedUser.id,
            })

            expect(providers).toEqual([
                users1,
                users2
            ])
    });
    
})
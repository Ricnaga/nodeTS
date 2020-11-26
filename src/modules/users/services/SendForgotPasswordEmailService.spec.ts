// import AppError from '@shared/errors/AppError'

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService'

describe('SendForgotPasswordEmail', () => {
    it('should be able to recover the password using the email', async() =>{
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeMailProvider = new FakeMailProvider();

        const sendMail = jest.spyOn(fakeMailProvider, 'sendMail')
        
        const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
            fakeUsersRepository,
            fakeMailProvider
            );

            await fakeUsersRepository.create({
                name:"Jack The Ripper",
                email: "jack@theripper.com",
                password:"123456"
            })

            await sendForgotPasswordEmail.execute({
                email: "jack@theripper.com"
            })

            expect(sendMail).toHaveBeenCalled();
    });
})
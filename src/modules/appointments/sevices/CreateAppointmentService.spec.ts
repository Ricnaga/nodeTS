import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'
import CreateAppointmentService from './CreateAppointmentService'

import AppError from '@shared/errors/AppError'

describe('CreateAppointment', () => {
    it('should be able to create a new appointment', async() =>{
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepository
            );

            const appointment = await createAppointment.execute({
                date: new Date(),
                provider_id:'654321'
            })
            expect(appointment).toHaveProperty('id')
            expect(appointment.provider_id).toBe('654321')
    })

    it('should not be able to create two appointments on the same date', async () =>{
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepository
            );

            const appointmentDate = new Date(2020, 4, 10,11)

            await createAppointment.execute({
                date: appointmentDate,
                provider_id:'654321'
            })

            await expect(
                createAppointment.execute({
                date: appointmentDate,
                provider_id:'654321'
            }),
            ).rejects.toBeInstanceOf(AppError)
    })

})
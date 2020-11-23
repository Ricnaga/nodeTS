//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta

import {Router} from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository'
import CreateAppointmentsService from '@modules/appointments/sevices/CreateAppointmentService'
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const appointmentsRouter = Router();


appointmentsRouter
.use(ensureAuthenticated)

// .get('/', async (request, response) => {
//    const appointmentsRepository = getCustomRepository(AppointmentsRepository)
//    const appointments = await appointmentsRepository.find()

//    return response.json(appointments)
// })

.post('/', async(request, response) => {
        const { provider_id, date } = request.body
        const parsedDate = parseISO(date)
        const appointmentsRepository = new AppointmentsRepository();
        const createAppointment = new CreateAppointmentsService(appointmentsRepository)

        const appointment = await createAppointment.execute({date: parsedDate, provider_id})

        return response.json(appointment)
})

export default appointmentsRouter
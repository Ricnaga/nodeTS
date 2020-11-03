//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta

import {Router} from 'express';
import { parseISO } from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentsService from '../services/CreateAppointmentService'

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
   const appointments = appointmentsRepository.all()

   return response.json(appointments)
})

.post('/', (request, response) => {
    try{
        const { provider, date } = request.body
        const parsedDate = parseISO(date)

        const createAppointment = new CreateAppointmentsService(appointmentsRepository)

        const appointment = createAppointment.execute({date: parsedDate, provider})

        return response.json(appointment)
    }catch(err){
        return response.status(400).json({error: err.message})
    }
})

export default appointmentsRouter
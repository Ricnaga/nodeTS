//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta

import {request, response, Router} from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController()
const providerAppointmentsController = new ProviderAppointmentsController()

appointmentsRouter
.use(ensureAuthenticated)
.post('/', appointmentsController.create)
.get('/me', providerAppointmentsController.index)

export default appointmentsRouter
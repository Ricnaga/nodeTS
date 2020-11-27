//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta

import {request, response, Router} from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController()

appointmentsRouter
.use(ensureAuthenticated)
.post('/', appointmentsController.create)

export default appointmentsRouter
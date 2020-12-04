//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta

import {Router} from 'express';
import { celebrate, Segments, Joi } from "celebrate";
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController()
const providerAppointmentsController = new ProviderAppointmentsController()

appointmentsRouter
.use(ensureAuthenticated)

.post(
    '/', 
    celebrate({
    [Segments.BODY]:{
        provider_id: Joi.string().uuid().required(),
        date: Joi.date()
    }
}), 
appointmentsController.create
)

.get('/me', providerAppointmentsController.index)

export default appointmentsRouter
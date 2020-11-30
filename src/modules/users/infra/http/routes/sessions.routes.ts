//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';
import { celebrate, Segments, Joi } from "celebrate";

import SessionsController from '../controllers/SessionsController'

const sessionsRouter = Router();
const sessionsController = new SessionsController();
sessionsRouter
.post('/', celebrate({
[Segments.BODY]:{
    email:  Joi.string().email().required(),
    password: Joi.string().required(),
}
}),
sessionsController.create)

export default sessionsRouter
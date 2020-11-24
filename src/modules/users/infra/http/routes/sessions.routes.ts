//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';
import SessionsController from '../controllers/SessionsController'

const sessionsRouter = Router();
const sessionsController = new SessionsController();
sessionsRouter
.post('/', sessionsController.create)

export default sessionsRouter
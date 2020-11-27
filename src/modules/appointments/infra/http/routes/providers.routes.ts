//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta

import {request, response, Router} from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController()

providersRouter
.use(ensureAuthenticated)
.get('/', providersController.index)

export default providersRouter
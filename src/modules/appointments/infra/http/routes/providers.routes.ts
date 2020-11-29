//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta

import {Router} from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();

const providersController = new ProvidersController()
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController()
const providerDayAvailabilityController = new ProviderDayAvailabilityController()

providersRouter
.use(ensureAuthenticated)
.get('/', providersController.index)
.get('/:provider_id/month-availability', providerMonthAvailabilityController.index)
.get('/:provider_id/day-availability', providerDayAvailabilityController.index)

export default providersRouter
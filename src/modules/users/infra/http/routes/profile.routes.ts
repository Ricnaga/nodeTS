//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import ProfileController from '../controllers/ProfileController'

const profileRouter = Router();
const profileController = new ProfileController()

profileRouter
.use(ensureAuthenticated)
.get('/', profileController.show)
.put('/', profileController.update)

export default profileRouter
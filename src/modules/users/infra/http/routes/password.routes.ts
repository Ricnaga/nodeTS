//Uma rota deve receber a requisição, chamar outro arquivo e devolver uma reposta
import {Router} from 'express';
import { celebrate, Segments, Joi } from "celebrate";

import ForgotPasswordController from '../controllers/ForgotPasswordController'
import ResetPasswordController from '../controllers/ResetPasswordController'

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter
.post('/forgot', celebrate({
    [Segments.BODY]:{
        email: Joi.string().email().required(),
    }
}), forgotPasswordController.create)
.post('/reset', celebrate({
    [Segments.BODY]:{
        token: Joi.string().uuid().required(),
        password: Joi.string().required(),
        password_confirmation:Joi.string().required().valid(Joi.ref('password'))
    }
}),
resetPasswordController.create)

export default passwordRouter
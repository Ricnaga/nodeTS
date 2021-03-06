import express, {Request , Response, NextFunction} from 'express';
import cors from 'cors';
import 'express-async-errors';
import 'reflect-metadata'
import 'dotenv/config'
import { errors } from 'celebrate';

import uploadConfig from '@config/upload'
import AppError from '@shared/errors/AppError'
import '@shared/infra/typeorm';
import '@shared/container';
import routes from './routes';
import rateLimiter from './middlewares/rateLimiter'

const app = express();

app
.use(rateLimiter)
.use(cors())
.use(express.json())
.use('/files', express.static(uploadConfig.uploadsFolder))
.use(routes)
.use(errors())

.use((
    err: Error,
    request: Request, 
    response: Response, 
    _: NextFunction
    ) => {
        if(err instanceof AppError){
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            })
        }
        
        console.error(err)

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        })
})

.listen(3333, () => {
    console.log('👀 Server localhost:3333 is being watched !!')
})
import 'reflect-metadata'
import express, {Request , Response, NextFunction} from 'express';
import 'express-async-errors';

import routes from './routes';
import './database';
import uploadConfig from './config/upload'
import AppError from './errors/AppError'

const app = express();

app
.use(express.json())
.use('/files', express.static(uploadConfig.directory))
.use(routes)

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
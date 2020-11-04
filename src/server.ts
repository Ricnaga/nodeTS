import express from 'express';
import routes from './routes';
import './database';

const app = express();

app
.use(express.json())
.use(routes)
.listen(3333, () => {
    console.log('👀 Server localhost:3333 is being watched !!')
})
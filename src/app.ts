import express from 'express';
import appConfig from './config/config';
import { router } from './routes';

const app = express();

appConfig(app);


export { app };
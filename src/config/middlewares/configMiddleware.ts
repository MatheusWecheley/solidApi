import express, { Express } from 'express';

import cors from 'cors';
import { router } from '../../routes';
import errorsHandle from './errors';

export default function appMiddlewares(app: Express): void {
   app.use(cors());
   app.use(express.json());
   app.use(router);
   errorsHandle(app);
}
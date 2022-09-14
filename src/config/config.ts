import { Express } from 'express';

import appMiddlewares from './middlewares/configMiddleware';
import 'dotenv/config';

export default function appConfig(app: Express): void {
   appMiddlewares(app);
}


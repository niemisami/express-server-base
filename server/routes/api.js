import { Router } from 'express';
import Debug from 'debug';
import authRoutes from './auth';
import appRoutes from './appRoutes';

const apiRouter = new Router();
// Debug messages are visible only if process.env.DEBUG matches string passed as argument to Degub(...)
// UNCOMMENT ME FOR DEBUGGING
// const log = Debug('your-app-name');

// Example creating authentication for all API calls
// apiRouter.all('/api/*', requireAuthentication);

apiRouter.use('/api', appRoutes);

export default apiRouter;

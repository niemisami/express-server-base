import { Router } from 'express';
import Debug from 'debug';
import config from '../config';
import { middleware as cache } from 'apicache';
import { containsKeys, sendErrorToClient } from '../lib/utils';
import { simpleService } from '../services/services';

const router = new Router();

// Cache api results for 1 minute. Increase the option on development
// Use Varnish on production server
if (config.isProd) {
  if (Number.isInteger(config.cacheDuration)) {
    router.use(cache('1 minute'));
  }

}

router.get('/test', (req, res) => {
  sendResultToClient(res, simpleService.testService);
});


export default router;

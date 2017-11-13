import express from 'express';
import cors from 'cors';
import Debug from 'debug';
import bodyparser from 'body-parser';
import compress from 'compression';

// Authentication
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import config from './config';
import api from './routes/api';


/**
 * SERVER INITIALIZATION
 * */
const app = express();
const port = config.port || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'production') {
  app.use(compress());
} else {
  // Allow other sources to access api
  app.use(cors());
}

app.use(helmet());
// Passport is configured in services/auth
app.use(passport.initialize());

/**
 * Routes
 */
app.use(api);

app.get('/', (req, res) => {
  res.status(200).send({ message: 'ok' });
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening port', port);
  }
});

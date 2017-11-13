import express from 'express';
import cors from 'cors';
import Debug from 'debug';
import bodyparser from 'body-parser';
import compress from 'compression';

import { createServer } from 'http';
import SocketIo from 'socket.io';

// Authentication
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import path from 'path'

import config from './config';
import api from './routes/api';
import setupSocket from './socket';
/**
 * SERVER INITIALIZATION
 * */
const app = express();
const port = config.port || 3000;

// Socket setup
const server = createServer(app);
const io = new SocketIo(server);
// Socket functions 
setupSocket(io);


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
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'shared', 'index.html'));
});

server.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening port', port);
  }
});

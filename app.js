import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import router from './routes/routes.js';

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(router);

// register custom error handling middleware
app.use(
  (err, req, res, next) => {
    res.status(err.status).send(err.message);
  }
);


export default app;
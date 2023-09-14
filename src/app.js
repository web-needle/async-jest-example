import express from 'express';
import router from './routes/routes.js';
import interceptors from './middlewares.js';

const app = express();

// Middlewares
for(let middleware of interceptors.middlewares) {
  app.use(middleware);
}

app.use(router);

// Custom error handling
for(let error_handler of interceptors.error_handlers) {
  app.use(error_handler);
}

export default app;

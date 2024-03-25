// [START app]
import app from './app.js';
import startServer from './server.js';

const PORT = process.env.PORT || 3001;

startServer(app, PORT);
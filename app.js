import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
let users = [];

app.get('/', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    users.push(req.body);
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    const userById = users.find(user => user.id === req.params.id);
    if(userById) {
        res.send(userById)
    } else {
        res.status(400).send({
            message: 'No user found with given ID'
        })
    }
})

app.put('/user/:id', (req, res) => {
    const userByIdIndex = users.findIndex(user => user.id === req.params.id);
    if(userByIdIndex !== -1) {
        const userById = { ...users[userByIdIndex], ...req.body }
        users[userByIdIndex] = userById;
        res.send(users[userByIdIndex])
    } else {
        res.status(400).send({
             message: 'No user found with given ID'
        })
    }
})

// register custom error handling middleware
app.use(
  (err, req, res, next) => {
    res.status(err.status).send(err.message);
  }
);


export default app;
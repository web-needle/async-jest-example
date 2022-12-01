import express from 'express';
import users from '../database.js';

let router = express.Router();

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/user', (req, res) => {
    users.push(req.body);
    res.send(users)
})

router.get('/user/:id', (req, res) => {
    const userById = users.find(user => user.id === req.params.id);
    
    if(userById) {
        res.send(userById)
    } else {
        res.status(400).send({
            message: 'No user found with given ID'
        })
    }
})

router.put('/user/:id', (req, res) => {
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

export default router;
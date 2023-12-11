import users from '../database.js';

export let get_users_controller = async (req, res) => {
    res.send(users);
}

export let post_user_controller = async (req, res) => {
    users.push(req.body);
    res.send(users)
}

export let get_user_by_id_controller = async (req, res) => {
    const userById = users.find(user => user.id === req.params.id);

    if(userById) {
        res.send(userById)
    } else {
        res.status(400).send({
            message: 'No user found with given ID'
        })
    }
}

export let put_user_by_id_controller = async (req, res) => {
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
}
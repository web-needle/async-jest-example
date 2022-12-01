import users from '../database.js';

const new_user =  { 
    id: "1", 
    name: "Username", 
    login: "username"
};

const inexistent_update_user = { 
    id: "1", 
    name: "Username1", 
    login: "Username1"
}

const existent_update_user = { 
    id: "42", 
    name: "Username24", 
    login: "Username24"
}

export const fixtures = {
    new_user: new_user,
    inexistent_update_user: inexistent_update_user,
    existent_update_user: existent_update_user
}

import express from 'express';
import {
    get_users_controller,
    post_user_controller,
    get_user_by_id_controller,
    put_user_by_id_controller
} from './controllers.js';

let router = express.Router();

router.get('/users', get_users_controller)
router.post('/users', post_user_controller)
router.get('/users/:id', get_user_by_id_controller)
router.put('/users/:id', put_user_by_id_controller)

export default router;

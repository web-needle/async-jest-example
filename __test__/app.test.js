import request from 'supertest';
import app from '../app.js';

describe('Api testing', () => {
    const user =  { id: "1", name: "Username", login: "user"};
    
    it('Get all users', async () => {
        const expectedResponse = []
        
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)       
    })

    it('Create a user', async () => {
        const expectedResponse = [
            user
        ]

        const response = await request(app)
                                    .post('/user')
                                    .send(user);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)
    })

    it('Get user record by id', async () => {
        const expectedResponse = {
            ...user
        }

        const response = await request(app).get('/user/1')
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)

    })
    it('Update a user record', async () => {
        const updateUser = {
            name: 'Updated name'
        }
        
        const expectedResponse = {
            ...user, ...updateUser
        }

        const response = await request(app).put('/user/1').send(updateUser)
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)
    })

    it('Get user record which does not exists', async () => {
        const expectedResponse = {
            message: 'No user found with given ID'
        }

        const response = await request(app).get('/user/2')
        
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual(expectedResponse)
    })
})
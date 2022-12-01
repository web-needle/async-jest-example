import request from 'supertest';
import app from '../app.js';
import { errorHandler } from '../middlewares.js';
import users from '../database.js';

describe('API testing', () => {
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

    /**
     * Mocked Express Request object.
     */
    let req

    /**
     * Mocked Express Response object.
     */
    let res

    /**
     * Mocked Express Next function.
     */
    const next = jest.fn()
    
    /**
     * Reset the `req` and `res` object before each test is ran.
     */
    beforeEach(() => {
        req = {
          params: {},
          body: {}
        }

        res = {
          data: null,
          code: null,
          status (status) {
            this.code = status
            return this
          },
          send (payload) {
            this.data = payload
          }
        }

        next.mockClear()
    })

    it('Get all users', async () => {
        const expectedResponse = users;
        
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)       
    })

    it('Create a user', async () => {
        const expectedResponse = [
            ...users, new_user
        ]

        const response = await request(app).post('/user').send(new_user);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)
    })

    it('Get user record by id', async () => {
        const expectedResponse = users[0]

        const response = await request(app).get('/user/42')
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)

    })

    it('Update an existent user record', async () => {
        const expectedResponse = existent_update_user

        const response = await request(app)
                                .put('/user/42')
                                .send(existent_update_user)
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedResponse)
    })

    it('Update an inexistent user record', async () => {
        const expectedResponse = {
            message: 'No user found with given ID'
        }

        const response = await request(app)
                                .put('/user/2')
                                .send(inexistent_update_user);
        
        expect(response.statusCode).toBe(400);
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

    it('Should handle error', () => {
        errorHandler(
            {
                status: 500,
                message: 'Fire!'
            }, req, res, next
        )

        expect(res.code).toBeDefined()
        expect(res.code).toBe(500)

        expect(res.data).toBeDefined()
        expect(res.data).toBe('Fire!')
    })
})
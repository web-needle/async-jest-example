const request = require('supertest');

describe('Api testing', () => {
    const user =  { id: "1", name: "Username", login: "user"};
    
    let server;
    beforeEach(() => {
      server = require('./app.js');
    });
    afterEach(() => {
      server.close();
    });

    it('Get all users', (done) => {
        const expectedResponse = []
        request(server)
        .get('/')
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    })
    it('Create a user', (done) => {
        const expectedResponse = [
            user
        ]
        request(server)
        .post('/user')
        .send(user)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    })
    it('Get user record by id', (done) => {
        const expectedResponse = {
            ...user
        }
        request(server)
        .get('/user/1')
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    })
    it('Update a user record', (done) => {
        const updateUser = {
            name: 'Updated name'
        }
        const expectedResponse = {
            ...user, ...updateUser
        }
        request(server)
        .put('/user/1')
        .send(updateUser)
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    })
    it('Get user record which does not exists', (done) => {
        const expectedResponse = {
            message: 'No user found with given ID'
        }
        request(server)
        .get('/user/2')
        .expect(400)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    })
})
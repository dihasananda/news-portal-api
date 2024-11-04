const request = require('supertest');
const app = require('../app');
const { User } = require('../models');

beforeAll(async () => {
    await User.destroy({ where: {} });
});

describe('Authentication Endpoints', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/auth/register')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('user');
    });

    it('should log in an existing user', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({
                email: 'testuser@example.com',
                password: 'password123'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});

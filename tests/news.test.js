const request = require('supertest');
const app = require('../app');
let token;

beforeAll(async () => {
    const res = await request(app)
        .post('/auth/login')
        .send({
            email: 'testuser@example.com',
            password: 'password123'
        });
    token = res.body.token;
});

describe('News Endpoints', () => {
    let newsId;

    it('should create a new news article', async () => {
        const res = await request(app)
            .post('/news')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Test News',
                content: 'This is a test news article',
                categoryId: 1
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        newsId = res.body.id;
    });

    it('should get a list of news articles', async () => {
        const res = await request(app).get('/news');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should get a news article by ID', async () => {
        const res = await request(app).get(`/news/${newsId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', newsId);
    });

    it('should update a news article', async () => {
        const res = await request(app)
            .put(`/news/${newsId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Updated Test News',
                content: 'Updated content',
                categoryId: 1
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toBe('Updated Test News');
    });

    it('should delete a news article', async () => {
        const res = await request(app)
            .delete(`/news/${newsId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    });
});

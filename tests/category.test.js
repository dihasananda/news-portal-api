describe('Category Endpoints', () => {
    let categoryId;

    it('should create a new category', async () => {
        const res = await request(app)
            .post('/categories')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Test Category'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        categoryId = res.body.id;
    });

    it('should get a list of categories', async () => {
        const res = await request(app).get('/categories');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should update a category', async () => {
        const res = await request(app)
            .put(`/categories/${categoryId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Updated Test Category'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('Updated Test Category');
    });

    it('should delete a category', async () => {
        const res = await request(app)
            .delete(`/categories/${categoryId}`)
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    });
});

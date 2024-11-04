const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'News Portal API',
            version: '1.0.0',
            description: 'API for a simple news portal with CRUD operations and user authentication.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            schemas: {
                News: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer', description: 'ID of the news article' },
                        title: { type: 'string', description: 'Title of the news article' },
                        content: { type: 'string', description: 'Content of the news article' },
                        publishedAt: { type: 'string', format: 'date-time', description: 'Publication date' },
                        categoryId: { type: 'integer', description: 'ID of the category' },
                    },
                },
                NewsInput: {
                    type: 'object',
                    properties: {
                        title: { type: 'string', description: 'Title of the news article' },
                        content: { type: 'string', description: 'Content of the news article' },
                        categoryId: { type: 'integer', description: 'ID of the category' },
                    },
                },
                Category: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer', description: 'ID of the category' },
                        name: { type: 'string', description: 'Name of the category' },
                    },
                },
                CategoryInput: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', description: 'Name of the category' },
                    },
                },
                UserLogin: {
                    type: 'object',
                    properties: {
                        username: { type: 'string', description: 'username of user' },
                        email: { type: 'string', description: 'email of user' },
                        password: { type: 'string', description: 'password of user' },
                        role: { type: 'string', description: 'role of user' },
                    },
                },
                UserRegister: {
                    type: 'object',
                    properties: {
                        email: { type: 'string', description: 'email of user' },
                        password: { type: 'string', description: 'password of user' },
                    },
                },
            },
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

module.exports = swaggerJsDoc(swaggerOptions);
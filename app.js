const express = require('express');
const sequelize = require('./config/database');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Import rute
const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const swaggerDocs = require('./docs/swagger-docs')

app.use('/auth', authRoutes);
app.use('/news', newsRoutes);
app.use('/categories', categoryRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



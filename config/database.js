const { Sequelize } = require('sequelize');

require('dotenv').config();

// Ganti dengan informasi database kamu
const sequelize = new Sequelize(process.env.PG_URI);

module.exports = sequelize;
